// ===================================================================
// Tiết 91 - Bài 36: Tỉ số. Tỉ số phần trăm (tiết 1)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson91Data } from './data.js';
import { lesson91Presentation } from './presentation.js';
// import './logic.js';

const metadata = {
    "lessonInfo": {
        "period": "91",
        "week": "19",
        "topic": "Tỉ số và các bài toán liên quan",
        "title": "BÀI 36: TỈ SỐ. TỈ SỐ PHẦN TRĂM (TIẾT 1)",
        "desc": "Giới thiệu khái niệm tỉ số và tỉ số phần trăm qua các ví dụ thực tế."
    },
    "exercises": [
        {
            "id": "91_1",
            "type": "fill_fraction",
            "statement": "Hoàn thành bảng tỉ số (theo mẫu)",
            "answers": ["13", "17", "17", "13", "m", "n"]
        },
        {
            "id": "91_2",
            "type": "fill_fraction",
            "statement": "Tìm tỉ số: nữ/nam, nam/nữ, nữ/tổng (23 nữ, 17 nam)",
            "answers": ["23", "17", "17", "23", "23", "40"]
        }
    ]
};

export const lesson91 = {
    "topic": "Tỉ số và các bài toán liên quan",
    "week": "19",
    "period": "91",
    "title": "BÀI 36: TỈ SỐ. TỈ SỐ PHẦN TRĂM (TIẾT 1)",
    "desc": "Giới thiệu khái niệm tỉ số và tỉ số phần trăm qua các ví dụ thực tế.",

    "content": lesson91Data.content,
    "practice": lesson91Data.practice,
    "quizPool": lesson91Data.quizPool,
    "presentation": lesson91Presentation
};

window.lesson91 = lesson91;
