/**
 * Auth-Core for Teacher Dashboards
 * Unified authentication and login logic.
 */

/**
 * Initializes authentication state observer.
 * @param {Function} showDashboard 
 */
export function initAuthObserver(showDashboard) {
    if (typeof firebase === 'undefined') return;

    // 1. Check for legacy approval (trusted devices)
    if (localStorage.getItem('userApproved') === 'true') {
        console.log("[AuthCore] Legacy approval found, skipping login screen.");
        // Give a tiny delay for other system components (like UI) to be ready
        setTimeout(() => showDashboard(), 100);
        return; 
    }

    firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
            try {
                const db = window.db || firebase.firestore();
                const userDoc = await db.collection('users').doc(user.uid).get();
                if (userDoc.exists) {
                    const userData = userDoc.data();
                    if ((userData.role === 'teacher' || userData.role === 'admin') && userData.approved) {
                        localStorage.setItem('userRole', userData.role);
                        localStorage.setItem('teacherName', userData.displayName || userData.name || 'Giáo viên');
                        localStorage.setItem('userApproved', 'true');
                        showDashboard();
                        return;
                    }
                }
            } catch (e) {
                console.error("Auto-login authorization error:", e);
            }
        }
        
        // Show login screen if not authenticated or not authorized, 
        // UNLESS we already showed the dashboard via legacy approval
        if (localStorage.getItem('userApproved') !== 'true') {
            const loginScreen = document.getElementById('login-screen');
            if (loginScreen) loginScreen.classList.remove('hidden');
        }
    });
}

/**
 * Validates and signs in teacher users.
 * @param {string} emailId 
 * @param {string} passwordId 
 * @param {string} buttonId 
 * @param {Function} showDashboard 
 */
export async function checkLogin(emailId, passwordId, buttonId, showDashboard) {
    const email = document.getElementById(emailId).value.trim();
    const pass = document.getElementById(passwordId).value;
    const btn = document.getElementById(buttonId);

    if (!email || !pass) {
        alert("Vui lòng nhập Email và Mật khẩu!");
        return;
    }

    btn.disabled = true;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>⏳ Đang đăng nhập...</span>';

    try {
        if (typeof firebase === 'undefined') {
            throw new Error("Không tìm thấy kết nối Firebase. Cần kết nối Internet.");
        }

        const auth = window.auth || firebase.auth();
        const db = window.db || firebase.firestore();

        // Safety timeout promise (15s)
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Quá thời gian kết nối (Timeout). Vui lòng kiểm tra lại mạng hoặc thử lại.")), 15000)
        );

        // Core login operation
        const loginOperation = (async () => {
            const userCredential = await auth.signInWithEmailAndPassword(email, pass);
            const user = userCredential.user;
            const userDoc = await db.collection('users').doc(user.uid).get();
            return { userCredential, userDoc };
        })();

        // Race between login and timeout
        const { userDoc, userCredential } = await Promise.race([loginOperation, timeoutPromise]);
        
        if (!userDoc.exists) {
            await auth.signOut();
            throw new Error("Tài khoản chưa được phân quyền trong hệ thống.");
        }
        
        const userData = userDoc.data();
        if (userData.role !== 'teacher' && userData.role !== 'admin') {
            await auth.signOut();
            throw new Error("Tài khoản không có quyền truy cập giáo viên.");
        }
        if (!userData.approved) {
            await auth.signOut();
            throw new Error("Tài khoản giáo viên chưa được duyệt kích hoạt.");
        }

        localStorage.setItem('userRole', userData.role);
        localStorage.setItem('teacherName', userData.displayName || userData.name || 'Giáo viên');
        localStorage.setItem('userApproved', 'true');
        showDashboard();
    } catch (error) {
        console.error("Login Error Detail:", error);
        alert(error.message || "Lỗi đăng nhập không xác định. Vui lòng thử lại.");
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
    }
}
