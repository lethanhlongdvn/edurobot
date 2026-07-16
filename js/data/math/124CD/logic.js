// === 124CD/logic.js ===
// Các hàm kiểm tra đáp án, xử lý tương tác bài tập
if (typeof window !== 'undefined') {
    window.lesson124CDState = {
        a: null,
        b: null
    };
}

// Helper phát âm thanh
function playSFX(name, vol) {
    if (window.Quiz && typeof window.Quiz.playSFX === 'function') {
        window.Quiz.playSFX(name, vol);
    }
}

window.submitWordProblemAILocal = function(id) {
    const solution = document.getElementById('wp-full-' + id)?.value || '';

    if (!solution.trim()) {
        alert("Thầy E nhắc: Em chưa viết bài giải. Hãy viết lời giải, phép tính và đáp số đầy đủ nhé! ✏️");
        return;
    }

    let prompt = "";
    if (id === '124CD-2') {
        prompt = `Đề bài: Một chiếc bánh bông lan HHCN đáy vuông cạnh 12 cm, cao 6 cm. a) Tính thể tích bánh. b) Cắt miếng bánh LP cạnh 6 cm. Tính thể tích phần còn lại.\n\nBài giải của học sinh:\n${solution}`;
    }

    const hiddenPrompt = `\n\n[HƯỚNG DẪN DÀNH RIÊNG CHO AI]:
- NẾU HỌC SINH LÀM ĐÚNG: Khen ngợi.
- NẾU HỌC SINH LÀM SAI: Chỉ ra lỗi sai, KHÔNG ĐƯỢC ĐƯA ĐÁP ÁN, hướng dẫn tự tính lại.`;

    if (window.AIInteraction && typeof window.AIInteraction.gradeWithModal === 'function') {
        window.AIInteraction.gradeWithModal("👨‍🏫 Thầy E Nhận Xét", prompt + hiddenPrompt);
    } else {
        alert("Thầy E đang chấm bài của em... (AI phản hồi qua Chat)");
    }
};

// === Logic cho phần Khởi động (Trắc nghiệm trong Slide) ===
window.checkPreQuiz124CD = function(btn, isCorrect, qIdx) {
    const slide = btn.closest('.presentation-slide-content');
    const feedback = slide.querySelector('.quiz-feedback');
    const options = slide.querySelectorAll('.quiz-opt');
    
    // Vô hiệu hóa các nút khác
    options.forEach(opt => {
        opt.disabled = true;
        opt.classList.add('opacity-50', 'bg-gray-100');
    });

    if (isCorrect) {
        btn.classList.remove('bg-gray-100', 'opacity-50');
        btn.classList.add('bg-emerald-500', 'text-white', 'border-emerald-600', 'opacity-100', 'scale-105', 'shadow-emerald-200');
        feedback.innerHTML = `<div class="animate-bounce-subtle text-emerald-600 font-black text-4xl mt-6">🌟 Tuyệt vời! Chính xác! 🌟</div>`;
        playSFX('correct');
        if (typeof confetti === 'function') confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        
        // Tự động chuyển slide sau 1.5s khi chọn đúng
        setTimeout(() => {
             if (window.Presentation && typeof window.Presentation.nextSlide === 'function') {
                 window.Presentation.nextSlide();
             } else if (window.Lesson && typeof window.Lesson.moveSlide === 'function') {
                 window.Lesson.moveSlide(1);
             } else {
                 // Fallback: Tìm nút chuyển slide trong overlay và click
                 const nextBtn = document.querySelector('#presentation-overlay .nav-controls button:last-child');
                 if (nextBtn) nextBtn.click();
             }
        }, 1500);

    } else {
        btn.classList.remove('bg-gray-100', 'opacity-50');
        btn.classList.add('bg-rose-500', 'text-white', 'border-rose-600', 'opacity-100');
        feedback.innerHTML = `
            <div class="text-rose-500 font-bold text-2xl mt-4">Chưa đúng rồi, cố gắng lên nhé!</div>
            <button onclick="window.resetPreQuiz124CD(this)">LÀM LẠI 🔄</button>
        `;
        playSFX('wrong');
    }
};

window.resetPreQuiz124CD = function(btn) {
    const slide = btn.closest('.presentation-slide-content');
    const feedback = slide.querySelector('.quiz-feedback');
    const options = slide.querySelectorAll('.quiz-opt');
    
    feedback.innerHTML = '';
    options.forEach(opt => {
        opt.disabled = false;
        if (opt.dataset.defaultClass) {
            opt.className = opt.dataset.defaultClass;
        }
    });
};

