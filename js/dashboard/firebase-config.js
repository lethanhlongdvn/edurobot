/**
 * Firebase Configuration for Teacher Dashboard
 */

// Firebase config from js/core/firebase-config.js (Single Source of Truth)
export const firebaseConfig = window.__FIREBASE_CONFIG || {};

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
