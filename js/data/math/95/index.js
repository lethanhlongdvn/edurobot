// ===================================================================
// Tiết 95 - Bài 38: Tìm hai số khi biết tổng và tỉ số (tiết 1)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson95Data } from './data.js';
import { lesson95Presentation } from './presentation.js';
import './logic.js';

export const lesson95 = {
    "topic": "Tổng và tỉ số",
    "week": "19",
    "period": "95",
    "title": "BÀI 38: TÌM HAI SỐ KHI BIẾT TỔNG VÀ TỈ SỐ CỦA HAI SỐ ĐÓ (TIẾT 1)",
    "desc": "Bài học giúp các em làm quen với dạng toán Tổng - Tỉ thông qua việc vẽ sơ đồ và thực hiện phép tính tìm hai số.",

    "content": lesson95Data.content,
    "practice": lesson95Data.practice,
    "quizPool": lesson95Data.quizPool,
    "presentation": lesson95Presentation
};

window.lesson95 = lesson95;
