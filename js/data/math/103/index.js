// ===================================================================
// Tiết 103 - Bài 42: Máy tính cầm tay (tiết 1)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson103Data } from './data.js';
import { lesson103Presentation } from './presentation.js';
// import './logic.js';

export const lesson103 = {
    "topic": "Máy tính cầm tay",
    "week": "21",
    "period": "103",
    "title": "BÀI 42: MÁY TÍNH CẦM TAY (TIẾT 1)",
    "desc": "Làm quen với các phím chức năng cơ bản trên máy tính cầm tay và thực hành thực hiện các phép tính đơn giản.",

    "content": lesson103Data.content,
    "practice": lesson103Data.practice,
    "quizPool": lesson103Data.quizPool,
    "presentation": lesson103Presentation
};

window.lesson103 = lesson103;
