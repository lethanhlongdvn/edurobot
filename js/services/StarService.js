// StarService.js - Quản lý hệ thống Sao và Vinh danh (Phiên bản Xếp hạng Lớp)
export const StarService = {
    _key: 'edurobot_star_system',
    _classSize: 40, // Sỉ số lớp giả định

    init() {
        if (!localStorage.getItem(this._key)) {
            const initialState = {
                totalStars: 0,
                history: [],
                milestones: {
                    certificates: [],
                    flags: []
                }
            };
            localStorage.setItem(this._key, JSON.stringify(initialState));
        }
    },

    getData() {
        this.init();
        try {
            const data = JSON.parse(localStorage.getItem(this._key));
            if (!data.studentStars) data.studentStars = {};
            return data;
        } catch (e) {
            return { totalStars: 0, history: [], milestones: { certificates: [], flags: [] }, studentStars: {} };
        }
    },

    getStudentStars(studentId) {
        const data = this.getData();
        // Nếu học sinh chưa có trong hệ thống sao, mặc định là 0
        if (data.studentStars[studentId] === undefined) {
             return 0;
        }
        return data.studentStars[studentId];
    },

    addStudentStars(studentId, amount) {
        const data = this.getData();
        const current = this.getStudentStars(studentId);
        const newTotal = current + parseInt(amount);
        data.studentStars[studentId] = newTotal;
        localStorage.setItem(this._key, JSON.stringify(data));
        
        // Đồng bộ lên Firebase nếu có thể
        if (window.saveStarData) {
            window.saveStarData(studentId, newTotal).catch(e => console.warn("Firebase sync deferred:", e));
        }
        
        return newTotal;
    },

    async syncWithFirebase() {
        if (!window.loadAllStars) return;
        
        const remoteStars = await window.loadAllStars();
        if (!remoteStars) return;
        
        const data = this.getData();
        let changed = false;
        
        // Ghi đè dữ liệu cục bộ bằng dữ liệu từ Firebase nếu Firebase có dữ liệu mới hơn
        // Trong bản prototype này, ta ưu tiên Firebase là nguồn sự thật (Source of Truth)
        for (const [id, stars] of Object.entries(remoteStars)) {
            if (data.studentStars[id] !== stars) {
                data.studentStars[id] = stars;
                changed = true;
            }
        }
        
        if (changed) {
            localStorage.setItem(this._key, JSON.stringify(data));
            console.log("Đã đồng bộ số sao từ Firebase thành công!");
            return true;
        }
        return false;
    },

    addStars(amount, reason, type = 'auto', details = {}) {
        const data = this.getData();
        const newStar = {
            id: Date.now(),
            date: new Date().toISOString(),
            amount: parseInt(amount),
            reason,
            type,
            ...details
        };

        data.totalStars += newStar.amount;
        data.history.unshift(newStar);

        if (data.history.length > 100) data.history = data.history.slice(0, 100);

        localStorage.setItem(this._key, JSON.stringify(data));
        return data;
    },

    // Quản lý bởi Giáo viên
    awardStarsToAll(amount, reason) {
        // Thực tế sẽ gửi lên Firebase cho toàn bộ lớp. 
        // Ở bản offline, chúng ta sẽ giả lập bằng cách cộng cho chính user hiện tại 
        // và lưu vết cho "toàn lớp" trong lịch sử.
        return this.addStars(amount, `[Cả lớp] ${reason}`);
    },

    awardStarsToStudents(studentIds, amount, reason) {
        // studentIds là mảng ID học sinh (từ leaderboard mock)
        // Nếu user hiện tại có trong danh sách thì cộng thật
        // Ở đây giả lập: nếu là Tăng sao nhóm, ta ghi nhận vào lịch sử
        return this.addStars(amount, `[Nhóm] ${reason}`);
    },

    // Giả lập bảng xếp hạng lớp (Đã xóa hàm getMockLeaderboard() cũ)

    // Xác định tên chu kỳ hiện tại dựa trên thời gian thực
    getCurrentCycle() {
        const now = new Date();
        const day = now.getDay(); // 0: CN, 5: Thứ 6
        const hour = now.getHours();
        
        // Tạo logic tuần học (Giả sử bắt đầu từ Tuần 1 vào tháng 9)
        // Đây là bản đơn giản hóa, thực tế sẽ map với manifest.js
        const startOfYear = new Date(now.getFullYear(), 8, 1);
        if (now < startOfYear) startOfYear.setFullYear(now.getFullYear() - 1);
        const weekNum = Math.ceil((((now - startOfYear) / 86400000) + startOfYear.getDay() + 1) / 7);
        
        // Kiểm tra xem có phải thời gian phát thưởng không (Sau 17h thứ 6)
        const isAwardTime = (day === 5 && hour >= 17) || day === 6 || day === 0;
        
        if (!isAwardTime) return null;
        return `Tuần ${weekNum}`;
    },

    // Tổng kết tuần và trao giải tự động
    async awardWeeklyHonors() {
        const cycle = this.getCurrentCycle();
        if (!cycle) return;

        const lastAwarded = localStorage.getItem('edurobot_last_award_cycle');
        if (lastAwarded === cycle) return; // Đã trao giải cho chu kỳ này rồi

        console.log(`🏆 Bắt đầu tổng kết và trao giải cho: ${cycle}`);
        
        try {
            // Tải toàn bộ dữ liệu sao từ Firebase
            if (!window.loadAllStars) return;
            const starMap = await window.loadAllStars();
            if (!starMap) return;

            // Tải danh sách học sinh
            let students = [];
            if (window.StarAdmin && window.StarAdmin.allStudents && window.StarAdmin.allStudents.length > 0) {
                students = window.StarAdmin.allStudents;
            } else {
                const pathPrefix = window.location.pathname.includes('/games/') ? '../' : '';
                const res = await fetch(`${pathPrefix}students_data.json`);
                students = await res.json();
            }

            const classes = [...new Set(students.map(s => s.studentClass))];
            const teacherName = localStorage.getItem('teacherName') || 'Lê Thành Long';

            for (const className of classes) {
                const studentsInClass = students.filter(s => s.studentClass === className);
                
                // Gán điểm sao thực tế
                const rankedStudents = studentsInClass.map(s => ({
                    ...s,
                    stars: starMap[s.email.toLowerCase()] || 0
                })).sort((a,b) => b.stars - a.stars);

                // Tính 30% sỉ số
                const awardLimit = Math.ceil(rankedStudents.length * 0.3);
                const candidates = rankedStudents.slice(0, awardLimit);

                for (let i = 0; i < candidates.length; i++) {
                    const student = candidates[i];
                    const rank = i + 1;

                    // Giấy khen cho cả Top 30%
                    const certificate = {
                        id: `CERT-${cycle}-${student.email}`,
                        type: 'certificate',
                        name: `Giấy khen Học sinh Xuất sắc ${cycle}`,
                        icon: '📜',
                        date: new Date().toISOString(),
                        teacher: teacherName,
                        reason: `Đạt thành tích học tập xuất sắc trong ${cycle}`,
                        cycle: cycle
                    };
                    await window.saveHonor(student.email, certificate);

                    // Cờ cho Top 3
                    if (rank <= 3) {
                        let flagName = 'Cờ Hạng Nhất';
                        let flagIcon = '🥇';
                        if (rank === 2) { flagName = 'Cờ Hạng Nhì'; flagIcon = '🥈'; }
                        if (rank === 3) { flagName = 'Cờ Hạng Ba'; flagIcon = '🥉'; }

                        const flag = {
                            id: `FLAG-${cycle}-${student.email}`,
                            type: 'flag',
                            name: flagName,
                            icon: flagIcon,
                            date: new Date().toISOString(),
                            rank: rank,
                            cycle: cycle
                        };
                        await window.saveHonor(student.email, flag);
                    }
                }
            }

            localStorage.setItem('edurobot_last_award_cycle', cycle);
            console.log(`✅ Đã hoàn tất trao giải cho ${cycle}`);
            return true;
        } catch (e) {
            console.error("Lỗi khi trao giải tự động:", e);
        }
    },

    getStats() {
        const data = this.getData();
        const now = new Date();
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        
        const starsThisWeek = data.history
            .filter(h => new Date(h.date) >= oneWeekAgo)
            .reduce((sum, h) => sum + h.amount, 0);

        return {
            total: data.totalStars,
            week: starsThisWeek,
            certificates: data.milestones.certificates,
            flags: data.milestones.flags
        };
    },

    /**
     * Tự động cộng sao dựa trên điểm trung bình (50-100%)
     * Rule: 50-59%: 5 sao, 60-69%: 6 sao, 70-79%: 7 sao, 80-89%: 8 sao, 90-100%: 10 sao
     */
    awardStarsByPerformance(studentEmail, avgScore, lessonTitle) {
        if (!studentEmail || avgScore < 50) return 0;
        
        let amount = 0;
        if (avgScore >= 100) amount = 10;
        else if (avgScore >= 90) amount = 9;
        else if (avgScore >= 80) amount = 8;
        else if (avgScore >= 70) amount = 7;
        else if (avgScore >= 60) amount = 6;
        else if (avgScore >= 50) amount = 5;

        if (amount === 0) return 0;

        const emailKey = studentEmail.toLowerCase();
        // Slug đơn giản nếu window.getSlug chưa load
        const lessonSlug = lessonTitle.toLowerCase().replace(/[^a-z0-9]/g, '_');
        const awardKey = `stars_perf_${emailKey}_${lessonSlug}`;
        
        const prevAwarded = parseInt(localStorage.getItem(awardKey) || "0");
        if (amount > prevAwarded) {
            const diff = amount - prevAwarded;
            this.addStudentStars(emailKey, diff);
            localStorage.setItem(awardKey, amount.toString());
            console.log(`[AutoStar] ${lessonTitle}: +${diff} sao (Tổng đạt: ${amount})`);
            return diff;
        }
        return 0;
    }
};

window.StarService = StarService;
