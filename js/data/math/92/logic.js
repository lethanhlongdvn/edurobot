// ===================================================================
// Tiết 92 - Bài 36: Tỉ số. Tỉ số phần trăm (tiết 2)
// LOGIC: Kiểm tra độc lập cho 7 slide riêng biệt (Thay thế LaTeX bằng văn bản thường)
// ===================================================================

// --- Bài 1: Chọn câu trả lời đúng ---
window.selected_92_1 = null;

window.select_92_1 = (ans) => {
    window.selected_92_1 = ans;
    
    // Reset styling của tất cả nút bài 1
    document.querySelectorAll('.btn-92-1').forEach(btn => {
        btn.className = "btn-92-1 absolute cursor-pointer border-4 border-transparent rounded-2xl z-20 transition-all";
    });

    const activeBtn = document.getElementById(`btn-92-1-${ans.toLowerCase()}`);
    if (activeBtn) {
        if (ans === 'A') {
            activeBtn.classList.add('border-pink-500', 'bg-pink-500/20', 'ring-4', 'ring-pink-300/50');
        } else if (ans === 'B') {
            activeBtn.classList.add('border-teal-500', 'bg-teal-500/20', 'ring-4', 'ring-teal-300/50');
        } else if (ans === 'C') {
            activeBtn.classList.add('border-emerald-500', 'bg-emerald-500/20', 'ring-4', 'ring-emerald-300/50');
        } else if (ans === 'D') {
            activeBtn.classList.add('border-amber-500', 'bg-amber-50/20', 'ring-4', 'ring-amber-300/50');
        }
    }
};

window.check_92_1 = () => {
    let score = 0;
    const total = 1;

    if (window.selected_92_1 === 'C') score++;

    const isCorrect = score === total;
    let rightAnswer = "C (Tỉ số của số bạn lớp 5C và số bạn lớp 5B)";
    let studentAnswer = window.selected_92_1 || "Chưa chọn";

    let solution = "Dựa vào lời thoại của Rô-bốt, ta có số học sinh tham gia tổng vệ sinh của từng lớp:<br>- Lớp 5A: 20 bạn.<br>- Lớp 5B: 24 bạn.<br>- Lớp 5C: 17 bạn.<br>Tỉ số 17/24 có tử số là 17 (số bạn lớp 5C) và mẫu số là 24 (số bạn lớp 5B).<br>Do đó, 17/24 là tỉ số của số bạn lớp 5C và số bạn lớp 5B.<br>Vậy đáp án đúng là C.<br><br>Chúc mừng em đã trả lời đúng! 🎉";
    let guidance = "Gợi ý:<br>- Em hãy kiểm tra xem số 17 và số 24 trong lời thoại của Rô-bốt tương ứng là số học sinh của các lớp nào nhé!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Bài 1. Chọn câu trả lời đúng",
            Math.round(score / total * 100),
            "btn-check-92-1",
            0, total, score
        );
    }
};

// --- Bài 2a: Viết tỉ số thành tỉ số phần trăm ---
window.check_92_2_a = () => {
    const getVal = (id) => document.getElementById(id)?.value.trim().replace(',', '.');
    const a1n = getVal('92-2-a1-n'), a1r = getVal('92-2-a1-r');
    const a2n = getVal('92-2-a2-n'), a2r = getVal('92-2-a2-r');
    const a3n = getVal('92-2-a3-n'), a3r = getVal('92-2-a3-r');

    if (!a1n || !a1r || !a2n || !a2r || !a3n || !a3r) {
        window.showMathFeedback(
            false,
            "",
            "",
            "Gợi ý:<br>Em hãy hoàn thành đầy đủ tất cả các ô trống ở câu a trước khi bấm nút kiểm tra nhé!"
        );
        return;
    }

    let score = 0;
    const total = 6;

    if (a1n === '25') score++;
    if (a1r === '25') score++;
    if (a2n === '25') score++;
    if (a2r === '25') score++;
    if (a3n === '25') score++;
    if (a3r === '25') score++;

    const isCorrect = score === total;
    let rightAnswer = "50/200 = 25/100 = 25%; 75/300 = 25/100 = 25%; 1/4 = 25/100 = 25%";
    let studentAnswer = `50/200 = ${a1n}/100 = ${a1r}%; 75/300 = ${a2n}/100 = ${a2r}%; 1/4 = ${a3n}/100 = ${a3r}%`;

    let solution = "Ta biến đổi các tỉ số về dạng phân số có mẫu số là 100:<br>" +
                   "- 50/200 = (50 : 2)/(200 : 2) = 25/100 = 25%<br>" +
                   "- 75/300 = (75 : 3)/(300 : 3) = 25/100 = 25%<br>" +
                   "- 1/4 = (1 x 25)/(4 x 25) = 25/100 = 25%<br><br>" +
                   "Em đã làm rất tốt! Thầy khen em! 🌟";

    let guidance = "Gợi ý:<br>- Em hãy rút gọn hoặc quy đồng phân số sao cho mẫu số trở thành 100, sau đó viết thành số kèm kí hiệu %.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Bài 2a. Viết tỉ số thành tỉ số phần trăm",
            Math.round(score / total * 100),
            "btn-check-92-2a",
            0, total, score
        );
    }
};

