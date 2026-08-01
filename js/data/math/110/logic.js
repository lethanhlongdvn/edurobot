// ===================================================================
// Tiết 110 - Bài 46: Xăng-ti-mét khối. Đề-xi-mét khối (tiết 2)
// LOGIC: Chấm điểm bài giải bằng nút E và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '').replace(/,/g, '.');
};

// ==========================================
// BÀI 1: Phép tính số đo thể tích
// ==========================================
window.check_110_1 = () => {
    const vA1 = cleanString(document.getElementById('110-1-a1')?.value); // 20
    const vA2 = cleanString(document.getElementById('110-1-a2')?.value); // 73
    const vB1 = cleanString(document.getElementById('110-1-b1')?.value); // 64
    const vB2 = cleanString(document.getElementById('110-1-b2')?.value); // 100

    const isCorrect = (vA1 === '20') && (vA2 === '73') && (vB1 === '64') && (vB2 === '100');

    const rightAnswer = "a) 20 cm³; 73 dm³; b) 64 dm³; 100 cm³";
    const studentAnswer = `a) ${vA1 || '?'} cm³; ${vA2 || '?'} dm³; b) ${vB1 || '?'} dm³; ${vB2 || '?'} cm³`;

    const guidance = "Em hãy thực hiện các phép tính cộng, trừ, nhân, chia với phần hệ số trước, sau đó viết thêm đơn vị đo thể tích tương ứng vào bên phải kết quả nhé!";
    const solution = "a) 12,5 cm³ + 7,5 cm³ = 20 cm³<br>100 dm³ − 27 dm³ = 73 dm³<br><br>b) 16 dm³ × 4 = 64 dm³<br>1 000 cm³ : 10 = 100 cm³<br>Chúc mừng em đã tính rất chính xác!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('110_1', score, 'btn-check-110-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Đổi đơn vị đo thể tích
// ==========================================
window.check_110_2 = () => {
    const vA = cleanString(document.getElementById('110-2-a')?.value); // 3900
    const vB = cleanString(document.getElementById('110-2-b')?.value); // 0.25

    const isCorrect = (vA === '3900' || vA === '3.900') && (vB === '0.25' || vB === '1/4');

    const rightAnswer = "a) 3 900 cm³; b) 0,25 dm³";
    const studentAnswer = `a) ${vA || '?'} cm³; b) ${vB || '?'} dm³`;

    const guidance = "Em hãy nhớ lại mối quan hệ giữa đề-xi-mét khối (dm³) và xăng-ti-mét khối (cm³):<br>• Đơn vị lớn đổi sang đơn vị nhỏ: Nhân số đó với 1 000.<br>• Đơn vị nhỏ đổi sang đơn vị lớn: Chia số đó cho 1 000 nhé!";
    const solution = "a) 3,9 dm³ = 3,9 × 1 000 = 3 900 cm³<br>b) 250 cm³ = 250 : 1 000 = 0,25 dm³<br>Chúc mừng em đã đổi đơn vị rất tốt!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('110_2', score, 'btn-check-110-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Chọn số đo thể tích phù hợp (Nối trên hình)
// ==========================================
window._item110Selected = null;
window._matches110 = {};

window.redrawLines110 = () => {
    const svg = document.getElementById('svg-lines-110');
    if (!svg) return;
    svg.innerHTML = '';
    
    const container = svg.parentElement;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    Object.keys(window._matches110).forEach(itemId => {
        const volVal = window._matches110[itemId];
        const volId = volVal === '216 dm3' ? 'vol-216' : (volVal === '3 cm3' ? 'vol-3' : 'vol-05');
        const itemEl = document.getElementById('item-' + itemId);
        const volEl = document.getElementById(volId);
        if (!itemEl || !volEl) return;

        const itemRect = itemEl.getBoundingClientRect();
        const volRect = volEl.getBoundingClientRect();

        const x1 = itemRect.left + itemRect.width / 2 - containerRect.left;
        const y1 = itemRect.top + itemRect.height / 2 - containerRect.top;
        const x2 = volRect.left + volRect.width / 2 - containerRect.left;
        const y2 = volRect.top + volRect.height / 2 - containerRect.top;

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', '#10b981');
        line.setAttribute('stroke-width', '4');
        line.setAttribute('stroke-dasharray', '8,4');
        line.setAttribute('stroke-linecap', 'round');
        line.style.filter = 'drop-shadow(1px 1px 1px rgba(0,0,0,0.2))';
        svg.appendChild(line);
    });
};

window.addEventListener('resize', window.redrawLines110);
document.addEventListener('click', () => {
    setTimeout(window.redrawLines110, 50);
});

window._selectedNode110 = null;

window.clickNode110 = (nodeId) => {
    console.log("clickNode110 called with:", nodeId);
    try {
        const isItem = nodeId.startsWith('item-');
        const isVol = nodeId.startsWith('vol-');
        
        // Check if node is already matched
        if (isItem) {
            const itemId = nodeId.replace('item-', '');
            if (window._matches110[itemId]) {
                console.log("Item already matched:", itemId);
                return;
            }
        } else if (isVol) {
            const volVal = nodeId === 'vol-216' ? '216 dm3' : (nodeId === 'vol-3' ? '3 cm3' : '0,5 dm3');
            if (Object.values(window._matches110).includes(volVal)) {
                console.log("Volume already matched:", volVal);
                return;
            }
        }
        
        if (!window._selectedNode110) {
            // First selection
            window._selectedNode110 = nodeId;
            const el = document.getElementById(nodeId);
            if (el) {
                el.classList.add('ring-4', 'ring-emerald-500', 'scale-105');
                console.log("First node selected:", nodeId);
            }
        } else {
            // Second selection
            const prevNode = window._selectedNode110;
            const prevIsItem = prevNode.startsWith('item-');
            
            if (prevIsItem === isItem) {
                // Cannot connect item-to-item or vol-to-vol. Switch selection.
                const prevEl = document.getElementById(prevNode);
                if (prevEl) prevEl.classList.remove('ring-4', 'ring-emerald-500', 'scale-105');
                
                window._selectedNode110 = nodeId;
                const curEl = document.getElementById(nodeId);
                if (curEl) curEl.classList.add('ring-4', 'ring-emerald-500', 'scale-105');
                console.log("Switched first selection to:", nodeId);
                return;
            }
            
            // Connect item to volume
            const itemNode = isItem ? nodeId : prevNode;
            const volNode = isItem ? prevNode : nodeId;
            
            const itemId = itemNode.replace('item-', '');
            const volVal = volNode === 'vol-216' ? '216 dm3' : (volNode === 'vol-3' ? '3 cm3' : '0,5 dm3');
            
            window._matches110[itemId] = volVal;
            console.log("Matched:", itemId, "->", volVal);
            
            const itemEl = document.getElementById(itemNode);
            const volEl = document.getElementById(volNode);
            if (itemEl) {
                itemEl.classList.remove('ring-4', 'ring-emerald-500', 'scale-105');
                itemEl.classList.add('opacity-60', 'pointer-events-none');
            }
            if (volEl) {
                volEl.classList.remove('ring-4', 'ring-emerald-500', 'scale-105');
                volEl.classList.add('opacity-60', 'pointer-events-none');
            }
            
            window.redrawLines110();
            window._selectedNode110 = null;
        }
    } catch (e) {
        console.error("Error in clickNode110:", e);
    }
};

window.check_110_3 = () => {
    const matches = window._matches110 || {};
    const v1 = matches['1'] || '';
    const v2 = matches['2'] || '';
    const v3 = matches['3'] || '';

    const isCorrect = (v1 === '216 dm3') && (v2 === '3 cm3') && (v3 === '0,5 dm3');

    const rightAnswer = "Loa thùng: 216 dm³; Cục tẩy: 3 cm³; Hộp bút: 0,5 dm³";
    const studentAnswer = `Loa thùng: ${v1 || '?'}; Cục tẩy: ${v2 || '?'}; Hộp bút: ${v3 || '?'}`;

    const guidance = "Em hãy so sánh kích thước thực tế của các đồ vật:<br>• Cục tẩy rất nhỏ $\\rightarrow$ ứng với thể tích nhỏ nhất 3 cm³.<br>• Hộp bút học sinh vừa phải $\\rightarrow$ ứng với 0,5 dm³ (500 cm³).<br>• Loa thùng lớn $\\rightarrow$ ứng với thể tích lớn nhất 216 dm³.";
    const solution = "Các số đo thể tích phù hợp với từng đồ vật là:<br>• Chiếc loa thùng lớn: 216 dm³<br>• Cục tẩy nhỏ: 3 cm³<br>• Hộp bút học sinh: 0,5 dm³<br>Chúc mừng em đã chọn đúng!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('110_3', score, 'btn-check-110-3', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 4: Rô-bốt đong nước làm đá
// ==========================================
window.check_110_4 = () => {
    const v = cleanString(document.getElementById('110-4')?.value); // 125

    const isCorrect = (v === '125');

    const rightAnswer = "125 ô làm đá";
    const studentAnswer = `${v || '?'} ô làm đá`;

    const guidance = "Em hãy giải bài toán theo các bước:<br>1. Tính tổng thể tích nước có trong các chai nước (thể tích một chai nhân với số lượng chai).<br>2. Đổi đơn vị thể tích nước vừa tìm được từ lít sang xăng-ti-mét khối (cm³) (Lưu ý: 1 lít = 1 dm³ = 1 000 cm³).<br>3. Tính số ô làm đá bằng cách lấy tổng thể tích nước chia cho thể tích của mỗi ô làm đá nhé!";
    const solution = "Tổng thể tích nước trong 2 chai là:<br>0,5 × 2 = 1 (lít)<br><br>Đổi 1 lít = 1 dm³ = 1 000 cm³.<br><br>Số ô làm đá Rô-bốt có thể đổ đầy nhiều nhất là:<br>1 000 : 8 = 125 (ô)<br>Đáp số: 125 ô làm đá.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('110_4', score, 'btn-check-110-4', 1, 1, isCorrect ? 1 : 0);
};

// Image zoom modal helper
window.zoomImage110 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-110');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-110';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-110" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-110" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-110').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-110').src = src;
    document.getElementById('zoom-modal-caption-110').innerText = alt;
};

// --- Reset Bài 3 ---
window.reset110_3 = () => {
    window._selectedNode110 = null;
    window._matches110 = {};
    
    // Xóa đường nối
    const svg = document.getElementById('svg-lines-110');
    if (svg) svg.innerHTML = '';
    
    // Khôi phục styles cho đồ vật
    document.querySelectorAll('.item-110').forEach(el => {
        el.classList.remove('opacity-60', 'pointer-events-none', 'ring-4', 'ring-emerald-500', 'scale-105');
    });
    
    // Khôi phục styles cho số đo
    document.querySelectorAll('.vol-110').forEach(el => {
        el.classList.remove('opacity-60', 'pointer-events-none', 'ring-4', 'ring-emerald-500', 'scale-105');
    });
    
    console.log("Reset matched state for lesson 110");
};
