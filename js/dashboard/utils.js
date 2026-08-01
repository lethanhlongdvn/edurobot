/**
 * Shared Utilities for Teacher Dashboards
 */

/**
 * Normalizes scores from various formats to a 0-100 percentage.
 * Handles 'XS', 'Đ', 'CĐ', and values <= 10.
 * @param {any} rawScore 
 * @returns {number} 0-100
 */
export function parseScore(rawScore) {
    if (rawScore === undefined || rawScore === null) return 0;
    if (typeof rawScore === 'string') {
        const s = rawScore.trim().toUpperCase();
        if (s === 'XS') return 100;
        if (s === 'Đ') return 80;
        if (s === 'CĐ') return 50;
    }
    let num = parseFloat(rawScore);
    if (isNaN(num)) return 0;

    let finalScore = num;
    if (num <= 10 && num > 0) {
        finalScore = Math.round(num * 10);
    } else {
        finalScore = Math.round(num);
    }
    // Cap at 100%
    return Math.min(100, finalScore);
}

/**
 * Formats seconds into MM:SS format.
 * @param {number} seconds 
 * @returns {string} MM:SS
 */
export function formatTimeTaken(seconds) {
    if (!seconds && seconds !== 0) return "--:--";
    let m = Math.floor(seconds / 60);
    let s = Math.floor(seconds % 60);
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
}

/**
 * Toggles visibility of a password input field.
 * @param {string} inputId 
 * @param {HTMLElement} btn 
 */
export function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === "password") {
        input.type = "text";
        btn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"></path></svg>`;
    } else {
        input.type = "password";
        btn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`;
    }
}

/**
 * Global Logout handler.
 */
export async function logout() {
    try {
        if (typeof firebase !== 'undefined') {
            await firebase.auth().signOut();
        }
        localStorage.removeItem('userRole');
        localStorage.removeItem('teacherName');
        window.location.reload();
    } catch (e) {
        console.error("Logout error:", e);
        window.location.reload();
    }
}

/**
 * Loads lesson module to identify expected exercise keys (scoreEx1, scoreEx2...).
 * @param {string} subject - 'math' or 'vietnamese'
 * @param {Array} manifest - The manifest array
 * @param {string} periodId - The period to check
 */
export async function getExpectedExKeys(subject, manifest, periodId) {
    if (!periodId) return [];
    const lessonMeta = manifest.find(m => String(m.period) === String(periodId));
    if (!lessonMeta || !lessonMeta.modulePath) return [];

    try {
        const fullPath = `../data/${subject}/` + lessonMeta.modulePath.replace('./', '');
        const module = await import(fullPath);
        const lessonObj = Object.values(module).find(v => v && typeof v === 'object' && v.practice);

        if (lessonObj && lessonObj.practice) {
            const practiceHtml = lessonObj.practice;
            const regex = /id=["'](?:ex|box)-[0-9A-Z]*-([0-9]+)["']/g;
            let match;
            const exNums = new Set();
            while ((match = regex.exec(practiceHtml)) !== null) {
                exNums.add(parseInt(match[1]));
            }
            if (exNums.size === 0 && practiceHtml.includes('[[MATH_EX')) {
                const exMatches = practiceHtml.match(/\[\[MATH_EX/g);
                if (exMatches) {
                    for (let i = 1; i <= exMatches.length; i++) exNums.add(i);
                }
            }
            if (exNums.size > 0) {
                return Array.from(exNums).sort((a, b) => a - b).map(n => `scoreEx${n}`);
            }
        }
    } catch (e) {
        console.warn("Không thể tải chi tiết bài học:", e);
    }
    return [];
}

/**
 * Show error message in a specific element.
 */
export function showError(elementId, message) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.innerText = getVietnameseError(message);
    el.classList.add('show');
    // Auto-hide after 10s
    setTimeout(() => el.classList.remove('show'), 10000);
}

/**
 * Clear error message.
 */
export function clearErrors(elementId) {
    const el = document.getElementById(elementId);
    if (el) el.classList.remove('show');
}

/**
 * Show a simple toast notification.
 */
export function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-8 py-4 rounded-2xl shadow-2xl z-[9999] font-bold text-sm tracking-widest opacity-0 translate-y-4 transition-all duration-300 pointer-events-none';
        document.body.appendChild(toast);
    }
    toast.innerText = message;
    toast.classList.remove('opacity-0', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-4');
        toast.classList.remove('opacity-100', 'translate-y-0');
    }, 3000);
}

/**
 * Translate Firebase error codes to Vietnamese.
 */
export function getVietnameseError(err) {
    let msg = "";
    if (typeof err === 'object') {
        msg = (err.code || "") + " " + (err.message || "");
    } else {
        msg = String(err);
    }
    msg = msg.toLowerCase();

    // Xử lý mã lỗi mới của Firebase (chống dò email) và mã cũ
    if (msg.includes('invalid_login_credentials') || msg.includes('user-not-found') || msg.includes('wrong-password') || msg.includes('không chính xác')) {
        return "Tài khoản hoặc mật khẩu không chính xác.";
    }

    if (msg.includes('email-already-in-use') || msg.includes('already in use')) return "Email này đã được đăng ký bởi một tài khoản khác.";
    if (msg.includes('invalid-email') || msg.includes('badly formatted')) return "Địa chỉ email không hợp lệ.";
    if (msg.includes('weak-password') || msg.includes('at least 6 characters')) return "Mật khẩu quá yếu (tối thiểu 6 ký tự).";
    if (msg.includes('network-request-failed') || msg.includes('network error')) return "Lỗi kết nối mạng. Hãy kiểm tra lại internet và thử lại.";
    if (msg.includes('requires-recent-login')) return "Hãy đăng xuất và đăng nhập lại để thực hiện thao tác này.";

    // Thử parse JSON nếu Firebase trả về chuỗi JSON thô
    try {
        const parsed = JSON.parse(typeof err === 'string' ? err : err.message);
        if (parsed.error && parsed.error.message && parsed.error.message.includes('INVALID_LOGIN_CREDENTIALS')) {
            return "Tài khoản hoặc mật khẩu không chính xác.";
        }
    } catch (e) {
        console.error('Unhandled error:', e);
    }

    return (typeof err === 'object' && err.message) ? err.message : String(err);
}

/**
 * Generates a student email from a username.
 */
export function generateStudentEmail(username) {
    if (!username) return "";
    let clean = username.trim().toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d").replace(/[^a-z0-9]/g, "");
    return `${clean}@edurobot.app`;
}