// === Nút Kiểm tra Bài 1: Kiểm tra theo cột (Trang 18) ===
window.checkEx124CD_1_col = function (key) {
    const answers = { a: 1000, b: 15.625, c: 0.064 };
    const input = document.getElementById(`ans-124CD-1${key}`);
    const val = parseFloat(input.value.replace(',', '.'));
    const inputWrapper = input.closest('td');
    const feedback = document.getElementById(`feedback-124CD-1${key}`);

    if (!input || !feedback) return;

    inputWrapper.classList.remove('border-emerald-400', 'border-red-400');
    feedback.classList.remove('text-emerald-600', 'text-red-50', 'bg-emerald-50', 'bg-red-50', 'opacity-100');
    feedback.classList.add('opacity-0');

    if (!isNaN(val) && Math.abs(val - answers[key]) < 0.001) {
        inputWrapper.classList.add('border-emerald-400');
        input.classList.remove('text-teal-600', 'text-red-500');
        input.classList.add('text-emerald-600');
        feedback.innerHTML = "Đúng! 🎉";
        feedback.classList.add('text-emerald-600', 'bg-emerald-50', 'opacity-100');
        playSFX('correct');
    } else {
        inputWrapper.classList.add('border-red-400');
        input.classList.remove('text-teal-600', 'text-emerald-600');
        input.classList.add('text-red-500');
        feedback.innerHTML = "Sai rồi ❌";
        feedback.classList.add('text-red-500', 'bg-red-50', 'opacity-100');
        playSFX('wrong');
    }
};

window.checkEx124CD_1 = function () {
    ['a', 'b', 'c'].forEach(key => window.checkEx124CD_1_col(key));
};

// === Nộp Bài 1 ===
window.submitEx124CD_1 = function() {
    const answers = { a: 1000, b: 15.625, c: 0.064 };
    let correctCount = 0;
    const fb = document.getElementById('feedback-124CD-1');
    
    ['a', 'b', 'c'].forEach(key => {
        const input = document.getElementById(`ans-124CD-1${key}`);
        const val = parseFloat(input?.value.replace(',', '.'));
        if (!isNaN(val) && Math.abs(val - answers[key]) < 0.001) {
            correctCount++;
            input.classList.replace('text-teal-600', 'text-emerald-600');
        } else {
            input.classList.replace('text-teal-600', 'text-rose-600');
        }
    });
    
    const score = Math.round((correctCount / 3) * 100);
    if (!window.score124CD) window.score124CD = { s1: 0, s2: 0, s3: 0 };
    window.score124CD.s1 = score;

    fb.innerHTML = score === 100 ? "Chính xác cả 3 hình! 🎉" : `Em đã đúng ${correctCount}/3 hình. Hãy kiểm tra lại nhé! 🤔`;
    fb.className = score === 100 ? "text-xl font-bold text-emerald-600 transition-all duration-300" : "text-xl font-bold text-amber-600 transition-all duration-300";
    if (score === 100) playSFX('correct'); else playSFX('wrong');

    if (score === 100) {
        const btn = document.getElementById('btn-submit-124CD-1');
        if (btn) { btn.innerHTML = 'ĐÃ NỘP ✓'; btn.disabled = true; btn.classList.replace('bg-teal-600', 'bg-gray-400'); }
        window.send124CDProgress();
    }
};

window.send124CDProgress = function() {
    if (window.syncRealtimeProgress) {
        window.syncRealtimeProgress({
            scoreEx1: window.score124CD.s1,
            scoreEx2: window.score124CD.s2,
            scoreEx3: window.score124CD.s3,
            scorePractice: Math.round((window.score124CD.s1 + window.score124CD.s2 + window.score124CD.s3) / 3)
        }, true);
    }
};

