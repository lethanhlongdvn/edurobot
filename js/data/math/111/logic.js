// Logic for Lesson 111

// Helper phát âm thanh
function playSFX(name) {
    if (window.Quiz && typeof window.Quiz.playSFX === 'function') {
        window.Quiz.playSFX(name);
    }
}

window.submit111 = async function() {
    let score = 0;
    
    // Bài 1
    const r1 = document.getElementById('b111-1-1').value.trim().toLowerCase();
    const r2 = document.getElementById('b111-1-2').value.trim().toLowerCase();
    const fb1 = document.getElementById('fb-111-1');

    const ok1_1 = (r1.includes('một phẩy hai mươi lăm') || r1.includes('một phẩy hai lăm')) && r1.includes('mét khối');
    const ok1_2 = r2.includes('ba trăm') && r2.includes('mét khối');

    if (ok1_1) score += 15;
    if (ok1_2) score += 15;

    fb1.innerHTML = (ok1_1 && ok1_2) ? "Bài 1: Chính xác! Bạn đọc số đo rất chuẩn. 🎉" : "Bài 1: Có vẻ bạn đọc chưa chính xác một số chỗ, hãy kiểm tra lại nhé! 🤔";
    fb1.className = (ok1_1 && ok1_2) ? "mt-4 text-center text-xl font-bold text-emerald-600" : "mt-4 text-center text-xl font-bold text-rose-600";

    // Bài 2
    const v2a = document.getElementById('b111-2a').value.trim().replace(',', '.');
    const v2b = document.getElementById('b111-2b').value.trim().replace(',', '.');
    const v2c = document.getElementById('b111-2c').value.trim().replace(',', '.');
    const v2d = document.getElementById('b111-2d').value.trim().replace(',', '.');
    const fb2 = document.getElementById('fb-111-2');

    const ok2a = (parseFloat(v2a) === 3000);
    const ok2b = (parseFloat(v2b) === 1700);
    const ok2c = (parseFloat(v2c) === 2.4);
    const ok2d = (parseFloat(v2d) === 25000000);

    if (ok2a) score += 10;
    if (ok2b) score += 10;
    if (ok2c) score += 10;
    if (ok2d) score += 10;

    fb2.innerHTML = (ok2a && ok2b && ok2c && ok2d) ? "Bài 2: Tuyệt vời! Bạn đổi đơn vị thể tích rất giỏi. 🚀" : "Bài 2: Còn sai sót rồi, hãy nhớ m³ -> dm³ -> cm³ gấp kém nhau 1000 lần nhé! 🤔";
    fb2.className = (ok2a && ok2b && ok2c && ok2d) ? "mt-4 text-center text-xl font-bold text-emerald-600" : "mt-4 text-center text-xl font-bold text-rose-600";

    // Bài 3
    const text3 = document.getElementById('ans-b111-3-text').value.trim();
    const fb3 = document.getElementById('fb-111-3');
    if (text3) {
        fb3.innerHTML = "Đang chấm bằng AI... 🤖";
        try {
            const aiRes3 = await window.AIInteraction?.gradeWithModal?.(
                "Thùng xe 33,2 m3, hàng 80%. Tính thể tích trống.",
                "33,2 * (1 - 0,8) = 33,2 * 0,2 = 6,64 m3 hoặc 33,2 * 0,2 = 6,64 m3",
                text3
            );
            if (aiRes3) score += 30;
            fb3.innerHTML = "Bài 3: Đã được AI ghi nhận! 🌟";
        } catch (e) {
            fb3.innerHTML = "Bài 3: Ghi nhận lời giải của em! 📝";
            score += 30;
        }
    } else {
        fb3.innerHTML = "Bài 3: Em chưa điền lời giải nhé! 🤔";
        fb3.className = "mt-4 text-center text-xl font-bold text-rose-600";
    }

    if (score >= 80) playSFX('correct'); else if (score < 40) playSFX('wrong');

    if (window.submitMathLesson) {
        window.submitMathLesson("Tiết 111: Mét khối", score, "btn-submit-111");
    }

    let s3 = 0;
    if (text3 && fb3.innerHTML.includes("ghi nhận")) s3 = 30;

    window.send111Progress(
        (ok1_1 ? 15 : 0) + (ok1_2 ? 15 : 0),
        (ok2a ? 10 : 0) + (ok2b ? 10 : 0) + (ok2c ? 10 : 0) + (ok2d ? 10 : 0),
        s3,
        score
    );
};

window.send111Progress = function(s1, s2, s3, totalScore) {
    if (window.syncRealtimeProgress) {
        window.syncRealtimeProgress({
            scoreEx1: s1,
            scoreEx2: s2,
            scoreEx3: s3,
            scorePractice: totalScore
        }, true);
    }
};
