/**
 * Authentication Business Logic (Firebase Service Layer)
 */

import { getVietnameseError, generateStudentEmail } from './utils.js';

/**
 * Login a teacher via Email/Password.
 */
export async function loginTeacher(email, password) {
    if (!email || !password) throw new Error("Vui lòng nhập đầy đủ email và mật khẩu.");
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Verify role and approval status
        const doc = await firebase.firestore().collection('users').doc(user.uid).get();
        if (!doc.exists) {
            await firebase.auth().signOut();
            throw new Error("Tài khoản không tồn tại trong hệ thống.");
        }

        const userData = doc.data();
        const role = userData.role;
        const isApproved = userData.approved === true;
        
        if (role !== 'teacher' && role !== 'admin') {
            await firebase.auth().signOut();
            throw new Error("Tài khoản không có quyền truy cập vùng giáo viên.");
        }
        
        if (!isApproved) {
            await firebase.auth().signOut();
            throw new Error("Tài khoản của bạn chưa được Admin duyệt kích hoạt. Vui lòng liên hệ Admin.");
        }
        
        localStorage.setItem('userRole', role);
        localStorage.setItem('teacherName', userData.displayName || userData.name || user.email);
        localStorage.setItem('userApproved', 'true'); 
        return user;
    } catch (e) {
        throw new Error(getVietnameseError(e));
    }
}

/**
 * Login a student via Username/Password.
 */
export async function loginStudent(username, password) {
    if (!username || !password) throw new Error("Vui lòng nhập tên đăng nhập và mật khẩu.");
    const email = generateStudentEmail(username);
    try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;

        // Fetch user metadata for name display
        const doc = await firebase.firestore().collection('users').doc(user.uid).get();
        if (doc.exists) {
            const data = doc.data();
            localStorage.setItem('eduMathName', data.name || data.displayName || username);
            localStorage.setItem('eduMathSchool', data.school || "");
            localStorage.setItem('eduMathClass', data.studentClass || "");
        }
        
        localStorage.setItem('userRole', 'student');
        localStorage.setItem('userApproved', 'true'); // Auto-approve on login for students if account exists
        
        return user;
    } catch (e) {
        throw new Error(getVietnameseError(e));
    }
}

/**
 * Register a new user (Teacher or Student).
 */
export async function registerUser(userData) {
    const { email, password, name, role, school, studentClass } = userData;
    try {
        const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        await firebase.firestore().collection('users').doc(user.uid).set({
            name, email, role, school, studentClass,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        // Store metadata in localStorage for immediate UI update
        localStorage.setItem('userRole', role);
        if (role === 'student') {
            localStorage.setItem('eduMathName', name);
            localStorage.setItem('eduMathSchool', school || "");
            localStorage.setItem('eduMathClass', studentClass || "");
            localStorage.setItem('userApproved', 'true'); // Auto-approve for practice
        } else {
            localStorage.setItem('teacherName', name);
            localStorage.setItem('userApproved', 'false'); // Teachers need manual approval
        }
        
        return user;
    } catch (e) {
        throw new Error(getVietnameseError(e));
    }
}

/**
 * Send Password Reset Email.
 */
export async function sendPasswordReset(email) {
    if (!email) throw new Error("Vui lòng nhập email.");
    try {
        await firebase.auth().sendPasswordResetEmail(email);
    } catch (e) {
        throw new Error(getVietnameseError(e));
    }
}

/**
 * Update current user's password.
 */
export async function updateCurrentUserPassword(currentPassword, newPassword) {
    const user = firebase.auth().currentUser;
    if (!user) throw new Error("Chưa đăng nhập.");
    
    try {
        // Re-authenticate user first (required for security-sensitive actions)
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        await user.reauthenticateWithCredential(credential);
        await user.updatePassword(newPassword);
    } catch (e) {
        throw new Error(getVietnameseError(e));
    }
}
