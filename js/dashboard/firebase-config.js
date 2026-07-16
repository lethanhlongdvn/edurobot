/**
 * Firebase Configuration for Teacher Dashboard
 */

export const firebaseConfig = {
    apiKey: "AIzaSyC6zlWn8BKYU7P6A2-PYq6IIWOzaqJWFhc",
    authDomain: "gamhoctap.firebaseapp.com",
    projectId: "gamhoctap",
    storageBucket: "gamhoctap.firebasestorage.app",
    messagingSenderId: "833329613932",
    appId: "1:833329613932:web:0d8574827bcfe50b535c49"
};

/**
 * Initializes Firebase if not already initialized.
 */
export function initFirebase() {
    if (typeof firebase === 'undefined') {
        console.error("Firebase SDK not found!");
        return;
    }
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}
