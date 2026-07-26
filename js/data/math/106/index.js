// ===================================================================
// Tiết 106 - Bài 44: Luyện tập chung (tiết 1)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson106Data } from './data.js';
import { lesson106Presentation } from './presentation.js';
import './logic.js';

export const lesson106 = {
    "topic": "Luyện tập chung",
    "week": "22",
    "period": "106",
    "title": "BÀI 44: LUYỆN TẬP CHUNG (TIẾT 1)",
    "desc": "Ôn tập và luyện tập tổng hợp về tỉ số phần trăm, tỉ lệ bản đồ, bài toán tìm hai số khi biết tổng và tỉ số của hai số đó, và giảm giá phần trăm.",

    "content": lesson106Data.content,
    "practice": lesson106Data.practice,
    "quizPool": lesson106Data.quizPool,
    "presentation": lesson106Presentation
};

window.lesson106 = lesson106;
