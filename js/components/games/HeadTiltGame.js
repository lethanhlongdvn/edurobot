// js/components/games/HeadTiltGame.js
// Refactored to optimize camera performance and fix data loading issues.

export const HeadTiltGame = {
    container: null,
    onClose: null,

    // MediaPipe properties
    videoElement: null,
    canvasElement: null,
    canvasCtx: null,
    faceMesh: null,
    camera: null,
    isActive: false,

    // Game Content
    questions: [],
    currentQuestionIndex: 0,
    lessonPeriod: null,
    isTeacherMode: false,
    currentSet: 1,
    score: 0,
    hasAnswered: false,
    selectedSide: null,
    startTime: null,

    // Configs
    tiltThreshold: 0.15,
    requiredHoldTime: 1200, // Slightly reduced for better responsiveness

    initSounds() {
        if (this.sounds) return;

        // Detect path prefix based on context (standalone vs embedded)
        let pathPrefix = '';
        if (window.location.pathname.includes('/games/')) {
            // Standalone mode: game is at games/head_tilt.html, audio at assets/audio/
            pathPrefix = '../';
        } else {
            const scripts = document.getElementsByTagName('script');
            for (let s of scripts) {
                if (s.src.includes('js/components/games/')) {
                    pathPrefix = s.src.split('js/components/games/')[0];
                    break;
                }
            }
        }

        this.sounds = {
            bg: new Audio(pathPrefix + 'assets/audio/game/Quizi.mp3'),
            correct: new Audio(pathPrefix + 'assets/audio/dungroi.mp3'),
            wrong: new Audio(pathPrefix + 'assets/audio/sai.mp3'),
            win: new Audio(pathPrefix + 'assets/audio/Am_thanh_chuc_mung.mp3')
        };

        this.sounds.bg.loop = true;
        this.sounds.bg.volume = 0.4;
    },

    playBgMusic() {
        if (this.sounds && this.sounds.bg) {
            this.sounds.bg.play().catch(e => console.warn("Audio play failed:", e));
        }
    },

    stopBgMusic() {
        if (this.sounds && this.sounds.bg) {
            this.sounds.bg.pause();
            this.sounds.bg.currentTime = 0;
        }
    },

    async start(containerElement, optionsStr, onCloseCallback) {
        this.container = containerElement;
        this.onClose = onCloseCallback;
        this.isActive = true;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.hasAnswered = false;

        const role = localStorage.getItem('userRole') || '';
        this.isTeacherMode = (role === 'teacher' || role === 'admin' || role === 'teacher-admin');

        this.lessonPeriod = (window.router && window.router.currentLessonPeriod) || "";
        this.currentSet = 1;

        await this.loadQuestions(optionsStr);
        this.initSounds();

        if (this.questions.length === 0) {
            this.renderEmptyState();
        } else {
            this.renderBaseLayout();
            this.updateQuestionUI();
            this.playBgMusic();
            await this.initCameraSettings();
        }
    },

    renderEmptyState() {
        if (this.isTeacherMode) {
            this.showTeacherEditor();
        } else {
            this.container.innerHTML = `
                <div class="relative w-full h-full flex flex-col items-center justify-center bg-slate-50 font-['Be_Vietnam_Pro']">
                    <button id="ht-back-btn" class="absolute top-6 left-6 z-[100] flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-2xl font-black text-slate-600 hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm active:scale-95 group">
                        <div class="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        </div>
                        <span>QUAY LẠI</span>
                    </button>
                    <div class="bg-white p-10 rounded-3xl shadow-xl text-center border-t-8 border-indigo-500 max-w-md">
                        <h2 class="text-2xl font-black text-slate-800 mb-4 text-center">BÀI HỌC CHƯA SẴN SÀNG</h2>
                        <p class="text-slate-500 mb-8 font-bold text-center">Giáo viên chưa biên soạn câu hỏi cho tiết học này. Vui lòng quay lại sau!</p>
                        <button id="ht-empty-close" class="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black transition-all shadow-md">ĐÓNG TRÒ CHƠI</button>
                    </div>
                </div>
            `;
            const btn = document.getElementById('ht-empty-close');
            if (btn) btn.onclick = () => this.onClose && this.onClose();
            const backBtn = document.getElementById('ht-back-btn');
            if (backBtn) backBtn.onclick = () => this.onClose && this.onClose();
        }
    },

    getTeacherId() {
        return localStorage.getItem('teacherName') || localStorage.getItem('userEmail') || 'unknown_teacher';
    },

    async loadQuestions(optionsStr) {
        const teacherId = this.getTeacherId();
        const period = String(this.lessonPeriod || "");

        // --- 1. PRIORITY: Check for Custom Teacher Overrides (Firestore/LocalStorage) ---
        // LocalStorage first (cache)
        const localKey = `HTGame_Data_${period}_${teacherId}_Set_${this.currentSet}`;
        const savedData = localStorage.getItem(localKey);
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                if (parsed && Array.isArray(parsed) && parsed.length > 0) {
                    this.questions = parsed;
                    console.log("[HeadTilt] Loaded from LocalStorage Override");
                    return;
                }
            } catch (e) { console.warn("Local storage parse failed", e); }
        }

        // Firestore second
        if (window.db) {
            try {
                if (this.isTeacherMode) {
                    const docId = `${period}_${teacherId}_Set_${this.currentSet}`;
                    const doc = await window.db.collection('head_tilt_games').doc(docId).get();
                    if (doc.exists && doc.data().questions?.length > 0) {
                        this.questions = doc.data().questions;
                        console.log("[HeadTilt] Loaded from Firestore (Teacher)");
                        return;
                    }
                } else {
                    const snapshot = await window.db
                        .collection('head_tilt_games')
                        .where('lessonPeriod', '==', period)
                        .where('setNumber', '==', this.currentSet)
                        .orderBy('updatedAt', 'desc')
                        .limit(1)
                        .get();

                    if (!snapshot.empty) {
                        this.questions = snapshot.docs[0].data().questions || [];
                        console.log("[HeadTilt] Loaded from Firestore (Student)");
                        return;
                    }
                }
            } catch (e) { console.error('[HeadTilt] Firestore Load Error:', e); }
        }

        // --- 2. FALLBACK: Use provided optionsStr (Lesson Quiz Pool) ---
        let rawOptions = null;
        if (optionsStr && Array.isArray(optionsStr) && optionsStr.length > 0) {
            rawOptions = optionsStr;
        } else if (optionsStr && typeof optionsStr === 'string' && optionsStr.length > 10) {
            try { rawOptions = JSON.parse(optionsStr); } catch (e) {}
        }

        if (rawOptions && Array.isArray(rawOptions) && rawOptions.length > 0) {
            // Check if it needs conversion from QuizPool format
            if (rawOptions[0].question && !rawOptions[0].q) {
                this.questions = this.convertQuizPoolToHeadTilt(rawOptions);
                console.log("[HeadTilt] Loaded from optionsStr (Converted)");
            } else {
                this.questions = rawOptions;
                console.log("[HeadTilt] Loaded from optionsStr (Direct)");
            }
            return;
        }

        // --- 3. LAST FALLBACK: Global lesson data ---
        const id = period;
        let lessonData = window[`lesson_${id}`] || window[`lesson${id}`];
        if (lessonData && (lessonData.quizPool || lessonData.metadata?.quizPool)) {
            const pool = lessonData.quizPool || lessonData.metadata.quizPool;
            this.questions = this.convertQuizPoolToHeadTilt(pool);
            console.log("[HeadTilt] Loaded from Lesson Global Fallback");
            return;
        }

        // --- 4. ULTIMATE FALLBACK: QuestionBankManager ---
        if (window.QuestionBankManager) {
            try {
                const qbQuestions = await window.QuestionBankManager.getQuestions({
                    periods: parseInt(period),
                    totalCount: 15
                });
                if (qbQuestions && qbQuestions.length > 0) {
                    this.questions = this.convertQuizPoolToHeadTilt(qbQuestions);
                    console.log("[HeadTilt] Loaded from QuestionBankManager Fallback");
                    return;
                }
            } catch (e) { console.warn("[HeadTilt] QBM Fallback failed", e); }
        }

        this.questions = [];
    },

    convertQuizPoolToHeadTilt(quizPool) {
        if (!quizPool || !Array.isArray(quizPool)) return [];
        const loadedQuestions = [];
        const maxQuestions = Math.min(quizPool.length, 15);
        let tempPool = [...quizPool].sort(() => Math.random() - 0.5);
        let selected = tempPool.slice(0, maxQuestions);

        selected.forEach(q => {
            if (!q) return;
            const qText = q.question || q.q || "Câu hỏi đang được cập nhật...";
            const options = q.options || [];
            const answerIndex = typeof q.answer === 'number' ? q.answer : parseInt(q.answer);
            
            let correctOpt = "";
            if (options[answerIndex] !== undefined) {
                correctOpt = options[answerIndex];
            } else if (q.a !== undefined) {
                correctOpt = q.a;
            } else {
                correctOpt = q.answer || "Đáp án đúng";
            }

            const wrongOpts = options.filter((o, i) => i !== answerIndex && o !== correctOpt);
            const randomWrongOpt = wrongOpts.length > 0 ? wrongOpts[Math.floor(Math.random() * wrongOpts.length)] : "...";

            const isLeftCorrect = Math.random() < 0.5;
            loadedQuestions.push({
                q: qText,
                a1: isLeftCorrect ? correctOpt : randomWrongOpt,
                a2: isLeftCorrect ? randomWrongOpt : correctOpt,
                correct: isLeftCorrect ? "left" : "right",
                mediaType: q.mediaType || 'none',
                mediaUrl: q.mediaUrl || ''
            });
        });
        return loadedQuestions;
    },

    renderBaseLayout() {
        this.container.innerHTML = `
            <div class="relative w-full h-full flex flex-col items-center justify-center bg-indigo-50 text-slate-800 overflow-hidden font-['Be_Vietnam_Pro']">
                <div class="absolute inset-0 bg-gradient-to-br from-sky-100 via-indigo-50 to-pink-100 opacity-80"></div>
                <div class="absolute top-20 left-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
                <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
                
                <button onclick="HeadTiltGame.cleanup(); HeadTiltGame.onClose && HeadTiltGame.onClose()" class="absolute top-6 left-6 z-[100] flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-2xl font-black text-slate-600 hover:bg-slate-50 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm active:scale-95 group">
                    <div class="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </div>
                    <span>QUAY LẠI</span>
                </button>

                <div class="absolute top-6 right-6 flex flex-wrap justify-end items-center gap-4 z-[100]">
                    <div class="bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border-2 border-white shadow-sm">
                        <span class="text-indigo-500 font-black mr-2 text-xs md:text-sm">CÂU HỎI:</span>
                        <span id="ht-progress-text" class="text-slate-800 font-black text-xs md:text-sm">-- / --</span>
                    </div>
                    <div class="flex gap-3 items-center pointer-events-auto">
                        <div class="flex bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border-2 border-white shadow-sm">
                            ${[1, 2, 3, 4, 5].map(n => `
                                <button onclick="window.HeadTiltGame.playSet(${n})" id="btn-set-${n}"
                                    class="w-8 h-8 md:w-10 md:h-10 rounded-xl font-black text-xs md:text-sm transition-all text-slate-500 hover:bg-indigo-50 hover:text-indigo-600">
                                    ${n}
                                </button>
                            `).join('')}
                        </div>
                        ${this.isTeacherMode ? `
                        <button onclick="window.HeadTiltGame.showTeacherEditor()" class="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 h-12 rounded-2xl font-black text-xs shadow-sm transition-all flex items-center gap-2">
                            🛠️ BIÊN TẬP
                        </button>
                        ` : ''}
                    </div>
                </div>

                <!-- Dynamic Content Container -->
                <div id="ht-game-content" class="w-full flex flex-col items-center justify-start z-20"></div>

                <!-- Static Camera Section -->
                <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-40">
                    <div class="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full border-[8px] border-white shadow-2xl bg-indigo-50 overflow-hidden shrink-0">
                        <video id="ht-video" class="absolute inset-0 w-full h-full object-cover -scale-x-100" autoplay playsinline muted></video>
                        <canvas id="ht-canvas" class="absolute inset-0 w-full h-full object-cover -scale-x-100 opacity-60"></canvas>
                        <div id="tilt-loading" class="absolute inset-0 flex items-center justify-center bg-white/90 z-20 transition-opacity duration-500">
                            <span class="text-[10px] font-black text-indigo-500 animate-pulse tracking-widest text-center px-4">ĐANG BẬT<br>CAMERA...</span>
                        </div>
                    </div>
                    <div class="mt-4 bg-white/80 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white shadow-lg flex items-center gap-3">
                         <div class="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                         <span id="tilt-status" class="text-[10px] font-black text-slate-600 uppercase tracking-widest">ĐANG KHỞI TẠO AI...</span>
                    </div>
                </div>

                <div id="tilt-feedback" class="fixed inset-0 z-[2000] flex items-center justify-center bg-white/60 backdrop-blur-md opacity-0 pointer-events-none transition-opacity duration-500">
                    <div id="tilt-feedback-content" class="scale-50 transition-transform duration-500 transform text-center"></div>
                </div>
            </div>
        `;

        this.videoElement = document.getElementById('ht-video');
        this.canvasElement = document.getElementById('ht-canvas');
        this.canvasCtx = this.canvasElement.getContext('2d');
    },

    updateQuestionUI() {
        const currentQ = this.questions[this.currentQuestionIndex];
        const progressText = document.getElementById('ht-progress-text');
        if (progressText) progressText.innerText = `${this.currentQuestionIndex + 1} / ${this.questions.length}`;

        // Set buttons active state
        [1, 2, 3, 4, 5].forEach(n => {
            const btn = document.getElementById(`btn-set-${n}`);
            if (btn) {
                if (this.currentSet === n) {
                    btn.className = "w-8 h-8 md:w-10 md:h-10 rounded-xl font-black text-xs md:text-sm transition-all bg-indigo-500 text-white shadow-md scale-105";
                } else {
                    btn.className = "w-8 h-8 md:w-10 md:h-10 rounded-xl font-black text-xs md:text-sm transition-all text-slate-500 hover:bg-slate-100";
                }
            }
        });

        const content = document.getElementById('ht-game-content');
        if (!content) return;

        content.innerHTML = `
            <div class="w-11/12 md:w-4/5 max-w-4xl mt-16 md:mt-28 mb-8 animate-fade-in-down">
                <div class="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-10 text-center shadow-xl border-2 border-white relative">
                    ${this.renderGameMedia(currentQ)}
                    <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-widest shadow-md">CÂU HỎI</div>
                    <h2 class="text-2xl md:text-4xl font-black leading-tight text-indigo-950">${currentQ.q || currentQ.question || ""}</h2>
                </div>
            </div>

            <div class="flex gap-4 md:gap-12 items-end justify-center w-full max-w-5xl px-4 pb-40">
                <div id="option-left" class="group relative flex-1 max-w-[400px] transition-all duration-500">
                    <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-6 py-2 rounded-2xl font-black text-xs shadow-xl z-20 whitespace-nowrap opacity-0 group-[.active]:opacity-100 transition-opacity">NGHIÊNG TRÁI</div>
                    <div class="relative bg-white/95 backdrop-blur-3xl p-1 rounded-[3rem] border-4 border-white shadow-xl overflow-hidden group-[.active]:border-pink-500 group-[.active]:bg-pink-50 group-[.active]:scale-105 transition-all">
                        <div class="h-24 md:h-48 flex items-center justify-center p-6 text-center">
                            <span class="text-lg md:text-3xl font-black text-slate-800 leading-tight">${currentQ.a1 || "..."}</span>
                        </div>
                        <div class="h-2 bg-slate-100 overflow-hidden rounded-full m-2">
                            <div id="progress-left" class="h-full bg-pink-500 w-0 transition-all duration-100"></div>
                        </div>
                    </div>
                </div>

                <div id="option-right" class="group relative flex-1 max-w-[400px] transition-all duration-500">
                    <div class="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-2xl font-black text-xs shadow-xl z-20 whitespace-nowrap opacity-0 group-[.active]:opacity-100 transition-opacity">NGHIÊNG PHẢI</div>
                    <div class="relative bg-white/95 backdrop-blur-3xl p-1 rounded-[3rem] border-4 border-white shadow-xl overflow-hidden group-[.active]:border-blue-500 group-[.active]:bg-blue-50 group-[.active]:scale-105 transition-all">
                        <div class="h-24 md:h-48 flex items-center justify-center p-6 text-center">
                            <span class="text-lg md:text-3xl font-black text-slate-800 leading-tight">${currentQ.a2 || "..."}</span>
                        </div>
                        <div class="h-2 bg-slate-100 overflow-hidden rounded-full m-2">
                            <div id="progress-right" class="h-full bg-blue-500 w-0 transition-all duration-100"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    async playSet(n) {
        if (this.currentSet === n && this.questions.length > 0) return;
        this.currentSet = n;

        const loader = document.getElementById('tilt-loading');
        if (loader) {
            loader.style.display = 'flex';
            loader.style.opacity = '1';
        }

        await this.loadQuestions();

        if (this.questions.length === 0) {
            if (this.isTeacherMode) {
                this.showTeacherEditor();
            } else {
                alert(`Bộ câu hỏi Bài ${n} chưa sẵn sàng!`);
            }
        } else {
            this.currentQuestionIndex = 0;
            this.score = 0;
            this.hasAnswered = false;
            this.updateQuestionUI();

            // Hide loader if camera already ready
            if (this.camera && document.getElementById('tilt-loading')) {
                document.getElementById('tilt-loading').style.opacity = '0';
                setTimeout(() => { if (document.getElementById('tilt-loading')) document.getElementById('tilt-loading').style.display = 'none'; }, 500);
            }
        }
    },

    renderGameMedia(q) {
        if (!q.mediaType || q.mediaType === 'none' || !q.mediaUrl) return '';
        if (q.mediaType === 'image') return `<img src="${q.mediaUrl}" class="max-h-[220px] w-auto mx-auto rounded-3xl shadow-xl border-4 border-white/10 mb-6">`;
        if (q.mediaType === 'video') return `<video src="${q.mediaUrl}" class="max-h-[220px] w-auto mx-auto rounded-3xl shadow-xl mb-6" controls autoplay muted></video>`;
        if (q.mediaType === 'audio') return `<audio src="${q.mediaUrl}" controls class="mx-auto mb-6 opacity-80"></audio>`;
        return '';
    },

    showTeacherEditor() {
        this.cleanup();
        this.isActive = false;

        let editorRows = this.questions.length > 0 ? this.questions : [
            { q: "", a1: "", a2: "", correct: "left", mediaType: 'none', mediaUrl: '' }
        ];

        this.container.innerHTML = `
            <div class="w-full h-full flex flex-col bg-slate-50 overflow-y-auto font-['Be_Vietnam_Pro'] relative z-[60]">
                <div class="bg-white border-b py-6 pl-6 pr-20 md:pl-10 md:pr-24 sticky top-0 z-50 shadow-sm flex flex-wrap gap-4 justify-between items-center relative">
                    <div class="flex items-center gap-4">
                        <div class="bg-indigo-600 p-3 rounded-2xl text-white shadow-lg">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        </div>
                        <div>
                            <h1 class="text-xl md:text-2xl font-black text-slate-900 tracking-tight">BIÊN TẬP GAME NGHIÊNG ĐẦU</h1>
                            <p class="text-[11px] text-slate-500 font-bold uppercase mt-1">Tiết: <span class="text-indigo-600">${this.lessonPeriod}</span> | Bài: <span class="text-indigo-600">${this.currentSet}</span></p>
                        </div>
                    </div>

                    <div class="flex items-center gap-4 ml-auto">
                        <div class="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                            ${[1, 2, 3, 4, 5].map(n => `
                                <button onclick="window.HeadTiltGame.selectSet(${n})" 
                                    class="w-10 h-10 rounded-xl font-black text-sm transition-all ${this.currentSet === n ? 'bg-indigo-600 text-white shadow-md scale-105' : 'text-slate-500 hover:bg-white'}">
                                    ${n}
                                </button>
                            `).join('')}
                        </div>
                        <button id="ht-editor-close" class="bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-indigo-700 px-5 py-3 rounded-2xl font-black text-xs transition-all flex items-center gap-2">
                            <div class="w-6 h-6 rounded-lg bg-slate-200 flex items-center justify-center">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                            </div>
                            <span>QUAY LẠI</span>
                        </button>
                    </div>
                </div>

                <div class="max-w-4xl mx-auto w-full p-8 space-y-8 pb-32">
                    <div class="flex flex-wrap gap-4 items-center justify-center bg-indigo-50/50 p-6 rounded-[2rem] border border-indigo-100">
                        <span class="text-xs font-black text-indigo-400 uppercase tracking-widest">Tải câu hỏi từ Củng Cố:</span>
                        <input type="text" id="ht-cungco-id" class="w-24 text-center py-3 px-4 rounded-xl font-bold bg-white border-2 border-indigo-100 outline-none focus:border-indigo-400" value="${this.lessonPeriod}">
                        <button onclick="window.HeadTiltGame.loadFromCungCo()" class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-black shadow-lg transition-all active:scale-95 text-sm">🔄 TẢI DỮ LIỆU</button>
                    </div>

                    <div id="ht-editor-rows" class="space-y-8">
                        ${editorRows.map((q, idx) => this.renderEditorRow(idx, q)).join('')}
                    </div>

                    <div class="flex flex-wrap gap-4 items-center justify-center bg-white p-8 rounded-[3rem] shadow-xl border border-slate-200">
                        <button onclick="window.HeadTiltGame.addEditorRow()" class="px-6 py-4 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-2xl font-black transition-all">➕ THÊM CÂU HỎI</button>
                        <button id="ht-save-local" class="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black shadow-xl transition-all active:scale-95">💾 LƯU BÀI ${this.currentSet}</button>
                        <button id="ht-play-test" class="px-6 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-black shadow-xl transition-all active:scale-95">🎮 CHƠI THỬ</button>
                        <button id="ht-delete-set" class="px-6 py-4 bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white rounded-2xl font-black border-2 border-rose-200 transition-all">🗑️ XÓA BÀI</button>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('ht-editor-close').addEventListener('click', () => { this.onClose && this.onClose(); });
        document.getElementById('ht-save-local').addEventListener('click', async () => {
            const btn = document.getElementById('ht-save-local');
            btn.innerHTML = '⏳ ĐANG LƯU...';
            await this.saveToLocal();
            btn.innerHTML = '✅ ĐÃ LƯU!';
            setTimeout(() => { btn.innerHTML = `💾 LƯU BÀI ${this.currentSet}`; }, 2000);
        });
        document.getElementById('ht-play-test').addEventListener('click', async () => {
            await this.saveToLocal(false);
            this.isActive = true;
            this.currentQuestionIndex = 0;
            this.score = 0;
            this.renderBaseLayout();
            this.updateQuestionUI();
            await this.initCameraSettings();
        });
        document.getElementById('ht-delete-set').addEventListener('click', () => this.deleteCurrentSet());
    },

    async saveToLocal(showNotify = true) {
        try {
            this.questions = this.getEditorData();
            if (this.questions.length === 0) {
                alert("Bạn chưa nhập câu hỏi nào!");
                return;
            }

            const teacherId = this.getTeacherId();
            const period = String(this.lessonPeriod || "");
            const localKey = `HTGame_Data_${period}_${teacherId}_Set_${this.currentSet}`;
            localStorage.setItem(localKey, JSON.stringify(this.questions));

            if (window.db && this.isTeacherMode) {
                const docId = `${period}_${teacherId}_Set_${this.currentSet}`;
                const payload = {
                    lessonPeriod: period,
                    setNumber: this.currentSet,
                    teacherName: teacherId,
                    questions: this.questions
                };

                // Add timestamp safely
                if (typeof firebase !== 'undefined' && firebase.firestore) {
                    payload.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
                } else {
                    payload.updatedAt = new Date().toISOString();
                }

                await window.db.collection('head_tilt_games').doc(docId).set(payload, { merge: true });
                console.log("[HeadTilt] Saved to Firestore:", docId);
            }
        } catch (e) {
            console.error('[HeadTilt] Save Error:', e);
            alert("Có lỗi xảy ra khi lưu: " + e.message);
        }
    },

    async selectSet(n) {
        if (this.currentSet === n) return;
        this.currentSet = n;
        await this.loadQuestions();
        this.showTeacherEditor();
    },

    async deleteCurrentSet() {
        if (!confirm(`Bạn có chắc muốn XÓA BÀI ${this.currentSet}?`)) return;
        const teacherId = this.getTeacherId();
        const localKey = `HTGame_Data_${this.lessonPeriod}_${teacherId}_Set_${this.currentSet}`;
        localStorage.removeItem(localKey);
        if (window.db) {
            await window.db.collection('head_tilt_games').doc(`${this.lessonPeriod}_${teacherId}_Set_${this.currentSet}`).delete().catch(() => { });
        }
        this.questions = [];
        alert("Đã xóa xong!");
        this.showTeacherEditor();
    },

    renderEditorRow(idx, data) {
        const mediaType = data.mediaType || 'none';
        const mediaUrl = data.mediaUrl || '';
        return `
            <div class="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-200 relative group editor-row" data-index="${idx}" data-media-type="${mediaType}">
                <div class="absolute -left-4 top-8 w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black shadow-lg">${idx + 1}</div>
                <button onclick="this.closest('.editor-row').remove()" class="absolute -right-4 -top-4 w-10 h-10 bg-rose-100 text-rose-500 hover:bg-rose-500 hover:text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md z-10">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div class="space-y-6">
                    <div class="bg-indigo-50/50 p-4 rounded-3xl border border-indigo-100/50 space-y-3">
                        <div class="flex items-center justify-between">
                            <label class="text-[10px] font-black uppercase text-indigo-400">Đa phương tiện (Ảnh/assets/assets/video/Audio)</label>
                            <div class="flex bg-white rounded-xl p-1 gap-1 border border-indigo-100">
                                ${['none', 'image', 'video', 'audio'].map(t => `
                                    <button onclick="window.HeadTiltGame.setMediaType(${idx}, '${t}')" 
                                        class="ht-m-type-${idx} px-3 py-1 rounded-lg text-[9px] font-black uppercase transition-all ${mediaType === t ? 'bg-indigo-600 text-white' : 'text-indigo-300 hover:bg-indigo-50'}">
                                        ${t === 'none' ? 'KO' : (t === 'image' ? 'ẢNH' : (t === 'video' ? 'VIDEO' : 'LOA'))}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <input type="text" class="flex-grow p-3 bg-white border border-indigo-100 rounded-xl outline-none text-[11px] font-bold media-url-input" value="${mediaUrl}" placeholder="URL media...">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="md:col-span-2">
                            <label class="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-4">Câu hỏi</label>
                            <textarea class="ed-q w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-indigo-400 font-bold" rows="1">${data.q || data.question || ''}</textarea>
                        </div>
                        <div>
                            <label class="block text-[10px] font-black uppercase text-pink-400 mb-2 ml-4">Đáp án TRÁI</label>
                            <input type="text" class="ed-a1 w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-pink-400 font-bold" value="${data.a1 || ''}">
                        </div>
                        <div>
                            <label class="block text-[10px] font-black uppercase text-blue-400 mb-2 ml-4">Đáp án PHẢI</label>
                            <input type="text" class="ed-a2 w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-400 font-bold" value="${data.a2 || ''}">
                        </div>
                        <div class="md:col-span-2 flex items-center justify-center gap-4 bg-slate-50 p-4 rounded-2xl">
                            <span class="text-[10px] font-black uppercase text-slate-400">Đáp án đúng là bên:</span>
                            <select class="ed-correct bg-white border border-slate-200 rounded-xl px-4 py-2 font-black text-indigo-600 outline-none">
                                <option value="left" ${data.correct === 'left' ? 'selected' : ''}>BÊN TRÁI</option>
                                <option value="right" ${data.correct === 'right' ? 'selected' : ''}>BÊN PHẢI</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    addEditorRow() {
        const container = document.getElementById('ht-editor-rows');
        if (!container) return;
        const index = container.querySelectorAll('.editor-row').length;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = this.renderEditorRow(index, { q: "", a1: "", a2: "", correct: "left", mediaType: 'none', mediaUrl: '' });
        container.appendChild(tempDiv.firstElementChild);
    },

    setMediaType(idx, type) {
        // Find row by index and scope search to that row
        const rows = document.querySelectorAll('.editor-row');
        let targetRow = null;
        rows.forEach(r => { if(r.getAttribute('data-index') == idx) targetRow = r; });
        
        if (targetRow) {
            targetRow.setAttribute('data-media-type', type);
            const btns = targetRow.querySelectorAll(`button[class*="ht-m-type-"]`);
            btns.forEach(btn => {
                const label = type === 'none' ? 'KO' : (type === 'image' ? 'ẢNH' : (type === 'video' ? 'VIDEO' : 'LOA'));
                if (btn.innerText.trim() === label) {
                    btn.className = btn.className.split(' ').filter(c => !['bg-indigo-600', 'text-white', 'text-indigo-300', 'hover:bg-indigo-50'].includes(c)).join(' ') + ' bg-indigo-600 text-white';
                } else {
                    btn.className = btn.className.split(' ').filter(c => !['bg-indigo-600', 'text-white', 'text-indigo-300', 'hover:bg-indigo-50'].includes(c)).join(' ') + ' text-indigo-300 hover:bg-indigo-50';
                }
            });
        }
    },

    getEditorData() {
        const rows = document.querySelectorAll('.editor-row');
        const data = [];
        rows.forEach(row => {
            const mediaUrlInput = row.querySelector('input[placeholder="URL media..."]');
            data.push({
                q: row.querySelector('.ed-q').value,
                a1: row.querySelector('.ed-a1').value,
                a2: row.querySelector('.ed-a2').value,
                correct: row.querySelector('.ed-correct').value,
                mediaType: row.getAttribute('data-media-type') || 'none',
                mediaUrl: mediaUrlInput ? mediaUrlInput.value : ""
            });
        });
        return data;
    },

    async loadScripts() {
        const scripts = [
            "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js",
            "https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js",
            "https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js"
        ];
        return Promise.all(scripts.map(src => new Promise(resolve => {
            const s = document.createElement('script');
            s.src = src;
            s.crossOrigin = "anonymous";
            s.onload = resolve;
            document.body.appendChild(s);
        })));
    },

    async initCameraSettings() {
        if (!window.FaceMesh) await this.loadScripts();
        if (this.camera && this.faceMesh) return; // Already running

        try {
            this.faceMesh = new FaceMesh({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}` });
            this.faceMesh.setOptions({ maxNumFaces: 1, refineLandmarks: false, minDetectionConfidence: 0.5, minTrackingConfidence: 0.5 });
            this.faceMesh.onResults(this.onFaceResults.bind(this));

            this.camera = new Camera(this.videoElement, {
                onFrame: async () => { if (this.isActive) await this.faceMesh.send({ image: this.videoElement }); },
                width: 480, height: 480
            });

            await this.camera.start();

            if (document.getElementById('tilt-loading')) {
                document.getElementById('tilt-loading').style.opacity = '0';
                setTimeout(() => { if (document.getElementById('tilt-loading')) document.getElementById('tilt-loading').style.display = 'none'; }, 500);
            }

            const statusLabel = document.getElementById('tilt-status');
            if (statusLabel) {
                statusLabel.innerText = "NHẬN DIỆN SẴN SÀNG!";
                statusLabel.className = "text-[10px] font-black text-emerald-500 uppercase tracking-widest";
            }
        } catch (e) {
            console.error("Camera Error:", e);
            if (document.getElementById('tilt-status')) document.getElementById('tilt-status').innerText = "LỖI CAMERA!";
        }
    },

    onFaceResults(results) {
        if (!this.isActive || this.hasAnswered) return;
        this.canvasCtx.save();
        this.canvasCtx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        if (results.multiFaceLandmarks?.length > 0) {
            const landmarks = results.multiFaceLandmarks[0];
            
            // Draw visual landmarks for feedback
            if (typeof window.drawConnectors === 'function') {
                if (window.FACEMESH_TESSELATION) window.drawConnectors(this.canvasCtx, landmarks, window.FACEMESH_TESSELATION, { color: 'rgba(255,255,255,0.1)', lineWidth: 1 });
                if (window.FACEMESH_RIGHT_EYE) window.drawConnectors(this.canvasCtx, landmarks, window.FACEMESH_RIGHT_EYE, { color: '#818cf8', lineWidth: 2 });
                if (window.FACEMESH_LEFT_EYE) window.drawConnectors(this.canvasCtx, landmarks, window.FACEMESH_LEFT_EYE, { color: '#818cf8', lineWidth: 2 });
            }
            
            this.calculateHeadPose(landmarks);
        } else {
            this.resetSelection();
        }
        this.canvasCtx.restore();
    },

    calculateHeadPose(landmarks) {
        const angle = Math.atan((landmarks[263].y - landmarks[33].y) / (landmarks[263].x - landmarks[33].x));
        if (angle > this.tiltThreshold) this.handleTilt("left");
        else if (angle < -this.tiltThreshold) this.handleTilt("right");
        else this.resetSelection();
    },

    handleTilt(side) {
        if (this.selectedSide !== side) {
            this.selectedSide = side;
            this.startTime = Date.now();
            this.resetUIClasses();
            const opt = document.getElementById(`option-${side}`);
            if (opt) opt.classList.add('active');
        }

        const elapsed = Date.now() - this.startTime;
        const percent = Math.min((elapsed / this.requiredHoldTime) * 100, 100);
        const prog = document.getElementById(`progress-${side}`);
        if (prog) prog.style.width = `${percent}%`;

        if (percent >= 100 && !this.hasAnswered) this.commitAnswer(side);
    },

    resetSelection() {
        this.selectedSide = null;
        this.startTime = null;
        if (!this.hasAnswered) {
            this.resetUIClasses();
            const pl = document.getElementById('progress-left'), pr = document.getElementById('progress-right');
            if (pl) pl.style.width = '0%';
            if (pr) pr.style.width = '0%';
        }
    },

    resetUIClasses() {
        ['left', 'right'].forEach(s => {
            const opt = document.getElementById(`option-${s}`);
            if (opt) opt.classList.remove('active');
        });
    },

    commitAnswer(side) {
        this.hasAnswered = true;
        const currentQ = this.questions[this.currentQuestionIndex];
        const isCorrect = (side === currentQ.correct);
        if (isCorrect) this.score++;
        this.showFeedback(isCorrect);

        if (this.sounds) {
            if (isCorrect && this.sounds.correct) this.sounds.correct.play();
            else if (!isCorrect && this.sounds.wrong) this.sounds.wrong.play();
        }
        setTimeout(() => this.nextQuestion(), 2500);
    },

    showFeedback(isCorrect) {
        const fbWrap = document.getElementById('tilt-feedback'), fbContent = document.getElementById('tilt-feedback-content');
        if (!fbWrap || !fbContent) return;
        fbWrap.classList.remove('opacity-0', 'pointer-events-none');
        fbContent.innerHTML = isCorrect ? `
            <div class="bg-white/95 p-10 rounded-[3rem] border-2 border-emerald-100 shadow-2xl">
                <div class="bg-emerald-100 text-emerald-500 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6 animate-bounce">
                    <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h1 class="text-5xl font-black text-emerald-600">XUẤT SẮC!</h1>
                <p class="text-xl text-emerald-500 mt-2 font-bold uppercase">Bạn đã chọn đúng</p>
            </div>
        ` : `
            <div class="bg-white/95 p-10 rounded-[3rem] border-2 border-rose-100 shadow-2xl">
                <div class="bg-rose-100 text-rose-500 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-6">
                    <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
                <h1 class="text-5xl font-black text-rose-600">SAI RỒI!</h1>
                <p class="text-xl text-rose-500 mt-2 font-bold uppercase">Tiếc quá, thử lại nhé!</p>
            </div>
        `;
        fbContent.className = "scale-100 transition-transform duration-500 transform text-center";
    },

    nextQuestion() {
        this.currentQuestionIndex++;
        const feedback = document.getElementById('tilt-feedback');
        if (feedback) feedback.classList.add('opacity-0', 'pointer-events-none');

        if (this.currentQuestionIndex < this.questions.length) {
            this.hasAnswered = false;
            this.selectedSide = null;
            this.startTime = null;
            this.updateQuestionUI();
        } else {
            this.showFinalResult();
        }
    },

    showFinalResult() {
        const fbWrap = document.getElementById('tilt-feedback'), fbContent = document.getElementById('tilt-feedback-content');
        fbWrap.classList.remove('opacity-0', 'pointer-events-none');
        if (this.sounds?.win) this.sounds.win.play();
        this.stopBgMusic();

        fbContent.innerHTML = `
            <div class="bg-white/95 rounded-[3rem] p-12 shadow-2xl border-t-[12px] border-indigo-500">
                <div class="text-7xl mb-6">🏆</div>
                <h1 class="text-5xl font-black text-indigo-950">HOÀN THÀNH!</h1>
                <p class="text-xl font-bold text-slate-400 mb-8 mt-2 uppercase">Kết quả của bạn</p>
                <div class="bg-indigo-50 p-8 rounded-3xl mb-8 border border-indigo-100">
                    <span class="text-indigo-600 text-7xl font-black">${this.score} / ${this.questions.length}</span>
                </div>
                <button onclick="HeadTiltGame.cleanup(); HeadTiltGame.onClose && HeadTiltGame.onClose()" class="w-full bg-indigo-600 text-white py-6 rounded-[2rem] font-black text-xl hover:bg-indigo-700 transition-all active:scale-95 shadow-xl">ĐÓNG TRÒ CHƠI</button>
            </div>
        `;
    },

    async loadFromCungCo() {
        const periodInput = document.getElementById('ht-cungco-id');
        if (!periodInput) return;
        const period = periodInput.value.trim();
        if (!period) return;

        try {
            const btn = periodInput.nextElementSibling;
            const originalText = btn.innerHTML;
            btn.innerHTML = '⏳ ĐANG TẢI...';

            let loadedQuestions = [];

            // Try quizPool from lesson data (already loaded in memory)
            let lessonData = window[`lesson_${period}`] || window[`lesson${period}`];
            if (lessonData && (lessonData.quizPool || lessonData.metadata?.quizPool)) {
                const pool = lessonData.quizPool || lessonData.metadata.quizPool;
                if (pool.length > 0) {
                    loadedQuestions = this.convertQuizPoolToHeadTilt(pool);
                }
            }

            // Try QuestionBankManager if no quizPool found
            if (loadedQuestions.length === 0 && window.QuestionBankManager) {
                const qbQuestions = await window.QuestionBankManager.getQuestions({
                    periods: parseInt(period),
                    totalCount: 20
                });
                if (qbQuestions && qbQuestions.length > 0) {
                    loadedQuestions = this.convertQuizPoolToHeadTilt(qbQuestions);
                }
            }

            if (loadedQuestions.length > 0) {
                this.questions = loadedQuestions;
                this.showTeacherEditor();
                alert(`Đã tải thành công ${loadedQuestions.length} câu hỏi từ bài ${period}. Hãy kiểm tra và bấm LƯU BÀI để hoàn tất!`);
            } else {
                alert(`Không có câu hỏi nào trong ngân hàng cho tiết ${period}.`);
                btn.innerHTML = originalText;
            }
        } catch (e) {
            alert('Lỗi khi tải hoặc phân tích dữ liệu!');
            console.error('[HeadTilt] loadFromCungCo error:', e);
            const btn = document.getElementById('ht-cungco-id')?.nextElementSibling;
            if (btn) btn.innerHTML = '🔄 TẢI DỮ LIỆU';
        }
    },

    cleanup() {
        this.isActive = false;
        if (this.camera) {
            try { this.camera.stop(); } catch (e) {
                console.error('Unhandled error:', e);
            }
        }
        if (this.faceMesh) {
            try { this.faceMesh.close(); } catch (e) {
                console.error('Unhandled error:', e);
            }
        }
        this.stopBgMusic();
        this.camera = null;
        this.faceMesh = null;
        if (this.container) this.container.innerHTML = '';
    }
};

window.HeadTiltGame = HeadTiltGame;


