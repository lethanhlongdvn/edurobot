/**
 * @file data.js
 * @description Template chuẩn cho bài Tiếng Việt lớp 5.
 * Bao gồm: Nội dung bài đọc, Luyện tập (Tìm hiểu bài + Tự luận), Quiz.
 */

// =====================================================
// 📖 PHẦN NỘI DUNG (Content Tab) - Tập đọc / LTVC
// =====================================================
export const vnTemplateContent = `
<div class="space-y-8 animate-fade-in pb-10">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50 p-8 rounded-[48px] border-l-8 border-emerald-600 shadow-xl relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <h3 class="text-xl md:text-3xl font-black text-emerald-900 mb-6 flex items-center gap-4">
            <span class="p-3 bg-emerald-600 text-white rounded-2xl shadow-lg">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-4 text-emerald-800 font-bold text-xl md:text-2xl ml-4">
            <li class="flex items-start gap-3">
                <span class="text-emerald-600 font-black">•</span>
                Đọc - Hiểu: [Đọc trôi chảy toàn bài, hiểu nội dung bài đọc]
            </li>
            <li class="flex items-start gap-3">
                <span class="text-emerald-600 font-black">•</span>
                Luyện từ và câu: [Mở rộng vốn từ, luyện câu theo chủ đề]
            </li>
            <li class="flex items-start gap-3">
                <span class="text-emerald-600 font-black">•</span>
                Viết: [Viết đoạn văn / bài văn theo yêu cầu]
            </li>
        </ul>
    </div>

    <!-- 📖 Bài đọc -->
    <div class="bg-white p-8 md:p-12 rounded-[56px] border border-emerald-100 shadow-2xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>

        <div class="flex flex-col lg:flex-row gap-12 items-start relative z-10">
            <!-- Cột trái: Bài đọc -->
            <div class="w-full lg:w-2/3 space-y-6">
                <h4 class="text-4xl md:text-5xl font-black text-emerald-800 leading-tight">
                    📖 <span class="text-emerald-600 font-black italic">[Tên bài đọc]</span>
                </h4>

                <div class="bg-paper rounded-[32px] p-8 md:p-10 shadow-inner border border-white/50 relative overflow-hidden">
                    <div class="absolute -top-10 -left-10 w-32 h-32 bg-emerald-100/30 rounded-full blur-3xl"></div>
                    <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-100/30 rounded-full blur-3xl"></div>

                    <div class="serif-font text-gray-800 leading-relaxed relative text-left reading-content text-xl md:text-2xl">
                        <p class="mb-4">
                            [Đoạn 1 của bài đọc...]
                        </p>
                        <p class="mb-4">
                            [Đoạn 2 của bài đọc...]
                        </p>
                        <p class="mb-4">
                            [Đoạn 3 của bài đọc...]
                        </p>
                        <p class="text-right italic font-bold text-gray-600 mt-6">(Theo [Tác giả])</p>
                    </div>
                </div>
            </div>

            <!-- Cột phải: Hình minh họa + Từ ngữ -->
            <div class="w-full lg:w-1/3 space-y-6">
                <div class="w-full aspect-[3/4] bg-gradient-to-br from-emerald-100 to-teal-50 rounded-[48px] border-4 border-white shadow-2xl flex items-center justify-center relative group overflow-hidden">
                    <img src="[Link_hinh_minh_hoa]" alt="Minh họa bài đọc" class="w-4/5 h-auto object-contain transition-transform duration-700 group-hover:scale-110">
                </div>

                <!-- Từ ngữ cần chú ý -->
                <div class="bg-amber-50 p-6 rounded-[32px] border-2 border-dashed border-amber-200 shadow-inner">
                    <p class="text-sm font-black text-amber-500 uppercase tracking-[0.2em] mb-3">📝 Từ ngữ cần chú ý</p>
                    <ul class="space-y-2 text-lg text-amber-800 font-medium">
                        <li>• <strong>[Từ 1]</strong>: [Giải nghĩa]</li>
                        <li>• <strong>[Từ 2]</strong>: [Giải nghĩa]</li>
                        <li>• <strong>[Từ 3]</strong>: [Giải nghĩa]</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- 💡 Ý nghĩa / Thông điệp bài đọc -->
    <div class="p-10 rounded-[48px] bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <h4 class="text-lg md:text-2xl font-black uppercase tracking-widest mb-6 opacity-80 flex items-center gap-3">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Ý nghĩa bài đọc
        </h4>
        <div class="bg-white/20 backdrop-blur-xl p-8 rounded-[32px] border border-white/30 shadow-inner">
            <p class="text-2xl md:text-3xl font-bold leading-relaxed italic text-center">
                "[Nội dung ý nghĩa / thông điệp chính của bài đọc...]"
            </p>
        </div>
    </div>
</div>
`;

