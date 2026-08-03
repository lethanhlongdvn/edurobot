// js/components/Quiz.js - Hệ thống kiểm tra (Quiz) One-by-One
import { AIInteraction } from '../components/AIInteraction.js';

export const Quiz = {
    renderQuizContainer(lesson) {
        return `
            <div class="glass-card rounded-[40px] p-6 md:p-12 bg-white dark:bg-slate-900 min-h-[500px] animate-fade-in relative overflow-hidden">
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 dark:bg-orange-900/10 rounded-full blur-3xl opacity-50 border-orange-200 dark:border-orange-800/30"></div>
                <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 border-blue-200 dark:border-blue-800/30"></div>
                
                <div id="quiz-header-stubs" class="relative z-10">
                    <div class="flex items-center gap-2 mb-4 bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-2xl border border-orange-100 dark:border-orange-800/30 w-fit mx-auto">
                        <span class="text-orange-500">ℹ️</span>
                        <span id="quiz-pool-info" class="text-[10px] md:text-sm font-black text-orange-700 dark:text-orange-300 uppercase tracking-tight">Đang chuẩn bị thử thách...</span>
                    </div>
                </div>

                <div id="quiz-progress-bar" class="w-full h-2 md:h-3 bg-gray-100 dark:bg-slate-800 rounded-full mb-8 overflow-hidden relative z-10">
                    <div id="quiz-progress-fill" class="h-full bg-orange-500 rounded-full transition-all duration-500 w-[5%]"></div>
                </div>

                <div id="quiz-content" class="relative z-10 min-h-[300px] flex flex-col justify-center">
                    <div class="text-center py-20 flex flex-col items-center gap-4">
                        <div class="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                        <p class="text-lg font-bold text-orange-600 animate-pulse">Đang nạp câu hỏi...</p>
                    </div>
                </div>
                
                <div id="quiz-gamification-layer" class="absolute inset-0 pointer-events-none z-[100] flex items-center justify-center transition-all duration-300"></div>
            </div>

            <div class="mt-8 max-w-4xl mx-auto">
                <div class="glass-card rounded-[32px] p-6 bg-white/80 dark:bg-slate-900/80 shadow-lg border border-gray-100 dark:border-slate-800">
                    <div class="flex items-center gap-4 mb-6 relative">
                        <div class="w-12 h-12 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">🏆</div>
                        <h3 class="text-2xl md:text-3xl font-black text-amber-600 uppercase tracking-tight">Thành tích lớp học</h3>
                    </div>
                    <div id="quiz-leaderboard-list" class="flex flex-col gap-3">
                        <div class="text-center py-6 text-gray-400 text-sm font-black uppercase tracking-widest animate-pulse">Đang nạp bảng vàng...</div>
                    </div>
                </div>
            </div>
        `;
    },

    currentQuiz: [],
    currentIndex: 0,
    score: 0,
    correctCount: 0,
    streak: 0,
    isProcessing: false,
    audioCtx: null,
    _leaderboardUnsub: null,

    async initQuiz(lesson = null, retryCount = 0) {
        const targetLesson = lesson || window.currentLessonData;
        console.log(`[Quiz] Khởi tạo Quiz - Tiết: ${targetLesson?.period} - Lần: ${retryCount}`);
        
        const infoEl = document.getElementById('quiz-pool-info');
        const contentEl = document.getElementById('quiz-content');

        // 1. Kiểm tra dữ liệu sẵn sàng chưa
        const hasData = targetLesson?.quizPool && targetLesson.quizPool.length > 0;
        
        if (!hasData && retryCount < 10) {
            console.warn(`[Quiz] Dữ liệu chưa sẵn sàng cho bài ${targetLesson?.period}, đang thử lại...`);
            setTimeout(() => Quiz.initQuiz(targetLesson, retryCount + 1), 500);
            return;
        }

        // 2. Nạp Pool
        let pool = targetLesson?.quizPool || [];
        if (pool.length === 0) {
            console.error("[Quiz] Không tìm thấy quizPool sau 10 lần thử.");
            if (contentEl) contentEl.innerHTML = '<div class="text-center py-20 text-gray-400 font-bold italic">Không tìm thấy dữ liệu thử thách cho bài học này.</div>';
            return;
        }

        // 3. Trộn và chọn câu hỏi (mặc định 10 câu, trừ khi được chỉ định khác)
        console.log(`[Quiz] Tìm thấy ${pool.length} câu hỏi. Đang chuẩn bị bộ câu hỏi ngẫu nhiên...`);
        const count = targetLesson?.quizCount || 10;
        let finalPool = [...pool].sort(() => 0.5 - Math.random()).slice(0, count);

        // 4. Cập nhật trạng thái
        Quiz.currentQuiz = finalPool;
        Quiz.currentIndex = 0;
        Quiz.score = 0;
        Quiz.correctCount = 0;
        Quiz.streak = 0;
        Quiz.startTime = Date.now();

        if (infoEl) {
            const percentPerQuestion = Math.round(100 / finalPool.length);
            if (finalPool.length === pool.length) {
                infoEl.innerText = `Thử thách bao gồm tất cả ${finalPool.length} câu hỏi ôn tập (${percentPerQuestion}%/câu).`;
            } else {
                infoEl.innerText = `Hệ thống chọn ngẫu nhiên ${finalPool.length} câu (${percentPerQuestion}%/câu) từ kho dữ liệu bài học.`;
            }
        }

        // 5. Render câu đầu tiên
        Quiz.renderCurrentQuestion();
        
        // 6. Nạp bảng điểm
        if (window.db) Quiz.loadLeaderboard(targetLesson);
    },

    renderCurrentQuestion() {
        if (!Quiz.currentQuiz || Quiz.currentQuiz.length === 0) {
             console.error("[Quiz] renderCurrentQuestion: currentQuiz rỗng");
             return;
        }

        if (Quiz.currentIndex >= Quiz.currentQuiz.length) {
            Quiz.finishQuiz();
            return;
        }

        const q = Quiz.currentQuiz[Quiz.currentIndex];
        const container = document.getElementById('quiz-content');
        if (!container) return;

        // === SHUFFLE ĐÁP ÁN ===
        // Tạo mảng index [0,1,2,3] rồi xáo trộn Fisher-Yates
        const indices = q.options.map((_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        // Tạo mảng options đã trộn và tìm vị trí mới của đáp án đúng
        const shuffledOptions = indices.map(i => q.options[i]);
        const shuffledAnswerIdx = indices.indexOf(q.answer);
        // Lưu lại vị trí đáp án đúng đã trộn cho câu hiện tại
        Quiz._currentShuffledAnswer = shuffledAnswerIdx;

        const pFill = document.getElementById('quiz-progress-fill');
        if (pFill) pFill.style.width = `${((Quiz.currentIndex + 1) / Quiz.currentQuiz.length) * 100}%`;

        console.log(`[Quiz] Câu ${Quiz.currentIndex + 1} - Đáp án gốc: ${q.answer} → Sau trộn: ${shuffledAnswerIdx}`);

        container.innerHTML = `
            <div class="animate-slide-in-right">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white leading-tight flex-1">
                        <span class="text-orange-500 font-black mr-2">Câu ${Quiz.currentIndex + 1}:</span> ${q.question}
                    </h3>
                    
                    <div class="flex gap-3 shrink-0">
                        <div class="flex flex-col items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-2 border-blue-100 dark:border-blue-800/30 min-w-[80px]">
                            <span class="text-[10px] font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Điểm</span>
                            <span class="text-2xl font-black text-blue-600 dark:text-blue-400 leading-none">${Quiz.score}</span>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    ${shuffledOptions.map((opt, idx) => `
                        <button onclick="Quiz.selectAnswer(${idx})" class="quiz-opt-btn group relative w-full text-left p-5 rounded-[24px] border-2 border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:border-orange-400 hover:shadow-xl transition-all duration-300">
                            <div class="flex items-center">
                                <div class="w-10 h-10 border-2 border-gray-200 dark:border-slate-700 rounded-full flex-shrink-0 mr-4 group-hover:border-orange-500 flex items-center justify-center font-black text-gray-400 group-hover:text-orange-600 transition-colors opt-indicator">${String.fromCharCode(65 + idx)}</div>
                                <span class="text-xl md:text-2xl font-bold text-gray-700 dark:text-slate-200 leading-tight group-hover:text-gray-900 transition-colors">${opt}</span>
                            </div>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    },

    selectAnswer(idx) {
        if (Quiz.isProcessing) return;
        Quiz.isProcessing = true;

        // Dùng vị trí đáp án ĐÃ TRỘN thay vì q.answer gốc
        const correctIdx = Quiz._currentShuffledAnswer;
        const isCorrect = (idx === correctIdx);

        if (isCorrect) {
            Quiz.correctCount++;
            Quiz.score = Math.round((Quiz.correctCount / Quiz.currentQuiz.length) * 100);
            Quiz.playSFX('correct');
            Quiz.showLottieFeedback(true);
            if (typeof confetti === 'function') confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
        } else {
            Quiz.playSFX('wrong');
            Quiz.showLottieFeedback(false);
        }

        // Highlight đáp án đúng/sai của lựa chọn hiện tại
        const btns = document.querySelectorAll('.quiz-opt-btn');
        const indicators = document.querySelectorAll('.opt-indicator');
        btns.forEach((btn, i) => {
            btn.onclick = null;
            if (i === idx) {
                if (isCorrect) {
                    btn.classList.add('border-emerald-500', 'bg-emerald-50', 'dark:bg-emerald-900/20');
                    indicators[i].classList.add('bg-emerald-500', 'border-emerald-500', 'text-white');
                    indicators[i].innerHTML = '✓';
                } else {
                    btn.classList.add('border-rose-500', 'bg-rose-50', 'dark:bg-rose-900/20');
                    indicators[i].classList.add('bg-rose-500', 'border-rose-500', 'text-white');
                    indicators[i].innerHTML = '✕';
                }
            }
            btn.classList.add('opacity-50');
            if (i === idx) btn.classList.remove('opacity-50');
        });

        setTimeout(() => {
            Quiz.currentIndex++;
            Quiz.isProcessing = false;
            Quiz.renderCurrentQuestion();
        }, isCorrect ? 1500 : 2500);
    },

    finishQuiz() {
        const timeTaken = Math.round((Date.now() - Quiz.startTime) / 1000);
        const container = document.getElementById('quiz-content');
        if (!container) return;

        container.innerHTML = `
            <div class="text-center animate-bounce-in py-10">
                <div class="text-8xl mb-6">🏆</div>
                <h3 class="text-4xl font-black text-gray-900 dark:text-white mb-2">Thử thách kết thúc!</h3>
                <p class="text-2xl text-gray-500 dark:text-gray-400 mb-8">
                    Bạn đúng <span class="text-orange-600 font-black">${Quiz.correctCount}/${Quiz.currentQuiz.length}</span> câu. 
                    Điểm số: <span class="text-blue-600 font-black">${Quiz.score}</span>
                </p>
                <div class="flex gap-4 justify-center">
                    <button id="btn-submit-final" onclick="Quiz.submitProgress(${timeTaken})" class="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl transition-all transform hover:-translate-y-2">🚀 Nộp điểm</button>
                    <button onclick="Quiz.initQuiz()" class="bg-gray-200 text-gray-700 px-12 py-5 rounded-full font-black text-xl shadow-2xl transition-all transform hover:-translate-y-2">🔄 Làm lại</button>
                </div>
            </div>
        `;
        if (typeof confetti === 'function') confetti({ particleCount: 150, spread: 70 });
    },

    submitProgress(time) {
        if (window.submitMathLesson) {
             const msg = `Trắc nghiệm tổng: Đúng ${Quiz.correctCount}/${Quiz.currentQuiz.length} câu. (Củng cố: ${Quiz.score})`;
             window.submitMathLesson(msg, Quiz.score, 'btn-submit-final', time, Quiz.currentQuiz.length, Quiz.correctCount);
        }
    },

    loadLeaderboard(lesson) {
        if (!window.db || !lesson) return;
        const listDiv = document.getElementById('quiz-leaderboard-list');
        if (!listDiv) return;

        // Ensure periodId is a string to match Firestore storage (e.g., "69" instead of "069")
        const periodId = String(lesson.period || lesson.id);
        const currentSub = window.router?.currentSubject || 'vietnamese';
        const subName = (currentSub === 'math') ? "Toán học" : (currentSub === 'history' ? "Lịch sử - Địa lý" : "Tiếng Việt");

        if (Quiz._leaderboardUnsub) Quiz._leaderboardUnsub();

        listDiv.innerHTML = '<div class="text-center py-8 text-slate-500"><i class="fas fa-spinner fa-spin text-2xl mb-2 opacity-30"></i><p class="text-[10px] font-black uppercase tracking-widest">Đang nạp bảng vàng...</p></div>';

        Quiz._leaderboardUnsub = window.db.collection("diem_tieng_viet_lop5")
            .where("period", "==", periodId)
            .where("subject", "==", subName)
            .onSnapshot(snap => {
                if (snap.empty) {
                    listDiv.innerHTML = `
                        <div class="text-center py-12 text-slate-500">
                            <i class="fas fa-info-circle text-3xl mb-3 opacity-20"></i>
                            <p class="text-xs font-bold uppercase tracking-widest">Chưa có thành tích nào</p>
                            <p class="text-[10px] opacity-70 mt-1">Hãy là người đầu tiên chinh phục bài học này!</p>
                        </div>
                    `;
                    return;
                }
                
                let results = [];
                snap.forEach(doc => results.push(doc.data()));
                
                // Sort by timestamp DESC
                results.sort((a, b) => {
                    const tA = a.timestamp?.toDate ? a.timestamp.toDate() : 0;
                    const tB = b.timestamp?.toDate ? b.timestamp.toDate() : 0;
                    return tB - tA;
                });

                const topResults = results.slice(0, 10);

                const numExDisplay = Math.min(5, lesson.exercises?.length || 3);
                const exIcons = ["📚", "📝", "✅", "🖊️", "🌟"];
                const exColors = ["text-blue-600", "text-emerald-600", "text-orange-600", "text-rose-500", "text-purple-500"];

                const getIcon = (score) => {
                    if (score === undefined || score === null || (typeof score === 'number' && score === 0)) return '<span class="text-slate-300 text-xs">-</span>';
                    if (score >= 100) return '<span class="text-base text-emerald-500">✅</span>';
                    return '<span class="text-base text-red-500">❌</span>';
                };

                const formatTime = (s) => {
                    if (!s) return "00:00";
                    const m = Math.floor(s / 60);
                    const sec = s % 60;
                    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
                };

                listDiv.innerHTML = `
                    <div class="overflow-x-auto -mx-4 md:mx-0">
                        <table class="w-full text-left border-collapse min-w-[650px]">
                            <thead>
                                <tr class="text-[9px] font-black text-slate-500 uppercase tracking-tighter border-b border-white/5">
                                    <th class="px-3 py-3 w-8">
                                        <div class="flex flex-col items-center">
                                            <span class="text-base mb-1">🔢</span>
                                            <span>TT</span>
                                        </div>
                                    </th>
                                    <th class="px-3 py-3">
                                        <div class="flex flex-col items-start px-2">
                                            <span class="text-base mb-1">👤</span>
                                            <span>Học sinh</span>
                                        </div>
                                    </th>
                                    ${Array.from({ length: numExDisplay }).map((_, i) => `
                                        <th class="px-2 py-3 text-center">
                                            <div class="flex flex-col items-center">
                                                <span class="text-base mb-1">${exIcons[i] || '📝'}</span>
                                                <span class="${exColors[i] || 'text-slate-500'}">Bài ${i + 1}</span>
                                            </div>
                                        </th>
                                    `).join('')}
                                    <th class="px-2 py-3 text-center">
                                        <div class="flex flex-col items-center">
                                            <span class="text-base mb-1">✍️</span>
                                            <span class="text-orange-500">L.Tập</span>
                                        </div>
                                    </th>
                                    <th class="px-2 py-3 text-center">
                                        <div class="flex flex-col items-center">
                                            <span class="text-base mb-1">🌟</span>
                                            <span class="text-indigo-400">C.Cố</span>
                                        </div>
                                    </th>
                                    <th class="px-2 py-3 text-center">
                                        <div class="flex flex-col items-center">
                                            <span class="text-base mb-1">📊</span>
                                            <span class="text-amber-500">Điểm TB</span>
                                        </div>
                                    </th>
                                    <th class="px-3 py-3 text-right">
                                        <div class="flex flex-col items-end">
                                            <span class="text-base mb-1">⏱️</span>
                                            <span>T.Gian</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-white/5">
                                ${topResults.map((r, idx) => {
                                    const scores = Array.from({ length: numExDisplay }).map((_, i) => r[`scoreEx${i + 1}`]);
                                    const cungCo = r.scoreQuiz || r.score || 0;

                                    // Calculate Luyen Tap based on total exercises in the lesson
                                    // Each exercise contributes (100 / totalExercises)%
                                    const totalEx = lesson.exercises ? lesson.exercises.length : 3;
                                    
                                    let sumScores = 0;
                                    for(let i=1; i<=totalEx; i++) {
                                        sumScores += (r[`scoreEx${i}`] || 0);
                                    }
                                    const luyenTap = Math.round(sumScores / totalEx);
                                    
                                    // Final Average
                                    const avg = Math.round((luyenTap + cungCo) / 2);

                                    return `
                                        <tr class="hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors group">
                                            <td class="px-3 py-3.5">
                                                <div class="w-6 h-6 flex items-center justify-center rounded-lg ${
                                                    idx === 0 ? 'bg-amber-400 text-amber-900 shadow-lg shadow-amber-400/20' : 
                                                    idx === 1 ? 'bg-slate-300 text-slate-800' :
                                                    idx === 2 ? 'bg-orange-400 text-orange-900' : 'bg-slate-800 text-slate-500'
                                                } text-[10px] font-black">${idx + 1}</div>
                                            </td>
                                            <td class="px-3 py-3.5">
                                                <div class="text-xs font-black text-slate-800 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">${window.escapeHTML ? window.escapeHTML(r.studentName || 'Học sinh') : (r.studentName || 'Học sinh')}</div>
                                                <div class="text-[10px] font-bold text-slate-500 dark:text-slate-400">${window.escapeHTML ? window.escapeHTML(r.studentSchool || 'Trường') : (r.studentSchool || 'Trường')} - ${window.escapeHTML ? window.escapeHTML(r.studentClass || 'Lớp') : (r.studentClass || 'Lớp')}</div>
                                            </td>
                                            ${scores.map(s => `
                                                <td class="px-2 py-3.5 text-center text-sm">${getIcon(s)}</td>
                                            `).join('')}
                                            <td class="px-2 py-3.5 text-center text-[11px] font-black text-orange-400">${luyenTap}%</td>
                                            <td class="px-2 py-3.5 text-center text-[11px] font-black text-indigo-400">${cungCo}%</td>
                                            <td class="px-2 py-3.5 text-center">
                                                <span class="px-2 py-0.5 rounded-lg bg-amber-500/10 text-amber-500 text-[11px] font-black">${avg}%</span>
                                            </td>
                                            <td class="px-3 py-3.5 text-right font-mono text-[10px] text-slate-500">${formatTime(r.timeTaken)}</td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                `;
            }, error => {
                console.error("[Quiz] Leaderboard Error:", error);
                let errorMsg = "Không thể tải bảng vàng";
                let subMsg = "Vui lòng thử lại sau hoặc báo quản trị viên.";
                
                if (error.code === 'failed-precondition') {
                    errorMsg = "Lỗi chỉ mục Firestore";
                    subMsg = "Hệ thống đang yêu cầu cập nhật chỉ mục (Index). Admin vui lòng xem Console.";
                }

                listDiv.innerHTML = `
                    <div class="text-center py-12 text-red-400 bg-red-500/5 rounded-3xl border border-red-500/10">
                        <i class="fas fa-exclamation-triangle text-3xl mb-3 opacity-40"></i>
                        <p class="text-xs font-black uppercase tracking-widest">${errorMsg}</p>
                        <p class="text-[9px] text-slate-500 mt-2 px-6 leading-relaxed">${subMsg}</p>
                    </div>
                `;
            });
    },

    playSFX(type) {
        try {
            if (!Quiz.audioCtx) Quiz.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (Quiz.audioCtx.state === 'suspended') Quiz.audioCtx.resume();
            const o = Quiz.audioCtx.createOscillator();
            const g = Quiz.audioCtx.createGain();
            o.connect(g); g.connect(Quiz.audioCtx.destination);
            const now = Quiz.audioCtx.currentTime;
            if (type === 'correct') {
                o.frequency.setValueAtTime(600, now);
                o.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
                g.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                o.start(now); o.stop(now + 0.3);
            } else {
                o.frequency.setValueAtTime(300, now);
                o.frequency.exponentialRampToValueAtTime(100, now + 0.3);
                g.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
                o.start(now); o.stop(now + 0.4);
            }
        } catch(e) {
            console.warn("Audio feedback error:", e);
        }
    },

    showLottieFeedback(correct) {
        const layer = document.getElementById('quiz-gamification-layer');
        if (!layer) return;
        layer.classList.add('bg-black/10', 'backdrop-blur-[2px]');
        layer.innerHTML = `
            <div class="animate-bounce-in flex flex-col items-center justify-center p-6 rounded-3xl bg-white/95 dark:bg-slate-900/95 border-4 ${correct ? 'border-emerald-500 shadow-emerald-500/30' : 'border-rose-500 shadow-rose-500/30'} shadow-2xl scale-110">
                <span class="text-8xl md:text-[100px] mb-2 drop-shadow-md">${correct ? '✅' : '❌'}</span>
                <span class="text-2xl md:text-3xl font-black uppercase ${correct ? 'text-emerald-600' : 'text-rose-600'} tracking-wider">${correct ? 'Tuyệt vời!' : 'Thử lại nhé!'}</span>
            </div>
        `;
        setTimeout(() => { 
            if (layer) {
                layer.innerHTML = '';
                layer.classList.remove('bg-black/10', 'backdrop-blur-[2px]');
            }
        }, 1500);
    },

    cleanup() {
        if (Quiz._leaderboardUnsub) Quiz._leaderboardUnsub();
    }
};

window.Quiz = Quiz;
