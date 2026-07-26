// ===================================================================
// Tiết 98 - Bài 39: Tìm hai số khi biết hiệu và tỉ số (tiết 2 - Luyện tập)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson98Data } from './data.js';
import { lesson98Presentation } from './presentation.js';
import './logic.js';

export const lesson98 = {
    "topic": "Hiệu và tỉ số",
    "week": "20",
    "period": "98",
    "title": "BÀI 39: TÌM HAI SỐ KHI BIẾT HIỆU VÀ TỈ SỐ CỦA HAI SỐ ĐÓ (TIẾT 2)",
    "desc": "Bài học giúp các em luyện tập và củng cố cách giải các bài toán thực tế dạng Hiệu - Tỉ.",

    "content": lesson98Data.content,
    "practice": lesson98Data.practice,
    "quizPool": lesson98Data.quizPool,
    "presentation": lesson98Presentation
};

window.lesson98 = lesson98;
