// ===================================================================
// Tiết 94 - Bài 37: Tỉ lệ bản đồ và ứng dụng (tiết 2)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson94Data } from './data.js';
import { lesson94Presentation } from './presentation.js';
// import './logic.js';

export const lesson94 = {
    "topic": "Tỉ lệ bản đồ và ứng dụng",
    "week": "19",
    "period": "94",
    "title": "BÀI 37: TỈ LỆ BẢN ĐỒ VÀ ỨNG DỤNG (TIẾT 2)",
    "desc": "Bài học giúp các em ôn tập về tỉ lệ bản đồ, thực hành đo khoảng cách và tính toán tỉ lệ thu nhỏ.",

    "content": lesson94Data.content,
    "practice": lesson94Data.practice,
    "quizPool": lesson94Data.quizPool,
    "presentation": lesson94Presentation
};

window.lesson94 = lesson94;
