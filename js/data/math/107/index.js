// ===================================================================
// Tiết 107 - Bài 44: Luyện tập chung (tiết 2)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson107Data } from './data.js';
import { lesson107Presentation } from './presentation.js';
// import './logic.js';

export const lesson107 = {
    "topic": "Luyện tập chung",
    "week": "22",
    "period": "107",
    "title": "BÀI 44: LUYỆN TẬP CHUNG (TIẾT 2)",
    "desc": "Ôn tập và luyện tập tính tỉ số phần trăm của hai số, tìm giá trị phần trăm của một số, giải bài toán ứng dụng phần trăm và bài toán Tìm hai số khi biết hiệu và tỉ số.",

    "content": lesson107Data.content,
    "practice": lesson107Data.practice,
    "quizPool": lesson107Data.quizPool,
    "presentation": lesson107Presentation
};

window.lesson107 = lesson107;
