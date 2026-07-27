// ===================================================================
// Tiết 113 - Luyện tập chung (Tiết 1)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson113Data } from './data.js';
import { lesson113Presentation } from './presentation.js';
// import './logic.js';

const metadata = {
    "lessonInfo": {
        "period": "113",
        "week": "23",
        "topic": "Hình học và Đo lường",
        "title": "Bài 48. Luyện tập chung (tiết 1)",
        "desc": "Ôn tập về đọc, viết, đổi đơn vị đo thể tích."
    },
    "exercises": [
        {
            "id": "113_1",
            "type": "table_read_write",
            "statement": "Hoàn thành bảng đọc, viết số đo thể tích:",
            "subQuestions": [
                { "type": "write", "label": "Một trăm phẩy không năm mét khối", "id": "113-1-1", "answer": "100,05" },
                { "type": "read", "label": "0,015 m³", "id": "113-1-2", "answer": "không phẩy không một năm mét khối" },
                { "type": "write", "label": "Tám trăm hai mươi mốt đề-xi-mét khối", "id": "113-1-3", "answer": "821" },
                { "type": "read", "label": "100,2 cm³", "id": "113-1-4", "answer": "một trăm phẩy hai xăng-ti-mét khối" }
            ]
        },
        {
            "id": "113_2",
            "type": "estimation",
            "statement": "Thể tích của một khối băng khoảng:",
            "options": ["1 cm³", "1 dm³", "1 m³"],
            "answer": "1 m³"
        },
        {
            "id": "113_3",
            "type": "geometry_counting",
            "statement": "Hình bên gồm các hình lập phương cạnh 1 cm. Tính thể tích hình đó:",
            "answer": "44"
        },
        {
            "id": "113_4",
            "type": "unit_conversion",
            "statement": "Điền số thích hợp vào chỗ chấm:",
            "subQuestions": [
                { "label": "5 m³ =", "id": "113-4-1", "unit": "dm³", "answer": "5000" },
                { "label": "480 dm³ =", "id": "113-4-2", "unit": "m³", "answer": "0.48" },
                { "label": "0,25 m³ =", "id": "113-4-3", "unit": "cm³", "answer": "250000" },
                { "label": "5000 cm³ =", "id": "113-4-4", "unit": "m³", "answer": "0.005" }
            ]
        }
    ],
    "quizPool": lesson113Data.quizPool
};

export const lesson113 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "113",
    "title": "LUYỆN TẬP CHUNG (Tiết 1)",
    "desc": "Ôn tập về đọc, viết, đổi đơn vị đo thể tích.",

    "content": lesson113Data.content,
    "practice": lesson113Data.practice,
    "quizPool": lesson113Data.quizPool,
    "presentation": lesson113Presentation,
    "metadata": metadata
};

window.lesson113 = lesson113;

/* --- MATH_BUILDER_METADATA ---
${JSON.stringify(metadata)}
--- END_METADATA --- */
