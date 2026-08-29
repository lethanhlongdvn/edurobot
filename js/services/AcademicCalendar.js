// js/services/AcademicCalendar.js
// Quản lý cấu hình Năm học & Tự động tính toán tuần thực học (35 tuần)

export const AcademicCalendar = {
    // Cấu hình mặc định
    defaultConfig: {
        startDate: '2025-09-08', // Ngày Thứ Hai đầu tiên của năm học (Tuần 1)
        tetBreakStartWeek: 21,   // Tuần bắt đầu nghỉ Tết (sau khi hoàn thành tuần 20)
        tetBreakWeeks: 2,        // Nghỉ 2 tuần
        totalStudyWeeks: 35      // Tổng số tuần thực học
    },

    config: null,

    // Khởi tạo & tải cấu hình từ LocalStorage / Firestore
    async init() {
        this.config = { ...this.defaultConfig };
        
        // 1. Tải từ LocalStorage trước để có ngay lập tức
        try {
            const local = localStorage.getItem('edurobot_academic_calendar');
            if (local) {
                this.config = { ...this.config, ...JSON.parse(local) };
            }
        } catch (e) {
            console.warn('[AcademicCalendar] Lỗi đọc localStorage:', e);
        }

        // 2. Tải từ Firestore để cập nhật mới nhất từ Admin
        if (window.db || (typeof firebase !== 'undefined' && firebase.firestore)) {
            try {
                const db = window.db || firebase.firestore();
                const doc = await db.collection('app_settings').doc('academic_calendar').get();
                if (doc.exists) {
                    const firestoreData = doc.data();
                    this.config = { ...this.config, ...firestoreData };
                    localStorage.setItem('edurobot_academic_calendar', JSON.stringify(this.config));
                }
            } catch (err) {
                console.warn('[AcademicCalendar] Không thể kết nối Firestore tải lịch năm học:', err);
            }
        }

        return this.config;
    },

    // Lưu cấu hình (Dành cho Admin)
    async saveConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        localStorage.setItem('edurobot_academic_calendar', JSON.stringify(this.config));

        if (window.db || (typeof firebase !== 'undefined' && firebase.firestore)) {
            try {
                const db = window.db || firebase.firestore();
                await db.collection('app_settings').doc('academic_calendar').set(this.config, { merge: true });
                console.log('[AcademicCalendar] Đã lưu cấu hình năm học lên Firestore');
            } catch (err) {
                console.error('[AcademicCalendar] Lỗi lưu Firestore:', err);
                throw err;
            }
        }
        return this.config;
    },

    /**
     * Tính toán tuần thực học hiện tại dựa vào ngày hiện tại
     * @param {Date} [targetDate] - Ngày cần tính (mặc định là hôm nay)
     * @returns {{ currentWeek: number, currentPeriod: string, isTetHoliday: boolean, calendarWeek: number }}
     */
    calculateCurrentWeek(targetDate = new Date()) {
        const config = this.config || this.defaultConfig;
        
        // Chuẩn hóa ngày bắt đầu về 00:00:00
        const start = new Date(config.startDate);
        start.setHours(0, 0, 0, 0);

        const current = new Date(targetDate);
        current.setHours(0, 0, 0, 0);

        // Số ngày tính từ ngày bắt đầu
        const diffTime = current.getTime() - start.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        // Nếu chưa đến ngày khai giảng / bắt đầu năm học -> Trả về Tuần 1
        if (diffDays < 0) {
            return {
                currentWeek: 1,
                currentPeriod: 'GIỮA KỲ 1',
                isTetHoliday: false,
                calendarWeek: 1
            };
        }

        // Tuần theo lịch (1-indexed: 7 ngày đầu là tuần 1)
        const calendarWeek = Math.floor(diffDays / 7) + 1;

        const tetStart = parseInt(config.tetBreakStartWeek) || 21;
        const tetWeeks = parseInt(config.tetBreakWeeks) || 2;
        const totalWeeks = parseInt(config.totalStudyWeeks) || 35;

        let studyWeek = calendarWeek;
        let isTet = false;

        // Xử lý nghỉ Tết:
        if (calendarWeek >= tetStart && calendarWeek < tetStart + tetWeeks) {
            isTet = true;
            studyWeek = Math.max(1, tetStart - 1); // Đang nghỉ tết, giữ tuần học trước Tết
        } else if (calendarWeek >= tetStart + tetWeeks) {
            studyWeek = calendarWeek - tetWeeks;
        }

        // Giới hạn trong khoảng 1 đến 35 tuần thực học
        if (studyWeek < 1) studyWeek = 1;
        if (studyWeek > totalWeeks) studyWeek = totalWeeks;

        // Xác định Kỳ học tương ứng
        let period = 'GIỮA KỲ 1';
        if (studyWeek >= 1 && studyWeek <= 9) {
            period = 'GIỮA KỲ 1';
        } else if (studyWeek >= 10 && studyWeek <= 18) {
            period = 'CUỐI KỲ 1';
        } else if (studyWeek >= 19 && studyWeek <= 27) {
            period = 'GIỮA KỲ 2';
        } else if (studyWeek >= 28 && studyWeek <= 35) {
            period = 'CUỐI KỲ 2';
        }

        return {
            currentWeek: studyWeek,
            currentPeriod: period,
            isTetHoliday: isTet,
            calendarWeek: calendarWeek
        };
    },

    // Modal cài đặt năm học cho Admin
    renderSettingsModal() {
        const config = this.config || this.defaultConfig;
        return `
            <div id="modal-academic-settings" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 hidden animate-fade-in">
                <div class="bg-white dark:bg-slate-900 rounded-[28px] max-w-lg w-full p-6 md:p-8 shadow-2xl border border-indigo-50 dark:border-white/10 transform transition-all scale-95 duration-200">
                    <div class="flex items-center justify-between mb-6">
                        <div class="flex items-center gap-3">
                            <span class="text-2xl p-2.5 bg-blue-100 dark:bg-blue-900/40 text-blue-600 rounded-2xl">📅</span>
                            <div>
                                <h3 class="text-lg md:text-xl font-black text-indigo-950 dark:text-white">Cài đặt Thời gian Năm học</h3>
                                <p class="text-xs font-semibold text-gray-400">Tự động phân bổ 35 tuần thực học</p>
                            </div>
                        </div>
                        <button onclick="window.AcademicCalendar.closeModal()" class="w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-400 hover:text-gray-700 dark:hover:text-white flex items-center justify-center font-bold text-sm">✕</button>
                    </div>

                    <div class="space-y-4">
                        <!-- Ngày bắt đầu tuần 1 -->
                        <div>
                            <label class="block text-xs font-black uppercase text-indigo-900/60 dark:text-indigo-200/60 mb-2">
                                🚩 Ngày bắt đầu Tuần 1 (Thứ Hai)
                            </label>
                            <input type="date" id="academic-start-date" value="${config.startDate}" 
                                class="w-full bg-gray-50 dark:bg-slate-800 border-2 border-indigo-50 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-bold text-indigo-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                        </div>

                        <!-- Nghỉ Tết -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                                <label class="block text-xs font-black uppercase text-indigo-900/60 dark:text-indigo-200/60 mb-2">
                                    🧧 Tuần bắt đầu nghỉ Tết
                                </label>
                                <input type="number" id="academic-tet-start" min="1" max="35" value="${config.tetBreakStartWeek}" 
                                    class="w-full bg-gray-50 dark:bg-slate-800 border-2 border-indigo-50 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-bold text-indigo-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                                <p class="text-[10px] text-gray-400 mt-1">Sau khi học xong tuần ${config.tetBreakStartWeek - 1}</p>
                            </div>
                            <div>
                                <label class="block text-xs font-black uppercase text-indigo-900/60 dark:text-indigo-200/60 mb-2">
                                    🌴 Số tuần nghỉ Tết
                                </label>
                                <input type="number" id="academic-tet-weeks" min="1" max="4" value="${config.tetBreakWeeks}" 
                                    class="w-full bg-gray-50 dark:bg-slate-800 border-2 border-indigo-50 dark:border-white/5 rounded-xl px-4 py-3 text-sm font-bold text-indigo-900 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                                <p class="text-[10px] text-gray-400 mt-1">Mặc định nghỉ 2 tuần</p>
                            </div>
                        </div>

                        <!-- Dự tính tuần hiện tại -->
                        <div id="academic-preview-box" class="p-3.5 bg-blue-50/70 dark:bg-blue-950/30 rounded-2xl border border-blue-100 dark:border-blue-900/50 flex items-center justify-between">
                            <span class="text-xs font-bold text-blue-900 dark:text-blue-200">Hôm nay hệ thống tính là:</span>
                            <span id="academic-preview-badge" class="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-black shadow-sm">
                                Đang tính...
                            </span>
                        </div>
                    </div>

                    <div class="flex justify-end gap-3 pt-6 mt-6 border-t border-gray-100 dark:border-slate-800">
                        <button onclick="window.AcademicCalendar.closeModal()" class="px-5 py-2.5 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 font-bold text-sm transition-all">Hủy</button>
                        <button onclick="window.AcademicCalendar.handleSaveModal()" class="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-lg shadow-blue-200 dark:shadow-none transition-all active:scale-95">
                            💾 Lưu cài đặt
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    openModal() {
        let modal = document.getElementById('modal-academic-settings');
        if (!modal) {
            const div = document.createElement('div');
            div.innerHTML = this.renderSettingsModal();
            document.body.appendChild(div.firstElementChild);
            modal = document.getElementById('modal-academic-settings');
        } else {
            const config = this.config || this.defaultConfig;
            document.getElementById('academic-start-date').value = config.startDate;
            document.getElementById('academic-tet-start').value = config.tetBreakStartWeek;
            document.getElementById('academic-tet-weeks').value = config.tetBreakWeeks;
        }

        this.updatePreview();

        // Gắn sự kiện thay đổi input để cập nhật preview thời gian thực
        ['academic-start-date', 'academic-tet-start', 'academic-tet-weeks'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.oninput = () => this.updatePreview();
        });

        modal.classList.remove('hidden');
        setTimeout(() => modal.querySelector('div').classList.replace('scale-95', 'scale-100'), 50);
    },

    updatePreview() {
        const start = document.getElementById('academic-start-date')?.value || this.defaultConfig.startDate;
        const tetStart = parseInt(document.getElementById('academic-tet-start')?.value) || 21;
        const tetWeeks = parseInt(document.getElementById('academic-tet-weeks')?.value) || 2;

        const tempObj = Object.create(this);
        tempObj.config = { startDate: start, tetBreakStartWeek: tetStart, tetBreakWeeks: tetWeeks, totalStudyWeeks: 35 };
        
        const res = tempObj.calculateCurrentWeek();
        const badge = document.getElementById('academic-preview-badge');
        if (badge) {
            if (res.isTetHoliday) {
                badge.innerText = `Nghỉ Tết (Tuần ${res.currentWeek})`;
                badge.className = 'px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-black shadow-sm';
            } else {
                badge.innerText = `${res.currentPeriod} - Tuần ${res.currentWeek}`;
                badge.className = 'px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-black shadow-sm';
            }
        }
    },

    closeModal() {
        const modal = document.getElementById('modal-academic-settings');
        if (modal) {
            modal.querySelector('div').classList.replace('scale-100', 'scale-95');
            setTimeout(() => modal.classList.add('hidden'), 150);
        }
    },

    async handleSaveModal() {
        const startDate = document.getElementById('academic-start-date').value;
        const tetBreakStartWeek = parseInt(document.getElementById('academic-tet-start').value);
        const tetBreakWeeks = parseInt(document.getElementById('academic-tet-weeks').value);

        if (!startDate) {
            alert('Vui lòng chọn ngày bắt đầu năm học!');
            return;
        }

        try {
            await this.saveConfig({
                startDate,
                tetBreakStartWeek,
                tetBreakWeeks,
                totalStudyWeeks: 35
            });

            alert('Đã cập nhật cấu hình thời gian năm học thành công!');
            this.closeModal();

            // Cập nhật tuần trên router và render lại
            if (window.router) {
                const calculated = this.calculateCurrentWeek();
                window.router.currentPeriod = calculated.currentPeriod;
                window.router.currentWeek = calculated.currentWeek;
                window.router.renderHome();
            }
        } catch (e) {
            alert('Có lỗi xảy ra khi lưu: ' + e.message);
        }
    }
};

if (typeof window !== 'undefined') {
    window.AcademicCalendar = AcademicCalendar;
}
