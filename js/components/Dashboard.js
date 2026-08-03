import { common } from './common.js';

export const Dashboard = {
    renderHero(title, subtitle, tag) {
        return `
            <section class="max-w-4xl mx-auto text-center mb-6 animate-fade-in px-4">
                ${tag ? `<span class="inline-block bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-3 border border-blue-100/50 dark:border-blue-800/50 shadow-sm">${tag}</span>` : ''}
                <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2 tracking-tight leading-[1.1]">${title}</h2>
                <p class="text-base text-gray-400 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">${subtitle}</p>
            </section>
        `;
    },

    renderSubjectCard(sub) {
        const color = common.getColorClasses(sub.color);
        const isAdmin = window.router && window.router.isAdmin();
        const isLocked = (sub.locked || (window.router && window.router.contentLocks && window.router.contentLocks.subjects[sub.id])) && !isAdmin;

        return `
            <div class="subject-card group rounded-[24px] bg-white dark:bg-slate-900 p-4 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center cursor-pointer relative overflow-hidden ${isLocked ? 'opacity-60 grayscale' : ''}" 
                 onclick="${isLocked ? `alert('Môn học này hiện đang bị khóa!')` : `router.navigateSubject('${sub.id}')`}">
                <div class="absolute top-0 left-0 w-full h-1 ${color.bg} opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="w-12 h-12 ${color.light} dark:bg-slate-800 ${color.text} rounded-[16px] flex items-center justify-center text-2xl mb-3 shadow-inner group-hover:scale-110 transition-transform duration-500 relative">
                    ${sub.icon}
                    ${isLocked ? '<span class="absolute -bottom-1 -right-1 text-sm bg-white dark:bg-slate-800 rounded-full shadow-md p-0.5">🔒</span>' : ''}
                </div>
                <h3 class="text-xl font-black text-gray-800 dark:text-white mb-1 tracking-tighter">${sub.name}</h3>
                <p class="text-gray-400 dark:text-slate-500 font-black uppercase text-[9px] tracking-widest mb-4">${sub.shortName}</p>
                <button class="mt-auto w-full py-2.5 rounded-[12px] ${color.bg} text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-md ${color.shadow} transition-all active:scale-95">
                    ${isLocked ? 'Đã khóa' : 'Học ngay'}
                </button>
            </div>
        `;
    },

    renderLessonList(lessons, color) {
        if (lessons.length === 0) {
            return `
                <div class="col-span-full py-6 bg-white/40 rounded-2xl border-2 border-dashed border-gray-100 text-center animate-fade-in">
                    <div class="text-3xl mb-2 opacity-20">📚</div>
                    <p class="text-gray-400 font-black italic mb-0.5 text-sm">Vùng kiến thức này đang được chuẩn bị...</p>
                    <p class="text-gray-400 text-[7px] font-black uppercase tracking-[0.3em]">EduRobot 5.0</p>
                </div>
            `;
        }
        return lessons.map(lesson => this.renderLessonCard(lesson, color)).join('');
    },

    renderLessonCard(lesson, subjectColor) {
        const color = common.getColorClasses(subjectColor);
        const subId = window.router && window.router.currentSubject;
        const lessonId = `${subId}_${lesson.period}`;
        const isAdmin = window.router && window.router.isAdmin();
        const isLocked = (lesson.hidden || (window.router && window.router.contentLocks && window.router.contentLocks.lessons[lessonId])) && !isAdmin;

        return `
            <div class="clay-card p-3 flex flex-col h-full cursor-pointer group transition-all ${isLocked ? 'opacity-60 grayscale' : 'hover:scale-[1.02] active:scale-95'}" 
                 onclick="${isLocked ? `alert('Bài học này hiện đang bị khóa!')` : `router.renderLesson('${router.currentSubject}', '${lesson.id || lesson.period}')`}">
                <div class="flex justify-between items-start mb-1.5">
                    <div class="p-1.5 ${color.light} rounded-lg ${isLocked ? '' : 'group-hover:rotate-12'} transition-transform shadow-sm relative">
                        <span class="text-lg">📖</span>
                        ${isLocked ? '<span class="absolute -bottom-1 -right-1 text-[10px] bg-white dark:bg-slate-800 rounded-full shadow-md px-0.5">🔒</span>' : ''}
                    </div>
                    <span class="px-1.5 py-0.5 rounded-full ${color.bg} text-white text-[8px] font-black uppercase tracking-widest shadow-lg ${color.shadow}">
                        Tiết ${lesson.period}
                    </span>
                </div>
                <h3 class="text-sm font-black text-indigo-950 dark:text-white leading-tight mb-1 ${isLocked ? '' : 'group-hover:text-indigo-600'} transition-colors">
                    ${lesson.title}
                </h3>
                <p class="text-[9px] text-indigo-900/40 dark:text-indigo-200/40 font-bold mt-auto flex items-center gap-1 uppercase tracking-tighter">
                    <svg class="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    35 phút
                </p>
            </div>
        `;
    },

    renderDashboard(subjects, activeSubject, activePeriod, weeks, lessons, lastLesson) {
        const subject = subjects.find(s => s.id === activeSubject);
        const color = common.getColorClasses(subject.color);
        const isAdmin = (window.router && typeof window.router.isAdmin === 'function') 
            ? window.router.isAdmin() 
            : (localStorage.getItem('userRole') === 'admin' || localStorage.getItem('userRole') === 'teacher' || localStorage.getItem('userRole') === 'teacher-admin');

        return `
            <div class="animate-fade-in max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-3">
                    
                    <!-- Sidebar Bento Card -->
                    <aside class="lg:col-span-3 space-y-3">
                        <div class="glass-card-premium p-3 shadow-xl shadow-indigo-500/5">
                            <h3 class="text-[8px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-3">Môn học</h3>
                            <nav class="space-y-1">
                                ${subjects.filter(s => !s.externalUrl).map(s => {
                                    const isActive = activeSubject === s.id;
                                    const isAdmin = window.router && window.router.isAdmin();
                                    const isLocked = (s.locked || (window.router && window.router.contentLocks && window.router.contentLocks.subjects[s.id])) && !isAdmin;
                    
                                    return `
                                        <button onclick="${isLocked ? `alert('Môn học này hiện đang bị khóa!')` : `router.navigateSubject('${s.id}')`}" 
                                           class="w-full text-left px-3 py-2 rounded-lg flex items-center justify-between font-black text-[10px] tracking-wide transition-all ${isActive 
                                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none' 
                                                : 'text-indigo-900/60 dark:text-indigo-200/60 hover:bg-white/50 dark:hover:bg-white/5'} ${isLocked ? 'opacity-50 grayscale cursor-not-allowed' : ''}">
                                            <span class="flex items-center gap-2">
                                                <span class="text-base ${isLocked ? 'grayscale' : ''}">${s.icon}</span>
                                                ${s.name}
                                            </span>
                                            ${isActive ? '●' : (isLocked ? '🔒' : '')}
                                        </button>
                                    `;
                                }).join('')}
                            </nav>
                        </div>
                        
                        <!-- Star Stats Bento Card -->
                        <div class="glass-card-premium p-3 bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-xl shadow-orange-200/20 group cursor-pointer" onclick="window.location.hash = (window.router && window.router.isAdmin()) ? '#/star-admin' : '#/honors'">
                            <h3 class="text-[8px] font-black text-white/50 uppercase tracking-[0.2em] mb-1.5 flex justify-between items-center">
                                Sao chăm ngoan
                                ${isAdmin ? `<span onclick="event.stopPropagation(); window.location.hash='#/star-admin'" class="hover:scale-110 transition-transform cursor-pointer">⚙️</span>` : ''}
                            </h3>
                            ${(() => {
                                const stats = window.StarService ? window.StarService.getStats() : { total: 0, week: 0 };
                                return `
                                    <div class="flex items-center gap-2 mb-1">
                                        <span class="text-2xl animate-bounce-slow">⭐</span>
                                        <div>
                                            <p class="text-xl font-black leading-none">${stats.total}</p>
                                            <p class="text-[7px] font-bold text-white/70 uppercase">Tổng số Sao chăm ngoan</p>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center text-[8px] font-bold border-t border-white/20 pt-1.5" onclick="event.stopPropagation()">
                                        <span>Tuần này: +${stats.week}</span>
                                        <span onclick="document.getElementById('dashboard-leaderboard-card').classList.toggle('hidden')" class="bg-white/20 px-1.5 py-0.5 rounded cursor-pointer hover:bg-white/40 active:scale-95 transition-transform select-none">
                                            Vinh danh 🏆
                                        </span>
                                    </div>
                                `;
                            })()}
                        </div>
 
                        <!-- Leaderboard Bento Card (Top 30%) - Mặc định ẩn, bấm Vinh danh mới hiện -->
                        <div id="dashboard-leaderboard-card" class="glass-card-premium p-3 shadow-xl shadow-indigo-500/5 hidden transition-all" onclick="event.stopPropagation()">
                            <h3 class="flex justify-between items-center mb-3 cursor-pointer select-none" onclick="document.getElementById('dashboard-leaderboard-card').classList.add('hidden')">
                                <span class="text-[8px] font-black text-indigo-400 uppercase tracking-[0.2em]">Bảng Vàng Tuần</span>
                                <div class="flex items-center gap-1.5">
                                    <select id="dashboard-class-filter" onclick="event.stopPropagation()" class="bg-indigo-50/50 dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 text-[8px] font-bold text-indigo-600 px-1 py-0.5 rounded outline-none w-[60px]" onchange="window.DashboardUtils && window.DashboardUtils.loadLeaderboard(this.value)">
                                        <option value="">Lớp...</option>
                                    </select>
                                    <span class="text-gray-400 text-xs hover:text-indigo-600 transition-colors">✕</span>
                                </div>
                            </h3>
                            <div id="dashboard-leaderboard-list" class="space-y-2 min-h-[120px] relative">
                                <div class="absolute inset-0 flex items-center justify-center text-[10px] italic text-indigo-300">Đang tải...</div>
                            </div>
                        </div>
                    </aside>

                    <!-- Main Dashboard Bento -->
                    <div class="lg:col-span-9 space-y-3">
                        <!-- Filters Header -->
                        <div class="glass-card-premium p-2 flex flex-wrap gap-1 justify-center items-center shadow-indigo-500/5">
                            ${Object.keys(router.periodRanges).map(period => `
                                <button onclick="router.selectDashboardPeriod('${period}')" 
                                    class="shrink-0 h-8 px-3 rounded-md text-[8px] font-black uppercase tracking-wider transition-all ${activePeriod === period
                                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-200'
                                        : 'text-indigo-900/40 dark:text-indigo-200/40 hover:text-indigo-600 hover:bg-white/50 dark:hover:bg-white/5'
                                    }">
                                    ${period}
                                </button>
                            `).join('')}
                        </div>

                        <!-- Week Timeline Bento -->
                        <div class="glass-card-premium p-3 shadow-indigo-500/5">
                            <div class="flex items-center justify-between mb-2 overflow-x-auto no-scrollbar gap-2 px-1">
                                ${weeks.map(w => {
                                    const isActive = router.currentWeek === w;
                                    return `
                                        <button onclick="router.selectDashboardWeek(${w})" 
                                           class="flex items-center gap-1.5 shrink-0 px-3 py-1.5 rounded-xl transition-all ${isActive 
                                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105' 
                                                : 'bg-white/50 dark:bg-white/5 text-indigo-900/40 dark:text-indigo-200/40 border border-indigo-50 dark:border-white/5 opacity-50 hover:opacity-100'}">
                                            <span class="text-[8px] font-black uppercase ${isActive ? 'text-indigo-200' : 'text-indigo-400'}">Tuần</span>
                                            <span class="text-sm font-black">${w}</span>
                                        </button>
                                    `;
                                }).join('')}
                            </div>
                            
                            <div class="flex items-center gap-2 border-t border-indigo-50 dark:border-white/5 pt-2">
                                <div class="w-6 h-6 rounded-md bg-orange-100 flex items-center justify-center text-xs">📅</div>
                                <div>
                                    <h4 class="text-[8px] font-black text-indigo-900/40 dark:text-indigo-200/40 uppercase tracking-widest leading-none">Đang học</h4>
                                    <p class="text-sm font-black text-indigo-950 dark:text-white capitalize">${subject.name} - Tuần ${router.currentWeek}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Lesson List Bento Grid -->
                        <div id="dashboard-lesson-list" class="bento-grid !p-0">
                            ${this.renderLessonList(lessons, subject.color)}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Tab Bar (Mobile Only) -->
            <nav class="fixed bottom-0 left-0 right-0 md:hidden glass-card-premium !rounded-t-xl !rounded-b-none border-t border-white/20 px-2 py-1.5 flex justify-around items-center z-50 shadow-[0_-8px_32px_rgba(79,70,229,0.15)]">
                ${subjects.filter(s => !s.externalUrl).map(s => {
                    const isActive = activeSubject === s.id;
                    const isAdmin = window.router && window.router.isAdmin();
                    const isLocked = (s.locked || (window.router && window.router.contentLocks && window.router.contentLocks.subjects[s.id])) && !isAdmin;
                    return `
                        <button onclick="${isLocked ? `alert('Môn học này hiện đang bị khóa!')` : `router.navigateSubject('${s.id}')`}" 
                           class="flex flex-col items-center gap-0.5 min-w-[48px] relative ${isLocked ? 'opacity-50 grayscale cursor-not-allowed' : ''}">
                            <div class="h-7 w-7 flex items-center justify-center rounded-lg transition-all ${isActive ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105' : 'text-indigo-900/40 dark:text-indigo-200/40'}">
                                <span class="text-base">${s.icon}</span>
                                ${isLocked ? '<span class="absolute -top-1 -right-1 text-[8px]">🔒</span>' : ''}
                            </div>
                            <p class="text-[7px] font-black uppercase tracking-widest ${isActive ? 'text-indigo-600' : 'text-indigo-900/40'}">
                                ${s.shortName.split(' ')[0]}
                            </p>
                        </button>
                    `;
                }).join('')}
            </nav>
        `;
    },

    initDashboard() {
        if (!window.DashboardUtils) {
            window.DashboardUtils = {
                allStudents: [],
                currentClass: '',
                initData: async () => {
                    try {
                        if (window.DashboardUtils.allStudents.length === 0) {
                            if (window.StarAdmin && window.StarAdmin.allStudents && window.StarAdmin.allStudents.length > 0) {
                                window.DashboardUtils.allStudents = window.StarAdmin.allStudents;
                            } else {
                                const pathPrefix = window.location.pathname.includes('/games/') ? '../' : '';
                                const res = await fetch(`${pathPrefix}students_data.json`);
                                window.DashboardUtils.allStudents = await res.json();
                            }
                        }
                        
                        const data = window.DashboardUtils.allStudents;
                        let classes = [...new Set(data.map(s => s.studentClass))].sort();
                        
                        // Lọc lớp theo cài đặt phân công của admin
                        const role = localStorage.getItem('userRole');
                        const assigned = JSON.parse(localStorage.getItem('admin_assigned_classes') || '[]');
                        
                        if (role === 'teacher') {
                            if (assigned.length > 0) {
                                classes = classes.filter(c => assigned.includes(c));
                            } else {
                                classes = []; // Giáo viên chưa được phân công -> Không thấy lớp nào
                            }
                        } else if (assigned.length > 0) {
                            classes = classes.filter(c => assigned.includes(c));
                        }
                        
                        const select = document.getElementById('dashboard-class-filter');
                        if (select) {
                            if (classes.length === 0) {
                                select.innerHTML = '<option value="">(Chưa phân công lớp)</option>';
                                window.DashboardUtils.loadLeaderboard('');
                            } else {
                                select.innerHTML = classes.map(c => `<option value="${c}">Lớp ${c}</option>`).join('');
                                
                                // Ưu tiên chọn lớp của Giáo viên hoặc lớp của Học sinh đang đăng nhập
                                const studentClass = localStorage.getItem('eduMathClass');
                                const savedClass = localStorage.getItem('edurobot_board_class');
                                
                                if (studentClass && classes.includes(studentClass)) {
                                    window.DashboardUtils.currentClass = studentClass;
                                } else if (savedClass && classes.includes(savedClass)) {
                                    window.DashboardUtils.currentClass = savedClass;
                                } else {
                                    window.DashboardUtils.currentClass = classes[0];
                                }
                                
                                select.value = window.DashboardUtils.currentClass;
                                window.DashboardUtils.loadLeaderboard(window.DashboardUtils.currentClass);
                            }
                        }
                    } catch(e) { 
                        console.error("Lỗi khi tải danh sách Bảng Vàng:", e); 
                    }
                },
                loadLeaderboard: (className) => {
                    window.DashboardUtils.currentClass = className;
                    localStorage.setItem('edurobot_board_class', className);
                    
                    const container = document.getElementById('dashboard-leaderboard-list');
                    if (!container) return;
                    
                    const students = window.DashboardUtils.allStudents.filter(s => s.studentClass === className);
                    
                    // Lấy điểm
                    const studentsWithStars = students.map(s => ({
                        ...s,
                        stars: window.StarService ? window.StarService.getStudentStars(s.email) : 0
                    }));
                    
                    // Sắp xếp giảm dần
                    studentsWithStars.sort((a,b) => b.stars - a.stars);
                    const topCount = Math.ceil(studentsWithStars.length * 0.3) || 5; // Hiển thị top 30% hoặc ít nhất 5
                    const winners = studentsWithStars.slice(0, Math.max(topCount, 5));
                    
                    if (winners.length === 0) {
                        container.innerHTML = `<div class="text-center text-[9px] text-gray-400 py-4 absolute inset-0 flex items-center justify-center">Chưa có dữ liệu</div>`;
                        return;
                    }

                    container.innerHTML = winners.map((s, idx) => {
                        const rank = idx + 1;
                        let medal = '';
                        if (rank === 1) medal = '🥇';
                        else if (rank === 2) medal = '🥈';
                        else if (rank === 3) medal = '🥉';
                        else medal = `<span class="text-gray-400">${rank}</span>`;
                        
                        return `
                            <div class="flex items-center justify-between gap-2">
                                <div class="flex items-center gap-1.5 overflow-hidden">
                                    <span class="text-xs shrink-0 w-4 text-center">${medal}</span>
                                    <span class="text-[9px] font-bold truncate text-indigo-900/60 dark:text-indigo-200/60">
                                        ${s.name}
                                    </span>
                                </div>
                                <span class="text-[9px] font-black text-orange-500 shrink-0">${s.stars}⭐</span>
                            </div>
                        `;
                    }).join('');
                }
            };
        }
        
        // Gọi initData
        setTimeout(() => {
            if (window.DashboardUtils) window.DashboardUtils.initData();
        }, 50);
    }
};