// --- Bài 2b: Viết phép chia dưới dạng tỉ số phần trăm ---
window.check_92_2_b = () => {
    const getVal = (id) => document.getElementById(id)?.value.trim().replace(',', '.');
    const b1 = getVal('92-2-b1'), b2 = getVal('92-2-b2'), b3 = getVal('92-2-b3');

    if (!b1 || !b2 || !b3) {
        window.showMathFeedback(
            false,
            "",
            "",
            "Gợi ý:<br>Em hãy hoàn thành đầy đủ tất cả các ô trống ở câu b trước khi bấm nút kiểm tra nhé!"
        );
        return;
    }

    let score = 0;
    const total = 3;

    if (b1 === '5.2' || b1 === '5,2') score++;
    if (b2 === '110.6' || b2 === '110,6') score++;
    if (b3 === '0.5' || b3 === '0,5') score++;

    const isCorrect = score === total;
    let rightAnswer = "5,2%; 110,6%; 0,5%";
    let studentAnswer = `${b1}%; ${b2}%; ${b3}%`;

    let solution = "Phép chia cho 100 viết dưới dạng tỉ số phần trăm:<br>" +
                   "- 5,2 : 100 = 5,2%<br>" +
                   "- 110,6 : 100 = 110,6%<br>" +
                   "- 0,5 : 100 = 0,5%<br><br>" +
                   "Chúc mừng em đã hoàn thành xuất sắc! 💐";

    let guidance = "Gợi ý:<br>- Phép chia cho 100 chính là tỉ số phần trăm tương ứng, em chỉ cần lấy số bị chia viết kèm kí hiệu % là được.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Bài 2b. Viết phép chia thành tỉ số phần trăm",
            Math.round(score / total * 100),
            "btn-check-92-2b",
            0, total, score
        );
    }
};

// --- Bài 3: Điền Đúng / Sai (Đ/S) ---
window.selected_92_3 = {
    a1: null, // Mai (a)
    a2: null, // Việt (a)
    b1: null, // Mai (b)
    b2: null  // Việt (b)
};

window.select_92_3 = (key, val) => {
    window.selected_92_3[key] = val;
    
    const btnD = document.getElementById(`btn-92-3-${key}-D`);
    const btnS = document.getElementById(`btn-92-3-${key}-S`);
    if (btnD && btnS) {
        btnD.className = "w-14 h-14 bg-slate-100 hover:bg-emerald-100 text-slate-600 hover:text-emerald-700 font-black text-2xl rounded-2xl transition-all shadow-sm outline-none";
        btnS.className = "w-14 h-14 bg-slate-100 hover:bg-rose-100 text-slate-600 hover:text-rose-700 font-black text-2xl rounded-2xl transition-all shadow-sm outline-none";
        
        if (val === 'Đ') {
            btnD.className = "w-14 h-14 bg-emerald-500 text-white font-black text-2xl rounded-2xl shadow-md outline-none scale-105";
        } else if (val === 'S') {
            btnS.className = "w-14 h-14 bg-rose-500 text-white font-black text-2xl rounded-2xl shadow-md outline-none scale-105";
        }
    }
};

// --- Bài 3a: Kiểm tra Đúng/Sai cho năm 2022 ---
window.check_92_3_a = () => {
    const answers = window.selected_92_3;

    if (!answers.a1 || !answers.a2) {
        window.showMathFeedback(
            false,
            "",
            "",
            "Gợi ý:<br>Em hãy chọn Đúng (Đ) / Sai (S) đầy đủ cho cả ý kiến của Mai và Việt ở câu a trước nhé!"
        );
        return;
    }

    let score = 0;
    const total = 2;

    // Mai nói: 112,7% -> Sai (S)
    if (answers.a1 === 'S') score++;
    // Việt nói: 113% -> Đúng (Đ)
    if (answers.a2 === 'Đ') score++;

    const isCorrect = score === total;
    let rightAnswer = "Mai: S, Việt: Đ";
    let studentAnswer = `Mai: ${answers.a1 || "?"}, Việt: ${answers.a2 || "?"}`;

    let solution = "Trong 6 tháng đầu năm 2022, tỉ số giới tính khi sinh là 113 trẻ trai / 100 trẻ gái. Tỉ số phần trăm tương ứng là:<br>" +
                   "113/100 = 113%<br>" +
                   "- Mai nói 112,7% là Sai (S).<br>" +
                   "- Việt nói 113% là Đúng (Đ).<br><br>Em làm rất tốt! Thầy khen em! 🌟";

    let guidance = "Gợi ý:<br>- Dữ kiện đề bài: năm 2022 có 113 trẻ trai / 100 trẻ gái. Hãy viết tỉ số này thành tỉ số phần trăm rồi đối chiếu với lời nói của hai bạn nhé!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Bài 3a. Đúng hay Sai (2022)",
            Math.round(score / total * 100),
            "btn-check-92-3a",
            0, total, score
        );
    }
};

