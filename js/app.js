// app.js - Điểm khởi đầu của ứng dụng
import { router } from './core/router.js';
import { common } from './components/common.js';
import { SoundManager } from './services/SoundManager.js';
import { StarService } from './services/StarService.js';
import { AI } from './core/ai.js';
import { UI } from './components/ui-components.js';
import { lesson61 } from './data/math/61/index.js';
import { lesson62 } from './data/math/62/index.js';

window.AI = AI;
window.SoundManager = SoundManager;
window.StarService = StarService;
window.UI = UI;

document.addEventListener('DOMContentLoaded', () => {
    console.log('EduRobot Lớp 5 2.2 - Khởi tạo hệ thống module (Cache Busted)');

    // Hydrate lesson cache with statically bundled files to prevent 404s in production builds
    if (!window.__lessonCache) window.__lessonCache = new Map();
    window.__lessonCache.set('math_61', lesson61);
    window.__lessonCache.set('math_62', lesson62);

    // Khởi tạo router sau một khoảng trễ nhỏ để tạo hiệu ứng mượt mà
    setTimeout(() => {
        try {
            // 1. Khởi tạo style chung
            common.injectTCStyles();
            
            // 2. Khởi tạo Star System
            StarService.init();
            
            // 3. Khởi tạo Router
            router.init();
        
            // 4. Đồng bộ dữ liệu từ Firebase
            setTimeout(() => {
                StarService.syncWithFirebase().then(changed => {
                    if (changed && window.location.hash === '#/') {
                        router.renderHome(true);
                    }
                    
                    // Nếu là giáo viên, cho phép hệ thống tự động kiểm tra và trao giải
                    if (window.router && window.router.isAdmin()) {
                        StarService.awardWeeklyHonors();
                    }
                });
            }, 2000); // Tăng thời gian đợi Firebase để đảm bảo ổn định

        } catch (e) {
            console.error('Lỗi khi khởi tạo EduRobot:', e);
            const container = document.getElementById('app-content');
            if (container) {
                container.innerHTML = `
                    <div class="max-w-xl mx-auto mt-20 p-8 bg-red-50 rounded-[32px] border-2 border-red-100 text-red-800 shadow-xl">
                        <h3 class="font-black text-xl mb-2">LỖI KHỞI ĐỘNG HỆ THỐNG</h3>
                        <p class="text-sm font-bold opacity-80 mb-4">${e.message}</p>
                        <button onclick="location.reload()" class="w-full py-3 bg-red-600 text-white rounded-xl font-black uppercase">Thử lại (F5)</button>
                    </div>
                `;
            }
        }
    }, 300);
    
    // Đảm bảo cập nhật badge học sinh khi khởi động
    if (window.showStudentBadge) window.showStudentBadge();
});

