// ===================================================================
// Tiết 112 - Luyện tập: Mét khối
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson112Data } from './data.js';
import { lesson112Presentation } from './presentation.js';
// import './logic.js';

const metadata = {
    "lessonInfo": {
        "period": "112",
        "week": "23",
        "topic": "Hình học và Đo lường",
        "title": "Bài 47. Mét khối (tiết 2)",
        "desc": "Thực hành viết, đổi đơn vị đo thể tích và giải bài toán thực thực tế tính tiền nước."
    },
    "exercises": [
        {
            "id": "112_1",
            "type": "estimation",
            "statement": "Chọn số đo phù hợp với mỗi đồ vật:",
            "subQuestions": [
                { "label": "Hộp phấn", "id": "112-1-1", "options": ["1 cm³", "1 dm³"], "answer": "1 dm³" },
                { "label": "Máy giặt", "id": "112-1-2", "options": ["1 dm³", "1 m³"], "answer": "1 m³" },
                { "label": "Container", "id": "112-1-3", "options": ["1 dm³", "1 m³"], "answer": "1 m³" }
            ]
        },
        {
            "id": "112_2",
            "type": "unit_conversion",
            "statement": "Chọn số đo thích hợp vào chỗ chấm:",
            "subQuestions": [
                { "label": "2,5 m³ =", "id": "112-2-1", "unit": "dm³", "answer": "2500" },
                { "label": "3900 cm³ =", "id": "112-2-2", "unit": "dm³", "answer": "3.9" },
                { "label": "4600 dm³ =", "id": "112-2-3", "unit": "m³", "answer": "4.6" },
                { "label": "7 500 000 cm³ =", "id": "112-2-4", "unit": "m³", "answer": "7.5" }
            ]
        },
        {
            "id": "112_3",
            "type": "expression_calculation",
            "statement": "Tính:",
            "subQuestions": [
                { "label": "3,5 m³ + 6,05 m³ =", "id": "112-3-1", "unit": "m³", "answer": "9.55" },
                { "label": "1 000 m³ − 510 m³ =", "id": "112-3-2", "unit": "m³", "answer": "490" },
                { "label": "8,5 m³ × 0,5 =", "id": "112-3-3", "unit": "m³", "answer": "4.25" },
                { "label": "1 875 m³ : 5 =", "id": "112-3-4", "unit": "m³", "answer": "375" }
            ]
        },
        {
            "id": "112_4",
            "type": "word_problem",
            "statement": "Gia đình Việt dùng hết 15m³ nước trong một tháng. Tính số tiền nước nhà Việt phải trả?",
            "details": "10 m³ đầu: 5 973 đồng/m³. Các m³ tiếp theo: 7 052 đồng/m³.",
            "answer": "94990"
        }
    ],
    "quizPool": lesson112Data.quizPool
};

export const lesson112 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "112",
    "title": "LUYỆN TẬP: MÉT KHỐI",
    "desc": "Thực hành viết, đổi đơn vị đo thể tích và giải bài toán thực thực tế tính tiền nước.",

    "content": lesson112Data.content,
    "practice": lesson112Data.practice,
    "quizPool": lesson112Data.quizPool,
    "presentation": lesson112Presentation,
    "metadata": metadata
};

window.lesson112 = lesson112;

/* --- MATH_BUILDER_METADATA ---
${JSON.stringify(metadata)}
--- END_METADATA --- */