// --- Bài 3b: Kiểm tra Đúng/Sai cho năm 2021 ---
window.check_92_3_b = () => {
    const answers = window.selected_92_3;

    if (!answers.b1 || !answers.b2) {
        window.showMathFeedback(
            false,
            "",
            "",
            "Gợi ý:<br>Em hãy chọn Đúng (Đ) / Sai (S) đầy đủ cho cả ý kiến của Mai và Việt ở câu b trước nhé!"
        );
        return;
    }

    let score = 0;
    const total = 2;

    // Mai nói: 112,7% -> Đúng (Đ)
    if (answers.b1 === 'Đ') score++;
    // Việt nói: 113% -> Sai (S)
    if (answers.b2 === 'S') score++;

    const isCorrect = score === total;
    let rightAnswer = "Mai: Đ, Việt: S";
    let studentAnswer = `Mai: ${answers.b1 || "?"}, Việt: ${answers.b2 || "?"}`;

    let solution = "Trong 6 tháng cùng kỳ năm 2021, tỉ số giới tính khi sinh là 112,7 trẻ trai / 100 trẻ gái. Tỉ số phần trăm tương ứng là:<br>" +
                   "112,7/100 = 112,7%<br>" +
                   "- Mai nói 112,7% là Đúng (Đ).<br>" +
                   "- Việt nói 113% là Sai (S).<br><br>Tuyệt vời! Em chọn rất chính xác! 💐";

    let guidance = "Gợi ý:<br>- Dữ kiện đề bài: năm 2021 có 112,7 trẻ trai / 100 trẻ gái. Hãy viết tỉ số này thành tỉ số phần trăm rồi đối chiếu với lời nói của hai bạn nhé!";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Bài 3b. Đúng hay Sai (2021)",
            Math.round(score / total * 100),
            "btn-check-92-3b",
            0, total, score
        );
    }
};

// --- Bài 4: Tính phần trăm xe đạt chuẩn và không đạt chuẩn ---
window.check_92_4 = () => {
    const cleanStr = (id) => document.getElementById(id)?.value.trim().replace(/\s+/g, '');
    const valA = cleanStr('92-4-a');
    const valB = cleanStr('92-4-b');

    if (!valA || !valB) {
        window.showMathFeedback(
            false,
            "",
            "",
            "Gợi ý:<br>Em hãy điền đầy đủ cả 2 ô trống ở câu a và câu b trước khi bấm nút kiểm tra nhé!"
        );
        return;
    }

    let score = 0;
    const total = 2;

    if (valA === '92') score++;
    if (valB === '8') score++;

    const isCorrect = score === total;
    let rightAnswer = "a) 92%; b) 8%";
    let studentAnswer = `a) ${valA}%; b) ${valB}%`;

    let solution = "a) Tỉ số phần trăm của số ô tô có tải trọng đạt chuẩn và tổng số ô tô được kiểm tra là:<br>" +
                   "92/100 = 92% (ô tô).<br>" +
                   "b) Số ô tô có tải trọng không đạt chuẩn là:<br>" +
                   "100 - 92 = 8 (ô tô).<br>" +
                   "Tỉ số phần trăm của số ô tô không đạt chuẩn và tổng số ô tô được kiểm tra là:<br>" +
                   "8/100 = 8% (ô tô).<br><br>" +
                   "Chúc mừng em đã hoàn thành xuất sắc bài tập! 🏆";

    let guidance = "Gợi ý:<br>" +
                   "- Ở câu a, có 92 ô tô đạt chuẩn trên tổng số 100 ô tô được kiểm tra. Hãy viết tỉ số của hai số này dưới dạng tỉ số phần trăm.<br>" +
                   "- Ở câu b, trước tiên em cần tính số ô tô không đạt chuẩn bằng cách lấy 100 - 92, sau đó viết tỉ số của số ô tô không đạt chuẩn so với tổng số ô tô dưới dạng tỉ số phần trăm.";

    window.showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution);

    if (window.submitMathLesson) {
        window.submitMathLesson(
            "Bài 4. Trạm kiểm tra tải trọng",
            Math.round(score / total * 100),
            "btn-check-92-4",
            0, total, score
        );
    }
};
