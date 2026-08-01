// ===================================================================
// Tiết 112 - Luyện tập: Mét khối
// LOGIC: Chấm điểm bài giải bằng nút E và phản hồi showMathFeedback
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().toLowerCase().replace(/\s+/g, ' ').replace(/,/g, '.');
};

// --- Trình phóng to hình ảnh ---
window.zoomImage112 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-112');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-112';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-112" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-112" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-112').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-112').src = src;
    document.getElementById('zoom-modal-caption-112').innerText = alt;
};

// --- Trình toggle hiện bài giải ---
window.toggleSolution = (solId) => {
    let el = document.getElementById(solId);
    if (!el) {
        el = document.getElementById(`sol-${solId}`) || document.getElementById(`solution-112-${solId}`);
    }
    if (el) {
        el.classList.toggle('hidden');
    }
};
window.toggleSolution112 = window.toggleSolution;

// --- Nối đôi đồ vật với thể tích (SVG nét chì) ---
window._selectedNode112 = null;
window._matches112 = {};

window.redrawLines112 = () => {
    const svg = document.getElementById('svg-lines-112');
    if (!svg) return;
    svg.innerHTML = '';
    
    const container = svg.parentElement;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    Object.keys(window._matches112).forEach(itemNode => {
        const volNode = window._matches112[itemNode];
        const itemEl = document.getElementById(itemNode);
        const volEl = document.getElementById(volNode);
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
        line.setAttribute('stroke', '#3b82f6');
        line.setAttribute('stroke-width', '4');
        line.setAttribute('stroke-dasharray', '8,4');
        line.setAttribute('stroke-linecap', 'round');
        line.style.filter = 'drop-shadow(1px 1px 1px rgba(0,0,0,0.2))';
        svg.appendChild(line);
    });
};

window.addEventListener('resize', window.redrawLines112);
document.addEventListener('click', () => {
    setTimeout(window.redrawLines112, 50);
});

window.clickNode112 = (nodeId) => {
    console.log("clickNode112 called with:", nodeId);
    const isItem = nodeId.startsWith('item-112-');
    const isVol = nodeId.startsWith('vol-112-');
    
    // Nếu nút đã được nối thì không xử lý nữa
    if (isItem && window._matches112[nodeId]) {
        return;
    }
    if (isVol && Object.values(window._matches112).includes(nodeId)) {
        return;
    }

    if (!window._selectedNode112) {
        // Lựa chọn thứ nhất
        window._selectedNode112 = nodeId;
        const el = document.getElementById(nodeId);
        if (el) el.classList.add('ring-4', 'ring-blue-500', 'scale-105');
    } else {
        // Lựa chọn thứ hai
        const prevNode = window._selectedNode112;
        const prevIsItem = prevNode.startsWith('item-112-');
        
        if (prevIsItem === isItem) {
            // Nhấn cùng loại thì chuyển chọn lựa
            const prevEl = document.getElementById(prevNode);
            if (prevEl) prevEl.classList.remove('ring-4', 'ring-blue-500', 'scale-105');
            
            window._selectedNode112 = nodeId;
            const curEl = document.getElementById(nodeId);
            if (curEl) curEl.classList.add('ring-4', 'ring-blue-500', 'scale-105');
            return;
        }
        
        const itemNode = isItem ? nodeId : prevNode;
        const volNode = isItem ? prevNode : nodeId;
        
        window._matches112[itemNode] = volNode;
        
        const itemEl = document.getElementById(itemNode);
        const volEl = document.getElementById(volNode);
        if (itemEl) {
            itemEl.classList.remove('ring-4', 'ring-blue-500', 'scale-105');
            itemEl.classList.add('opacity-60', 'pointer-events-none');
        }
        if (volEl) {
            volEl.classList.remove('ring-4', 'ring-blue-500', 'scale-105');
            volEl.classList.add('opacity-60', 'pointer-events-none');
        }
        
        window.redrawLines112();
        window._selectedNode112 = null;
    }
};

