// ===================================================================
// Tiết 111 - Bài 47: Mét khối
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson111Data } from './data.js';
import { lesson111Presentation } from './presentation.js';
// import './logic.js';

const metadata = {
    "lessonInfo": {
        "period": "111",
        "week": "23",
        "topic": "Hình học và Đo lường",
        "title": "Bài 47. Mét khối (tiết 1)",
        "desc": "Tìm hiểu đơn vị đo thể tích mét khối (m³). Mối quan hệ giữa m³, dm³ và cm³."
    },
    "exercises": [
        {
            "id": "111_1",
            "type": "text_input",
            "statement": "Em hãy đọc các số đo thể tích sau:",
            "subQuestions": [
                { "label": "1,25 m³", "id": "111-1-1", "answer": ["một phẩy hai mươi lăm mét khối", "một phẩy hai lăm mét khối"] },
                { "label": "300 m³", "id": "111-1-2", "answer": ["ba trăm mét khối"] },
                { "label": "1 875 m³", "id": "111-1-3", "answer": ["một nghìn tám trăm bảy mươi lăm mét khối", "một ngàn tám trăm bảy mươi lăm mét khối", "một nghìn tám trăm bảy lăm mét khối", "một ngàn tám trăm bảy lăm mét khối"] }
            ]
        },
        {
            "id": "111_2",
            "type": "unit_conversion",
            "statement": "Chọn số đo thích hợp vào chỗ chấm:",
            "subQuestions": [
                { "label": "3 m³ =", "id": "111-2-1", "unit": "dm³", "answer": "3000" },
                { "label": "1,7 m³ =", "id": "111-2-2", "unit": "dm³", "answer": "1700" },
                { "label": "2400 dm³ =", "id": "111-2-3", "unit": "m³", "answer": "2.4" },
                { "label": "25 m³ =", "id": "111-2-4", "unit": "cm³", "answer": "25000000" },
                { "label": "1/4 m³ =", "id": "111-2-5", "unit": "dm³", "answer": "250" },
                { "label": "800 000 cm³ =", "id": "111-2-6", "unit": "m³", "answer": "0.8" }
            ]
        },
        {
            "id": "111_3",
            "type": "word_problem",
            "statement": "Một chiếc xe tải có thùng xe dạng hình hộp chữ nhật với thể tích là 33,2 m³. Thùng xe đang chở hàng chiếm 80% thể tích. Tính thể tích phần còn trống trong thùng xe?",
            "answer": "6.64"
        }
    ],
    "quizPool": lesson111Data.quizPool
};

export const lesson111 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "111",
    "title": "BÀI 47: MÉT KHỐI",
    "desc": "Tìm hiểu đơn vị đo thể tích mét khối (m³). Mối quan hệ giữa m³, dm³ và cm³.",

    "content": lesson111Data.content,
    "practice": lesson111Data.practice,
    "quizPool": lesson111Data.quizPool,
    "presentation": lesson111Presentation,
    "metadata": metadata
};

window.lesson111 = lesson111;

/* --- MATH_BUILDER_METADATA ---
${JSON.stringify(metadata)}
--- END_METADATA --- */
