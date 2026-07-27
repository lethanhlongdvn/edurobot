// ===================================================================
// Tiết 105 - Bài 43: Thực hành và trải nghiệm sử dụng máy tính cầm tay
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson105Data } from './data.js';
import { lesson105Presentation } from './presentation.js';
// import './logic.js';

export const lesson105 = {
    "topic": "Máy tính cầm tay",
    "week": "21",
    "period": "105",
    "title": "BÀI 43: THỰC HÀNH VÀ TRẢI NGHIỆM SỬ DỤNG MÁY TÍNH CẦM TAY",
    "desc": "Thực hành tính toán thực tế thông qua hoạt động bán vòng trang sức từ thiện trong hội chợ trường bằng máy tính cầm tay.",

    "content": lesson105Data.content,
    "practice": lesson105Data.practice,
    "quizPool": lesson105Data.quizPool,
    "presentation": lesson105Presentation
};

window.lesson105 = lesson105;
