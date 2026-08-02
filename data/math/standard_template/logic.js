// 1. Xử lý Trắc nghiệm Luyện tập (Premium UI)
// Hàm này được gọi khi học sinh chọn một đáp án trong phần Luyện tập
window.selectMCQTemplate = function(exId, option) {
    // Tìm tất cả các nút đáp án của bài tập hiện tại
    const btns = document.querySelectorAll(`#ex-${exId} .mcq-btn-premium`);
    // Reset trạng thái (màu sắc, viền) của tất cả các nút về mặc định
    btns.forEach(btn => {
        btn.classList.remove('border-indigo-600', 'text-indigo-600', 'bg-indigo-50/50', 'shadow-inner');
        btn.classList.add('border-indigo-100', 'text-gray-500', 'bg-white');
    });

    // Highlight (làm nổi bật) nút mà học sinh vừa bấm chọn
    const selectedBtn = document.getElementById(`btn-${exId}-${option}`);
    if (selectedBtn) {
        selectedBtn.classList.remove('border-indigo-100', 'text-gray-500', 'bg-white');
        selectedBtn.classList.add('border-indigo-600', 'text-indigo-600', 'bg-indigo-50/50', 'shadow-inner');
    }

    // Hiển thị phản hồi (Correct/Wrong) bên dưới câu hỏi
    const feedback = document.getElementById(`feedback-${exId}`);
    if (feedback) {
        // Xóa các lớp định dạng cũ của feedback
        feedback.classList.remove('opacity-0', 'text-emerald-600', 'text-red-500', 'bg-emerald-50', 'bg-red-50', 'translate-y-4');
        
        // Kiểm tra xem đáp án có đúng không (giả định 'A' là đúng cho template)
        const isCorrect = (option === 'A'); 
        
        if (isCorrect) {
            feedback.innerText = "Chính xác! Chúc mừng em đã nắm vững kiến thức. 🎉";
            feedback.classList.add('text-emerald-600', 'bg-emerald-50');
            // Phát âm thanh chúc mừng
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = "Chưa đúng rồi! Em hãy thử suy nghĩ lại hoặc xem gợi ý nhé. 💪";
            feedback.classList.add('text-red-500', 'bg-red-50');
            // Phát âm thanh báo sai
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
        // Hiệu ứng hiện dần cho feedback
        feedback.classList.add('opacity-100', 'translate-y-0');
    }
};

// 2. Xử lý Trắc nghiệm Khởi động (Auto Advance)
// Hàm này xử lý các câu hỏi nhanh ở phần Khởi động (Presentation)
window.checkPreQuizTemplate = function(questionIdx, option) {
    const btns = document.querySelectorAll(`.kickoff-btn`); 
    const isCorrect = (option === 'A'); // Giả định đáp án đúng là 'A'

    const selectedBtn = document.getElementById(`btn-pre-${questionIdx}-${option}`);
    
    if (isCorrect) {
        // Nếu đúng: Đổi màu nút sang xanh lá và thêm dấu tích
        if (selectedBtn) {
            selectedBtn.classList.add('bg-emerald-500', 'text-white', 'border-transparent');
            selectedBtn.innerHTML += " ✅";
        }
        if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        
        // Tạo hiệu ứng pháo hoa ăn mừng
        if (typeof confetti === 'function') {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }

        // Tự động chuyển sang Slide tiếp theo sau 1.5 giây
        setTimeout(() => {
            if (window.Presentation && typeof window.Presentation.nextSlide === 'function') {
                window.Presentation.nextSlide();
            }
        }, 1500);
    } else {
        // Nếu sai: Đổi màu nút sang đỏ và thêm dấu X
        if (selectedBtn) {
            selectedBtn.classList.add('bg-red-500', 'text-white', 'border-transparent');
            selectedBtn.innerHTML += " ❌";
        }
        if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        
        // Rung nhẹ nút để báo lỗi (Shake effect)
        selectedBtn.classList.add('animate-shake');
        setTimeout(() => selectedBtn.classList.remove('animate-shake'), 500);
    }
};

// 3. Xử lý Modal 3D Template
// Hàm mở cửa sổ mô phỏng 3D tương tác
window.openTemplate3DModal = function() {
    console.log("Mở mô phỏng 3D tương tác...");
    if (typeof window.show3DModal === 'function') {
        window.show3DModal('standard_template');
    } else {
        alert("Tính năng 3D đang được tích hợp!");
    }
};

// 4. Xử lý Nộp bài chuẩn (Từng phần Bài 1, 2, 3)
window.templateScores = { ex1: 0, ex2: 0, ex3: 0 };

window.submitExTemplate = function(exNum) {
    const score = 100; // Mặc định 100 điểm khi bấm nộp ở bản mẫu
    if (!window.templateScores) window.templateScores = { ex1: 0, ex2: 0, ex3: 0 };
    
    if (exNum === 1) window.templateScores.ex1 = score;
    if (exNum === 2) window.templateScores.ex2 = score;
    if (exNum === 3) window.templateScores.ex3 = score;

    // Tính tổng trung bình Luyện tập (tổng 3 bài chia 3)
    const totalPractice = Math.round((window.templateScores.ex1 + window.templateScores.ex2 + window.templateScores.ex3) / 3);

        window.syncRealtimeProgress({
            [`scoreEx${exNum}`]: score,
            scorePractice: totalPractice
        }, true);
    
    alert(`Đã nộp Bài ${exNum} thành công!`);
    const btn = document.getElementById(`btn-submit-template-${exNum}`);
    if (btn) {
        btn.innerHTML = `ĐÃ NỘP BÀI ${exNum} ✓`;
        btn.classList.replace('bg-emerald-500', 'bg-gray-400');
        btn.disabled = true;
    }
};

window.submitStandardLesson = function(lessonTitle, maxScore) {
    const feedback = "Học sinh đã hoàn thành toàn bộ bài tập.";
    if (window.submitMathLesson) {
        window.submitMathLesson(feedback, 100, 'btn-submit-global');
    } else {
        alert("Cảm ơn em đã hoàn thành bài học!");
    }
};

// Thêm CSS Animation cho hiệu ứng Rung (Shake)
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    .animate-shake { animation: shake 0.2s ease-in-out 0s 2; }
`;
document.head.appendChild(style);
