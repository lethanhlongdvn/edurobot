// Honors.js - Giao diện Vinh danh (Giấy khen và Cờ thi đua)
import { StarService } from './StarService.js';

export const Honors = {
    async renderHonors() {
        const userEmail = localStorage.getItem('userEmail') || localStorage.getItem('eduMathName');
        if (!userEmail) return `<div class="p-12 text-center font-bold text-indigo-900/60">Vui lòng đăng nhập để xem Bảng Vàng!</div>`;

        // Hiển thị trạng thái đang tải
        const container = document.getElementById('app-content');
        if (container) {
            container.innerHTML = `
                <div class="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
                    <div class="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                    <p class="text-indigo-900/60 font-black uppercase tracking-widest text-xs animate-pulse">Đang mở Sổ Vàng...</p>
                </div>
            `;
        }

        // Tải dữ liệu từ Firebase
        let milestones = { certificates: [], flags: [] };
        let totalStars = 0;

        if (window.loadStudentHonors) {
            const remoteMilestones = await window.loadStudentHonors(userEmail);
            if (remoteMilestones) milestones = remoteMilestones;
        }

        if (window.StarService) {
            totalStars = window.StarService.getStudentStars(userEmail);
        }

        const certificates = milestones.certificates || [];
        const flags = milestones.flags || [];

        return `
            <div class="max-w-6xl mx-auto px-4 py-8 animate-fade-in">
                <!-- Header -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <h2 class="text-3xl md:text-6xl font-black text-indigo-950 dark:text-white tracking-tighter mb-2 flex items-center gap-4">
                            <span class="bg-yellow-400 text-white p-3 rounded-3xl shadow-lg shadow-yellow-200">🏆</span>
                            Bảng Vàng Vinh Danh
                        </h2>
                        <p class="text-[11px] font-black text-indigo-900/40 dark:text-indigo-200/40 uppercase tracking-[0.4em]">Thành tích học tập sáng chói của bạn</p>
                    </div>
                    <button onclick="window.location.hash = '#/'" class="px-8 py-4 rounded-3xl bg-white dark:bg-slate-800 shadow-2xl border border-indigo-50 dark:border-white/10 flex items-center gap-3 font-black text-sm hover:-translate-y-1 transition-all">
                        <span>🏠</span> Trang chủ
                    </button>
                </div>

                <!-- Stats Summary -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div class="glass-card-premium p-8 flex items-center gap-6 border-l-8 border-yellow-400">
                        <div class="text-5xl">⭐</div>
                        <div>
                            <p class="text-4xl font-black text-indigo-950 dark:text-white">${totalStars}</p>
                            <p class="text-[10px] font-black text-indigo-900/40 uppercase tracking-widest">Sao Chăm Ngoan</p>
                        </div>
                    </div>
                    <div class="glass-card-premium p-8 flex items-center gap-6 border-l-8 border-orange-500">
                        <div class="text-5xl">🚩</div>
                        <div>
                            <p class="text-4xl font-black text-indigo-950 dark:text-white">${flags.length}</p>
                            <p class="text-[10px] font-black text-indigo-900/40 uppercase tracking-widest">Cờ Thi Đua</p>
                        </div>
                    </div>
                    <div class="glass-card-premium p-8 flex items-center gap-6 border-l-8 border-blue-500">
                        <div class="text-5xl">📜</div>
                        <div>
                            <p class="text-4xl font-black text-indigo-950 dark:text-white">${certificates.length}</p>
                            <p class="text-[10px] font-black text-indigo-900/40 uppercase tracking-widest">Giấy Khen</p>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="space-y-20">
                    <!-- Flags Section -->
                    <section>
                        <div class="flex items-center gap-6 mb-10">
                            <h3 class="text-2xl font-black text-indigo-950 dark:text-white uppercase tracking-tight">Cờ Thi Đua Tuần</h3>
                            <div class="flex-1 h-[2px] bg-gradient-to-r from-orange-500/20 to-transparent"></div>
                        </div>
                        
                        ${flags.length === 0 ? `
                            <div class="glass-card-premium p-16 text-center border-2 border-dashed border-indigo-100 dark:border-white/5 opacity-60">
                                <p class="text-6xl mb-6">🏁</p>
                                <p class="text-xl font-bold text-indigo-900/40">Chưa có cờ thi đua. Hãy nằm trong Top 3 của tuần để nhận cờ nhé!</p>
                            </div>
                        ` : `
                            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                                ${flags.map(f => `
                                    <div class="relative group">
                                        <div class="aspect-[3/4.5] glass-card-premium !p-0 overflow-hidden flex flex-col items-center justify-between border-2 border-orange-100 dark:border-orange-900/30 group-hover:scale-105 transition-all duration-500 shadow-2xl group-hover:shadow-orange-400/20">
                                            <div class="w-full h-8 bg-gradient-to-r from-red-600 to-red-500 flex items-center justify-center">
                                                <span class="text-[8px] font-black text-white uppercase tracking-widest">${f.cycle || 'Kỳ này'}</span>
                                            </div>
                                            <div class="text-6xl my-4 drop-shadow-2xl transition-transform group-hover:rotate-12">${f.icon}</div>
                                            <div class="p-4 w-full text-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                                                <p class="text-[10px] font-black text-orange-600 mb-1">${f.name}</p>
                                                <p class="text-[8px] font-bold text-gray-400 capitalize">${new Date(f.date).toLocaleDateString('vi-VN', {month: 'short', day: 'numeric'})}</p>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        `}
                    </section>

                    <!-- Certificates Section -->
                    <section>
                        <div class="flex items-center gap-6 mb-10">
                            <h3 class="text-2xl font-black text-indigo-950 dark:text-white uppercase tracking-tight">Giấy Khen Vinh Danh</h3>
                            <div class="flex-1 h-[2px] bg-gradient-to-r from-blue-500/20 to-transparent"></div>
                        </div>

                        ${certificates.length === 0 ? `
                            <div class="glass-card-premium p-16 text-center border-2 border-dashed border-indigo-100 dark:border-white/5 opacity-60">
                                <p class="text-6xl mb-6">🏅</p>
                                <p class="text-xl font-bold text-indigo-900/40">Chưa có giấy khen. Hãy nỗ lực để lọt vào Top 30% của lớp nhé!</p>
                            </div>
                        ` : `
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                ${certificates.map(c => `
                                    <div class="bg-white dark:bg-slate-900 rounded-[2.5rem] p-1 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                                        <div class="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-400/10 to-transparent"></div>
                                        <div class="relative bg-white dark:bg-slate-900 rounded-[2.3rem] p-8 border-8 border-double border-yellow-200 dark:border-yellow-900/30 flex flex-col h-full">
                                            <!-- Certificate Header -->
                                            <div class="text-center mb-6">
                                                <div class="text-4xl mb-2">${c.icon}</div>
                                                <h4 class="text-2xl font-black text-indigo-950 dark:text-white uppercase tracking-tighter">${c.name}</h4>
                                                <div class="h-[1px] w-24 bg-yellow-400 mx-auto mt-2"></div>
                                            </div>

                                            <!-- Body -->
                                            <div class="flex-1 text-center py-4">
                                                <p class="text-sm font-bold text-indigo-900/60 dark:text-indigo-200/60 mb-2">Trân trọng trao tặng cho:</p>
                                                <p class="text-2xl font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-4">${localStorage.getItem('eduMathName').split('@')[0]}</p>
                                                <p class="text-sm text-gray-700 dark:text-slate-300 font-medium leading-relaxed px-4">
                                                    ${c.reason || 'Đạt thành tích xuất sắc trong học tập và rèn luyện.'}
                                                </p>
                                            </div>

                                            <!-- Footer / Signature -->
                                            <div class="flex justify-between items-end mt-8 pt-6 border-t border-gray-100 dark:border-white/5">
                                                <div class="text-left">
                                                    <p class="text-[8px] font-black text-gray-400 uppercase mb-1">Ngày cấp</p>
                                                    <p class="text-[10px] font-bold text-indigo-950 dark:text-white">${new Date(c.date).toLocaleDateString('vi-VN')}</p>
                                                    
                                                    <button onclick="Honors.downloadPDF('${c.id}')" class="mt-4 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-xl text-[10px] font-black transition-all flex items-center gap-2">
                                                        <span>📥</span> TẢI PDF
                                                    </button>
                                                </div>
                                                <div class="text-center">
                                                    <p class="text-[9px] font-black text-indigo-900/60 uppercase mb-4 italic">Giáo viên chủ nhiệm ký</p>
                                                    <p class="font-black text-indigo-600 dark:text-indigo-400 italic font-serif text-lg">${c.teacher || 'Thầy Lê Thành Long'}</p>
                                                </div>
                                            </div>
                                            
                                            <!-- Decorative Seal -->
                                            <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600/10 rounded-full border-4 border-red-600/20 border-double flex items-center justify-center opacity-40 rotate-12">
                                                <span class="text-[8px] font-black text-red-700 uppercase p-4 text-center">EDU ROBOT EXCELLENCE</span>
                                            </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        `}
                    </section>
                </div>
            </div>
        `;
    },

    async downloadPDF(honorId) {
        if (typeof html2pdf === 'undefined') {
            alert("Đang nạp thư viện PDF, vui lòng thử lại sau 2 giây...");
            return;
        }

        // Tìm dữ liệu honor từ Firebase hoặc local (giả lập tìm từ DOM cho nhanh)
        // Thực tế nên lấy từ data nguồn. Ở đây ta clone element và style lại để in
        const btn = event.currentTarget;
        const card = btn.closest('.group');
        if (!card) return;

        // Clone card và xóa các element không cần thiết khi in (như nút tải)
        const element = card.cloneNode(true);
        element.style.transform = 'none';
        element.style.boxShadow = 'none';
        element.querySelectorAll('button').forEach(b => b.remove());
        
        // Cải thiện style cho bản in
        element.style.width = '800px';
        element.style.margin = '0 auto';
        
        const opt = {
            margin: 0.5,
            filename: `Giay-Khen-${honorId}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
        };

        html2pdf().set(opt).from(element).save();
    }
};
