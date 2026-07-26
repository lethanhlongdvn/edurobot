// ===================================================================
// Tiết 108 - Bài 45: Thể tích của một hình
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson108Data } from './data.js';
import { lesson108Presentation } from './presentation.js';
import './logic.js';

export const lesson108 = {
    "topic": "Thể tích của một hình",
    "week": "22",
    "period": "108",
    "title": "BÀI 45: THỂ TÍCH CỦA MỘT HÌNH",
    "desc": "Khái niệm ban đầu về thể tích của một hình, so sánh thể tích hai hình và tính chất thể tích của các hình ghép.",

    "content": lesson108Data.content,
    "practice": lesson108Data.practice,
    "quizPool": lesson108Data.quizPool,
    "presentation": lesson108Presentation
};

window.lesson108 = lesson108;
