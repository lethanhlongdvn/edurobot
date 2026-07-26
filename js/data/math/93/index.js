// ===================================================================
// Tiết 93 - Bài 37: Tỉ lệ bản đồ và ứng dụng (tiết 1)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson93Data } from './data.js';
import { lesson93Presentation } from './presentation.js';
import './logic.js';

export const lesson93 = {
    "topic": "Tỉ lệ bản đồ và ứng dụng",
    "week": "19",
    "period": "93",
    "title": "BÀI 37: TỈ LỆ BẢN ĐỒ VÀ ỨNG DỤNG (TIẾT 1)",
    "desc": "Bài học giúp các em tìm hiểu khái niệm tỉ lệ bản đồ và giải các bài tập ứng dụng liên quan.",

    "content": lesson93Data.content,
    "practice": lesson93Data.practice,
    "quizPool": lesson93Data.quizPool,
    "presentation": lesson93Presentation
};

window.lesson93 = lesson93;
