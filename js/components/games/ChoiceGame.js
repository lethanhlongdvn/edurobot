// js/components/games/ChoiceGame.js

export const ChoiceGame = {
    container: null,
    onClose: null,
    state: {
        phase: 'setup', // setup, playing, summary, editor
        questions: [],
        currentIndex: 0,
        score: 0,
        correctCount: 0,
        incorrectCount: 0,
        distractorCount: 3, 
        selectedLesson: null,
        currentSet: 1, // 1, 2, 3...
        lessonPeriod: '133',
        currentOptions: [],
        currentCorrectIdx: -1
    },

    async start(container, options, onClose) {
        this.container = container;
        this.onClose = onClose;
        
        // Get lesson period
        this.state.lessonPeriod = (window.router && window.router.currentLessonPeriod) || "133";
        
        this.initSounds();
        this.resetState();
        
        // 1. Fetch Auto Config from Firebase
        this.state.autoConfig = null;
        if (window.db) {
            try {
                const doc = await window.db.collection('exam_configs').doc(this.state.lessonPeriod).get();
                if (doc.exists) this.state.autoConfig = doc.data();
            } catch(e) { console.error("Error fetching exam_configs", e); }
        }

        const userRole = localStorage.getItem('userRole');
        const isTeacher = userRole === 'teacher' || userRole === 'admin';

        // 2. Auto-start for Students if config is active
        if (this.state.autoConfig && this.state.autoConfig.active && !isTeacher) {
            this.container.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-slate-50 font-['Nunito']"><div class="text-indigo-600 font-bold text-xl animate-pulse">⏳ Đang sinh đề thi cho em...</div></div>`;
            const qs = await window.QuestionBankManager.getQuestions({
                periods: this.state.autoConfig.periods,
                countsPerLevel: this.state.autoConfig.countsPerLevel
            });
            this.state.questions = qs;
            this.state.distractorCount = 3;
            // Introduce a short delay so the loading text is visible
            setTimeout(() => this.startGame(), 1000);
            return;
        }

        this.loadCurrentSet();
        this.render();
    },

    resetState() {
        this.state.phase = 'setup';
        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.correctCount = 0;
        this.state.incorrectCount = 0;
        this.state.distractorCount = 3;
    },

    loadCurrentSet() {
        const key = `ChoiceGame_Data_${this.state.lessonPeriod}_Set_${this.state.currentSet}`;
        const saved = localStorage.getItem(key);
        if (saved) {
            try {
                this.state.questions = JSON.parse(saved);
            } catch (e) {
                this.state.questions = [];
            }
        } else {
            this.state.questions = [];
        }
    },

    initSounds() {
        const pathPrefix = window.location.pathname.includes('/games/') ? '../' : './';
        this.sounds = {
            bg: new Audio(`${pathPrefix}assets/audio/Quizi.mp3`),
            win: new Audio(`${pathPrefix}assets/audio/votay.mp3`),
            correct: new Audio(`${pathPrefix}assets/audio/correct.mp3`),
            wrong: new Audio(`${pathPrefix}assets/audio/error.mp3`)
        };
        this.sounds.bg.loop = true;
        this.sounds.bg.volume = 0.4;
    },

    playBgMusic() {
        if (this.sounds && this.sounds.bg) {
            this.sounds.bg.currentTime = 0;
            this.sounds.bg.play().catch(e => console.log("Audio play failed:", e));
        }
    },

    stopBgMusic() {
        if (this.sounds && this.sounds.bg) {
            this.sounds.bg.pause();
        }
    },

    saveCurrentSet() {
        const key = `ChoiceGame_Data_${this.state.lessonPeriod}_Set_${this.state.currentSet}`;
        localStorage.setItem(key, JSON.stringify(this.state.questions));
    },

    render() {
        if (this.state.phase === 'setup') {
            this.renderSetup();
        } else if (this.state.phase === 'playing') {
            this.renderGame();
        } else if (this.state.phase === 'editor') {
            this.renderEditor();
        } else {
            this.renderSummary();
        }
    },

    renderSetup() {
        this.container.innerHTML = `
            <div class="w-full h-full flex flex-col bg-slate-50 font-['Be_Vietnam_Pro'] overflow-hidden">
                <!-- Header -->
                <div class="p-6 bg-white border-b flex justify-between items-center shadow-sm shrink-0">
                    <div class="flex items-center gap-4">
                        <button onclick="window.close()" class="group flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-blue-600 rounded-xl font-black text-[10px] shadow-sm transition-all active:scale-95 border border-blue-100 mr-2">
                             <span class="w-5 h-5 bg-blue-600 text-white rounded-lg flex items-center justify-center text-[10px]">E</span>
                             <span class="uppercase tracking-widest group-hover:translate-x-0.5 transition-transform">QUAY LẠI</span>
                        </button>
                        <div class="bg-indigo-600 p-3 rounded-2xl text-white">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-black text-slate-800 uppercase tracking-tight">Game Trắc Nghiệm</h2>
                            <p class="text-slate-500 font-bold">Tiết học: <span class="text-indigo-600">${this.state.lessonPeriod}</span> | Bài: <span class="text-indigo-600">${this.state.currentSet}</span></p>
                        </div>
                    </div>
                </div>

                <!-- Setup Content -->
                <div class="flex-grow overflow-y-auto p-8 custom-scrollbar">
                    <div class="max-w-5xl mx-auto space-y-8">
                        
                        <!-- Configuration Card -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <!-- Set Selection -->
                            <div class="bg-white p-6 rounded-[32px] shadow-xl border border-slate-100 space-y-4">
                                <label class="block text-xs font-black text-slate-400 uppercase tracking-widest px-1">Chọn Bộ Câu Hỏi (Bài)</label>
                                <div class="grid grid-cols-3 gap-2">
                                    ${[1, 2, 3, 4, 5].map(n => `
                                        <button onclick="ChoiceGame.selectSet(${n})" 
                                            class="py-3 rounded-2xl font-black transition-all ${this.state.currentSet === n ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}">
                                            ${n}
                                        </button>
                                    `).join('')}
                                </div>
                                <p class="text-[10px] text-center text-slate-400 font-bold uppercase">Đang chọn: BÀI ${this.state.currentSet}</p>
                            </div>

                            <!-- Distractor Config -->
                            <div class="bg-white p-6 rounded-[32px] shadow-xl border border-slate-100 space-y-4">
                                <label class="block text-xs font-black text-slate-400 uppercase tracking-widest px-1">Cấu hình Đáp án</label>
                                <div class="flex gap-2">
                                    ${[1, 2, 3].map(n => `
                                        <button onclick="ChoiceGame.setDistractors(${n})" 
                                            class="flex-1 py-3 rounded-2xl font-black transition-all ${this.state.distractorCount === n ? 'bg-emerald-500 text-white shadow-lg' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}">
                                            ${n+1}
                                        </button>
                                    `).join('')}
                                </div>
                                <p class="text-[10px] text-center text-slate-400 font-bold uppercase">Tổng: ${this.state.distractorCount + 1} phương án</p>
                            </div>

                            <!-- Editor Quick Access -->
                            <div class="bg-indigo-900 p-6 rounded-[32px] shadow-xl text-white flex flex-col justify-center items-center gap-4">
                                <div class="text-center">
                                    <p class="text-[10px] font-black uppercase text-indigo-300 tracking-widest mb-1">Tự soạn nội dung</p>
                                    <h3 class="text-xl font-black">CHẾ ĐỘ BIÊN TẬP</h3>
                                </div>
                                <button onclick="ChoiceGame.openEditor()" class="w-full bg-white text-indigo-900 py-3 rounded-2xl font-black uppercase tracking-wider hover:bg-yellow-400 transition-all active:scale-95 shadow-lg">
                                    MỞ TRÌNH SOẠN ✍️
                                </button>
                            </div>
                        </div>

                        <!-- Auto Config (Teacher Only Sync) -->
                        <div class="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-100 p-6 rounded-[32px] shadow-sm relative overflow-hidden">
                            <div class="absolute -right-10 -top-10 text-9xl opacity-5">🤖</div>
                            <div class="flex items-center gap-2 mb-4">
                                <span class="bg-indigo-600 text-white text-[10px] uppercase font-black px-2 py-1 rounded-lg">Mới</span>
                                <h3 class="font-black text-indigo-900 uppercase tracking-tight">Cấu hình Đề tự động (Đồng Bộ Học Sinh)</h3>
                            </div>
                            <p class="text-xs text-slate-500 font-bold mb-4">Mỗi học sinh sẽ sinh ngẫu nhiên 1 đề riêng biệt dựa trên cấu hình dưới đây. Nhấn Kích hoạt để thay thế chế độ Bài Thủ Công.</p>
                            
                            <div class="flex flex-wrap gap-4 items-end">
                                <div class="flex gap-2">
                                    <input type="text" id="cg-auto-from" value="${this.state.autoConfig ? (this.state.autoConfig.fromText || '') : ''}" class="w-20 bg-white border border-slate-200 rounded-xl px-3 py-2 font-bold text-slate-700 text-sm" placeholder="Từ Tiết">
                                    <input type="text" id="cg-auto-to" value="${this.state.autoConfig ? (this.state.autoConfig.toText || '') : ''}" class="w-20 bg-white border border-slate-200 rounded-xl px-3 py-2 font-bold text-slate-700 text-sm" placeholder="Đến Tiết">
                                </div>
                                <div class="flex gap-2 bg-white rounded-xl border border-slate-200 p-1">
                                    <input type="number" id="cg-auto-l1" value="${this.state.autoConfig ? (this.state.autoConfig.countsPerLevel[1] || 0) : ''}" class="w-14 bg-transparent outline-none text-center font-bold text-emerald-600 text-sm" placeholder="M1">
                                    <input type="number" id="cg-auto-l2" value="${this.state.autoConfig ? (this.state.autoConfig.countsPerLevel[2] || 0) : ''}" class="w-14 bg-slate-50 outline-none text-center font-bold text-amber-500 text-sm rounded-lg" placeholder="M2">
                                    <input type="number" id="cg-auto-l3" value="${this.state.autoConfig ? (this.state.autoConfig.countsPerLevel[3] || 0) : ''}" class="w-14 bg-transparent outline-none text-center font-bold text-rose-500 text-sm" placeholder="M3">
                                </div>
                                <button onclick="ChoiceGame.saveAutoConfig()" class="${this.state.autoConfig && this.state.autoConfig.active ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white px-6 py-2 rounded-xl font-black shadow transition-all flex items-center gap-2">
                                    ${this.state.autoConfig && this.state.autoConfig.active ? '🔄 CẬP NHẬT' : '⚡ KÍCH HOẠT'}
                                </button>
                                ${this.state.autoConfig && this.state.autoConfig.active ? `
                                    <button onclick="ChoiceGame.disableAutoConfig()" class="bg-rose-100 text-rose-600 px-4 py-2 rounded-xl font-bold hover:bg-rose-200 transition-all text-sm">
                                        Tắt Đồng Bộ
                                    </button>
                                ` : ''}
                            </div>
                        </div>

                        <!-- Data Source & Play -->
                        <div class="bg-white p-8 rounded-[40px] shadow-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-8">
                             <div class="flex-grow space-y-4 w-full">
                                <label class="block text-xs font-black text-slate-400 uppercase tracking-widest px-1">Lấy từ thư viện bài học</label>
                                <div class="flex gap-4">
                                    <select id="lesson-selector" class="flex-grow bg-slate-100 border-none rounded-2xl px-6 py-4 font-bold text-slate-700 outline-none focus:ring-2 ring-indigo-500 transition-all cursor-pointer">
                                        <option value="">-- Chọn bài học mẫu --</option>
                                        <option value="124">Bài 53: Thể tích hình lập phương</option>
                                        <option value="124CD">Bài 53 (CD): Thể tích hình lập phương</option>
                                        <option value="111">Bài 47: Mét khối</option>
                                    </select>
                                    <button onclick="ChoiceGame.loadLesson()" class="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-6 rounded-2xl font-black transition-all flex items-center justify-center gap-2">
                                        NHẬP 📥
                                    </button>
                                </div>
                             </div>

                             <div class="shrink-0 w-full md:w-auto">
                                <button onclick="ChoiceGame.startGame()" id="start-game-btn" 
                                    class="w-full md:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-indigo-900 px-12 py-6 rounded-[2rem] font-black text-2xl uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(245,158,11,0.3)] hover:scale-105 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale" 
                                    ${this.state.questions.length === 0 ? 'disabled' : ''}>
                                    BẮT ĐẦU CHƠI 🚀
                                </button>
                             </div>
                        </div>

                        <!-- Questions Preview -->
                        <div id="questions-preview" class="space-y-4">
                            ${this.renderQuestionsPreview()}
                        </div>
                    </div>
                </div>
            </div>

                        <!-- Questions Preview -->
                        <div id="questions-preview" class="space-y-4">
                            ${this.renderQuestionsPreview()}
                        </div>
                    </div>
                </div>
            </div>

            <style>
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
            </style>
        `;
    },

    async saveAutoConfig() {
        const fromVal = document.getElementById('cg-auto-from').value.trim();
        const toVal = document.getElementById('cg-auto-to').value.trim();
        const l1 = parseInt(document.getElementById('cg-auto-l1').value) || 0;
        const l2 = parseInt(document.getElementById('cg-auto-l2').value) || 0;
        const l3 = parseInt(document.getElementById('cg-auto-l3').value) || 0;

        if (!fromVal && !toVal) return alert("Cần nhập ít nhất 1 Tiết học bắt đầu!");
        if (l1 + l2 + l3 === 0) return alert("Cần thiết lập số lượng câu hỏi M1/M2/M3!");

        if (!window.db) return alert("Tính năng đồng bộ cần kết nối mạng (Firebase).");

        let periods = [];
        if (isNaN(fromVal) || isNaN(toVal)) {
            if (fromVal) periods.push(fromVal);
            if (toVal && toVal !== fromVal) periods.push(toVal);
        } else {
            const startP = parseInt(fromVal) || 1;
            const endP = parseInt(toVal) || 175;
            for (let i = startP; i <= endP; i++) periods.push(i);
        }

        const btn = event.currentTarget;
        const oText = btn.innerHTML;
        btn.innerHTML = "⏳ ĐANG LƯU...";
        btn.disabled = true;

        try {
            const data = {
                active: true,
                periods,
                fromText: fromVal,
                toText: toVal,
                countsPerLevel: { 1: l1, 2: l2, 3: l3 },
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            await window.db.collection('exam_configs').doc(this.state.lessonPeriod).set(data);
            this.state.autoConfig = data;
            alert("Đã kích hoạt đồng bộ cấu hình! Tất cả học sinh mở Tiết này sẽ lấy đề ngẫu nhiên theo thiết lập trên.");
            this.renderSetup();
        } catch (e) {
            alert("Lỗi lưu cấu hình: " + e.message);
        }
    },

    async disableAutoConfig() {
        if (!confirm("Tắt đồng bộ đề ngẫu nhiên? Học sinh mở Game sẽ trở lại cấu hình thủ công (Bài 1, Bài 2...).")) return;
        try {
            await window.db.collection('exam_configs').doc(this.state.lessonPeriod).update({ active: false });
            this.state.autoConfig.active = false;
            this.renderSetup();
        } catch (e) {
            console.error(e);
        }
    },


    selectSet(n) {
        this.state.currentSet = n;
        this.loadCurrentSet();
        this.renderSetup();
    },

    showSummary() {
        this.stopBgMusic();
        if (this.sounds && this.sounds.win) this.sounds.win.play();
        this.state.phase = 'summary';
        this.render();
    },

    openEditor() {
        this.state.phase = 'editor';
        this.render();
    },

    setDistractors(n) {
        this.state.distractorCount = n;
        this.renderSetup();
    },

    async loadLesson() {
        const lessonId = document.getElementById('lesson-selector').value;
        if (!lessonId) return;

        try {
            const lessonObj = window[`lesson${lessonId}`];
            if (lessonObj && lessonObj.quizPool) {
                this.state.questions = JSON.parse(JSON.stringify(lessonObj.quizPool));
                this.saveCurrentSet();
                this.renderSetup();
            } else {
                alert(`Không tìm thấy dữ liệu bài ${lessonId}. Bạn hãy mở bài học này trước để hệ thống tải dữ liệu nhé!`);
            }
        } catch (e) {
            console.error(e);
        }
    },

    renderQuestionsPreview() {
        if (this.state.questions.length === 0) return `
            <div class="h-40 flex flex-col items-center justify-center bg-slate-100/50 rounded-[2rem] border-2 border-dashed border-slate-200 text-slate-400 italic">
                <span class="text-4xl mb-2 opacity-50">📭</span>
                Chưa có câu hỏi nào trong Bộ ${this.state.currentSet}
            </div>
        `;
        
        return `
            <div class="flex items-center justify-between mb-4">
                <h4 class="text-xl font-black text-slate-800">Preview Bài ${this.state.currentSet} (${this.state.questions.length})</h4>
                <button onclick="ChoiceGame.clearQuestions()" class="text-rose-500 font-bold text-sm hover:underline">Xóa tất cả</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${this.state.questions.map((q, i) => {
                    const optionText = Array.isArray(q.options) ? q.options[q.answer] : "N/A";
                    return `
                        <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-3 relative group">
                            <span class="bg-indigo-50 text-indigo-600 w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-black shrink-0">${i+1}</span>
                            <div class="flex-grow overflow-hidden">
                                <p class="font-bold text-slate-700 truncate">${q.question}</p>
                                <p class="text-[11px] text-emerald-600 font-black uppercase tracking-wider mt-1">Đúng: ${optionText}</p>
                            </div>
                            <button onclick="ChoiceGame.deleteQuestion(${i})" class="opacity-0 group-hover:opacity-100 absolute top-2 right-2 w-6 h-6 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    },

    renderEditor() {
        let editorRows = this.state.questions.length > 0 ? this.state.questions : [{ question: "", options: ["", "", "", ""], answer: 0 }];

        this.container.innerHTML = `
            <div class="w-full h-full flex flex-col bg-slate-100 font-['Be_Vietnam_Pro'] overflow-hidden">
                <!-- Editor Header -->
                <div class="p-6 bg-white border-b flex justify-between items-center shadow-md z-10">
                    <div class="flex items-center gap-4">
                        <button onclick="ChoiceGame.state.phase = 'setup'; ChoiceGame.render();" class="p-2 hover:bg-slate-100 rounded-xl transition-all">
                            <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <div>
                            <h2 class="text-2xl font-black text-slate-800 uppercase tracking-tight">Biên tập: BÀI ${this.state.currentSet}</h2>
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Tiết: ${this.state.lessonPeriod} • Soạn nội dung trắc nghiệm</p>
                        </div>
                    </div>
                    
                    <div class="flex gap-3">
                        <button onclick="ChoiceGame.addEditorRow()" class="bg-indigo-50 text-indigo-700 px-6 py-3 rounded-2xl font-black hover:bg-indigo-100 transition-all flex items-center gap-2">
                            ➕ THÊM CÂU
                        </button>
                        <button onclick="ChoiceGame.saveEditor()" class="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black shadow-lg hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-2">
                            LƯU DỮ LIỆU 💾
                        </button>
                    </div>
                </div>

                <!-- Editor Grid -->
                <div class="flex-grow overflow-y-auto p-8 custom-scrollbar">
                    <div id="choice-editor-rows" class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
                        ${editorRows.map((q, idx) => this.renderEditorRow(idx, q)).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    renderEditorRow(idx, data) {
        const mediaType = data.mediaType || 'none';
        const mediaUrl = data.mediaUrl || '';
        
        return `
            <div class="bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-200 relative group animate-fade-in editor-row" data-index="${idx}" data-media-type="${mediaType}">
                <div class="absolute -left-3 top-8 w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black shadow-lg z-10">${idx + 1}</div>
                <button onclick="this.closest('[data-index]').remove()" class="absolute -right-3 -top-3 w-10 h-10 bg-rose-100 text-rose-500 hover:bg-rose-500 hover:text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md z-10">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <div class="space-y-6">
                    <!-- Media Helper -->
                    <div class="bg-indigo-50/50 p-4 rounded-3xl border border-indigo-100/50 space-y-3" data-idx="${idx}">
                        <div class="flex items-center justify-between">
                            <label class="text-[10px] font-black uppercase text-indigo-400 ml-2">Đính kèm Đa phương tiện</label>
                            <div class="flex bg-white rounded-xl p-1 gap-1 border border-indigo-100">
                                ${['none', 'image', 'video', 'audio'].map(t => `
                                    <button onclick="ChoiceGame.setMediaType(${idx}, '${t}')" 
                                        class="ed-m-type-${idx} px-3 py-1 rounded-lg text-[9px] font-black uppercase transition-all ${mediaType === t ? 'bg-indigo-600 text-white' : 'text-indigo-300 hover:bg-indigo-50'}">
                                        ${t === 'none' ? 'KO' : t}
                                    </button>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="flex gap-2">
                            <input type="text" class="ed-m-url-${idx} flex-grow p-3 bg-white border border-indigo-100 rounded-xl outline-none focus:border-indigo-400 font-bold text-slate-600 text-[11px]" value="${mediaUrl}" placeholder="Đường dẫn file (ví dụ: assets/images/file.jpg)" oninput="ChoiceGame.updateMediaPreview(${idx})">
                            <label class="shrink-0 bg-indigo-600 text-white px-4 py-2 rounded-xl font-black text-[10px] cursor-pointer hover:bg-indigo-700 flex items-center gap-2">
                                📁 CHỌN FILE
                                <input type="file" class="hidden" onchange="ChoiceGame.handleFileSelect(this, ${idx})">
                            </label>
                        </div>
                        
                        <div id="ed-m-preview-${idx}" class="mt-2 rounded-xl overflow-hidden bg-white/50 border border-white flex justify-center items-center h-20 text-[10px] text-slate-300 italic">
                            ${this.renderMediaPreview(mediaType, mediaUrl)}
                        </div>
                    </div>

                    <div>
                        <label class="block text-[10px] font-black uppercase text-slate-400 mb-2 ml-4">Nội dung câu hỏi</label>
                        <textarea class="ed-q w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-3xl outline-none focus:border-indigo-400 font-bold text-slate-800 transition-all" rows="2" placeholder="Ví dụ: 1 + 1 bằng mấy?">${data.question}</textarea>
                    </div>

                    <div class="grid grid-cols-1 gap-3">
                        ${[0, 1, 2, 3].map(i => `
                            <div class="flex items-center gap-3">
                                <div class="shrink-0 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-black text-xs text-slate-400">${String.fromCharCode(65 + i)}</div>
                                <input type="text" class="ed-opt-${i} flex-grow p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-400 font-bold text-slate-800 text-sm transition-all" value="${data.options[i] || ''}" placeholder="Đáp án ${String.fromCharCode(65 + i)}">
                                <label class="flex items-center gap-2 cursor-pointer p-2 rounded-xl hover:bg-slate-50 transition-all">
                                    <input type="radio" name="correct-${idx}" value="${i}" ${data.answer === i ? 'checked' : ''} class="w-5 h-5 accent-emerald-500">
                                </label>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    setMediaType(idx, type) {
        const row = document.querySelector(`[data-index="${idx}"]`);
        if (!row) return;
        
        row.querySelectorAll(`.ed-m-type-${idx}`).forEach(btn => {
            btn.classList.remove('bg-indigo-600', 'text-white');
            btn.classList.add('text-indigo-300', 'hover:bg-indigo-50');
            if (btn.innerText.toLowerCase() === type || (type === 'none' && btn.innerText === 'KO')) {
                btn.classList.add('bg-indigo-600', 'text-white');
                btn.classList.remove('text-indigo-300', 'hover:bg-indigo-50');
            }
        });
        
        row.dataset.mediaType = type;
        this.updateMediaPreview(idx);
    },

    async handleFileSelect(input, idx) {
        if (!input.files || !input.files[0]) return;
        const file = input.files[0];
        
        const row = input.closest('[data-index]');
        const mediaType = row.dataset.mediaType || 'none';
        const urlInput = document.querySelector(`.ed-m-url-${idx}`);
        const uploadLabel = input.closest('label');
        
        // Show uploading status
        const originalContent = uploadLabel.innerHTML;
        uploadLabel.style.pointerEvents = 'none';
        uploadLabel.style.opacity = '0.7';
        uploadLabel.innerHTML = '⏳ ĐANG TẢI...';

        try {
            // Check if Firebase Storage is available
            if (typeof storage !== 'undefined' && storage) {
                const lessonSlug = window.router?.currentLesson || 'unit_unknown';
                const folder = file.type.startsWith('assets/assets/video/') ? 'video' : (file.type.startsWith('audio/') ? 'am_thanh' : 'hinh_anh');
                
                // Path: choice_game_media/${lessonSlug}/${folder}/${timestamp}_${filename}
                const storagePath = `choice_game_media/${lessonSlug}/${folder}/${Date.now()}_${file.name}`;
                const storageRef = storage.ref(storagePath);
                
                const snapshot = await storageRef.put(file);
                const fileUrl = await snapshot.ref.getDownloadURL();
                
                if (urlInput) urlInput.value = fileUrl;
                
                // Determine type for preview
                let detectedType = 'image';
                if (file.type.startsWith('assets/assets/video/')) detectedType = 'video';
                else if (file.type.startsWith('audio/')) detectedType = 'audio';
                
                this.setMediaType(idx, detectedType);
            } else {
                // Offline Fallback
                let folder = 'assets/images/';
                let type = 'image';
                if (file.type.startsWith('assets/assets/video/')) { folder = 'assets/assets/video/'; type = 'video'; }
                else if (file.type.startsWith('audio/')) { folder = 'assets/audio/'; type = 'audio'; }
                
                if (urlInput) urlInput.value = folder + file.name;
                this.setMediaType(idx, type);
                alert("Đã nhận diện file local. Lưu ý: Copy file vào thư mục " + folder + " trong dự án.");
            }
        } catch (e) {
            console.error("Upload error:", e);
            alert("Lỗi khi tải file: " + e.message);
        } finally {
            uploadLabel.style.pointerEvents = 'auto';
            uploadLabel.style.opacity = '1';
            uploadLabel.innerHTML = originalContent;
        }
    },

    updateMediaPreview(idx) {
        const row = document.querySelector(`[data-index="${idx}"]`);
        const urlInput = row.querySelector(`.ed-m-url-${idx}`);
        const url = urlInput ? urlInput.value : '';
        const type = row.dataset.mediaType || 'none';
        const preview = document.getElementById(`ed-m-preview-${idx}`);
        if (preview) preview.innerHTML = this.renderMediaPreview(type, url);
    },

    renderMediaPreview(type, url) {
        if (type === 'none' || !url) return 'Không có media';
        if (type === 'image') return `<img src="${url}" class="h-full w-auto object-contain">`;
        if (type === 'video') return `<div class="bg-indigo-100 px-3 py-1 rounded text-indigo-600 font-black">VIDEO: ${url.split('/').pop()}</div>`;
        if (type === 'audio') return `<div class="bg-emerald-100 px-3 py-1 rounded text-emerald-600 font-black">AUDIO: ${url.split('/').pop()}</div>`;
        return 'Media lỗi';
    },

    addEditorRow() {
        const container = document.getElementById('choice-editor-rows');
        const index = container.children.length;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = this.renderEditorRow(index, { 
            question: "", 
            options: ["", "", "", ""], 
            answer: 0, 
            mediaType: 'none', 
            mediaUrl: '' 
        });
        container.appendChild(tempDiv.firstElementChild);
    },

    saveEditor() {
        const rows = document.querySelectorAll('#choice-editor-rows > div');
        const data = [];
        rows.forEach(row => {
            const idx = row.dataset.index;
            const question = row.querySelector('.ed-q').value.trim();
            if (!question) return;

            const options = [
                row.querySelector('.ed-opt-0').value.trim(),
                row.querySelector('.ed-opt-1').value.trim(),
                row.querySelector('.ed-opt-2').value.trim(),
                row.querySelector('.ed-opt-3').value.trim()
            ];
            
            const correctRadio = row.querySelector(`input[type="radio"]:checked`);
            const answer = correctRadio ? parseInt(correctRadio.value) : 0;
            
            const mediaType = row.dataset.mediaType || 'none';
            const mediaUrl = row.querySelector(`.ed-m-url-${idx}`).value.trim();

            data.push({ question, options, answer, mediaType, mediaUrl });
        });

        if (data.length === 0) {
            alert("Vui lòng nhập ít nhất một câu hỏi!");
            return;
        }

        this.state.questions = data;
        this.saveCurrentSet();
        alert(`Đã lưu BÀI ${this.state.currentSet} thành công!`);
        this.state.phase = 'setup';
        this.render();
    },

    deleteQuestion(index) {
        this.state.questions.splice(index, 1);
        this.saveCurrentSet();
        this.renderSetup();
    },

    clearQuestions() {
        if (confirm(`Bạn muốn xóa tất cả câu hỏi trong BÀI ${this.state.currentSet}?`)) {
            this.state.questions = [];
            this.saveCurrentSet();
            this.renderSetup();
        }
    },

    startGame() {
        if (this.state.questions.length === 0) {
            alert("Vui lòng nhập câu hỏi trước khi bắt đầu!");
            return;
        }
        this.state.phase = 'playing';
        this.state.currentIndex = 0;
        this.state.score = 0;
        this.state.correctCount = 0;
        this.state.incorrectCount = 0;
        this.playBgMusic();
        this.render();
    },

    exitGame() {
        this.stopBgMusic();
        this.state.phase = 'setup';
        this.render();
    },

    prepareQuestion() {
        const q = this.state.questions[this.state.currentIndex];
        let options = [...q.options];
        const ansIndex = typeof q.answer === 'number' ? q.answer : parseInt(q.answer);
        const correctText = options[ansIndex] !== undefined ? options[ansIndex] : q.answer;
        
        if (this.state.distractorCount < options.length - 1) {
            let incorrects = options.filter((o, idx) => idx !== ansIndex && o !== q.answer);
            incorrects = incorrects.sort(() => Math.random() - 0.5).slice(0, this.state.distractorCount);
            options = [...incorrects, correctText].sort(() => Math.random() - 0.5);
        } else {
            options = options.sort(() => Math.random() - 0.5);
        }

        this.state.currentOptions = options;
        this.state.currentCorrectIdx = options.indexOf(correctText);
        this.state.hasAnswered = false;
        this.state.selectedIdx = -1;
    },

    renderGame() {
        const q = this.state.questions[this.state.currentIndex];
        const progress = ((this.state.currentIndex) / this.state.questions.length) * 100;
        const options = this.state.currentOptions;
        const currentCorrectIndex = this.state.currentCorrectIdx;

        this.container.innerHTML = `
            <div class="w-full h-full flex flex-col bg-indigo-50 font-['Be_Vietnam_Pro'] overflow-hidden">
                
                <!-- Game Status Header -->
                <div class="p-4 md:p-6 bg-white border-b shadow-sm shrink-0">
                    <div class="max-w-5xl mx-auto flex items-center justify-between gap-6">
                        <div class="flex-grow space-y-2">
                            <div class="flex justify-between text-sm font-black text-slate-400 uppercase tracking-widest">
                                <span>Tiến trình</span>
                                <span>Câu hỏi ${this.state.currentIndex + 1} / ${this.state.questions.length}</span>
                            </div>
                            <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                <div class="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 rounded-full" style="width: ${progress}%"></div>
                            </div>
                        </div>
                        
                        <div class="flex items-center gap-4 bg-slate-100 p-2 pr-4 rounded-2xl shrink-0">
                             <div class="flex items-center gap-2">
                                <span class="bg-green-500 text-white w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black">✓ Đúng</span>
                                <span class="text-green-600 font-black text-xl" id="ui-correct-count">${this.state.correctCount}</span>
                             </div>
                             <div class="flex items-center gap-2">
                                <span class="bg-rose-500 text-white w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black">× Sai</span>
                                <span class="text-rose-600 font-black text-xl" id="ui-incorrect-count">${this.state.incorrectCount}</span>
                             </div>
                        </div>
                    </div>
                </div>

                <!-- Main Gameplay Area -->
                <div class="flex-grow flex flex-col items-center justify-center p-6 relative">
                    <div class="w-full max-w-4xl bg-white rounded-[48px] shadow-2xl p-8 md:p-12 border border-white relative overflow-hidden group">
                        <!-- Icon Trang trí -->
                        <div class="absolute -top-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full opacity-50 -z-0"></div>
                        
                        <!-- Câu hỏi -->
                        <div class="relative z-10 space-y-8">
                            
                            <!-- Media Display -->
                            ${this.renderGameMedia(q)}

                            <div class="flex items-start gap-4 justify-center">
                                <div class="bg-indigo-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg font-black text-xl md:text-2xl mt-1">
                                    ${this.state.currentIndex + 1}
                                </div>
                                <h3 class="text-2xl md:text-3xl font-black text-slate-800 text-left leading-tight pt-1">
                                    ${q.question.replace(/^(Bài|Câu)\s+\d+[:.]?\s*/i, '')}
                                </h3>
                            </div>

                            <!-- Các phương án -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                ${options.map((opt, i) => {
                                    let extraClass = '';
                                    if (this.state.hasAnswered) {
                                        if (i === currentCorrectIndex) extraClass = 'answer-correct';
                                        else if (i === this.state.selectedIdx) extraClass = 'answer-incorrect';
                                    }
                                    return `
                                        <button onclick="ChoiceGame.checkAnswer(${i})" 
                                            ${this.state.hasAnswered ? 'disabled' : ''}
                                            class="choice-btn group py-5 px-8 bg-slate-50 border-2 border-slate-100 rounded-3xl text-xl font-bold text-slate-600 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 transition-all text-left flex items-center gap-4 relative overflow-hidden ${extraClass}">
                                            <span class="w-10 h-10 bg-white border-2 border-slate-200 rounded-xl flex items-center justify-center text-slate-400 group-hover:border-indigo-200 group-hover:text-indigo-500 transition-colors">${String.fromCharCode(65 + i)}</span>
                                            <span class="flex-grow">${opt}</span>
                                        </button>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Teacher Reporting Panel -->
                    <div id="reporting-panel" class="mt-8 flex gap-4 transition-all duration-300 ${this.state.hasAnswered ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'}">
                         <div class="bg-white p-4 rounded-3xl shadow-xl border border-indigo-100 flex items-center gap-6">
                            <span class="text-slate-500 font-black uppercase text-xs tracking-widest pl-2">Ghi nhận học sinh:</span>
                            <div class="flex gap-2">
                                <button onclick="ChoiceGame.reportResult(true)" class="bg-green-100 text-green-700 hover:bg-green-500 hover:text-white px-6 py-3 rounded-2xl font-black transition-all flex items-center gap-2">
                                    <span>ĐÚNG</span>
                                    <span class="bg-white/20 px-2 py-0.5 rounded-lg text-xs">+1</span>
                                </button>
                                <button onclick="ChoiceGame.reportResult(false)" class="bg-rose-100 text-rose-700 hover:bg-rose-500 hover:text-white px-6 py-3 rounded-2xl font-black transition-all flex items-center gap-2">
                                    <span>SAI</span>
                                    <span class="bg-white/20 px-2 py-0.5 rounded-lg text-xs">+1</span>
                                </button>
                            </div>
                            <button onclick="ChoiceGame.nextQuestion()" class="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black shadow-lg hover:bg-indigo-700 ml-4">
                                ${this.state.currentIndex < this.state.questions.length - 1 ? 'CÂU TIẾP THEO ➜' : 'XEM KẾT QUẢ 🏅'}
                            </button>
                         </div>
                    </div>
                </div>
            </div>
        `;
    },

    renderGameMedia(q) {
        if (!q.mediaType || q.mediaType === 'none' || !q.mediaUrl) return '';
        
        let content = '';
        if (q.mediaType === 'image') {
            content = `<img src="${q.mediaUrl}" class="max-h-[250px] w-auto mx-auto rounded-3xl shadow-xl border-4 border-white">`;
        } else if (q.mediaType === 'video') {
            content = `<video src="${q.mediaUrl}" class="max-h-[250px] w-auto mx-auto rounded-3xl shadow-xl" controls autoplay></video>`;
        } else if (q.mediaType === 'audio') {
            content = `
                <div class="bg-indigo-600 p-4 rounded-3xl shadow-xl flex items-center gap-4 max-w-sm mx-auto">
                    <div class="animate-pulse text-2xl">🔊</div>
                    <audio src="${q.mediaUrl}" controls class="flex-grow"></audio>
                </div>
            `;
        }
        
        return `<div class="w-full flex justify-center mb-6 animate-fade-in">${content}</div>`;
    },

    checkAnswer(idx) {
        if (this.state.phase !== 'playing') return;
        
        const q = this.state.questions[this.state.currentIndex];
        const isCorrect = idx === this.state.currentCorrectIdx;
        
        if (isCorrect) {
            this.state.score += 10;
            this.state.correctCount++;
            if (this.sounds && this.sounds.correct) this.sounds.correct.play();
        } else {
            this.state.incorrectCount++;
            if (this.sounds && this.sounds.wrong) this.sounds.wrong.play();
        }
        
        this.state.hasAnswered = true;
        this.state.selectedIdx = idx;
        
        if (isCorrect) {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 40, spread: 30, origin: { y: 0.7 } });
            }
        }
        this.render();
    },

    reportResult(isCorrect) {
        if (isCorrect) this.state.correctCount++;
        else this.state.incorrectCount++;
        
        // Cập nhật UI nhanh mà không cần render lại toàn bộ (để giữ trạng thái nút)
        const correctEl = document.getElementById('ui-correct-count');
        const incorrectEl = document.getElementById('ui-incorrect-count');
        if (correctEl) correctEl.innerText = this.state.correctCount;
        if (incorrectEl) incorrectEl.innerText = this.state.incorrectCount;
    },

    nextQuestion() {
        if (this.state.currentIndex < this.state.questions.length - 1) {
            this.state.currentIndex++;
            this.prepareQuestion();
            this.render();
        } else {
            this.state.phase = 'summary';
            this.render();
        }
    },

    renderSummary() {
        this.container.innerHTML = `
            <div class="w-full h-full flex flex-col items-center justify-center bg-indigo-900 font-['Nunito'] text-white p-8 relative overflow-hidden">
                <div class="relative z-10 max-w-2xl w-full bg-white/10 backdrop-blur-2xl rounded-[60px] p-12 text-center border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
                    <div class="text-8xl mb-8">🎖️</div>
                    <h2 class="text-5xl font-black uppercase tracking-tight mb-4 text-yellow-400">Hoàn Thành!</h2>
                    <p class="text-xl text-indigo-100 font-medium mb-12">Chúc mừng các em đã hoàn thành bộ câu hỏi!</p>

                    <div class="grid grid-cols-2 gap-6 mb-12">
                        <div class="bg-white/10 p-6 rounded-[32px] border border-white/10">
                            <span class="block text-[10px] font-black uppercase text-indigo-300 tracking-widest mb-2">Số lượt ĐÚNG</span>
                            <span class="text-5xl font-black text-green-400">${this.state.correctCount}</span>
                        </div>
                        <div class="bg-white/10 p-6 rounded-[32px] border border-white/10">
                            <span class="block text-[10px] font-black uppercase text-indigo-300 tracking-widest mb-2">Số lượt CHƯA ĐÚNG</span>
                            <span class="text-5xl font-black text-rose-400">${this.state.incorrectCount}</span>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row gap-4">
                        <button onclick="ChoiceGame.resetState(); ChoiceGame.render();" class="flex-1 bg-white text-indigo-900 py-5 rounded-3xl font-black text-xl hover:bg-slate-100 transition-all shadow-xl active:scale-95">
                            CHƠI LẠI
                        </button>
                        <button onclick="ChoiceGame.close()" class="flex-1 bg-indigo-600 text-white py-5 rounded-3xl font-black text-xl hover:bg-indigo-700 transition-all shadow-xl active:scale-95 border border-indigo-400">
                            KẾT THÚC
                        </button>
                    </div>
                </div>

                <!-- Confetti Background Decorations -->
                <div class="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
                <div class="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
        `;
        
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    },

    close() {
        if (this.onClose) this.onClose();
    },

    cleanup() {
        this.resetState();
    }
};

window.ChoiceGame = ChoiceGame;


