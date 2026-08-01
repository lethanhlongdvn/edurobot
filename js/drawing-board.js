class DrawingBoard {
  constructor(canvasId, containerId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.container = document.getElementById(containerId);
    
    this.objects = []; // Danh sách tất cả các đối tượng vẽ trên canvas
    this.undoStack = [];
    this.redoStack = [];
    
    // Trạng thái hiện tại
    this.currentTool = 'pencil'; // 'select', 'eraser', 'pencil', 'highlight', 'rect', 'circle', 'line', 'text'
    this.currentColor = '#ef4444'; // Mặc định màu đỏ theo yêu cầu
    this.currentThickness = 4;
    
    // Trạng thái thao tác chuột/touch
    this.isDrawing = false;
    this.startPoint = { x: 0, y: 0 };
    this.currentPoint = { x: 0, y: 0 }; // Lưu tọa độ rê chuột hiện thời
    this.currentDrawingPoints = [];
    this.selectedObject = null;
    this.dragOffset = { x: 0, y: 0 };
    
    // Tự động resize canvas theo container
    this.initCanvasSize();
    window.addEventListener('resize', () => this.initCanvasSize());
    
    // Đăng ký sự kiện
    this.initEvents();
  }
  
  initCanvasSize() {
    const rect = this.container.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
    this.redraw();
  }
  
  initEvents() {
    const getCoords = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };
    
    const handleStart = (e) => {
      const coords = getCoords(e);
      this.startPoint = coords;
      this.currentPoint = coords;
      this.isDrawing = true;
      
      if (this.currentTool === 'select') {
        this.selectedObject = this.hitTest(coords);
        if (this.selectedObject) {
          // Tính khoảng cách lệch để drag
          if (this.selectedObject.type === 'text' || this.selectedObject.type === 'rect' || this.selectedObject.type === 'circle') {
            this.dragOffset = {
              x: coords.x - this.selectedObject.x,
              y: coords.y - this.selectedObject.y
            };
          } else {
            // Đối với line hoặc nét vẽ tự do
            this.dragOffset = { x: coords.x, y: coords.y };
          }
        }
      } else if (this.currentTool === 'eraser') {
        const hit = this.hitTest(coords);
        if (hit) {
          this.deleteObject(hit);
        }
      } else if (this.currentTool === 'pencil' || this.currentTool === 'highlight') {
        this.currentDrawingPoints = [coords];
      } else if (this.currentTool === 'text') {
        this.createTextPopup(coords);
        this.isDrawing = false;
      }
    };
    
    const handleMove = (e) => {
      if (!this.isDrawing) return;
      const coords = getCoords(e);
      this.currentPoint = coords; // Luôn cập nhật tọa độ hiện tại
      
      if (this.currentTool === 'select' && this.selectedObject) {
        // Di chuyển đối tượng
        if (this.selectedObject.type === 'text' || this.selectedObject.type === 'rect' || this.selectedObject.type === 'circle') {
          this.selectedObject.x = coords.x - this.dragOffset.x;
          this.selectedObject.y = coords.y - this.dragOffset.y;
        } else if (this.selectedObject.type === 'line') {
          const dx = coords.x - this.dragOffset.x;
          const dy = coords.y - this.dragOffset.y;
          this.selectedObject.x1 += dx;
          this.selectedObject.y1 += dy;
          this.selectedObject.x2 += dx;
          this.selectedObject.y2 += dy;
          this.dragOffset = { x: coords.x, y: coords.y };
        } else if (this.selectedObject.type === 'pencil' || this.selectedObject.type === 'highlight') {
          const dx = coords.x - this.dragOffset.x;
          const dy = coords.y - this.dragOffset.y;
          this.selectedObject.points.forEach(p => {
            p.x += dx;
            p.y += dy;
          });
          this.dragOffset = { x: coords.x, y: coords.y };
        }
        this.redraw();
      } else if (this.currentTool === 'pencil' || this.currentTool === 'highlight') {
        this.currentDrawingPoints.push(coords);
        this.drawTempFreehand();
      } else if (this.currentTool === 'rect' || this.currentTool === 'circle' || this.currentTool === 'line') {
        this.redraw();
        this.drawTempShape(coords);
      }
    };
    
    const handleEnd = (e) => {
      if (!this.isDrawing) return;
      this.isDrawing = false;
      
      const coords = this.currentPoint; // Dùng điểm kết thúc thực tế đã lưu
        
      if (this.currentTool === 'pencil' || this.currentTool === 'highlight') {
        if (this.currentDrawingPoints.length > 1) {
          const smoothPoints = this.smoothPoints(this.currentDrawingPoints);
          this.addObject({
            id: this.generateId(),
            type: this.currentTool,
            points: smoothPoints,
            color: this.currentColor,
            thickness: this.currentThickness,
            isHighlighter: this.currentTool === 'highlight'
          });
        }
      } else if (this.currentTool === 'rect') {
        this.addObject({
          id: this.generateId(),
          type: 'rect',
          x: Math.min(this.startPoint.x, coords.x),
          y: Math.min(this.startPoint.y, coords.y),
          width: Math.abs(coords.x - this.startPoint.x),
          height: Math.abs(coords.y - this.startPoint.y),
          color: this.currentColor,
          thickness: this.currentThickness
        });
      } else if (this.currentTool === 'circle') {
        const radius = Math.sqrt(Math.pow(coords.x - this.startPoint.x, 2) + Math.pow(coords.y - this.startPoint.y, 2));
        this.addObject({
          id: this.generateId(),
          type: 'circle',
          x: this.startPoint.x,
          y: this.startPoint.y,
          radius: radius,
          color: this.currentColor,
          thickness: this.currentThickness
        });
      } else if (this.currentTool === 'line') {
        this.addObject({
          id: this.generateId(),
          type: 'line',
          x1: this.startPoint.x,
          y1: this.startPoint.y,
          x2: coords.x,
          y2: coords.y,
          color: this.currentColor,
          thickness: this.currentThickness
        });
      } else if (this.currentTool === 'select' && this.selectedObject) {
        this.saveState();
      }
      
      this.currentDrawingPoints = [];
      this.redraw();
    };
    
    // Chuột
    this.canvas.addEventListener('mousedown', handleStart);
    this.canvas.addEventListener('mousemove', handleMove);
    this.canvas.addEventListener('mouseup', handleEnd);
    
    // Cảm ứng (Touch)
    this.canvas.addEventListener('touchstart', (e) => {
      const coords = getCoords(e);
      const hit = this.hitTest(coords);
      if (this.currentTool !== 'select' || hit) {
        e.preventDefault();
      }
      handleStart(e);
    }, { passive: false });

    this.canvas.addEventListener('touchmove', (e) => {
      if (this.isDrawing) {
        if (this.currentTool !== 'select' || this.selectedObject) {
          e.preventDefault();
        }
      }
      handleMove(e);
    }, { passive: false });

    this.canvas.addEventListener('touchend', (e) => {
      handleEnd(e);
    });
  }
  
  // Thuật toán làm mịn đường nét vẽ tự do
  smoothPoints(points) {
    if (points.length < 3) return points;
    const smoothed = [];
    smoothed.push(points[0]);
    
    for (let i = 1; i < points.length - 1; i++) {
      const xc = (points[i].x + points[i + 1].x) / 2;
      const yc = (points[i].y + points[i + 1].y) / 2;
      smoothed.push({ x: xc, y: yc });
    }
    
    smoothed.push(points[points.length - 1]);
    return smoothed;
  }
  
  // Vẽ tạm thời đường tự do lúc rê chuột
  drawTempFreehand() {
    this.redraw();
    if (this.currentDrawingPoints.length < 2) return;
    
    this.ctx.save();
    this.ctx.strokeStyle = this.currentColor;
    this.ctx.lineWidth = this.currentThickness;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    
    if (this.currentTool === 'highlight') {
      this.ctx.globalAlpha = 0.4;
      this.ctx.lineWidth = this.currentThickness * 3; // Nét to hơn cho bút dạ quang
    }
    
    this.ctx.beginPath();
    this.ctx.moveTo(this.currentDrawingPoints[0].x, this.currentDrawingPoints[0].y);
    
    for (let i = 1; i < this.currentDrawingPoints.length - 1; i++) {
      const xc = (this.currentDrawingPoints[i].x + this.currentDrawingPoints[i+1].x) / 2;
      const yc = (this.currentDrawingPoints[i].y + this.currentDrawingPoints[i+1].y) / 2;
      this.ctx.quadraticCurveTo(this.currentDrawingPoints[i].x, this.currentDrawingPoints[i].y, xc, yc);
    }
    
    this.ctx.lineTo(
      this.currentDrawingPoints[this.currentDrawingPoints.length - 1].x,
      this.currentDrawingPoints[this.currentDrawingPoints.length - 1].y
    );
    this.ctx.stroke();
    this.ctx.restore();
  }
  
  // Vẽ tạm thời hình khối lúc rê chuột
  drawTempShape(coords) {
    this.ctx.save();
    this.ctx.strokeStyle = this.currentColor;
    this.ctx.lineWidth = this.currentThickness;
    this.ctx.setLineDash([6, 6]); // Nét đứt khi đang vẽ nháp
    
    this.ctx.beginPath();
    if (this.currentTool === 'rect') {
      const x = Math.min(this.startPoint.x, coords.x);
      const y = Math.min(this.startPoint.y, coords.y);
      const w = Math.abs(coords.x - this.startPoint.x);
      const h = Math.abs(coords.y - this.startPoint.y);
      this.ctx.strokeRect(x, y, w, h);
    } else if (this.currentTool === 'circle') {
      const radius = Math.sqrt(Math.pow(coords.x - this.startPoint.x, 2) + Math.pow(coords.y - this.startPoint.y, 2));
      this.ctx.arc(this.startPoint.x, this.startPoint.y, radius, 0, Math.PI * 2);
      this.ctx.stroke();
    } else if (this.currentTool === 'line') {
      this.ctx.moveTo(this.startPoint.x, this.startPoint.y);
      this.ctx.lineTo(coords.x, coords.y);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }
  
  // Vẽ lại toàn bộ Canvas từ danh sách đối tượng
  redraw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Vẽ lưới phụ (Grid) nếu cần để tạo cảm giác bảng vẽ học sinh chuyên nghiệp
    this.drawGrid();
    
    this.objects.forEach(obj => {
      this.ctx.save();
      this.ctx.strokeStyle = obj.color;
      this.ctx.lineWidth = obj.thickness;
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
      
      // Vẽ viền nét đứt nhẹ màu xanh xung quanh đối tượng đang chọn
      const isSelected = this.selectedObject && this.selectedObject.id === obj.id;
      
      if (obj.type === 'pencil' || obj.type === 'highlight') {
        if (obj.isHighlighter) {
          this.ctx.globalAlpha = 0.4;
          this.ctx.lineWidth = obj.thickness * 3;
        }
        this.ctx.beginPath();
        if (obj.points.length > 0) {
          this.ctx.moveTo(obj.points[0].x, obj.points[0].y);
          for (let i = 1; i < obj.points.length - 1; i++) {
            const xc = (obj.points[i].x + obj.points[i+1].x) / 2;
            const yc = (obj.points[i].y + obj.points[i+1].y) / 2;
            this.ctx.quadraticCurveTo(obj.points[i].x, obj.points[i].y, xc, yc);
          }
          if (obj.points.length > 1) {
            this.ctx.lineTo(obj.points[obj.points.length - 1].x, obj.points[obj.points.length - 1].y);
          }
        }
        this.ctx.stroke();
        
        if (isSelected) {
          this.drawBoundingOutline(this.getFreehandBounds(obj.points));
        }
      } else if (obj.type === 'rect') {
        this.ctx.beginPath();
        this.ctx.rect(obj.x, obj.y, obj.width, obj.height);
        this.ctx.stroke();
        
        if (isSelected) {
          this.drawBoundingOutline({ x: obj.x, y: obj.y, width: obj.width, height: obj.height });
        }
      } else if (obj.type === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
        this.ctx.stroke();
        
        if (isSelected) {
          this.drawBoundingOutline({
            x: obj.x - obj.radius,
            y: obj.y - obj.radius,
            width: obj.radius * 2,
            height: obj.radius * 2
          });
        }
      } else if (obj.type === 'line') {
        this.ctx.beginPath();
        this.ctx.moveTo(obj.x1, obj.y1);
        this.ctx.lineTo(obj.x2, obj.y2);
        this.ctx.stroke();
        
        if (isSelected) {
          this.drawBoundingOutline({
            x: Math.min(obj.x1, obj.x2),
            y: Math.min(obj.y1, obj.y2),
            width: Math.abs(obj.x2 - obj.x1),
            height: Math.abs(obj.y2 - obj.y1)
          });
        }
      } else if (obj.type === 'text') {
        this.ctx.font = '20px Outfit, Inter, sans-serif';
        this.ctx.textBaseline = 'top';
        this.ctx.fillStyle = obj.color;
        this.ctx.fillText(obj.text, obj.x, obj.y);
        
        if (isSelected) {
          const metrics = this.ctx.measureText(obj.text);
          this.drawBoundingOutline({
            x: obj.x - 4,
            y: obj.y - 4,
            width: metrics.width + 8,
            height: 28
          });
        }
      }
      this.ctx.restore();
    });
  }
  
  drawGrid() {
    this.ctx.save();
    this.ctx.strokeStyle = '#f1f5f9';
    this.ctx.lineWidth = 1;
    const gridSize = 40;
    
    for (let x = 0; x < this.canvas.width; x += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.canvas.height);
      this.ctx.stroke();
    }
    
    for (let y = 0; y < this.canvas.height; y += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.canvas.width, y);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }
  
  drawBoundingOutline(rect) {
    this.ctx.save();
    this.ctx.strokeStyle = '#2563eb';
    this.ctx.lineWidth = 1.5;
    this.ctx.setLineDash([4, 4]);
    this.ctx.strokeRect(rect.x - 2, rect.y - 2, rect.width + 4, rect.height + 4);
    
    // Vẽ điểm neo góc nhỏ để chỉ báo đối tượng được chọn
    this.ctx.fillStyle = '#2563eb';
    this.ctx.fillRect(rect.x - 5, rect.y - 5, 6, 6);
    this.ctx.fillRect(rect.x + rect.width - 1, rect.y - 5, 6, 6);
    this.ctx.fillRect(rect.x - 5, rect.y + rect.height - 1, 6, 6);
    this.ctx.fillRect(rect.x + rect.width - 1, rect.y + rect.height - 1, 6, 6);
    this.ctx.restore();
  }
  
  getFreehandBounds(points) {
    if (points.length === 0) return { x: 0, y: 0, width: 0, height: 0 };
    let minX = points[0].x, maxX = points[0].x;
    let minY = points[0].y, maxY = points[0].y;
    points.forEach(p => {
      if (p.x < minX) minX = p.x;
      if (p.x > maxX) maxX = p.x;
      if (p.y < minY) minY = p.y;
      if (p.y > maxY) maxY = p.y;
    });
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  
  // Hit-testing để chọn đối tượng
  hitTest(point) {
    // Duyệt ngược từ cuối danh sách lên đầu để ưu tiên các hình vẽ đè lên trên
    for (let i = this.objects.length - 1; i >= 0; i--) {
      const obj = this.objects[i];
      if (obj.type === 'rect') {
        if (point.x >= obj.x && point.x <= obj.x + obj.width &&
            point.y >= obj.y && point.y <= obj.y + obj.height) {
          return obj;
        }
      } else if (obj.type === 'circle') {
        const dist = Math.sqrt(Math.pow(point.x - obj.x, 2) + Math.pow(point.y - obj.y, 2));
        if (dist <= obj.radius + 8) return obj;
      } else if (obj.type === 'line') {
        if (this.isPointNearLine(point, { x: obj.x1, y: obj.y1 }, { x: obj.x2, y: obj.y2 })) {
          return obj;
        }
      } else if (obj.type === 'text') {
        this.ctx.save();
        this.ctx.font = '20px Outfit, Inter, sans-serif';
        const metrics = this.ctx.measureText(obj.text);
        this.ctx.restore();
        if (point.x >= obj.x - 4 && point.x <= obj.x + metrics.width + 4 &&
            point.y >= obj.y - 4 && point.y <= obj.y + 28) {
          return obj;
        }
      } else if (obj.type === 'pencil' || obj.type === 'highlight') {
        for (let j = 0; j < obj.points.length - 1; j++) {
          if (this.isPointNearLine(point, obj.points[j], obj.points[j+1], obj.thickness + 6)) {
            return obj;
          }
        }
      }
    }
    return null;
  }
  
  isPointNearLine(p, a, b, tolerance = 10) {
    const l2 = Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
    if (l2 === 0) return Math.sqrt(Math.pow(p.x - a.x, 2) + Math.pow(p.y - a.y, 2)) < tolerance;
    let t = ((p.x - a.x) * (b.x - a.x) + (p.y - a.y) * (b.y - a.y)) / l2;
    t = Math.max(0, Math.min(1, t));
    const projection = {
      x: a.x + t * (b.x - a.x),
      y: a.y + t * (b.y - a.y)
    };
    const dist = Math.sqrt(Math.pow(p.x - projection.x, 2) + Math.pow(p.y - projection.y, 2));
    return dist < tolerance;
  }
  
  // Tạo ô nhập liệu Text
  createTextPopup(coords) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'canvas-text-input';
    input.style.left = `${coords.x}px`;
    input.style.top = `${coords.y}px`;
    input.style.color = this.currentColor;
    
    // Ngăn sự kiện click lan truyền ra ngoài làm mất focus
    input.addEventListener('mousedown', (e) => e.stopPropagation());
    input.addEventListener('touchstart', (e) => e.stopPropagation());
    
    this.container.appendChild(input);
    
    // Trì hoãn focus một chút để tránh xung đột chuỗi sự kiện click/mouseup trên canvas
    setTimeout(() => {
      input.focus();
    }, 50);
    
    const commitText = () => {
      const textVal = input.value.trim();
      if (textVal) {
        this.addObject({
          id: this.generateId(),
          type: 'text',
          x: coords.x,
          y: coords.y,
          text: textVal,
          color: this.currentColor
        });
      }
      if (input.parentNode) {
        input.parentNode.removeChild(input);
      }
    };
    
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        commitText();
      } else if (e.key === 'Escape') {
        if (input.parentNode) input.parentNode.removeChild(input);
      }
    });
    
    input.addEventListener('blur', commitText);
  }
  
  // Quản lý Stack Vẽ
  addObject(obj) {
    this.objects.push(obj);
    this.saveState();
    this.redraw();
  }
  
  deleteObject(obj) {
    this.objects = this.objects.filter(o => o.id !== obj.id);
    if (this.selectedObject && this.selectedObject.id === obj.id) {
      this.selectedObject = null;
    }
    this.saveState();
    this.redraw();
  }
  
  saveState() {
    this.undoStack.push(JSON.stringify(this.objects));
    this.redoStack = []; // Reset Redo khi có hành động mới
  }
  
  undo() {
    if (this.undoStack.length > 1) {
      const current = this.undoStack.pop();
      this.redoStack.push(current);
      const previous = this.undoStack[this.undoStack.length - 1];
      this.objects = JSON.parse(previous);
      this.selectedObject = null;
      this.redraw();
    } else if (this.undoStack.length === 1) {
      this.redoStack.push(this.undoStack.pop());
      this.objects = [];
      this.selectedObject = null;
      this.redraw();
    }
  }
  
  redo() {
    if (this.redoStack.length > 0) {
      const nextState = this.redoStack.pop();
      this.undoStack.push(nextState);
      this.objects = JSON.parse(nextState);
      this.selectedObject = null;
      this.redraw();
    }
  }
  
  clearAll() {
    if (this.objects.length === 0) return;
    if (confirm('Bạn có chắc chắn muốn xóa toàn bộ nội dung vẽ không?')) {
      this.objects = [];
      this.selectedObject = null;
      this.saveState();
      this.redraw();
    }
  }
  
  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  
  setTool(tool) {
    this.currentTool = tool;
    if (tool !== 'select') {
      this.selectedObject = null;
    }
    this.redraw();
  }
}
