// js/components/games/LuckyWheel.js

export const LuckyWheel = {
    container: null,
    students: [],
    allStudents: [],
    currentClass: '',
    isSpinning: false,
    angle: 0,
    ctx: null,
    canvas: null,
    classes: [],
    colors: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#8AC926', '#1982C4', '#6A4C93', '#F15BB5'],
    audioSpin: null,
    audioWin: null,
    winners: [],
    batchSize: 1,

    initSounds() {
        const pathPrefix = window.location.pathname.includes('/games/') ? '../' : './';
        if (!this.audioBackground) {
            this.audioBackground = new Audio(`${pathPrefix}assets/audio/Quizi.mp3`);
            this.audioBackground.loop = true;
            this.audioBackground.volume = 0.3;
        }
        if (!this.audioSpin) {
            this.audioSpin = new Audio(`${pathPrefix}assets/audio/game/Am_thanh_vong_quay.mp3`);
            this.audioSpin.loop = true;
        }
        if (!this.audioWin) {
            this.audioWin = new Audio(`${pathPrefix}assets/audio/Am_thanh_chuc_mung.mp3`);
        }
    },

    async start(container, options, onClose) {
        this.container = container;
        this.onClose = onClose;
        this.winners = [];
        this.batchSize = 1;
        
        // Load student data
        await this.loadStudentData();
        
        this.render();
        this.initCanvas();
        this.initSounds();

        if (this.audioBackground) {
            this.audioBackground.play().catch(e => console.log("Audio play deferred"));
        }
    },

    async loadStudentData() {
        try {
            const pathPrefix = window.location.pathname.includes('/games/') ? '../' : './';
            const response = await fetch(`${pathPrefix}students_data.json`);
            this.allStudents = await response.json();
            // Extract unique classes
            this.classes = [...new Set(this.allStudents.map(s => s.studentClass))].sort();
        } catch (error) {
            console.error('[LuckyWheel] Error loading student data:', error);
            this.allStudents = [];
        }
    },

    render() {
        this.container.innerHTML = `
            <div class="flex flex-col md:flex-row w-full h-full bg-gradient-to-br from-indigo-50 to-blue-100 overflow-hidden relative font-['Be_Vietnam_Pro']">
                
                <!-- Left Panel: The Wheel -->
                <div class="md:flex-[1.2] flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
                    <!-- Back Button -->
                    <div class="absolute top-4 left-4 z-[60]">
                        <button id="lucky-wheel-back-btn" class="group flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur hover:bg-white text-blue-600 rounded-xl font-black text-[10px] shadow-sm transition-all active:scale-95 border border-blue-100">
                             <span class="w-5 h-5 bg-blue-600 text-white rounded-lg flex items-center justify-center text-[10px]">E</span>
                             <span class="uppercase tracking-widest group-hover:translate-x-0.5 transition-transform">QUAY LẠI</span>
                        </button>
                    </div>
                    <div class="relative w-full max-w-[350px] md:max-w-[500px] aspect-square flex items-center justify-center">
                        <canvas id="lucky-wheel-canvas" width="500" height="500" class="w-full h-full drop-shadow-[0_20px_60px_rgba(0,0,0,0.12)] z-10"></canvas>
                        
                        <!-- Pointer (Back to Right side pointing Left) -->
                        <div class="absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                            <div class="w-10 h-8 md:w-12 md:h-10 bg-red-600 shadow-xl border-2 border-white" style="clip-path: polygon(0 50%, 100% 0, 100% 100%);"></div>
                        </div>
                        
                        <!-- Center Hub -->
                        <div class="absolute inset-0 m-auto w-12 h-12 md:w-14 md:h-14 bg-white rounded-full z-30 shadow-lg border-4 border-blue-500 flex items-center justify-center">
                            <span class="text-blue-600 font-black text-xl md:text-2xl">E</span>
                        </div>
                    </div>
                </div>

                <!-- Right Panel: Results & Controls -->
                <div class="md:flex-[0.8] flex flex-col bg-white/40 backdrop-blur-xl border-l border-white/50">
                    
                    <!-- Header (Compressed) -->
                    <div class="p-3 border-b border-white/50 shrink-0 bg-white/20">
                        <div class="flex items-center gap-2 px-2">
                            <span class="text-sm">🏆</span>
                            <h2 class="font-black text-blue-900 uppercase text-[10px] tracking-[0.2em]">Danh sách trúng thưởng</h2>
                        </div>
                    </div>

                    <!-- Results Area (Scrollable) -->
                    <div id="wheel-results-list" class="flex-grow overflow-y-auto p-4 flex flex-col gap-2 custom-scrollbar">
                        <div class="text-blue-300 italic text-[10px] font-bold py-10 text-center">Đang chờ những em may mắn...</div>
                    </div>

                    <!-- Controls (Ultra Slim) -->
                    <div class="p-4 bg-white/60 border-t border-white/50 shrink-0">
                        <div class="flex flex-col gap-3">
                            <div class="flex gap-2">
                                <!-- Class Select -->
                                <div class="flex-1">
                                    <label class="block font-black text-blue-900/40 uppercase text-[7px] tracking-widest mb-1 px-1">Lớp học</label>
                                    <div class="relative">
                                        <select id="wheel-class-select" class="w-full bg-white border border-blue-100 rounded-lg px-2 py-1.5 text-[11px] font-black text-gray-700 outline-none focus:border-blue-500 appearance-none cursor-pointer">
                                            <option value="">-- Lớp --</option>
                                            ${this.classes.map(c => `<option value="${c}" ${this.currentClass === c ? 'selected' : ''}>Lớp ${c}</option>`).join('')}
                                        </select>
                                        <div class="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-blue-300">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <button id="wheel-spin-btn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-2.5 rounded-lg text-[11px] shadow-md shadow-blue-200 hover:-translate-y-0.5 active:scale-95 transition-all disabled:opacity-50 uppercase tracking-widest">
                                BẮT ĐẦU QUAY
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Winner Celebration Overlay (Cải tiến: Toàn màn hình, có hình nền, chữ siêu to) -->
            <div id="lucky-winner-overlay" class="fixed inset-0 z-[100] flex items-center justify-center invisible opacity-0 transition-all duration-700 bg-black/40 backdrop-blur-[2px]">
                <!-- Background Image Layer -->
                <div class="absolute inset-0 z-0">
                    <img src="${window.location.pathname.includes('/games/') ? '../' : './'}assets/images/nentrungthuong.jpg" class="w-full h-full object-cover opacity-100" alt="Background">
                </div>
                
                <div class="relative z-10 w-full h-full flex flex-col items-center justify-center py-10 px-6 text-center">
                    <!-- Semi-transparent box for text legibility -->
                    <div class="bg-black/50 backdrop-blur-sm p-8 md:p-12 rounded-[2rem] border border-white/20 shadow-2xl flex flex-col items-center gap-4 md:gap-8 max-w-[95vw] animate-winner-reveal">
                        
                        <div class="flex items-center gap-4 text-2xl md:text-5xl animate-bounce-slow">
                            <span>🏆</span>
                            <h3 class="font-black text-yellow-400 uppercase tracking-[0.3em] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] whitespace-nowrap text-shadow-lg">CHÚC MỪNG</h3>
                            <span>🏆</span>
                        </div>
                        
                        <div id="lucky-winner-name" class="text-white font-black text-3xl md:text-6xl lg:text-7xl uppercase tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,1)] whitespace-nowrap animate-text-shimmer bg-gradient-to-r from-white via-blue-100 to-white bg-[length:200%_auto] bg-clip-text text-transparent px-2 py-4 leading-loose">
                            -- TÊN --
                        </div>
                        
                    </div>
                </div>
            </div>

            <style>
                @keyframes winner-reveal {
                    0% { transform: scale(0.8) translateY(50px); opacity: 0; filter: blur(15px); }
                    100% { transform: scale(1) translateY(0); opacity: 1; filter: blur(0); }
                }
                @keyframes winner-shrink {
                    0% { transform: scale(1); opacity: 1; filter: blur(0); }
                    100% { transform: scale(0.1); opacity: 0; transform-origin: center right; translate: 40% -40%; }
                }
                @keyframes text-shimmer {
                    0% { background-position: 0% center; }
                    100% { background-position: 200% center; }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-30px); }
                }
                .animate-winner-reveal { animation: winner-reveal 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
                .animate-winner-shrink { animation: winner-shrink 0.8s cubic-bezier(0.36, 0, 0.66, -0.56) forwards; }
                .animate-text-shimmer { animation: text-shimmer 3s linear infinite; }
                
                .winner-card {
                    animation: winner-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                    padding: 10px 16px !important;
                    font-size: 14px !important;
                }
                @keyframes winner-in {
                    0% { opacity: 0; transform: translateX(30px) scale(0.9); }
                    100% { opacity: 1; transform: translateX(0) scale(1); }
                }
                .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
            </style>
        `;

        document.getElementById('lucky-wheel-back-btn')?.addEventListener('click', () => {
            if (this.audioBackground) {
                this.audioBackground.pause();
                this.audioBackground.currentTime = 0;
            }
            if (this.onClose) this.onClose();
            else window.close();
        });
        document.getElementById('wheel-class-select').addEventListener('change', (e) => this.selectClass(e.target.value));
        document.getElementById('wheel-spin-btn').addEventListener('click', () => this.spin());
    },

    close() {
        if (this.onClose) this.onClose();
        this.cleanup();
    },

    selectClass(className) {
        this.currentClass = className;
        this.students = this.allStudents.filter(s => s.studentClass === className).map(s => s.name);
        this.angle = 0;
        this.winners = [];
        this.draw();
        
        const listEl = document.getElementById('wheel-results-list');
        if (listEl) listEl.innerHTML = '<div class="text-blue-300 italic text-[11px] font-bold py-10 text-center">Đang chờ những em may mắn...</div>';
    },

    initCanvas() {
        this.canvas = document.getElementById('lucky-wheel-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.draw();
    },

    draw() {
        if (!this.ctx) return;
        const cx = this.canvas.width / 2;
        const cy = this.canvas.height / 2;
        const radius = cx - 10;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.students.length === 0) {
            // Draw empty wheel
            this.ctx.beginPath();
            this.ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
            this.ctx.fillStyle = '#E5E7EB';
            this.ctx.fill();
            this.ctx.strokeStyle = '#CBD5E1';
            this.ctx.lineWidth = 8;
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#94A3B8';
            this.ctx.font = 'bold 24px Nunito, sans-serif';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('HÃY CHỌN LỚP', cx, cy + 8);
            return;
        }

        const sliceAngle = (2 * Math.PI) / this.students.length;

        this.students.forEach((name, i) => {
            const startAngle = this.angle + i * sliceAngle;
            const endAngle = startAngle + sliceAngle;

            // Draw slice
            this.ctx.beginPath();
            this.ctx.moveTo(cx, cy);
            this.ctx.arc(cx, cy, radius, startAngle, endAngle);
            this.ctx.fillStyle = this.colors[i % this.colors.length];
            this.ctx.fill();
            this.ctx.strokeStyle = 'rgba(255,255,255,0.3)';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();

            // Draw Name
            this.ctx.save();
            this.ctx.translate(cx, cy);
            this.ctx.rotate(startAngle + sliceAngle / 2);
            this.ctx.textAlign = 'right';
            this.ctx.fillStyle = 'white';
            this.ctx.font = 'bold 13px Nunito, sans-serif'; // Slightly smaller font
            
            // NO truncation anymore as requested
            let displayName = name;
            
            this.ctx.fillText(displayName, radius - 35, 5);
            this.ctx.restore();
        });

        // Hub Decoration
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = '#1E293B';
        this.ctx.lineWidth = 12;
        this.ctx.stroke();
        
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, radius - 6, 0, 2 * Math.PI);
        this.ctx.strokeStyle = 'white';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
    },

    spin() {
        if (this.isSpinning || this.students.length === 0) return;

        this.isSpinning = true;
        document.getElementById('wheel-spin-btn').disabled = true;
        
        // Start spin sound
        if (this.audioSpin) {
            this.audioSpin.currentTime = 0;
            this.audioSpin.play().catch(e => console.warn("[LuckyWheel] Audio error:", e));
        }

        const duration = 20000; 
        const startTime = performance.now();
        const startAngle = this.angle;
        const spinRounds = 30 + Math.random() * 10;
        const totalRotation = spinRounds * 2 * Math.PI;

        const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            this.angle = startAngle + totalRotation * easeOutQuart;
            this.draw();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.finishSpin();
            }
        };

        requestAnimationFrame(animate);
    },

    async finishSpin() {
        this.isSpinning = false;
        
        const numToSelect = Math.min(this.batchSize, this.students.length);
        const winnersThisTurn = [];
        
        // Accuracy Fix: The pointer is at 0 radians (right side). 
        // We need to find which student's slice is currently at the 0 radian mark.
        const sliceAngle = (2 * Math.PI) / this.students.length;
        // Normalized angle (0 to 2PI) representing where the 0-radian point is on the wheel
        let normalizedAngle = (2 * Math.PI - (this.angle % (2 * Math.PI))) % (2 * Math.PI);
        
        const primaryWinnerIndex = Math.floor(normalizedAngle / sliceAngle);
        const primaryWinnerName = this.students[primaryWinnerIndex];
        
        winnersThisTurn.push(primaryWinnerName);

        // If batch size > 1, pick other unique winners
        if (numToSelect > 1) {
            const available = this.students.filter(name => name !== primaryWinnerName);
            for (let i = 0; i < numToSelect - 1; i++) {
                if (available.length === 0) break;
                const idx = Math.floor(Math.random() * available.length);
                winnersThisTurn.push(available.splice(idx, 1)[0]);
            }
        }

        if (this.audioSpin) {
            this.audioSpin.pause();
            this.audioSpin.currentTime = 0;
        }

        for (const name of winnersThisTurn) {
            await this.addWinner(name);
            await new Promise(r => setTimeout(r, 600));
        }

        document.getElementById('wheel-spin-btn').disabled = false;
    },

    async addWinner(name) {
        // 1. Hiển thị Overlay vinh danh
        const overlay = document.getElementById('lucky-winner-overlay');
        const nameEl = document.getElementById('lucky-winner-name');
        if (!overlay || !nameEl) return;

        nameEl.innerText = name;
        overlay.classList.remove('invisible');
        overlay.classList.add('opacity-100');
        overlay.children[0].classList.add('animate-winner-reveal');
        overlay.children[0].classList.remove('animate-winner-shrink');

        if (this.audioWin) {
            this.audioWin.currentTime = 0;
            this.audioWin.play().catch(e => {});
        }

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 }
            });
        }

        // 2. Chờ 4 giây (như yêu cầu của bạn)
        await new Promise(r => setTimeout(r, 4000));

        // 3. Hiệu ứng thu nhỏ và bay về danh sách
        overlay.children[0].classList.remove('animate-winner-reveal');
        overlay.children[0].classList.add('animate-winner-shrink');
        overlay.classList.remove('opacity-100');
        
        // Đợi animation thu nhỏ kết thúc
        await new Promise(r => setTimeout(r, 600));
        overlay.classList.add('invisible');

        // 4. Thêm vào danh sách kết quả bên phải
        const listEl = document.getElementById('wheel-results-list');
        if (this.winners.length === 0) listEl.innerHTML = '';
        
        this.winners.push(name);
        
        const card = document.createElement('div');
        card.className = 'winner-card bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 shrink-0 uppercase tracking-tighter';
        card.innerHTML = `
            <span class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-xs border border-white/20">${this.winners.length}</span>
            <span class="flex-1">${name}</span>
        `;
        listEl.append(card);
        listEl.scrollTop = listEl.scrollHeight;

        // Loại bỏ học sinh đã trúng thưởng khỏi vòng quay để tránh chọn trùng
        this.students = this.students.filter(s => s !== name);
        
        // Nếu tất cả học sinh đã được chọn, tự động khôi phục lại danh sách lớp
        if (this.students.length === 0 && this.currentClass) {
            this.students = this.allStudents.filter(s => s.studentClass === this.currentClass).map(s => s.name);
        }
        
        this.draw();
    },


    cleanup() {
        this.isSpinning = false;
        this.students = [];
        if (this.audioSpin) { this.audioSpin.pause(); this.audioSpin.currentTime = 0; }
        if (this.audioWin) { this.audioWin.pause(); this.audioWin.currentTime = 0; }
    }
};

