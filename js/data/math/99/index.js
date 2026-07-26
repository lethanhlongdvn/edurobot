// ===================================================================
// Tiết 99 - Bài 40: Tìm tỉ số phần trăm của hai số (tiết 1)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson99Data } from './data.js';
import { lesson99Presentation } from './presentation.js';
import './logic.js';

export const lesson99 = {
    "topic": "Tỉ số phần trăm",
    "week": "20",
    "period": "99",
    "title": "BÀI 40: TÌM TỈ SỐ PHẦN TRĂM CỦA HAI SỐ (TIẾT 1)",
    "desc": "Bài học giúp học sinh biết cách tìm tỉ số phần trăm của hai số và giải quyết các bài toán thực tế đơn giản.",

    "content": lesson99Data.content,
    "practice": lesson99Data.practice,
    "quizPool": lesson99Data.quizPool,
    "presentation": lesson99Presentation
};

window.lesson99 = lesson99;
