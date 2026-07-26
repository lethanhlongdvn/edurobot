// js/ai.js - Module xử lý AI chuyên trách Toán lớp 5
export const AI = {
    // Endpoint từ dự án tiengviet5 (có thể dùng chung nếu CORS được bật)
    API_URL: 'https://tiengviet5.netlify.app/.netlify/functions/chat',

    // Trích xuất nội dung text thuần từ HTML, cắt gọn để không vượt token limit
    extractLessonText(htmlContent, maxLength = 2000) {
        if (!htmlContent) return '';
        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');

            // 1. Loại bỏ các thẻ script, style và audio
            doc.querySelectorAll('script, style, audio').forEach(el => el.remove());

            // 2. Loại bỏ các phần tử chứa bài giải chi tiết hoặc gợi ý làm lộ đáp án
            doc.querySelectorAll('[id*="solution"], [class*="solution"], [id*="guidance"], [class*="guidance"]').forEach(el => el.remove());

            // 3. Lấy text thuần từ DOM đã lọc sạch
            let text = doc.body.textContent || doc.body.innerText || '';

            // 4. Các bộ lọc regex bổ sung
            text = text.replace(/(?:answer|solution|correctAnswer|expected|guidance)\s*[:=]\s*[^,;}\n]+/gi, '');
            text = text.replace(/window\.check_\w+\s*=\s*function[\s\S]*?};/gi, '');
            text = text.replace(/\[\[[^\]]*\]\]/g, '');
            text = text.replace(/\s+/g, ' ').trim();

            if (text.length > maxLength) {
                text = text.substring(0, maxLength) + '...(nội dung còn tiếp)';
            }
            return text;
        } catch (e) {
            console.error("Lỗi extractLessonText:", e);
            // Fallback: Lọc bằng Regex nếu DOMParser gặp lỗi
            let text = htmlContent.replace(/<script[\s\S]*?<\/script>/gi, '');
            text = text.replace(/<style[\s\S]*?<\/style>/gi, '');
            text = text.replace(/<[^>]+>/g, ' ');
            text = text.replace(/(?:answer|solution|correctAnswer|expected|guidance)\s*[:=]\s*[^,;}\n]+/gi, '');
            text = text.replace(/window\.check_\w+\s*=\s*function[\s\S]*?};/gi, '');
            text = text.replace(/\[\[[^\]]*\]\]/g, '');
            text = text.replace(/\s+/g, ' ').trim();
            if (text.length > maxLength) {
                text = text.substring(0, maxLength) + '...';
            }
            return text;
        }
    },

    // Prompt chuyên trách Toán lớp 5 - Nâng cấp v3.0 (có nội dung bài học)
    getSystemPrompt(lessonTitle, lessonContent = '') {
        const contentSection = lessonContent
            ? `\n\n===== NỘI DUNG BÀI HỌC MÀ HỌC SINH ĐANG HỌC =====\n${lessonContent}\n===== HẾT NỘI DUNG BÀI HỌC =====\n\nQUAN TRỌNG: Hãy trả lời dựa trên NỘI DUNG BÀI HỌC ở trên. Sử dụng chính các công thức, ví dụ, số liệu trong bài để giải thích cho học sinh.`
            : '';

        return `Vai trò: Bạn là EduRobot (AI E) - Chuyên gia giáo dục tiểu học, chuyên trách môn Toán lớp 5 với hơn 20 năm kinh nghiệm dạy học theo phương pháp sư phạm tích cực.

Nhiệm vụ: Hỗ trợ học sinh HIỂU BÀI và TỰ LÀM BÀI, không phải làm bài thay học sinh.

QUY TẮC PHẢN HỒI (TUYỆT ĐỐI TUÂN THỦ):
⛔ TUYỆT ĐỐI KHÔNG TIẾT LỘ ĐÁP ÁN HOẶC KẾT QUẢ SỐ CỤ THỂ CỦA BÀI TẬP (ví dụ: Không được viết các số như "20112026", "20 112 026", "2 030", v.v. vào câu trả lời gợi ý hoặc hướng dẫn). Bạn chỉ được hướng dẫn phương pháp làm bài, các bước tư duy, giải thích các khái niệm toán học liên quan.
⛔ KHI HỌC SINH LÀM SAI HOẶC HỎI HƯỚNG DẪN: TUYỆT ĐỐI không đưa đáp án đúng. Chỉ gợi ý cách làm, đặt câu hỏi để học sinh tự tính toán và tự nhận ra kết quả.
✅ KHI HỌC SINH LÀM ĐÚNG: Khen ngợi và khuyến khích hiển thị "LỜI GIẢI CHI TIẾT" (bao gồm Lời giải, Phép tính, Đáp số) để học sinh đối chiếu trình bày.
⛔ KHÔNG giải bài tập hộ khi học sinh chưa thử sức.
✅ Giải đáp trực tiếp các câu hỏi lý thuyết, công thức trong bài học.
✅ Nếu học sinh hỏi về đáp án: "Mình sẽ hướng dẫn bạn cách làm, còn đáp án bạn hãy tự thử sức nhé!"

Phong cách giao tiếp:
1. Hòa nhã & Tôn trọng: Xưng hô thân thiện (Mình và Bạn). Không phê phán nặng nề.
2. Khuyến khích & Động viên: Khen ngợi khi học sinh cố gắng, chỉ ra điểm sáng.
3. Gợi mở từng bước: Hướng dẫn từng bước nhỏ, đợi học sinh suy nghĩ.
4. Ngôn ngữ: Sư phạm tiểu học, dễ hiểu, súc tích (dưới 150 từ). TUYỆT ĐỐI CHỈ SỬ DỤNG TIẾNG VIỆT. KHÔNG sử dụng Hán tự (chữ Trung Quốc) hay ngôn ngữ khác trong phản hồi.
5. BÁM SÁT BÀI HỌC: Dùng chính các công thức, khái niệm, ví dụ trong NỘI DUNG BÀI HỌC bên dưới để giải thích. Khi học sinh hỏi về kiến thức lý thuyết (không phải bài tập), được phép trả lời trực tiếp dựa trên nội dung bài.

Ngữ cảnh: Học sinh đang học bài "${lessonTitle}".${contentSection}`;
    },

    async fetchWithTimeout(url, fetchInit, timeoutMs = 25000) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
        try {
            const res = await fetch(url, { ...fetchInit, signal: controller.signal });
            return res;
        } finally {
            clearTimeout(timeoutId);
        }
    },

    async ask(message, lessonTitle, lessonContent = '') {
        try {
            const contentText = this.extractLessonText(lessonContent);
            const systemPrompt = this.getSystemPrompt(lessonTitle, contentText);
            const response = await this.fetchWithTimeout(this.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sentence: `[Hệ thống: ${systemPrompt}]\n\n[Học sinh]: ${message}`,
                    mode: 'chat'
                })
            }, 25000);

            if (!response.ok) throw new Error('API Error');

            const data = await response.json();
            return data.content || data.response || "Mình đang suy nghĩ... bạn hỏi lại nhé!";
        } catch (error) {
            console.error('AI Error:', error);
            return "Rất tiếc, kết nối của Robot đang gặp trục trặc. Bạn hãy kiểm tra internet hoặc thử lại sau nhé!";
        }
    },

    async tutor(studentWork, lessonTitle, requirement, lessonContent = '') {
        try {
            const contentText = this.extractLessonText(lessonContent);
            const lessonSection = contentText
                ? `\n\n===== NỘI DUNG BÀI HỌC THAM KHẢO =====\n${contentText}\n===== HẾT =====`
                : '';

            const tutorPrompt = `Vai trò: Bạn là Trợ lý giáo dục E (EduRobot), chuyên gia chấm bài Toán lớp 5.

Nhiệm vụ: Kiểm tra bài làm, nhận xét và HƯỚNG DẪN học sinh sửa lỗi (nếu có). 

Tiêu chí chấm điểm:
1. Độ chính xác: Kiểm tra kỹ từng bước giải (Lời giải, phép tính, đơn vị, đáp số).
2. Kiến thức trọng tâm: Bám sát nội dung bài "${lessonTitle}". Chú ý các lỗi về đổi đơn vị, dấu phẩy số thập phân, hoặc công thức hình học.
3. THAM KHẢO NỘI DUNG BÀI HỌC bên dưới để chấm chính xác.

QUY TẮC CHẤM BÀI:
✅ NẾU BÀI LÀM ĐÚNG (HOÀN TOÀN): Khen ngợi nồng nhiệt. PHẢI hiển thị đầy đủ "LỜI GIẢI CHI TIẾT" bao gồm 3 phần: Lời giải mẫu, Các phép tính, Đáp số để học sinh tham khảo cách trình bày chuẩn.
⛔ NẾU BÀI LÀM SAI: Chỉ ra cụ thể lỗi ở bước nào (ví dụ: "Bạn nhầm ở bước đổi đơn vị cm2 sang dm2 rồi..."). TUYỆT ĐỐI KHÔNG cho đáp số đúng. Hiển thị "Gợi ý cách làm" một cách sư phạm.
✅ Hướng dẫn học sinh tự tìm ra lỗi và sửa lại bài một cách chủ động.

Cấu trúc phản hồi:
1. Lời chào & Khen ngợi: Khen tinh thần học tập hoặc điểm sáng trong bài.
2. Nhận xét chi tiết:
   - Điểm tốt: (Trình bày, logic, kỹ năng tính toán).
   - Điểm cần lưu ý: (Nếu sai, chỉ ra lỗi ở bước nào, gợi ý cách sửa, KHÔNG đưa đáp số).
3. Chấm điểm: Thang điểm 10 kèm nhận xét khích lệ.
4. Hướng dẫn: Gợi ý cách giải hoặc nhắc lại công thức liên quan (trích từ nội dung bài học).
5. Lời chúc: Một câu động viên để học sinh tự tin hơn.

QUY ĐỊNH NGÔN NGỮ:
- TUYỆT ĐỐI CHỈ SỬ DỤNG TIẾNG VIỆT. KHÔNG sử dụng Hán tự hay ngôn ngữ khác.

QUY ĐỊNH KÝ HIỆU TOÁN HỌC (Khi học sinh điền bài):
- Nhân: Chấp nhận cả 'x' và '×'.
- Chia: Chấp nhận dấu ':'.
- Số thập phân: Chấp nhận cả dấu chấm '.' và dấu phẩy ','.
- Chỉ số trên: Chấp nhận viết liền đơn vị và số (ví dụ: m2, cm2, dm3) tương ứng với m², cm², dm³.

Bối cảnh:
- Bài học: ${lessonTitle}
- Yêu cầu: ${requirement}
- Bài làm của học sinh: ${studentWork}${lessonSection}`;

            const response = await this.fetchWithTimeout(this.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sentence: tutorPrompt,
                    mode: 'chat'
                })
            }, 25000);

            if (!response.ok) throw new Error('API Error');
            const data = await response.json();
            return data.content || data.response || "Mình vừa xem bài của bạn, bạn thử viết lại rõ hơn được không?";
        } catch (error) {
            console.error('Tutor Error:', error);
            return this.heuristicTutor(studentWork, lessonTitle, requirement);
        }
    },

    heuristicTutor(studentWork, lessonTitle, requirement) {
        const safeText = (studentWork || '').toString();
        const req = (requirement || '').toString();

        const normalize = (s) => s.replace(/,/g, '.');
        const extractNumbers = (s) => {
            const m = normalize(s).match(/-?\d+(?:\.\d+)?/g);
            return (m || []).map(v => Number(v)).filter(v => Number.isFinite(v));
        };

        const expected = (() => {
            const normReq = normalize(req);
            const parts = normReq.split('=');
            if (parts.length >= 2) {
                const right = parts[parts.length - 1];
                const nums = extractNumbers(right);
                if (nums.length) return nums[0];
            }
            const nums = extractNumbers(normReq);
            return nums.length ? nums[nums.length - 1] : null;
        })();

        const studentNums = extractNumbers(safeText);
        const studentAns = studentNums.length ? studentNums[studentNums.length - 1] : null;

        const hasPercent = /%/.test(safeText) || /%/.test(req);

        const isClose = (a, b) => {
            if (a == null || b == null) return false;
            const tol = (Math.abs(b) >= 10) ? 0.5 : 0.05;
            return Math.abs(a - b) <= tol;
        };

        const looksTimes10 = (a, b) => (a != null && b != null && isClose(a, b * 10));
        const looksDiv10 = (a, b) => (a != null && b != null && isClose(a, b / 10));

        if (studentAns == null) {
            return `Mình chưa thấy bạn ghi rõ kết quả cuối cùng nên chưa chấm được.\n\nBạn hãy viết thêm dòng “Đáp số: …” (kèm đơn vị) rồi bấm AI CHẤM lại nhé.`;
        }

        if (expected != null && isClose(studentAns, expected)) {
            return `Mình xem nhanh thấy bạn làm đúng hướng và kết quả hợp lý.\n\nBạn nhớ ghi rõ đơn vị ở “Đáp số” và trình bày phép tính theo từng bước nhé.`;
        }

        if (expected != null && hasPercent && (looksTimes10(studentAns, expected) || looksDiv10(studentAns, expected))) {
            return `Bạn làm đúng bước tìm phần trăm, nhưng có vẻ bạn đang nhầm khi đổi phần trăm ra số thập phân.\n\nGợi ý: 20% không phải là 20 hoặc 2; bạn hãy đổi 20% về dạng số thập phân rồi nhân lại. Sau đó kiểm tra xem kết quả có hợp lý (nhỏ hơn số ban đầu) không nhé.`;
        }

        if (expected != null) {
            return `Mình thấy bài của bạn đang sai ở một bước tính hoặc đổi đơn vị.\n\nBạn thử kiểm tra lại:\n- Dấu phẩy/thập phân (dấu , và .)\n- Đổi % ra số thập phân (nếu có)\n- Nhân/chia có đúng thứ tự chưa\n\nBạn sửa rồi bấm AI CHẤM lại nhé.`;
        }

        return `Mình đang gặp lỗi kết nối nên không chấm chi tiết được.\n\nBạn hãy kiểm tra lại phép tính, đơn vị, và viết rõ “Đáp số”. Sau đó thử bấm AI CHẤM lại nhé.`;
    },

    async vietnameseWriting(studentWork, subjectContext) {
        try {
            const prompt = `Bạn là giáo viên Tiếng Việt lớp 5. 
Yêu cầu: ${subjectContext}.
Nhận xét ngắn gọn (tối đa 4 câu) bài làm sau của học sinh: "${studentWork}". 
Nếu hay thì khen (Chỉ ra điểm sáng như cách dùng từ, hình ảnh). Nếu chưa hay thì gợi ý nhẹ nhàng.
TUYỆT ĐỐI CHỈ SỬ DỤNG TIẾNG VIỆT. KHÔNG sử dụng Hán tự hay ngôn ngữ khác.
Định dạng trả về:
1. Nhận xét ưu điểm.
2. Gợi ý cải thiện.
3. Chấm điểm dự kiến: X/10.`;

            const response = await this.fetchWithTimeout(this.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sentence: prompt,
                    mode: 'chat',
                    persona: 'tlv'
                })
            }, 8000);

            if (!response.ok) throw new Error('API Error');
            const data = await response.json();
            return data.content || data.response || "Mình vừa xem bài của bạn, bạn thử viết lại rõ hơn được không?";
        } catch (error) {
            console.error('Writing Eval Error:', error);
            return "Thầy E hiện chưa xem bài được, em hãy tự kiểm tra lại nhé!";
        }
    }
};
