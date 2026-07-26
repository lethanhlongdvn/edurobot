// ===================================================================
// Tiết 110 - Bài 46: Xăng-ti-mét khối. Đề-xi-mét khối (tiết 2)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson110Data } from './data.js';
import { lesson110Presentation } from './presentation.js';
import './logic.js';

export const lesson110 = {
    "topic": "Hình học và Đo lường",
    "week": "22",
    "period": "110",
    "title": "BÀI 46: XĂNG-TI-MÉT KHỐI. ĐỀ-XI-MÉT KHỐI (TIẾT 2)",
    "desc": "Luyện tập phép tính với số đo thể tích, đổi đơn vị giữa xăng-ti-mét khối và đề-xi-mét khối, chọn số đo thể tích thích hợp cho đồ vật và giải bài toán ứng dụng đơn vị lít.",

    "content": lesson110Data.content,
    "practice": lesson110Data.practice,
    "quizPool": lesson110Data.quizPool,
    "presentation": lesson110Presentation
};

window.lesson110 = lesson110;
