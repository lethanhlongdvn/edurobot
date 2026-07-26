// ===================================================================
// Tiết 104 - Bài 42: Máy tính cầm tay (tiết 2)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson104Data } from './data.js';
import { lesson104Presentation } from './presentation.js';
import './logic.js';

export const lesson104 = {
    "topic": "Máy tính cầm tay",
    "week": "21",
    "period": "104",
    "title": "BÀI 42: MÁY TÍNH CẦM TAY (TIẾT 2)",
    "desc": "Sử dụng máy tính cầm tay để tính giá trị phần trăm của một số, tỉ số phần trăm của hai số và giải các bài toán thực tế.",

    "content": lesson104Data.content,
    "practice": lesson104Data.practice,
    "quizPool": lesson104Data.quizPool,
    "presentation": lesson104Presentation
};

window.lesson104 = lesson104;
