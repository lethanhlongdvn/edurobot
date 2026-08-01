export const lesson_242_viet = {
    "topic": "Tiếng Việt 5",
    "week": "24",
    "period": "242",
    "title": "ĐÁNH GIÁ, CHỈNH SỬA ĐOẠN VĂN",
    "desc": "Đánh giá, chỉnh sửa đoạn văn",
    "subject": "Viết",
    "theme": "Hương sắc trăm miền",
    "audio": "",
    "content": `
<style>
                        .label-viet { color: #ef4444; font-weight: 800; border: 2px solid #ef4444; padding: 2px 16px; display: inline-block; border-radius: 12px; margin-bottom: 8px; font-size: 0.8rem; background: rgba(254, 226, 226, 0.3); text-transform: uppercase; }
                        .glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.5); border-radius: 24px; padding: 16px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); margin-bottom: 8px; }
                        .writing-textarea { width: 100%; border-radius: 20px; padding: 20px; border: 2px solid #e2e8f0; background: #fff; min-height: 120px; font-family: 'Merriweather', serif; font-size: 1.1rem; line-height: 1.7; outline: none; transition: all 0.3s; }
                        .writing-textarea:focus { border-color: #3b82f6; box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1); }
                        .star-group span { cursor: pointer; transition: transform 0.2s; display: inline-block; }
                        .star-group span:hover { transform: scale(1.2); }
                        .example-box { background: #f8fafc; border-left: 4px solid #3b82f6; border-radius: 12px; padding: 16px; margin-top: 12px; }
                    </style>
                    <div class="max-w-4xl mx-auto py-1">
                        <div class="text-center mb-1"><div class="label-viet">VIẾT</div></div>
                        <h1 class="text-xl md:text-2xl font-black text-center text-blue-600 mb-2 leading-tight uppercase">
                            Đánh giá, chỉnh sửa đoạn văn<br>
                            <span class="text-lg md:text-xl text-blue-600">Thể hiện tình cảm, cảm xúc về một sự việc</span>
                        </h1>

                        <!-- Section 1: Đánh giá -->
                        <div class="glass-card border-l-[8px] border-l-amber-400">
                            <h2 class="text-xl font-black text-gray-800 mb-2 flex items-center gap-2">
                                <span class="w-8 h-8 bg-amber-400 text-white rounded-lg flex items-center justify-center shadow-md text-sm">1</span>
                                Đánh giá bài viết
                            </h2>
                            
                            <div class="space-y-3">
                                <div class="p-4 bg-amber-50 rounded-2xl border border-amber-100 italic text-gray-700">
                                    a. Nghe thầy cô giáo nhận xét về bài làm.
                                </div>
                                
                                <div>
                                    <p class="font-bold text-gray-800 mb-2">b. Đọc lại bài làm của em để phát hiện lỗi và sửa lỗi:</p>
                                    <div class="space-y-3">
                                        <div class="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                            <span class="font-medium text-gray-700">– Bài viết bị lạc ý hoặc lặp ý.</span>
                                            <div class="star-group flex gap-1" data-row="1">
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 1)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 2)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 3)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 4)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 5)">☆</span>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                            <span class="font-medium text-gray-700">– Chưa nêu được ấn tượng chung về sự việc.</span>
                                            <div class="star-group flex gap-1" data-row="2">
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 1)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 2)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 3)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 4)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 5)">☆</span>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                            <span class="font-medium text-gray-700">– Chưa thể hiện được tình cảm, cảm xúc về các chi tiết nổi bật của sự việc (khung cảnh, hoạt động,...).</span>
                                            <div class="star-group flex gap-1" data-row="3">
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 1)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 2)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 3)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 4)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 5)">☆</span>
                                            </div>
                                        </div>
                                        <div class="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                                            <span class="font-medium text-gray-700">– Sử dụng từ ngữ thể hiện tình cảm, cảm xúc chưa phù hợp.</span>
                                            <div class="star-group flex gap-1" data-row="4">
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 1)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 2)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 3)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 4)">☆</span>
                                                <span class="star-btn text-xl md:text-3xl text-gray-300" onclick="rateViet(this, 5)">☆</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Section 2: Viết lại -->
                        <div class="glass-card border-l-[8px] border-l-blue-500">
                            <h2 class="text-xl font-black text-gray-800 mb-2 flex items-center gap-2">
                                <span class="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center shadow-md text-sm">2</span>
                                Viết lại một số câu trong đoạn văn của em
                            </h2>
                             <p class="text-gray-600 mb-2 italic">Hãy viết lại một số câu văn chưa hay của em bằng cách thêm vào những từ ngữ gợi tả hoặc bộc lộ cảm xúc nhé!</p>
                             <p class="text-[11px] text-blue-600 font-bold mb-4 italic flex items-center gap-1">
                                 <span>💡 Mẹo: Nhấn nút 🎙️ cạnh câu hỏi để trả lời bằng giọng nói.</span>
                             </p>

                            <!-- Gợi ý 1 -->
                            <div class="mb-6">
                                <div class="flex items-center gap-3 mb-2">
                                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                     <h3 class="font-bold text-gray-800 text-lg">Nêu tình cảm, cảm xúc về khung cảnh diễn ra sự việc.</h3>
                                     <button onclick="toggleSpeech('viet242-input-1')" class="p-1 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-all text-[10px] shadow-sm" title="Nhập bằng giọng nói">🎙️</button>
                                </div>
                                <div class="example-box mb-3">
                                    <p class="text-sm font-black text-blue-600 uppercase mb-2">Ví dụ tham khảo:</p>
                                    <p class="text-gray-700 leading-loose font-medium italic italic">
                                        "Chiều Ba mươi, bên suối đã thấy bóng các bà, các mẹ rửa rau ngải để làm bánh. Mùi thơm của rau ngải như ướp hương vào dòng suối. Tiếng cười lanh lảnh của đám trẻ con theo chân người lớn ra suối nghịch nước làm đám chim chào mào giật mình bay vụt lên từ bụi cây lúp xúp. Đất trời như được gột rửa và trở nên tinh khiết lạ thường. Tôi bỗng thấy lòng mình như mở ra, trong sáng với hương rau ngải phảng phất xa gần."
                                        <span class="block mt-2 text-right text-xs font-bold font-sans">— (Nguyễn Luân)</span>
                                    </p>
                                </div>
                                <textarea id="viet242-input-1" rows="5" class="writing-textarea mb-2 focus:ring-4 focus:ring-blue-100" placeholder="Viết lại câu văn của em tại đây..."></textarea>
                                <div class="flex justify-center">
                                    <button onclick="checkVietAI('viet242-input-1')" class="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                                        <div class="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-blue-600 font-black text-sm shadow-sm">E</div>
                                        <span>XEM NHẬN XÉT</span>
                                    </button>
                                </div>
                                <div id="feedback-viet242-input-1" class="hidden mt-4 p-5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 shadow-sm animate-in fade-in slide-in-from-top-2"></div>
                            </div>

                            <!-- Gợi ý 2 -->
                            <div class="mb-6">
                                <div class="flex items-center gap-3 mb-4">
                                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                                     <h3 class="font-bold text-gray-800 text-lg">Nêu tình cảm, cảm xúc về hoạt động.</h3>
                                     <button onclick="toggleSpeech('viet242-input-2')" class="p-1 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-all text-[10px] shadow-sm" title="Nhập bằng giọng nói">🎙️</button>
                                </div>
                                <div class="example-box mb-3 border-l-indigo-500">
                                    <p class="text-sm font-black text-blue-600 uppercase mb-2">Ví dụ tham khảo:</p>
                                    <p class="text-gray-700 leading-loose font-medium italic italic">
                                        "Chiều mùng 2 tết Thanh minh, cả nhà tôi tất bật làm bánh ngải. Bố vung cao tay chày giã bột. Mẹ khéo léo lật giở từng thở bột đang chuyển dần sang màu xanh mướt. Còn bà thì tỉ mẩn chuẩn bị vừng đen và mật mía để làm nhân bánh. Tôi chạy lăng xăng từ chỗ nọ sang chỗ kia, lâu lâu lại hít hà căng bụng mùi thơm của mật mía, của bột bánh. Tôi cảm nhận rõ sự rộn ràng, hối hả nhưng ấm áp từ những việc làm của mọi người trong nhà. Vì thế tôi càng háo hức khi nghĩ đến những chiếc bánh ngải đang dần thành hình từ đôi bàn tay của bà, của mẹ, của cha."
                                        <span class="block mt-2 text-right text-xs font-bold font-sans">— (Nguyễn Luân)</span>
                                    </p>
                                </div>
                                <textarea id="viet242-input-2" rows="5" class="writing-textarea mb-2 focus:ring-4 focus:ring-indigo-100" placeholder="Viết lại câu văn của em tại đây..."></textarea>
                                <div class="flex justify-center">
                                    <button onclick="checkVietAI('viet242-input-2')" class="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                                        <div class="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-blue-600 font-black text-sm shadow-sm">E</div>
                                        <span>XEM NHẬN XÉT</span>
                                    </button>
                                </div>
                                <div id="feedback-viet242-input-2" class="hidden mt-4 p-5 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 shadow-sm animate-in fade-in slide-in-from-top-2"></div>
                            </div>
                        </div>

                        <!-- Image Upload for Mobile Students -->
                        <div class="glass-card rounded-[24px] p-4 shadow-sm mb-4 border-l-8 border-cyan-500 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div class="flex-1">
                                <label class="block text-cyan-800 font-bold text-base mb-1">📷 Nộp ảnh chụp bài làm (nếu không nhập máy)</label>
                                <p class="text-[11px] text-cyan-600">Em có thể chụp ảnh sau khi đã chỉnh sửa vào vở nhé!</p>
                            </div>
                            <div class="relative">
                                <input type="file" id="viet242-file" accept="image/*" capture="environment" class="hidden" 
                                    onchange="const s = document.getElementById('file-status-242'); if(s) { s.innerText = '✅ Đã chọn ảnh: ' + this.files[0].name; s.classList.remove('hidden'); }">
                                <label for="viet242-file" class="cursor-pointer bg-white text-cyan-600 font-black py-4 px-8 rounded-2xl border-2 border-cyan-300 hover:bg-cyan-50 transition-all flex items-center gap-3 shadow-md active:scale-95">
                                    <span class="text-lg md:text-2xl">📸</span> CHỌN ẢNH
                                </label>
                            </div>
                        </div>
                        <div id="file-status-242" class="hidden text-center text-green-600 font-bold bg-green-50 p-4 rounded-2xl border border-green-200 mb-10"></div>

                        <!-- Submit Button Container -->
                        <div class="flex justify-center my-8">
                            <button onclick="startSubmitLesson221Viet()" class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-black text-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                                <div class="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-rose-600 font-black text-sm shadow-sm">E</div>
                                <span>NỘP BÀI CHO THẦY</span>
                            </button>
                        </div>
                    </div>
`,
    "practice": `

`,
    "quizPool": [
    {
        "question": "Khi đánh giá đoạn văn về cảm xúc, tiêu chí nào là quan trọng nhất?",
        "options": [
            "Độ dài của bài",
            "Sử dụng từ ngữ thể hiện tình cảm, cảm xúc phù hợp",
            "Kể lại thật nhiều sự việc",
            "Tả trang phục"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Lỗi 'lạc ý' trong văn cảm xúc nghĩa là gì?",
        "options": [
            "Viết đúng trọng tâm",
            "Viết quá ngắn",
            "Viết sang kể chuyện hoặc tả cảnh mà quên bộc lộ cảm xúc",
            "Nộp bài muộn"
        ],
        "answer": 2,
        "level": 1
    },
    {
        "question": "Để câu văn hay hơn khi tả hoạt động, em nên làm gì?",
        "options": [
            "Chỉ dùng động từ",
            "Thêm các từ ngữ biểu cảm, suy nghĩ chân thành",
            "Chép lại y hệt mẫu",
            "Viết câu cực dài"
        ],
        "answer": 1,
        "level": 1
    }
]
};

if (!lesson_242_viet.period) lesson_242_viet.period = "242";
if (!lesson_242_viet.id) lesson_242_viet.id = "242-viet";
