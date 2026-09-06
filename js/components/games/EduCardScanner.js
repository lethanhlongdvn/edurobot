/**
 * js/components/games/EduCardScanner.js
 * Trò chơi Đấu Trường Quét Thẻ Trắc Nghiệm Thông Minh (EduCard Arena)
 * Tích hợp Thị giác máy tính ArUco Marker, phân tích đáp án thời gian thực
 */

import { Aruco } from '../educard/aruco.js';

export const EduCardScanner = {
    container: null,
    questions: [],
    currentIndex: 0,
    students: [],
    allStudents: [],
    selectedClass: '5/1',
    submissions: {}, // { [stt]: { answer, timestamp, student } }
    isRevealed: false,
    isCameraActive: false,
    videoStream: null,
    animFrameId: null,
    audioCtx: null,

    async start(container, questions, onClose) {
        this.container = container;
        this.onClose = onClose;
        this.currentIndex = 0;
        this.submissions = {};
        this.isRevealed = false;
        this.isCameraActive = false;

        // Load student data
        await this.loadStudentData();

        // Prepare questions (from quizPool or fallback)
        this.questions = questions && questions.length > 0 ? questions : this.getFallbackQuestions();

        this.render();
        this.initSounds();
    },

    async loadStudentData() {
        try {
            const pathPrefix = window.location.pathname.includes('/games/') ? '../' : './';
            const res = await fetch(`${pathPrefix}students_data.json`);
            this.allStudents = await res.json();
            
            // Default to first class available or 5/1
            this.classes = [...new Set(this.allStudents.map(s => s.studentClass))].sort();
            this.selectedClass = this.classes[0] || '5/1';
            this.updateCurrentStudents();
        } catch (e) {
            console.error('[EduCardScanner] Không nạp được student data:', e);
            this.allStudents = [];
            this.students = [];
        }
    },

    updateCurrentStudents() {
        this.students = this.allStudents.filter(s => s.studentClass === this.selectedClass);
        this.submissions = {};
    },

    getFallbackQuestions() {
        return [
            {
                question: "Hình vuông có cạnh 5cm thì diện tích là bao nhiêu?",
                options: ["20 cm²", "25 cm²", "10 cm²", "15 cm²"],
                answer: 1
            },
            {
                question: "Từ nào sau đây viết đúng chính tả?",
                options: ["Xinh sắn", "Xinh xắn", "Sinh xắn", "Sinh sắn"],
                answer: 1
            },
            {
                question: "Nước sôi ở nhiệt độ bao nhiêu độ C trong điều kiện thường?",
                options: ["50°C", "80°C", "100°C", "120°C"],
                answer: 2
            }
        ];
    },

    initSounds() {
        try {
            if (!this.audioCtx) {
                this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
        } catch (e) {
            console.warn("Audio Context init error:", e);
        }
    },

    playSFX(type) {
        if (!this.audioCtx) return;
        try {
            if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
            const now = this.audioCtx.currentTime;
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);

            if (type === 'beep') {
                osc.frequency.setValueAtTime(800, now);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
                osc.start(now);
                osc.stop(now + 0.08);
            } else if (type === 'reveal') {
                osc.frequency.setValueAtTime(440, now);
                osc.frequency.exponentialRampToValueAtTime(880, now + 0.3);
                gain.gain.setValueAtTime(0.2, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
                osc.start(now);
                osc.stop(now + 0.5);
            }
        } catch (e) {}
    },

    render() {
        if (!this.container) return;
        const q = this.questions[this.currentIndex] || { question: "Hết câu hỏi!", options: [], answer: 0 };
        const totalQ = this.questions.length;

        // Calculate statistics
        const stats = { A: 0, B: 0, C: 0, D: 0 };
        const answeredCount = Object.keys(this.submissions).length;
        const totalStudents = this.students.length || 1;

        Object.values(this.submissions).forEach(sub => {
            if (stats[sub.answer] !== undefined) stats[sub.answer]++;
        });

        const correctAnswerLetter = ['A', 'B', 'C', 'D'][q.answer] || 'A';

        this.container.innerHTML = `
            <div class="flex flex-col h-screen w-screen bg-slate-950 text-white font-['Be_Vietnam_Pro'] select-none overflow-hidden">
                
                <!-- TOP HEADER -->
                <div class="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between z-30">
                    <div class="flex items-center gap-3">
                        <button id="btn-back-educard" class="w-10 h-10 bg-slate-800 hover:bg-slate-700 text-white rounded-xl flex items-center justify-center font-bold text-sm shadow transition active:scale-95">
                            ✕
                        </button>
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="px-2.5 py-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-xs rounded-lg uppercase tracking-wider">EduCard</span>
                                <h1 class="text-base md:text-xl font-black text-white">Đấu Trường Quét Thẻ Trắc Nghiệm</h1>
                            </div>
                            <p class="text-[11px] text-slate-400">Quét camera nhận diện đáp án thẻ của cả lớp</p>
                        </div>
                    </div>

                    <!-- Middle: Class Selector & In Thẻ button -->
                    <div class="flex items-center gap-3">
                        <div class="flex items-center gap-2 bg-slate-800/90 px-3 py-1.5 rounded-xl border border-slate-700">
                            <span class="text-xs font-bold text-slate-400">Lớp:</span>
                            <select id="educard-class-select" class="bg-transparent text-white font-black text-sm outline-none cursor-pointer">
                                ${(this.classes || ['5/1']).map(c => `
                                    <option value="${c}" ${c === this.selectedClass ? 'selected' : ''} class="bg-slate-900 text-white">Lớp ${c}</option>
                                `).join('')}
                            </select>
                        </div>

                        <a href="../pages/print-cards.html" target="_blank" class="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition border border-slate-700">
                            <span>🖨️</span> In bộ thẻ
                        </a>
                    </div>

                    <!-- Right Controls -->
                    <div class="flex items-center gap-3">
                        <div class="px-4 py-2 bg-slate-800 rounded-xl text-xs font-black text-slate-300 border border-slate-700">
                            Câu <span class="text-blue-400 text-base">${this.currentIndex + 1}</span>/${totalQ}
                        </div>
                        <button id="btn-toggle-camera" class="px-5 py-2.5 ${this.isCameraActive ? 'bg-rose-600 hover:bg-rose-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white rounded-xl font-black text-xs md:text-sm flex items-center gap-2 shadow-lg transition active:scale-95">
                            <span>${this.isCameraActive ? '⏹ Tắt Camera' : '📹 Bật Camera Quét'}</span>
                        </button>
                    </div>
                </div>

                <!-- MAIN WORKSPACE -->
                <div class="flex-1 flex flex-col md:flex-row overflow-hidden relative">
                    
                    <!-- LEFT COLUMN: QUESTION & OPTIONS (PROJECTOR SCREEN) -->
                    <div class="flex-1 flex flex-col p-6 md:p-10 justify-between overflow-y-auto z-10">
                        
                        <!-- Question Statement -->
                        <div class="p-6 md:p-8 bg-slate-900/80 border-2 border-slate-800 rounded-3xl backdrop-blur-md shadow-2xl">
                            <div class="flex items-center gap-2 text-xs font-black text-amber-400 uppercase tracking-widest mb-3">
                                <span>Thử thách trắc nghiệm</span>
                            </div>
                            <h2 class="text-2xl md:text-4xl font-extrabold text-white leading-tight">
                                ${q.question}
                            </h2>
                        </div>

                        <!-- 4 Options Grid -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                            ${['A', 'B', 'C', 'D'].map((letter, idx) => {
                                const optText = q.options[idx] || '';
                                const isCorrect = this.isRevealed && idx === q.answer;
                                const isWrong = this.isRevealed && idx !== q.answer;
                                const optCount = stats[letter];
                                const optPercent = answeredCount > 0 ? Math.round((optCount / answeredCount) * 100) : 0;

                                let borderClass = 'border-slate-800 bg-slate-900/60';
                                if (isCorrect) borderClass = 'border-emerald-500 bg-emerald-950/40 ring-4 ring-emerald-500/30';
                                else if (isWrong) borderClass = 'border-slate-800/40 bg-slate-900/20 opacity-40';

                                const letterBg = {
                                    'A': 'bg-blue-600',
                                    'B': 'bg-amber-600',
                                    'C': 'bg-rose-600',
                                    'D': 'bg-purple-600'
                                }[letter];

                                return `
                                    <div class="relative flex items-center p-5 md:p-6 rounded-2xl border-2 ${borderClass} transition-all duration-300">
                                        <!-- Letter Badge -->
                                        <div class="w-12 h-12 md:w-14 md:h-14 ${letterBg} rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl text-white mr-4 shadow-lg shrink-0">
                                            ${letter}
                                        </div>

                                        <!-- Option Text -->
                                        <div class="flex-1 text-lg md:text-2xl font-bold text-slate-100">
                                            ${optText}
                                        </div>

                                        <!-- Realtime answer count indicator -->
                                        <div class="flex flex-col items-end shrink-0 pl-3">
                                            <span class="text-xs font-black text-slate-400">${optCount} em</span>
                                            <span class="text-sm md:text-base font-black text-white">${optPercent}%</span>
                                        </div>

                                        <!-- Progress bar under option -->
                                        <div class="absolute bottom-0 left-0 right-0 h-1.5 bg-slate-800 rounded-b-2xl overflow-hidden">
                                            <div class="h-full ${letterBg} transition-all duration-300" style="width: ${optPercent}%"></div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>

                        <!-- Action Bar -->
                        <div class="flex items-center justify-between pt-4 border-t border-slate-800/80">
                            <div class="flex items-center gap-3">
                                <button id="btn-prev-q" ${this.currentIndex === 0 ? 'disabled' : ''} class="px-5 py-3 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white rounded-2xl font-black text-sm transition">
                                    ← Câu trước
                                </button>
                                <button id="btn-reset-answers" class="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-2xl font-black text-sm transition">
                                    🔄 Quét lại
                                </button>
                            </div>

                            <div class="flex items-center gap-3">
                                ${!this.isRevealed ? `
                                    <button id="btn-reveal-answer" class="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white rounded-2xl font-black text-base shadow-xl shadow-orange-500/25 transition transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2">
                                        <span>🔒</span>
                                        <span>Khóa & Công bố Đáp Án</span>
                                    </button>
                                ` : `
                                    <button id="btn-save-scores" class="px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black text-base shadow-xl shadow-blue-500/25 transition transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2">
                                        <span>💾</span>
                                        <span>Lưu Điểm Tiết Học</span>
                                    </button>
                                    <button id="btn-next-q" ${this.currentIndex >= totalQ - 1 ? 'disabled' : ''} class="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 text-white rounded-2xl font-black text-base shadow-xl shadow-emerald-500/25 transition transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2">
                                        <span>Câu tiếp theo →</span>
                                    </button>
                                `}
                            </div>
                        </div>

                    </div>

                    <!-- RIGHT COLUMN: LIVE SCANNER / REALTIME STUDENT ROSTER -->
                    <div class="w-full md:w-[420px] bg-slate-900 border-l border-slate-800 flex flex-col z-20">
                        
                        <!-- Camera Viewfinder / Preview -->
                        <div class="relative w-full aspect-video md:aspect-[4/3] bg-black overflow-hidden flex items-center justify-center border-b border-slate-800">
                            <video id="educard-video" autoplay playsinline muted class="absolute inset-0 w-full h-full object-cover"></video>
                            <canvas id="educard-canvas" class="absolute inset-0 w-full h-full object-cover"></canvas>
                            
                            ${!this.isCameraActive ? `
                                <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-slate-950/80 backdrop-blur-sm">
                                    <div class="w-16 h-16 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-3xl mb-3">
                                        📹
                                    </div>
                                    <p class="text-sm font-bold text-slate-300 mb-2">Camera đang tắt</p>
                                    <p class="text-xs text-slate-500 mb-4">Bấm nút bên dưới để bật camera quét thẻ học sinh</p>
                                    <button onclick="EduCardScanner.toggleCamera()" class="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs rounded-xl shadow-lg transition">
                                        Bật Camera Ngay
                                    </button>
                                </div>
                            ` : `
                                <div class="absolute top-2 left-2 px-2.5 py-1 bg-emerald-500/80 backdrop-blur-md rounded-lg text-[10px] font-black text-white flex items-center gap-1.5 animate-pulse">
                                    <span class="w-2 h-2 rounded-full bg-white"></span>
                                    ĐANG QUÉT THỜI GIAN THỰC
                                </div>
                            `}
                        </div>

                        <!-- Roster & Answer Status Header -->
                        <div class="p-4 bg-slate-950/50 border-b border-slate-800 flex items-center justify-between">
                            <div>
                                <span class="text-xs font-black text-slate-400 uppercase tracking-wider">Tiến độ nộp bài</span>
                                <div class="text-lg font-black text-white">
                                    <span class="text-emerald-400">${answeredCount}</span> / ${totalStudents} em
                                </div>
                            </div>

                            <!-- Progress Circle / Bar -->
                            <div class="w-28 bg-slate-800 h-3 rounded-full overflow-hidden">
                                <div class="h-full bg-emerald-500 transition-all duration-300" style="width: ${(answeredCount / totalStudents) * 100}%"></div>
                            </div>
                        </div>

                        <!-- Students List Roster -->
                        <div class="flex-1 overflow-y-auto p-3 space-y-1.5 custom-scroll">
                            ${this.students.map(st => {
                                const sub = this.submissions[st.stt];
                                const hasAnswered = !!sub;
                                const ansLetter = sub ? sub.answer : '-';
                                const isAnsCorrect = this.isRevealed && sub && (['A','B','C','D'].indexOf(sub.answer) === q.answer);

                                let statusBg = 'bg-slate-800/40 text-slate-400 border-slate-800';
                                if (hasAnswered) {
                                    if (this.isRevealed) {
                                        statusBg = isAnsCorrect ? 'bg-emerald-950/50 border-emerald-500 text-emerald-300' : 'bg-rose-950/50 border-rose-500 text-rose-300';
                                    } else {
                                        statusBg = 'bg-blue-950/40 border-blue-500/50 text-blue-200';
                                    }
                                }

                                return `
                                    <div class="flex items-center justify-between p-2.5 rounded-xl border ${statusBg} text-xs transition-all">
                                        <div class="flex items-center gap-2">
                                            <span class="w-6 h-6 rounded-lg ${hasAnswered ? 'bg-emerald-500 text-white font-black' : 'bg-slate-800 text-slate-500'} flex items-center justify-center text-[10px]">
                                                ${String(st.stt).padStart(2, '0')}
                                            </span>
                                            <span class="font-bold truncate max-w-[170px] ${hasAnswered ? 'text-white' : 'text-slate-400'}">
                                                ${st.name}
                                            </span>
                                        </div>

                                        <div class="flex items-center gap-2">
                                            ${hasAnswered ? `
                                                <span class="px-2.5 py-1 rounded-lg font-black text-xs ${
                                                    ansLetter === 'A' ? 'bg-blue-600 text-white' :
                                                    ansLetter === 'B' ? 'bg-amber-600 text-white' :
                                                    ansLetter === 'C' ? 'bg-rose-600 text-white' : 'bg-purple-600 text-white'
                                                }">
                                                    ${ansLetter}
                                                </span>
                                            ` : `
                                                <span class="text-[10px] text-slate-600 italic">Chưa giơ thẻ</span>
                                            `}
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>

                    </div>

                </div>

            </div>
        `;

        this.bindEvents();
    },

    bindEvents() {
        const btnBack = document.getElementById('btn-back-educard');
        if (btnBack) btnBack.onclick = () => this.cleanupAndClose();

        const classSelect = document.getElementById('educard-class-select');
        if (classSelect) {
            classSelect.onchange = (e) => {
                this.selectedClass = e.target.value;
                this.updateCurrentStudents();
                this.render();
                if (this.isCameraActive) this.startCamera();
            };
        }

        const btnCamera = document.getElementById('btn-toggle-camera');
        if (btnCamera) btnCamera.onclick = () => this.toggleCamera();

        const btnPrev = document.getElementById('btn-prev-q');
        if (btnPrev) {
            btnPrev.onclick = () => {
                if (this.currentIndex > 0) {
                    this.currentIndex--;
                    this.submissions = {};
                    this.isRevealed = false;
                    this.render();
                    if (this.isCameraActive) this.startCamera();
                }
            };
        }

        const btnNext = document.getElementById('btn-next-q');
        if (btnNext) {
            btnNext.onclick = () => {
                if (this.currentIndex < this.questions.length - 1) {
                    this.currentIndex++;
                    this.submissions = {};
                    this.isRevealed = false;
                    this.render();
                    if (this.isCameraActive) this.startCamera();
                }
            };
        }

        const btnReset = document.getElementById('btn-reset-answers');
        if (btnReset) {
            btnReset.onclick = () => {
                this.submissions = {};
                this.isRevealed = false;
                this.render();
                if (this.isCameraActive) this.startCamera();
            };
        }

        const btnReveal = document.getElementById('btn-reveal-answer');
        if (btnReveal) {
            btnReveal.onclick = () => {
                this.isRevealed = true;
                this.playSFX('reveal');
                if (typeof confetti === 'function') {
                    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                }
                this.render();
                if (this.isCameraActive) this.startCamera();
            };
        }

        const btnSave = document.getElementById('btn-save-scores');
        if (btnSave) {
            btnSave.onclick = () => this.saveScoresToFirestore();
        }
    },

    async toggleCamera() {
        if (this.isCameraActive) {
            this.stopCamera();
        } else {
            await this.startCamera();
        }
    },

    async startCamera() {
        this.stopCamera();
        const video = document.getElementById('educard-video');
        const canvas = document.getElementById('educard-canvas');
        if (!video || !canvas) return;

        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: { ideal: 'environment' },
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: false
            });

            this.videoStream = stream;
            video.srcObject = stream;
            await video.play();

            this.isCameraActive = true;
            this.render(); // update UI camera button state

            // Run detection loop
            this.runVisionLoop();
        } catch (e) {
            console.error("Không thể mở Camera:", e);
            alert("Không thể truy cập camera. Vui lòng cấp quyền sử dụng camera trong trình duyệt!");
            this.isCameraActive = false;
            this.render();
        }
    },

    stopCamera() {
        if (this.animFrameId) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
        }
        if (this.videoStream) {
            this.videoStream.getTracks().forEach(t => t.stop());
            this.videoStream = null;
        }
        this.isCameraActive = false;
        this.render();
    },

    runVisionLoop() {
        const video = document.getElementById('educard-video');
        const canvas = document.getElementById('educard-canvas');
        if (!video || !canvas || !this.isCameraActive) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        
        const processFrame = () => {
            if (!this.isCameraActive || video.paused || video.ended) return;

            if (video.videoWidth > 0 && video.videoHeight > 0) {
                if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                }

                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                if (!this.isRevealed) {
                    // Detect ArUco markers in current video frame
                    const detected = Aruco.detect(canvas, ctx);

                    if (detected.length > 0) {
                        detected.forEach(marker => {
                            // Find student with matching STT in current class
                            const student = this.students.find(s => s.stt === marker.id);
                            if (student) {
                                const isNew = !this.submissions[student.stt];
                                this.submissions[student.stt] = {
                                    student,
                                    answer: marker.answer,
                                    timestamp: Date.now()
                                };
                                if (isNew) this.playSFX('beep');
                            }

                            // Draw AR Bounding Box & Label on Canvas
                            this.drawARMarker(ctx, marker, student);
                        });

                        // Re-render UI stats periodically or on detection
                        this.updateStatsLive();
                    }
                }
            }

            this.animFrameId = requestAnimationFrame(processFrame);
        };

        this.animFrameId = requestAnimationFrame(processFrame);
    },

    drawARMarker(ctx, marker, student) {
        const [p0, p1, p2, p3] = marker.corners;
        
        ctx.save();
        // Green Bounding Box
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.closePath();
        ctx.stroke();

        // Label above marker
        const name = student ? student.name : `STT ${marker.id}`;
        const label = `${name} [${marker.answer}]`;

        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.fillRect(marker.center.x - 70, marker.center.y - 40, 140, 28);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 13px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(label, marker.center.x, marker.center.y - 21);
        ctx.restore();
    },

    updateStatsLive() {
        // Cập nhật số lượng và tỷ lệ % nhanh mà không giật toàn màn hình
        const q = this.questions[this.currentIndex];
        const stats = { A: 0, B: 0, C: 0, D: 0 };
        const answeredCount = Object.keys(this.submissions).length;

        Object.values(this.submissions).forEach(sub => {
            if (stats[sub.answer] !== undefined) stats[sub.answer]++;
        });

        // Re-render UI list to reflect new submissions
        this.render();
    },

    async saveScoresToFirestore() {
        if (!window.db) {
            alert("Đã ghi nhận kết quả tại lớp!");
            return;
        }

        const q = this.questions[this.currentIndex];
        const correctAnswer = ['A','B','C','D'][q.answer];
        const periodId = window.router?.currentLessonPeriod || window.currentLessonData?.period || 'cungco';
        const batch = window.db.batch();

        let count = 0;
        Object.values(this.submissions).forEach(sub => {
            const isCorrect = sub.answer === correctAnswer;
            const score = isCorrect ? 100 : 0;
            const docRef = window.db.collection("diem_tieng_viet_lop5").doc();

            batch.set(docRef, {
                studentName: sub.student.name,
                studentClass: sub.student.studentClass,
                studentSchool: sub.student.school || "Tiểu học Đỗ Văn Nại",
                period: String(periodId),
                score: score,
                scoreQuiz: score,
                type: "Luyện tập - Củng cố",
                sourceTab: "Củng cố (EduCard)",
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            count++;
        });

        try {
            await batch.commit();
            alert(`✅ Đã lưu kết quả thành công cho ${count} học sinh lên hệ thống!`);
        } catch (e) {
            console.error("Lỗi lưu điểm:", e);
            alert("Lưu kết quả thất bại. Vui lòng kiểm tra lại kết nối mạng!");
        }
    },

    cleanupAndClose() {
        this.stopCamera();
        if (typeof this.onClose === 'function') {
            this.onClose();
        } else {
            window.close();
        }
    }
};

window.EduCardScanner = EduCardScanner;