// ==========================================
// BÀI 1: Chọn số đo thể tích phù hợp
// ==========================================
window.check_112_1 = () => {
    const matches = window._matches112 || {};
    // Khối nhỏ (trái) nối với 1 cm3 (phải)
    const ok1 = (matches['item-112-1'] === 'vol-112-1cm3');
    // Khối vừa (giữa) nối với 1 dm3 (trái)
    const ok2 = (matches['item-112-2'] === 'vol-112-1dm3');
    // Khối lớn (phải) nối với 1 m3 (giữa)
    const ok3 = (matches['item-112-3'] === 'vol-112-1m3');
    
    const correctCount = [ok1, ok2, ok3].filter(v => v).length;
    const isCorrect = correctCount === 3;
    
    const rightAnswer = "Hình trái - 1 cm³; Hình giữa - 1 dm³; Hình phải - 1 m³";
    const studentAnswer = `Hình trái: ${matches['item-112-1'] ? (matches['item-112-1'] === 'vol-112-1cm3' ? '1 cm3' : 'khác') : '?'}; Hình giữa: ${matches['item-112-2'] ? (matches['item-112-2'] === 'vol-112-1dm3' ? '1 dm3' : 'khác') : '?'}; Hình phải: ${matches['item-112-3'] ? (matches['item-112-3'] === 'vol-112-1m3' ? '1 m3' : 'khác') : '?'}`;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, 
        "Em hãy suy nghĩ và so sánh trực quan kích thước của ba khối hộp với các đơn vị thể tích xăng-ti-mét khối, đề-xi-mét khối và mét khối nhé!",
        `<div class="space-y-4">
            <p class="text-emerald-700 font-bold text-2xl text-left">Chính xác! Em đã ước lượng thể tích cực kỳ xuất sắc.</p>
            <ul class="text-left space-y-2 text-xl">
                <li>• <b>Hình 1 (trái):</b> Khối lập phương tí hon cầm trên ngón tay tương ứng với thể tích <b>1 cm³</b>.</li>
                <li>• <b>Hình 2 (giữa):</b> Khối lập phương vừa vặn trong lòng bàn tay tương ứng với thể tích <b>1 dm³</b>.</li>
                <li>• <b>Hình 3 (phải):</b> Khối lập phương lớn cần hai bạn khiêng tương ứng với thể tích <b>1 m³</b>.</li>
            </ul>
        </div>`
    );
    window.submitMathLesson("Tiết 112: Luyện tập Mét khối - Bài 1", Math.round(correctCount*33.3), "btn-check-112-1", 0, 3, correctCount);
};

// ==========================================
// BÀI 2: Đổi đơn vị đo thể tích
// ==========================================
window.check_112_2 = () => {
    const v1 = cleanString(document.getElementById('ans-112-2-1')?.value);
    const v2 = cleanString(document.getElementById('ans-112-2-2')?.value);
    const v3 = cleanString(document.getElementById('ans-112-2-3')?.value);
    const v4 = cleanString(document.getElementById('ans-112-2-4')?.value);
    
    const ok1 = parseFloat(v1) === 2500;
    const ok2 = parseFloat(v2) === 3.9;
    const ok3 = parseFloat(v3) === 4.6;
    const ok4 = parseFloat(v4) === 7.5;
    
    const correctCount = [ok1, ok2, ok3, ok4].filter(v => v).length;
    const isCorrect = correctCount === 4;
    
    const rightAnswer = "a) 2500; b) 3.9; c) 4.6; d) 7.5";
    const studentAnswer = `a) ${v1 || '?'}; b) ${v2 || '?'}; c) ${v3 || '?'}; d) ${v4 || '?'}`;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, 
        "Hãy nhớ tỉ lệ: 1 m³ = 1000 dm³ = 1 000 000 cm³. Mỗi đơn vị liền kề gấp nhau 1000 lần.",
        `<div class="space-y-4 text-left">
            <p class="text-emerald-700 font-bold text-2xl">Rất tốt! Em đã đổi các đơn vị đo thể tích chính xác.</p>
            <div class="bg-blue-50 p-6 rounded-2xl space-y-2 text-xl">
                <p>• 2,5 m³ = 2,5 × 1000 = <b>2500 dm³</b></p>
                <p>• 3900 cm³ = 3900 : 1000 = <b>3,9 dm³</b></p>
                <p>• 4600 dm³ = 4600 : 1000 = <b>4,6 m³</b></p>
                <p>• 7 500 000 cm³ = 7 500 000 : 1 000 000 = <b>7,5 m³</b></p>
            </div>
        </div>`
    );
    window.submitMathLesson("Tiết 112: Luyện tập Mét khối - Bài 2", isCorrect ? 100 : correctCount*25, "ans-112-2-1", 0, 4, correctCount);
};

