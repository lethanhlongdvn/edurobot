// ===================================================================
// Tiết 101 - Bài 41: Tìm giá trị phần trăm của một số (tiết 1)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson101Data } from './data.js';
import { lesson101Presentation } from './presentation.js';
import './logic.js';

export const lesson101 = {
    "topic": "Tỉ số phần trăm",
    "week": "21",
    "period": "101",
    "title": "BÀI 41: TÌM GIÁ TRỊ PHẦN TRĂM CỦA MỘT SỐ (TIẾT 1)",
    "desc": "Khám phá quy tắc tìm giá trị phần trăm của một số và luyện tập giải các bài toán thực tế liên quan đến giảm giá và đo lường.",

    "content": lesson101Data.content,
    "practice": lesson101Data.practice,
    "quizPool": lesson101Data.quizPool,
    "presentation": lesson101Presentation
};

window.lesson101 = lesson101;