// =====================================================
// ✏️ PHẦN LUYỆN TẬP (Practice Tab)
// =====================================================
export const vnTemplatePractice = `
<div class="space-y-16 animate-fade-in pb-12">
    <!-- Phần 1: Tìm hiểu bài (Câu hỏi đọc hiểu) -->
    <section class="bg-white p-4 rounded-[64px] shadow-2xl border border-emerald-50 overflow-hidden" id="ex-vn-template-1">
        <div class="p-4 md:p-7 bg-emerald-50/50 rounded-[56px]">
            <div class="flex items-start gap-6 mb-10">
                <div class="w-16 h-16 bg-emerald-600 text-white rounded-[24px] flex items-center justify-center text-xl md:text-3xl font-black shadow-lg shadow-emerald-200">📖</div>
                <h3 class="text-3xl md:text-4xl font-black text-gray-800 leading-tight">
                    Tìm hiểu bài
                </h3>
            </div>

            <div class="space-y-4">
                <!-- Câu hỏi 1 -->
                <details class="group bg-white/50 rounded-[24px] border border-gray-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                        <span class="font-bold text-gray-700 group-hover:text-emerald-600 transition-colors text-base md:text-lg">
                            1. [Câu hỏi tìm hiểu bài 1?]
                        </span>
                    </summary>
                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-emerald-50/30">
                        <p class="font-medium">[Trả lời câu 1...]</p>
                    </div>
                </details>

                <!-- Câu hỏi 2 -->
                <details class="group bg-white/50 rounded-[24px] border border-gray-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                        <span class="font-bold text-gray-700 group-hover:text-emerald-600 transition-colors text-base md:text-lg">
                            2. [Câu hỏi tìm hiểu bài 2?]
                        </span>
                    </summary>
                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-emerald-50/30">
                        <p class="font-medium">[Trả lời câu 2...]</p>
                    </div>
                </details>

                <!-- Câu hỏi 3 -->
                <details class="group bg-white/50 rounded-[24px] border border-gray-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                        <span class="font-bold text-gray-700 group-hover:text-emerald-600 transition-colors text-base md:text-lg">
                            3. [Câu hỏi tìm hiểu bài 3?]
                        </span>
                    </summary>
                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-emerald-50/30">
                        <p class="font-medium">[Trả lời câu 3...]</p>
                    </div>
                </details>

                <!-- Câu hỏi 4 -->
                <details class="group bg-white/50 rounded-[24px] border border-gray-100 shadow-sm transition-all hover:shadow-md overflow-hidden">
                    <summary class="w-full p-5 text-left flex justify-between items-center cursor-pointer list-none">
                        <span class="font-bold text-gray-700 group-hover:text-emerald-600 transition-colors text-base md:text-lg">
                            4. [Câu hỏi tìm hiểu bài 4?]
                        </span>
                    </summary>
                    <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-emerald-50/30">
                        <p class="font-medium">[Trả lời câu 4...]</p>
                    </div>
                </details>
            </div>
        </div>
    </section>

    <!-- Phần 2: Luyện viết (Tự luận - Thầy E chấm bài) -->
    <section class="bg-white p-4 rounded-[64px] shadow-2xl border border-amber-50 overflow-hidden" id="ex-vn-template-2">
        <div class="p-8 md:p-14 bg-amber-50/50 rounded-[56px]">
            <div class="flex items-start gap-6 mb-10">
                <div class="w-16 h-16 bg-amber-500 text-white rounded-[24px] flex items-center justify-center text-xl md:text-3xl font-black shadow-lg shadow-amber-200">✏️</div>
                <h3 class="text-3xl md:text-4xl font-black text-gray-800 leading-tight">
                    Luyện viết
                </h3>
            </div>

            <div class="bg-white p-10 rounded-[48px] border-[6px] border-amber-200/50 shadow-2xl flex flex-col relative">
                <div class="mb-6">
                    <p class="text-xl md:text-2xl font-bold text-gray-700 leading-relaxed">
                        [Yêu cầu bài viết: Viết đoạn văn tả cảnh / kể chuyện / nêu cảm nghĩ...]
                    </p>
                </div>

                <div class="flex justify-between items-center mb-4">
                    <span class="text-xl font-black text-amber-500 uppercase tracking-widest">📝 Bài làm của em</span>
                </div>

                <div class="relative flex-grow">
                    <textarea id="ans-vn-template-writing" rows="8" class="w-full p-8 pr-20 rounded-[32px] border-4 border-amber-100 bg-amber-50/30 outline-none focus:border-amber-400 text-lg md:text-2xl font-bold text-gray-800 transition-all shadow-inner resize-none leading-relaxed" placeholder="Em hãy viết bài tại đây..."></textarea>

                    <!-- Mic Button -->
                    <button id="btn-mic-vn-template" onclick="Lesson.toggleSpeechRec('ans-vn-template-writing')" class="absolute right-6 bottom-6 w-14 h-14 bg-amber-100 text-amber-600 hover:bg-amber-600 hover:text-white rounded-2xl flex items-center justify-center transition-all shadow-lg active:scale-95" title="Nhập liệu bằng giọng nói">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                    </button>
                    <div id="mic-status-vn-template" class="absolute -top-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-red-500 text-white text-xs font-black rounded-full animate-bounce hidden whitespace-nowrap">Đang ghi âm...</div>
                </div>

                <div class="mt-8 flex flex-wrap items-center gap-6">
                    <button id="btn-submit-vn-template-writing" onclick="window.submitVnTemplateEx('writing')" class="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-lg md:text-2xl rounded-[24px] shadow-xl transition-all active:scale-95 flex items-center gap-3">
                        NỘP BÀI <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                    </button>
                    <button onclick="Lesson.submitWordProblemAI('vn-template-writing')" class="px-12 py-5 bg-amber-500 hover:bg-amber-600 text-white font-black text-lg md:text-2xl rounded-[24px] shadow-xl shadow-amber-200 transition-all active:scale-95 flex items-center gap-4">
                        Kiểm tra với Thầy E <span class="bg-white/20 p-1 rounded-lg italic text-lg">AI</span>
                    </button>
                    <div id="fb-vn-template-writing" class="text-lg md:text-2xl font-black opacity-0 flex items-center gap-2"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Nộp bài Global Button -->
    <div class="pt-10 flex justify-center">
        <button onclick="window.submitVnStandardLesson('[Tên bài học]', 100)" class="px-16 py-6 bg-gradient-to-r from-emerald-600 to-teal-700 hover:scale-105 text-white font-black text-lg md:text-2xl rounded-[32px] shadow-2xl transition-all active:scale-95 flex items-center gap-4 group">
            HOÀN THÀNH LUYỆN TẬP
            <svg class="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
        </button>
    </div>
</div>
`;

