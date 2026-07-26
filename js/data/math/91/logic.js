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
        `${v('91-1-2n') || ''}/${v('91-1-2d') || ''}; ${v('91-1-3n') || ''}/${v('91-1-3d') || ''}; ${v('91-1-4n') || ''}/${v('91-1-4d') || ''}`,
        "Gợi ý: Tỉ số của số thứ nhất và số thứ hai bằng số thứ nhất chia cho số thứ hai (viết dưới dạng phân số). Hãy điền tử số ở trên và mẫu số ở dưới.",
        "• Tỉ số của 13 và 17 là 13/17.<br>• Tỉ số của 17 và 13 là 17/13.<br>• Tỉ số của m và n là m/n.<br>Chúc mừng em đã hoàn thành bài tập rất tốt!"
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
        `a) ${v('91-2-an')}/${v('91-2-ad')}; b) ${v('91-2-bn')}/${v('91-2-bd')}; c) ${v('91-2-cn')}/${v('91-2-cd')}`,
        "Gợi ý: Tổng số bạn tham gia thi là: 23 + 17 = 40 (bạn). Em hãy tính tỉ số bằng cách lấy số lượng của đối tượng thứ nhất chia cho đối tượng thứ hai.",
        "Tổng số học sinh tham gia là: 23 + 17 = 40 (bạn).<br>a) Tỉ số của số bạn nữ và số bạn nam là: 23/17.<br>b) Tỉ số của số bạn nam và số bạn nữ là: 17/23.<br>c) Tỉ số của số bạn nữ và tổng số bạn tham gia là: 23/40.<br>Em giải toán rất xuất sắc!"
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
window.redrawLines91 = () => {
    const svg = document.getElementById('svg-lines-91');
    if (!svg) return;
    svg.innerHTML = '';
    
    const container = document.getElementById('match-container-91');
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    Object.keys(window._matches91).forEach(beeId => {
        const flowerId = window._matches91[beeId];
        const beeEl = document.getElementById('bee-' + beeId);
        const flowerEl = document.getElementById('flower-' + flowerId);
        if (!beeEl || !flowerEl) return;

        const beeRect = beeEl.getBoundingClientRect();
        const flowerRect = flowerEl.getBoundingClientRect();

        // Tâm ong → Tâm hoa
        const x1 = beeRect.left + beeRect.width / 2 - containerRect.left;
        const y1 = beeRect.top + beeRect.height / 2 - containerRect.top;
        const x2 = flowerRect.left + flowerRect.width / 2 - containerRect.left;
        const y2 = flowerRect.top + flowerRect.height / 2 - containerRect.top;

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', '#ff7b29');
        line.setAttribute('stroke-width', '4');
        line.setAttribute('stroke-dasharray', '8,4');
        line.setAttribute('stroke-linecap', 'round');
        line.style.filter = 'drop-shadow(1px 1px 1px rgba(0,0,0,0.2))';
        svg.appendChild(line);
    });
};

window.addEventListener('resize', window.redrawLines91);
// Gọi redraw định kỳ ngắn sau khi trang chuyển slide
document.addEventListener('click', () => {
    setTimeout(window.redrawLines91, 50);
});

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

    // Vẽ lại toàn bộ các nét chì nối
    window.redrawLines91();

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
    
    // Construct student answers description
    const studentAns = Object.keys(matches).map(bee => `${bee}% → ${matches[bee]}/100`).join('; ');

    window.showMathFeedback(
        isCorrect,
        "39% → 39/100; 41% → 41/100; 75% → 75/100",
        studentAns,
        "Gợi ý: Tỉ số phần trăm dạng a% tương đương với phân số có tử số là a và mẫu số là 100.",
        "• Con ong mang tỉ số 39% tương ứng với bông hoa 39/100.<br>• Con ong mang tỉ số 41% tương ứng với bông hoa 41/100.<br>• Con ong mang tỉ số 75% tương ứng với bông hoa 75/100.<br>Chúc mừng em đã hoàn thành rất tốt phần kết nối!"
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