// === Nộp Bài 2 ===
window.submitEx124CD_2 = function() {
    const solution = document.getElementById('wp-full-124CD-2')?.value.trim();
    const fb = document.getElementById('fb-124CD-2');
    if (!solution) {
        fb.innerHTML = "Em hãy viết bài giải trước nhé!";
        fb.className = "text-xl font-bold text-rose-600 transition-all duration-300";
        return;
    }
    
    const score = solution.length > 20 ? 100 : 50;
    if (!window.score124CD) window.score124CD = { s1: 0, s2: 0, s3: 0 };
    window.score124CD.s2 = score;

    fb.innerHTML = score === 100 ? "Tốt lắm! Em đã hoàn thành bài giải. 🎉" : "Em nên trình bày chi tiết hơn nhé! 🤔";
    fb.className = score === 100 ? "text-xl font-bold text-emerald-600 transition-all duration-300" : "text-xl font-bold text-amber-600 transition-all duration-300";

    const btn = document.getElementById('btn-submit-124CD-2');
    if (btn) { btn.innerHTML = 'ĐÃ NỘP ✓'; btn.disabled = true; btn.classList.replace('bg-teal-600', 'bg-gray-400'); }
    window.send124CDProgress();
};

// === Nút Kiểm tra Bài 2: Chiếc bánh kem (Trang 19) ===
window.checkEx124CD_2 = function () {
    const ans = document.getElementById('ans-124CD-2').value.trim();
    const feedback = document.getElementById('feedback-124CD-2');
    const input = document.getElementById('ans-124CD-2');
    
    if (ans === '648') {
        feedback.innerHTML = "Tuyệt vời! Thể tích phần còn lại của chiếc bánh kem là 648 cm³! 🎂";
        feedback.classList.remove('text-red-500', 'bg-red-50', 'opacity-0');
        feedback.classList.add('text-emerald-600', 'bg-emerald-50', 'opacity-100');
        input.classList.add('border-emerald-500', 'ring-emerald-100');
        playSFX('correct');
    } else {
        feedback.innerHTML = "Gần đúng rồi! Em hãy tính thể tích bánh ban đầu và trừ đi thể tích phần bị cắt nhé!";
        feedback.classList.remove('text-emerald-600', 'bg-emerald-50', 'opacity-0');
        feedback.classList.add('text-red-500', 'bg-red-50', 'opacity-100');
        input.classList.add('border-red-500', 'ring-red-100');
        playSFX('wrong');
    }
};

// === Nút Kiểm tra Phần Củng cố ===
window.checkCC124CD = function (questionId, choice) {
    const answers = { 1: 'C', 2: 'B', 3: 'C', 4: 'A', 5: 'B' };
    const isCorrect = choice === answers[questionId];
    const choices = ['A', 'B', 'C', 'D'];
    
    choices.forEach(c => {
        const btn = document.getElementById(`cc124CD-${questionId}-${c}`);
        if (btn) btn.disabled = true;
    });

    const selectedBtn = document.getElementById(`cc124CD-${questionId}-${choice}`);
    if (isCorrect) {
        selectedBtn.classList.remove('bg-slate-50', 'text-slate-600');
        selectedBtn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-500');
        playSFX('correct');
        setTimeout(() => {
            if (window.Presentation && typeof window.Presentation.nextSlide === 'function') {
                window.Presentation.nextSlide();
            } else if (window.Lesson && typeof window.Lesson.moveSlide === 'function') {
                window.Lesson.moveSlide(1);
            }
        }, 1500);
    } else {
        selectedBtn.classList.remove('bg-slate-50', 'text-slate-600');
        selectedBtn.classList.add('bg-red-600', 'text-white', 'border-red-500');
        const correctBtn = document.getElementById(`cc124CD-${questionId}-${answers[questionId]}`);
        if (correctBtn) {
            correctBtn.classList.remove('bg-slate-50', 'text-slate-600');
            correctBtn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-500');
        }
        playSFX('wrong');
        const retryContainer = document.getElementById(`cc-retry-124CD-${questionId}`);
        if (retryContainer) retryContainer.classList.remove('hidden');
    }
};

window.retryCC124CD = function (questionId) {
    const choices = ['A', 'B', 'C', 'D'];
    choices.forEach(c => {
        const btn = document.getElementById(`cc124CD-${questionId}-${c}`);
        if (btn) {
            btn.disabled = false;
            btn.classList.remove('bg-emerald-600', 'bg-red-600', 'text-white', 'border-emerald-500', 'border-red-500');
            btn.classList.add('bg-slate-50', 'text-slate-600');
        }
    });
    const retryContainer = document.getElementById(`cc-retry-124CD-${questionId}`);
    if (retryContainer) retryContainer.classList.add('hidden');
};

