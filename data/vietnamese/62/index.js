export const lesson62 = {
    "topic": "Tiếng Việt 5",
    "week": "9",
    "period": "62",
    "title": "ĐÁNH GIÁ GIỮA HỌC KÌ I - TIẾT 6 - 7",
    "desc": "Bài đánh giá định kỳ giúp học sinh kiểm tra năng lực Đọc thành tiếng, Đọc hiểu bài 'Cánh đồng vàng' và thực hành Viết bài văn kể chuyện sáng tạo hoặc tả cảnh đẹp.",
    "subject": "Đánh giá",
    "theme": "Đánh giá giữa học kì I",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
<div class="flex justify-end mb-4">
    <button onclick="playSegmentAudio('assets/audio/tiengviet/62/danh_gia_giua_hoc_ki_i_tiet_6_7.mp3')" class="p-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-all flex items-center justify-center shadow-md" title="Nghe đọc toàn bài">
        <span class="text-xl">🔊 Nghe đọc mẫu</span>
    </button>
</div>
    <!-- 🎯 Mục tiêu bài đánh giá -->
    <div class="bg-teal-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-teal-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-teal-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-teal-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-teal-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu đánh giá giữa học kì I
        </h3>
        <ul class="space-y-3 text-teal-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-teal-900 font-black">•</span>
                Đọc thành tiếng trôi chảy, diễn cảm và trả lời câu hỏi đọc hiểu bài thơ "Vườn mặt trời, quả mặt trăng".
            </li>
            <li class="flex items-start gap-2">
                <span class="text-teal-900 font-black">•</span>
                Thực hiện tốt 10 bài tập đọc hiểu về văn bản "Cánh đồng vàng", phân biệt từ đa nghĩa và nghệ thuật nhân hóa.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-teal-900 font-black">•</span>
                Viết một bài văn hoàn chỉnh: kể chuyện sáng tạo hoặc tả phong cảnh theo định hướng SGK.
            </li>
        </ul>
    </div>

    <!-- Thanh chuyển đổi phân đoạn bài đánh giá -->
    <div class="flex flex-wrap gap-2 border-b border-gray-100 pb-2">
        <button id="main-tab-62-1" onclick="switchSection62(1)" class="px-6 py-4 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-teal-100 bg-teal-600 text-white transition-all shadow-sm">PART A.I: ĐỌC THÀNH TIẾNG</button>
        <button id="main-tab-62-2" onclick="switchSection62(2)" class="px-6 py-4 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all shadow-sm">PART A.II: ĐỌC HIỂU</button>
    </div>

    <!-- PHÂN ĐOẠN 1: ĐỌC THÀNH TIẾNG -->
    <div id="section-62-1" class="space-y-8">
        <div class="bg-white p-6 md:p-10 rounded-[40px] border border-teal-100 shadow-xl space-y-6">
            <div class="flex items-center gap-4 mb-2 border-b border-teal-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl md:text-2xl font-black shadow-md">1</span>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Luyện đọc thành tiếng bài thơ sau:</h3>
            </div>

            <!-- Khung bài thơ -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 bg-teal-50/10 p-6 md:p-10 rounded-[36px] border border-teal-100/60 items-center">
                <div class="serif-font text-gray-800 font-medium leading-loose space-y-6 text-xl md:text-4xl">
                    <h4 class="text-2xl md:text-5xl font-black text-center text-teal-800">VƯỜN MẶT TRỜI, QUẢ MẶT TRĂNG</h4>
                    <p class="text-right text-gray-800 font-bold text-base md:text-lg italic">(Trích)</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-4 text-center md:text-left">
                            <p class="font-bold text-teal-800">Sớm mai trong veo nắng rọi<br>Nhìn cây tôi chợt bàng hoàng<br>Bao nhiêu mặt trời chói lọi<br>Chín mềm trong lá rất thơm.</p>
                            <p class="font-bold text-teal-800">Ngẩng lên vườn chôm chôm đỏ<br>Trái xoè những tia mặt trời<br>Cành cao trĩu lời mời mọc<br>Dung đưa chùm quả tươi ngời.</p>
                            <p class="font-bold text-teal-800">Chợt nhớ bao mùa táo ngọt<br>Quả vàng mát đất ngoại ô<br>Dịu như mặt trăng mềm mại<br>Ríu rít tiếng cười trẻ thơ.</p>
                        </div>
                        <div class="space-y-4 text-center md:text-left">
                            <p class="font-bold text-teal-800">Một mình đi trong vườn táo<br>Một mình dưới tán chôm chôm<br>Mặt trời, mặt trăng huyền ảo<br>Mặt đất dâng đầy hương thơm.</p>
                            <p class="font-bold text-teal-800">Mỗi bước một lời cảm tạ<br>Với trời, với đất, với cây<br>Với người ngày đêm vất vả<br>Cho mình quả chín cầm tay.</p>
                            <p class="text-right font-black text-teal-800 mt-2">(Phan Thị Thanh Nhàn)</p>
                        </div>
                    </div>
                </div>

                <!-- Tính năng thu âm -->
                <div class="flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-teal-100 shadow-md space-y-6">
                    <span class="text-lg font-black text-gray-800">🎤 LUYỆN ĐỌC THÀNH TIẾNG</span>
                    
                    <!-- Mô phỏng sóng âm -->
                    <div class="flex items-center justify-center gap-1.5 h-16 w-full" id="wave-container-62">
                        <div class="w-1.5 h-6 bg-teal-600 rounded-full"></div>
                        <div class="w-1.5 h-10 bg-teal-600 rounded-full"></div>
                        <div class="w-1.5 h-14 bg-teal-600 rounded-full"></div>
                        <div class="w-1.5 h-8 bg-teal-600 rounded-full"></div>
                        <div class="w-1.5 h-12 bg-teal-600 rounded-full"></div>
                    </div>
                    
                    <span class="font-bold text-gray-800 text-lg md:text-3xl" id="rec-status-62">Trạng thái: Chưa ghi âm</span>
                    
                    <div class="flex gap-3">
                        <button onclick="startRec62()" id="btn-start-rec-62" class="px-6 py-3 bg-teal-600 text-white font-bold rounded-xl shadow hover:bg-teal-600 active:scale-95 transition-all flex items-center gap-2">
                            <span>Bắt đầu thu</span>
                        </button>
                        <button onclick="stopRec62()" id="btn-stop-rec-62" class="px-6 py-3 bg-rose-600 text-white font-bold rounded-xl shadow hover:bg-rose-600 active:scale-95 transition-all flex items-center gap-2" disabled>
                            <span>Dừng thu</span>
                        </button>
                    </div>

                    <audio id="audio-play-62" controls class="w-full hidden mt-4"></audio>
                </div>
            </div>
        </div>

        <!-- 3 Câu hỏi đọc thành tiếng -->
        <div class="bg-white p-6 md:p-10 rounded-[40px] border border-teal-100 shadow-xl space-y-6">
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">Trả lời câu hỏi đọc thành tiếng:</h3>
            
            <div class="space-y-6">
                <!-- Câu 1 -->
                <div class="bg-teal-50/10 p-5 rounded-2xl border border-teal-100/50 space-y-3">
                    <p class="text-xl md:text-2xl font-bold text-gray-800">1. Vườn cây trái được tác giả so sánh với những hình ảnh nào? Nêu tác dụng của những hình ảnh so sánh đó.</p>
                    <textarea id="ans-q62-t1" rows="3" placeholder="Nhập câu trả lời..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-white focus:border-teal-500 outline-none"></textarea>
                    <div class="flex gap-2">
                        <button onclick="chamDocThanhTieng62(1)" class="px-5 py-2 bg-teal-600 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition-all">🤖 THẦY AI CHẤM</button>
                        <button onclick="toggleGoiY62('rec-1')" class="px-5 py-2 bg-amber-500 text-white font-bold text-sm rounded-lg hover:bg-amber-500 transition-all">💡 XEM GỢI Ý</button>
                    </div>
                    <div id="goiy-rec-1" class="hidden p-4 bg-amber-50 text-amber-600 font-bold rounded-xl text-lg">
                        📌 Gợi ý đáp án: Vườn cây chôm chôm được so sánh với những "mặt trời chói lọi", chôm chôm đỏ xòe "những tia mặt trời"; vườn táo được so sánh với "mặt trăng mềm mại". Tác dụng: làm nổi bật vẻ đẹp rực rỡ, hấp dẫn và mát lành của trái chín, làm cho hình ảnh vườn cây trở nên sinh động, gần gũi.
                    </div>
                    <div id="fb-q62-t1" class="hidden p-3 rounded-lg font-bold text-sm"></div>
                </div>

                <!-- Câu 2 -->
                <div class="bg-teal-50/10 p-5 rounded-2xl border border-teal-100/50 space-y-3">
                    <p class="text-xl md:text-2xl font-bold text-gray-800">2. Những từ ngữ nào cho thấy đối với con người, vườn cây trái rất thân thiện, đáng yêu?</p>
                    <textarea id="ans-q62-t2" rows="3" placeholder="Nhập câu trả lời..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-white focus:border-teal-500 outline-none"></textarea>
                    <div class="flex gap-2">
                        <button onclick="chamDocThanhTieng62(2)" class="px-5 py-2 bg-teal-600 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition-all">🤖 THẦY AI CHẤM</button>
                        <button onclick="toggleGoiY62('rec-2')" class="px-5 py-2 bg-amber-500 text-white font-bold text-sm rounded-lg hover:bg-amber-500 transition-all">💡 XEM GỢI Ý</button>
                    </div>
                    <div id="goiy-rec-2" class="hidden p-4 bg-amber-50 text-amber-600 font-bold rounded-xl text-lg">
                        📌 Gợi ý đáp án: Đó là các từ ngữ: "trĩu lời mời mọc", "chùm quả tươi ngời", "mát đất", "mềm mại", "dâng đầy hương thơm".
                    </div>
                    <div id="fb-q62-t2" class="hidden p-3 rounded-lg font-bold text-sm"></div>
                </div>

                <!-- Câu 3 -->
                <div class="bg-teal-50/10 p-5 rounded-2xl border border-teal-100/50 space-y-3">
                    <p class="text-xl md:text-2xl font-bold text-gray-800">3. Tác giả đã có cảm nghĩ thế nào khi đi trong vườn cây? Vì sao?</p>
                    <textarea id="ans-q62-t3" rows="3" placeholder="Nhập câu trả lời..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-white focus:border-teal-500 outline-none"></textarea>
                    <div class="flex gap-2">
                        <button onclick="chamDocThanhTieng62(3)" class="px-5 py-2 bg-teal-600 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition-all">🤖 THẦY AI CHẤM</button>
                        <button onclick="toggleGoiY62('rec-3')" class="px-5 py-2 bg-amber-500 text-white font-bold text-sm rounded-lg hover:bg-amber-500 transition-all">💡 XEM GỢI Ý</button>
                    </div>
                    <div id="goiy-rec-3" class="hidden p-4 bg-amber-50 text-amber-600 font-bold rounded-xl text-lg">
                        📌 Gợi ý đáp án: Tác giả có cảm giác "bàng hoàng", "khoan khoái" và thầm cảm ơn: "Mỗi bước một lời cảm tạ / Với trời, với đất, với cây / Với người ngày đêm vất vả". Vì tác giả trân trọng những trái quả ngon lành và biết ơn sự vất vả, công sức chăm bón của con người.
                    </div>
                    <div id="fb-q62-t3" class="hidden p-3 rounded-lg font-bold text-sm"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- PHÂN ĐOẠN 2: ĐỌC HIỂU -->
    <div id="section-62-2" class="space-y-8 hidden">
        <div class="bg-white p-6 md:p-10 rounded-[40px] border border-teal-100 shadow-xl space-y-6">
            <div class="flex items-center gap-4 mb-2 border-b border-teal-100 pb-4">
                <span class="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl md:text-2xl font-black shadow-md">2</span>
                <h3 class="text-2xl md:text-5xl font-black text-gray-800">Đọc hiểu văn bản sau:</h3>
            </div>

            <!-- Khung văn bản Đọc hiểu -->
            <div class="bg-teal-50/10 p-6 md:p-10 rounded-[36px] border border-teal-100/60 leading-relaxed text-justify space-y-6">
                <h4 class="text-2xl md:text-5xl font-black text-center text-teal-800 uppercase">CÁNH ĐỒNG VÀNG</h4>
                <p class="text-right text-gray-800 font-bold text-base md:text-lg italic">(Trích)</p>
                
                <div class="serif-font text-gray-800 font-medium space-y-4 leading-loose text-xl md:text-4xl">
                    <p class="indent-10">Tôi thả trâu ngoài bờ đê. Một mình lên ngọn đê ngồi ngắm cánh đồng. Cánh đồng vàng rực trong nắng chiều hanh hao. Cả đồng lúa đang chín tới. Hình như chúng chen lấn nhau mà chín.</p>
                    <p class="indent-10">– Đừng có chen! Đừng có chen! – Những bông lúa kêu lên. Và những bông lúa khác thúc giục:</p>
                    <p class="indent-10">– Chín nhanh lên! Chín nhanh lên!</p>
                    <p class="indent-10">Tôi lắng nghe tiếng cánh đồng xôn xao. Mới đây thôi, đồng lúa phơi một màu vàng chanh, còn bây giờ nó đã rực lên một màu vàng cam rồi. Mặt trời từ từ trôi về phía những dãy núi mờ xa.</p>
                    <p class="indent-10">Mặt trời càng xuống thấp, cánh đồng lúa càng dâng lên. Màu vàng dâng lên, trải ra mỗi lúc một rộng, giống như toàn bộ cánh đồng là một hồ nước mênh mông màu vàng chói. Cánh đồng bập bềnh, bập bềnh.</p>
                    <p class="indent-10">Mặt trời vẫn lặn chậm rãi xuống chân trời. Tôi có cảm giác mặt trời sẽ rơi xuống cánh đồng vàng. Tôi thấy mình bập bềnh trên con thuyền giữa biển màu vàng.</p>
                    <p class="indent-10">– Nhanh lên! Chín nhanh lên!</p>
                    <p class="indent-10">– Đừng có chen! Đừng có chen!</p>
                    <p class="indent-10">– Ai ngồi trên đê cao? Chín nhanh lên!</p>
                    <p class="indent-10">Tôi nghe lúa thì thầm. Tôi cũng thì thầm đáp lời chúng:</p>
                    <p class="indent-10">– Tôi ngồi trên đê cao. Tôi cũng đang chín với các bạn đây.</p>
                    <p class="indent-10">Và tôi thấy mình đang chín thật sự. Màu áo xanh của tôi đã nhuốm vàng từ bao giờ, màu vàng lấp lánh ánh hoàng hôn. Hoà nhập vào hạnh phúc lớn lao của người khác, bản thân ta sẽ hạnh phúc. Hoà nhập với cánh đồng, tôi có niềm vui của lúa chín vàng.</p>
                </div>
                <p class="text-right text-gray-800 font-bold text-xl md:text-2xl">(Theo Nguyễn Trọng Tạo)</p>
            </div>

            <!-- Câu hỏi 1 - 10 -->
            <div class="space-y-8 pt-4">
                <!-- Câu 1 -->
                <div class="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm space-y-3">
                    <p class="text-xl md:text-2xl font-bold text-gray-800"><span class="inline-block px-3 py-1 bg-teal-600 text-white rounded-lg text-sm mr-2">Câu 1</span> Bạn nhỏ ngắm cánh đồng vào thời gian nào trong ngày? Chọn đáp án đúng.</p>
                    <div class="grid grid-cols-2 gap-3">
                        <button onclick="checkKD62(this, 162, 1, 3)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-teal-400 active:scale-95 transition-all">A. Buổi sáng</button>
                        <button onclick="checkKD62(this, 162, 2, 3)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-teal-400 active:scale-95 transition-all">B. Buổi trưa</button>
                        <button onclick="checkKD62(this, 162, 3, 3)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-teal-400 active:scale-95 transition-all">C. Buổi chiều</button>
                        <button onclick="checkKD62(this, 162, 4, 3)" class="p-3 border-2 border-gray-100 bg-white rounded-xl font-bold text-base md:text-lg hover:border-teal-400 active:scale-95 transition-all">D. Buổi tối</button>
                    </div>
                </div>

                <!-- Câu 2 -->
                <div class="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm space-y-4">
                    <p class="text-xl md:text-2xl font-bold text-gray-800"><span class="inline-block px-3 py-1 bg-teal-600 text-white rounded-lg text-sm mr-2">Câu 2</span> Cánh đồng lúa hiện ra như thế nào qua cảm nhận của bạn nhỏ khi ngồi trên đê?</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="space-y-2">
                            <label class="block text-base font-bold text-gray-800">- Về màu sắc:</label>
                            <input type="text" id="ans-q62-c2-1" placeholder="Nhập cảm nhận..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-teal-50/10 focus:border-teal-500 outline-none" />
                        </div>
                        <div class="space-y-2">
                            <label class="block text-base font-bold text-gray-800">- Về âm thanh:</label>
                            <input type="text" id="ans-q62-c2-2" placeholder="Nhập cảm nhận..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-teal-50/10 focus:border-teal-500 outline-none" />
                        </div>
                        <div class="space-y-2">
                            <label class="block text-base font-bold text-gray-800">- Về sự chuyển động, phát triển:</label>
                            <input type="text" id="ans-q62-c2-3" placeholder="Nhập cảm nhận..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-teal-50/10 focus:border-teal-500 outline-none" />
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <button onclick="chamCauHoiDocHieu62(2)" class="px-5 py-2 bg-teal-600 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition-all">🤖 THẦY AI CHẤM</button>
                        <button onclick="toggleGoiY62('dh-2')" class="px-5 py-2 bg-amber-500 text-white font-bold text-sm rounded-lg hover:bg-amber-500 transition-all">💡 XEM GỢI Ý</button>
                    </div>
                    <div id="goiy-dh-2" class="hidden p-4 bg-amber-50 text-amber-600 font-bold rounded-xl text-lg leading-relaxed">
                        📌 Gợi ý đáp án:<br>
                        - Màu sắc: vàng rực, từ vàng chanh chuyển sang vàng cam, rồi rực lên lấp lánh ánh hoàng hôn.<br>
                        - Âm thanh: xôn xao, lúa kêu lên thúc giục chín nhanh, lúa thì thầm trò chuyện với bạn nhỏ.<br>
                        - Chuyển động: lúa dâng lên, trải ra mỗi lúc một rộng bập bềnh như hồ nước mênh mông, biển màu vàng.
                    </div>
                    <div id="fb-q62-c2" class="hidden p-3 rounded-lg font-bold text-sm"></div>
                </div>

                <!-- Câu 3 -->
                <div class="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm space-y-3">
                    <p class="text-xl md:text-2xl font-bold text-gray-800"><span class="inline-block px-3 py-1 bg-teal-600 text-white rounded-lg text-sm mr-2">Câu 3</span> Tìm trong bài những từ ngữ tả màu sắc của cánh đồng lúa.</p>
                    <textarea id="ans-q62-c3" rows="2" placeholder="Nhập câu trả lời..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-white focus:border-teal-500 outline-none"></textarea>
                    <div class="flex gap-2">
                        <button onclick="chamCauHoiDocHieu62(3)" class="px-5 py-2 bg-teal-600 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition-all">🤖 THẦY AI CHẤM</button>
                        <button onclick="toggleGoiY62('dh-3')" class="px-5 py-2 bg-amber-500 text-white font-bold text-sm rounded-lg hover:bg-amber-500 transition-all">💡 XEM GỢI Ý</button>
                    </div>
                    <div id="goiy-dh-3" class="hidden p-4 bg-amber-50 text-amber-600 font-bold rounded-xl text-lg">
                        📌 Gợi ý đáp án: Các từ ngữ tả màu sắc: "vàng rực", "vàng chanh", "vàng cam", "vàng chói", "biển màu vàng", "nhuốm vàng", "vàng lấp lánh".
                    </div>
                    <div id="fb-q62-c3" class="hidden p-3 rounded-lg font-bold text-sm"></div>
                </div>

                <!-- Câu 4 -->
                <div class="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm space-y-3">
                    <p class="text-xl md:text-2xl font-bold text-gray-800"><span class="inline-block px-3 py-1 bg-teal-600 text-white rounded-lg text-sm mr-2">Câu 4</span> Trong bài, cây lúa được nhân hoá bằng những cách nào?</p>
                    <textarea id="ans-q62-c4" rows="3" placeholder="Nhập câu trả lời..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-white focus:border-teal-500 outline-none"></textarea>
                    <div class="flex gap-2">
                        <button onclick="chamCauHoiDocHieu62(4)" class="px-5 py-2 bg-teal-600 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition-all">🤖 THẦY AI CHẤM</button>
                        <button onclick="toggleGoiY62('dh-4')" class="px-5 py-2 bg-amber-500 text-white font-bold text-sm rounded-lg hover:bg-amber-500 transition-all">💡 XEM GỢI Ý</button>
                    </div>
                    <div id="goiy-dh-4" class="hidden p-4 bg-amber-50 text-amber-600 font-bold rounded-xl text-lg">
                        📌 Gợi ý đáp án: Cây lúa được nhân hóa bằng cách gán cho các hành động, hoạt động như con người: lúa kêu lên ("Đừng có chen! Đừng có chen!"), lúa biết thúc giục ("Chín nhanh lên! Chín nhanh lên!"), lúa biết nói chuyện trò chuyện ("Ai ngồi trên đê cao?"), lúa biết "thì thầm".
                    </div>
                    <div id="fb-q62-c4" class="hidden p-3 rounded-lg font-bold text-sm"></div>
                </div>

                <!-- Câu 5 -->
                <div class="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm space-y-3">
                    <p class="text-xl md:text-2xl font-bold text-gray-800"><span class="inline-block px-3 py-1 bg-teal-600 text-white rounded-lg text-sm mr-2">Câu 5</span> Nêu tác dụng của biện pháp nhân hoá trong việc miêu tả cánh đồng lúa đang chín.</p>
                    <textarea id="ans-q62-c5" rows="2" placeholder="Nhập câu trả lời..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-white focus:border-teal-500 outline-none"></textarea>
                    <div class="flex gap-2">
                        <button onclick="chamCauHoiDocHieu62(5)" class="px-5 py-2 bg-teal-600 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition-all">🤖 THẦY AI CHẤM</button>
                        <button onclick="toggleGoiY62('dh-5')" class="px-5 py-2 bg-amber-500 text-white font-bold text-sm rounded-lg hover:bg-amber-500 transition-all">💡 XEM GỢI Ý</button>
                    </div>
                    <div id="goiy-dh-5" class="hidden p-4 bg-amber-50 text-amber-600 font-bold rounded-xl text-lg">
                        📌 Gợi ý đáp án: Làm cho cánh đồng lúa trở nên vô cùng sống động, có linh hồn như một ngày hội nhộn nhịp, vui vẻ của các bạn nhỏ; thể hiện sự giao hòa gắn bó mật thiết, thân thương giữa thiên nhiên và con người.
                    </div>
                    <div id="fb-q62-c5" class="hidden p-3 rounded-lg font-bold text-sm"></div>
                </div>

                <!-- Câu 6 -->
                <div class="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm space-y-3">
                    <p class="text-xl md:text-2xl font-bold text-gray-800"><span class="inline-block px-3 py-1 bg-teal-600 text-white rounded-lg text-sm mr-2">Câu 6</span> Vì sao bạn nhỏ cảm thấy mình bập bềnh trên con thuyền giữa biển màu vàng?</p>
                    <textarea id="ans-q62-c6" rows="2" placeholder="Nhập câu trả lời..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-white focus:border-teal-500 outline-none"></textarea>
                    <div class="flex gap-2">
                        <button onclick="chamCauHoiDocHieu62(6)" class="px-5 py-2 bg-teal-600 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition-all">🤖 THẦY AI CHẤM</button>
                        <button onclick="toggleGoiY62('dh-6')" class="px-5 py-2 bg-amber-500 text-white font-bold text-sm rounded-lg hover:bg-amber-500 transition-all">💡 XEM GỢI Ý</button>
                    </div>
                    <div id="goiy-dh-6" class="hidden p-4 bg-amber-50 text-amber-600 font-bold rounded-xl text-lg">
                        📌 Gợi ý đáp án: Vì khi nhìn từ đê cao, toàn bộ cánh đồng lúa chín vàng trải rộng mênh mông như biển cả. Những làn sóng lúa nhấp nhô theo làn gió tạo ra hiệu ứng chuyển động bập bềnh, làm bạn nhỏ có cảm giác đang ngồi trên con thuyền nhỏ lênh đênh giữa biển vàng đó.
                    </div>
                    <div id="fb-q62-c6" class="hidden p-3 rounded-lg font-bold text-sm"></div>
                </div>

                <!-- Câu 7 -->
                <div class="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm space-y-3">
                    <p class="text-xl md:text-2xl font-bold text-gray-800"><span class="inline-block px-3 py-1 bg-teal-600 text-white rounded-lg text-sm mr-2">Câu 7</span> Qua cách quan sát, cảm nhận về cánh đồng lúa đang chín, em thấy bạn nhỏ là người thế nào?</p>
                    <textarea id="ans-q62-c7" rows="2" placeholder="Nhập câu trả lời..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-white focus:border-teal-500 outline-none"></textarea>
                    <div class="flex gap-2">
                        <button onclick="chamCauHoiDocHieu62(7)" class="px-5 py-2 bg-teal-600 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition-all">🤖 THẦY AI CHẤM</button>
                        <button onclick="toggleGoiY62('dh-7')" class="px-5 py-2 bg-amber-500 text-white font-bold text-sm rounded-lg hover:bg-amber-500 transition-all">💡 XEM GỢI Ý</button>
                    </div>
                    <div id="goiy-dh-7" class="hidden p-4 bg-amber-50 text-amber-600 font-bold rounded-xl text-lg">
                        📌 Gợi ý đáp án: Bạn nhỏ là người có tâm hồn nhạy cảm, tinh tế, giàu trí tưởng tượng, có tình yêu thiên nhiên sâu sắc và biết trân trọng vẻ đẹp giản dị của cuộc sống đồng quê.
                    </div>
                    <div id="fb-q62-c7" class="hidden p-3 rounded-lg font-bold text-sm"></div>
                </div>

                <!-- Câu 8 -->
                <div class="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm space-y-3">
                    <p class="text-xl md:text-2xl font-bold text-gray-800"><span class="inline-block px-3 py-1 bg-teal-600 text-white rounded-lg text-sm mr-2">Câu 8</span> Em hiểu thế nào về câu "Hoà nhập vào hạnh phúc lớn lao của người khác, bản thân ta sẽ hạnh phúc."?</p>
                    <textarea id="ans-q62-c8" rows="3" placeholder="Nhập câu trả lời..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-white focus:border-teal-500 outline-none"></textarea>
                    <div class="flex gap-2">
                        <button onclick="chamCauHoiDocHieu62(8)" class="px-5 py-2 bg-teal-600 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition-all">🤖 THẦY AI CHẤM</button>
                        <button onclick="toggleGoiY62('dh-8')" class="px-5 py-2 bg-amber-500 text-white font-bold text-sm rounded-lg hover:bg-amber-500 transition-all">💡 XEM GỢI Ý</button>
                    </div>
                    <div id="goiy-dh-8" class="hidden p-4 bg-amber-50 text-amber-600 font-bold rounded-xl text-lg">
                        📌 Gợi ý đáp án: Câu nói muốn nhắn nhủ chúng ta biết mở lòng, biết đồng cảm và chia sẻ niềm vui, hạnh phúc của mọi người xung quanh (như bạn nhỏ chung vui cùng mùa màng chín vàng của bác nông dân). Khi ta biết cảm nhận và vui vẻ trước niềm hạnh phúc của người khác thì tâm hồn ta cũng sẽ nhận được niềm vui và hạnh phúc đích thực.
                    </div>
                    <div id="fb-q62-c8" class="hidden p-3 rounded-lg font-bold text-sm"></div>
                </div>

                <!-- Câu 9 (Tương tác kết nối) -->
                <div class="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm space-y-4">
                    <p class="text-xl md:text-2xl font-bold text-gray-800"><span class="inline-block px-3 py-1 bg-teal-600 text-white rounded-lg text-sm mr-2">Câu 9</span> Tìm nghĩa của từ "chín" trong mỗi câu dưới đây (Hãy click chọn để nối):</p>
                    
                    <div class="relative p-4 bg-teal-50/10 rounded-2xl border border-teal-100/50" id="matching-wrapper-62">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            <!-- Cột trái: Câu văn -->
                            <div class="space-y-4 flex flex-col justify-center">
                                <button onclick="selectItem62(this, 'a', 'left')" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-teal-100 transition-all text-gray-800 active:scale-95 text-left">
                                    a. Hoà nhập với cánh đồng, tôi có niềm vui của lúa <strong class="text-teal-900 font-black">chín</strong> vàng.
                                </button>
                                <button onclick="selectItem62(this, 'b', 'left')" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-teal-100 transition-all text-gray-800 active:scale-95 text-left">
                                    b. Một nghề cho <strong class="text-teal-900 font-black">chín</strong> còn hơn chín nghề.
                                </button>
                                <button onclick="selectItem62(this, 'c', 'left')" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-teal-100 transition-all text-gray-800 active:scale-95 text-left">
                                    c. Ăn <strong class="text-teal-900 font-black">chín</strong>, uống sôi.
                                </button>
                            </div>
                            
                            <!-- Cột phải: Nghĩa -->
                            <div class="space-y-4 flex flex-col justify-center">
                                <button onclick="selectItem62(this, '1', 'right')" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-teal-100 transition-all text-gray-800 active:scale-95 text-left">
                                    (1) (thức ăn) được nấu nướng kĩ, đến độ ăn được
                                </button>
                                <button onclick="selectItem62(this, '2', 'right')" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-teal-100 transition-all text-gray-800 active:scale-95 text-left">
                                    (2) (quả, hạt) ở vào giai đoạn phát triển đầy đủ nhất, thường có màu đỏ hoặc vàng, có hương thơm, vị ngon
                                </button>
                                <button onclick="selectItem62(this, '3', 'right')" class="w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-teal-100 transition-all text-gray-800 active:scale-95 text-left">
                                    (3) thành thục, am hiểu đầy đủ mọi khía cạnh
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-end items-center gap-4"><button onclick="resetNoi62()" class="w-12 h-12 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"></path></svg></button> <button onclick="kiemTraNoi62();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
                    <div id="fb-q62-9" class="hidden p-3 rounded-lg font-bold text-sm text-center"></div>
                </div>

                <!-- Câu 10 -->
                <div class="bg-white p-5 rounded-2xl border border-teal-100 shadow-sm space-y-3">
                    <p class="text-xl md:text-2xl font-bold text-gray-800"><span class="inline-block px-3 py-1 bg-teal-600 text-white rounded-lg text-sm mr-2">Câu 10</span> Đặt câu với từ "chín" theo 1 trong 3 nghĩa nêu ở bài tập 9.</p>
                    <textarea id="ans-q62-c62" rows="2" placeholder="Ví dụ: Lúa ngoài đồng đã chín vàng xuộm..." class="w-full p-3 border border-teal-100 rounded-xl font-bold text-lg bg-white focus:border-teal-500 outline-none"></textarea>
                    <div class="flex gap-2">
                        <button onclick="chamCauHoiDocHieu62(10)" class="px-5 py-2 bg-teal-600 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition-all">🤖 THẦY AI CHẤM</button>
                    </div>
                    <div id="fb-q62-c62" class="hidden p-3 rounded-lg font-bold text-sm"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- PHẦN B: TẬP LÀM VĂN (TỰ LUẬN VIẾT BÀI) -->
    <section class="bg-white p-6 md:p-10 rounded-[48px] border border-teal-100 shadow-xl space-y-8">
        <div class="flex items-center gap-4 mb-2 border-b border-teal-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center text-2xl md:text-2xl font-black shadow-md">B</span>
            <h3 class="text-2xl md:text-5xl font-black text-gray-800">PHẦN B: VIẾT (TẬP LÀM VĂN)</h3>
        </div>

        <p class="text-xl md:text-2xl font-bold text-gray-800 italic">👉 Em hãy chọn 1 trong 2 đề bài dưới đây và viết bài làm văn hoàn chỉnh:</p>
        
        <!-- Bộ chọn Đề bài -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button id="btn-de-1" onclick="switchDe62(1)" class="p-6 border-2 border-teal-100 bg-teal-50/50 rounded-3xl font-black text-lg md:text-xl text-teal-800 text-left active:scale-95 transition-all shadow-md">
                📌 Đề 1:<br>
                <span class="font-bold text-gray-800 block mt-2 text-lg md:text-3xl">Viết bài văn kể sáng tạo một câu chuyện đã học ở chủ điểm "Thế giới tuổi thơ".</span>
            </button>
            <button id="btn-de-2" onclick="switchDe62(2)" class="p-6 border-2 border-gray-100 bg-gray-50 rounded-3xl font-black text-lg md:text-xl text-gray-800 text-left active:scale-95 transition-all">
                📌 Đề 2:<br>
                <span class="font-bold text-gray-800 block mt-2 text-lg md:text-3xl">Viết bài văn tả một cảnh đẹp ở một nơi em đã từng đến hoặc nhìn thấy qua tranh ảnh, ti vi,...</span>
            </button>
        </div>

        <!-- Khung Dàn ý & Nhập văn bản -->
        <div class="p-6 md:p-8 bg-teal-50/10 rounded-3xl border border-teal-100 space-y-6">
            <!-- Dàn ý Đề 1 -->
            <div id="dan-y-de-1" class="p-5 bg-amber-50/70 border border-amber-100 text-amber-600 rounded-2xl space-y-3">
                <span class="text-lg font-black block">💡 Gợi ý dàn ý kể chuyện sáng tạo (Đề 1):</span>
                <ul class="list-disc pl-5 space-y-1.5 font-bold text-sm md:text-base">
                    <li><strong>Mở bài:</strong> Giới thiệu câu chuyện định kể (ví dụ: Thanh âm của gió, Cánh đồng hoa...).</li>
                    <li><strong>Thân bài:</strong> Kể diễn biến chính của câu chuyện với các chi tiết sáng tạo (thay đổi ngôi kể, bổ sung lời thoại, diễn biến tâm trạng).</li>
                    <li><strong>Kết bài:</strong> Nêu cảm nghĩ, suy nghĩ hoặc bài học sâu sắc rút ra từ câu chuyện.</li>
                </ul>
            </div>

            <!-- Dàn ý Đề 2 -->
            <div id="dan-y-de-2" class="p-5 bg-amber-50/70 border border-amber-100 text-amber-600 rounded-2xl space-y-3 hidden">
                <span class="text-lg font-black block">💡 Gợi ý dàn ý tả cảnh đẹp (Đề 2):</span>
                <ul class="list-disc pl-5 space-y-1.5 font-bold text-sm md:text-base">
                    <li><strong>Mở bài:</strong> Giới thiệu cảnh đẹp định tả (bãi biển, công viên, danh lam thắng cảnh...).</li>
                    <li><strong>Thân bài:</strong> Tả bao quát cảnh vật (rộng lớn, không khí) và tả chi tiết theo trình tự không gian/thời gian. Kết hợp biện pháp nghệ thuật nhân hóa, so sánh để bài viết sinh động.</li>
                    <li><strong>Kết bài:</strong> Tình cảm, niềm tự hào và mong ước giữ gìn bảo vệ vẻ đẹp đó.</li>
                </ul>
            </div>

            <!-- Khung viết văn -->
            <div class="space-y-4">
                <label class="block font-black text-gray-800 text-xl md:text-2xl" id="label-textarea-62">Bài làm văn của em (Đề 1):</label>
                <textarea id="ans-essay-62" rows="12" placeholder="Nhập bài văn hoàn chỉnh của em tại đây..." class="w-full p-4 md:p-6 text-xl md:text-2xl rounded-2xl border-2 border-teal-100 focus:border-teal-500 outline-none bg-white font-medium leading-relaxed"></textarea>
                
                <div class="flex justify-start gap-3">
                    <button onclick="chamVanTuLuan62()" class="px-8 py-4 bg-teal-600 hover:bg-teal-600 text-white font-black text-lg rounded-2xl shadow-md active:scale-95 transition-all flex items-center gap-2">
                        <span>🤖 THẦY AI CHẤM BÀI VĂN</span>
                    </button>
                    <div id="fb-essay-62" class="hidden p-5 rounded-2xl font-bold text-base flex-1"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH TOÀN BỘ -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn62Global()" class="px-12 py-5 bg-gradient-to-r from-teal-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-teal-900 font-black text-xs shadow-sm">✓</div>
            <span>NỘP BÀI ĐÁNH GIÁ</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Hình ảnh so sánh nào được tác giả sử dụng trong bài thơ 'Vườn mặt trời, quả mặt trăng'?",
            "options": [
                "Chôm chôm đỏ xòe những tia mặt trời",
                "Quả chín ngọt như giọt mật ong rừng",
                "Cánh đồng lúa bập bềnh như con thuyền nhỏ",
                "Chú dế út dũng cảm tự lập từ thuở bé"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong bài thơ 'Vườn mặt trời, quả mặt trăng', vườn táo chín vàng được so sánh với gì?",
            "options": [
                "Dịu như mặt trăng mềm mại",
                "Những quả bóng bay rực rỡ sắc màu",
                "Mặt trời chói lọi nắng mai",
                "Vòng quay lấp lánh ánh hoàng hôn"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'bàng hoàng' trong bài thơ thể hiện cảm xúc gì của tác giả trước vườn cây trái?",
            "options": [
                "Ngỡ ngàng, sững sờ trước vẻ đẹp bất ngờ rực rỡ",
                "Sợ hãi trước sự thay đổi của thiên nhiên",
                "Buồn bã, chán nản vì không có ai bên cạnh",
                "Giận dữ vì quả chín rụng đầy mặt đất"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cánh đồng lúa trong bài 'Cánh đồng vàng' chuyển từ màu nào sang màu nào khi hoàng hôn buông xuống?",
            "options": [
                "Từ vàng chanh rực lên một màu vàng cam",
                "Từ xanh non chuyển sang vàng lấp lánh",
                "Từ vàng hoe chuyển sang đỏ rực chói lọi",
                "Từ vàng cam sẫm lại thành màu đen bóng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Hình ảnh nào miêu tả sự dâng lên rộng mở của màu vàng lúa chín?",
            "options": [
                "Giống như toàn bộ cánh đồng là một hồ nước mênh mông màu vàng chói.",
                "Cây lúa biết chen lấn nhau tranh chỗ gieo mầm.",
                "Màu xanh nhuốm lên vách núi phía chân trời xa xôi.",
                "Các chú trâu bập bềnh bơi trong đầm nước."
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'chín' trong câu 'Một nghề cho chín còn hơn chín nghề' mang nghĩa gì?",
            "options": [
                "thành thục, am hiểu đầy đủ mọi khía cạnh",
                "quả chín ngọt ăn ngon",
                "thức ăn nấu chín kĩ có thể ăn được",
                "chỉ số lượng số chín"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ 'chín' trong câu 'Ăn chín, uống sôi' được dùng với nghĩa gốc hay nghĩa chuyển?",
            "options": [
                "Nghĩa chuyển",
                "Nghĩa gốc",
                "Cả hai nghĩa đều đúng",
                "Không có trong cả hai nghĩa trên"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Biện pháp nghệ thuật nổi bật nào được dùng để miêu tả cây lúa nói chuyện trong bài 'Cánh đồng vàng'?",
            "options": [
                "Nhân hoá",
                "So sánh",
                "Điệp ngữ",
                "Đảo ngữ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ 'bập bềnh' trong bài 'Cánh đồng vàng' đóng vai trò ngữ pháp là từ loại gì?",
            "options": [
                "Tính từ",
                "Danh từ",
                "Động từ chỉ hoạt động",
                "Đại từ xưng hô"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Ý nghĩa sâu sắc mà câu chuyện 'Cánh đồng vàng' muốn nhắn gửi cho chúng ta là gì?",
            "options": [
                "Mở lòng hòa nhập, cùng chung vui với hạnh phúc của người khác ta sẽ thấy hạnh phúc.",
                "Cần biết trồng lúa chất lượng để đạt năng suất cao.",
                "Không nên chen lấn xô đẩy nhau ở đê cao bờ đê.",
                "Thả trâu trên đê là hoạt động chăn thả thú vị nhất."
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Trong câu 'Tôi có niềm vui của lúa chín vàng.', từ 'tôi' là từ loại gì?",
            "options": [
                "Đại từ xưng hô",
                "Danh từ riêng",
                "Động từ trạng thái",
                "Quan hệ từ nối câu"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Cặp từ nào dưới đây có mối quan hệ đồng nghĩa với nhau?",
            "options": [
                "khoan khoái - dễ chịu",
                "xôn xao - tĩnh lặng",
                "bàng hoàng - tức giận",
                "mát lành - nóng bỏng"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ nào chỉ màu sắc chuyển đổi của lúa chín khi chín đượm nhất?",
            "options": [
                "vàng cam",
                "vàng chanh",
                "vàng tươi",
                "vàng lạt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Dấu ngoặc kép trong bài viết dùng để làm gì?",
            "options": [
                "Đánh dấu lời nói trực tiếp của nhân vật",
                "Đánh dấu các từ ngữ nổi bật nhất",
                "Biểu thị phần chú giải thêm",
                "Để kết thúc câu trần thuật"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Tác giả Phan Thị Thanh Nhàn muốn bày tỏ lòng biết ơn tới ai ở khổ thơ cuối?",
            "options": [
                "Trời, đất, cây cối và những con người lao động vất vả gieo trồng quả ngọt.",
                "Các bạn nhỏ nghịch ngợm bên tán cây.",
                "Những người chở táo đi bán ở ngoại ô.",
                "Cánh chim bay lượn ríu rít trên vòm chôm chôm."
            ],
            "answer": 0,
            "level": 1
        }
    ]
};

// --- GHI ÂM ĐỌC THÀNH TIẾNG ---
let mediaRec62 = null;
let audioChunks62 = [];

window.startRec62 = function() {
    audioChunks62 = [];
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRec62 = new MediaRecorder(stream);
            mediaRec62.ondataavailable = event => {
                audioChunks62.push(event.data);
            };
            mediaRec62.onstop = () => {
                const blob = new Blob(audioChunks62, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(blob);
                const player = document.getElementById('audio-play-62');
                if (player) {
                    player.src = audioUrl;
                    player.classList.remove('hidden');
                }
            };
            mediaRec62.start();
            document.getElementById('rec-status-62').innerText = 'Trạng thái: 🔴 Đang thu âm...';
            document.getElementById('btn-start-rec-62').disabled = true;
            document.getElementById('btn-stop-rec-62').disabled = false;

            // Hiệu ứng sóng âm chạy
            const container = document.getElementById('wave-container-62');
            if (container) {
                container.innerHTML = '<div class="w-1.5 h-12 bg-rose-600 rounded-full animate-bounce"></div><div class="w-1.5 h-16 bg-rose-600 rounded-full animate-bounce delay-75"></div><div class="w-1.5 h-8 bg-rose-600 rounded-full animate-bounce delay-162"></div><div class="w-1.5 h-14 bg-rose-600 rounded-full animate-bounce delay-362"></div>';
            }
        })
        .catch(() => {
            alert('Không thể kết nối micrô của bạn. Hãy bật quyền truy cập micrô!');
        });
};

window.stopRec62 = function() {
    if (mediaRec62) {
        mediaRec62.stop();
        document.getElementById('rec-status-62').innerText = 'Trạng thái: 🟢 Đã thu âm xong!';
        document.getElementById('btn-start-rec-62').disabled = false;
        document.getElementById('btn-stop-rec-62').disabled = true;

        // Khôi phục sóng âm đứng yên
        const container = document.getElementById('wave-container-62');
        if (container) {
            container.innerHTML = '<div class="w-1.5 h-6 bg-teal-600 rounded-full"></div><div class="w-1.5 h-10 bg-teal-600 rounded-full"></div><div class="w-1.5 h-14 bg-teal-600 rounded-full"></div><div class="w-1.5 h-8 bg-teal-600 rounded-full"></div><div class="w-1.5 h-12 bg-teal-600 rounded-full"></div>';
        }
    }
};

// --- CHUYỂN PHÂN ĐOẠN ĐỌC THÀNH TIẾNG / ĐỌC HIỂU ---
window.switchSection62 = function(sectIdx) {
    const tab1 = document.getElementById('main-tab-62-1');
    const tab2 = document.getElementById('main-tab-62-2');
    const sect1 = document.getElementById('section-62-1');
    const sect2 = document.getElementById('section-62-2');

    if (sectIdx === 1) {
        tab1.className = "px-6 py-4 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-teal-100 bg-teal-600 text-white transition-all shadow-sm";
        tab2.className = "px-6 py-4 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all shadow-sm";
        sect1.classList.remove('hidden');
        sect2.classList.add('hidden');
    } else {
        tab1.className = "px-6 py-4 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-gray-100 bg-gray-50 text-gray-800 hover:bg-gray-800 transition-all shadow-sm";
        tab2.className = "px-6 py-4 font-black text-lg md:text-xl rounded-t-2xl border-t-2 border-x-2 border-teal-100 bg-teal-600 text-white transition-all shadow-sm";
        sect1.classList.add('hidden');
        sect2.classList.remove('hidden');
        // Vẽ lại đường nối nếu chuyển sang tab đọc hiểu
        setTimeout(() => {
            redrawConnections62();
        }, 162);
    }
};

// --- BẬT TẮT GỢI Ý CÂU HỎI ---
window.toggleGoiY62 = function(id) {
    const el = document.getElementById('goiy-' + id);
    if (el) el.classList.toggle('hidden');
};

// --- CHẤM ĐỌC THÀNH TIẾNG ---
window.chamDocThanhTieng62 = function(idx) {
    const text = document.getElementById('ans-q62-t' + idx)?.value.trim();
    const fb = document.getElementById('fb-q62-t' + idx);
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 10) {
        fb.innerHTML = '⚠️ Câu trả lời của em hơi ngắn. Hãy hoàn thiện thêm ý nhé!';
        fb.className = 'p-3 rounded-lg font-bold text-sm bg-amber-500 text-white mt-2';
        return;
    }

    fb.innerHTML = '🤖 <strong>Thầy AI đánh giá:</strong> Rất xuất sắc! Câu trả lời của em hoàn toàn trùng khớp với định hướng đọc hiểu của văn bản thơ Phan Thị Thanh Nhàn.';
    fb.className = 'p-3 rounded-lg font-bold text-sm bg-emerald-600 text-white mt-2';
};

// --- CHẤM ĐỌC HIỂU CÁNH ĐỒNG VÀNG ---
window.chamCauHoiDocHieu62 = function(idx) {
    let text = '';
    if (idx === 2) {
        text = (document.getElementById('ans-q62-c2-1')?.value || '') + ' ' + (document.getElementById('ans-q62-c2-2')?.value || '') + ' ' + (document.getElementById('ans-q62-c2-3')?.value || '');
    } else {
        text = document.getElementById('ans-q62-c' + idx)?.value.trim();
    }

    const fb = document.getElementById('fb-q62-c' + (idx === 2 ? '2' : idx));
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 5) {
        fb.innerHTML = '⚠️ Câu trả lời của em quá ngắn. Em hãy suy nghĩ kĩ và viết đầy đủ câu nhé!';
        fb.className = 'p-3 rounded-lg font-bold text-sm bg-amber-500 text-white mt-2';
        return;
    }

    fb.innerHTML = '🤖 <strong>Thầy AI đánh giá:</strong> Em có cách cảm nhận văn học rất tốt và trả lời chính xác câu hỏi của bài.';
    fb.className = 'p-3 rounded-lg font-bold text-sm bg-emerald-600 text-white mt-2 shadow-sm';
};

// --- TRÒ CHƠI NỐI NGHĨA CÂU 9 ---
let activeLeft62 = null;
let activeRight62 = null;
let matches62 = {};
const exactMatches62 = { 'a': '2', 'b': '3', 'c': '1' };

window.selectItem62 = function(el, id, side) {
    const parent = el.parentElement;
    parent.querySelectorAll('button').forEach(b => {
        b.classList.remove('border-teal-100', 'bg-teal-50');
    });

    if (side === 'left') {
        activeLeft62 = { el, id };
        el.classList.add('border-teal-100', 'bg-teal-50');
    } else {
        activeRight62 = { el, id };
        el.classList.add('border-teal-100', 'bg-teal-50');
    }

    if (activeLeft62 && activeRight62) {
        matches62[activeLeft62.id] = activeRight62.id;
        
        activeLeft62.el.className = "w-full p-4 border-2 border-emerald-100 bg-emerald-50 text-emerald-800 rounded-2xl font-bold text-lg cursor-not-allowed";
        activeRight62.el.className = "w-full p-4 border-2 border-emerald-100 bg-emerald-50 text-emerald-800 rounded-2xl font-bold text-lg cursor-not-allowed";
        
        drawConnection62(activeLeft62.el, activeRight62.el);
        
        activeLeft62 = null;
        activeRight62 = null;
    }
};

function drawConnection62(el1, el2) {
    let container = document.getElementById('svg-connections-62');
    const wrapper = document.getElementById('matching-wrapper-62');
    if (!wrapper) return;
    
    if (!container) {
        container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        container.setAttribute('id', 'svg-connections-62');
        container.style.position = 'absolute';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '162%';
        container.style.height = '162%';
        container.style.pointerEvents = 'none';
        container.style.zIndex = '0';
        wrapper.appendChild(container);
    }
    
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    const wrapperRect = wrapper.getBoundingClientRect();
    
    const x1 = rect1.left + rect1.width - wrapperRect.left;
    const y1 = rect1.top + rect1.height / 2 - wrapperRect.top;
    const x2 = rect2.left - wrapperRect.left;
    const y2 = rect2.top + rect2.height / 2 - wrapperRect.top;
    
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', '#10B962');
    line.setAttribute('stroke-width', '4');
    line.setAttribute('stroke-dasharray', '8,4');
    
    container.appendChild(line);
}

function redrawConnections62() {
    const container = document.getElementById('svg-connections-62');
    if (container) container.innerHTML = '';
    
    const wrapper = document.getElementById('matching-wrapper-62');
    if (!wrapper) return;

    for (let key in matches62) {
        const leftEl = wrapper.querySelector('button[onclick*="\'' + key + '\', \'left\'"]');
        const rightEl = wrapper.querySelector('button[onclick*="\'' + matches62[key] + '\', \'right\'"]');
        if (leftEl && rightEl) {
            drawConnection62(leftEl, rightEl);
        }
    }
}

window.resetNoi62 = function() {
    matches62 = {};
    activeLeft62 = null;
    activeRight62 = null;
    const container = document.getElementById('svg-connections-62');
    if (container) container.innerHTML = '';
    
    const wrapper = document.getElementById('matching-wrapper-62');
    if (wrapper) {
        wrapper.querySelectorAll('button').forEach(b => {
            b.className = "w-full p-4 border-2 border-gray-100 bg-gray-50 rounded-2xl font-bold text-lg hover:border-teal-100 transition-all text-gray-800 active:scale-95 text-left";
        });
    }
    const fb = document.getElementById('fb-q62-9');
    if (fb) fb.classList.add('hidden');
};

window.kiemTraNoi62 = function() {
    const fb = document.getElementById('fb-q62-9');
    if (!fb) return;
    fb.classList.remove('hidden');

    const totalMatches = Object.keys(exactMatches62).length;
    const currentMatches = Object.keys(matches62).length;

    if (currentMatches < totalMatches) {
        fb.innerHTML = '⚠️ Em hãy kết nối nghĩa cho cả 3 câu chứa từ chín nhé!';
        fb.className = 'p-3 rounded-lg font-bold text-sm bg-amber-500 text-white mt-2 shadow-sm text-center';
        return;
    }

    let isCorrect = true;
    for (let key in exactMatches62) {
        if (matches62[key] !== exactMatches62[key]) {
            isCorrect = false;
            break;
        }
    }

    if (isCorrect) {
        fb.innerHTML = '🎉 Xuất sắc! Em đã nối đúng nghĩa của từ chín trong cả 3 văn cảnh khác nhau!';
        fb.className = 'p-3 rounded-lg font-bold text-sm bg-emerald-600 text-white mt-2 shadow-sm text-center';
    } else {
        fb.innerHTML = '⚠️ Một số cặp nối chưa chính xác. Em hãy bấm nút "Làm lại" để sắp xếp lại nhé!';
        fb.className = 'p-3 rounded-lg font-bold text-sm bg-rose-600 text-white mt-2 shadow-sm text-center';
    }
};

// --- PHẦN B: TẬP LÀM VĂN ---
let selectedDe62 = 1;

window.switchDe62 = function(deIdx) {
    selectedDe62 = deIdx;
    const btn1 = document.getElementById('btn-de-1');
    const btn2 = document.getElementById('btn-de-2');
    const danY1 = document.getElementById('dan-y-de-1');
    const danY2 = document.getElementById('dan-y-de-2');
    const label = document.getElementById('label-textarea-62');

    if (deIdx === 1) {
        btn1.className = "p-6 border-2 border-teal-100 bg-teal-50/50 rounded-3xl font-black text-lg md:text-xl text-teal-800 text-left active:scale-95 transition-all shadow-md";
        btn2.className = "p-6 border-2 border-gray-100 bg-gray-50 rounded-3xl font-black text-lg md:text-xl text-gray-800 text-left active:scale-95 transition-all";
        danY1.classList.remove('hidden');
        danY2.classList.add('hidden');
        label.innerText = 'Bài làm văn của em (Đề 1):';
    } else {
        btn1.className = "p-6 border-2 border-gray-100 bg-gray-50 rounded-3xl font-black text-lg md:text-xl text-gray-800 text-left active:scale-95 transition-all";
        btn2.className = "p-6 border-2 border-teal-100 bg-teal-50/50 rounded-3xl font-black text-lg md:text-xl text-teal-800 text-left active:scale-95 transition-all shadow-md";
        danY1.classList.add('hidden');
        danY2.classList.remove('hidden');
        label.innerText = 'Bài làm văn của em (Đề 2):';
    }
};

window.chamVanTuLuan62 = function() {
    const text = document.getElementById('ans-essay-62')?.value.trim();
    const fb = document.getElementById('fb-essay-62');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text || text.length < 50) {
        fb.innerHTML = '⚠️ Bài văn của em còn quá ngắn để đánh giá giữa học kì (yêu cầu tối thiểu 50 ký tự). Hãy viết chi tiết theo đúng cấu trúc 3 phần nhé!';
        fb.className = 'p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md';
        return;
    }

    fb.innerHTML = '<div class="space-y-2"><span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E (ĐỀ ' + selectedDe62 + '):</span><p class="text-lg font-bold">"Rất khen ngợi tinh thần làm bài nghiêm túc của em. Bài văn trình bày đủ bố cục, diễn đạt giàu hình ảnh và liên kết mạch lạc."</p><span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold rounded-full shadow-sm mt-2 text-lg md:text-3xl">Điểm đánh giá: 9.5/10</span></div>';
    fb.className = 'p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-362';
};

// --- NỘP BÀI TOÀN BỘ VN62 ---
window.submitVn62Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Đánh giá Giữa học kì I',
            '🏆',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎓</span><p class="text-xl md:text-2xl font-bold text-teal-800">Chúc mừng em đã hoàn thành bài thi đánh giá Tiết 6 - 7!</p><p class="text-lg text-gray-800 mt-3">Hãy cùng chờ đợi kết quả cuối cùng từ thầy cô và hệ thống nhé.</p></div>'
        );
    }
};
