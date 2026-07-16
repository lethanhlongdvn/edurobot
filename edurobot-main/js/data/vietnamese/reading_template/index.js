export const template = {
    "topic": "Tiếng Việt",
    "week": "[TUẦN]",
    "period": "[TIẾT]",
    "title": "[TÊN BÀI ĐỌC]",
    "desc": "[Mô tả tóm tắt nội dung bài học.]",
    "content": `
<div class="space-y-10 animate-in fade-in duration-1000 max-w-6xl mx-auto py-6">
    <!-- 1. PHẦN KHỞI ĐỘNG -->
    <section class="w-full">
        <div class="glass-card rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-blue-100/50 bg-gradient-to-b from-white/90 to-blue-50/70">
            <div class="flex items-center space-x-6 mb-8">
                <div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-200">
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h2 class="text-5xl font-black text-blue-950 uppercase tracking-tighter">Khởi động</h2>
            </div>
            
            <div class="bg-blue-100/50 p-8 rounded-2xl border-4 border-blue-200 mb-8 text-center">
                <p class="text-3xl text-blue-900 leading-tight font-black">
                    [Câu hỏi khởi động...]
                </p>
            </div>

            <div class="w-full overflow-hidden rounded-3xl shadow-2xl border-8 border-white group">
                <img src="assets/images/khoidong.jpg" alt="Ảnh khởi động" class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000">
            </div>
            <p class="text-xl text-center text-gray-500 mt-4 font-medium italic">[Chú thích ảnh khởi động]</p>
        </div>
    </section>

    <!-- 2. PHẦN BÀI ĐỌC -->
    <section class="w-full">
        <div class="glass-card rounded-3xl p-8 md:p-10 shadow-2xl bg-white/70 border-2 border-emerald-100">
            <div class="text-3xl text-gray-900 leading-relaxed text-justify font-medium overflow-hidden">
                <!-- KHỐI HÌNH ẢNH & THÔNG TIN (FLOAT RIGHT) -->
                <div class="md:float-right md:ml-10 md:mb-8 md:w-1/3 space-y-6 bg-emerald-50/30 p-6 rounded-3xl border-2 border-emerald-50 shadow-sm">
                    <div class="intro-box bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                        <p class="text-emerald-800 italic text-xl">"[Câu nói hoặc nhận xét nổi bật của nhân vật/bài học]"</p>
                    </div>
                    <div class="image-box text-center">
                        <img src="assets/images/[file_anh_nhan_vat].webp" alt="[Tên nhân vật]" class="rounded-2xl shadow-lg border-4 border-white max-w-full h-auto mx-auto mb-2">
                        <p class="text-sm text-gray-500 italic">[Chú thích ảnh nhân vật]</p>
                    </div>
                    <p class="text-xl text-center text-gray-500 font-bold uppercase tracking-widest">
                        [Tên nhân vật]<br>
                        <span class="text-lg font-medium">([Năm sinh - Năm mất])</span>
                    </p>
                </div>

                <!-- NỘI DUNG VĂN BẢN -->
                <p class="indent-12 mb-8">
                    [Đoạn văn 1: Giới thiệu...]
                </p>
                <p class="indent-12 mb-8">
                    [Đoạn văn 2: Thân bài...]
                </p>
                <p class="indent-12 mb-8">
                    [Đoạn văn 3: Kết bài...]
                </p>
                
                <div class="flex justify-end pt-6">
                    <p class="text-2xl italic font-black text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-xl">
                        ([Tác giả / Nguồn])
                    </p>
                </div>
            </div>
        </div>

        <!-- 2.3 PHẦN TỪ NGỮ -->
        <div class="mt-10 bg-emerald-50 p-8 rounded-2xl border-2 border-emerald-100 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 class="text-2xl font-black text-emerald-800 border-b-2 border-emerald-200 pb-2 flex items-center gap-2">
                <span>📚</span> Từ ngữ
            </h3>
            <ul class="space-y-4 text-xl leading-snug">
                <li><strong class="text-emerald-700">[Từ 1]:</strong> [Giải nghĩa 1].</li>
                <li><strong class="text-emerald-700">[Từ 2]:</strong> [Giải nghĩa 2].</li>
                <li><strong class="text-emerald-700">[Từ 3]:</strong> [Giải nghĩa 3].</li>
            </ul>
        </div>
    </section>

    <!-- 3. PHẦN TÌM HIỂU BÀI -->
    <section class="w-full pb-20">
        <div class="glass-card rounded-3xl p-8 md:p-10 shadow-2xl bg-orange-50/30 border-2 border-orange-100">
            <h2 class="text-4xl font-black text-gray-900 mb-10 flex items-start gap-6">
                <span class="bg-orange-500 text-white w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-2xl font-serif">?</span>
                <span class="border-b-4 border-orange-400 pb-2">TÌM HIỂU BÀI</span>
            </h2>

            <div class="lesson-questions space-y-6 text-3xl leading-relaxed text-gray-950 font-medium">
                <!-- CÂU 1 -->
                <div class="question-item bg-white/90 rounded-2xl border-4 border-orange-100 shadow-sm hover:border-orange-300 transition-all overflow-hidden" data-id="q1">
                    <button onclick="Lesson.toggleAccordion(this)" class="question-trigger w-full text-left p-8 font-bold text-blue-900 leading-snug flex justify-between items-center focus:outline-none cursor-pointer">
                        <span><span class="text-orange-600 mr-2">1.</span> [Nội dung câu hỏi 1]</span>
                        <span class="text-2xl icon-expand transform transition-transform duration-300">▼</span>
                    </button>
                    <div class="answer-block p-8 pt-0 hidden animate-in slide-in-from-top-2 duration-300">
                        <div class="p-6 bg-emerald-50/50 rounded-2xl border-2 border-emerald-100">
                            <p class="text-emerald-800 font-bold">-> [Đáp án câu 1]</p>
                        </div>
                    </div>
                </div>

                <!-- CÂU 2... COPY CẤU TRÚC TRÊN -->

            </div>
        </div>
    </section>
</div>
`,
    "practice": ``,
    "quizPool": [
        /* BẮT BUỘC SOẠN ÍT NHẤT 15 CÂU HỎI TRẮC NGHIỆM */
        {
            "question": "[Nội dung câu hỏi 1]",
            "options": ["[A]", "[B]", "[C]", "[D]"],
            "answer": 0,
            "level": 1
        }
    ]
};

