/**
 * Firebase Configuration — Single Source of Truth
 * ================================================
 * Tất cả files cần Firebase config đều phải reference từ đây.
 * Khi đổi project Firebase → chỉ cần sửa file này.
 *
 * Usage (standalone HTML pages):
 *   <script src="/js/core/firebase-config.js"></script>
 *   <script>
 *       firebase.initializeApp(window.__FIREBASE_CONFIG);
 *   </script>
 *
 * Usage (JS modules):
 *   const firebaseConfig = window.__FIREBASE_CONFIG;
 */
window.__FIREBASE_CONFIG = {
    apiKey: "AIzaSyC6zlWn8BKYU7P6A2-PYq6IIWOzaqJWFhc",
    authDomain: "gamhoctap.firebaseapp.com",
    projectId: "gamhoctap",
    storageBucket: "gamhoctap.firebasestorage.app",
    messagingSenderId: "833329613932",
    appId: "1:833329613932:web:0d8574827bcfe50b535c49"
};
