export const lesson3 = {
    "topic": "Tiếng Việt 5",
    "week": "1",
    "period": "3",
    "title": "VIẾT: TÌM HIỂU CÁCH VIẾT BÀI VĂN KỂ CHUYỆN SÁNG TẠO",
    "desc": "Bài học giúp học sinh nắm được cấu trúc bài văn kể chuyện sáng tạo, nhận biết và thực hành các cách sáng tạo thêm chi tiết (tả cảnh, lời thoại) hoặc thay đổi kết thúc câu chuyện.",
    "subject": "Viết",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-emerald-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-emerald-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-emerald-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-emerald-800 font-bold text-lg md:text-xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Hiểu được cách thức bổ sung các chi tiết sáng tạo (tả cảnh, thêm lời thoại) vào bài văn kể chuyện.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Biết cấu trúc 3 phần (Mở bài, Thân bài, Kết bài) của một bài văn kể chuyện sáng tạo.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-emerald-900 font-black">•</span>
                Nhận biết các cách sáng tạo thêm chi tiết mà không làm thay đổi nội dung chính và ý nghĩa của truyện.
            </li>
        </ul>
    </div>

    <!-- 📖 Đọc bài văn kể chuyện sáng tạo -->
    <div class="bg-white p-6 md:p-10 rounded-[48px] border border-emerald-100 shadow-xl relative overflow-hidden">
        <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
        
        <div class="space-y-8 relative z-10">
            <!-- Bài văn mẫu -->
            <div class="bg-emerald-50/20 rounded-[28px] p-6 md:p-8 shadow-inner border border-emerald-100/50">
                <div class="flex justify-between items-center mb-4 border-b border-emerald-100 pb-3">
                    <span class="text-emerald-900 font-black text-xl flex items-center gap-2">
                        <span>📖</span> Bài văn kể lại "Một chuyến phiêu lưu"
                    </span>
                    <button onclick="playSegmentAudio('assets/audio/tiengviet/3/mot_chuyen_phieu_luu_full.mp3')" class="p-2 bg-emerald-600 hover:bg-emerald-600 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc bài mẫu">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                    </button>
                </div>
 
                <div class="serif-font text-gray-800 text-lg md:text-2xl leading-relaxed text-justify space-y-6">
                    <!-- Phần 1 -->
                    <div onclick="playSegmentAudio('assets/audio/tiengviet/3/phan1.mp3')" class="cursor-pointer hover:bg-emerald-50/40 hover:text-emerald-800 p-3 rounded-2xl transition-all duration-23" title="Nhấn để nghe đọc đoạn 1">
                        <p class="indent-8">Nếu hay đọc truyện phiêu lưu, có lẽ bạn sẽ thích câu chuyện <em>Một chuyến phiêu lưu</em> của tác giả Nguyễn Thị Kim Hoà.</p>
                    </div>
                    
                    <!-- Phần 2 -->
                    <div onclick="playSegmentAudio('assets/audio/tiengviet/3/phan2.mp3')" class="cursor-pointer hover:bg-emerald-50/40 hover:text-emerald-800 p-3 rounded-2xl transition-all duration-23" title="Nhấn để nghe đọc đoạn 2">
                        <p class="indent-8">Chuyện kể rằng, một hôm, mèo nhép rủ chuột xù sang sông chơi, nhưng chuột xù từ chối. <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500 text-white text-sm font-black mx-1 shadow-sm font-sans indent-0">A</span> Mèo nhép khăng khăng muốn đi nên chuột đành đồng ý vì không nỡ để bạn mạo hiểm một mình. Hai bạn nhờ bác ngựa đưa sang sông.</p>
                    </div>
                    
                    <!-- Phần 3 -->
                    <div onclick="playSegmentAudio('assets/audio/tiengviet/3/phan3.mp3')" class="cursor-pointer hover:bg-emerald-50/40 hover:text-emerald-800 p-3 rounded-2xl transition-all duration-23" title="Nhấn để nghe đọc đoạn 3">
                        <p class="indent-8">Đồng cỏ bên kia sông quả là một thế giới xanh tuyệt đẹp! <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white text-sm font-black mx-1 shadow-sm font-sans indent-0">B</span> Thích chí, mèo nhép nhảy nhót khắp nơi, mặc dù chuột xù đã cảnh báo rằng trong bụi cỏ có hang rắn.</p>
                    </div>
                    
                    <!-- Phần 4 -->
                    <div onclick="playSegmentAudio('assets/audio/tiengviet/3/phan4.mp3')" class="cursor-pointer hover:bg-emerald-50/40 hover:text-emerald-800 p-3 rounded-2xl transition-all duration-23" title="Nhấn để nghe đọc đoạn 4">
                        <p class="indent-8">Y như chuột lo ngại, rắn bị phá giấc ngủ, tức giận quăng mình về phía mèo nhép. Chuột xù vội nhảy từ mỏm đá xuống mình rắn để cứu bạn. Rắn tối sầm mặt mũi, còn chuột té văng ra. May thay, bác ngựa kịp thời chạy đến cứu hai bạn.</p>
                    </div>
                    
                    <!-- Phần 5 -->
                    <div onclick="playSegmentAudio('assets/audio/tiengviet/3/phan5.mp3')" class="cursor-pointer hover:bg-emerald-50/40 hover:text-emerald-800 p-3 rounded-2xl transition-all duration-23" title="Nhấn để nghe đọc đoạn 5">
                        <div class="space-y-4">
                            <p class="indent-8">Trên lưng bác ngựa trở về, thấy chuột xù nằm thiêm thiếp, mèo nhép cứ sụt sịt, nước mắt rơi ướt lông chuột xù. Mèo không để ý, miệng chuột đang mím lại do cố nén cười.</p>
                            <p class="indent-8">Câu chuyện thật thú vị và hài hước. Mèo nhép đã có bài học quý giá về việc phải biết lắng nghe người khác để giữ an toàn cho bản thân và những người xung quanh.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Các chi tiết sáng tạo A, B -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Chi tiết sáng tạo A -->
                <div class="bg-amber-50/80 p-6 rounded-[28px] border-2 border-amber-100 shadow-sm relative">
                    <div class="flex justify-between items-center mb-3">
                        <span class="flex items-center gap-2">
                            <span class="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-sm">A</span>
                            <span class="font-black text-amber-600 text-base md:text-lg">Chi tiết sáng tạo A</span>
                        </span>
                        <button onclick="playSegmentAudio('assets/audio/tiengviet/3/sang_tao_a.mp3')" class="p-2 bg-amber-500 hover:bg-amber-500 text-amber-600 rounded-full transition-all flex items-center justify-center shadow-sm" title="Nghe chi tiết A">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="serif-font text-amber-600 text-lg leading-relaxed bg-white/70 p-4 rounded-xl border border-amber-100">
                        <p class="font-bold text-gray-800 mb-2">Chuột xù nói:</p>
                        <p class="italic">– Bác ngựa bảo nguy hiểm lắm.</p>
                        <p class="font-bold text-gray-800 my-2">Mèo nhép hứ một cái:</p>
                        <p class="italic">– Cậu không đi thì thôi, tớ đi một mình.</p>
                    </div>
                </div>

                <!-- Chi tiết sáng tạo B -->
                <div class="bg-emerald-50/80 p-6 rounded-[28px] border-2 border-emerald-100 shadow-sm relative">
                    <div class="flex justify-between items-center mb-3">
                        <span class="flex items-center gap-2">
                            <span class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-sm">B</span>
                            <span class="font-black text-emerald-800 text-base md:text-lg">Chi tiết sáng tạo B</span>
                        </span>
                        <button onclick="playSegmentAudio('assets/audio/tiengviet/3/sang_tao_b.mp3')" class="p-2 bg-emerald-600 hover:bg-emerald-600 text-emerald-800 rounded-full transition-all flex items-center justify-center shadow-sm" title="Nghe chi tiết B">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="serif-font text-emerald-800 text-lg leading-relaxed bg-white/70 p-4 rounded-xl border border-emerald-100 italic">
                        "Cỏ phủ kín cánh đồng như một tấm thảm xanh mát. Cây cối cũng xanh mướt như ngày nào cũng được gội rửa. Không gian ngai ngái mùi cỏ thơm, thật dễ chịu!"
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 💡 Phần Ghi nhớ -->
    <div class="p-6 md:p-8 rounded-[36px] bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        <h4 class="text-xl font-black uppercase tracking-widest mb-4 opacity-90 flex items-center gap-2">
            <span>💡</span> Ghi nhớ bài học
        </h4>
        <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4">
            <p class="text-lg md:text-xl font-bold leading-relaxed">
                1. Trong bài văn kể chuyện sáng tạo, người viết có thể <strong>thêm chi tiết</strong> (thêm lời thoại, thêm tả cảnh, tả ngoại hình, hoạt động,...) hoặc <strong>thay đổi cách kết thúc</strong> mà không làm thay đổi nội dung chính và ý nghĩa của câu chuyện.
            </p>
            <p class="text-lg md:text-xl font-bold leading-relaxed">
                2. Cấu trúc bài văn gồm 3 phần:
            </p>
            <ul class="list-disc ml-6 space-y-2 text-lg md:text-xl font-bold">
                <li>Mở bài: Giới thiệu câu chuyện.</li>
                <li>Thân bài: Kể lại câu chuyện với những chi tiết sáng tạo.</li>
                <li>Kết bài: Nêu suy nghĩ, cảm xúc về câu chuyện.</li>
            </ul>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    
    <!-- PHẦN 1: BÀI TẬP TƯƠNG TÁC (CÂU 1 SGK) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/20 rounded-[32px] space-y-8">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Thực hiện yêu cầu về bài văn mẫu</h3>
            </div>

            <!-- Câu a: Bài văn trên kể lại câu chuyện gì? -->
            <div class="bg-white p-6 rounded-2xl border-2 border-emerald-100 shadow-sm space-y-4">
                <h4 class="text-xl font-bold text-gray-800 flex items-start gap-2">
                    <span class="p-1 bg-emerald-600 text-emerald-800 rounded text-sm font-black">a</span>
                    Bài văn trên kể lại câu chuyện nào?
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-base md:text-lg">
                    <button onclick="selectOptionVn3('a', 0)" id="btn-vn3-a-0" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-emerald-400 hover:bg-emerald-50/30 transition-all text-gray-800">
                        A. Hai chú dế phiêu lưu ký
                    </button>
                    <button onclick="selectOptionVn3('a', 1)" id="btn-vn3-a-1" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-emerald-400 hover:bg-emerald-50/30 transition-all text-gray-800">
                        B. Một chuyến phiêu lưu
                    </button>
                    <button onclick="selectOptionVn3('a', 2)" id="btn-vn3-a-2" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-emerald-400 hover:bg-emerald-50/30 transition-all text-gray-800">
                        C. Tình bạn của mèo và chuột
                    </button>
                </div>
                <div id="feedback-vn3-a" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>

            <!-- Câu b: Tìm các phần của bài văn và nêu ý chính -->
            <div class="bg-white p-6 rounded-2xl border-2 border-emerald-100 shadow-sm space-y-4">
                <h4 class="text-xl font-bold text-gray-800 flex items-start gap-2">
                    <span class="p-1 bg-emerald-600 text-emerald-800 rounded text-sm font-black">b</span>
                    Ghép phần của bài văn với ý chính tương ứng:
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Phần Mở bài -->
                    <div class="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-2xl border border-emerald-100 flex flex-col gap-2">
                        <span class="font-black text-emerald-800 text-lg">📌 Mở bài</span>
                        <select id="sel-mb" class="p-3 bg-white border border-gray-100 rounded-xl font-bold text-gray-800 outline-none">
                            <option value="">-- Chọn ý chính --</option>
                            <option value="kể lại">Kể lại câu chuyện với các chi tiết sáng tạo</option>
                            <option value="giới thiệu">Giới thiệu câu chuyện</option>
                            <option value="suy nghĩ">Nêu suy nghĩ, cảm xúc về câu chuyện</option>
                        </select>
                    </div>
                    <!-- Phần Thân bài -->
                    <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-2xl border border-blue-100 flex flex-col gap-2">
                        <span class="font-black text-blue-600 text-lg">📌 Thân bài</span>
                        <select id="sel-tb" class="p-3 bg-white border border-gray-100 rounded-xl font-bold text-gray-800 outline-none">
                            <option value="">-- Chọn ý chính --</option>
                            <option value="kể lại">Kể lại câu chuyện với các chi tiết sáng tạo</option>
                            <option value="giới thiệu">Giới thiệu câu chuyện</option>
                            <option value="suy nghĩ">Nêu suy nghĩ, cảm xúc về câu chuyện</option>
                        </select>
                    </div>
                    <!-- Phần Kết bài -->
                    <div class="bg-gradient-to-br from-amber-50 to-yellow-50 p-5 rounded-2xl border border-amber-100 flex flex-col gap-2">
                        <span class="font-black text-amber-600 text-lg">📌 Kết bài</span>
                        <select id="sel-kb" class="p-3 bg-white border border-gray-100 rounded-xl font-bold text-gray-800 outline-none">
                            <option value="">-- Chọn ý chính --</option>
                            <option value="kể lại">Kể lại câu chuyện với các chi tiết sáng tạo</option>
                            <option value="giới thiệu">Giới thiệu câu chuyện</option>
                            <option value="suy nghĩ">Nêu suy nghĩ, cảm xúc về câu chuyện</option>
                        </select>
                    </div>
                </div>
                <div class="flex justify-end mt-2">
                    <button onclick="checkPartMatches()" class="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-600 text-white font-black rounded-xl shadow-sm transition-all text-base">KIỂM TRA CÂU B</button>
                </div>
                <div id="feedback-vn3-b" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>

            <!-- Câu c: Các chi tiết sáng tạo A, B được bổ sung vào phần nào? -->
            <div class="bg-white p-6 rounded-2xl border-2 border-emerald-100 shadow-sm space-y-4">
                <h4 class="text-xl font-bold text-gray-800 flex items-start gap-2">
                    <span class="p-1 bg-emerald-600 text-emerald-800 rounded text-sm font-black">c</span>
                    Các chi tiết sáng tạo A, B được bổ sung vào phần nào của bài văn?
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-base md:text-lg">
                    <button onclick="selectOptionVn3('c', 0)" id="btn-vn3-c-0" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-emerald-400 hover:bg-emerald-50/30 transition-all text-gray-800">
                        A. Mở bài
                    </button>
                    <button onclick="selectOptionVn3('c', 1)" id="btn-vn3-c-1" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-emerald-400 hover:bg-emerald-50/30 transition-all text-gray-800">
                        B. Thân bài
                    </button>
                    <button onclick="selectOptionVn3('c', 2)" id="btn-vn3-c-2" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-emerald-400 hover:bg-emerald-50/30 transition-all text-gray-800">
                        C. Kết bài
                    </button>
                </div>
                <div id="feedback-vn3-c" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>

            <!-- Câu d: Nối chi tiết sáng tạo A, B với hình thức phù hợp -->
            <div class="bg-white p-6 rounded-2xl border-2 border-emerald-100 shadow-sm space-y-4">
                <h4 class="text-xl font-bold text-gray-800 flex items-start gap-2">
                    <span class="p-1 bg-emerald-600 text-emerald-800 rounded text-sm font-black">d</span>
                    Tìm hình thức phù hợp với mỗi chi tiết sáng tạo A, B:
                </h4>
                <p class="text-base text-gray-800 italic">👉 Hướng dẫn: Nhấp chọn một ô ở cột A rồi nhấp chọn định nghĩa đúng ở cột B để kết nối.</p>
                
                <div id="matching-board-vn3" class="grid grid-cols-1 md:grid-cols-2 gap-8 relative select-none">
                    <!-- SVG Canvas for lines -->
                    <svg id="svg-connections-vn3" class="absolute inset-0 w-full h-full pointer-events-none z-10" style="min-height: 13px;"></svg>
                    
                    <!-- Cột Thẻ sáng tạo -->
                    <div class="flex flex-col gap-4" id="col-vn3-A">
                        <button onclick="selectNodeVn3('A', 'the-A')" id="node-vn3-A-the-A" class="p-5 bg-white border-4 border-gray-100 rounded-xl font-black text-lg text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98">
                            Chi tiết sáng tạo A
                        </button>
                        <button onclick="selectNodeVn3('A', 'the-B')" id="node-vn3-A-the-B" class="p-5 bg-white border-4 border-gray-100 rounded-xl font-black text-lg text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98">
                            Chi tiết sáng tạo B
                        </button>
                    </div>

                    <!-- Cột Hình thức -->
                    <div class="flex flex-col gap-4" id="col-vn3-B">
                        <button onclick="selectNodeVn3('B', 'ta-canh')" id="node-vn3-B-ta-canh" class="p-5 bg-white border-4 border-gray-100 rounded-xl font-bold text-lg text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98">
                            Sáng tạo thêm chi tiết tả cảnh.
                        </button>
                        <button onclick="selectNodeVn3('B', 'thoai')" id="node-vn3-B-thoai" class="p-5 bg-white border-4 border-gray-100 rounded-xl font-bold text-lg text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98">
                            Sáng tạo thêm lời thoại cho nhân vật.
                        </button>
                    </div>
                </div>

                <div class="flex justify-end gap-3 mt-4">
                    <button onclick="resetMatchingVn3()" class="px-6 py-2.5 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all text-base">ĐẶT LẠI</button>
                    <button onclick="checkMatchingVn3()" class="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-600 text-white font-black rounded-xl shadow-md transition-all text-base">KIỂM TRA CÂU D</button>
                </div>
                <div id="feedback-vn3-d" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>

            <!-- Tổng kết & Nộp bài 1 -->
            <div class="pt-6 border-t border-emerald-100 flex justify-between items-center">
                <span class="text-sm font-bold text-gray-800">Hoàn thành bài tập 1 để nộp điểm</span>
                <button onclick="submitVn3Ex1()" class="px-8 py-3 bg-gray-800 text-white font-black rounded-2xl shadow-md hover:bg-black transition-all flex items-center gap-2">
                    <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                    <span>NỘP BÀI 1</span>
                </button>
            </div>
        </div>
    </section>

    <!-- PHẦN 2: BÀI TẬP 2 SGK (THAY ĐOẠN ĐOẠN NÀO) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/20 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Chọn vị trí thay thế của đoạn văn</h3>
            </div>

            <div class="bg-white p-6 rounded-2xl border-2 border-emerald-100 shadow-sm space-y-4">
                <p class="font-bold text-gray-800 text-base md:text-lg">📖 Đọc đoạn văn sau:</p>
                <div class="serif-font text-gray-800 text-lg md:text-xl p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 italic">
                    "Chuột xù lổm cồm bò dậy, thấy mèo nhép vẫn sợ hãi, run lập cập. Một lúc lâu, mèo nhép mới xấu hổ bảo:
                    – Bờ sông bên nhà mình cũng đẹp lắm. Chúng mình về thôi.
                    Bác ngựa và chuột xù cười phá lên. Mèo nhép cũng bẽn lẽn cười."
                </div>
                
                <h4 class="text-lg md:text-xl font-bold text-gray-800 pt-2">Theo em, đoạn trên có thể dùng để thay thế cho đoạn nào của câu chuyện?</h4>
                
                <div class="grid grid-cols-1 gap-3 text-base md:text-lg">
                    <button onclick="selectOptionVn3('ex2', 0)" id="btn-vn3-ex2-0" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-emerald-400 hover:bg-emerald-50/30 transition-all text-gray-800">
                        A. Đoạn mở đầu giới thiệu về hai bạn nhỏ mèo và chuột.
                    </button>
                    <button onclick="selectOptionVn3('ex2', 1)" id="btn-vn3-ex2-1" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-emerald-400 hover:bg-emerald-50/30 transition-all text-gray-800">
                        B. Đoạn thân bài kể về chi tiết chuột xù và mèo nhép gặp rắn dữ.
                    </button>
                    <button onclick="selectOptionVn3('ex2', 2)" id="btn-vn3-ex2-2" class="p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-emerald-400 hover:bg-emerald-50/30 transition-all text-gray-800">
                        C. Đoạn kết thúc (Có thể thay thế cách kết thúc của truyện bằng một đoạn hài hước, vui vẻ).
                    </button>
                </div>
                <div id="feedback-vn3-ex2" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>

            <div class="flex justify-end pt-4">
                <button onclick="submitVn3Ex2()" class="px-8 py-3 bg-gray-800 text-white font-black rounded-2xl shadow-md hover:bg-black transition-all flex items-center gap-2">
                    <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                    <span>NỘP BÀI 2</span>
                </button>
            </div>
        </div>
    </section>

    <!-- PHẦN 3: BÀI TẬP 3 SGK (CÁC CÁCH VẬN DỤNG) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-emerald-50">
        <div class="p-6 md:p-8 bg-emerald-50/20 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">3</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-800">Những cách vận dụng để viết bài văn kể chuyện sáng tạo</h3>
            </div>

            <div class="bg-white p-6 rounded-2xl border-2 border-emerald-100 shadow-sm space-y-4">
                <h4 class="text-lg md:text-xl font-bold text-gray-800">Chọn tất cả các cách em có thể vận dụng để sáng tạo bài văn (Chọn nhiều đáp án):</h4>
                
                <div class="grid grid-cols-1 gap-3 text-base md:text-lg" id="vn3-ex3-choices">
                    <label class="flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all cursor-pointer">
                        <input type="checkbox" value="0" class="w-6 h-6 text-emerald-800 rounded focus:ring-emerald-600 border-gray-100">
                        <span>A. Thêm chi tiết tả ngoại hình và hoạt động của nhân vật.</span>
                    </label>
                    <label class="flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all cursor-pointer">
                        <input type="checkbox" value="1" class="w-6 h-6 text-emerald-800 rounded focus:ring-emerald-600 border-gray-100">
                        <span>B. Thay đổi hoàn toàn cốt truyện làm câu chuyện không còn giữ nguyên ý nghĩa ban đầu.</span>
                    </label>
                    <label class="flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all cursor-pointer">
                        <input type="checkbox" value="2" class="w-6 h-6 text-emerald-800 rounded focus:ring-emerald-600 border-gray-100">
                        <span>C. Thay đổi cách kết thúc của câu chuyện.</span>
                    </label>
                    <label class="flex items-center gap-4 p-4 border-2 border-gray-100 rounded-xl font-bold text-gray-800 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all cursor-pointer">
                        <input type="checkbox" value="3" class="w-6 h-6 text-emerald-800 rounded focus:ring-emerald-600 border-gray-100">
                        <span>D. Tưởng tượng mình đang tham gia vào câu chuyện để sáng tạo thêm chi tiết nhìn, nghe, chạm vào các sự vật.</span>
                    </label>
                </div>
                
                <div class="flex justify-end gap-3 pt-4">
                    <button onclick="checkVong3Ex3()" class="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-600 text-white font-black rounded-xl shadow-sm transition-all text-base">KIỂM TRA CÂU 3</button>
                    <button onclick="submitVn3Ex3()" class="px-8 py-3 bg-gray-800 text-white font-black rounded-2xl shadow-md hover:bg-black transition-all flex items-center gap-2">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-900 font-black text-xs shadow-sm">E</div>
                        <span>NỘP BÀI 3</span>
                    </button>
                </div>
                <div id="feedback-vn3-ex3" class="hidden text-lg font-bold p-3 rounded-xl"></div>
            </div>
        </div>
    </section>

    <!-- HOÀN THÀNH TOÀN BỘ BÀI HỌC -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn3Global()" class="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-emerald-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Thế nào là viết bài văn kể chuyện sáng tạo?",
            "options": [
                "Là thay đổi toàn bộ nội dung cốt truyện khiến không ai nhận ra câu chuyện gốc nữa.",
                "Là thêm các chi tiết lời thoại, tả cảnh, tả nhân vật hoặc thay đổi kết thúc mà vẫn giữ ý chính.",
                "Là chép lại nguyên văn câu chuyện trong sách giáo khoa không thay đổi chữ nào.",
                "Là tự nghĩ ra một câu chuyện hoàn toàn mới không liên quan gì đến truyện gốc."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong bài văn kể chuyện sáng tạo, phần Mở bài có nhiệm vụ gì?",
            "options": [
                "Kể lại toàn bộ diễn biến câu chuyện.",
                "Nêu suy nghĩ, tình cảm của em đối với câu chuyện.",
                "Giới thiệu câu chuyện định kể.",
                "Miêu tả chi tiết ngoại hình của các nhân vật."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Phần Thân bài của bài văn kể chuyện sáng tạo thực hiện việc gì?",
            "options": [
                "Giới thiệu câu chuyện định kể.",
                "Kể lại câu chuyện với những chi tiết sáng tạo thêm.",
                "Chỉ nêu suy nghĩ, cảm xúc cá nhân.",
                "Kêu gọi mọi người đọc truyện."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần Kết bài của bài văn kể chuyện sáng tạo có nhiệm vụ gì?",
            "options": [
                "Nêu suy nghĩ, cảm xúc của em về câu chuyện.",
                "Kể lại chi tiết cao trào của truyện.",
                "Thêm các lời thoại hài hước cho các nhân vật.",
                "Giới thiệu một câu chuyện mới."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cách sáng tạo nào được thể hiện qua chi tiết 'Chuột xù nói: – Bác ngựa bảo nguy hiểm lắm...'?",
            "options": [
                "Sáng tạo thêm chi tiết tả cảnh thiên nhiên.",
                "Sáng tạo thêm lời thoại cho nhân vật.",
                "Thay đổi phần kết thúc của truyện.",
                "Sáng tạo thêm ngoại hình nhân vật."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Chi tiết tả cỏ phủ kín cánh đồng như một tấm thảm xanh mát thuộc cách sáng tạo nào?",
            "options": [
                "Thêm lời thoại cho nhân vật.",
                "Sáng tạo thêm chi tiết tả cảnh.",
                "Thay đổi phần mở đầu truyện.",
                "Thêm hoạt động của nhân vật."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Việc thêm các chi tiết sáng tạo cần lưu ý điều gì quan trọng nhất?",
            "options": [
                "Phải làm câu chuyện dài gấp ba lần truyện cũ.",
                "Không làm thay đổi nội dung chính và ý nghĩa của câu chuyện.",
                "Phải đổi tên tất cả nhân vật trong truyện.",
                "Phải biến câu chuyện buồn thành truyện cười."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong bài văn mẫu, ai là người rủ chuột xù sang sông chơi?",
            "options": [
                "Bác ngựa",
                "Chuột xù",
                "Mèo nhép",
                "Bác rắn"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Mèo nhép đã nhận được bài học gì sau chuyến phiêu lưu gặp rắn?",
            "options": [
                "Phải biết chăn trâu và bảo vệ đồng cỏ.",
                "Phải biết lắng nghe người khác để giữ an toàn cho mình.",
                "Không được đi đùa nghịch dưới suối.",
                "Phải luôn mang theo sỏi lấp lánh khi đi chơi."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Học sinh có thể đóng vai nhân vật trong truyện để kể lại theo cách nào?",
            "options": [
                "Tưởng tượng mình tham gia vào truyện và viết ở ngôi thứ nhất 'tôi' hoặc 'em'.",
                "Viết lại giống hệt 13% sách giáo khoa.",
                "Xoá bỏ hoàn toàn các nhân vật cũ và thay bằng nhân vật khác.",
                "Không kể lại truyện mà chỉ làm thơ."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đoạn văn 'Chuột xù lổm cồm bò dậy... Mèo nhép bẽn lẽn cười' thể hiện hình thức sáng tạo nào?",
            "options": [
                "Sáng tạo lại mở đầu truyện.",
                "Thay đổi cách kết thúc câu chuyện.",
                "Tả cảnh suối nhỏ trong vắt.",
                "Giới thiệu tác giả tác phẩm."
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Yếu tố nào sau đây KHÔNG phải là một cách viết câu chuyện sáng tạo?",
            "options": [
                "Thêm chi tiết tả ngoại hình, hoạt động.",
                "Thay đổi kết thúc câu chuyện.",
                "Sao chép hoàn toàn bài văn của bạn bên cạnh.",
                "Tưởng tượng mình đang tham gia vào câu chuyện."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Đoạn văn mẫu kể lại câu chuyện 'Một chuyến phiêu lưu' của tác giả nào?",
            "options": [
                "Vũ Hùng",
                "Võ Quảng",
                "Nguyễn Thị Kim Hoà",
                "Văn Thành Lê"
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Để tả cảnh đồng cỏ chân thực khi sáng tạo, em có thể liên hệ các giác quan nào?",
            "options": [
                "Chỉ dùng thị giác để nhìn.",
                "Dùng thính giác để nghe u u u.",
                "Sử dụng các giác quan nhìn, nghe, ngửi mùi cỏ ngai ngái...",
                "Không cần liên hệ giác quan nào."
            ],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Bài văn kể chuyện sáng tạo thường bao gồm mấy phần chính?",
            "options": [
                "2 phần (Mở đầu, Kết thúc)",
                "3 phần (Mở bài, Thân bài, Kết bài)",
                "4 phần (Mở, Thân, Kết, Vận dụng)",
                "5 phần tương ứng 5 tiết học"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- LOGIC PLAY AUDIO ---
let currentSegmentAudio = null;
window.playSegmentAudio = function(url) {
    if (currentSegmentAudio && !currentSegmentAudio.paused) {
        currentSegmentAudio.pause();
        if (currentSegmentAudio.src.endsWith(url)) {
            return;
        }
    }
    currentSegmentAudio = new Audio(url);
    currentSegmentAudio.play().catch(err => console.log("Audio play failed:", err));
};

// --- BÀI TẬP 1 LOGIC ---
let userAnswersVn3 = {
    a: null,
    c: null,
    ex2: null
};

window.selectOptionVn3 = function(part, idx) {
    userAnswersVn3[part] = idx;
    const isEx2 = part === 'ex2';
    const limit = isEx2 ? 3 : 3;

    // Reset option classes
    for (let i = 0; i < limit; i++) {
        const btn = document.getElementById(`btn-vn3-${part}-${i}`);
        if (btn) btn.className = "p-4 bg-gray-50 border-2 border-gray-100 rounded-xl font-bold text-left hover:border-emerald-400 hover:bg-emerald-50/30 transition-all text-gray-800";
    }

    // Highight selected option
    const selBtn = document.getElementById(`btn-vn3-${part}-${idx}`);
    if (selBtn) {
        selBtn.className = "p-4 bg-emerald-50 border-2 border-emerald-100 rounded-xl font-bold text-left text-emerald-800 shadow-sm";
    }
};

window.checkPartMatches = function() {
    const mb = document.getElementById('sel-mb').value;
    const tb = document.getElementById('sel-tb').value;
    const kb = document.getElementById('sel-kb').value;

    const fb = document.getElementById('feedback-vn3-b');
    fb.classList.remove('hidden');

    if (mb === 'giới thiệu' && tb === 'kể lại' && kb === 'suy nghĩ') {
        fb.innerHTML = "🎉 Chính xác! Em đã xác định đúng ý chính của cả 3 phần.";
        fb.className = "text-lg font-bold p-3 rounded-xl bg-emerald-600 text-white mt-4";
        return true;
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác hoàn toàn. Hãy xem lại cấu trúc 3 phần trong Ghi nhớ nhé!";
        fb.className = "text-lg font-bold p-3 rounded-xl bg-rose-600 text-white mt-4";
        return false;
    }
};

// Nối thẻ Câu 1d
let selectedVn3ColA = null;
let selectedVn3ColB = null;
const correctMatchesVn3 = {
    "the-A": "thoai",
    "the-B": "ta-canh"
};
let userMatchesVn3 = {};

window.drawConnectionsVn3 = function() {
    const svg = document.getElementById('svg-connections-vn3');
    if (!svg) return;
    svg.innerHTML = '';
    
    const container = document.getElementById('matching-board-vn3');
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    for (const idA in userMatchesVn3) {
        const idB = userMatchesVn3[idA];
        const elA = document.getElementById(`node-vn3-A-${idA}`);
        const elB = document.getElementById(`node-vn3-B-${idB}`);
        if (!elA || !elB) continue;

        const rectA = elA.getBoundingClientRect();
        const rectB = elB.getBoundingClientRect();

        let x1, y1, x2, y2;
        
        if (rectA.right <= rectB.left) {
            x1 = rectA.right - containerRect.left;
            y1 = rectA.top + rectA.height / 2 - containerRect.top;
            x2 = rectB.left - containerRect.left;
            y2 = rectB.top + rectB.height / 2 - containerRect.top;
        } else {
            x1 = rectA.left + rectA.width / 2 - containerRect.left;
            y1 = rectA.bottom - containerRect.top;
            x2 = rectB.left + rectB.width / 2 - containerRect.left;
            y2 = rectB.top - containerRect.top;
        }

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', '#059669');
        line.setAttribute('stroke-width', '5');
        line.setAttribute('stroke-linecap', 'round');
        
        svg.appendChild(line);
    }
};

window.selectNodeVn3 = function(column, id) {
    if (column === 'A') {
        if (selectedVn3ColA) {
            document.getElementById(`node-vn3-A-${selectedVn3ColA}`).classList.remove('border-emerald-100', 'bg-emerald-50/50');
        }
        selectedVn3ColA = id;
        document.getElementById(`node-vn3-A-${id}`).classList.add('border-emerald-100', 'bg-emerald-50/50');
    } else {
        if (selectedVn3ColB) {
            document.getElementById(`node-vn3-B-${selectedVn3ColB}`).classList.remove('border-emerald-100', 'bg-emerald-50/50');
        }
        selectedVn3ColB = id;
        document.getElementById(`node-vn3-B-${id}`).classList.add('border-emerald-100', 'bg-emerald-50/50');
    }

    if (selectedVn3ColA && selectedVn3ColB) {
        userMatchesVn3[selectedVn3ColA] = selectedVn3ColB;
        
        const nodeA = document.getElementById(`node-vn3-A-${selectedVn3ColA}`);
        const nodeB = document.getElementById(`node-vn3-B-${selectedVn3ColB}`);
        
        nodeA.classList.remove('border-emerald-100', 'bg-emerald-50/50');
        nodeB.classList.remove('border-emerald-100', 'bg-emerald-50/50');
        
        nodeA.classList.add('border-emerald-100', 'bg-emerald-100/50');
        nodeB.classList.add('border-emerald-100', 'bg-emerald-100/50');
        
        selectedVn3ColA = null;
        selectedVn3ColB = null;

        window.drawConnectionsVn3();
    }
};

window.resetMatchingVn3 = function() {
    selectedVn3ColA = null;
    selectedVn3ColB = null;
    userMatchesVn3 = {};
    
    ['the-A', 'the-B'].forEach(id => {
        const el = document.getElementById(`node-vn3-A-${id}`);
        if (el) el.className = "p-5 bg-white border-4 border-gray-100 rounded-xl font-black text-lg text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98";
    });

    ['ta-canh', 'thoai'].forEach(id => {
        const el = document.getElementById(`node-vn3-B-${id}`);
        if (el) el.className = "p-5 bg-white border-4 border-gray-100 rounded-xl font-bold text-lg text-left text-gray-800 shadow-sm transition-all hover:border-emerald-400 hover:bg-emerald-50/20 active:scale-98";
    });

    const fb = document.getElementById('feedback-vn3-d');
    if (fb) fb.classList.add('hidden');

    const svg = document.getElementById('svg-connections-vn3');
    if (svg) svg.innerHTML = '';
};

window.checkMatchingVn3 = function() {
    let matchCount = 0;
    for (const key in correctMatchesVn3) {
        if (userMatchesVn3[key] === correctMatchesVn3[key]) {
            matchCount++;
        }
    }

    const fb = document.getElementById('feedback-vn3-d');
    fb.classList.remove('hidden');

    if (matchCount === 2) {
        fb.innerHTML = "🎉 Chính xác! Chi tiết A là lời thoại, chi tiết B là tả cảnh.";
        fb.className = "text-lg font-bold p-3 rounded-xl bg-emerald-600 text-white mt-4";
        return true;
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác hoàn toàn. Em hãy kiểm tra và nối lại nhé!";
        fb.className = "text-lg font-bold p-3 rounded-xl bg-rose-600 text-white mt-4";
        return false;
    }
};

window.submitVn3Ex1 = function() {
    let score = 0;
    
    // Check 1a
    const fbA = document.getElementById('feedback-vn3-a');
    fbA.classList.remove('hidden');
    if (userAnswersVn3.a === 1) {
        score += 25;
        fbA.innerHTML = "✅ Đúng rồi!";
        fbA.className = "text-lg font-bold p-2 text-emerald-800";
    } else {
        fbA.innerHTML = "❌ Chưa đúng rồi.";
        fbA.className = "text-lg font-bold p-2 text-rose-800";
    }

    // Check 1b
    const isB = window.checkPartMatches();
    if (isB) score += 25;

    // Check 1c
    const fbC = document.getElementById('feedback-vn3-c');
    fbC.classList.remove('hidden');
    if (userAnswersVn3.c === 1) {
        score += 25;
        fbC.innerHTML = "✅ Đúng rồi!";
        fbC.className = "text-lg font-bold p-2 text-emerald-800";
    } else {
        fbC.innerHTML = "❌ Chưa đúng rồi.";
        fbC.className = "text-lg font-bold p-2 text-rose-800";
    }

    // Check 1d
    const isD = window.checkMatchingVn3();
    if (isD) score += 25;

    if (typeof window.syncRealtimeProgress === 'function') {
        window.syncRealtimeProgress({ scoreEx1: score }, true);
    } else {
        alert("Lỗi: Hệ thống lưu điểm chưa sẵn sàng.");
    }
};

// --- BÀI TẬP 2 LOGIC ---
window.submitVn3Ex2 = function() {
    const fb = document.getElementById('feedback-vn3-ex2');
    fb.classList.remove('hidden');
    
    let score = 0;
    if (userAnswersVn3.ex2 === 2) {
        score = 13;
        fb.innerHTML = "🎉 Tuyệt vời! Câu trả lời hoàn toàn chính xác. Đoạn văn đó thay thế cho phần Kết thúc truyện để tạo cái kết hài hước.";
        fb.className = "text-lg font-bold p-3 rounded-xl bg-emerald-600 text-white mt-4";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác rồi. Đoạn văn kể về cảnh các bạn trở về và cười vui vẻ sau biến cố gặp rắn.";
        fb.className = "text-lg font-bold p-3 rounded-xl bg-rose-600 text-white mt-4";
    }

    if (typeof window.syncRealtimeProgress === 'function') {
        window.syncRealtimeProgress({ scoreEx2: score }, true);
    }
};

// --- BÀI TẬP 3 LOGIC ---
window.checkVong3Ex3 = function() {
    const checked = Array.from(document.querySelectorAll('#vn3-ex3-choices input:checked')).map(el => parseInt(el.value));
    
    // Correct indices: 0 (tả ngoại hình), 2 (thay đổi kết thúc), 3 (tưởng tượng giác quan)
    const corrects = [0, 2, 3];
    const isCorrect = checked.length === 3 && corrects.every(val => checked.includes(val));
    
    const fb = document.getElementById('feedback-vn3-ex3');
    fb.classList.remove('hidden');

    if (isCorrect) {
        fb.innerHTML = "🎉 Cực kỳ chính xác! Các cách vận dụng trên đều đúng trừ cách B (làm thay đổi cốt truyện gốc là sai quy tắc).";
        fb.className = "text-lg font-bold p-3 rounded-xl bg-emerald-600 text-white mt-4";
        return true;
    } else {
        fb.innerHTML = "⚠️ Vẫn chưa chọn đủ hoặc chọn nhầm đáp án chưa đúng. Em hãy đọc lại Ghi nhớ nhé!";
        fb.className = "text-lg font-bold p-3 rounded-xl bg-rose-600 text-white mt-4";
        return false;
    }
};

window.submitVn3Ex3 = function() {
    const isCorrect = window.checkVong3Ex3();
    const score = isCorrect ? 13 : 0;
    if (typeof window.syncRealtimeProgress === 'function') {
        window.syncRealtimeProgress({ scoreEx3: score }, true);
    }
};

window.submitVn3Global = function() {
    if (typeof window.syncRealtimeProgress === 'function') {
        window.syncRealtimeProgress({ scorePractice: 13 }, true);
    } else {
        alert("Lỗi: Hệ thống lưu điểm chưa sẵn sàng.");
    }
};

// Event listeners for resizing SVGs
window.addEventListener('resize', () => {
    if (typeof window.drawConnectionsVn3 === 'function') {
        window.drawConnectionsVn3();
    }
});

setTimeout(() => {
    const container = document.getElementById('matching-board-vn3');
    if (container) {
        if (window.resizeObserverMatchingVn3) {
            window.resizeObserverMatchingVn3.disconnect();
        }
        window.resizeObserverMatchingVn3 = new ResizeObserver(() => {
            if (typeof window.drawConnectionsVn3 === 'function') {
                window.drawConnectionsVn3();
            }
        });
        window.resizeObserverMatchingVn3.observe(container);
    }
}, 53);