// =====================================================
// 🧠 NGÂN HÀNG CÂU HỎI QUIZ
// =====================================================
export const vnTemplateQuizPool = [
    // Mức 1: Cơ bản (Nhận biết)
    { "question": "[Câu hỏi nhận biết 1 - Nhân vật chính là ai?]", "options": ["A", "B", "C", "D"], "answer": 0, "level": 1 },
    { "question": "[Câu hỏi nhận biết 2 - Bối cảnh câu chuyện?]", "options": ["A", "B", "C", "D"], "answer": 1, "level": 1 },
    { "question": "[Câu hỏi nhận biết 3 - Chi tiết cụ thể?]", "options": ["A", "B", "C", "D"], "answer": 2, "level": 1 },
    // Mức 2: Nâng cao (Thông hiểu)
    { "question": "[Câu hỏi thông hiểu 1 - Vì sao nhân vật làm vậy?]", "options": ["A", "B", "C", "D"], "answer": 0, "level": 2 },
    { "question": "[Câu hỏi thông hiểu 2 - Ý nghĩa chi tiết?]", "options": ["A", "B", "C", "D"], "answer": 1, "level": 2 },
    // Mức 3: Thử thách (Vận dụng)
    { "question": "[Câu hỏi vận dụng - Liên hệ thực tế / Bài học rút ra?]", "options": ["A", "B", "C", "D"], "answer": 2, "level": 3 }
];
