/**
 * @file index.js
 * @description Điểm nhập chính cho Bài học Tiếng Việt chuẩn (Standard Template).
 * Gộp các thành phần data, presentation và logic.
 */

import { vnTemplateContent, vnTemplatePractice, vnTemplateQuizPool } from './data.js';
import { vnTemplatePresentation } from './presentation.js';
import './logic.js'; // Nạp logic để đăng ký các hàm window

export const vnLessonTemplate = {
    id: "standard_vn_template",
    subject: "Tiếng Việt",
    topic: "Hướng dẫn & Mẫu bài học",
    title: "⚡ Bài học Mẫu Tiếng Việt (Standard Template)",
    subtitle: "Dành cho Giáo viên: Hướng dẫn cấu trúc bài Tiếng Việt chuẩn",
    week: "1",
    period: "0",
    content: vnTemplateContent,
    practice: vnTemplatePractice,
    quizPool: vnTemplateQuizPool,
    presentation: vnTemplatePresentation
};

// Đăng ký toàn cục
window.vnLessonTemplate = vnLessonTemplate;

console.log("Vietnamese Standard Lesson Template Loaded Successfully!");
