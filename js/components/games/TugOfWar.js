// js/components/games/TugOfWar.js

export const TugOfWar = {
    container: null,
    sessionId: null,
    role: 'teacher', // 'teacher' or 'student'
    state: {
        status: 'lobby',
        teamA: [],
        teamB: [],
        teamAName: 'Táo Đỏ',
        teamBName: 'Táo Xanh',
        scoreA: 0,
        scoreB: 0,
        ropePos: 0,
        winningTeam: null,
        sessionTitle: '',
        questions: []
    },
    students: [],
    allStudents: [], 
    classes: [],
    currentClass: '',
    teamA: [],
    teamB: [],
    customQuestions: [], // Local editor storage
    unsubscribe: null,
    tempStudentName: null,
    teamSize: 5,
    spectators: [],
    showTeamModal: false,
    showPrepModal: false,
    playedWinSound: false,

    currentSet: 1,
    lessonPeriod: '124',

    async start(container, options = {}, onClose) {
        this.container = container;
        this.onClose = onClose;
        
        // Initialize sounds
        this.initSounds();

        // Context lesson
        this.lessonPeriod = window.currentLessonData ? String(window.currentLessonData.period) : '124';

        // Priority: options.role > localStorage > auto-detect (optional)
        const savedRole = localStorage.getItem('userRole');
        this.role = (options && options.role) || (savedRole === 'teacher' || savedRole === 'admin' ? 'teacher' : 'student');
        
        // Load student data for teams
        await this.loadStudents();

        // Load questions: prioritize options.questions, then localStorage
        if (options && Array.isArray(options.questions) && options.questions.length > 0) {
            this.customQuestions = options.questions;
            console.log("[TugOfWar] Loaded", options.questions.length, "questions from options");
        } else {
            this.loadQuestions();
        }

        this.renderLobby();
        
        if (this.role === 'student') {
            this.listenToGlobalSessions();
        }
    },

    initSounds() {
        const pathPrefix = window.location.pathname.includes('/games/') ? '../' : './';
        this.sounds = {
            bg: new Audio(`${pathPrefix}assets/audio/Quizi.mp3`),
            win: new Audio(`${pathPrefix}assets/audio/votay.mp3`),
            correct: new Audio(`${pathPrefix}assets/audio/correct.mp3`),
            wrong: new Audio(`${pathPrefix}assets/audio/wrong.mp3`)
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

    async loadStudents() {
        try {
            const pathPrefix = window.location.pathname.includes('/games/') ? '../' : './';
            const response = await fetch(`${pathPrefix}students_data.json`);
            const data = await response.json();
            this.allStudents = data;
            
            // Extract unique classes
            this.classes = [...new Set(data.map(s => s.studentClass))].sort();
            
            // Default students list (empty until class selected)
            this.students = [];
        } catch (e) {
            console.error("Failed to load students:", e);
        }
    },

    handleClassChange(event) {
        this.currentClass = event.target.value;
        this.students = this.allStudents
            .filter(s => s.studentClass === this.currentClass);
        
        // Auto-divide teams for preview
        this.divideTeams();
        this.renderLobby();
    },

    divideTeams() {
        if (this.students.length === 0) {
            this.teamA = [];
            this.teamB = [];
            this.spectators = [];
            return;
        }

        // Shuffle students
        const shuffled = [...this.students].sort(() => Math.random() - 0.5);
        
        // Take teamSize for each team
        this.teamA = shuffled.slice(0, this.teamSize).map(s => s.name);
        this.teamB = shuffled.slice(this.teamSize, this.teamSize * 2).map(s => s.name);
        
        // The rest are spectators
        const pickedNames = [...this.teamA, ...this.teamB];
        this.spectators = shuffled
            .filter(s => !pickedNames.includes(s.name))
            .map(s => s.name);
    },

    setTeamSize(size) {
        this.teamSize = parseInt(size) || 5;
        this.divideTeams();
        this.renderLobby();
    },

    moveToTeam(name, targetTeam) {
        // Remove from current place
        this.teamA = this.teamA.filter(n => n !== name);
        this.teamB = this.teamB.filter(n => n !== name);
        this.spectators = this.spectators.filter(n => n !== name);

        // Add to target
        if (targetTeam === 'A') this.teamA.push(name);
        else if (targetTeam === 'B') this.teamB.push(name);
        else this.spectators.push(name);

        this.renderLobby();
    },

    togglePrepModal(show) {
        this.showPrepModal = show;
        this.renderLobby();
    },

    updateTeamNamesFromUI() {
        const nameA = document.getElementById('edit-team-a-name')?.value || 'Táo Đỏ';
        const nameB = document.getElementById('edit-team-b-name')?.value || 'Táo Xanh';
        this.state.teamAName = nameA;
        this.state.teamBName = nameB;
    },

    renderLobby() {
        if (this.role === 'student') {
            this.container.innerHTML = `
                <div class="flex flex-col items-center justify-center h-full p-8 text-center bg-gradient-to-br from-blue-50 to-indigo-50">
                    <div class="text-6xl mb-6">🚩</div>
                    <h2 class="text-3xl font-black text-blue-900 uppercase tracking-widest mb-4">Trò chơi Kéo co</h2>
                    <div class="animate-pulse flex items-center gap-2 text-blue-500 font-black uppercase">
                        <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                        Đang đợi Thầy/Cô bắt đầu...
                    </div>
                </div>
            `;
            return;
        }

        // Teacher Lobby with Mode Settings, Class Selection and Question Editor
        this.container.innerHTML = `
            <div class="flex flex-col h-full bg-slate-50 font-['Be_Vietnam_Pro']">
                <!-- Header -->
                <div class="p-6 bg-white border-b border-slate-200 flex justify-between items-center shadow-sm">
                    <div class="flex items-center gap-4">
                        <!-- Back Button Integration -->
                        <button onclick="window.close()" class="group flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-blue-600 rounded-xl font-black text-[10px] shadow-sm transition-all active:scale-95 border border-blue-100 mr-2">
                             <span class="w-5 h-5 bg-blue-600 text-white rounded-lg flex items-center justify-center text-[10px]">E</span>
                             <span class="uppercase tracking-widest group-hover:translate-x-0.5 transition-transform">QUAY LẠI</span>
                        </button>
                        <span class="text-4xl">🚩</span>
                        <div>
                            <h2 class="text-2xl font-black text-slate-800 uppercase tracking-tight">Kéo Co: Sảnh Chờ</h2>
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Tiết: <span class="text-blue-600">${this.lessonPeriod}</span> | Bài đang chọn: <span class="text-blue-600">${this.currentSet}</span></p>
                        </div>
                    </div>

                    <!-- Article Set Selection -->
                    <div class="flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
                        ${[1, 2, 3, 4, 5].map(n => `
                            <button onclick="GameLibrary.games.tug_of_war.selectSet(${n})" 
                                class="w-10 h-10 rounded-xl font-black text-xs transition-all ${this.currentSet === n ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:bg-white'}">
                                ${n}
                            </button>
                        `).join('')}
                    </div>
                    
                    <div class="flex items-center gap-6">
                         <div class="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                            <label class="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-tighter">Lớp:</label>
                            <select onchange="GameLibrary.games.tug_of_war.handleClassChange(event)" class="bg-white border-none rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 outline-none shadow-sm cursor-pointer">
                                <option value="">--- Chọn lớp ---</option>
                                ${this.classes.map(c => `<option value="${c}" ${this.currentClass === c ? 'selected' : ''}>${c}</option>`).join('')}
                            </select>
                            
                            <label class="text-[10px] font-black text-slate-400 uppercase ml-2 tracking-tighter border-l border-slate-300 pl-2">Số lượng/Đội:</label>
                            <select onchange="GameLibrary.games.tug_of_war.setTeamSize(this.value)" class="bg-white border-none rounded-xl px-2 py-1.5 text-xs font-bold text-slate-800 outline-none shadow-sm cursor-pointer">
                                ${[2,3,4,5,6,7,8,10].map(s => `<option value="${s}" ${this.teamSize === s ? 'selected' : ''}>${s}</option>`).join('')}
                            </select>

                            <button onclick="GameLibrary.games.tug_of_war.toggleTeamModal(true)" 
                                class="bg-blue-100 text-blue-700 font-black px-4 py-1.5 rounded-xl text-[10px] uppercase hover:bg-blue-200 transition-all flex items-center gap-2 border border-blue-200 ${!this.currentClass ? 'hidden' : ''}">
                                👥 Quản lý Đội hình
                            </button>

                            <button onclick="GameLibrary.games.tug_of_war.divideTeams(); GameLibrary.games.tug_of_war.renderLobby();" 
                                class="p-1.5 hover:bg-white rounded-xl transition-all text-slate-400 hover:text-blue-500 tooltip relative group" ${!this.currentClass ? 'disabled' : ''}>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                <span class="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-slate-800 text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Chia lại đội ngẫu nhiên</span>
                            </button>
                        </div>

                         <!-- Game Mode Selection -->
                        <div class="flex gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                            <button id="mode-warmup" class="px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all tracking-widest ${this.gameMode === 'warmup' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}" onclick="GameLibrary.games.tug_of_war.setMode('warmup')">Khởi động ☕</button>
                            <button id="mode-reinforce" class="px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all tracking-widest ${this.gameMode === 'reinforce' || !this.gameMode ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}" onclick="GameLibrary.games.tug_of_war.setMode('reinforce')">Củng cố 📚</button>
                            <button id="mode-manual" class="px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all tracking-widest ${this.gameMode === 'manual' ? 'bg-white text-orange-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}" onclick="GameLibrary.games.tug_of_war.setMode('manual')">Tùy chọn 📝</button>
                        </div>

                        <button id="btn-start-tow" ${!this.currentClass ? 'disabled' : ''} class="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-black px-10 py-4 rounded-2xl shadow-xl transition-all transform active:scale-95 uppercase text-sm flex items-center gap-2" onclick="GameLibrary.games.tug_of_war.togglePrepModal(true)">
                            Chuẩn bị trận đấu 🚩
                        </button>
                    </div>
                </div>

                <div class="flex-1 flex overflow-hidden">
                    <!-- Right: Question Editor -->
                    <div class="w-1/3 p-6 border-r border-slate-200 flex flex-col gap-6 overflow-y-auto">
                        <div id="editor-container" class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 ${this.gameMode === 'manual' || !this.gameMode ? '' : 'opacity-40 grayscale pointer-events-none transition-all'}">
                            <h3 class="text-sm font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                📝 Soạn câu hỏi nhanh
                                ${this.gameMode && this.gameMode !== 'manual' ? `<span class="text-[8px] bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full">(Tắt)</span>` : ''}
                            </h3>
                            <div class="space-y-4" id="tow-advanced-editor">
                                <!-- Media Area -->
                                <div class="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50 space-y-3">
                                    <div class="flex items-center justify-between">
                                        <label class="text-[9px] font-black uppercase text-blue-400 ml-1">Đa phương tiện</label>
                                        <div class="flex bg-white rounded-lg p-1 gap-1 border border-blue-100">
                                            ${['none', 'image', 'video', 'audio'].map(t => `
                                                <button onclick="GameLibrary.games.tug_of_war.setEditorMediaType('${t}')" 
                                                    id="tow-m-type-${t}"
                                                    class="tow-m-type-btn px-2 py-1 rounded-md text-[8px] font-black uppercase transition-all ${this.editorMediaType === t || (!this.editorMediaType && t==='none') ? 'bg-blue-600 text-white' : 'text-blue-300 hover:bg-blue-50'}">
                                                    ${t === 'none' ? 'KO' : (t === 'image' ? 'ẢNH' : (t === 'video' ? 'VIDEO' : 'LOA'))}
                                                </button>
                                            `).join('')}
                                        </div>
                                    </div>
                                    <div class="flex gap-2">
                                        <input type="text" id="q-media-url" class="flex-grow p-2.5 bg-white border border-blue-100 rounded-xl outline-none focus:border-blue-400 font-bold text-slate-600 text-[10px]" placeholder="URL hoặc chọn file..." oninput="GameLibrary.games.tug_of_war.updateEditorMediaPreview()">
                                        <label class="shrink-0 bg-blue-600 text-white px-3 py-2 rounded-xl font-black text-[9px] cursor-pointer hover:bg-blue-700 flex items-center gap-1">
                                            📁 FILE
                                            <input type="file" class="hidden" onchange="GameLibrary.games.tug_of_war.handleEditorFileSelect(this)">
                                        </label>
                                    </div>
                                    <div id="tow-m-preview" class="rounded-xl overflow-hidden bg-white/50 border border-white flex justify-center items-center h-16 text-[9px] text-slate-300 italic">
                                        Chưa có media
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-[10px] font-black text-slate-400 uppercase mb-1 ml-1">Câu hỏi</label>
                                    <textarea id="q-text" placeholder="Nhập câu hỏi..." rows="2"
                                        class="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 font-bold focus:border-blue-500 outline-none transition-all text-sm"></textarea>
                                </div>
                                <div class="grid grid-cols-2 gap-3">
                                    <div class="relative">
                                        <input id="q-a" type="text" placeholder="Đáp án A" class="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-xs font-bold focus:border-blue-500 outline-none">
                                        <button onclick="document.getElementById('q-correct').value = document.getElementById('q-a').value" class="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-bold text-blue-400 hover:text-blue-600">ĐÚNG</button>
                                    </div>
                                    <div class="relative">
                                        <input id="q-b" type="text" placeholder="Đáp án B" class="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-xs font-bold focus:border-blue-500 outline-none">
                                        <button onclick="document.getElementById('q-correct').value = document.getElementById('q-b').value" class="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-bold text-blue-400 hover:text-blue-600">ĐÚNG</button>
                                    </div>
                                    <div class="relative">
                                        <input id="q-c" type="text" placeholder="Đáp án C (Tùy chọn)" class="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-xs font-bold focus:border-blue-500 outline-none">
                                        <button onclick="document.getElementById('q-correct').value = document.getElementById('q-c').value" class="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-bold text-blue-400 hover:text-blue-600">ĐÚNG</button>
                                    </div>
                                    <div class="relative">
                                        <input id="q-d" type="text" placeholder="Đáp án D (Tùy chọn)" class="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-xs font-bold focus:border-blue-500 outline-none">
                                        <button onclick="document.getElementById('q-correct').value = document.getElementById('q-d').value" class="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-bold text-blue-400 hover:text-blue-600">ĐÚNG</button>
                                    </div>
                                </div>
                                <div>
                                    <label class="block text-[10px] font-black text-slate-400 uppercase mb-1 ml-1">Đáp án đúng</label>
                                    <input id="q-correct" type="text" placeholder="Click 'ĐÚNG' ở trên hoặc tự nhập..." 
                                        class="w-full bg-green-50 border-2 border-green-100 rounded-xl px-4 py-3 font-bold focus:border-green-500 outline-none transition-all text-green-700 text-sm">
                                </div>
                                <button onclick="GameLibrary.games.tug_of_war.addQuestion()" class="w-full bg-blue-600 text-white font-black py-4 rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 text-xs active:scale-95">
                                    ➕ THÊM VÀO BÀI ${this.currentSet}
                                </button>
                            </div>
                        </div>

                        <div id="mode-description" class="p-6 rounded-3xl border transition-all ${this.gameMode === 'warmup' ? 'bg-indigo-50 border-indigo-100' : (this.gameMode === 'reinforce' ? 'bg-emerald-50 border-emerald-100' : 'bg-orange-50 border-orange-100')}">
                            ${this.renderModeDescription()}
                        </div>

                        <!-- Phần Cách chơi và Hình ảnh mới -->
                        <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mt-2">
                             <div class="mb-4 overflow-hidden rounded-2xl border-2 border-slate-100">
                                <img src="assets/images/Keo_co.png" alt="Kéo co" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500">
                             </div>
                             <h3 class="text-sm font-black text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span class="text-xl">📜</span> Cách chơi
                             </h3>
                             <ul class="space-y-3 text-[11px] font-bold text-slate-600 leading-relaxed">
                                <li class="flex gap-2">
                                    <span class="text-blue-500">1.</span>
                                    <span>Hệ thống tự động chia lớp thành 2 đội <b>A (Táo đỏ)</b> và <b>B (Táo xanh)</b>.</span>
                                </li>
                                <li class="flex gap-2">
                                    <span class="text-blue-500">2.</span>
                                    <span>Các thành viên thảo luận nhóm và chọn đáp án đúng trên máy tính/máy tính bảng.</span>
                                </li>
                                <li class="flex gap-2">
                                    <span class="text-blue-500">3.</span>
                                    <span>Mỗi câu trả lời đúng sẽ giúp đội của bạn <b>kéo dây</b> về phía mình 1 bước.</span>
                                </li>
                                <li class="flex gap-2">
                                    <span class="text-blue-500">4.</span>
                                    <span>Đội nào đạt ngưỡng 15 điểm trước sẽ kéo ngã đội đối diện và giành <b>chiến thắng</b>!</span>
                                </li>
                                <li class="flex gap-2">
                                    <span class="text-blue-500">5.</span>
                                    <span>Khán giả hãy cổ vũ nhiệt tình để tăng thêm tinh thần cho các chiến binh nhé! 📣</span>
                                </li>
                             </ul>
                        </div>
                    </div>

                    <!-- Left: Preview & Team Info -->
                    <div class="flex-1 p-6 bg-slate-100/50 flex flex-col gap-6 overflow-hidden">
                        <!-- Questions Preview -->
                        <div class="h-1/2 bg-white rounded-3xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
                            <div class="p-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                                <h3 class="text-xs font-black text-slate-800 uppercase tracking-widest">Danh sách câu hỏi (${this.customQuestions.length})</h3>
                                <button onclick="GameLibrary.games.tug_of_war.clearQuestions()" class="text-[10px] font-black text-rose-500 uppercase hover:underline">Xóa hết</button>
                            </div>
                            <div id="q-list-container" class="flex-1 overflow-y-auto p-4 space-y-3">
                                ${this.renderQuestionList()}
                            </div>
                        </div>

                        <!-- Teams & Spectators Management -->
                        <div class="flex-1 grid grid-cols-3 gap-4 overflow-hidden">
                             <!-- Team A -->
                             <div class="bg-white rounded-3xl shadow-sm border-t-4 border-red-500 p-4 flex flex-col overflow-hidden">
                                <h4 class="text-xs font-black text-red-600 uppercase mb-3 flex justify-between items-center">
                                    🍎 ĐỘI A <span class="bg-red-50 px-2 py-0.5 rounded-full text-[10px]">${this.teamA.length}/${this.teamSize}</span>
                                </h4>
                                <div class="flex-1 overflow-y-auto pr-1 space-y-1">
                                    ${this.teamA.map(name => `
                                        <div class="group flex items-center justify-between bg-red-50 text-red-900 px-3 py-1.5 rounded-lg border border-red-100">
                                            <span class="font-bold text-[11px] truncate">${name}</span>
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${name}', 'spec')" class="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-700 transition-all font-black text-xs">">→</button>
                                        </div>
                                    `).join('')}
                                    ${this.teamA.length === 0 ? '<div class="text-slate-300 italic text-[10px] text-center mt-4">Trống</div>' : ''}
                                </div>
                             </div>

                             <!-- Spectators -->
                             <div class="bg-slate-50/50 rounded-3xl shadow-sm border border-slate-200 p-4 flex flex-col overflow-hidden">
                                <h4 class="text-xs font-black text-slate-500 uppercase mb-3 flex justify-between items-center">
                                    📣 KHÁN GIẢ <span class="bg-white border border-slate-200 px-2 py-0.5 rounded-full text-[10px]">${this.spectators.length}</span>
                                </h4>
                                <div class="flex-1 overflow-y-auto pr-1 space-y-1">
                                    ${this.spectators.map(name => `
                                        <div class="group flex items-center gap-1 bg-white text-slate-600 px-2 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${name}', 'A')" class="opacity-0 group-hover:opacity-100 text-red-500 hover:bg-red-50 w-5 h-5 rounded flex items-center justify-center transition-all">←</button>
                                            <span class="flex-1 text-[10px] font-bold truncate text-center">${name}</span>
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${name}', 'B')" class="opacity-0 group-hover:opacity-100 text-blue-500 hover:bg-blue-50 w-5 h-5 rounded flex items-center justify-center transition-all">→</button>
                                        </div>
                                    `).join('')}
                                    ${this.spectators.length === 0 ? '<div class="text-slate-300 italic text-[10px] text-center mt-4 opacity-50">Tất cả đều vào sân</div>' : ''}
                                </div>
                             </div>

                             <!-- Team B -->
                             <div class="bg-white rounded-3xl shadow-sm border-t-4 border-blue-500 p-4 flex flex-col overflow-hidden">
                                <h4 class="text-xs font-black text-blue-600 uppercase mb-3 flex justify-between items-center">
                                    🍏 ĐỘI B <span class="bg-blue-50 px-2 py-0.5 rounded-full text-[10px]">${this.teamB.length}/${this.teamSize}</span>
                                </h4>
                                <div class="flex-1 overflow-y-auto pr-1 space-y-1">
                                    ${this.teamB.map(name => `
                                        <div class="group flex items-center justify-between bg-blue-50 text-blue-900 px-3 py-1.5 rounded-lg border border-blue-100">
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${name}', 'spec')" class="opacity-0 group-hover:opacity-100 text-blue-400 hover:text-blue-700 transition-all font-black text-xs">←</button>
                                            <span class="font-bold text-[11px] truncate">${name}</span>
                                        </div>
                                    `).join('')}
                                    ${this.teamB.length === 0 ? '<div class="text-slate-300 italic text-[10px] text-center mt-4">Trống</div>' : ''}
                                </div>
                             </div>
                        </div>
                    </div>
                </div>

                <!-- NEW: Full Screen Team Management Modal -->
                ${this.showTeamModal ? `
                <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/60 backdrop-blur-xl animate-fade-in">
                    <div class="bg-white w-full max-w-6xl h-full max-h-[95vh] rounded-[40px] shadow-2xl border border-white/20 flex flex-col overflow-hidden animate-scale-up">
                        <!-- Modal Header -->
                        <div class="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <div class="flex items-center gap-4">
                                <span class="text-4xl">📋</span>
                                <div>
                                    <h2 class="text-3xl font-black text-slate-800 uppercase tracking-tight">Biên tập Đội hình</h2>
                                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Sắp xếp học sinh tham gia trận đấu (Số lượng: ${this.teamSize} em/đội)</p>
                                </div>
                            </div>
                            <button onclick="GameLibrary.games.tug_of_war.toggleTeamModal(false)" class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all active:scale-90">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>

                        <!-- Modal Content: 3 Big Columns -->
                        <div class="flex-1 overflow-hidden grid grid-cols-3 gap-6 p-8 bg-slate-100/30">
                            <!-- Column Team A -->
                            <div class="flex flex-col bg-white rounded-[32px] shadow-sm border-t-8 border-red-500 p-6 overflow-hidden">
                                <div class="flex justify-between items-center mb-6">
                                    <h3 class="text-xl font-black text-red-600 uppercase">🍎 Đội A</h3>
                                    <span class="bg-red-50 text-red-600 px-4 py-1.5 rounded-full font-black text-sm border border-red-100">${this.teamA.length}/${this.teamSize}</span>
                                </div>
                                <div class="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                                    ${this.teamA.map(name => `
                                        <div class="group flex items-center justify-between bg-red-50/30 text-red-900 p-6 rounded-3xl border-2 border-transparent hover:border-red-500 hover:bg-white transition-all shadow-sm">
                                            <span class="font-black text-2xl text-left truncate flex-1">${name}</span>
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${name}', 'spec')" class="bg-white w-14 h-14 rounded-2xl shadow-sm border border-red-200 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all font-black text-2xl shadow-inner active:scale-95">">→</button>
                                        </div>
                                    `).join('')}
                                    ${this.teamA.length === 0 ? '<div class="h-full flex flex-col items-center justify-center text-slate-300 gap-2 italic font-bold opacity-50"><span class="text-4xl">📭</span> Đội trống</div>' : ''}
                                </div>
                            </div>

                            <!-- Column Spectators -->
                            <div class="flex flex-col bg-slate-50/50 rounded-[32px] border-2 border-slate-200/50 p-6 overflow-hidden">
                                <div class="flex justify-between items-center mb-6">
                                    <h3 class="text-xl font-black text-slate-500 uppercase">📣 Khán Giả</h3>
                                    <span class="bg-white text-slate-500 px-4 py-1.5 rounded-full font-black text-sm border border-slate-200 shadow-sm">${this.spectators.length}</span>
                                </div>
                                <div class="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                                    ${this.spectators.map(name => `
                                        <div class="group flex items-center gap-4 bg-white p-5 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-blue-500 hover:shadow-md transition-all">
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${name}', 'A')" class="bg-slate-50 w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all font-black text-2xl shadow-sm active:scale-95">←</button>
                                            <span class="flex-1 text-center font-black text-2xl text-slate-700 truncate px-2">${name}</span>
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${name}', 'B')" class="bg-slate-50 w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all font-black text-2xl shadow-sm active:scale-95">→</button>
                                        </div>
                                    `).join('')}
                                    ${this.spectators.length === 0 ? '<div class="h-full flex flex-col items-center justify-center text-slate-300 gap-2 italic text-center font-bold opacity-50"><span class="text-4xl">👟</span> Đã vào sân hết</div>' : ''}
                                </div>
                            </div>

                            <!-- Column Team B -->
                            <div class="flex flex-col bg-white rounded-[32px] shadow-sm border-t-8 border-blue-500 p-6 overflow-hidden">
                                <div class="flex justify-between items-center mb-6">
                                    <h3 class="text-xl font-black text-blue-600 uppercase">🍏 Đội B</h3>
                                    <span class="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full font-black text-sm border border-blue-100">${this.teamB.length}/${this.teamSize}</span>
                                </div>
                                <div class="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                                    ${this.teamB.map(name => `
                                        <div class="group flex items-center justify-between bg-blue-50/30 text-blue-900 p-6 rounded-3xl border-2 border-transparent hover:border-blue-500 hover:bg-white transition-all shadow-sm">
                                            <button onclick="GameLibrary.games.tug_of_war.moveToTeam('${name}', 'spec')" class="bg-white w-14 h-14 rounded-2xl shadow-sm border border-blue-200 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all font-black text-2xl shadow-inner active:scale-95">←</button>
                                            <span class="font-black text-2xl text-right truncate flex-1">${name}</span>
                                        </div>
                                    `).join('')}
                                    ${this.teamB.length === 0 ? '<div class="h-full flex flex-col items-center justify-center text-slate-300 gap-2 italic font-bold opacity-50"><span class="text-4xl">📭</span> Đội trống</div>' : ''}
                                </div>
                            </div>
                        </div>

                        <!-- Modal Footer -->
                        <div class="p-8 border-t border-slate-100 bg-white flex justify-center shadow-inner">
                            <button onclick="GameLibrary.games.tug_of_war.toggleTeamModal(false)" class="bg-slate-800 text-white font-black px-16 py-5 rounded-[24px] shadow-2xl hover:bg-slate-900 transition-all uppercase tracking-[4px] text-lg active:scale-95 flex items-center gap-4">
                                <span>Xong, Lưu đội hình</span> <span class="text-2xl">⚡</span>
                            </button>
                        </div>
                    </div>
                </div>
                ` : ''}

                <!-- Preparation Modal: Introduction of Teams -->
                ${this.showPrepModal ? `
                <div class="fixed inset-0 z-[200] bg-slate-900/95 backdrop-blur-md flex items-center justify-center p-4">
                    <div class="bg-white w-full max-w-5xl rounded-[40px] shadow-2xl border-4 border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
                        <!-- Modal Header -->
                        <div class="p-5 bg-slate-50 border-b border-slate-100 flex justify-between items-center bg-gradient-to-r from-red-50 to-blue-50">
                            <div class="flex items-center gap-3">
                                <span class="text-3xl animate-bounce">⚔️</span>
                                <div>
                                    <h2 class="text-2xl font-black text-slate-800 uppercase tracking-tight leading-tight">Chiến Binh Sẵn Sàng</h2>
                                    <p class="text-[9px] font-bold text-slate-400 font-bold uppercase tracking-widest">Đội hình ${this.state.teamAName} & ${this.state.teamBName}</p>
                                </div>
                            </div>
                            <button onclick="GameLibrary.games.tug_of_war.togglePrepModal(false)" class="bg-white text-slate-400 hover:text-rose-500 w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm border border-slate-200">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                            </button>
                        </div>

                        <!-- Modal Content: 2 Team Columns -->
                        <div class="flex-1 overflow-hidden grid grid-cols-2 gap-4 p-4">
                            <!-- Team A Content -->
                            <div class="flex flex-col bg-red-50/50 rounded-[32px] border-2 border-red-100 p-3 overflow-hidden items-center group">
                                <div class="w-full px-4 mb-2">
                                    <label class="block text-[9px] font-black text-red-500 uppercase text-center mb-0.5 tracking-widest">Tên Đội A</label>
                                    <input id="edit-team-a-name" type="text" value="${this.state.teamAName || 'Táo Đỏ'}" 
                                        class="w-full bg-white border-2 border-red-100 rounded-xl px-4 py-1.5 font-black text-xl text-center text-red-600 focus:border-red-500 outline-none transition-all shadow-sm"
                                        onchange="GameLibrary.games.tug_of_war.state.teamAName = this.value">
                                </div>
                                <div class="w-full flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                                    ${this.teamA.map(name => `
                                        <div class="bg-white p-2 rounded-xl shadow-sm border border-red-50 flex items-center justify-center">
                                            <span class="font-black text-base text-red-900 truncate">${name}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>

                            <!-- Team B Content -->
                            <div class="flex flex-col bg-blue-50/50 rounded-[32px] border-2 border-blue-100 p-3 overflow-hidden items-center group">
                                <div class="w-full px-4 mb-2">
                                    <label class="block text-[9px] font-black text-blue-500 uppercase text-center mb-0.5 tracking-widest">Tên Đội B</label>
                                    <input id="edit-team-b-name" type="text" value="${this.state.teamBName || 'Táo Xanh'}" 
                                        class="w-full bg-white border-2 border-blue-100 rounded-xl px-4 py-1.5 font-black text-xl text-center text-blue-600 focus:border-blue-500 outline-none transition-all shadow-sm"
                                        onchange="GameLibrary.games.tug_of_war.state.teamBName = this.value">
                                </div>
                                <div class="w-full flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                                    ${this.teamB.map(name => `
                                        <div class="bg-white p-2 rounded-xl shadow-sm border border-blue-50 flex items-center justify-center">
                                            <span class="font-black text-base text-blue-900 truncate">${name}</span>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <!-- Modal Footer -->
                        <div class="p-6 border-t border-slate-100 bg-white flex justify-center shadow-inner">
                            <button id="prep-start-btn" onclick="GameLibrary.games.tug_of_war.updateTeamNamesFromUI(); GameLibrary.games.tug_of_war.togglePrepModal(false); GameLibrary.games.tug_of_war.createSession();" 
                                class="bg-blue-600 text-white font-black px-12 py-3 rounded-2xl shadow-xl hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-base flex items-center gap-3">
                                <span>Bắt đầu trận đấu</span> <span class="animate-pulse">🚀</span>
                            </button>
                        </div>
                    </div>
                </div>
                ` : ''}
            </div>
        `;
    },

    renderQuestionList() {
        if (this.customQuestions.length === 0) {
            return `<div class="h-full flex flex-col items-center justify-center text-slate-300 gap-2 italic text-sm">
                <span class="text-4xl grayscale opacity-20">📭</span>
                Chưa có câu hỏi nào được thêm cho Bài ${this.currentSet}
            </div>`;
        }

        return this.customQuestions.map((q, idx) => `
            <div class="group relative bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:border-blue-200 transition-all">
                <div class="flex justify-between items-start mb-2">
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-black text-blue-500 uppercase tracking-tighter">Câu ${idx + 1}</span>
                        ${q.mediaType && q.mediaType !== 'none' ? `<span class="text-[8px] bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-md font-black uppercase">${q.mediaType === 'image' ? 'ẢNH' : (q.mediaType === 'video' ? 'VIDEO' : 'LOA')}</span>` : ''}
                    </div>
                    <button onclick="GameLibrary.games.tug_of_war.removeQuestion(${idx})" class="opacity-0 group-hover:opacity-100 p-1 hover:text-rose-500 transition-all text-slate-400">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
                    </button>
                </div>
                <p class="font-bold text-slate-700 text-sm mb-2">${q.title}</p>
                <div class="flex flex-wrap gap-2">
                    ${q.options.map(opt => `
                        <span class="text-[9px] px-2 py-0.5 rounded-md ${opt === q.answer ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-white text-slate-400 border border-slate-100'} font-bold">
                            ${opt}
                        </span>
                    `).join('')}
                </div>
            </div>
        `).join('');
    },

    setMode(mode) {
        this.gameMode = mode;
        this.renderLobby();
    },

    renderModeDescription() {
        if (this.gameMode === 'warmup') {
            return `
                <div class="flex items-start gap-3">
                    <span class="text-2xl">☕</span>
                    <div>
                        <h4 class="text-[10px] font-black text-indigo-600 uppercase mb-1">Chế độ Khởi động</h4>
                        <p class="text-[11px] font-bold text-slate-500 leading-relaxed italic">
                            Hệ thống sẽ lấy ngẫu nhiên 5 câu hỏi từ các bài học của tuần trước để ôn tập kiến thức cũ.
                        </p>
                    </div>
                </div>
            `;
        }
        if (this.gameMode === 'reinforce') {
            return `
                <div class="flex items-start gap-3">
                    <span class="text-2xl">📚</span>
                    <div>
                        <h4 class="text-[10px] font-black text-emerald-600 uppercase mb-1">Chế độ Củng cố</h4>
                        <p class="text-[11px] font-bold text-slate-500 leading-relaxed italic">
                            Hệ thống sẽ lấy 2 bộ câu hỏi (mỗi bộ 5 câu) từ tệp củng cố của bài hiện tại.
                        </p>
                    </div>
                </div>
            `;
        }
        return `
            <div class="flex items-start gap-3">
                <span class="text-2xl">💡</span>
                <div>
                    <h4 class="text-[10px] font-black text-orange-600 uppercase mb-1">Chế độ Tùy chọn</h4>
                    <p class="text-[11px] font-bold text-slate-500 leading-relaxed">
                        Bạn có thể soạn bộ câu hỏi riêng hoặc dùng bộ câu hỏi mặc định của bài học.
                    </p>
                </div>
            </div>
        `;
    },

    async fetchQuestionsByMode() {
        const periodStr = window.currentLessonData ? String(window.currentLessonData.period) : '120';
        const period = parseInt(periodStr.replace(/\D/g, ''));
        
        let allQuestions = [];

        if (this.gameMode === 'warmup') {
            // Fetch questions from previous 5 lessons
            for (let i = 1; i <= 5; i++) {
                const prevQs = await this.loadQuestionsFromFile(period - i);
                if (prevQs) allQuestions = [...allQuestions, ...prevQs];
            }
            // Randomly pick 5
            return allQuestions.sort(() => Math.random() - 0.5).slice(0, 5);
        } else if (this.gameMode === 'reinforce') {
            // Fetch from current lesson
            const currentQs = await this.loadQuestionsFromFile(period);
            if (currentQs) {
                // Return 10 questions (as requested "2 sets of 5")
                return currentQs.sort(() => Math.random() - 0.5).slice(0, 10);
            }
        }
        
        // Manual mode or fallback: use custom list if exists, else return empty (it will fallback to random math)
        return this.customQuestions;
    },

    selectSet(n) {
        if (this.currentSet === n) return;
        this.currentSet = n;
        this.loadQuestions();
        this.renderLobby();
    },

    loadQuestions() {
        const period = this.lessonPeriod;
        const set = this.currentSet;
        const key = `TOW_Data_${period}_Set_${set}`;
        const saved = localStorage.getItem(key);
        
        if (saved) {
            try {
                this.customQuestions = JSON.parse(saved);
            } catch (e) {
                console.error("Lỗi tải câu hỏi:", e);
                this.customQuestions = [];
            }
        } else {
            // Legacy fallback or empty
            const oldKey = `tow_custom_qs_${period}`;
            const oldSaved = localStorage.getItem(oldKey);
            if (oldSaved && set === 1) {
                try {
                    this.customQuestions = JSON.parse(oldSaved);
                } catch(e) { this.customQuestions = []; }
            } else {
                this.customQuestions = [];
            }
        }
    },

    saveCurrentSet() {
        const key = `TOW_Data_${this.lessonPeriod}_Set_${this.currentSet}`;
        localStorage.setItem(key, JSON.stringify(this.customQuestions));
    },

    setEditorMediaType(type) {
        this.editorMediaType = type;
        
        // Update UI buttons
        document.querySelectorAll('.tow-m-type-btn').forEach(btn => {
            const label = type === 'none' ? 'KO' : (type === 'image' ? 'ẢNH' : (type === 'video' ? 'VIDEO' : 'LOA'));
            if (btn.innerText.trim() === label) {
                btn.classList.add('bg-blue-600', 'text-white');
                btn.classList.remove('text-blue-300', 'hover:bg-blue-50');
            } else {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('text-blue-300', 'hover:bg-blue-50');
            }
        });
        
        this.updateEditorMediaPreview();
    },

    updateEditorMediaPreview() {
        const type = this.editorMediaType || 'none';
        const url = document.getElementById('q-media-url')?.value || '';
        const previewEl = document.getElementById('tow-m-preview');
        
        if (!previewEl) return;
        
        if (type === 'none' || !url) {
            previewEl.innerHTML = 'Chưa có media';
            return;
        }

        if (type === 'image') previewEl.innerHTML = `<img src="${url}" class="h-full w-auto">`;
        else if (type === 'video') previewEl.innerHTML = `<div class="flex items-center gap-1">🎥 Video</div>`;
        else if (type === 'audio') previewEl.innerHTML = `<div class="flex items-center gap-1">🔊 Audio</div>`;
    },

    async handleEditorFileSelect(input) {
        const file = input.files[0];
        if (!file) return;

        const type = this.editorMediaType || 'none';
        const urlInput = document.getElementById('q-media-url');
        const previewEl = document.getElementById('tow-m-preview');

        if (previewEl) previewEl.innerHTML = '<span class="animate-pulse text-blue-500">Đang tải...</span>';

        try {
            if (window.storage && window.ref && window.uploadBytes && window.getDownloadURL) {
                const timestamp = Date.now();
                const folder = type === 'image' ? 'hinh_anh' : (type === 'video' ? 'video' : 'am_thanh');
                const path = `tug_of_war_media/${this.lessonPeriod}/${folder}/${timestamp}_${file.name}`;
                const storageRef = window.ref(window.storage, path);
                
                const snapshot = await window.uploadBytes(storageRef, file);
                const downloadURL = await window.getDownloadURL(snapshot.ref);
                
                if (urlInput) urlInput.value = downloadURL;
                this.updateEditorMediaPreview();
            } else {
                const folder = type === 'image' ? 'assets/images/' : (type === 'video' ? 'assets/assets/video/' : 'assets/audio/');
                if (urlInput) urlInput.value = folder + file.name;
                this.updateEditorMediaPreview();
                alert("Bạn đang offline. Hãy copy file vào thư mục '" + folder + "' nhé!");
            }
        } catch (e) {
            console.error("Upload Error:", e);
            alert("Lỗi tải lên. Hãy thử lại.");
            this.updateEditorMediaPreview();
        }
    },

    async loadQuestionsFromFile(period) {
        try {
            if (!window.QuestionBankManager) return null;
            const qbQuestions = await window.QuestionBankManager.getQuestions({ periods: parseInt(period), totalCount: 20 });
            if (!qbQuestions || qbQuestions.length === 0) return null;
            
            return qbQuestions.map(q => ({
                title: q.question,
                options: q.options,
                answer: q.options[q.answer]
            }));
        } catch (e) {
            console.error("TugOfWar load failed:", e);
            return null;
        }
    },

    addQuestion() {
        const title = document.getElementById('q-text').value.trim();
        const a = document.getElementById('q-a').value.trim();
        const b = document.getElementById('q-b').value.trim();
        const c = document.getElementById('q-c').value.trim();
        const d = document.getElementById('q-d').value.trim();
        const correct = document.getElementById('q-correct').value.trim();
        const mediaUrl = document.getElementById('q-media-url')?.value.trim() || '';
        const mediaType = this.editorMediaType || 'none';

        if (!title || !a || !b || !correct) {
            alert("Vui lòng nhập đầy đủ thông tin (câu hỏi, ít nhất 2 đáp án và đáp án đúng)!");
            return;
        }

        const options = [a, b];
        if (c) options.push(c);
        if (d) options.push(d);

        this.customQuestions.push({
            title,
            options,
            answer: correct,
            mediaUrl,
            mediaType
        });

        this.saveCurrentSet();
        
        // Reset inputs
        const ids = ['q-text', 'q-a', 'q-b', 'q-c', 'q-d', 'q-correct'];
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });
        if (document.getElementById('q-media-url')) document.getElementById('q-media-url').value = '';
        this.setEditorMediaType('none');

        // Refresh list
        const container = document.getElementById('q-list-container');
        if (container) container.innerHTML = this.renderQuestionList();
        
        // Also update the count in header
        this.renderLobby(); 
    },

    clearQuestions() {
        if (confirm(`Xóa toàn bộ bộ câu hỏi của Bài ${this.currentSet}?`)) {
            this.customQuestions = [];
            this.saveCurrentSet();
            this.renderLobby();
        }
    },

    async createSession() {
        if (!window.db) {
            alert("Lỗi: Không tìm thấy kết nối Firebase. Vui lòng kiểm tra lại mạng!");
            return;
        }

        const btn = document.getElementById('prep-start-btn');
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = 'Đang khởi tạo...';
        }

        // 1. Fetch questions based on mode
        const autoQuestions = await this.fetchQuestionsByMode();
        
        // 2. Combine with manual questions (manual ones go first)
        const finalQuestions = [...this.customQuestions, ...(autoQuestions || [])];

        // 3. Use pre-divided teams from lobby selection
        if (this.teamA.length === 0 || this.teamB.length === 0) {
            alert("Vui lòng chọn lớp để chia đội trước khi bắt đầu!");
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = 'Bắt đầu trận đấu 🚀';
            }
            return;
        }

        this.sessionId = 'tow_' + Date.now();
        const sessionData = {
            id: this.sessionId,
            status: 'playing',
            teamA: this.teamA,
            teamB: this.teamB,
            spectators: this.spectators || [],
            scoreA: 0,
            scoreB: 0,
            ropePos: 0,
            winningTeam: null,
            questions: finalQuestions, 
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            lesson: document.title.replace(" - EduRobot", ""),
            sessionTitle: window.currentLessonData ? window.currentLessonData.title : 'Trận đấu kéo co',
            teamAName: this.state.teamAName || 'Táo Đỏ',
            teamBName: this.state.teamBName || 'Táo Xanh',
            gameMode: this.gameMode || 'reinforce',
            currentSet: this.currentSet
        };

        try {
            await db.collection('game_sessions').doc(this.sessionId).set(sessionData);
            // Global flag for students to notice
            await db.collection('game_sessions').doc('global_status').set({
                activeSession: this.sessionId,
                lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
            });
            
            this.playBgMusic();
            this.startSync();
        } catch (e) {
            alert("Lỗi khởi tạo phòng: " + e.message);
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = 'Thử lại';
            }
        }
    },

    listenToGlobalSessions() {
        if (!window.db) return;
        this.unsubscribeGlobal = db.collection('game_sessions').doc('global_status')
            .onSnapshot(doc => {
                const data = doc.data();
                if (data && data.activeSession) {
                    this.sessionId = data.activeSession;
                    this.startSync();
                    if (this.unsubscribeGlobal) this.unsubscribeGlobal();
                }
            });
    },

    startSync() {
        if (!this.sessionId || !window.db) return;
        
        this.unsubscribe = db.collection('game_sessions').doc(this.sessionId)
            .onSnapshot(doc => {
                const data = doc.data();
                if (data) {
                    this.state = data;
                    if (this.state.status === 'playing' && (!this.sounds.bg.paused === false)) {
                        this.playBgMusic();
                    }
                    this.renderGame();
                }
            });
    },

    renderGame() {
        if (this.state.status === 'finished') {
            this.renderEndScreen();
            return;
        }

        if (this.role === 'teacher') {
            this.renderTeacherView();
        } else {
            this.renderStudentView();
        }
    },

    renderTeamSelect() {
        this.container.innerHTML = `
            <div class="p-8 flex flex-col items-center justify-center h-full text-center bg-slate-900 text-white font-sans">
                <div class="text-6xl mb-8 animate-bounce">🚩</div>
                <h3 class="text-2xl font-black mb-2 uppercase tracking-tight">XÁC NHẬN THIẾT BỊ</h3>
                <p class="text-slate-400 font-bold mb-10 max-w-xs text-sm">Thiết bị này sẽ tham gia làm bài cho Đội nào?</p>
                
                <div class="grid grid-cols-2 gap-6 w-full max-w-md">
                    <button onclick="GameLibrary.games.tug_of_war.renderNameSelect('A')" class="bg-blue-600 hover:bg-blue-700 p-8 rounded-[40px] shadow-2xl transition-all transform active:scale-95 border-b-8 border-blue-900 group">
                        <div class="text-4xl mb-4 group-hover:scale-125 transition-transform">🍎</div>
                        <div class="font-black text-xl uppercase italic">Đội A</div>
                        <div class="text-[10px] opacity-60 mt-1">${this.state.teamA.length} bạn</div>
                    </button>
                    <button onclick="GameLibrary.games.tug_of_war.renderNameSelect('B')" class="bg-rose-500 hover:bg-rose-600 p-8 rounded-[40px] shadow-2xl transition-all transform active:scale-95 border-b-8 border-rose-900 group">
                        <div class="text-4xl mb-4 group-hover:scale-125 transition-transform">🍏</div>
                        <div class="font-black text-xl uppercase italic">Đội B</div>
                        <div class="text-[10px] opacity-60 mt-1">${this.state.teamB.length} bạn</div>
                    </button>
                </div>

                <div class="mt-12 text-xs font-bold text-slate-500 italic">
                    Các bạn hãy thảo luận nhóm & cùng làm bài trên máy này nhé!
                </div>
            </div>
        `;
    },

    renderNameSelect(team) {
        const teamList = team === 'A' ? this.state.teamA : this.state.teamB;
        const color = team === 'A' ? 'bg-blue-600' : 'bg-rose-500';
        const teamIcon = team === 'A' ? '🍎' : '🍏';

        this.container.innerHTML = `
            <div class="p-8 flex flex-col h-full bg-slate-50 font-sans">
                <div class="mb-6 flex items-center gap-4">
                    <button onclick="GameLibrary.games.tug_of_war.renderTeamSelect()" class="p-4 bg-white rounded-2xl shadow-sm text-slate-400 hover:text-slate-800 transition-all">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                    </button>
                    <div>
                        <h4 class="text-xs font-black text-slate-400 uppercase tracking-widest">Bước 2: Chọn đại diện</h4>
                        <h3 class="text-xl font-black text-slate-800 uppercase flex items-center gap-2">
                             ${teamIcon} Bạn thuộc Đội ${team}
                        </h3>
                    </div>
                </div>

                <div class="flex-1 overflow-y-auto pr-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                    ${teamList.map(name => `
                        <button onclick="GameLibrary.games.tug_of_war.selectTeamMember('${team}', '${name}')" 
                            class="bg-white p-4 rounded-2xl shadow-sm border-2 border-transparent hover:border-${team === 'A' ? 'blue' : 'rose'}-500 hover:shadow-md transition-all text-left group">
                            <div class="text-[10px] font-black text-slate-400 uppercase mb-1 group-hover:text-${team === 'A' ? 'blue' : 'rose'}-500">Học sinh</div>
                            <div class="font-bold text-slate-800">${name}</div>
                        </button>
                    `).join('')}
                </div>
                
                <div class="mt-6 p-6 bg-yellow-50 rounded-3xl border border-yellow-100 flex items-start gap-4">
                    <span class="text-2xl">💡</span>
                    <p class="text-xs font-bold text-yellow-800 leading-relaxed italic">
                        Chọn một tên bất kỳ trong nhóm của các em để máy tính nhận diện. Điểm số cả nhóm làm được sẽ tính cho Đội ${team}!
                    </p>
                </div>
            </div>
        `;
    },

    selectTeamMember(team, name) {
        this.tempStudentName = name;
        this.renderGame();
    },

    renderTeacherView() {
        const threshold = 15; // Point threshold for winning
        const offset = (this.state.ropePos / threshold) * 40; // Percentage offset
        
        this.container.innerHTML = `
            <div class="relative w-full h-full flex flex-col bg-sky-100 overflow-hidden font-['Be_Vietnam_Pro']">
                <!-- Background Decorations -->
                <div class="absolute inset-0 pointer-events-none opacity-20">
                    <div class="absolute top-10 left-10 text-6xl">☁️</div>
                    <div class="absolute top-20 right-20 text-4xl">☁️</div>
                    <div class="absolute bottom-20 left-1/4 text-5xl">🌲</div>
                    <div class="absolute bottom-10 right-1/3 text-4xl">🌲</div>
                </div>

                <!-- Header -->
                <div class="pt-4 pb-2 flex flex-col items-center z-10 relative">
                    <div class="text-center group mb-4 flex items-center gap-4">
                        <button onclick="window.close()" class="group flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur hover:bg-white text-blue-600 rounded-xl font-black text-[10px] shadow-sm transition-all active:scale-95 border border-blue-100">
                             <span class="w-5 h-5 bg-blue-600 text-white rounded-lg flex items-center justify-center text-[10px]">E</span>
                             <span class="uppercase tracking-widest group-hover:translate-x-0.5 transition-transform">QUAY LẠI</span>
                        </button>
                        <div>
                            <h2 class="text-2xl font-black text-slate-800 uppercase italic tracking-tighter transition-transform group-hover:scale-105 leading-none">CUỘC CHIẾN KÉO CO</h2>
                            <p class="text-[8px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-1">${this.state.sessionTitle}</p>
                        </div>
                    </div>

                    <div class="flex items-center justify-center gap-6 w-full max-w-4xl px-4">
                        <!-- Team A Content (List + Score) -->
                        <div class="flex items-center gap-4 flex-1 justify-end">
                            <div class="hidden md:flex flex-col gap-0.5 max-h-20 overflow-y-auto custom-scrollbar text-right pr-2 border-r border-blue-200/50">
                                ${this.state.teamA.map(name => `<div class="text-[9px] font-black text-slate-600 whitespace-nowrap">${name}</div>`).join('')}
                            </div>
                            <div class="flex flex-col items-center">
                                <div class="text-[8px] font-black text-blue-600 uppercase tracking-widest mb-1">${this.state.teamAName || 'Đội A'}</div>
                                <div class="bg-blue-600 text-white px-8 py-4 rounded-3xl font-black text-6xl shadow-2xl border-b-8 border-blue-800 transform hover:scale-105 transition-transform">${this.state.scoreA}</div>
                            </div>
                        </div>

                        <!-- VS Divider (Invisible but maintains gap) -->
                        <div class="w-1 h-20 bg-slate-200/30 rounded-full mx-2"></div>

                        <!-- Team B Content (Score + List) -->
                        <div class="flex items-center gap-4 flex-1 justify-start text-left">
                            <div class="flex flex-col items-center">
                                <div class="text-[8px] font-black text-rose-600 uppercase tracking-widest mb-1">${this.state.teamBName || 'Đội B'}</div>
                                <div class="bg-rose-500 text-white px-8 py-4 rounded-3xl font-black text-6xl shadow-2xl border-b-8 border-rose-800 transform hover:scale-105 transition-transform">${this.state.scoreB}</div>
                            </div>
                            <div class="hidden md:flex flex-col gap-0.5 max-h-20 overflow-y-auto custom-scrollbar pl-2 border-l border-rose-200/50">
                                ${this.state.teamB.map(name => `<div class="text-[9px] font-black text-slate-600 whitespace-nowrap">${name}</div>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tug of War Field -->
                <div class="flex-1 relative flex flex-col overflow-hidden bg-sky-100 mt-[-20px]">
                    <!-- Sky & Clouds -->
                    <div class="absolute top-0 w-full h-1/2 bg-gradient-to-b from-blue-300 to-sky-100">
                        <div class="absolute top-10 left-1/4 text-2xl opacity-40 animate-pulse">☁️</div>
                        <div class="absolute top-16 right-1/4 text-3xl opacity-20 animate-pulse">☁️</div>
                    </div>

                    <!-- Fence -->
                    <div class="absolute top-[45%] w-full h-6 border-y border-slate-300 z-10 bg-[radial-gradient(circle,transparent_20%,#cbd5e1_20%,#cbd5e1_30%,transparent_30%,transparent_70%,#cbd5e1_70%,#cbd5e1_80%,transparent_80%)] bg-[length:15px_15px]"></div>

                    <!-- Ground -->
                    <div class="absolute bottom-0 w-full h-[55%] bg-gradient-to-b from-orange-200 to-orange-300 shadow-inner"></div>

                    <!-- Field Content -->
                    <div class="relative flex-1 flex items-center justify-center">
                        
                        <!-- Central Marker -->
                        <div class="absolute bottom-0 left-1/2 -ml-0.5 w-1 h-full bg-red-600/10 z-0"></div>
                        <div class="absolute bottom-[35%] left-1/2 -translate-x-1/2 w-0.5 h-[120px] bg-red-600 border-x border-white/30 z-10"></div>
                        
                        <!-- The Rope System (Dùng hình ảnh thực tế thu nhỏ còn 60%) -->
                        <div id="tow-rope-system" class="relative w-full max-w-6xl h-16 flex items-center justify-center transition-all duration-500 z-30" style="transform: translateX(${-offset}%)">
                            <div class="relative group">
                                <img src="assets/images/Keo_co.png" class="h-full w-auto drop-shadow-[0_15px_40px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform duration-700" alt="Minh họa Kéo co">
                                <!-- Action Feedback -->
                                ${Math.abs(this.state.ropePos) > 5 ? `<div class="absolute -top-10 left-1/2 -translate-x-1/2 text-2xl animate-bounce">💢</div>` : ''}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Real-time Activity Logs (Footer) -->
                <div class="p-2 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl z-20 flex justify-between items-center px-8 text-[11px]">
                    <div class="flex items-center gap-4">
                        <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        <div class="text-xs font-bold text-slate-500 uppercase tracking-widest">
                            Đội A: ${this.state.teamA.length} thành viên đang cố gắng
                        </div>
                    </div>
                    
                    <div class="flex items-center gap-4">
                        <div class="w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                        <p class="text-xl font-black text-slate-800 uppercase tracking-widest text-shadow-sm">
                            ${this.state.ropePos === 0 ? 'TRẬN ĐẤU CÂN BẰNG' : `DÂY NGHIÊNG ${Math.abs(this.state.ropePos)} ĐIỂM VỀ ${this.state.ropePos < 0 ? (this.state.teamAName || 'ĐỘI A') : (this.state.teamBName || 'ĐỘI B')}`}
                        </p>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="text-xs font-bold text-slate-500 uppercase tracking-widest text-right">
                            Đội B: ${this.state.teamB.length} thành viên đang nỗ lực
                        </div>
                        <div class="w-3 h-3 bg-rose-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                    </div>
                </div>
            </div>
        `;
    },

    renderStudentView() {
        // Support for shared devices/teams
        const myName = this.tempStudentName || localStorage.getItem('eduMathName');
        const team = this.state.teamA.includes(myName) ? 'A' : (this.state.teamB.includes(myName) ? 'B' : null);
        
        if (!team) {
            // Check if they are a spectator or just haven't picked a team yet
            const isSpectator = this.state.spectators && this.state.spectators.includes(myName);
            if (isSpectator) {
                this.container.innerHTML = `
                    <div class="p-12 flex flex-col items-center justify-center h-full text-center bg-slate-900 text-white font-['Be_Vietnam_Pro']">
                        <div class="text-[80px] mb-8 animate-bounce">🍿</div>
                        <h3 class="text-3xl font-black mb-4 uppercase italic tracking-tighter text-yellow-400">KHÁN GIẢ CỔ VŨ</h3>
                        <p class="text-slate-400 font-bold max-w-xs leading-relaxed">
                            Chào <span class="text-white">${myName}</span>! Bạn đang ở hàng ghế khán giả lần này. Hãy cùng cổ vũ thật nhiệt tình cho 2 đội nhé!
                        </p>
                        <div class="mt-12 flex gap-4">
                            <div class="px-6 py-3 bg-blue-600 rounded-2xl font-black text-xs uppercase animate-pulse">Cố lên Đội A! 🍎</div>
                            <div class="px-6 py-3 bg-rose-600 rounded-2xl font-black text-xs uppercase animate-pulse">Cố lên Đội B! 🍏</div>
                        </div>
                        <button onclick="GameLibrary.games.tug_of_war.tempStudentName = null; GameLibrary.games.tug_of_war.renderGame();" 
                            class="mt-16 text-xs font-black text-slate-500 hover:text-white transition-all underline decoration-white/20">
                            Đổi danh tính/Đội ⇄
                        </button>
                    </div>
                `;
                return;
            }
            return this.renderTeamSelect();
        }

        const teamColor = team === 'A' ? 'from-blue-600 to-indigo-700' : 'from-rose-500 to-orange-600';
        const teamIcon = team === 'A' ? '🦁' : '🐯';
        const threshold = 15;
        const progressPercent = 50 + (this.state.ropePos / threshold) * 50; 

        this.container.innerHTML = `
            <div class="p-6 flex flex-col items-center justify-between h-full bg-gradient-to-br ${teamColor} text-white font-['Be_Vietnam_Pro'] overflow-hidden">
                <!-- Header with Team Scores -->
                <div class="w-full flex justify-between items-center bg-white/10 backdrop-blur-md p-3 md:p-4 rounded-3xl border border-white/20 mb-4 gap-2">
                    <button onclick="window.close()" class="group flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur hover:bg-white/40 text-white rounded-xl font-black text-[8px] transition-all active:scale-95 border border-white/10 mr-1">
                         <span class="w-4 h-4 bg-white text-blue-600 rounded flex items-center justify-center text-[8px]">E</span>
                         <span class="uppercase tracking-widest group-hover:translate-x-0.5 transition-transform">QUAY LẠI</span>
                    </button>
                    <div class="flex items-center gap-2 min-w-[80px]">
                        <span class="text-2xl md:text-3xl">${teamIcon}</span>
                        <div class="max-w-[100px]">
                            <div class="text-[8px] font-black uppercase opacity-60 tracking-widest flex items-center">
                                Đội <button onclick="GameLibrary.games.tug_of_war.tempStudentName = null; GameLibrary.games.tug_of_war.renderGame();" class="ml-1 hover:text-white underline decoration-white/20">Đổi</button>
                            </div>
                            <div class="text-sm md:text-base font-black truncate">${team === 'A' ? (this.state.teamAName || 'A') : (this.state.teamBName || 'B')}</div>
                        </div>
                    </div>
                    <!-- Mini Rope Progress -->
                    <div class="flex-1 flex flex-col gap-1 px-2 overflow-hidden">
                        <div class="flex justify-between text-[7px] font-black uppercase opacity-60 px-1 truncate">
                            <span class="truncate pr-1">${this.state.teamAName || 'Đội A'}</span>
                            <span class="truncate pl-1">${this.state.teamBName || 'Đội B'}</span>
                        </div>
                        <div class="relative h-1.5 bg-black/20 rounded-full overflow-hidden border border-white/5">
                            <div class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/30 z-10"></div>
                            <div class="absolute top-0 bottom-0 left-0 bg-blue-400 transition-all duration-500" style="width: ${progressPercent}%"></div>
                            <div class="absolute top-1/2 left-[${progressPercent}%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full border border-white shadow-sm transition-all duration-500 z-20 flex items-center justify-center">
                                <span class="text-[6px]">🚩</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-right min-w-[60px]">
                        <div class="text-[8px] font-black uppercase opacity-60 tracking-widest leading-none mb-0.5">Điểm</div>
                        <div class="text-xl md:text-2xl font-black leading-none">${team === 'A' ? this.state.scoreA : this.state.scoreB}</div>
                    </div>
                </div>

                <div class="flex-1 flex flex-col items-center justify-center w-full max-w-md">
                    <div class="w-full bg-white rounded-[40px] p-8 md:p-10 shadow-2xl relative">
                        <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-950 px-6 py-1 rounded-full font-black text-xs uppercase shadow-lg border-2 border-white">
                            Câu hỏi của bạn 📋
                        </div>
                        
                        <div id="tow-question" class="text-2xl md:text-3xl font-black text-slate-800 text-center mb-10 leading-relaxed pt-2">...</div>
                        
                        <div id="tow-options" class="grid grid-cols-2 gap-4">
                            <!-- Handled by nextQuestion() -->
                        </div>
                    </div>
                </div>

                <div class="w-full flex items-center justify-center gap-2 py-4 text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                    <span class="animate-pulse">${this.state.ropePos === 0 ? 'Trận đấu đang cân bằng' : ( (this.state.ropePos < 0 && team === 'A') || (this.state.ropePos > 0 && team === 'B') ? 'Đội bạn đang thắng thế! 🔥' : 'Cố lên, sắp bị kéo rồi! 💦' )}</span>
                </div>
            </div>
        `;
        
        // Luôn đảm bảo câu hỏi được vẽ ngay lập tức
        if (!this.currentQuestion) {
            this.nextQuestion();
        } else {
            // Sử dụng setTimeout để đảm bảo các phần tử đã sẵn sàng trong DOM sau khi render
            setTimeout(() => this.updateQuestionUI(), 50);
        }
    },

    nextQuestion() {
        let questionData;
        const customPool = this.state.questions || [];
        const quizPool = window.currentLessonData?.quizPool || [];
        
        if (customPool.length > 0) {
            const randomIdx = Math.floor(Math.random() * customPool.length);
            questionData = JSON.parse(JSON.stringify(customPool[randomIdx])); // Deep copy
        } else if (quizPool.length > 0) {
            const randomIdx = Math.floor(Math.random() * quizPool.length);
            const q = quizPool[randomIdx];
            questionData = {
                title: q.question,
                options: [...q.options],
                answer: typeof q.answer === 'number' ? q.options[q.answer] : q.answer
            };
        } else {
            const a = Math.floor(Math.random() * 50) + 10;
            const b = Math.floor(Math.random() * 50) + 10;
            const res = a + b;
            questionData = {
                title: `${a} + ${b} = ?`,
                options: [res, res + 5, res - 5, res + 10].sort(() => Math.random() - 0.5),
                answer: res
            };
        }

        this.currentQuestion = questionData;
        this.updateQuestionUI();
    },

    renderGameMedia(q) {
        if (!q || !q.mediaType || q.mediaType === 'none' || !q.mediaUrl) return '';
        
        const containerClass = "w-full flex justify-center mb-6 max-h-48 overflow-hidden rounded-2xl bg-slate-50 border border-slate-100";
        
        if (q.mediaType === 'image') {
            return `<div class="${containerClass}"><img src="${q.mediaUrl}" class="max-w-full h-auto object-contain"></div>`;
        }
        if (q.mediaType === 'video') {
            return `<div class="${containerClass}"><video src="${q.mediaUrl}" controls class="max-w-full h-full"></video></div>`;
        }
        if (q.mediaType === 'audio') {
            return `
                <div class="w-full flex flex-col items-center gap-2 mb-6 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <div class="text-4xl animate-pulse">🔊</div>
                    <audio src="${q.mediaUrl}" controls class="w-full h-10"></audio>
                </div>
            `;
        }
        return '';
    },

    updateQuestionUI() {
        const questionData = this.currentQuestion;
        if (!questionData) return;

        const qEl = document.getElementById('tow-question');
        const optEl = document.getElementById('tow-options');
        if (!qEl || !optEl) return;

        // Render Media + Title
        qEl.innerHTML = `
            ${this.renderGameMedia(questionData)}
            <div class="px-2">${questionData.title}</div>
        `;

        optEl.innerHTML = questionData.options.map(opt => `
            <button onclick="GameLibrary.games.tug_of_war.handleAnswer(event, '${opt}')" class="group relative overflow-hidden py-4 md:py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-black text-lg md:text-xl text-slate-800 hover:border-blue-500 hover:text-blue-600 transition-all transform active:scale-95 shadow-sm">
                <span class="relative z-10">${opt}</span>
                <div class="absolute inset-0 bg-blue-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
        `).join('');
    },

    async handleAnswer(event, picked) {
        if (!this.currentQuestion) return;
        const correct = this.currentQuestion.answer;
        
        const btn = event.currentTarget;
        if (String(picked) === String(correct)) {
            if (window.UI && window.UI.playSound) window.UI.playSound('correct');
            btn.classList.add('bg-green-500', 'text-white', 'border-green-600');
            // Gửi điểm ngay
            this.pointForTeam();
            // Đợi một chút để học sinh thấy màu xanh rồi đổi câu
            setTimeout(() => {
                this.nextQuestion();
            }, 500);
        } else {
            if (window.UI && window.UI.playSound) window.UI.playSound('error');
            btn.classList.add('bg-red-500', 'text-white', 'border-red-600', 'animate-shake');
            setTimeout(() => {
                btn.classList.remove('bg-red-500', 'text-white', 'border-red-600', 'animate-shake');
            }, 500);
        }
    },

    async checkAnswer(event, picked, correct) {
        if (String(picked) === String(correct)) {
            if (window.UI && window.UI.playSound) window.UI.playSound('correct');
            // Visual success feedback
            const btn = event.currentTarget;
            btn.classList.add('bg-green-500', 'text-white', 'border-green-600');
            setTimeout(() => {
                this.pointForTeam();
                this.nextQuestion();
            }, 300);
        } else {
            if (window.UI && window.UI.playSound) window.UI.playSound('error');
            const btn = event.currentTarget;
            btn.classList.add('bg-red-500', 'text-white', 'border-red-600', 'animate-shake');
            setTimeout(() => {
                btn.classList.remove('bg-red-500', 'text-white', 'border-red-600', 'animate-shake');
            }, 500);
        }
    },

    async pointForTeam() {
        const myName = this.tempStudentName || localStorage.getItem('eduMathName');
        const team = this.state.teamA.includes(myName) ? 'A' : (this.state.teamB.includes(myName) ? 'B' : null);
        
        if (!team) return; // Should not happen with current logic
        
        const increment = team === 'A' ? -1 : 1;
        
        const newScoreA = team === 'A' ? this.state.scoreA + 1 : this.state.scoreA;
        const newScoreB = team === 'B' ? this.state.scoreB + 1 : this.state.scoreB;
        const newRopePos = this.state.ropePos + increment;

        // Check for win
        const threshold = 15;
        let win = null;
        if (newRopePos <= -threshold) win = 'A';
        if (newRopePos >= threshold) win = 'B';

        try {
            await db.collection('game_sessions').doc(this.sessionId).update({
                scoreA: newScoreA,
                scoreB: newScoreB,
                ropePos: newRopePos,
                status: win ? 'finished' : 'playing',
                winningTeam: win
            });
        } catch (e) {
            console.error("Sync failed:", e);
        }
    },

    renderEndScreen() {
        const win = this.state.winningTeam;
        const teamName = win === 'A' ? (this.state.teamAName || 'ĐỘI A').toUpperCase() : (this.state.teamBName || 'ĐỘI B').toUpperCase();
        // Sửa lỗi ngược màu: Đội A (Táo Đỏ) -> rose, Đội B (Táo Xanh) -> blue
        const teamColor = win === 'A' ? 'bg-rose-500' : 'bg-blue-600';
        
        const myName = this.tempStudentName || localStorage.getItem('eduMathName');
        const isMeWinner = (win === 'A' && this.state.teamA.includes(myName)) ||
                          (win === 'B' && this.state.teamB.includes(myName));

        if (this.role === 'teacher' && win && !this.playedWinSound) {
            this.stopBgMusic();
            if (this.sounds && this.sounds.win) {
                this.sounds.win.play().catch(e => console.log("Win sound error:", e));
            }
            this.playedWinSound = true;
        }

        this.container.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full p-10 text-center bg-slate-900 text-white animate-fade-in font-['Be_Vietnam_Pro']">
                <div class="relative mb-12">
                    <div class="text-[120px] filter drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] animate-bounce-slow">🏆</div>
                    <div class="absolute inset-0 animate-ping opacity-20">🏆</div>
                </div>
                
                <h2 class="text-[13px] font-black text-yellow-400 uppercase tracking-[0.5em] mb-4">KẾT THÚC TRẬN ĐẤU</h2>
                <div class="${teamColor} px-10 py-5 rounded-[40px] shadow-2xl scale-125 mb-16 border-4 border-white">
                    <h3 class="text-4xl font-black uppercase italic tracking-tighter">${teamName} QUÁN QUÂN!</h3>
                </div>

                <div class="flex flex-wrap justify-center gap-4 max-w-2xl mb-12">
                    ${(win === 'A' ? this.state.teamA : this.state.teamB).map(name => `
                        <div class="bg-white/10 px-4 py-2 rounded-2xl font-black text-sm border border-white/20">🌟 ${name}</div>
                    `).join('')}
                </div>

                ${this.role === 'teacher' ? `
                    <div class="flex gap-4">
                        <button onclick="GameLibrary.games.tug_of_war.renderLobby()" class="bg-white text-slate-900 font-black px-12 py-5 rounded-3xl shadow-xl hover:scale-110 active:scale-95 transition-all text-sm uppercase tracking-widest">
                            Quay lại Sảnh 🏠
                        </button>
                        <button onclick="window.close()" class="bg-blue-600 text-white font-black px-12 py-5 rounded-3xl shadow-xl hover:scale-110 active:scale-95 transition-all text-sm uppercase tracking-widest">
                            Thoát Game 🚪
                        </button>
                    </div>
                ` : `
                    <div class="text-xl font-bold italic opacity-60">
                        ${isMeWinner ? 'Chúc mừng bạn và đồng đội! 🎉' : 'Đừng nản chí, lần sau cố gắng hơn nhé! ❤️'}
                    </div>
                `}
            </div>
        `;
    },

    cleanup() {
        if (this.unsubscribe) this.unsubscribe();
        if (this.unsubscribeGlobal) this.unsubscribeGlobal();
    }
};


