/**
 * Authentication UI Orchestration for auth.html
 */

import { showError, clearErrors, showToast, togglePasswordVisibility, generateStudentEmail } from './utils.js';
import { loginTeacher, loginStudent, registerUser, sendPasswordReset } from './auth-logic.js';

// Bind globals for HTML event handlers
window.togglePasswordVisibility = togglePasswordVisibility;

/**
 * Tab Switching
 */
window.switchAuthTab = function(tab) {
    const loginTab = document.getElementById('tab-login');
    const registerTab = document.getElementById('tab-register');
    const loginForm = document.getElementById('form-login');
    const registerForm = document.getElementById('form-register');

    const activeClasses = ['text-white', 'bg-blue-600/80'];
    const inactiveClasses = ['text-slate-400', 'hover:text-white'];

    if (tab === 'login') {
        loginTab.classList.remove(...inactiveClasses);
        loginTab.classList.add(...activeClasses);
        registerTab.classList.remove(...activeClasses);
        registerTab.classList.add(...inactiveClasses);
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        registerTab.classList.remove(...inactiveClasses);
        registerTab.classList.add(...activeClasses);
        loginTab.classList.remove(...activeClasses);
        loginTab.classList.add(...inactiveClasses);
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    }
    clearErrors('login-general-error');
    clearErrors('register-general-error');
};

/**
 * Login Mode (Teacher vs Student)
 */
window.switchLoginMode = function(mode) {
    const teacherBtn = document.getElementById('login-mode-teacher');
    const studentBtn = document.getElementById('login-mode-student');
    const emailGroup = document.getElementById('login-teacher-fields');
    const userGroup = document.getElementById('login-student-fields');

    const activeClasses = ['text-white', 'bg-blue-600/80'];
    const inactiveClasses = ['text-slate-400', 'hover:text-white'];

    if (mode === 'teacher') {
        teacherBtn.classList.remove(...inactiveClasses);
        teacherBtn.classList.add(...activeClasses);
        studentBtn.classList.remove(...activeClasses);
        studentBtn.classList.add(...inactiveClasses);
        emailGroup.classList.remove('hidden');
        userGroup.classList.add('hidden');
        window.currentLoginMode = 'teacher';
    } else {
        studentBtn.classList.remove(...inactiveClasses);
        studentBtn.classList.add(...activeClasses);
        teacherBtn.classList.remove(...activeClasses);
        teacherBtn.classList.add(...inactiveClasses);
        userGroup.classList.remove('hidden');
        emailGroup.classList.add('hidden');
        window.currentLoginMode = 'student';
    }
};

/**
 * Role Selection (Registration)
 */
window.selectRole = function(role) {
    const teacherBtn = document.getElementById('role-teacher');
    const studentBtn = document.getElementById('role-student');
    const teacherFields = document.getElementById('register-email-field');
    const studentFields = document.getElementById('student-fields');

    if (role === 'teacher') {
        teacherBtn.classList.add('active');
        studentBtn.classList.remove('active');
        teacherFields.classList.remove('hidden');
        studentFields.classList.add('hidden');
    } else {
        studentBtn.classList.add('active');
        teacherBtn.classList.remove('active');
        studentFields.classList.remove('hidden');
        teacherFields.classList.add('hidden');
    }
    window.selectedRegisterRole = role;
};

/**
 * Form Submission Handlers
 */
window.handleLogin = async function(event) {
    if (event) event.preventDefault();
    const btn = document.getElementById('btn-login');
    const originalText = btn.textContent;
    
    btn.disabled = true;
    btn.textContent = 'Đang đăng nhập...';
    clearErrors('login-general-error');

    try {
        if (window.currentLoginMode === 'teacher') {
            const email = document.getElementById('login-email').value.trim();
            const pass = document.getElementById('login-password').value;
            const user = await loginTeacher(email, pass);
            
            // Fetch role again to be absolutely sure for redirection
            const role = localStorage.getItem('userRole');
            if (role === 'admin') {
                window.location.href = 'admin.html';
            } else {
                window.location.href = 'teacher.html'; // General teacher dashboard
            }
        } else {
            const user = document.getElementById('login-student-username').value.trim();
            const pass = document.getElementById('login-password').value;
            await loginStudent(user, pass);
            window.location.href = '../index.html'; // Go back to student landing
        }
    } catch (e) {
        showError('login-general-error', e.message);
    } finally {
        btn.disabled = false;
        btn.textContent = originalText;
    }
};

window.handleRegister = async function(event) {
    if (event) event.preventDefault();
    const btn = document.getElementById('btn-register');
    btn.disabled = true;
    btn.textContent = 'Đang tạo tài khoản...';
    clearErrors('register-general-error');

    const role = window.selectedRegisterRole || 'student';
    const name = document.getElementById('register-name').value;
    const pass = document.getElementById('register-password').value;
    const school = document.getElementById('register-school') ? document.getElementById('register-school').value : '';

    try {
        let email;
        let studentClass = "";
        if (role === 'teacher') {
            email = document.getElementById('register-email').value;
        } else {
            const userElem = document.getElementById('register-username');
            const user = userElem ? userElem.value : name.toLowerCase().replace(/s/g, ''); // default if missing
            email = generateStudentEmail(user);
            studentClass = document.getElementById('register-class') ? document.getElementById('register-class').value : '';
        }

        await registerUser({ email, password: pass, name, role, school, studentClass });
        showToast('Đăng ký thành công!');
        setTimeout(() => window.location.reload(), 1500);
    } catch (e) {
        showError('register-general-error', e.message);
    } finally {
        btn.disabled = false;
        btn.textContent = 'Đăng ký ngay';
    }
};

window.handleForgotPassword = async function() {
    const email = prompt("Vui lòng nhập Email của bạn để nhận hướng dẫn khôi phục mật khẩu:");
    if (!email) return;
    try {
        await sendPasswordReset(email);
        alert("Một email khôi phục mật khẩu đã được gửi đến: " + email);
    } catch (e) {
        alert(e.message);
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Determine initial state from UI or set defaults properly
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'register') {
        window.switchAuthTab('register');
    } else {
        window.switchAuthTab('login');
    }
    
    // Explicitly set the UI to match the currentMode
    window.switchLoginMode('student'); // Force UI to match 'student' since the HTML defaults to student having the blue background
    window.selectRole('student');
});
