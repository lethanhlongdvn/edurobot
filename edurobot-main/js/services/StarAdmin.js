// StarAdmin.js - Giao diện quản lý Sao cho Giáo viên

export const StarAdmin = {
    renderStarAdmin() {
        return `
            <div class="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
                <!-- Header -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h2 class="text-3xl md:text-5xl font-black text-indigo-950 dark:text-white tracking-tight mb-2 flex items-center gap-4">
                            <span class="bg-orange-500 text-white p-3 rounded-3xl shadow-lg shadow-orange-200">⚙️</span>
                            Quản lý Sao Chăm Ngoan
                        </h2>
                        <p class="text-[11px] font-black text-indigo-900/40 dark:text-indigo-200/40 uppercase tracking-[0.3em]">Bảng điều khiển dành cho Giáo viên</p>
                    </div>
                    <div class="flex items-center gap-3">
                        ${(localStorage.getItem('userRole') !== 'teacher') ? `
                            <button onclick="StarAdmin.openClassSettings()" class="px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-indigo-50 dark:border-white/10 font-bold text-sm text-indigo-600 hover:-translate-y-1 transition-all flex items-center gap-2">
                                <span>⚙️</span> <span class="hidden md:inline">Phân công lớp</span>
                            </button>
                        ` : ''}
                        <button onclick="window.location.hash = '#/'" class="px-6 py-3 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-indigo-50 dark:border-white/10 font-black text-sm hover:-translate-y-1 transition-all">
                            Quay lại 🏠
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Left: Control Panel -->
                    <div class="lg:col-span-1 space-y-6">
                        <div class="glass-card-premium p-8 sticky top-8">
                            <h3 class="text-xl font-black text-indigo-950 dark:text-white mb-6 flex items-center gap-2">
                                <span class="text-xl">✨</span> Hành động nhanh
                            </h3>
                            
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-[10px] font-black uppercase text-indigo-900/40 mb-2">Số lượng Sao</label>
                                    <input type="number" id="star-amount" value="5" class="w-full bg-gray-50 dark:bg-slate-900 border-none rounded-2xl px-6 py-4 text-xl font-black text-orange-600 focus:ring-2 focus:ring-orange-500 transition-all shadow-inner">
                                    <p class="text-[10px] text-gray-400 mt-2 italic">* Số âm để trừ sao (vd: -2)</p>
                                </div>

                                <div>
                                    <label class="block text-[10px] font-black uppercase text-indigo-900/40 mb-2">Lý do khen thưởng/kỷ luật</label>
                                    <textarea id="star-reason" placeholder="Ví dụ: Hăng hái phát biểu, Giúp đỡ bạn bè..." class="w-full bg-gray-50 dark:bg-slate-900 border-none rounded-2xl px-6 py-4 text-sm font-bold text-gray-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 transition-all shadow-inner h-24"></textarea>
                                </div>

                                <div class="pt-4 grid grid-cols-1 gap-3">
                                    <button onclick="StarAdmin.awardAll()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-indigo-200/50 transition-all flex items-center justify-center gap-2 group">
                                        🚀 TẶNG CẢ LỚP
                                    </button>
                                    <button onclick="StarAdmin.awardSelected()" class="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-black text-sm shadow-xl shadow-emerald-200/50 transition-all flex items-center justify-center gap-2">
                                        ✅ TẶNG CÁC BẠN ĐÃ CHỌN
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right: Student List -->
                    <div class="lg:col-span-2">
                        <div class="glass-card-premium p-0 overflow-hidden shadow-2xl">
                            <div class="p-6 border-b border-indigo-50 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl">
                                <h3 class="text-lg font-black text-indigo-950 dark:text-white uppercase tracking-tight flex items-center gap-2">
                                    Danh sách lớp
                                    <select id="class-spinner" class="ml-2 bg-white dark:bg-slate-900 border border-indigo-100 rounded-lg px-3 py-1 text-base font-bold text-indigo-600 outline-none focus:ring-2 focus:ring-indigo-500" onchange="StarAdmin.loadClass(this.value)">
                                        <option value="">Đang tải...</option>
                                    </select>
                                </h3>
                                <div class="flex flex-wrap items-center gap-2">
                                    <button onclick="StarAdmin.selectAll()" class="text-[10px] font-black text-blue-600 uppercase border border-blue-100 px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-all">Chọn tất cả</button>
                                    <button onclick="StarAdmin.clearSelection()" class="text-[10px] font-black text-gray-400 uppercase border border-gray-100 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-all">Bỏ chọn</button>
                                </div>
                            </div>

                            <div class="overflow-x-auto">
                                <table class="w-full text-left">
                                    <thead>
                                        <tr class="bg-gray-50/50 dark:bg-white/5">
                                            <th class="px-6 py-4 text-[9px] font-black text-indigo-900/40 uppercase tracking-widest text-center w-16">Chọn</th>
                                            <th class="px-6 py-4 text-[9px] font-black text-indigo-900/40 uppercase tracking-widest">Họ và tên</th>
                                            <th class="px-6 py-4 text-[9px] font-black text-indigo-900/40 uppercase tracking-widest text-center">Sao hiện tại</th>
                                            <th class="px-6 py-4 text-[9px] font-black text-indigo-900/40 uppercase tracking-widest text-center">Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody id="star-student-list" class="divide-y divide-gray-50 dark:divide-white/5">
                                        <tr><td colspan="4" class="text-center py-8 text-gray-400">Đang tải danh sách...</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal Phân công lớp -->
                <div id="modal-class-settings" class="fixed inset-0 z-50 flex items-center justify-center hidden bg-black/50 backdrop-blur-sm transition-opacity">
                    <div class="bg-white dark:bg-slate-900 w-[90%] max-w-md rounded-3xl p-6 shadow-2xl transform transition-transform scale-95 origin-center">
                        <h3 class="text-xl font-black text-indigo-950 dark:text-white mb-2">Phân công giảng dạy</h3>
                        <p class="text-[11px] text-gray-500 mb-6">Chọn giáo viên và các lớp phụ trách. Hệ thống sẽ tự động lọc dữ liệu tương ứng.</p>
                        
                        <div class="mb-4">
                            <label class="block text-[10px] font-black uppercase text-indigo-900/40 mb-2">Chọn Giáo viên</label>
                            <select id="teacher-assign-select" onchange="StarAdmin.onTeacherChange(this.value)" class="w-full bg-gray-50 dark:bg-slate-800 border-2 border-indigo-50 dark:border-white/5 rounded-2xl px-4 py-3 text-sm font-bold text-indigo-600 outline-none focus:ring-2 focus:ring-indigo-500 transition-all">
                                <option value="">Đang tải giáo viên...</option>
                            </select>
                        </div>

                        <div id="class-settings-list" class="space-y-2 max-h-64 overflow-y-auto mb-6 pr-2">
                            <div class="p-4 text-center text-gray-400 text-xs">Đang tải danh sách lớp...</div>
                        </div>
                        
                        <div class="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-slate-800">
                            <button onclick="StarAdmin.closeClassSettings()" class="px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-100 font-bold text-sm transition-all">Hủy</button>
                            <button id="save-assignment-btn" onclick="StarAdmin.saveClassSettings()" class="px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm shadow-lg shadow-indigo-200 transition-all">Lưu cài đặt</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    initStarAdmin() {
        window.StarAdmin = {
            allStudents: [],
            allTeachers: [],
            currentClass: '',
            selectedTeacherForAssign: '',
            
            initData: async () => {
                try {
                    // Load sinh viên
                    const pathPrefix = window.location.pathname.includes('/games/') ? '../' : '';
                    const res = await fetch(`${pathPrefix}students_data.json`);
                    const data = await res.json();
                    window.StarAdmin.allStudents = data;
                    
                    const classes = [...new Set(data.map(s => s.studentClass)), 'Chọn'].sort();
                    
                    // Lấy danh sách Lớp chọn từ Firestore
                    window.StarAdmin.selectedIdsForChon = [];
                    if (window.db) {
                        try {
                            const chonDoc = await window.db.collection('lop5chon').doc('active').get();
                            if (chonDoc.exists) {
                                window.StarAdmin.selectedIdsForChon = chonDoc.data().studentIds || [];
                            }
                        } catch (err) {
                            console.warn("Không thể tải danh sách Lớp chọn:", err);
                        }
                    }
                    
                    // Lấy thông tin role và email giáo viên
                    const role = localStorage.getItem('userRole');
                    const teacherEmail = localStorage.getItem('userEmail') || (window.auth?.currentUser?.email);
                    
                    let assigned = [];
                    // Ưu tiên lấy từ Firestore
                    if (window.db && teacherEmail) {
                        try {
                            const doc = await window.db.collection('class_assignments').doc(teacherEmail).get();
                            if (doc.exists) {
                                assigned = doc.data().assignedClasses || [];
                            } else {
                                assigned = JSON.parse(localStorage.getItem('admin_assigned_classes') || '[]');
                            }
                        } catch (err) {
                            console.warn("Dùng LocalStorage làm fallback:", err);
                            assigned = JSON.parse(localStorage.getItem('admin_assigned_classes') || '[]');
                        }
                    } else {
                        assigned = JSON.parse(localStorage.getItem('admin_assigned_classes') || '[]');
                    }

                    let displayClasses = classes;
                    if (role === 'teacher') {
                        displayClasses = assigned.length > 0 ? classes.filter(c => assigned.includes(c)) : [];
                    } else if (assigned.length > 0) {
                        displayClasses = classes.filter(c => assigned.includes(c));
                    }
                    
                    const classSelect = document.getElementById('class-spinner');
                    if (classSelect) {
                        if (displayClasses.length === 0) {
                            classSelect.innerHTML = '<option value="">(Không có lớp)</option>';
                            window.StarAdmin.loadClass('');
                        } else {
                            classSelect.innerHTML = displayClasses.map(c => `<option value="${c}">${c === 'Chọn' ? 'Lớp Chọn ⭐' : 'Lớp ' + c}</option>`).join('');
                            window.StarAdmin.loadClass(displayClasses[0]);
                        }
                    }
                } catch (e) {
                    console.error("Lỗi khi tải dữ liệu:", e);
                    const tbody = document.getElementById('star-student-list');
                    if (tbody) tbody.innerHTML = `<tr><td colspan="4" class="text-center py-8 text-red-500">Lỗi khi tải dữ liệu.</td></tr>`;
                }
            },
            
            openClassSettings: async () => {
                const modal = document.getElementById('modal-class-settings');
                const list = document.getElementById('class-settings-list');
                const teacherSelect = document.getElementById('teacher-assign-select');
                
                if (modal) {
                    modal.classList.remove('hidden');
                    setTimeout(() => modal.querySelector('div').classList.replace('scale-95', 'scale-100'), 50);
                }

                // Tải danh sách giáo viên
                if (window.db && window.StarAdmin.allTeachers.length === 0) {
                    try {
                        const snap = await window.db.collection('users')
                            .where('role', 'in', ['teacher', 'teacher-admin'])
                            .get();
                        const teachers = [];
                        snap.forEach(doc => teachers.push({ email: doc.data().email, displayName: doc.data().displayName }));
                        window.StarAdmin.allTeachers = teachers;
                    } catch (e) { console.error(e); }
                }

                if (teacherSelect) {
                    let html = '<option value="">-- Chọn giáo viên --</option>';
                    window.StarAdmin.allTeachers.forEach(t => {
                        html += `<option value="${t.email}">${t.displayName || t.email}</option>`;
                    });
                    teacherSelect.innerHTML = html;
                }

                const data = window.StarAdmin.allStudents || [];
                const allClasses = [...new Set(data.map(s => s.studentClass)), 'Chọn'].sort();
                if (list) {
                    list.innerHTML = allClasses.map(c => `
                        <label class="flex items-center gap-3 p-3 rounded-xl border border-gray-100 dark:border-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
                            <input type="checkbox" value="${c}" class="class-setting-cb w-5 h-5 text-indigo-600 rounded bg-gray-100 border-gray-300 focus:ring-indigo-500">
                            <span class="font-bold text-sm text-gray-700 dark:text-gray-200">${c === 'Chọn' ? 'Lớp Chọn ⭐' : 'Lớp ' + c}</span>
                        </label>
                    `).join('');
                }
            },

            onTeacherChange: async (email) => {
                window.StarAdmin.selectedTeacherForAssign = email;
                const checkboxes = document.querySelectorAll('.class-setting-cb');
                checkboxes.forEach(cb => cb.checked = false);

                if (!email || !window.db) return;

                try {
                    const doc = await window.db.collection('class_assignments').doc(email).get();
                    if (doc.exists) {
                        const assigned = doc.data().assignedClasses || [];
                        checkboxes.forEach(cb => { if (assigned.includes(cb.value)) cb.checked = true; });
                    }
                } catch (e) { console.error(e); }
            },
            
            closeClassSettings: () => {
                const modal = document.getElementById('modal-class-settings');
                if (modal) {
                    modal.querySelector('div').classList.replace('scale-100', 'scale-95');
                    setTimeout(() => modal.classList.add('hidden'), 200);
                }
            },
            
            saveClassSettings: async () => {
                const teacherEmail = window.StarAdmin.selectedTeacherForAssign;
                if (!teacherEmail) return alert("Vui lòng chọn giáo viên!");

                const checkboxes = document.querySelectorAll('.class-setting-cb');
                const selected = Array.from(checkboxes).filter(cb => cb.checked).map(cb => cb.value);
                const btn = document.getElementById('save-assignment-btn');
                
                if (btn) btn.disabled = true;

                try {
                    if (window.db) {
                        await window.db.collection('class_assignments').doc(teacherEmail).set({
                            assignedClasses: selected,
                            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
                        });
                    }
                    
                    const myEmail = localStorage.getItem('userEmail') || window.auth?.currentUser?.email;
                    if (teacherEmail === myEmail) {
                        localStorage.setItem('admin_assigned_classes', JSON.stringify(selected));
                        window.StarAdmin.initData(); 
                    }
                    
                    alert(`Đã lưu phân công cho giáo viên thành công!`);
                    window.StarAdmin.closeClassSettings();
                } catch (e) { alert("Lỗi khi lưu."); } finally { if (btn) btn.disabled = false; }
            },

            loadClass: (className) => {
                window.StarAdmin.currentClass = className;
                let studentsInClass = [];
                if (className === 'Chọn') {
                    const selectedIds = window.StarAdmin.selectedIdsForChon || [];
                    studentsInClass = window.StarAdmin.allStudents.filter(s => selectedIds.includes(s.email));
                } else {
                    studentsInClass = window.StarAdmin.allStudents.filter(s => s.studentClass === className);
                }
                const tbody = document.getElementById('star-student-list');
                if (!tbody) return;
                
                tbody.innerHTML = studentsInClass.map((s, idx) => {
                    const studentId = s.email;
                    const stars = window.StarService ? window.StarService.getStudentStars(studentId) : 0;
                    return `
                        <tr class="hover:bg-blue-50/30 dark:hover:bg-blue-900/5 transition-colors group">
                            <td class="px-6 py-4 text-center">
                                <input type="checkbox" name="student-select" value="${studentId}" class="w-5 h-5 rounded-lg border-2 border-indigo-100 text-indigo-600 focus:ring-indigo-500 cursor-pointer transition-all">
                            </td>
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-100 to-white dark:from-slate-700 dark:to-slate-900 flex items-center justify-center text-xs font-black text-indigo-600 border border-indigo-50 dark:border-white/10">
                                        ${s.name.split(' ').pop().charAt(0)}
                                    </div>
                                    <span class="font-bold text-sm text-indigo-950 dark:text-slate-200">${s.name}</span>
                                </div>
                            </td>
                            <td class="px-6 py-4 text-center">
                                <span class="bg-orange-50 dark:bg-orange-950/20 text-orange-600 px-3 py-1 rounded-full text-xs font-black border border-orange-100 dark:border-orange-900/30">⭐ ${stars}</span>
                            </td>
                            <td class="px-6 py-4 text-center">
                                <div class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button onclick="StarAdmin.quickAward('${studentId}', 1)" class="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center hover:scale-110 transition-transform">＋</button>
                                    <button onclick="StarAdmin.quickAward('${studentId}', -1)" class="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center hover:scale-110 transition-transform">－</button>
                                </div>
                            </td>
                        </tr>
                    `;
                }).join('');
            },

            awardAll: async () => {
                const amount = parseInt(document.getElementById('star-amount').value);
                if (!amount) return alert('Vui lòng nhập số sao!');
                const studentsInClass = window.StarAdmin.allStudents.filter(s => s.studentClass === window.StarAdmin.currentClass);
                if (window.StarService) studentsInClass.forEach(s => window.StarService.addStudentStars(s.email, amount));
                alert(`Đã tặng sao cho cả lớp!`);
                window.StarAdmin.loadClass(window.StarAdmin.currentClass);
            },

            awardSelected: async () => {
                const selected = Array.from(document.querySelectorAll('input[name="student-select"]:checked')).map(el => el.value);
                if (selected.length === 0) return alert('Vui lòng chọn học sinh!');
                const amount = parseInt(document.getElementById('star-amount').value);
                if (!amount) return alert('Vui lòng nhập số sao!');
                if (window.StarService) selected.forEach(id => window.StarService.addStudentStars(id, amount));
                alert(`Đã tặng sao thành công!`);
                window.StarAdmin.loadClass(window.StarAdmin.currentClass);
            },

            quickAward: (id, amount) => {
                if (window.StarService) window.StarService.addStudentStars(id, amount);
                window.StarAdmin.loadClass(window.StarAdmin.currentClass);
            },

            selectAll: () => document.querySelectorAll('input[name="student-select"]').forEach(el => el.checked = true),
            clearSelection: () => document.querySelectorAll('input[name="student-select"]').forEach(el => el.checked = false)
        };
        window.StarAdmin.initData();
    }
};