// === Nộp Bài 3 ===
window.submitEx124CD_3 = function() {
    const fb = document.getElementById('feedback-124CD-3');
    if (!window.lesson124CDState.a || !window.lesson124CDState.b) {
        fb.innerHTML = "Em hãy chọn đáp án cho cả hai câu a) và b)!";
        fb.className = "text-xl font-bold text-amber-600 transition-all duration-300";
        return;
    }
    let correctCount = 0;
    if (window.lesson124CDState.a === 'B') correctCount++;
    if (window.lesson124CDState.b === 'C') correctCount++;
    const score = (correctCount === 2) ? 100 : (correctCount === 1 ? 50 : 0);
    
    if (!window.score124CD) window.score124CD = { s1: 0, s2: 0, s3: 0 };
    window.score124CD.s3 = score;

    fb.innerHTML = score === 100 ? "Chính xác cả 2 câu! 🎉" : (score === 50 ? "Em đã đúng 1 câu. Hãy xem lại nhé! 🤔" : "Chưa đúng rồi. Em hãy tính lại nhé! ❌");
    fb.className = score === 100 ? "text-xl font-bold text-emerald-600 transition-all duration-300" : "text-xl font-bold text-rose-600 transition-all duration-300";
    if (score === 100) playSFX('correct'); else playSFX('wrong');

    if (score === 100) {
        const btn = document.getElementById('btn-submit-124CD-3');
        if (btn) { btn.innerHTML = 'ĐÃ NỘP ✓'; btn.disabled = true; btn.classList.replace('bg-rose-600', 'bg-gray-400'); }
        window.send124CDProgress();
    }
};

// === Nút Kiểm tra Bài 3: MCQ ===
window.checkPractice124CD_3a = function(choice) {
    const isCorrect = choice === 'B';
    const choices = ['A', 'B', 'C', 'D'];
    
    choices.forEach(c => {
        const btn = document.getElementById(`p124CD-3a-${c}`);
        if (btn) btn.disabled = true;
    });

    const selectedBtn = document.getElementById(`p124CD-3a-${choice}`);
    if (isCorrect) {
        selectedBtn.classList.remove('bg-white', 'text-indigo-900');
        selectedBtn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-500');
        playSFX('correct');
        const solution = document.getElementById('p124CD-3a-solution');
        if (solution) solution.classList.remove('hidden');
        const feedback = document.getElementById('p124CD-3a-feedback');
        if (feedback) {
            feedback.innerHTML = "Tuyệt vời! Chính xác! 🎉";
            feedback.classList.remove('hidden', 'text-rose-600', 'bg-rose-50');
            feedback.classList.add('text-emerald-600', 'bg-emerald-50');
        }
    } else {
        selectedBtn.classList.remove('bg-white', 'text-indigo-900');
        selectedBtn.classList.add('bg-rose-600', 'text-white', 'border-rose-500');
        const correctBtn = document.getElementById(`p124CD-3a-B`);
        if (correctBtn) {
            correctBtn.classList.remove('bg-white', 'text-indigo-900');
            correctBtn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-500');
        }
        playSFX('wrong');
        const retryContainer = document.getElementById(`p124CD-3a-retry`);
        if (retryContainer) retryContainer.classList.remove('hidden');
        const feedback = document.getElementById('p124CD-3a-feedback');
        if (feedback) {
            feedback.innerHTML = "Chưa đúng rồi, cố gắng lại nhé! ❌";
            feedback.classList.remove('hidden', 'text-emerald-600', 'bg-emerald-50');
            feedback.classList.add('text-rose-600', 'bg-rose-50');
        }
    }
};

window.retryPractice124CD_3a = function() {
    const choices = ['A', 'B', 'C', 'D'];
    choices.forEach(c => {
        const btn = document.getElementById(`p124CD-3a-${c}`);
        if (btn) {
            btn.disabled = false;
            if (btn.dataset.defaultClass) {
                btn.className = btn.dataset.defaultClass;
            }
        }
    });
    const retryContainer = document.getElementById(`p124CD-3a-retry`);
    if (retryContainer) retryContainer.classList.add('hidden');
    const solution = document.getElementById('p124CD-3a-solution');
    if (solution) solution.classList.add('hidden');
    const feedback = document.getElementById('p124CD-3a-feedback');
    if (feedback) feedback.classList.add('hidden');
};

