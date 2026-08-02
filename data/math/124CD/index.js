// === 124CD/index.js ===
// Gom các phần của bài 124CD thành một object duy nhất

import './cube3d.js';
// import './logic.js';
import { lesson124CDContent, lesson124CDPractice, lesson124CDQuizPool } from './data.js';
import { lesson124CDPresentation } from './presentation.js';

export const lesson124CD = {
    id: "math_5_124CD",
    subject: "Toán học",
    title: "Bài 53. Thể tích hình lập phương",
    subtitle: "Dựa trên thể tích hình hộp chữ nhật để tính thể tích hình lập phương (Trang 54-55)",
    week: "25",
    period: "124CD",
    content: lesson124CDContent,
    practice: lesson124CDPractice,
    quizPool: lesson124CDQuizPool,
    presentation: lesson124CDPresentation
};

window.lesson124CD = lesson124CD;

console.log('--- 124CD/INDEX.JS LOADED ---');
