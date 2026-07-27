/**
 * @file index.js
 * @description Điểm nhập chính cho Bài học chuẩn (Standard Template).
 * Gộp các thành phần data, presentation và logic.
 */

import { lessonTemplateContent, lessonTemplatePractice, lessonTemplateQuizPool } from './data.js';
import { lessonTemplatePresentation } from './presentation.js';
// import './logic.js'; // Nạp logic để đăng ký các hàm window

export const lessonTemplate = {
    id: "standard_math_template",
    subject: "Toán học",
    topic: "Hướng dẫn & Mẫu bài học",
    title: "⚡ Bài học Mẫu (Standard Template)",
    subtitle: "Dành cho Giáo viên: Hướng dẫn cấu trúc bài học chuẩn",
    week: "1",
    period: "0",
    content: lessonTemplateContent,
    practice: lessonTemplatePractice,
    quizPool: lessonTemplateQuizPool,
    presentation: lessonTemplatePresentation
};

// Đăng ký toàn cục
window.lessonTemplate = lessonTemplate;

console.log("Standard Lesson Template Loaded Successfully!");
