// ===================================================================
// Tiết 91 - Bài 36: Tỉ số. Tỉ số phần trăm (tiết 1)
// LOGIC: Kiểm tra đáp án + Submit điểm
// ===================================================================

// --- Hoạt động 1: Hoàn thành bảng tỉ số ---
window.check_91_1 = () => {
    const v = (id) => document.getElementById(id)?.value.trim().toLowerCase();
    let score = 0;
    const total = 6;

    // Hàng 2: 13/17
    if (v('91-1-2n') === '13') score++;
    if (v('91-1-2d') === '17') score++;

    // Hàng 3: 17/13
    if (v('91-1-3n') === '17') score++;
    if (v('91-1-3d') === '13') score++;

    // Hàng 4: m/n
    if (v('91-1-4n') === 'm') score++;
    if (v('91-1-4d') === 'n') score++;

    const isCorrect = score === total;
    window.showMathFeedback(
        isCorrect,
        "13/17; 17/13; m/n",
        "",
        "Gợi ý: Tỉ số của hai số a và b là a/b. Hãy lấy số thứ nhất làm tử, số thứ hai làm mẫu."
    );
    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Hoạt động 1. Hoàn thành bảng",
            Math.round(score / total * 100),
            "btn-check-91-1",
            0, total, score
        );
    }
};

// --- Hoạt động 2: Trạng nguyên nhí ---
window.check_91_2 = () => {
    const v = (id) => document.getElementById(id)?.value.trim().toLowerCase();
    let score = 0;
    const total = 6;

    // a) Nữ/Nam = 23/17
    if (v('91-2-an') === '23') score++;
    if (v('91-2-ad') === '17') score++;

    // b) Nam/Nữ = 17/23
    if (v('91-2-bn') === '17') score++;
    if (v('91-2-bd') === '23') score++;

    // c) Nữ/Tổng = 23/40
    if (v('91-2-cn') === '23') score++;
    if (v('91-2-cd') === '40') score++;

    const isCorrect = score === total;
    window.showMathFeedback(
        isCorrect,
        "a) 23/17; b) 17/23; c) 23/40",
        "",
        "Gợi ý: Tổng số bạn tham gia = 23 + 17 = 40. Tỉ số = số cần tìm / số so sánh."
    );
    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Hoạt động 2. Trạng nguyên nhí",
            Math.round(score / total * 100),
            "btn-check-91-2",
            0, total, score
        );
    }
};

// --- Hoạt động 3: Nối đôi ong với hoa (SVG nét chì) ---
window._bee91Selected = null;
window._matches91 = {};

// Vẽ nét chì SVG nối từ ong đến hoa
function drawPencilLine91(beeId, flowerId) {
    const container = document.getElementById('match-container-91');
    const svg = document.getElementById('svg-lines-91');
    const beeEl = document.getElementById('bee-' + beeId);
    const flowerEl = document.getElementById('flower-' + flowerId);
    if (!container || !svg || !beeEl || !flowerEl) return;

    const containerRect = container.getBoundingClientRect();
    const beeRect = beeEl.getBoundingClientRect();
    const flowerRect = flowerEl.getBoundingClientRect();

    // Tâm dưới ong → tâm trên hoa
    const x1 = beeRect.left + beeRect.width / 2 - containerRect.left;
    const y1 = beeRect.bottom - containerRect.top;
    const x2 = flowerRect.left + flowerRect.width / 2 - containerRect.left;
    const y2 = flowerRect.top - containerRect.top;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', '#555');
    line.setAttribute('stroke-width', '3');
    line.setAttribute('stroke-dasharray', '8,4');
    line.setAttribute('stroke-linecap', 'round');
    line.style.filter = 'drop-shadow(1px 1px 1px rgba(0,0,0,0.2))';
    svg.appendChild(line);
}

window.selectBee91 = (beeValue) => {
    if (window._matches91[beeValue]) return;

    document.querySelectorAll('.bee-91').forEach(el => {
        el.classList.remove('ring-4', 'ring-amber-500', 'scale-105');
    });

    window._bee91Selected = beeValue;
    const beeEl = document.getElementById('bee-' + beeValue);
    if (beeEl) {
        beeEl.classList.add('ring-4', 'ring-amber-500', 'scale-105');
    }
};

window.selectFlower91 = (flowerValue) => {
    if (!window._bee91Selected) return;
    const alreadyMatchedFlower = Object.values(window._matches91).includes(flowerValue);
    if (alreadyMatchedFlower) return;

    const beeValue = window._bee91Selected;
    window._matches91[beeValue] = flowerValue;

    // Disable ong + hoa đã nối
    const beeEl = document.getElementById('bee-' + beeValue);
    const flowerEl = document.getElementById('flower-' + flowerValue);
    if (beeEl) {
        beeEl.classList.remove('ring-4', 'ring-amber-500', 'scale-105');
        beeEl.classList.add('opacity-60', 'pointer-events-none');
    }
    if (flowerEl) {
        flowerEl.classList.add('opacity-60', 'pointer-events-none');
    }

    // Vẽ nét chì nối
    drawPencilLine91(beeValue, flowerValue);

    window._bee91Selected = null;
};

window.check_91_3 = () => {
    const matches = window._matches91;
    let score = 0;
    const total = 3;

    if (matches['39'] === '39') score++;
    if (matches['41'] === '41') score++;
    if (matches['75'] === '75') score++;

    const isCorrect = score === total;
    window.showMathFeedback(
        isCorrect,
        "39% → 39/100; 41% → 41/100; 75% → 75/100",
        "",
        "Gợi ý: Tỉ số phần trăm a% chính là phân số a/100."
    );
    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Hoạt động 3. Nối đôi ong-hoa",
            Math.round(score / total * 100),
            "btn-check-91-3",
            0, total, score
        );
    }
};

window.lesson91_logic_loaded = true;
