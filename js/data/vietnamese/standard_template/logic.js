/**
 * @file logic.js
 * @description Logic tương tác cho bài Tiếng Việt chuẩn.
 * Xử lý: Nộp bài viết, kiểm tra trắc nghiệm khởi động, tổng hợp điểm.
 */

// =====================================================
// 1. Xử lý Nộp bài viết (Tự luận)
// =====================================================
window.vnTemplateScores = { writing: 0, quiz: 0 };

window.submitVnTemplateEx = function(exType) {
    const score = 100; // Mặc định 100 điểm khi bấm nộp ở bản mẫu
    if (!window.vnTemplateScores) window.vnTemplateScores = { writing: 0, quiz: 0 };

    if (exType === 'writing') {
        window.vnTemplateScores.writing = score;
    }

    // Tính tổng điểm Luyện tập
    const totalPractice = Math.round((window.vnTemplateScores.writing + window.vnTemplateScores.quiz) / 2);

    window.syncRealtimeProgress({
        [`scoreWriting`]: score,
        scorePractice: totalPractice
    }, true);

    alert(`Đã nộp bài thành công!`);
    const btn = document.getElementById(`btn-submit-vn-template-${exType}`);
    if (btn) {
        btn.innerHTML = `ĐÃ NỘP BÀI ✓`;
        btn.classList.replace('bg-emerald-500', 'bg-gray-400');
        btn.disabled = true;
    }
};

// =====================================================
// 2. Xử lý Trắc nghiệm Khởi động (Presentation)
// =====================================================
window.checkVnPreQuiz = function(questionIdx, option, correctAnswer) {
    const selectedBtn = document.getElementById(`btn-vn-pre-${questionIdx}-${option}`);
    const isCorrect = (option === correctAnswer);

    if (isCorrect) {
        if (selectedBtn) {
            selectedBtn.classList.add('bg-emerald-500', 'text-white', 'border-transparent');
            selectedBtn.innerHTML += " ✅";
        }
        if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');

        // Hiệu ứng pháo hoa
        if (typeof confetti === 'function') {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }

        // Tự động chuyển slide tiếp theo
        setTimeout(() => {
            if (window.Presentation && typeof window.Presentation.nextSlide === 'function') {
                window.Presentation.nextSlide();
            }
        }, 1500);
    } else {
        if (selectedBtn) {
            selectedBtn.classList.add('bg-red-500', 'text-white', 'border-transparent');
            selectedBtn.innerHTML += " ❌";
        }
        if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');

        // Rung nhẹ nút
        if (selectedBtn) {
            selectedBtn.classList.add('animate-shake');
            setTimeout(() => selectedBtn.classList.remove('animate-shake'), 500);
        }
    }
};

// =====================================================
// 3. Nộp bài hoàn thành toàn bộ bài học
// =====================================================
window.submitVnStandardLesson = function(lessonTitle, maxScore) {
    const feedback = "Học sinh đã hoàn thành toàn bộ bài Tiếng Việt.";
    if (window.submitMathLesson) {
        // Dùng chung hàm submitMathLesson vì logic nộp điểm tương tự
        window.submitMathLesson(feedback, 100, 'btn-submit-vn-global');
    } else {
        alert("Cảm ơn em đã hoàn thành bài học Tiếng Việt!");
    }
};

// =====================================================
// 4. CSS Animation cho hiệu ứng Rung (Shake)
// =====================================================
if (!document.getElementById('vn-shake-style')) {
    const style = document.createElement('style');
    style.id = 'vn-shake-style';
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
        .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
    `;
    document.head.appendChild(style);
}
