// ===================================================================
// Tiết 100 - Bài 40: Tìm tỉ số phần trăm của hai số (tiết 2 - Luyện tập)
// LOGIC: Chấm điểm bài giải chỉ qua ô đáp số
// ===================================================================

const cleanString = (val) => {
    if (!val) return '';
    return val.toString().trim().replace(/\s+/g, '').replace(/,/g, '.');
};

// ==========================================
// BÀI 1: Tỉ số phần trăm và trắc nghiệm
// ==========================================
window.check_100_1 = () => {
    const v1 = cleanString(document.getElementById('100-1-1')?.value); // 65.85
    const v2 = cleanString(document.getElementById('100-1-2')?.value); // 215.15
    const v3 = document.querySelector('input[name="100-1b"]:checked')?.value; // C

    const isCorrect = (v1 === '65.85') && (v2 === '215.15') && (v3 === 'C');

    const rightAnswer = "27 và 41: 65,85%; 71 và 33: 215,15%; Câu b: Đáp án C";
    const studentAnswer = `27 và 41: ${v1 || '?'}%; 71 và 33: ${v2 || '?'}%; Câu b: ${v3 || 'Chưa chọn'}`;

    const guidance = "Để tìm tỉ số phần trăm, em hãy chia hai số rồi nhân thương đó với 100 và viết thêm kí hiệu % vào bên phải kết quả nhé!";
    const solution = "Câu a:<br>Tỉ số phần trăm của 27 và 41 là:<br>27 : 41 = 0,6585... = 65,85%<br>Tỉ số phần trăm của 71 và 33 là:<br>71 : 33 = 2,1515... = 215,15%<br><br>Câu b:<br>41 : 73 = 0,5616... = 56,16%<br>Đáp án đúng: C. 56,16%";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('100_1', score, 'btn-check-100-1', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 2: Tính với tỉ số phần trăm
// ==========================================
window.check_100_2 = () => {
    const v1 = cleanString(document.getElementById('100-2-1')?.value); // 100.5
    const v2 = cleanString(document.getElementById('100-2-2')?.value); // 43.5
    const v3 = cleanString(document.getElementById('100-2-3')?.value); // 57
    const v4 = cleanString(document.getElementById('100-2-4')?.value); // 72
    const v5 = cleanString(document.getElementById('100-2-5')?.value); // 12
    const v6 = cleanString(document.getElementById('100-2-6')?.value); // 6

    const isCorrect = (v1 === '100.5') && (v2 === '43.5') && (v3 === '57') && (v4 === '72') && (v5 === '12') && (v6 === '6');

    const rightAnswer = "a) 100,5%; 43,5%; 57% — b) 72%; 12%; 6%";
    const studentAnswer = `a) ${v1 || '?'}%; ${v2 || '?'}%; ${v3 || '?'}% — b) ${v4 || '?'}%; ${v5 || '?'}%; ${v6 || '?'}%`;

    const guidance = "Khi cộng, trừ hai tỉ số phần trăm, em thực hiện phép tính trực tiếp trên các số rồi giữ nguyên dấu %. Khi nhân hoặc chia tỉ số phần trăm với một số tự nhiên, em tính kết quả rồi viết thêm dấu % vào nhé!";
    const solution = "Câu a:<br>57% + 43,5% = 100,5%<br>100,5% − 57% = 43,5%<br>100,5% − 43,5% = 57%<br><br>Câu b:<br>12% × 6 = 72%<br>72% : 6 = 12%<br>72% : 12 = 6%";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('100_2', score, 'btn-check-100-2', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 3: Hưởng ứng Tết trồng cây
// ==========================================
window.check_100_3 = () => {
    const v1 = cleanString(document.getElementById('100-3-1')?.value); // 60
    const v2 = cleanString(document.getElementById('100-3-2')?.value); // 15

    const isCorrect = (v1 === '60') && (v2 === '15');

    const rightAnswer = "a) 60%; b) Vượt 15%";
    const studentAnswer = `a) ${v1 || '?'}%; b) Vượt ${v2 || '?'}%`;

    const guidance = "Để trả lời câu a, em tính tỉ số phần trăm của lượng cây đã trồng so với kế hoạch. Để trả lời câu b, em tính tỉ số phần trăm lượng cây thực tế trồng được so với kế hoạch, rồi trừ đi 100% để biết đã vượt mức bao nhiêu phần trăm nhé!";
    const solution = "Câu a:<br>Tỉ số phần trăm của số cây đã trồng đến nửa thời gian và kế hoạch là:<br>360 : 600 = 0,6 = 60%<br>Đến nửa thời gian, nhà trường thực hiện được 60% kế hoạch.<br><br>Câu b:<br>Tỉ số phần trăm của số cây đã trồng tổng cộng và kế hoạch là:<br>690 : 600 = 1,15 = 115%<br>Nhà trường đã vượt kế hoạch số phần trăm là:<br>115% − 100% = 15%<br>Đáp số: a) 60%; b) Vượt 15% kế hoạch.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('100_3', score, 'btn-check-100-3', 1, 1, isCorrect ? 1 : 0);
};

// ==========================================
// BÀI 4: Biểu đồ bốn môn thể thao
// ==========================================
window.check_100_4 = () => {
    const v1 = cleanString(document.getElementById('100-4-1')?.value); // cờ vua: 6
    const v2 = cleanString(document.getElementById('100-4-2')?.value); // bóng đá: 18
    const v3 = cleanString(document.getElementById('100-4-3')?.value); // bơi: 12
    const v4 = cleanString(document.getElementById('100-4-4')?.value); // võ: 12
    const v5 = cleanString(document.getElementById('100-4-5')?.value); // cờ vua %: 12.5
    const v6 = cleanString(document.getElementById('100-4-6')?.value); // bóng đá %: 37.5
    const v7 = cleanString(document.getElementById('100-4-7')?.value); // bơi %: 25
    const v8 = cleanString(document.getElementById('100-4-8')?.value); // võ %: 25

    const isCorrect = (v1 === '6') && (v2 === '18') && (v3 === '12') && (v4 === '12') &&
                      (v5 === '12.5') && (v6 === '37.5') && (v7 === '25') && (v8 === '25');

    const rightAnswer = "a) Cờ vua: 6, Bóng đá: 18, Bơi: 12, Võ: 12; b) 12,5%, 37,5%, 25%, 25%";
    const studentAnswer = `a) Cờ vua: ${v1||'?'}, Bóng đá: ${v2||'?'}, Bơi: ${v3||'?'}, Võ: ${v4||'?'}; b) ${v5||'?'}%, ${v6||'?'}%, ${v7||'?'}%, ${v8||'?'}%`;

    const guidance = "Em hãy đọc kỹ biểu đồ cột để xác định số học sinh ưa thích từng môn. Sau đó cộng tất cả lại để có tổng số học sinh được điều tra. Cuối cùng, tính tỉ số phần trăm của từng môn so với tổng số học sinh đó nhé!";
    const solution = "Câu a - Số học sinh ưa thích mỗi môn:<br>Cờ vua: 6 học sinh; Bóng đá: 18 học sinh; Bơi: 12 học sinh; Võ dân tộc: 12 học sinh<br>Tổng số học sinh điều tra: 6 + 18 + 12 + 12 = 48 (học sinh)<br><br>Câu b - Tỉ số phần trăm của từng môn:<br>Cờ vua: 6 : 48 = 0,125 = 12,5%<br>Bóng đá: 18 : 48 = 0,375 = 37,5%<br>Bơi: 12 : 48 = 0,25 = 25%<br>Võ dân tộc: 12 : 48 = 0,25 = 25%";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    const score = isCorrect ? 100 : 0;
    window.submitMathLesson('100_4', score, 'btn-check-100-4', 1, 1, isCorrect ? 1 : 0);
};


// ==========================================
// HỖ TRỢ PHÓNG TO HÌNH ẢNH CHO TIẾT 100
// ==========================================
window.zoomImage100 = (src, alt) => {
    let modal = document.getElementById('image-zoom-modal-100');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-zoom-modal-100';
        modal.className = 'fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300';
        modal.innerHTML = `
            <div class="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl p-3 shadow-2xl border-4 border-white animate-in zoom-in-95 duration-300 pointer-events-auto">
                <img id="zoom-modal-img-100" src="" alt="" class="max-w-[85vw] max-h-[80vh] object-contain rounded-2xl">
                <p id="zoom-modal-caption-100" class="text-center font-bold text-slate-700 mt-3 text-lg md:text-xl"></p>
                <button onclick="document.getElementById('image-zoom-modal-100').remove()" class="absolute -top-4 -right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-2 border-white hover:bg-red-600 transition-colors cursor-pointer" title="Đóng">✕</button>
            </div>
        `;
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        };
        document.body.appendChild(modal);
    }
    document.getElementById('zoom-modal-img-100').src = src;
    document.getElementById('zoom-modal-caption-100').innerText = alt;
};
