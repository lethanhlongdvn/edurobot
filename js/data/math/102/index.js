// ===================================================================
// Tiết 102 - Bài 41: Tìm giá trị phần trăm của một số (tiết 2 - Luyện tập)
// INDEX: Điều phối - Import + Export + Đăng ký global
// ===================================================================

import { lesson102Data } from './data.js';
import { lesson102Presentation } from './presentation.js';
import './logic.js';

export const lesson102 = {
    "topic": "Tỉ số phần trăm",
    "week": "21",
    "period": "102",
    "title": "Bài 41. Tìm giá trị phần trăm của một số (tiết 2)",
    "desc": "Luyện tập giải các bài toán thực tế về tính số gam đạm, đội đồng diễn, lãi suất tiết kiệm và kế hoạch sản xuất.",

    "content": lesson102Data.content,
    "practice": lesson102Data.practice,
    "quizPool": lesson102Data.quizPool,
    "presentation": lesson102Presentation
};

window.lesson102 = lesson102;
