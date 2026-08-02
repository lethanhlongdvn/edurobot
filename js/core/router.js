// router.js - Quản lý việc chuyển đổi giữa các trang (views)
import { subjects, lessons } from '../data.js';
import { UI } from '../components/ui-components.js';
import { QuestionBankManager } from '../services/QuestionBankManager.js';

export const router = {
    currentSubject: 'math',
    currentWeek: 1,
    currentPeriod: 'GIỮA KỲ 1',
    currentLessonPeriod: null,
    periodRanges: {
        'GIỮA KỲ 1': { start: 1, end: 9 },
        'CUỐI KỲ 1': { start: 10, end: 18 },
        'GIỮA KỲ 2': { start: 19, end: 27 },
        'CUỐI KỲ 2': { start: 28, end: 35 }
    },
    contentLocks: { subjects: {}, lessons: {} },
    
    isAdmin() {
        const role = localStorage.getItem('userRole');
        return role === 'admin' || role === 'teacher' || role === 'teacher-admin';
    },

    init() {
        window.router = this; // Phải gán trước khi renderHome vì renderHome gọi các UI component dùng router toàn cục
        window.UI = UI;
        window.subjects = subjects;
        window.lessons = lessons;
        if (!window.__lessonCache) window.__lessonCache = new Map();

        // Tải trạng thái khóa từ Firestore
        this.fetchLocks().finally(() => {
            if (window.location.hash === '#/' || window.location.hash === '') {
                this.renderHome(true);
            }
        });

        // Phục hồi trạng thái (kỳ, tuần) nếu có
        try {
            const savedState = sessionStorage.getItem('edurobot_router_state');
            if (savedState) {
                const state = JSON.parse(savedState);
                if (state.currentSubject) this.currentSubject = state.currentSubject;
                if (state.currentWeek) this.currentWeek = state.currentWeek;
                if (state.currentPeriod) this.currentPeriod = state.currentPeriod;
            }
        } catch (e) {
            console.error('Lỗi đọc state:', e);
        }

        window.addEventListener('hashchange', () => this.handleHashChange());

        window.normalizeVN = (s) => (s || "").toLowerCase().trim()
            .replace(/\s+/g, ' ')
            .replace(/linh/g, 'lẻ')
            .replace(/tư/g, 'bốn');

        window.toggleSolution = function(elementId) {
            const el = document.getElementById(elementId);
            if (el) {
                el.classList.toggle('hidden');
            }
        };

        // Show feedback function - supports multiple signatures:
        // 1) showMathFeedback(isCorrect, rightAnswer, studentAnswer, guidance, solution)
        // 2) showMathFeedback(title, icon, bodyHTML)
        window.showMathFeedback = function(arg1, arg2, arg3, arg4, arg5) {
            const ov = document.getElementById('math-modal-overlay');
            const titleEl = document.getElementById('modal-title');
            const iconEl = document.getElementById('modal-icon');
            const bodyEl = document.getElementById('modal-body');
            
            // Nếu modal chưa tồn tại (chưa render bài học nào), hãy tự tạo nó
            if (!ov) {
                window.router && window.router.createMathModal && window.router.createMathModal();
                // Thử lại sau khi tạo
                setTimeout(() => window.showMathFeedback(arg1, arg2, arg3, arg4, arg5), 50);
                return;
            }

            if (!titleEl || !iconEl || !bodyEl) return;

            const correctQuotes = [
                "Tuyệt vời quá! Em đã làm rất tốt.",
                "Chính xác rồi! Em có tư duy toán học thật nhạy bén.",
                "Wow! Tiếp tục phát huy nhé!",
                "Đúng rồi! Em đã nắm chắc kiến thức phần này rồi đấy.",
                "Xuất sắc! Thầy E rất tự hào về em."
            ];
            const wrongQuotes = [
                "Ôi, chưa chính xác rồi. Hãy thử lại xem nào!",
                "Có một chút nhầm lẫn ở đâu đó rồi. Em hãy đọc kỹ gợi ý nhé.",
                "Cố gắng lên! Thầy E tin em sẽ làm được!",
                "Chưa đúng rồi! Hãy bình tĩnh đọc kỹ lại đề bài và xem gợi ý của Thầy E nhé."
            ];

            if (typeof arg1 === 'boolean') {
                const isCorrect = arg1;
                const solutionHtml = arg5 || arg2 || '';
                const hintHtml = arg4 || arg3 || '';

                if (isCorrect) {
                    titleEl.innerText = "LỜI KHEN TỪ THẦY E";
                    iconEl.innerText = "✨";
                    titleEl.style.color = "#059669";
                    const quote = correctQuotes[Math.floor(Math.random() * correctQuotes.length)];
                    bodyEl.innerHTML = `
                        <div style="margin-bottom:1.5rem; padding:1rem; background:#f0fdf4; border-radius:1rem; border-left:5px solid #10b981;">
                            <p style="font-weight:900; color:#065f46; font-size:1.4rem; margin:0;">${quote}</p>
                        </div>
                        <div style="padding:1.5rem; background:#fff; border:2px dashed #10b981; border-radius:1.5rem;">
                            <h4 style="margin:0 0 1rem 0; color:#059669; font-size:1.2rem; font-weight:800; text-transform:uppercase;">📖 BÀI GIẢI CHI TIẾT:</h4>
                            <div style="font-size:1.2rem; color:#1e293b;">${solutionHtml}</div>
                        </div>
                    `;
                } else {
                    titleEl.innerText = "HƯỚNG DẪN CỦA THẦY E";
                    iconEl.innerText = "💡";
                    titleEl.style.color = "#d97706";
                    const quote = wrongQuotes[Math.floor(Math.random() * wrongQuotes.length)];
                    bodyEl.innerHTML = `
                        <div style="margin-bottom:1.5rem; padding:1rem; background:#fffbeb; border-radius:1rem; border-left:5px solid #f59e0b;">
                            <p style="font-weight:900; color:#92400e; font-size:1.4rem; margin:0;">${quote}</p>
                        </div>
                        <div style="padding:1.5rem; background:#fff; border:2px dashed #f59e0b; border-radius:1.5rem;">
                            <h4 style="margin:0 0 1rem 0; color:#d97706; font-size:1.2rem; font-weight:800; text-transform:uppercase;">🧐 GỢI Ý CHO EM:</h4>
                            <div style="font-size:1.2rem; color:#1e293b;">${hintHtml || "Hãy kiểm tra lại các bước tính toán và đơn vị của bài toán nhé!"}</div>
                        </div>
                    `;
                }
            } else {
                titleEl.innerText = arg1 || "THẦY E";
                iconEl.innerText = arg2 || "✨";
                titleEl.style.color = "#2563eb";
                bodyEl.innerHTML = arg3 || '';
            }
            ov.style.display = 'flex';
        };

        // Xử lý route ban đầu
        if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#/') {
            this.handleHashChange();
        } else {
            this.renderHome(true);
        }

        // ====== GLOBAL MATH MODAL SYSTEM (single source of truth) ======
        this.createMathModal();
    },

    async fetchLocks() {
        try {
            if (typeof firebase === 'undefined' || typeof firebase.firestore !== 'function') {
                console.warn('[Router] Firebase Firestore chưa sẵn sàng.');
                return;
            }
            const db = firebase.firestore();
            const doc = await db.collection('app_settings').doc('content_locks').get();
            if (doc.exists) {
                this.contentLocks = doc.data();
                console.log('[Router] Đã tải trạng thái khóa nội dung.');
            }
        } catch (e) {
            console.error('[Router] Lỗi tải khóa nội dung:', e);
        }
    },

    saveState() {
        sessionStorage.setItem('edurobot_router_state', JSON.stringify({
            currentSubject: this.currentSubject,
            currentWeek: this.currentWeek,
            currentPeriod: this.currentPeriod
        }));
    },

    navigateHonors() {
        window.location.hash = '#/honors';
    },

    async handleHashChange() {
        const hash = window.location.hash || '#/';
        
        // Dọn dẹp các component cũ nếu cần
        if (window.Quiz && window.Quiz.cleanup) window.Quiz.cleanup();
        
        // Dọn dẹp cửa sổ chat cũ để tránh trùng lặp DOM ID khi chuyển trang/bài học
        const oldChat = document.getElementById('ai-chat-window');
        if (oldChat) {
            oldChat.remove();
        }
        
        const main = document.getElementById('app-content');
        if (!main) return;

        if (hash === '#/' || hash === '' || hash === '#') {
            this.renderHome(true);
        } else if (hash === '#/honors') {
            if (this.isAdmin()) {
                window.location.hash = '#/star-admin';
                return;
            }
            main.innerHTML = await UI.renderHonors();
            window.scrollTo(0, 0);
        } else if (hash === '#/star-admin') {
            if (!this.isAdmin()) {
                alert('Chỉ giáo viên mới có quyền truy cập trang này!');
                this.goHome();
                return;
            }
            main.innerHTML = UI.renderStarAdmin();
            if (UI.initStarAdmin) UI.initStarAdmin();
            window.scrollTo(0, 0);
        } else if (hash.startsWith('#/subject/')) {
            const parts = hash.split('/');
            if (parts[2]) this.renderSubject(parts[2], true);
        } else if (hash.startsWith('#/lesson/')) {
            const parts = hash.split('/');
            if (parts[2] && parts[3]) this.renderLesson(parts[2], parts[3], true);
        } else {
            this.renderHome(true);
        }
    },

    // Phương thức điều hướng môn học tập trung
    navigateSubject(subId) {
        const sub = subjects.find(s => s.id === subId);
        if (!sub) return;

        const isAdmin = this.isAdmin();
        const isLocked = (sub.locked || this.contentLocks.subjects[subId]) && !isAdmin;

        if (isLocked) {
            alert('Môn học này đang tạm khóa hoặc đang trong quá trình phát triển. Vui lòng quay lại sau!');
            return;
        }

        if (sub.externalUrl) {
            window.location.href = sub.externalUrl;
        } else {
            this.selectDashboardSubject(subId);
        }
    },

    renderHome(fromHash = false) {
        if (UI && UI.cleanupQuiz) UI.cleanupQuiz();
        this.saveState();
        const currentHash = window.location.hash;
        if (!fromHash && currentHash !== '' && currentHash !== '#' && currentHash !== '#/') {
            window.location.hash = '/';
            return;
        }

        // Đảm bảo hiển thị Header chính của index.html khi quay về trang chủ
        const globalHeader = document.querySelector('header');
        if (globalHeader) globalHeader.style.display = 'block';

        const metaContainer = document.getElementById('navbar-metadata');
        if (metaContainer) metaContainer.classList.add('hidden');

        const badge = document.getElementById('subject-badge');
        if (badge) badge.classList.add('hidden');

        const subjectsContainer = document.getElementById('menu-subjects-container');
        if (subjectsContainer) subjectsContainer.classList.add('hidden');

        const container = document.getElementById('app-content');
        if (!container) return;

        // Lấy dữ liệu cho Dashboard
        const currentLessons = lessons[this.currentSubject] || [];
        const range = this.periodRanges[this.currentPeriod];

        // Lọc tuần dựa trên Kỳ học (period)
        const subjectWeeks = [...new Set(currentLessons.map(l => parseInt(l.week)))]
            .filter(w => w >= range.start && w <= range.end)
            .sort((a, b) => a - b);

        // Đảm bảo currentWeek hợp lệ trong kỳ mới chọn
        const weekNum = parseInt(this.currentWeek);
        if (!subjectWeeks.includes(weekNum)) {
            this.currentWeek = subjectWeeks.length > 0 ? subjectWeeks[0] : range.start;
        } else {
            this.currentWeek = weekNum; // Đảm bảo luôn là kiểu number
        }

        const isAdmin = this.isAdmin();
        const filteredLessons = currentLessons.filter(l => parseInt(l.week) === this.currentWeek && (isAdmin || !l.hidden));

        // Lấy bài học cuối cùng (Continue Learning)
        const lastLessonData = localStorage.getItem('edurobot_last_lesson');
        const lastLesson = lastLessonData ? JSON.parse(lastLessonData) : null;

        container.innerHTML = UI.renderDashboard(
            subjects,
            this.currentSubject,
            this.currentPeriod,
            subjectWeeks,
            filteredLessons,
            lastLesson
        );
        if (UI.initDashboard) UI.initDashboard();
        window.scrollTo(0, 0);
    },

    selectDashboardSubject(subjectId) {
        this.currentSubject = subjectId;
        this.renderHome();
    },

    selectDashboardWeek(week) {
        this.currentWeek = parseInt(week);
        this.renderHome();
    },

    selectDashboardPeriod(period) {
        this.currentPeriod = period;
        // Tự động nhảy về tuần đầu tiên của kỳ đó
        this.currentWeek = this.periodRanges[period].start;
        this.renderHome();
    },

    renderSubject(subId, fromHash = false) {
        if (!fromHash) {
            window.location.hash = `/subject/${subId}`;
            return;
        }

        const subject = subjects.find(s => s.id === subId);
        if (!subject) return;

        this.currentSubject = subId;
        this.saveState();

        // Đảm bảo hiển thị Header chính của index.html
        const globalHeader = document.querySelector('header');
        if (globalHeader) globalHeader.style.display = 'block';

        // Cập nhật Breadcrumb
        const bcContainer = document.getElementById('breadcrumb-container');
        const bcCurrent = document.getElementById('breadcrumb-current');
        if (bcContainer) bcContainer.classList.remove('hidden');
        if (bcCurrent) bcCurrent.innerHTML = subject.name;

        const container = document.getElementById('app-content');
        if (!container) return;

        const isAdmin = this.isAdmin();
        const subjectLessons = (lessons[subId] || []).filter(l => isAdmin || !l.hidden);

        let html = `
            <div class="max-w-5xl mx-auto">
                ${UI.renderSubjectHeader(subject)}
                
                <!-- Thanh tìm kiếm thông minh -->
                <div class="mb-10 relative group">
                    <div class="absolute inset-y-0 left-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="text" 
                        id="lesson-search" 
                        oninput="router.handleSearch(this.value)"
                        placeholder="Tìm theo tuần (vd: Tuần 23), tiết (vd: 111) hoặc tên bài học..." 
                        class="w-full bg-white dark:bg-slate-900 border-none rounded-[28px] pl-16 pr-8 py-6 text-sm shadow-xl shadow-gray-100/50 dark:shadow-slate-900/50 focus:ring-2 focus:ring-blue-600 transition-all font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300"
                    >
                </div>

                <div id="lesson-list" class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                    ${UI.renderLessonList(subjectLessons, subject.color)}
                </div>
            </div>
        `;

        container.innerHTML = html;
        window.scrollTo(0, 0);
    },

    handleSearch(query) {
        const subId = this.currentSubject;
        const subject = subjects.find(s => s.id === subId);
        const isAdmin = this.isAdmin();
        const subjectLessons = (lessons[subId] || []).filter(l => isAdmin || !l.hidden);

        const filtered = subjectLessons.filter(l => {
            const q = query.toLowerCase().trim();
            return l.title.toLowerCase().includes(q) ||
                l.period.toLowerCase().includes(q) ||
                `tuần ${l.week}`.toLowerCase().includes(q);
        });

        const listContainer = document.getElementById('dashboard-lesson-list');
        if (listContainer) {
            listContainer.innerHTML = UI.renderLessonList(filtered, subject.color);
        }
    },

    async renderLesson(subId, period, fromHash = false) {
        if (!fromHash) {
            window.location.hash = `/lesson/${subId}/${period}`;
            return;
        }

        const subject = subjects.find(s => s.id === subId);
        // Find lesson: support string/number ID and period
        let lesson = (lessons[subId] || []).find(l => 
            String(l.id) === String(period) || 
            String(l.period) === String(period)
        );

        if (!subject || !lesson) {
            console.warn(`[Router] Lesson not found in manifest: ${subId}/${period}. Trying fuzzy match...`);
            lesson = (lessons[subId] || []).find(l => 
                String(l.id).toLowerCase() === String(period).toLowerCase() || 
                String(l.period).toLowerCase() === String(period).toLowerCase()
            );
        }

        const isAdmin = this.isAdmin();
        const lessonId = `${subId}_${lesson?.period || period}`;
        const isLocked = (lesson?.hidden || this.contentLocks.lessons[lessonId]) && !isAdmin;

        if (!subject || !lesson || isLocked) {
            console.error(`[Router] Error: Access denied or lesson not found ${subId}/${period}`);
            if (isLocked) {
                alert('Bài học này hiện đang bị khóa. Vui lòng quay lại sau!');
                this.goHome();
            } else {
                // Thử render thông tin cơ bản nếu không tìm thấy trong manifest (trường hợp link cũ)
                const container = document.getElementById('app-content');
                if (container) {
                    container.innerHTML = `
                        <div class="max-w-xl mx-auto p-12 text-center bg-gray-50 rounded-[40px] border-4 border-dashed border-gray-200 mt-10">
                            <div class="text-6xl mb-6">🏜️</div>
                            <h3 class="font-black text-2xl text-gray-400 uppercase">Không tìm thấy bài học</h3>
                            <p class="text-gray-500 font-bold mb-8 mt-4">Nội dung bài học <b>${subId.toUpperCase()} - Tiết ${period}</b> không tồn tại hoặc đã được di chuyển.</p>
                            <button onclick="router.goHome()" class="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-200">Quay về trang chủ</button>
                        </div>
                    `;
                }
            }
            return;
        }

        const container = document.getElementById('app-content');
        if (container) {
            container.innerHTML = `
                <div class="flex flex-col items-center justify-center h-64 animate-fade-in">
                    <div class="w-16 h-16 border-8 border-indigo-100 border-t-indigo-600 rounded-full animate-spin mb-6 shadow-sm"></div>
                    <p class="text-indigo-800 font-black text-lg animate-pulse tracking-wide">Đang nạp nội dung bài học...</p>
                </div>
            `;
        }

        try {
            // Ensure cache is a Map
            if (!window.__lessonCache || typeof window.__lessonCache.has !== 'function') {
                window.__lessonCache = new Map();
            }
            const cache = window.__lessonCache;
            const cacheKey = `${subId}_${period}`;

            // 1. Check Cache
            if (cache.has(cacheKey)) {
                Object.assign(lesson, cache.get(cacheKey));
            } 
            // 2. Dynamic Loading if content not present
            else if (!lesson.content) {
                const padded = String(lesson.period).padStart(3, '0');
                const pathsToTry = [];
                
                // Path 1: Explicit modulePath (from manifest)
                if (lesson.modulePath) {
                    const cleanModulePath = lesson.modulePath.replace('./', '').replace(/\.js$/i, '');
                    pathsToTry.push(`/js/data/${subId}/${cleanModulePath}.js`);
                }
                
                // Path 2: Standard Modular Folder (id/index.js)
                pathsToTry.push(`/js/data/${subId}/${padded}/index.js`);
                
                // Path 3: Legacy Flat File (id.js)
                pathsToTry.push(`/js/data/${subId}/${padded}.js`);

                let mod = null;
                for (const path of pathsToTry) {
                    try {
                        const importPath = path + `?v=${Date.now()}`;
                        console.log(`[Router] Loading: ${importPath}`);
                        mod = await import(importPath);
                        if (mod) break;
                    } catch (e) {
                        // Silently fail and try next path
                    }
                }

                let loadedData = null;
                if (mod) {
                    // Resolve export: Priority to exportName -> lessonData -> lesson[padded] -> first export
                    const legacyKey = `lesson${subId === 'math' ? lesson.period : padded}`;
                    loadedData = (lesson.exportName && mod[lesson.exportName]) || 
                                 mod.lessonData || 
                                 mod[legacyKey] || 
                                 mod.default || 
                                 Object.values(mod)[0];
                }

                // 3. Fallback to Placeholders if still no data
                if (!loadedData) {
                    console.warn(`[Router] Physical module missing for ${subId}/${period}, fetching placeholders...`);
                    try {
                        // Dynamic import placeholder files to save initial bundle size
                        const placeholderMod = await import(`../data/${subId}/placeholders.js`);
                        const placeholders = placeholderMod.placeholderLessons || placeholderMod[`${subId.toUpperCase()}_PLACEHOLDERS`];
                        
                        if (placeholders) {
                            loadedData = Array.isArray(placeholders) 
                                ? placeholders.find(p => String(p.period) === String(period))
                                : placeholders[period];
                        }
                    } catch (pErr) {
                        console.error(`[Router] Failed to load placeholders for ${subId}:`, pErr);
                    }
                }

                if (loadedData) {
                    Object.assign(lesson, loadedData);
                    cache.set(cacheKey, loadedData);
                } else {
                    throw new Error(`Không thể tìm thấy nội dung bài học: ${subId}/${period}`);
                }
            }

            // Prefetch next 2 lessons for smoother navigation
            this.runPrefetch(subId, lesson);

        } catch (e) {
            console.error(`[Router] Critical loading error for ${subId}/${period}:`, e);
            if (container) {
                container.innerHTML = `
                    <div class="max-w-xl mx-auto p-10 bg-red-50 rounded-[40px] border-4 border-red-100 text-red-800 animate-fade-in shadow-2xl mt-10">
                        <div class="flex items-center gap-6 mb-6">
                            <div class="w-16 h-16 bg-red-100 rounded-[24px] flex items-center justify-center text-3xl shadow-inner">⚠️</div>
                            <h3 class="font-black text-2xl uppercase tracking-tight">Lỗi tải bài học</h3>
                        </div>
                        <p class="text-lg font-bold opacity-90 mb-8 leading-relaxed">
                            Xin lỗi, hệ thống không thể nạp bài <b>${subId.toUpperCase()} - Tiết ${period}</b>. 
                            <br><span class="text-sm font-medium text-red-400 italic">Chi tiết: ${e.message}</span>
                        </p>
                        <div class="flex gap-4">
                            <button onclick="location.reload()" class="flex-1 py-4 bg-red-600 text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg shadow-red-600/20 active:scale-95 transition-transform">Thử lại</button>
                            <button onclick="router.goHome()" class="flex-1 py-4 bg-white border-2 border-red-100 text-red-600 rounded-2xl font-black text-sm uppercase tracking-wider active:scale-95 transition-transform">Về trang chủ</button>
                        </div>
                    </div>
                `;
            }
            return;
        }

        // ====== SUCCESSFUL LOAD: RENDER UI ======
        this.currentSubject = subId;
        this.currentLessonPeriod = period;
        this.saveState();
        window.currentLessonData = lesson;

        document.title = `${lesson.title} - EduRobot`;

        // Update persistence
        localStorage.setItem('edurobot_last_lesson', JSON.stringify({
            subjectId: subId,
            period: lesson.period,
            title: lesson.title,
            week: lesson.week
        }));

        const openedLessons = JSON.parse(localStorage.getItem('edurobot_opened_lessons') || '{}');
        openedLessons[`${subId}-w${lesson.week}-p${lesson.period}`] = true;
        localStorage.setItem('edurobot_opened_lessons', JSON.stringify(openedLessons));

        if (container) {
            // Update Subject Badge
            const badge = document.getElementById('subject-badge');
            if (badge) {
                badge.classList.remove('hidden');
                const badgeConfig = {math:{bg:'bg-orange-500',text:'TOÁN 5'},vietnamese:{bg:'bg-blue-500',text:'TV5'},history:{bg:'bg-amber-500',text:'LS-ĐL'},science:{bg:'bg-emerald-500',text:'KH5'},ethics:{bg:'bg-orange-400',text:'ĐĐ5'},experiential:{bg:'bg-indigo-500',text:'TN5'},english:{bg:'bg-sky-500',text:'EN5'}};
                const bc = badgeConfig[subId] || {bg:'bg-gray-500',text:subject.shortName || subId.toUpperCase()};
                badge.className = `px-2 py-0.5 rounded-lg text-[9px] font-black text-white uppercase tracking-tighter ${bc.bg}`;
                badge.textContent = bc.text;
            }

            // Update Metadata
            const metaContainer = document.getElementById('navbar-metadata');
            if (metaContainer) {
                metaContainer.className = "hidden md:flex items-center space-x-4 border-l-2 border-gray-100 dark:border-slate-700 pl-4";
                metaContainer.innerHTML = `
                    <div class="flex items-center gap-3 text-[9px] font-black uppercase tracking-wider">
                        <span class="w-[1px] h-4 bg-gray-100 mx-1"></span>
                        <span class="text-gray-400">Chủ điểm:</span>
                        <span class="text-blue-800">${lesson.topic || 'Khám phá tri thức'}</span>
                        <span class="w-[1px] h-4 bg-gray-100 mx-1"></span>
                        <span class="text-gray-400">Tuần ${lesson.week}</span>
                    </div>
                `;
            }

            // Subject Switcher
            const subjectsContainer = document.getElementById('menu-subjects-container');
            if (subjectsContainer) {
                subjectsContainer.classList.remove('hidden');
                subjectsContainer.innerHTML = UI.renderNavbarSubjectSwitcher(subject, subjects);
            }

            container.innerHTML = UI.renderLessonPage(subject, lesson, subjects);
            window.scrollTo(0, 0);

            // Determine initial tab
            const hasStudy = !!(typeof lesson.content === 'function' || (typeof lesson.content === 'string' && lesson.content.trim()));
            const hasPractice = !!(typeof lesson.practice === 'function' || (typeof lesson.practice === 'string' && lesson.practice.trim()) || (typeof lesson.practice === 'object' && lesson.practice !== null && Object.keys(lesson.practice).length > 0));
            const hasQuiz = (lesson.quizPool && lesson.quizPool.length > 0) || await QuestionBankManager.hasPeriod(lesson.period || lesson.id);

            let defaultTab = 'study';
            if (hasStudy) defaultTab = 'study';
            else if (hasPractice) defaultTab = 'practice';
            else if (hasQuiz) defaultTab = 'quiz';

            this.switchTab(defaultTab);
        }
    },

    runPrefetch(subId, currentLesson) {
        const list = lessons[subId] || [];
        const idx = list.findIndex(l => String(l.period) === String(currentLesson.period));
        if (idx < 0) return;

        const prefetchNext = (offset) => {
            const next = list[idx + offset];
            if (!next || next.content) return;
            
            const cache = window.__lessonCache;
            const cacheKey = `${subId}_${next.period}`;
            if (cache && !cache.has(cacheKey)) {
                const padded = String(next.period).padStart(3, '0');
                let importPath;
                
                if (next.modulePath) {
                    importPath = `../data/${subId}/${next.modulePath.replace('./', '')}`;
                } else {
                    importPath = `../data/${subId}/${padded}/index.js`; // Assume modular folder for new ones
                }

                const busterPath = importPath + `?v=${Date.now()}`;
                import(busterPath).then(mod => {
                    const legacyKey = `lesson${subId === 'math' ? next.period : padded}`;
                    const loadedData = (next.exportName && mod[next.exportName]) || 
                                     mod.lessonData || 
                                     mod[legacyKey] || 
                                     mod.default || 
                                     Object.values(mod)[0];
                    if (loadedData) cache.set(cacheKey, loadedData);
                }).catch(() => {
                    // Fail silently for prefetch
                });
            }
        };

        const execute = () => { prefetchNext(1); prefetchNext(2); };
        if ('requestIdleCallback' in window) {
            requestIdleCallback(execute);
        } else {
            setTimeout(execute, 1000);
        }
    },

    goHome() {
        window.location.hash = '/';
    },

    async switchTab(tabId) {
        const subject = subjects.find(s => s.id === this.currentSubject);
        const subjectLessons = lessons[this.currentSubject] || [];
        
        // Cố gắng tìm lesson từ manifest, nếu không thấy thì dùng window.currentLessonData làm fallback
        const matchPeriod = (p1, p2) => {
            const clean1 = String(p1).toLowerCase().replace('vn-', '').trim();
            const clean2 = String(p2).toLowerCase().replace('vn-', '').trim();
            if (clean1 === clean2) return true;
            const parts1 = clean1.split('-');
            const parts2 = clean2.split('-');
            if (parts1.some(x => parts2.includes(x))) return true;
            return false;
        };

        const exactMatch = (p1, p2) => {
            const clean1 = String(p1).toLowerCase().replace('vn-', '').trim();
            const clean2 = String(p2).toLowerCase().replace('vn-', '').trim();
            return clean1 === clean2;
        };

        let lesson = subjectLessons.find(l => 
            exactMatch(l.period, this.currentLessonPeriod) || 
            exactMatch(l.id, this.currentLessonPeriod)
        );

        if (!lesson) {
            lesson = subjectLessons.find(l => 
                matchPeriod(l.period, this.currentLessonPeriod) || 
                matchPeriod(l.id, this.currentLessonPeriod)
            );
        }

        if (!lesson && window.currentLessonData) {
            if (exactMatch(window.currentLessonData.period, this.currentLessonPeriod) || 
                exactMatch(window.currentLessonData.id, this.currentLessonPeriod) ||
                matchPeriod(window.currentLessonData.period, this.currentLessonPeriod) || 
                matchPeriod(window.currentLessonData.id, this.currentLessonPeriod)) {
                lesson = window.currentLessonData;
            }
        }

        if (!lesson) {
            console.error('Không tìm thấy dữ liệu bài học để chuyển tab');
            return;
        }
        if (tabId !== 'quiz' && UI && UI.cleanupQuiz) UI.cleanupQuiz();

        // Cập nhật giao diện Button Active
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active', 'text-red-600');
            btn.classList.add('text-gray-400');
        });

        const activeBtn = document.getElementById(`tab-${tabId}`);
        if (activeBtn) {
            activeBtn.classList.add('active', 'text-red-600');
            activeBtn.classList.remove('text-gray-400');
        }

        // ====== SET ACTIVE METADATA ======
        if (lesson && lesson.metadata) {
            window.MATH_BUILDER_METADATA = lesson.metadata;
        }

        const container = document.getElementById('tab-content');
        if (!container) return;

        // Render nội dung tùy theo Tab
        let html = '';
        if (tabId === 'study') {
            const rawContent = typeof lesson.content === 'function' ? lesson.content(UI) : lesson.content;
            const studyContent = rawContent ||
                (lesson.tabs?.study?.blocks?.find(b => b.type === 'html')?.content) ||
                (lesson.tabs?.lesson?.blocks?.find(b => b.type === 'html')?.content) ||
                (lesson.blocks?.find(b => b.type === 'html')?.content) ||
                UI.renderEmptyContent();

            html = `
                <div class="glass-card rounded-[40px] p-8 md:p-12 bg-white dark:bg-slate-900 min-h-[200px] animate-fade-in text-gray-700 dark:text-slate-200">
                    <div id="lesson-study-container" class="lesson-body">${UI.parseTutor(studyContent)}</div>
                </div>
            `;
        } else if (tabId === 'practice') {
            const rawPractice = typeof lesson.practice === 'function' ? lesson.practice(UI) : lesson.practice;
            const practiceContent = rawPractice ||
                (lesson.tabs?.practice?.blocks?.find(b => b.type === 'html')?.content) ||
                UI.renderEmptyPractice();

            html = `
                <div class="glass-card rounded-[40px] p-8 md:p-12 bg-white dark:bg-slate-900 min-h-[200px] animate-fade-in text-gray-700 dark:text-slate-200">
                    <div id="lesson-practice-container" class="space-y-6">
                        ${UI.parseTutor(practiceContent)}
                    </div>
                </div>
            `;
        } else if (tabId === 'quiz') {
            // Compatibility: Convert TiengViet5 'quiz' format to EduRobot5 Math 'quizPool' format
            const tvQuiz = lesson.tabs?.quiz?.questions || lesson.quiz?.questions;
            if (!lesson.quizPool && tvQuiz && Array.isArray(tvQuiz)) {
                lesson.quizPool = tvQuiz.map(item => ({
                    question: item.q,
                    options: item.a,
                    answer: item.c,
                    level: item.level || 1
                }));
            }
            // Auto-hydrate quizPool from QuestionBankManager if lesson has no local pool
            if ((!lesson.quizPool || lesson.quizPool.length === 0) && this.currentSubject === 'math') {
                const qbPool = await QuestionBankManager.getQuizPool(lesson.period || lesson.id);
                if (qbPool.length > 0) {
                    lesson.quizPool = qbPool;
                    if (window.currentLessonData) window.currentLessonData.quizPool = qbPool;
                }
            }
            html = UI.renderQuizContainer(lesson);
        } else if (tabId === 'pptx') {
            const pptLink = lesson.pptLink || '';
            html = `
                <div id="pptx-container" class="glass-card rounded-[40px] p-2 md:p-4 bg-white dark:bg-slate-900 min-h-[600px] animate-fade-in relative flex flex-col">
                    <div class="flex justify-between items-center mb-4 px-4">
                        <h3 class="text-xl font-black text-gray-800 dark:text-gray-100 flex items-center gap-2">
                            <span class="text-orange-500">🎦</span> Bài giảng PowerPoint
                        </h3>
                        <div class="flex gap-2">
                            <button id="btn-expand-pptx" onclick="Lesson.toggleFullscreenPPTX()" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                                Toàn màn hình
                            </button>
                            <button id="btn-collapse-pptx" onclick="Lesson.toggleFullscreenPPTX()" class="hidden bg-orange-100 hover:bg-orange-200 text-orange-700 px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Thu nhỏ
                            </button>
                        </div>
                    </div>
                    <div class="flex-grow w-full rounded-2xl overflow-hidden shadow-inner border border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
                        ${pptLink ? `
                            <iframe src="${pptLink}" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" scrolling="no" class="w-full h-[600px] md:h-[800px]"></iframe>
                        ` : `
                            <div class="flex flex-col items-center justify-center h-full text-gray-400 py-32 space-y-4 text-center px-4">
                                <span class="text-6xl mb-4">📭</span>
                                <h4 class="text-xl font-black text-gray-600">Chưa có link bài giảng</h4>
                                <p class="text-sm font-bold max-w-md">Thầy/Cô hãy thêm link nhúng (embed link) từ <span class="text-blue-500">Google Slides</span> hoặc <span class="text-orange-500">Microsoft PowerPoint Online (Office 365)</span> vào biến <code class="bg-gray-200 px-2 py-1 rounded text-orange-600">pptLink</code> trong file dữ liệu bài học nhé.</p>
                            </div>
                        `}
                    </div>
                </div>
            `;
        }

        container.innerHTML = html;

        // Auto pagination injection for slides
        if (tabId === 'practice' || tabId === 'study') {
            const track = container.querySelector('#ltTrack');
            const pages = container.querySelectorAll('.ltTrang');
            if (track && pages.length > 0 && !container.querySelector('#ltNav')) {
                const totalPages = pages.length;
                let dotsHtml = '';
                for (let d = 0; d < totalPages; d++) {
                    const activeClass = d === 0 ? 'ltCham active' : 'ltCham';
                    const bg = d === 0 ? '#2563eb' : '#bfdbfe';
                    const scale = d === 0 ? 'scale(1.35)' : 'scale(1)';
                    dotsHtml += `\n                <div class="${activeClass}" data-index="${d}" onclick="window.ltChuyenNhanh(${d})" style="width:0.6rem;height:0.6rem;border-radius:50%;background:${bg};transform:${scale};transition:all 0.25s;cursor:pointer;"></div>`;
                }
                dotsHtml += '\n            ';

                const ltNavHtml = `<div id="ltNav" style="position:sticky; bottom:0; display:flex; align-items:center; justify-content:center; gap:1.5rem; padding:0.75rem 1rem; background:rgba(255,255,255,0.95); backdrop-filter:blur(12px); border-top:1px solid rgba(59,130,246,0.12); z-index:50; box-shadow:0 -4px 20px rgba(0,0,0,0.06);">
                    <button id="ltBtnTrai" data-no-normalize="true" aria-label="Trang trước" onclick="window.ltChuyenTrang(-1)" style="display:flex; align-items:center; justify-content:center; width:3.25rem; height:3.25rem; border-radius:50%; border:2px solid #bfdbfe; background:white; color:#2563eb; font-size:1.5rem; cursor:pointer; transition:all 0.2s; user-select:none; outline:none;">&#8592;</button>
                    <div style="display:flex;gap:0.5rem;align-items:center;">${dotsHtml}</div>
                    <span id="ltChiSoTrang" style="font-size:1rem; font-weight:700; color:#1e40af; min-width:5rem; text-align:center;">Trang 1 / ${totalPages}</span>
                    <button id="ltBtnPhai" data-no-normalize="true" aria-label="Trang sau" onclick="window.ltChuyenTrang(1)" style="display:flex; align-items:center; justify-content:center; width:3.25rem; height:3.25rem; border-radius:50%; border:2px solid #bfdbfe; background:white; color:#2563eb; font-size:1.5rem; cursor:pointer; transition:all 0.2s; user-select:none; outline:none;">&#8594;</button>
                </div>`;

                const wrapper = track.closest('div[class*="-mx-"]');
                if (wrapper) {
                    wrapper.insertAdjacentHTML('beforeend', ltNavHtml);
                } else {
                    track.parentNode.insertAdjacentHTML('afterend', ltNavHtml);
                }

                window._ltTrang = 0;
                const _ltTongTrang = totalPages;

                const ltCapNhat = () => {
                    const trackEl = document.getElementById('ltTrack');
                    const btnTrai = document.getElementById('ltBtnTrai');
                    const btnPhai = document.getElementById('ltBtnPhai');
                    const chiSo = document.getElementById('ltChiSoTrang');
                    const cacCham = document.querySelectorAll('.ltCham');
                    if (!trackEl) return;
                    const t = window._ltTrang;
                    trackEl.style.transform = 'translateX(-' + (t * 100) + '%)';
                    if (chiSo) chiSo.textContent = 'Trang ' + (t + 1) + ' / ' + _ltTongTrang;
                    cacCham.forEach((c, i) => {
                        c.style.background = (i === t) ? '#2563eb' : '#bfdbfe';
                        c.style.transform  = (i === t) ? 'scale(1.35)' : 'scale(1)';
                    });
                    if (btnTrai) {
                        btnTrai.disabled = (t === 0);
                        btnTrai.style.opacity = (t === 0) ? '0.3' : '1';
                    }
                    if (btnPhai) {
                        btnPhai.disabled = (t === _ltTongTrang - 1);
                        btnPhai.style.opacity = (t === _ltTongTrang - 1) ? '0.3' : '1';
                    }
                };

                window.ltChuyenTrang = (delta) => {
                    const trangMoi = window._ltTrang + delta;
                    if (trangMoi < 0 || trangMoi >= _ltTongTrang) return;
                    window._ltTrang = trangMoi;
                    ltCapNhat();
                };

                window.ltChuyenNhanh = (trangIndex) => {
                    window._ltTrang = trangIndex;
                    ltCapNhat();
                };

                const handleKeyDown = (e) => {
                    if (e.key === 'ArrowLeft') window.ltChuyenTrang(-1);
                    if (e.key === 'ArrowRight') window.ltChuyenTrang(1);
                };

                if (window._ltKeyDownHandler) {
                    document.removeEventListener('keydown', window._ltKeyDownHandler);
                }
                window._ltKeyDownHandler = handleKeyDown;
                document.addEventListener('keydown', handleKeyDown);

                setTimeout(ltCapNhat, 0);
            }
        }

        // Execute scripts embedded in the loaded HTML (since innerHTML doesn't execute them)
        const scripts = container.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });

        // ====== GLOBAL MATH MODAL SYSTEM (single source of truth) ======
        this.createMathModal();
        // ====== END GLOBAL MATH MODAL SYSTEM ======

        const normalizeButtons = (root) => {
            const buttons = root.querySelectorAll('button');
            buttons.forEach((btn) => {
                const text = (btn.textContent || '').trim().toLowerCase();
                const title = (btn.getAttribute('title') || '').trim().toLowerCase();
                const isSubmit = text.includes('nộp bài') || text.includes('hoàn thành') || text.includes('hoàn tất') || text.includes('gửi bài');
                const isTutor = text === 'e' || title.includes('thầy e') || text.includes('ai chấm') || text.includes('edurobot') || text.includes('góp ý');
                const isCheck = title.includes('kiểm tra') || text.includes('kiểm tra');
                const isRetry = text.includes('làm lại') || text.includes('reset') || text.includes('thử lại');

                if (isSubmit &&
                    !btn.classList.contains('btn-submit-global') &&
                    !btn.classList.contains('btn-submit-premium')) {
                    btn.classList.add('btn-submit-global');
                }
                if (isSubmit && !btn.querySelector('svg')) {
                    btn.textContent = 'NỘP BÀI';
                }

                if (isTutor) {
                    btn.classList.remove('btn-tutor-wide');
                    btn.classList.add('btn-tutor-e');
                    if (!btn.querySelector('svg')) btn.textContent = 'E';
                }

                if (isCheck) {
                    btn.classList.add('btn-check-e');
                    btn.classList.remove('btn-check-premium', 'btn-check-wide');
                    if (!btn.querySelector('svg')) {
                        btn.textContent = 'E';
                    }
                }

                if (isRetry && !btn.classList.contains('btn-retry')) {
                    btn.classList.add('btn-retry');
                }
                if (isRetry && !btn.querySelector('svg')) {
                    btn.textContent = 'LÀM LẠI';
                }
            });
            const feedbacks = root.querySelectorAll('[id^="fb-"], [id^="feedback-"], .ai-feedback, .edu-feedback');
            feedbacks.forEach((el) => {
                el.classList.add('edu-feedback');
                // Auto detect success/error based on current classes or content
                if (el.classList.contains('text-emerald-500') || el.classList.contains('text-emerald-700') || el.classList.contains('bg-emerald-50')) {
                    el.classList.add('edu-feedback-success');
                } else if (el.classList.contains('text-red-600') || el.classList.contains('bg-red-50')) {
                    el.classList.add('edu-feedback-error');
                }
            });
        };
        normalizeButtons(container);

        if (tabId === 'quiz') UI.initQuiz(lesson);

        // Cuộn lên đầu trang mượt mà khi đổi tab
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // ===== AUDIO PLAYER CONTROLS =====
    _audioInterval: null,

    _formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '0:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    },

    _updateAudioUI() {
        const audio = document.getElementById('lesson-audio');
        const progress = document.getElementById('audio-progress');
        const timeDisplay = document.getElementById('audio-time');
        if (!audio || !progress || !timeDisplay) return;

        const percent = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
        progress.style.width = percent + '%';
        timeDisplay.textContent = `${this._formatTime(audio.currentTime)} / ${this._formatTime(audio.duration)}`;
    },

    toggleAudio() {
        const audio = document.getElementById('lesson-audio');
        if (!audio) return;

        const btn = document.getElementById('btn-audio-play');
        const playIcon = document.getElementById('icon-audio-play');
        const pauseIcon = document.getElementById('icon-audio-pause');

        if (audio.paused) {
            audio.play();
            if (playIcon) playIcon.classList.add('hidden');
            if (pauseIcon) pauseIcon.classList.remove('hidden');
            if (btn) btn.classList.add('animate-pulse', 'ring-2', 'ring-white/50');

            // Khi audio kết thúc
            audio.onended = () => {
                this.stopAudio();
            };
        } else {
            audio.pause();
            if (playIcon) playIcon.classList.remove('hidden');
            if (pauseIcon) pauseIcon.classList.add('hidden');
            if (btn) btn.classList.remove('animate-pulse', 'ring-2', 'ring-white/50');
        }
    },

    stopAudio() {
        const audio = document.getElementById('lesson-audio');
        if (!audio) return;

        audio.pause();
        audio.currentTime = 0;

        const btn = document.getElementById('btn-audio-play');
        const playIcon = document.getElementById('icon-audio-play');
        const pauseIcon = document.getElementById('icon-audio-pause');

        if (playIcon) playIcon.classList.remove('hidden');
        if (pauseIcon) pauseIcon.classList.add('hidden');
        if (btn) btn.classList.remove('animate-pulse', 'ring-2', 'ring-white/50');
    },

    seekAudio(event) {
        const audio = document.getElementById('lesson-audio');
        if (!audio || !audio.duration) return;

        const bar = event.currentTarget;
        const rect = bar.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const percent = clickX / rect.width;
        this.currentTime = percent * audio.duration;
        this._updateAudioUI();
    },

    createMathModal() {
        // Remove any leftover modal overlays from previous tab/lesson renderings
        document.querySelectorAll('#math-modal-overlay').forEach(el => el.remove());

        // Create a fresh modal overlay attached to document.body (outside any transform context)
        const _overlay = document.createElement('div');
        _overlay.id = 'math-modal-overlay';
        _overlay.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(15,23,42,0.7); backdrop-filter:blur(8px); z-index:9999; display:none; align-items:center; justify-content:center; padding:1rem;';
        
        _overlay.innerHTML = `
            <div id="math-modal-content" style="background:#fff; width:100%; max-width:700px; border-radius:2.5rem; padding:1.25rem; box-shadow:0 25px 50px -12px rgba(0,0,0,0.5); position:relative; animation:mathModalZoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); display:flex; flex-direction:column; max-height:90vh; box-sizing:border-box;">
                <button id="math-modal-close-btn" style="position:absolute; top:1rem; right:1.5rem; font-size:1.75rem; font-weight:bold; color:#94a3b8; background:transparent; border:none; cursor:pointer; z-index:10; padding:0.25rem; line-height:1;">✕</button>
                <div id="modal-header-container" style="display:none !important;">
                    <div id="modal-icon"></div>
                    <div id="modal-title"></div>
                </div>
                <div id="modal-body" class="custom-scrollbar" style="color:#334155; font-size:1.25rem; line-height:1.8; flex:1; overflow-y:auto; max-height:100%; padding-right:0.5rem; margin-top:1rem;"></div>
            </div>
        `;
        document.body.appendChild(_overlay);

        // Add zoom animation if not already present
        if (!document.getElementById('math-modal-keyframes')) {
            const styleEl = document.createElement('style');
            styleEl.id = 'math-modal-keyframes';
            styleEl.textContent = '@keyframes mathModalZoomIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }';
            document.head.appendChild(styleEl);
        }

        // Close modal function
        window.closeMathModal = function() {
            const ov = document.getElementById('math-modal-overlay');
            if (ov) ov.style.display = 'none';
        };

        // Click background to close
        _overlay.addEventListener('click', function(e) {
            if (e.target === _overlay) window.closeMathModal();
        });

        // Click close button
        const _closeBtn = document.getElementById('math-modal-close-btn');
        if (_closeBtn) _closeBtn.addEventListener('click', window.closeMathModal);
    }
};

