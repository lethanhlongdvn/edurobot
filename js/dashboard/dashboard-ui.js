/**
 * Shared UI Components and Orchestration for Teacher Dashboards
 */

import { togglePasswordVisibility, logout, showError, clearErrors, showToast } from './utils.js';
import { initAuthObserver, checkLogin } from './auth-core.js';
import { updateCurrentUserPassword } from './auth-logic.js';
import { initFirebase } from './firebase-config.js';

export const DashboardUI = {
    /**
     * Renders the common teacher dashboard header.
     * @param {Object} config { title, subtitle, icon, extraButtonsHtml }
     */
    renderHeader(config) {
        const header = document.querySelector('#teacher-header');
        if (!header) return;

        header.innerHTML = `
            <div class="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-[2rem] shadow-sm mb-6 border border-gray-50 animate-fade-in">
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 ${config.iconBg || 'bg-orange-100'} rounded-2xl flex items-center justify-center ${config.iconColor || 'text-orange-600'}">
                        ${config.icon}
                    </div>
                    <div class="text-left">
                        <h1 class="text-xl font-black text-gray-800 tracking-tight">${config.title}</h1>
                        <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">${config.subtitle || 'Bảng điều khiển Giáo viên'}</p>
                    </div>
                </div>
                <div class="flex flex-wrap justify-center gap-3">
                    <a href="../index.html" class="bg-indigo-600 hover:bg-indigo-700 text-white font-black px-6 py-4 rounded-2xl shadow-xl shadow-indigo-200 flex items-center gap-3 transition-all transform hover:-translate-y-1 active:scale-95 text-xs uppercase tracking-widest">
                        Trang chủ
                    </a>
                    ${config.extraButtonsHtml || ''}
                    <button onclick="window.openChangePasswordModal()" class="p-4 bg-white text-gray-400 hover:text-orange-500 rounded-2xl shadow-sm transition-all border border-gray-100 hover:shadow-md active:scale-95" title="Đổi mật khẩu">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                    </button>
                    <button onclick="window.logout()" class="p-4 bg-white text-gray-400 hover:text-red-500 rounded-2xl shadow-sm transition-all border border-gray-100 hover:shadow-md active:scale-95" title="Đăng xuất">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                    </button>
                </div>
            </div>
        `;
    },

    /**
     * Renders the teacher login screen.
     * @param {Object} config { title, subtitle, icon, themeColor }
     */
    renderLogin(config) {
        const loginContainer = document.getElementById('login-screen');
        if (!loginContainer) return;

        const theme = config.themeColor || 'orange';
        const colorClass = `bg-${theme}-600 hover:bg-${theme}-700 shadow-${theme}-200`;
        const iconBg = `bg-${theme}-100`;
        const iconText = `text-${theme}-600`;
        const borderFocus = `focus:border-${theme}-500`;

        loginContainer.innerHTML = `
            <div class="bg-white rounded-[32px] p-10 max-w-md w-full shadow-2xl text-center animate-bounce-in">
                <div class="w-20 h-20 ${iconBg} rounded-3xl flex items-center justify-center ${iconText} mx-auto mb-6">
                    ${config.icon}
                </div>
                <h2 class="text-3xl font-black text-gray-800 mb-2">${config.title}</h2>
                <p class="text-gray-500 mb-8 font-bold text-sm uppercase tracking-widest">${config.subtitle}</p>
                <div class="space-y-4">
                    <div class="relative">
                        <input type="email" id="teacher-email" placeholder="Email (VD: teacher@gmail.com)..."
                            class="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 ${borderFocus} transition-all outline-none font-bold text-center text-lg shadow-inner">
                    </div>
                    <div class="relative">
                        <input type="password" id="teacher-password" placeholder="Nhập mật khẩu truy cập..."
                            class="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 ${borderFocus} transition-all outline-none font-bold text-center text-lg pr-14 shadow-inner">
                        <button type="button" onclick="window.togglePasswordVisibility('teacher-password', this)"
                            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:${iconText} transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </button>
                    </div>
                    <button id="btn-login-go" onclick="window.checkLogin()"
                        class="w-full ${colorClass} text-white font-black py-4 rounded-2xl shadow-xl transition-all transform active:scale-95 uppercase tracking-widest flex items-center justify-center gap-2">
                        Vào hệ thống
                    </button>
                </div>
                <a href="../index.html"
                    class="inline-block mt-8 text-sm font-bold text-gray-400 hover:${iconText} transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-current">
                    Quay lại trang chủ
                </a>
            </div>
        `;
    },

    /**
     * Renders and injects the Change Password modal.
     */
    renderPasswordChangeModal() {
        if (document.getElementById('modal-change-password')) return;
        
        const modalHtml = `
            <div id="modal-change-password" class="fixed inset-0 z-[9999] hidden items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4 animate-fade-in">
                <div id="modal-change-password-content" class="bg-white rounded-[2.5rem] w-full max-w-md p-10 shadow-2xl transform transition-all duration-300 scale-95 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 w-40 h-40 bg-orange-50 rounded-full opacity-50"></div>
                    
                    <button onclick="window.closeChangePasswordModal()" class="absolute right-6 top-6 text-gray-400 hover:text-gray-600 transition-colors p-2">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 mx-auto relative">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                    </div>

                    <h2 class="text-2xl font-black text-gray-800 text-center mb-2 uppercase tracking-tight">Đổi mật khẩu</h2>
                    <p class="text-xs font-bold text-gray-400 text-center uppercase tracking-widest mb-8">Bảo vệ an toàn tài khoản của bạn</p>
                    
                    <form id="form-change-password" onsubmit="window.handleChangePassword(event)" class="space-y-4">
                        <div class="relative">
                            <input type="password" id="cp-current-password" placeholder="Mật khẩu hiện tại..." required
                                class="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 transition-all outline-none font-bold text-center text-lg shadow-inner">
                        </div>
                        <div class="relative">
                            <input type="password" id="cp-new-password" placeholder="Mật khẩu mới..." required
                                class="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 transition-all outline-none font-bold text-center text-lg shadow-inner">
                        </div>
                        <div class="relative">
                            <input type="password" id="cp-confirm-password" placeholder="Xác nhận mật khẩu mới..." required
                                class="w-full px-6 py-4 rounded-2xl border-2 border-gray-100 focus:border-orange-500 transition-all outline-none font-bold text-center text-lg shadow-inner">
                        </div>
                        
                        <div id="cp-error" class="hidden p-4 bg-red-50 text-red-600 rounded-2xl text-xs font-bold text-center transition-all"></div>
                        
                        <button type="submit" id="btn-change-password"
                            class="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-xl transition-all transform active:scale-95 uppercase tracking-widest text-xs">
                            Cập nhật mật khẩu
                        </button>
                    </form>
                </div>
            </div>
        `;
        const div = document.createElement('div');
        div.innerHTML = modalHtml;
        document.body.appendChild(div.firstElementChild);
    },

    /**
     * Orchestrates dashboard initialization.
     * @param {Object} config { subjectId, theme, icon, title, populateFilters, initRealtime, extraButtonsHtml }
     */
    initDashboardApp(config) {
        // Initialize Firebase first
        initFirebase();

        const showDashboard = () => {
            const loginScreen = document.getElementById('login-screen');
            const dashboard = document.getElementById('dashboard');
            
            if (loginScreen) loginScreen.classList.add('hidden');
            if (dashboard) {
                dashboard.classList.remove('hidden');
                dashboard.classList.add('animate-fade-in');
            }

            // Render Header
            this.renderHeader({
                title: config.title,
                icon: config.icon,
                iconBg: `bg-${config.theme}-100`,
                iconColor: `text-${config.theme}-600`,
                extraButtonsHtml: config.extraButtonsHtml
            });

            // Inject Password Change Modal
            this.renderPasswordChangeModal();

            // Initialize Dashboard Data
            if (config.populateFilters) config.populateFilters();
            if (config.initRealtime) config.initRealtime();
        };

        // Bind UI utils to window for HTML handlers
        window.togglePasswordVisibility = togglePasswordVisibility;
        window.logout = logout;
        window.checkLogin = () => checkLogin('teacher-email', 'teacher-password', 'btn-login-go', showDashboard);
        
        // Add Change Password Logic
        window.openChangePasswordModal = () => {
            const modal = document.getElementById('modal-change-password');
            const content = document.getElementById('modal-change-password-content');
            if (modal && content) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                setTimeout(() => content.classList.replace('scale-95', 'scale-100'), 10);
            }
        };
        
        window.closeChangePasswordModal = () => {
            const modal = document.getElementById('modal-change-password');
            const content = document.getElementById('modal-change-password-content');
            if (modal && content) {
                content.classList.replace('scale-100', 'scale-95');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                    document.getElementById('form-change-password')?.reset();
                    clearErrors('cp-error');
                }, 300);
            }
        };

        window.handleChangePassword = async (event) => {
            if (event) event.preventDefault();
            const curr = document.getElementById('cp-current-password').value;
            const newP = document.getElementById('cp-new-password').value;
            const conf = document.getElementById('cp-confirm-password').value;
            const btn = document.getElementById('btn-change-password');
            
            if (newP !== conf) return showError('cp-error', 'Mật khẩu xác nhận không khớp.');
            if (btn) { btn.disabled = true; btn.textContent = 'Đang xử lý...'; }
            
            try {
                await updateCurrentUserPassword(curr, newP);
                showToast('Đổi mật khẩu thành công!');
                setTimeout(() => window.closeChangePasswordModal(), 1500);
            } catch (e) {
                showError('cp-error', e.message);
            } finally {
                if (btn) { btn.disabled = false; btn.textContent = 'Cập nhật mật khẩu'; }
            }
        };

        // Render Login first
        this.renderLogin({
            title: config.title,
            subtitle: config.subtitle || `Đăng nhập để xem báo cáo chi tiết`,
            icon: config.icon,
            themeColor: config.theme
        });

        // Start Auth Observer
        initAuthObserver(showDashboard);
    }
};
