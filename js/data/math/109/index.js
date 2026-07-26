// ===================================================================
// Tiết 109 - Bài 46: Xăng-ti-mét khối. Đề-xi-mét khối (tiết 1)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson109Data } from './data.js';
import { lesson109Presentation } from './presentation.js';
import './logic.js';

export const lesson109 = {
    "topic": "Đơn vị đo thể tích",
    "week": "22",
    "period": "109",
    "title": "BÀI 46: XĂNG-TI-MÉT KHỐI. ĐỀ-XI-MÉT KHỐI (TIẾT 1)",
    "desc": "Khái niệm đơn vị đo thể tích xăng-ti-mét khối (cm³), đề-xi-mét khối (dm³), mối quan hệ 1 dm³ = 1 000 cm³ và thực hành đọc, viết các số đo.",

    "content": lesson109Data.content,
    "practice": lesson109Data.practice,
    "quizPool": lesson109Data.quizPool,
    "presentation": lesson109Presentation
};

window.lesson109 = lesson109;