// ==========================================
// ==========================================
// BÀI 3: Tính (phép tính số đo thể tích)
// ==========================================
window.check_112_3 = () => {
    const v1 = cleanString(document.getElementById('ans-112-3-1')?.value);
    const v2 = cleanString(document.getElementById('ans-112-3-2')?.value);
    const v3 = cleanString(document.getElementById('ans-112-3-3')?.value);
    const v4 = cleanString(document.getElementById('ans-112-3-4')?.value);

    const ok1 = parseFloat(v1) === 9.55;
    const ok2 = parseFloat(v2) === 490;
    const ok3 = parseFloat(v3) === 4.25;
    const ok4 = parseFloat(v4) === 375;

    const correctCount = [ok1, ok2, ok3, ok4].filter(v => v).length;
    const isCorrect = correctCount === 4;

    const rightAnswer = "a) 9,55 m³ ; 490 m³ ; b) 4,25 m³ ; 375 m³";
    const studentAnswer = `a) ${v1 || '?'} m³ ; ${v2 || '?'} m³ ; b) ${v3 || '?'} m³ ; ${v4 || '?'} m³`;

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer,
        "Em thực hiện tính toán với các số rồi giữ nguyên đơn vị m³ ở sau kết quả nhé!",
        `<div class="space-y-4 text-left">
            <p class="text-emerald-700 font-bold text-2xl">Chúc mừng em đã tính đúng tất cả các phép tính!</p>
            <div class="bg-blue-50 p-6 rounded-2xl space-y-2 text-xl">
                <p>• a) 3,5 m³ + 6,05 m³ = <b>9,55 m³</b></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;1 000 m³ − 510 m³ = <b>490 m³</b></p>
                <p>• b) 8,5 m³ × 0,5 = <b>4,25 m³</b></p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;1 875 m³ : 5 = <b>375 m³</b></p>
            </div>
        </div>`
    );
    window.submitMathLesson("Tiết 112: Luyện tập Mét khối - Bài 3", isCorrect ? 100 : correctCount*25, "btn-check-112-3", 0, 4, correctCount);
};

// BÀI 4: Bài toán tính tiền nước (Bài 4 cũ)
// ==========================================
window.check_112_4 = () => {
    const val = cleanString(document.getElementById('ans-112-4')?.value);
    const isCorrect = parseInt(val) === 94990;
    
    window.showMathFeedback(isCorrect, "94990", val,
        "Đầu tiên hãy tính tiền cho 10m³ đầu, sau đó tính 5m³ tiếp theo với giá mới rồi cộng lại nhé!",
        `<div class="space-y-4 text-left">
            <p class="text-emerald-700 font-bold text-2xl">Xuất sắc! Em giải bài toán thực tế chính xác rồi.</p>
            <div class="bg-orange-50 p-6 rounded-2xl space-y-3 text-xl font-bold">
                <p>Số tiền cho 10 m³ đầu là:</p>
                <p class="text-blue-700">5 973 × 10 = 59 730 (đồng)</p>
                <p>Số tiền cho 5 m³ tiếp theo là:</p>
                <p class="text-blue-700">7 052 × 5 = 35 260 (đồng)</p>
                <p>Tổng số tiền phải trả là:</p>
                <p class="text-orange-700">59 730 + 35 260 = 94 990 (đồng)</p>
            </div>
        </div>`
    );
    window.submitMathLesson("Tiết 112: Luyện tập Mét khối - Bài 4", isCorrect ? 100 : 0, "ans-112-4", 0, 1, isCorrect ? 1 : 0);
};

// --- Reset Bài 1 ---
window.reset112_1 = () => {
    window._selectedNode112 = null;
    window._matches112 = {};
    
    // Xóa đường nối
    const svg = document.getElementById('svg-lines-112');
    if (svg) svg.innerHTML = '';
    
    // Khôi phục styles cho đồ vật
    document.querySelectorAll('.item-112').forEach(el => {
        el.classList.remove('opacity-60', 'pointer-events-none', 'ring-4', 'ring-blue-500', 'scale-105');
    });
    
    // Khôi phục styles cho số đo
    document.querySelectorAll('.vol-112').forEach(el => {
        el.classList.remove('opacity-60', 'pointer-events-none', 'ring-4', 'ring-blue-500', 'scale-105');
    });
    
    console.log("Reset matched state for lesson 112");
};