window.checkPractice124CD_3b = function(choice) {
    const isCorrect = choice === 'C';
    const choices = ['A', 'B', 'C', 'D'];
    
    choices.forEach(c => {
        const btn = document.getElementById(`p124CD-3b-${c}`);
        if (btn) btn.disabled = true;
    });

    const selectedBtn = document.getElementById(`p124CD-3b-${choice}`);
    if (isCorrect) {
        selectedBtn.classList.remove('bg-white', 'text-indigo-900');
        selectedBtn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-500');
        playSFX('correct');
        const solution = document.getElementById('p124CD-3b-solution');
        if (solution) solution.classList.remove('hidden');
        const feedback = document.getElementById('p124CD-3b-feedback');
        if (feedback) {
            feedback.innerHTML = "Tuyệt vời! Chính xác! 🎉";
            feedback.classList.remove('hidden', 'text-rose-600', 'bg-rose-50');
            feedback.classList.add('text-emerald-600', 'bg-emerald-50');
        }
    } else {
        selectedBtn.classList.remove('bg-white', 'text-indigo-900');
        selectedBtn.classList.add('bg-rose-600', 'text-white', 'border-rose-500');
        const correctBtn = document.getElementById(`p124CD-3b-C`);
        if (correctBtn) {
            correctBtn.classList.remove('bg-white', 'text-indigo-900');
            correctBtn.classList.add('bg-emerald-600', 'text-white', 'border-emerald-500');
        }
        playSFX('wrong');
        const retryContainer = document.getElementById(`p124CD-3b-retry`);
        if (retryContainer) retryContainer.classList.remove('hidden');
        const feedback = document.getElementById('p124CD-3b-feedback');
        if (feedback) {
            feedback.innerHTML = "Chưa đúng rồi, cố gắng lại nhé! ❌";
            feedback.classList.remove('hidden', 'text-emerald-600', 'bg-emerald-50');
            feedback.classList.add('text-rose-600', 'bg-rose-50');
        }
    }
};

window.retryPractice124CD_3b = function() {
    const choices = ['A', 'B', 'C', 'D'];
    choices.forEach(c => {
        const btn = document.getElementById(`p124CD-3b-${c}`);
        if (btn) {
            btn.disabled = false;
            if (btn.dataset.defaultClass) {
                btn.className = btn.dataset.defaultClass;
            }
        }
    });
    const retryContainer = document.getElementById(`p124CD-3b-retry`);
    if (retryContainer) retryContainer.classList.add('hidden');
    const solution = document.getElementById('p124CD-3b-solution');
    if (solution) solution.classList.add('hidden');
    const feedback = document.getElementById('p124CD-3b-feedback');
    if (feedback) feedback.classList.add('hidden');
};

window.checkEx124CD_3 = function () {
    if (!window.lesson124CDState) window.lesson124CDState = { a: null, b: null };
    const feedback = document.getElementById('feedback-124CD-3');

    if (!window.lesson124CDState.a || !window.lesson124CDState.b) {
        feedback.classList.remove('opacity-0');
        feedback.classList.add('opacity-100', 'text-orange-500', 'bg-orange-50');
        feedback.innerText = "Em hãy chọn đáp án cho cả hai câu a) và b) trước khi kiểm tra nhé!";
        return;
    }

    feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-red-500', 'text-orange-500', 'bg-emerald-50', 'bg-red-50', 'bg-orange-50');
    if (window.lesson124CDState.a === 'B' && window.lesson124CDState.b === 'C') {
        feedback.innerText = "Chính xác cả hai câu! 🎉";
        feedback.classList.add('text-emerald-500', 'bg-emerald-50', 'opacity-100');
        playSFX('correct');
    } else {
        feedback.innerText = "Có câu chưa đúng rồi.";
        feedback.classList.add('text-red-500', 'bg-red-50', 'opacity-100');
        playSFX('wrong');
    }
};

window.lesson124CDSelectMCQ = function(exId, option) {
    const allBtns = document.querySelectorAll(`[id^="btn-${exId}-"]`);
    allBtns.forEach(btn => {
        btn.classList.remove('bg-rose-600', 'text-white', 'border-transparent');
        btn.classList.add('bg-rose-50', 'text-gray-400', 'border-rose-100');
    });

    const selectedBtn = document.getElementById(`btn-${exId}-${option}`);
    if(selectedBtn) {
        selectedBtn.classList.remove('bg-rose-50', 'text-gray-400', 'border-rose-100');
        selectedBtn.classList.add('bg-rose-600', 'text-white', 'border-transparent');
    }

    if (exId === '124CD-3a') window.lesson124CDState.a = option;
    if (exId === '124CD-3b') window.lesson124CDState.b = option;
};

window.submit124CD = function() {
    if (window.submitMathLesson) {
        window.submitMathLesson("Tiết 124CD: Thể tích hình lập phương", 100, "btn-submit-124CD");
    }
};
