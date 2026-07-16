/* global UI */
export const lesson94 = {
    "topic": "Tiếng Việt 5",
    "week": "14",
    "period": "94",
    "title": "VIẾT: TÌM HIỂU CÁCH VIẾT ĐOẠN VĂN THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT BÀI THƠ",
    "desc": "Học sinh tìm hiểu cấu trúc, nội dung và các điểm cần lưu ý khi viết một đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ; thực hành qua bài văn mẫu cảm nhận bài thơ Tiếng đàn ba-la-lai-ca trên sông Đà.",
    "subject": "Viết",
    "theme": "Thế giới trong trang sách",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-blue-900">
    <!-- 🎯 Mục tiêu bài học (Clean Style) -->
    <div class="p-6 bg-blue-50/50 rounded-[2rem] border-2 border-blue-700">
        <h3 class="text-3xl font-black text-blue-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-700 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-blue-800 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-950 font-black">•</span>
                Hiểu được bố cục 3 phần (Mở đầu, Triển khai, Kết thúc) của một đoạn văn biểu cảm về bài thơ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-950 font-black">•</span>
                Nhận biết được các chi tiết nghệ thuật, hình ảnh hay và tình cảm hữu nghị sâu sắc được thể hiện trong bài thơ.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-950 font-black">•</span>
                Rút ra những lưu ý thực tế khi viết đoạn văn biểu cảm về một tác phẩm thơ.
            </li>
        </ul>
    </div>

    <!-- 🚀 Khởi động -->
    <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-4">
        <h3 class="text-3xl font-black text-blue-900 flex items-center gap-3">
            <span class="text-3xl">🚀</span>
            Khởi động: Chia sẻ cảm nghĩ
        </h3>
        <p class="text-xl text-blue-800 font-bold leading-relaxed">
            Em hãy ghi nhanh tên một bài thơ mà em yêu thích nhất từ trước đến nay và cho biết một lý do ngắn gọn vì sao em thích bài thơ đó nhé:
        </p>
        <div class="max-w-4xl mx-auto space-y-4 pt-2">
            <input type="text" id="warmup-poem-title" placeholder="Ví dụ: Hạt gạo làng ta / Tuổi Ngựa / Trước cổng trời..." class="w-full p-4 border-2 border-blue-200 rounded-2xl outline-none focus:border-blue-700 font-bold bg-blue-50/10 text-xl text-center shadow-inner">
            <textarea id="warmup-poem-reason" rows="3" placeholder="Lý do em yêu thích bài thơ đó..." class="w-full p-4 border-2 border-blue-200 rounded-2xl outline-none focus:border-blue-700 font-bold bg-blue-50/10 text-xl shadow-inner"></textarea>
            <div class="flex justify-center">
                <button onclick="startWarmupVn94()" class="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-black text-xl rounded-2xl shadow active:scale-95 transition-all">GỬI CHIA SẺ ✉️</button>
            </div>
            <div id="warmup-feedback-94" class="hidden p-5 rounded-3xl text-center font-bold text-lg mt-2 shadow-inner border-2"></div>
        </div>
    </div>

    <!-- 📖 Phần 1: TÌM HIỂU ĐOẠN VĂN MẪU (SGK Trang 125) -->
    <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
        <h3 class="text-3xl font-black text-blue-900 flex items-center gap-3">
            <span class="text-3xl">📖</span>
            1. Đọc đoạn văn mẫu và thực hiện yêu cầu
        </h3>

        <!-- Bố cục Hai cột: Đoạn văn & Ảnh SGK -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Cột trái: Nội dung đoạn văn mẫu -->
            <div class="lg:col-span-2 space-y-4">
                <div class="bg-blue-50/30 p-6 rounded-[2rem] border border-blue-100 shadow-inner select-none text-justify">
                    <p class="serif-font text-blue-950 text-xl font-bold leading-relaxed indent-8">
                        Bài thơ <span class="italic">Tiếng đàn ba-la-lai-ca trên sông Đà</span> của tác giả Quang Huy để lại trong tôi những ấn tượng đẹp. Bài thơ gợi lên bức tranh sống động về đêm trăng trên công trường thuỷ điện. Dưới trăng, những xe ủi, xe ben sóng vai nhau nằm nghỉ, những tháp khoan nhô lên trời như đang ngẫm nghĩ và tiếng đàn ba-la-lai-ca ngân nga, vang xa... Bài thơ tả tiếng đàn thật là hay! Tiếng đàn như ngọn gió bình yên thổi qua rừng bạch dương. Tiếng đàn như ngọn sóng vỗ trắng phau ghềnh đá. Tiếng đàn ngân dài theo dòng trăng lấp loáng sông Đà. Tôi như nghe thấy những cung bậc âm thanh khi dìu dặt, khi náo nức, vang ngân của tiếng đàn ba-la-lai-ca. Tiếng đàn của cô gái đến từ đất nước Nga xa xôi giúp tôi cảm nhận về tình hữu nghị cao đẹp giữa các quốc gia. Những người bạn quốc tế đã giúp chúng ta xây dựng Nhà máy Thuỷ điện Sông Đà, mang dòng ánh sáng toả đi muôn nơi, để cuộc sống tươi đẹp hơn. Xúc động biết mấy! Cảm ơn nhà thơ Quang Huy đã viết bài thơ thật hay, thật đẹp về tiếng đàn ba-la-lai-ca và tình hữu nghị thắm thiết, bền chặt.
                    </p>
                    <p class="text-right font-black text-blue-900 mt-3">(Thanh Thanh)</p>
                </div>
            </div>

            <!-- Cột phải: Ảnh minh họa SGK có Zoom -->
            <div class="flex flex-col items-center justify-center">
                <div class="relative group cursor-pointer overflow-hidden rounded-[2rem] border-2 border-blue-200 shadow-md p-2 bg-white max-w-[280px]" 
                     onclick="window.showMathFeedback(true, '&lt;div class=&amp;quot;text-center p-4 bg-white rounded-[32px] border-4 border-blue-600 shadow-2xl&amp;quot;&gt;&lt;img src=&amp;quot;assets/images/tiengviet_5_1/94/125.png&amp;quot; class=&amp;quot;max-h-[80vh] mx-auto rounded-2xl shadow-md object-contain&amp;quot; alt=&amp;quot;Trang 125 SGK&amp;quot;&gt;&lt;/div&gt;')">
                    <img src="assets/images/tiengviet_5_1/94/125.png" class="w-full h-auto rounded-[1.5rem] object-cover group-hover:scale-105 transition-transform duration-500" alt="SGK trang 125">
                    <div class="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-[1.5rem]">
                        <span class="px-4 py-2 bg-white/90 text-blue-900 font-black rounded-full shadow text-sm">🔍 PHÓNG TO</span>
                    </div>
                </div>
                <span class="text-sm font-bold text-blue-700 mt-2">Trang 125 Sách giáo khoa</span>
            </div>
        </div>

        <!-- Câu a: Bố cục 3 phần -->
        <div class="space-y-4 border-t border-blue-100 pt-6">
            <h4 class="text-2xl font-black text-blue-900 flex items-start gap-2">
                <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-base shrink-0 mt-0.5">a</span>
                Tìm phần mở đầu, triển khai, kết thúc của đoạn văn và cho biết ý chính của mỗi phần:
            </h4>
            
            <div class="max-w-5xl mx-auto space-y-4">
                <!-- Mở đầu -->
                <div class="bg-blue-50/40 p-5 rounded-2xl border-2 border-blue-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="flex flex-col justify-center">
                        <span class="font-black text-blue-900 text-xl">1. Phần Mở đầu:</span>
                        <span class="text-base text-gray-700 font-bold mt-1">Giới hạn từ đầu đến đâu?</span>
                        <select id="vn94-c1-part1-range" class="w-full p-2.5 border border-blue-200 rounded-xl font-bold bg-white text-base mt-2">
                            <option value="">-- Chọn giới hạn --</option>
                            <option value="correct">Từ đầu đến "... ấn tượng đẹp."</option>
                            <option value="wrong1">Từ đầu đến "... ngân nga, vang xa..."</option>
                            <option value="wrong2">Từ đầu đến hết đoạn văn</option>
                        </select>
                    </div>
                    <div class="flex flex-col justify-center">
                        <span class="font-black text-blue-900 text-xl">Ý chính của Mở đầu:</span>
                        <select id="vn94-c1-part1-idea" class="w-full p-2.5 border border-blue-200 rounded-xl font-bold bg-white text-base mt-4">
                            <option value="">-- Chọn ý chính --</option>
                            <option value="wrong">Kể chuyện các bạn nhỏ Nga đến Việt Nam</option>
                            <option value="correct">Giới thiệu tên bài thơ, tác giả và cảm xúc bao quát của người viết về bài thơ</option>
                        </select>
                    </div>
                </div>

                <!-- Triển khai -->
                <div class="bg-blue-50/40 p-5 rounded-2xl border-2 border-blue-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="flex flex-col justify-center">
                        <span class="font-black text-blue-900 text-xl">2. Phần Triển khai:</span>
                        <span class="text-base text-gray-700 font-bold mt-1">Giới hạn từ đâu đến đâu?</span>
                        <select id="vn94-c1-part2-range" class="w-full p-2.5 border border-blue-200 rounded-xl font-bold bg-white text-base mt-2">
                            <option value="">-- Chọn giới hạn --</option>
                            <option value="wrong1">Từ "Dưới trăng..." đến "... đất nước Nga xa xôi."</option>
                            <option value="correct">Từ "Bài thơ gợi lên..." đến "... để cuộc sống tươi đẹp hơn."</option>
                            <option value="wrong2">Từ "Bài thơ tả tiếng đàn..." đến hết đoạn văn</option>
                        </select>
                    </div>
                    <div class="flex flex-col justify-center">
                        <span class="font-black text-blue-900 text-xl">Ý chính của Triển khai:</span>
                        <select id="vn94-c1-part2-idea" class="w-full p-2.5 border border-blue-200 rounded-xl font-bold bg-white text-base mt-4">
                            <option value="">-- Chọn ý chính --</option>
                            <option value="correct">Nêu những vẻ đẹp về nội dung, nghệ thuật của bài thơ và tình cảm hữu nghị; biểu lộ cảm xúc chi tiết</option>
                            <option value="wrong">Giải thích các từ ngữ địa phương xuất hiện trong bài thơ</option>
                        </select>
                    </div>
                </div>

                <!-- Kết thúc -->
                <div class="bg-blue-50/40 p-5 rounded-2xl border-2 border-blue-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="flex flex-col justify-center">
                        <span class="font-black text-blue-900 text-xl">3. Phần Kết thúc:</span>
                        <span class="text-base text-gray-700 font-bold mt-1">Giới hạn từ đâu đến đâu?</span>
                        <select id="vn94-c1-part3-range" class="w-full p-2.5 border border-blue-200 rounded-xl font-bold bg-white text-base mt-2">
                            <option value="">-- Chọn giới hạn --</option>
                            <option value="correct">Từ "Xúc động biết mấy!" đến hết đoạn văn.</option>
                            <option value="wrong">Chỉ gồm câu văn cuối cùng của tác giả Thanh Thanh.</option>
                        </select>
                    </div>
                    <div class="flex flex-col justify-center">
                        <span class="font-black text-blue-900 text-xl">Ý chính của Kết thúc:</span>
                        <select id="vn94-c1-part3-idea" class="w-full p-2.5 border border-blue-200 rounded-xl font-bold bg-white text-base mt-4">
                            <option value="">-- Chọn ý chính --</option>
                            <option value="wrong">Kêu gọi mọi người cùng vẽ tranh về dòng sông Đà</option>
                            <option value="correct">Khẳng định lại cảm xúc sâu sắc và lòng biết ơn của người viết đối với nhà thơ và bài thơ</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Nút kiểm tra phần a -->
            <div class="flex justify-center pt-2">
                <button onclick="checkPartA_Vn94()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-700 hover:bg-blue-800 text-white rounded-[2rem] font-black text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
            </div>
            <div id="fb-parta" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner"></div>
        </div>

        <!-- Câu b: Những điều ở bài thơ khiến người viết yêu thích (Bông hoa đỏ) -->
        <div class="space-y-4 border-t border-blue-100 pt-6">
            <h4 class="text-2xl font-black text-blue-900 flex items-start gap-2">
                <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-base shrink-0 mt-0.5">b</span>
                Những điều gì ở bài thơ khiến người viết yêu thích hoặc xúc động? Điền ý cho bông hoa màu đỏ 🌹:
            </h4>
            
            <div class="max-w-4xl mx-auto bg-blue-50/20 p-6 rounded-[2rem] border-2 border-blue-200/50 space-y-4">
                <div class="flex flex-col md:flex-row items-center gap-4 justify-center">
                    <div class="px-5 py-3 bg-white rounded-xl border border-blue-300 font-bold text-center text-lg shadow-sm">
                        Bài thơ gợi lên bức tranh sống động.
                    </div>
                    <span class="text-blue-500 font-black text-2xl">➔</span>
                    <div class="px-5 py-3 bg-white rounded-xl border border-blue-300 font-bold text-center text-lg shadow-sm">
                        Bài thơ tả tiếng đàn thật hay.
                    </div>
                    <span class="text-blue-500 font-black text-2xl">➔</span>
                    <div class="flex items-center gap-2 bg-amber-50 rounded-xl p-3 border-2 border-dashed border-amber-300 shadow-sm animate-pulse shrink-0">
                        <span class="text-xl">🌹</span>
                        <input type="text" id="vn94-c1-flower" placeholder="Điền ý nghĩa bông hoa đỏ..." class="p-2 border border-amber-300 rounded outline-none focus:border-amber-600 font-bold bg-white text-base w-64 text-center">
                    </div>
                </div>
                <p class="text-xs text-gray-500 font-bold italic text-center">Gợi ý: Điền về tình hữu nghị cao đẹp hoặc sự giúp đỡ của bạn bè Nga quốc tế.</p>
            </div>

            <!-- Nút kiểm tra phần b -->
            <div class="flex justify-center pt-2">
                <button onclick="checkPartB_Vn94()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-700 hover:bg-blue-800 text-white rounded-[2rem] font-black text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
            </div>
            <div id="fb-partb" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner"></div>
        </div>

        <!-- Câu c: Tình cảm cảm xúc qua từ ngữ -->
        <div class="space-y-4 border-t border-blue-100 pt-6">
            <h4 class="text-2xl font-black text-blue-900 flex items-start gap-2">
                <span class="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-base shrink-0 mt-0.5">c</span>
                Tình cảm, cảm xúc của người viết được thể hiện qua những từ ngữ, câu văn nào?
            </h4>
            <p class="text-sm font-bold text-gray-600 ml-10">Em hãy nhấp chọn tất cả những từ ngữ, câu văn biểu lộ cảm xúc có mặt trong đoạn văn mẫu:</p>
            
            <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-blue-50 rounded-2xl border border-slate-200 cursor-pointer font-bold select-none transition-all">
                    <input type="checkbox" name="vn94-c" value="1" class="w-5 h-5 accent-blue-700">
                    <span class="text-lg">"để lại trong tôi những ấn tượng đẹp"</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-blue-50 rounded-2xl border border-slate-200 cursor-pointer font-bold select-none transition-all">
                    <input type="checkbox" name="vn94-c" value="2" class="w-5 h-5 accent-blue-700">
                    <span class="text-lg">"tiếng đàn thật là hay!"</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-blue-50 rounded-2xl border border-slate-200 cursor-pointer font-bold select-none transition-all">
                    <input type="checkbox" name="vn94-c" value="3" class="w-5 h-5 accent-blue-700">
                    <span class="text-lg">"xe ủi, xe ben sóng vai nhau nằm nghỉ"</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-blue-50 rounded-2xl border border-slate-200 cursor-pointer font-bold select-none transition-all">
                    <input type="checkbox" name="vn94-c" value="4" class="w-5 h-5 accent-blue-700">
                    <span class="text-lg">"Xúc động biết mấy!"</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-blue-50 rounded-2xl border border-slate-200 cursor-pointer font-bold select-none transition-all">
                    <input type="checkbox" name="vn94-c" value="5" class="w-5 h-5 accent-blue-700">
                    <span class="text-lg">"Cảm ơn nhà thơ Quang Huy..."</span>
                </label>
                <label class="flex items-center gap-3 p-4 bg-slate-50 hover:bg-blue-50 rounded-2xl border border-slate-200 cursor-pointer font-bold select-none transition-all">
                    <input type="checkbox" name="vn94-c" value="6" class="w-5 h-5 accent-blue-700">
                    <span class="text-lg">"tháp khoan nhô lên trời như đang ngẫm nghĩ"</span>
                </label>
            </div>

            <!-- Nút kiểm tra phần c -->
            <div class="flex justify-center pt-2">
                <button onclick="checkPartC_Vn94()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-700 hover:bg-blue-800 text-white rounded-[2rem] font-black text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
            </div>
            <div id="fb-partc" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner"></div>
        </div>
    </div>

    <!-- 📖 Phần 2: LƯU Ý KHI VIẾT ĐOẠN VĂN (SGK Trang 126) -->
    <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
        <h3 class="text-3xl font-black text-blue-900 flex items-center gap-3">
            <span class="text-3xl">📝</span>
            2. Trao đổi về những điểm cần lưu ý khi viết đoạn văn cảm nghĩ
        </h3>
        
        <div class="max-w-4xl mx-auto bg-blue-50/30 p-6 rounded-[2rem] border border-blue-100 space-y-4">
            <p class="text-lg font-bold text-gray-700">
                Hãy trao đổi với các bạn về điểm cần lưu ý (điền vào ô bông hoa đỏ 🌹 thứ ba):
            </p>
            <ul class="space-y-3 font-bold text-lg text-gray-800 ml-4">
                <li>🔹 Bố cục đoạn văn</li>
                <li>🔹 Những điều yêu thích ở bài thơ</li>
                <li class="flex flex-col md:flex-row md:items-center gap-2">
                    <span>🔹 Những cách thể hiện tình cảm, cảm xúc:</span>
                    <ul class="ml-6 space-y-1 text-gray-700 list-disc font-medium">
                        <li>Dùng từ ngữ chỉ tình cảm, cảm xúc</li>
                        <li>Sử dụng câu cảm</li>
                        <li class="flex items-center gap-2 bg-amber-50 rounded-lg p-2 border border-dashed border-amber-300 shadow-inner mt-1">
                            <span>🌹</span>
                            <input type="text" id="vn94-c2-flower" placeholder="Điền lưu ý nghệ thuật..." class="p-1.5 border border-amber-300 rounded outline-none focus:border-blue-700 font-bold bg-white text-base w-72 text-center">
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="flex justify-center pt-2">
            <button onclick="checkPart2_Vn94()" class="w-14 h-14 md:w-20 md:h-20 bg-blue-700 hover:bg-blue-800 text-white rounded-[2rem] font-black text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
        </div>
        <div id="fb-part2" class="hidden p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner"></div>

        <!-- 💡 Ghi nhớ -->
        <div class="p-6 bg-gradient-to-r from-blue-700 to-indigo-600 text-white rounded-[2rem] shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            <h4 class="text-2xl font-black mb-3 flex items-center gap-2">
                <span>💡</span> GHI NHỚ
            </h4>
            <p class="text-lg font-bold leading-relaxed mb-4">
                Đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ thường có 3 phần:
            </p>
            <ul class="space-y-3 text-base font-semibold leading-relaxed ml-4 opacity-95">
                <li><strong class="text-yellow-300 font-black">1. Mở đầu:</strong> Giới thiệu tên bài thơ, tên tác giả và ấn tượng của em về bài thơ.</li>
                <li><strong class="text-yellow-300 font-black">2. Triển khai:</strong> Nêu những cái hay, cái đẹp của bài thơ (từ ngữ, hình ảnh, nhân vật, nội dung, ý nghĩa,...) và biểu lộ tình cảm, cảm xúc của em đối với bài thơ.</li>
                <li><strong class="text-yellow-300 font-black">3. Kết thúc:</strong> Nhấn mạnh, khẳng định lại một lần nữa tình cảm, cảm xúc của em đối với bài thơ.</li>
            </ul>
        </div>
    </div>

    <!-- 📚 TỰ ĐỌC SÁCH BÁO: BÀI THƠ "NÓI VỚI EM" (SGK Trang 126) -->
    <div class="bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-blue-100 space-y-6">
        <div class="flex flex-col md:flex-row items-center justify-between border-b border-blue-100 pb-4">
            <h3 class="text-3xl font-black text-blue-900 flex items-center gap-3">
                <span class="text-3xl">📚</span>
                Tự đọc sách báo (Đọc mở rộng)
            </h3>
            <div class="flex items-center gap-3 mt-4 md:mt-0 bg-blue-50 p-2 rounded-2xl">
                <span class="font-bold text-base text-blue-800">Chế độ xem:</span>
                <button onclick="switchModeVn94('read')" id="btn-vn94-read" class="px-4 py-2 bg-blue-700 text-white font-black text-sm rounded-xl shadow transition-all">Bài đọc</button>
                <button onclick="switchModeVn94('memorize')" id="btn-vn94-memo" class="px-4 py-2 bg-white text-blue-700 border border-blue-200 font-bold text-sm rounded-xl transition-all">Học thuộc lòng</button>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Bài thơ Nói với em -->
            <div class="space-y-4">
                <h4 class="text-2xl font-black text-blue-900 text-center">Nói với em</h4>
                <p class="text-sm font-bold text-blue-500 text-center italic mt-0">Trích - Vũ Quần Phương</p>
                <p class="text-xs text-gray-500 font-bold italic text-center hidden" id="memo-tip">💡 Mẹo: Nhấp vào ô màu xanh để hiển thị lại từ bị ẩn nhé!</p>

                <div class="bg-blue-50/20 p-6 rounded-[2rem] border border-blue-100 max-w-md mx-auto shadow-inner select-none font-bold text-xl text-blue-950 text-center leading-loose">
                    <!-- Khổ 1 -->
                    <div class="space-y-1">
                        <p>Nếu nhắm mắt trong <span id="m1" onclick="revealWord('m1', 'vườn')" class="px-2 py-0.5 rounded cursor-pointer transition-all">vườn</span> lộng gió</p>
                        <p>Sẽ được nghe nhiều <span id="m2" onclick="revealWord('m2', 'tiếng')" class="px-2 py-0.5 rounded cursor-pointer transition-all">tiếng</span> chim hay</p>
                        <p>Tiếng lích rích chim sâu trong <span id="m3" onclick="revealWord('m3', 'lá')" class="px-2 py-0.5 rounded cursor-pointer transition-all">lá</span></p>
                        <p>Con chìa vôi vừa hót vừa <span id="m4" onclick="revealWord('m4', 'bay')" class="px-2 py-0.5 rounded cursor-pointer transition-all">bay</span>.</p>
                    </div>

                    <!-- Khổ 2 -->
                    <div class="space-y-1 mt-6">
                        <p>Nếu nhắm mắt nghe bà <span id="m5" onclick="revealWord('m5', 'kể')" class="px-2 py-0.5 rounded cursor-pointer transition-all">kể</span> chuyện</p>
                        <p>Sẽ được nhìn thấy các bà <span id="m6" onclick="revealWord('m6', 'tiên')" class="px-2 py-0.5 rounded cursor-pointer transition-all">tiên</span></p>
                        <p>Thấy chú bé đi hài bảy <span id="m7" onclick="revealWord('m7', 'dặm')" class="px-2 py-0.5 rounded cursor-pointer transition-all">dặm</span></p>
                        <p>Quả thị thơm cô <span id="m8" onclick="revealWord('m8', 'Tấm')" class="px-2 py-0.5 rounded cursor-pointer transition-all">Tấm</span> rất hiền.</p>
                    </div>

                    <!-- Khổ 3 -->
                    <div class="space-y-1 mt-6">
                        <p>Nếu nhắm mắt nghĩ về <span id="m9" onclick="revealWord('m9', 'cha')" class="px-2 py-0.5 rounded cursor-pointer transition-all">cha</span> mẹ</p>
                        <p>Đã nuôi em khôn <span id="m10" onclick="revealWord('m10', 'lớn')" class="px-2 py-0.5 rounded cursor-pointer transition-all">lớn</span> từng ngày</p>
                        <p>Tay bồng bế sớm khuya vất <span id="m11" onclick="revealWord('m11', 'vả')" class="px-2 py-0.5 rounded cursor-pointer transition-all">vả</span></p>
                        <p>Mắt nhắm rồi lại <span id="m12" onclick="revealWord('m12', 'mở')" class="px-2 py-0.5 rounded cursor-pointer transition-all">mở</span> ra ngay.</p>
                    </div>
                </div>
            </div>

            <!-- Công cụ tự học tương tác -->
            <div class="space-y-6 flex flex-col justify-between">
                <div class="bg-blue-50/30 p-6 rounded-[2rem] border border-blue-100 space-y-4">
                    <span class="font-black text-blue-900 text-xl">🎙️ Tập nói & Ghi âm chia sẻ cảm nghĩ:</span>
                    <p class="text-sm text-gray-700 font-bold">Em hãy bấm ghi âm để tự luyện phát biểu cảm nghĩ về một khổ thơ em thích nhất trong bài thơ trên:</p>
                    
                    <div class="flex flex-col items-center justify-center gap-4 py-4">
                        <button id="record-btn-vn94" onclick="toggleRecordVn94()" class="w-16 h-16 rounded-full bg-red-500 text-white hover:bg-red-600 active:scale-95 transition-all shadow-md flex items-center justify-center text-2xl">
                            🎤
                        </button>
                        <span id="record-status-vn94" class="font-black text-lg text-gray-500 animate-pulse">Bấm mic để bắt đầu nói</span>
                        <div id="audio-wave-vn94" class="hidden flex items-center gap-1.5 h-8">
                            <span class="w-1.5 bg-red-500 rounded-full animate-bounce h-5"></span>
                            <span class="w-1.5 bg-red-500 rounded-full animate-bounce h-8" style="animation-delay: 0.15s"></span>
                            <span class="w-1.5 bg-red-500 rounded-full animate-bounce h-4" style="animation-delay: 0.3s"></span>
                            <span class="w-1.5 bg-red-500 rounded-full animate-bounce h-7" style="animation-delay: 0.45s"></span>
                        </div>
                    </div>
                </div>

                <div class="bg-blue-50/30 p-6 rounded-[2rem] border border-blue-100 space-y-4">
                    <span class="font-black text-blue-900 text-xl">📝 Câu chuyện nghệ thuật:</span>
                    <p class="text-sm text-gray-700 font-bold">Chia sẻ về một câu chuyện em đã đọc về một người hoạt động nghệ thuật (nhà văn, nhà thơ, họa sĩ...):</p>
                    <input type="text" id="vn94-art-title" placeholder="Nhập tên câu chuyện/tên nghệ sĩ..." class="w-full p-3 border-2 border-blue-200 rounded-xl outline-none focus:border-blue-700 font-bold bg-white text-base">
                    <textarea id="vn94-art-comment" rows="2" placeholder="Cảm nhận ngắn của em..." class="w-full p-3 border-2 border-blue-200 rounded-xl outline-none focus:border-blue-700 font-bold bg-white text-base"></textarea>
                    <div class="flex justify-center">
                        <button onclick="saveArtShareVn94()" class="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white font-black rounded-xl text-base shadow active:scale-95 transition-all">GỬI CẢM NHẬN ✓</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Bố cục của một đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ gồm mấy phần?",
            "options": [
                "3 phần (Mở đầu, Triển khai, Kết thúc)",
                "2 phần (Mở đầu, Triển khai)",
                "4 phần (Mở bài, Thân bài, Kết bài, Đánh giá)",
                "Không chia phần, viết liền một mạch tự do"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nhiệm vụ chính của phần Mở đầu trong đoạn văn cảm nghĩ về một bài thơ là gì?",
            "options": [
                "Giới thiệu tên bài thơ, tên tác giả và ấn tượng bao quát của em về bài thơ",
                "Chỉ giới thiệu tên lớp và tên học sinh tự làm bài",
                "Nêu tất cả các biện pháp tu từ được tác giả sử dụng",
                "Kể lại hoàn toàn cốt truyện hoặc sự tích liên quan đến bài thơ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Phần Triển khai của đoạn văn cảm nghĩ về bài thơ cần làm những gì?",
            "options": [
                "Nêu những cái hay, cái đẹp của bài thơ (từ ngữ, hình ảnh, nghệ thuật, ý nghĩa...) và biểu lộ cảm xúc của mình về các chi tiết đó",
                "Chỉ chép lại nguyên văn bài thơ từ đầu đến cuối",
                "Phê bình nghiêm khắc những chỗ viết chưa hay của tác giả",
                "Giải nghĩa từng từ vựng xuất hiện trong cuốn từ điển học sinh"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nhiệm vụ chính của phần Kết thúc trong đoạn văn cảm nghĩ về bài thơ là gì?",
            "options": [
                "Nhấn mạnh, khẳng định lại một lần nữa tình cảm, cảm xúc của em đối với bài thơ",
                "Đặt câu hỏi thách đố cho người đọc đoán tác giả là ai",
                "Giới thiệu thêm một bài thơ khác cùng chủ đề để so sánh dài dòng",
                "Viết lời chào tạm biệt thầy cô giáo"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cách viết nào dưới đây giúp đoạn văn biểu cảm về bài thơ sinh động và giàu cảm xúc hơn?",
            "options": [
                "Dùng từ ngữ gợi tả tình cảm, kết hợp các câu cảm và liên tưởng, so sánh hình ảnh độc đáo",
                "Sử dụng thật nhiều số liệu thống kê khô khan về năm xuất bản bài thơ",
                "Chỉ dùng các đại từ xưng hô lịch sự trang nghiêm như các văn bản hành chính",
                "Lặp đi lặp lại một từ duy nhất để bài văn thật dài"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong đoạn văn mẫu của Thanh Thanh, người viết đã bày tỏ cảm xúc về bài thơ nào của Quang Huy?",
            "options": [
                "Tiếng đàn ba-la-lai-ca trên sông Đà",
                "Trước cổng trời",
                "Hạt gạo làng ta",
                "Tranh làng Hồ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Chi tiết nào ở bài thơ 'Tiếng đàn ba-la-lai-ca trên sông Đà' khiến người viết xúc động sâu sắc nhất ở phần cuối bài cảm nghĩ mẫu?",
            "options": [
                "Tình hữu nghị cao đẹp giữa quốc gia Việt - Nga và sự giúp đỡ xây dựng nhà máy điện tỏa sáng muôn nơi",
                "Sự xuất hiện của những chú gấu Bắc Cực trên dòng sông",
                "Hình ảnh những ngọn núi cao chót vót bao quanh lòng hồ",
                "Số lượng xe ủi xe ben đỗ trên bãi cát sông Đà"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ ngữ nào trong câu sau thể hiện tình cảm của tác giả Thanh Thanh: 'Bài thơ tả tiếng đàn thật là hay!'?",
            "options": [
                "thật là hay",
                "Bài thơ",
                "tiếng đàn",
                "tả"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Bài thơ 'Nói với em' được viết bởi tác giả nào?",
            "options": [
                "Vũ Quần Phương",
                "Quang Huy",
                "Trần Đăng Khoa",
                "Tô Hoài"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khổ 1 bài thơ 'Nói với em' khuyên người đọc nhắm mắt để lắng nghe điều gì?",
            "options": [
                "Tiếng chim sâu lích rích trong lá và tiếng chim chìa vôi vừa hót vừa bay",
                "Tiếng mưa rơi lộp bộp bên ngoài hiên nhà",
                "Tiếng sóng vỗ rì rào ngoài bãi biển khơi",
                "Tiếng xe cộ đi lại ồn ào trên đường phố lớn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khổ 2 bài thơ 'Nói với em' gợi mở thế giới tưởng tượng nào khi 'nhắm mắt nghe bà kể chuyện'?",
            "options": [
                "Nhìn thấy bà tiên, chú bé đi hài bảy dặm, cô Tấm hiền lành trong quả thị",
                "Một hành tinh hiện đại đầy phi thuyền không gian và robot",
                "Hình ảnh các cầu thủ bóng đá ghi bàn trên sân cỏ",
                "Hình ảnh những đồi chè xanh mướt mát ở vùng cao Tây Bắc"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Hình ảnh 'tay bồng bế sớm khuya vất vả' ở khổ 3 bài thơ 'Nói với em' gợi lên điều gì?",
            "options": [
                "Công lao dưỡng dục, chăm sóc vô bờ bến và tình thương ấm áp của cha mẹ",
                "Tập tục đi cấy cày bận rộn lúc nửa đêm của người nông dân",
                "Hành động chăm chỉ tập luyện thể dục thể thao của các em nhỏ",
                "Tình yêu thiên nhiên cây cối quanh nhà"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khi viết đoạn văn biểu cảm, nếu viết 'Bài thơ này rất hay và bài thơ này làm em rất thích vì bài thơ này viết rất tốt' thì đã mắc lỗi gì?",
            "options": [
                "Lỗi lặp từ vô lý làm câu văn lủng củng, thiếu tự nhiên",
                "Lỗi viết sai tên tác giả bài thơ",
                "Lỗi viết thiếu dấu chấm cuối câu",
                "Lỗi sử dụng sai từ đồng nghĩa"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Lưu ý nào giúp trình bày đoạn văn đúng quy chuẩn chính tả?",
            "options": [
                "Lùi đầu dòng chữ đầu tiên, viết hoa chữ cái đầu và không xuống dòng tự tiện giữa đoạn",
                "Mỗi câu văn phải viết ở một dòng riêng biệt giống như thơ",
                "Viết hoa toàn bộ tất cả các chữ cái có trong đoạn văn cho rõ",
                "Chỉ dùng dấu phẩy, không được sử dụng dấu chấm kết câu"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Nhận xét nào đúng nhất về vai trò của các từ ngữ cảm xúc trong đoạn văn biểu cảm về bài thơ?",
            "options": [
                "Giúp truyền tải chân thực cảm xúc chân thành, rung động của người viết tới người đọc",
                "Làm tăng độ dài của bài văn để dễ đạt điểm cao hơn",
                "Giúp thay thế hoàn toàn cho việc phân tích các từ ngữ hay trong thơ",
                "Chỉ dùng để trang trí cho đoạn văn thêm sặc sỡ"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// ====== INTERACTIVE ACTIONS ======
window.startWarmupVn94 = function() {
    const title = document.getElementById('warmup-poem-title').value.trim();
    const reason = document.getElementById('warmup-poem-reason').value.trim();
    const fb = document.getElementById('warmup-feedback-94');
    
    if (!title || !reason) {
        alert('Em hãy nhập tên bài thơ và lý do trước nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-green-50', 'text-green-800', 'border-green-300', 'bg-red-50', 'text-red-800', 'border-red-300');
    
    fb.innerHTML = `🌟 **Cảm ơn chia sẻ của em!**<br><br>
    **Nhận xét từ Thầy E:** Bài thơ "${title}" là một tác phẩm rất tuyệt vời! Lý do cảm nhận của em rất chân thành và sâu sắc. Lát nữa em hãy áp dụng những suy nghĩ này vào thực hành tập viết nhé!`;
    fb.className = 'p-5 rounded-3xl text-center font-bold text-lg mt-2 shadow-inner border-2 bg-green-50 border-green-300 text-green-800 animate-fade-in';
};

window.checkPartA_Vn94 = function() {
    const r1 = document.getElementById('vn94-c1-part1-range').value;
    const i1 = document.getElementById('vn94-c1-part1-idea').value;
    const r2 = document.getElementById('vn94-c1-part2-range').value;
    const i2 = document.getElementById('vn94-c1-part2-idea').value;
    const r3 = document.getElementById('vn94-c1-part3-range').value;
    const i3 = document.getElementById('vn94-c1-part3-idea').value;
    const fb = document.getElementById('fb-parta');
    
    if (!r1 || !i1 || !r2 || !i2 || !r3 || !i3) {
        alert('Em hãy chọn đầy đủ giới hạn và ý chính cho cả 3 phần nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-green-50', 'text-green-800', 'border-green-300', 'bg-red-50', 'text-red-800', 'border-red-300');
    
    if (r1 === 'correct' && i1 === 'correct' && r2 === 'correct' && i2 === 'correct' && r3 === 'correct' && i3 === 'correct') {
        fb.innerHTML = `🎉 **Chính xác 100%! Em rất giỏi!**<br><br>
        - **Mở đầu**: Từ đầu đến "... ấn tượng đẹp" ➔ Giới thiệu tên bài thơ, tác giả và cảm xúc bao quát.<br>
        - **Triển khai**: Từ "Bài thơ gợi lên..." đến "... để cuộc sống tươi đẹp hơn" ➔ Nêu chi tiết cái hay, cái đẹp về nội dung và nghệ thuật của bài thơ.<br>
        - **Kết thúc**: Từ "Xúc động biết mấy!" đến hết ➔ Khẳng định lại tình cảm, cảm xúc của người viết.`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-green-50 border-green-300 text-green-800 animate-fade-in';
    } else {
        fb.innerHTML = '⚠️ **Chưa chính xác rồi!** Em hãy soát lại kỹ giới hạn từng phần (câu mở đầu, phần nội dung chi tiết ở giữa và câu cảm thán/hứa hẹn cuối bài) và chọn lại nhé!';
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-red-50 border-red-300 text-red-800 animate-fade-in';
    }
};

window.checkPartB_Vn94 = function() {
    const val = document.getElementById('vn94-c1-flower').value.trim().toLowerCase();
    const fb = document.getElementById('fb-partb');
    
    if (!val) {
        alert('Em hãy nhập ý kiến cho bông hoa đỏ nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-green-50', 'text-green-800', 'border-green-300', 'bg-red-50', 'text-red-800', 'border-red-300');
    
    // So sánh tương đối từ khóa tình hữu nghị
    const keywords = ['hữu nghị', 'giúp đỡ', 'nga', 'quốc tế', 'hoà bình', 'hòa bình', 'ánh sáng', 'xây dựng'];
    let isCorrect = false;
    for (let kw of keywords) {
        if (val.includes(kw)) {
            isCorrect = true;
            break;
        }
    }
    
    if (isCorrect) {
        fb.innerHTML = `🎉 **Tuyệt vời! Ý của em hoàn toàn đúng!**<br><br>
        Bông hoa màu đỏ 🌹 biểu thị cho: **Tình hữu nghị cao đẹp giữa hai nước Việt - Nga** cũng như sự giúp đỡ đầy cảm động của những người bạn Liên Xô/Nga trong công cuộc xây dựng công trình thủy điện sông Đà.`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-green-50 border-green-300 text-green-800 animate-fade-in';
    } else {
        fb.innerHTML = '⚠️ **Gần đúng rồi!** Em hãy chú ý từ khóa thể hiện mối quan hệ hợp tác giúp đỡ giữa các đất nước (gợi ý trong đoạn văn: "tình hữu nghị cao đẹp giữa các quốc gia") để bổ sung nhé!';
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-red-50 border-red-300 text-red-800';
    }
};

window.checkPartC_Vn94 = function() {
    const checked = document.querySelectorAll('input[name="vn94-c"]:checked');
    const fb = document.getElementById('fb-partc');
    fb.classList.remove('hidden', 'bg-green-50', 'text-green-800', 'border-green-300', 'bg-red-50', 'text-red-800', 'border-red-300');
    
    const checkedValues = Array.from(checked).map(c => c.value);
    
    // Đáp án đúng biểu lộ tình cảm: 1, 2, 4, 5 (không phải 3 và 6 vì đó là miêu tả cảnh vật khách quan)
    const isCorrect = checkedValues.includes('1') && 
                      checkedValues.includes('2') && 
                      checkedValues.includes('4') && 
                      checkedValues.includes('5') && 
                      !checkedValues.includes('3') && 
                      !checkedValues.includes('6');
                      
    if (isCorrect) {
        fb.innerHTML = `🎉 **Chính xác! Em lựa chọn rất tinh tế!**<br><br>
        Các từ ngữ, câu văn biểu cảm gồm:<br>
        - *"để lại trong tôi những ấn tượng đẹp"*<br>
        - *"tiếng đàn thật là hay!"* (câu cảm)<br>
        - *"Xúc động biết mấy!"* (câu cảm)<br>
        - *"Cảm ơn nhà thơ Quang Huy..."* (thể hiện sự trân trọng, cảm phục)`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-green-50 border-green-300 text-green-800 animate-fade-in';
    } else {
        fb.innerHTML = '⚠️ **Chưa đúng rồi!** Em hãy bỏ chọn những câu văn chỉ thuần túy miêu tả cảnh vật ("xe ủi, xe ben sóng vai nhau...", "tháp khoan nhô lên trời...") và chỉ giữ lại những từ ngữ bộc lộ trực tiếp tình cảm người viết nhé!';
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-red-50 border-red-300 text-red-800 animate-fade-in';
    }
};

window.checkPart2_Vn94 = function() {
    const val = document.getElementById('vn94-c2-flower').value.trim().toLowerCase();
    const fb = document.getElementById('fb-part2');
    if (!val) {
        alert('Em hãy điền lưu ý nghệ thuật cho bông hoa đỏ nhé!');
        return;
    }
    fb.classList.remove('hidden', 'bg-green-50', 'text-green-800', 'border-green-300', 'bg-red-50', 'text-red-800', 'border-red-300');
    
    // Từ khóa liên quan đến nghệ thuật: so sánh, tu từ, nhân hóa, nhân hoá, hình ảnh, liên tưởng, điệp từ...
    const keywords = ['so sánh', 'nhân hóa', 'nhân hoá', 'tu từ', 'nghệ thuật', 'liên tưởng', 'hình ảnh', 'điệp từ', 'điệp ngữ'];
    let isCorrect = false;
    for (let kw of keywords) {
        if (val.includes(kw)) {
            isCorrect = true;
            break;
        }
    }
    
    if (isCorrect) {
        fb.innerHTML = `🎉 **Rất chính xác! Cảm nhận của em rất đúng!**<br><br>
        Điểm lưu ý thứ ba là: **Sử dụng các biện pháp tu từ, từ ngữ so sánh gợi tả hoặc các hình ảnh liên tưởng độc đáo** để bộc lộ tình cảm, làm nổi bật cái hay của bài thơ.`;
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-green-50 border-green-300 text-green-800 animate-fade-in';
    } else {
        fb.innerHTML = '⚠️ **Gợi ý:** Để bày tỏ cảm xúc về bài thơ ngoài câu cảm và từ ngữ trực tiếp, ta có thể đề cập đến việc sử dụng các biện pháp nghệ thuật nào? (So sánh, nhân hóa, liên tưởng...). Em hãy bổ sung lại nhé!';
        fb.className = 'p-5 rounded-3xl border-2 font-bold text-lg text-center max-w-4xl mx-auto shadow-inner bg-red-50 border-red-300 text-red-800 animate-fade-in';
    }
};

window.switchModeVn94 = function(mode) {
    const btnRead = document.getElementById('btn-vn94-read');
    const btnMemo = document.getElementById('btn-vn94-memo');
    const tip = document.getElementById('memo-tip');
    
    const wordIds = ['m1','m2','m3','m4','m5','m6','m7','m8','m9','m10','m11','m12'];
    
    if (mode === 'read') {
        btnRead.className = "px-4 py-2 bg-blue-700 text-white font-black text-sm rounded-xl shadow transition-all";
        btnMemo.className = "px-4 py-2 bg-white text-blue-700 border border-blue-200 font-bold text-sm rounded-xl transition-all";
        tip.classList.add('hidden');
        
        // Hiện hết chữ, bỏ màu nền
        wordIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.remove('bg-blue-600', 'text-blue-600');
                el.classList.add('text-blue-950');
                // Khôi phục chữ gốc
                if (id === 'm1') el.innerText = 'vườn';
                if (id === 'm2') el.innerText = 'tiếng';
                if (id === 'm3') el.innerText = 'lá';
                if (id === 'm4') el.innerText = 'bay';
                if (id === 'm5') el.innerText = 'kể';
                if (id === 'm6') el.innerText = 'tiên';
                if (id === 'm7') el.innerText = 'dặm';
                if (id === 'm8') el.innerText = 'Tấm';
                if (id === 'm9') el.innerText = 'cha';
                if (id === 'm10') el.innerText = 'lớn';
                if (id === 'm11') el.innerText = 'vả';
                if (id === 'm12') el.innerText = 'mở';
            }
        });
    } else {
        btnMemo.className = "px-4 py-2 bg-blue-700 text-white font-black text-sm rounded-xl shadow transition-all";
        btnRead.className = "px-4 py-2 bg-white text-blue-700 border border-blue-200 font-bold text-sm rounded-xl transition-all";
        tip.classList.remove('hidden');
        
        // Ẩn chữ bằng cách chuyển màu trùng màu nền xanh dương
        wordIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.add('bg-blue-600', 'text-blue-600');
            }
        });
    }
};

window.revealWord = function(id, originalText) {
    const el = document.getElementById(id);
    if (el && el.classList.contains('bg-blue-600')) {
        el.classList.remove('bg-blue-600', 'text-blue-600');
        el.classList.add('text-blue-950', 'bg-yellow-100');
        setTimeout(() => {
            el.classList.remove('bg-yellow-100');
        }, 1500);
    }
};

// Ghi âm giả lập chất lượng cao
let isRecordingVn94 = false;
window.toggleRecordVn94 = function() {
    const btn = document.getElementById('record-btn-vn94');
    const status = document.getElementById('record-status-vn94');
    const wave = document.getElementById('audio-wave-vn94');
    
    if (!isRecordingVn94) {
        isRecordingVn94 = true;
        btn.classList.replace('bg-red-500', 'bg-slate-700');
        btn.innerHTML = '⏹️';
        status.innerText = "Đang ghi âm giọng nói của em...";
        status.className = "font-black text-lg text-red-500 animate-pulse";
        wave.classList.remove('hidden');
    } else {
        isRecordingVn94 = false;
        btn.classList.replace('bg-slate-700', 'bg-red-500');
        btn.innerHTML = '🎤';
        status.innerText = "Đã lưu bản ghi âm! Bấm lại để nói lại.";
        status.className = "font-black text-lg text-green-600";
        wave.classList.add('hidden');
        
        UI.showToast("Đã lưu tệp ghi âm cảm nghĩ thành công!", "success", 3000);
    }
};

window.saveArtShareVn94 = function() {
    const title = document.getElementById('vn94-art-title').value.trim();
    const comment = document.getElementById('vn94-art-comment').value.trim();
    if (!title || !comment) {
        alert('Em hãy nhập tên nghệ sĩ/tác phẩm và cảm nghĩ trước nhé!');
        return;
    }
    UI.showToast("Đã gửi cảm nghĩ câu chuyện nghệ thuật thành công!", "success", 3000);
    document.getElementById('vn94-art-title').value = "";
    document.getElementById('vn94-art-comment').value = "";
};
