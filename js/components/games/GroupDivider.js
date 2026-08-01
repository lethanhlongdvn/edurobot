export const GroupDivider = {
    container: null,
    students: [],
    classes: [],
    currentClass: '',
    numGroups: 2,
    groups: [],
    pickedGroups: [],
    isDividing: false,
    isPickingGroup: false,
    isPairMode: false,
    audioDivide: null,
    audioFinish: null,
    
    initSounds() {
        const pathPrefix = window.location.pathname.includes('/games/') ? '../' : './';
        if (!this.audioBackground) {
            this.audioBackground = new Audio(`${pathPrefix}assets/audio/Quizi.mp3`);
            this.audioBackground.loop = true;
            this.audioBackground.volume = 0.4;
        }
        if (!this.audioDivide) {
            this.audioDivide = new Audio(`${pathPrefix}assets/audio/game/Chia_nhom.mp3`);
            this.audioDivide.loop = true;
        }
        if (!this.audioFinish) {
            this.audioFinish = new Audio(`${pathPrefix}assets/audio/Am_thanh_chuc_mung.mp3`);
        }
    },

    async start(container, options, onClose) {
        this.container = container;
        this.onClose = onClose;
        
        if (!document.getElementById('group-divider-styles')) {
            const style = document.createElement('style');
            style.id = 'group-divider-styles';
            style.textContent = `
                @keyframes groupFadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: groupFadeIn 0.4s ease forwards; }
                .highlight-group {
                    background: #60a5fa !important;
                    border-color: #2563eb !important;
                    color: white !important;
                    transform: translateY(-10px) scale(1.05);
                    box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.4) !important;
                    z-index: 20;
                }
                .highlight-group * { color: white !important; }
                .selected-group {
                    background: #fbbf24 !important;
                    border-color: #d97706 !important;
                    border-width: 4px !important;
                    transform: scale(1.1);
                    box-shadow: 0 25px 50px -12px rgba(217, 119, 6, 0.5) !important;
                    z-index: 40;
                    animation: groupPulse 1s infinite alternate;
                }
                @keyframes groupPulse {
                    from { transform: scale(1.1); }
                    to { transform: scale(1.15); }
                }
                .selected-group * { color: #451a03 !important; }
                .highlight-group .pair-card {
                    background: transparent !important;
                    border-color: rgba(255, 255, 255, 0.3) !important;
                    box-shadow: none !important;
                }
                .selected-group .pair-card {
                    background: transparent !important;
                    border-color: rgba(69, 26, 3, 0.2) !important;
                    box-shadow: none !important;
                }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }

                .dice-3d-wrap { width: 40px; height: 40px; perspective: 200px; }
                .dice-3d {
                    width: 100%; height: 100%; position: relative;
                    transform-style: preserve-3d;
                    animation: diceRotate 0.6s infinite linear;
                    transition: transform 0.5s ease-out;
                }
                .dice-3d.stop-animation { animation: none; transform: rotateX(20deg) rotateY(20deg); opacity: 0.3; }
                .dice-3d div {
                    position: absolute; width: 100%; height: 100%;
                    background: white; border: 1.5px solid #e2e8f0;
                    border-radius: 8px; display: flex; align-items: center; justify-content: center;
                }
                .dice-dot { width: 6px; height: 6px; background: #1e293b; border-radius: 50%; }
                .face-1 { transform: translateZ(20px); }
                .face-2 { transform: rotateY(90deg) translateZ(20px); }
                .face-3 { transform: rotateY(180deg) translateZ(20px); }
                .face-4 { transform: rotateY(-90deg) translateZ(20px); }
                .face-5 { transform: rotateX(90deg) translateZ(20px); }
                .face-6 { transform: rotateX(-90deg) translateZ(20px); }
                @keyframes diceRotate {
                    0% { transform: rotateX(0) rotateY(0) rotateZ(0); }
                    100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
                }

                .pair-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    container-type: inline-size;
                    overflow: visible;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }
                .student-name {
                    font-size: clamp(14px, 8cqw, 24px);
                    font-weight: 800;
                    white-space: nowrap;
                    width: 100%;
                    text-align: center;
                    padding: 0 6px;
                    display: block;
                    overflow: visible;
                }
                .dice-container {
                    display: flex; align-items: center; justify-content: center;
                    width: 100%; height: 100%;
                }
                .highlight-pair {
                    background: #60a5fa !important;
                    color: white !important;
                    transform: scale(1.05) translateY(-5px);
                    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3) !important;
                    z-index: 30;
                }
                .highlight-pair .student-name { color: white !important; }
                .selected-pair {
                    background: #fbbf24 !important;
                    border-color: #d97706 !important;
                    color: #451a03 !important;
                    transform: scale(1.1);
                    box-shadow: 0 20px 25px -5px rgba(217, 119, 6, 0.4) !important;
                    z-index: 50;
                    animation: groupPulse 1s infinite alternate;
                }
                .selected-pair .student-name { color: #451a03 !important; }
                
                .back-btn-container {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    z-index: 100;
                }
                .back-btn {
                    background: #ef4444;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 12px;
                    font-weight: 800;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: all 0.2s;
                    border: none;
                    cursor: pointer;
                    text-transform: uppercase;
                }
                .back-btn:hover {
                    background: #dc2626;
                    transform: translateX(-4px);
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                }
            `;
            document.head.appendChild(style);
        }

        await this.loadStudentData();
        this.initSounds();
        if (this.audioBackground) {
            this.audioBackground.play().catch(e => console.log("Audio play deferred"));
        }
    },

    async loadStudentData() {
        try {
            const pathPrefix = window.location.pathname.includes('/games/') ? '../' : './';
            const response = await fetch(`${pathPrefix}students_data.json`);
            const data = await response.json();
            this.allStudents = data;
            this.classes = [...new Set(data.map(s => s.studentClass))].sort();
            this.render();
        } catch (error) {
            this.container.innerHTML = '<div class="p-8 text-red-600">Không thể tải dữ liệu học sinh.</div>';
        }
    },

    handleClassChange(event) {
        this.currentClass = event.target.value;
        this.students = this.allStudents
            .filter(s => s.studentClass === this.currentClass)
            .map(s => s.name);
        this.render();
    },

    handleNumGroupsChange(event) {
        this.numGroups = parseInt(event.target.value) || 2;
    },

    toggleMode() {
        this.isPairMode = !this.isPairMode;
        this.groups = [];
        this.pickedGroups = [];
        this.render();
    },

    async startDividing() {
        if (this.isDividing || this.students.length === 0) return;
        this.isDividing = true;
        if (this.audioDivide) {
            this.audioDivide.currentTime = 0;
            this.audioDivide.play().catch(e => {});
        }
        this.render(); 
        await new Promise(resolve => setTimeout(resolve, 50));
        const shuffled = [...this.students].sort(() => Math.random() - 0.5);
        if (this.isPairMode) {
            this.groups = Array.from({ length: this.numGroups }, () => []);
            const pairs = [];
            for (let i = 0; i < shuffled.length; i += 2) {
                const p = [shuffled[i]];
                if (shuffled[i + 1]) p.push(shuffled[i + 1]);
                pairs.push(p.join(' & '));
            }
            pairs.forEach((pair, index) => {
                this.groups[index % this.numGroups].push(pair);
            });
        } else {
            this.groups = Array.from({ length: this.numGroups }, () => []);
            shuffled.forEach((student, index) => {
                this.groups[index % this.numGroups].push(student);
            });
        }
        const maxInGroup = Math.ceil(this.students.length / this.numGroups);
        for (let row = 0; row < maxInGroup; row++) {
            for (let col = 0; col < this.numGroups; col++) {
                const studentName = this.groups[col][row];
                if (studentName) {
                    await new Promise(resolve => setTimeout(resolve, 400));
                    const cell = document.getElementById(`student-${col}-${row}`);
                    if (cell) {
                        cell.innerHTML = `
                            <div class="pair-card w-full h-full flex items-center justify-center animate-fade-in">
                                <div class="student-name">${studentName}</div>
                            </div>
                        `;
                        cell.classList.add('bg-white', 'text-blue-900', 'border-blue-200', 'shadow-sm');
                    }
                }
            }
        }
        document.querySelectorAll('.dice-3d-wrap').forEach(d => d.remove());
        this.isDividing = false;
        if (this.audioDivide) {
            this.audioDivide.pause();
            this.audioDivide.currentTime = 0;
        }
        if (this.audioFinish) {
            this.audioFinish.currentTime = 0;
            this.audioFinish.play().catch(e => {});
        }
        this.render();
    },

    pickRandomGroup() {
        if (this.isDividing || this.groups.length === 0 || this.isPickingGroup) return;
        if (this.pickedGroups.length >= (this.isPairMode ? document.querySelectorAll('[data-pair-idx]').length : this.groups.length)) {
            this.pickedGroups = [];
            document.querySelectorAll('[data-group-card]').forEach(card => card.classList.remove('selected-group'));
            document.querySelectorAll('[data-pair-idx]').forEach(el => el.classList.remove('selected-pair'));
        }
        this.isPickingGroup = true;
        let selectableElements = this.isPairMode ? document.querySelectorAll('[data-pair-idx]') : document.querySelectorAll('[data-group-card]');
        const totalItems = selectableElements.length;
        const availableIndices = Array.from({ length: totalItems }, (_, i) => i).filter(i => !this.pickedGroups.includes(i));
        const winningIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        if (this.audioDivide) {
            this.audioDivide.currentTime = 0;
            this.audioDivide.play().catch(e => {});
        }
        const duration = 5000;
        const startTime = performance.now();
        const highlightClass = this.isPairMode ? 'highlight-pair' : 'highlight-group';
        const selectedClass = this.isPairMode ? 'selected-pair' : 'selected-group';
        const rounds = 6;
        const totalSteps = (totalItems * rounds) + winningIndex;
        let lastStep = -1;
        const runSelection = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentStepCount = Math.floor(totalSteps * easeOutQuart);
            if (progress < 1) {
                if (currentStepCount !== lastStep) {
                    lastStep = currentStepCount;
                    const index = currentStepCount % totalItems;
                    selectableElements.forEach(el => el.classList.remove(highlightClass));
                    if (selectableElements[index]) selectableElements[index].classList.add(highlightClass);
                }
                requestAnimationFrame(runSelection);
            } else {
                if (this.audioDivide) { this.audioDivide.pause(); this.audioDivide.currentTime = 0; }
                selectableElements.forEach(el => el.classList.remove(highlightClass));
                if (selectableElements[winningIndex]) selectableElements[winningIndex].classList.add(selectedClass);
                this.pickedGroups.push(winningIndex);
                this.isPickingGroup = false;
                if (this.audioFinish) { this.audioFinish.currentTime = 0; this.audioFinish.play().catch(e => {}); }
            }
        };
        requestAnimationFrame(runSelection);
    },

    render() {
        const maxInGroup = Math.ceil(this.students.length / this.numGroups) || 0;
        this.container.innerHTML = `
            <div class="relative flex flex-col-reverse w-full h-full bg-slate-50 overflow-hidden font-['Be_Vietnam_Pro']">
                <div class="back-btn-container">
                    <button id="divider-back-btn" class="back-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                        Quay lại
                    </button>
                </div>
                <div class="bg-white border-t border-slate-200 p-4 z-20 shadow-lg">
                    <div class="flex flex-wrap items-center justify-center gap-4 max-w-6xl mx-auto">
                        <select id="divider-class-select" class="bg-slate-100 border-2 border-slate-200 rounded-lg px-3 py-2 font-bold text-sm">
                            <option value="">--- Lớp ---</option>
                            ${this.classes.map(c => `<option value="${c}" ${this.currentClass === c ? 'selected' : ''}>${c}</option>`).join('')}
                        </select>
                        <div class="flex bg-slate-100 p-1 rounded-xl">
                            <button id="mode-individual" class="px-4 py-2 rounded-lg text-xs font-black ${!this.isPairMode ? 'bg-white shadow text-blue-600' : 'text-slate-400'}">NHIỀU BẠN</button>
                            <button id="mode-pair" class="px-4 py-2 rounded-lg text-xs font-black ${this.isPairMode ? 'bg-white shadow text-indigo-600' : 'text-slate-400'}">CHIA CẶP</button>
                        </div>
                        <input type="number" id="divider-num-groups" min="2" max="10" value="${this.numGroups}" class="w-16 bg-slate-100 border-2 border-slate-200 rounded-lg px-3 py-2 font-bold text-sm">
                        <button id="divider-start-btn" ${this.isDividing || !this.currentClass ? 'disabled' : ''} class="bg-blue-600 text-white font-black px-8 py-2 rounded-lg uppercase text-sm">CHIA NHÓM</button>
                        ${this.groups.length > 0 && !this.isDividing ? `<button id="divider-pick-btn" class="bg-amber-500 text-white font-black px-6 py-2 rounded-lg uppercase text-sm">🎯 CHỌN NHÓM BÁO CÁO</button>` : ''}
                    </div>
                </div>
                <div class="flex-1 p-6 overflow-hidden flex flex-col items-center justify-center">
                    <div id="group-grid" class="flex flex-wrap gap-4 items-stretch justify-center w-full h-full overflow-y-auto">
                        ${this.isDividing ? this.renderEmptyGroups(this.numGroups, maxInGroup) : (this.groups.length > 0 ? this.renderExistingGroups() : '')}
                    </div>
                </div>
            </div>
        `;

        document.getElementById('divider-back-btn')?.addEventListener('click', () => {
            if (this.audioBackground) {
                this.audioBackground.pause();
                this.audioBackground.currentTime = 0;
            }
            if (this.onClose) this.onClose();
            else window.close();
        });

        document.getElementById('divider-class-select')?.addEventListener('change', (e) => this.handleClassChange(e));
        document.getElementById('divider-num-groups')?.addEventListener('change', (e) => this.handleNumGroupsChange(e));
        document.getElementById('divider-start-btn')?.addEventListener('click', () => this.startDividing());
        document.getElementById('divider-pick-btn')?.addEventListener('click', () => this.pickRandomGroup());
        document.getElementById('mode-individual')?.addEventListener('click', () => { if(this.isPairMode) this.toggleMode(); });
        document.getElementById('mode-pair')?.addEventListener('click', () => { if(!this.isPairMode) this.toggleMode(); });
    },

    renderEmptyGroups(num, max) {
        const dice3D = `
            <div class="dice-3d-wrap">
                <div class="dice-3d">
                    <div class="face-1"><span class="dice-dot"></span></div><div class="face-2"><div class="grid grid-cols-2 gap-1 px-1"><span class="dice-dot"></span><span class="dice-dot"></span></div></div>
                    <div class="face-3"><div class="grid grid-cols-2 gap-1 p-1"><span class="dice-dot"></span><span class="dice-dot"></span><span class="dice-dot"></span></div></div>
                    <div class="face-4"><div class="grid grid-cols-2 gap-1 p-1"><span class="dice-dot"></span><span class="dice-dot"></span><span class="dice-dot"></span><span class="dice-dot"></span></div></div>
                    <div class="face-5"><span class="dice-dot"></span></div><div class="face-6"><span class="dice-dot"></span></div>
                </div>
            </div>
        `;
        let html = '';
        for (let i = 0; i < num; i++) {
            html += `
                <div data-group-card="${i}" class="flex-1 min-w-[120px] bg-white rounded-xl shadow border overflow-hidden flex flex-col h-full transition-all">
                    <div class="p-2 flex-1 flex flex-col gap-2 overflow-hidden">
                        ${Array.from({ length: max }).map((_, j) => `
                            <div id="student-${i}-${j}" class="pair-card flex-1 min-h-[50px] rounded-lg bg-blue-50/20 border border-dashed border-blue-100 flex items-center justify-center overflow-hidden">
                                <div class="dice-container">${dice3D}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        return html;
    },

    renderExistingGroups() {
        const pairColors = ['bg-blue-50 text-blue-900', 'bg-emerald-50 text-emerald-900', 'bg-purple-50 text-purple-900', 'bg-orange-50 text-orange-900', 'bg-rose-50 text-rose-900', 'bg-indigo-50 text-indigo-900', 'bg-teal-50 text-teal-900'];
        let pairCounter = 0;
        return this.groups.map((group, i) => `
            <div data-group-card="${i}" class="flex-1 min-w-[150px] bg-white rounded-xl shadow border overflow-hidden flex flex-col h-full transition-all duration-300">
                <div class="p-2 flex-1 flex flex-col gap-2 overflow-y-auto custom-scrollbar">
                    ${group.map(item => {
                        const isPair = item.includes(' & ');
                        const content = isPair ? item.split(' & ').join('<div class="h-[1px] bg-black/5 my-1 w-1/2 mx-auto"></div>') : item;
                        const colorClass = isPair ? pairColors[pairCounter % pairColors.length] : 'bg-white border-slate-100 text-blue-900';
                        const pairAttr = isPair ? `data-pair-idx="${pairCounter++}"` : '';
                        return `
                            <div ${pairAttr} class="pair-card min-h-[60px] rounded-lg border px-4 py-2 text-center shadow animate-fade-in ${colorClass}">
                                <div class="student-name">${content}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `).join('');
    }
};

