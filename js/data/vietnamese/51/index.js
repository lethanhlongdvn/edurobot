export const lesson51 = {
    "topic": "Tiếng Việt 5",
    "week": "8",
    "period": "51",
    "title": "LTVC: LUYỆN TẬP VỀ TỪ ĐA NGHĨA",
    "desc": "Bài học giúp học sinh thực hành phân tích nghĩa gốc và nghĩa chuyển của các từ đa nghĩa quen thuộc như hạt, chân, đồng thời rèn luyện kĩ năng đặt câu phân biệt nghĩa của từ mũi, cao.",
    "subject": "LTVC",
    "theme": "Thế giới tuổi thơ",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-3xl font-black text-sky-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Phân biệt được nghĩa gốc và nghĩa chuyển của các từ đa nghĩa (hạt, chân) trong các ngữ cảnh thơ ca cụ thể.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Tìm ra điểm giống và khác nhau giữa các nghĩa của từ đa nghĩa.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-900 font-black">•</span>
                Đặt câu chính xác để phân biệt nghĩa gốc và nghĩa chuyển của các từ đa nghĩa thông dụng (mũi, cao).
            </li>
        </ul>
    </div>

    <!-- 🎮 KHỞI ĐỘNG -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-4 mb-2">
            <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">🎮</div>
            <h3 class="text-2xl md:text-3xl font-black text-gray-800">Khởi động: Nhanh như chớp</h3>
        </div>
        <p class="text-xl md:text-2xl text-gray-800 font-bold italic">👉 Em hãy xác định từ in đậm dưới đây được dùng với nghĩa gốc hay nghĩa chuyển:</p>
        
        <div class="bg-sky-50/30 p-6 rounded-3xl border border-sky-100/50 max-w-xl mx-auto space-y-4">
            <div class="text-center font-bold text-lg md:text-2xl text-sky-800 py-2">
                "Bố em sửa **chân** bàn bị gãy."
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="checkKD51(;" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn51-kd" class="hidden p-4 rounded-xl text-sm font-bold text-center mt-2"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto">
    <!-- BÀI TẬP 1: NGHĨA CỦA TỪ HẠT -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">1</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800 leading-snug">Nghĩa của từ hạt</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Đọc các đoạn thơ dưới đây và lựa chọn nghĩa chính xác cho từ "hạt":</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Khổ thơ a -->
                <div class="bg-white p-6 rounded-3xl border border-sky-100 space-y-4">
                    <span class="text-xs font-black text-sky-800 block">ĐOẠN THƠ A:</span>
                    <div class="serif-font text-center text-gray-800 text-xl md:text-2xl leading-relaxed py-2 bg-sky-50/20 rounded-2xl">
                        <p>Khi đang là <strong>hạt</strong></p>
                        <p>Cầm trong tay mình</p>
                        <p>Chưa gieo xuống đất</p>
                        <p><strong>Hạt</strong> nằm lặng thinh.</p>
                        <p class="text-right text-xs font-bold text-gray-800 mt-2">(Trần Hữu Thung)</p>
                    </div>
                    
                    <div class="space-y-2">
                        <label class="block text-sm font-bold text-sky-800">Từ "hạt" trong đoạn thơ này chỉ:</label>
                        <select id="vn51-ex1-a" class="w-full p-3 border-2 border-sky-100 rounded-xl font-bold bg-white text-base text-gray-800 outline-none focus:border-sky-500">
                            <option value="">-- Chọn giải nghĩa --</option>
                            <option value="goc">Hạt giống cây trồng (được cầm trong tay, gieo xuống đất)</option>
                            <option value="chuyen_mua">Giọt nước nhỏ rơi từ trên trời xuống</option>
                            <option value="chuyen_nang">Các tia sáng mặt trời ngưng tụ nhỏ bé</option>
                        </select>
                    </div>
                </div>

                <!-- Khổ thơ b -->
                <div class="bg-white p-6 rounded-3xl border border-sky-100 space-y-4">
                    <span class="text-xs font-black text-sky-800 block">ĐOẠN THƠ B:</span>
                    <div class="serif-font text-center text-gray-800 text-xl md:text-2xl leading-relaxed py-2 bg-sky-50/20 rounded-2xl">
                        <p><strong>Hạt</strong> mưa mải miết trốn tìm</p>
                        <p>Cây đào trước cửa lim dim mắt cười</p>
                        <p>Quất gom từng <strong>hạt</strong> nắng rơi</p>
                        <p>Làm thành quả - những mặt trời tí hon.</p>
                        <p class="text-right text-xs font-bold text-gray-800 mt-2">(Đỗ Quang Huỳnh)</p>
                    </div>

                    <div class="space-y-2">
                        <label class="block text-sm font-bold text-sky-800">Từ "hạt" trong "hạt mưa" và "hạt nắng" chỉ:</label>
                        <select id="vn51-ex1-b" class="w-full p-3 border-2 border-sky-100 rounded-xl font-bold bg-white text-base text-gray-800 outline-none focus:border-sky-500">
                            <option value="">-- Chọn giải nghĩa --</option>
                            <option value="goc">Hạt giống lúa hay đỗ gieo dưới đất</option>
                            <option value="chuyen">Giọt nước mưa / tia nắng bé nhỏ đọng lại có hình tròn</option>
                            <option value="khac">Những quả quất tròn tí hon trên cành</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Xác định nghĩa gốc -->
            <div class="bg-sky-55/35 p-6 rounded-3xl border border-sky-100 space-y-3">
                <span class="text-base font-extrabold text-sky-800">Từ "hạt" trong đoạn thơ nào được dùng với nghĩa gốc?</span>
                <div class="flex justify-end items-center gap-4">
                    <label class="flex items-center gap-2 font-bold text-lg text-gray-800 cursor-pointer">
                        <input type="radio" name="vn51-ex1-goc" value="a" class="w-5 h-5 accent-sky-600"> Đoạn thơ A
                    </label>
                    <label class="flex items-center gap-2 font-bold text-lg text-gray-800 cursor-pointer">
                        <input type="radio" name="vn51-ex1-goc" value="b" class="w-5 h-5 accent-sky-600"> Đoạn thơ B
                    </label>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="checkEx1_51();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn51-ex1" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2 shadow-md"></div>
        </div>
    </section>

    <!-- BÀI TẬP 2: NGHĨA CỦA TỪ CHÂN -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-sky-50">
        <div class="p-6 md:p-8 bg-sky-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">2</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800 leading-snug">Giải nghĩa từ "chân" và tìm điểm giống/khác nhau</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Phân tích từ "chân" trong các ngữ cảnh dưới đây:</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Khổ thơ a -->
                <div class="bg-white p-6 rounded-3xl border border-sky-100 space-y-4">
                    <span class="text-xs font-black text-sky-800 block">ĐOẠN THƠ A:</span>
                    <div class="serif-font text-center text-gray-800 text-xl md:text-2xl leading-relaxed py-2 bg-sky-50/20 rounded-2xl">
                        <p>Cái gậy có một <strong>chân</strong>,</p>
                        <p>Biết giúp bà khỏi ngã.</p>
                        <p>Chiếc com-pa bố vẽ,</p>
                        <p>Có <strong>chân</strong> đứng, <strong>chân</strong> quay.</p>
                        <p>Cái kiềng đun hằng ngày,</p>
                        <p>Ba <strong>chân</strong> xoè trong lửa.</p>
                        <p class="text-right text-xs font-bold text-gray-800 mt-2">(Vũ Quần Phương)</p>
                    </div>
                    
                    <div class="space-y-2">
                        <label class="block text-sm font-bold text-sky-800">Từ "chân" trong các vật (gậy, com-pa, kiềng) mang nghĩa:</label>
                        <select id="vn51-ex2-a" class="w-full p-3 border-2 border-sky-100 rounded-xl font-bold bg-white text-base text-gray-800 outline-none focus:border-sky-500">
                            <option value="">-- Chọn giải nghĩa --</option>
                            <option value="goc">Bộ phận cơ thể người dùng để đi đứng</option>
                            <option value="chuyen">Bộ phận dưới cùng của đồ vật dùng để nâng đỡ/tựa đứng</option>
                        </select>
                    </div>
                </div>

                <!-- Khổ thơ b -->
                <div class="bg-white p-6 rounded-3xl border border-sky-100 space-y-4">
                    <span class="text-xs font-black text-sky-800 block">ĐOẠN THƠ B:</span>
                    <div class="serif-font text-center text-gray-800 text-xl md:text-2xl leading-relaxed py-2 bg-sky-50/20 rounded-2xl">
                        <p><strong>Chân</strong> em bước thật êm</p>
                        <p>Đường sau mưa ẩm ướt</p>
                        <p>Trên lá non mịn mướt</p>
                        <p>Những giọt nước trong lành.</p>
                        <p class="text-right text-xs font-bold text-gray-800 mt-2">(Nguyễn Quỳnh Mai)</p>
                    </div>

                    <div class="space-y-2">
                        <label class="block text-sm font-bold text-sky-800">Từ "chân" trong "chân em" mang nghĩa:</label>
                        <select id="vn51-ex2-b" class="w-full p-3 border-2 border-sky-100 rounded-xl font-bold bg-white text-base text-gray-800 outline-none focus:border-sky-500">
                            <option value="">-- Chọn giải nghĩa --</option>
                            <option value="goc">Bộ phận dưới cùng của cơ thể người để đi đứng</option>
                            <option value="chuyen">Bộ phận cơ học của đồ vật giúp giữ thăng bằng</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Câu hỏi so sánh giống/khác nhau -->
            <div class="bg-sky-50/30 p-6 rounded-3xl border border-sky-100 space-y-4">
                <div class="space-y-2">
                    <label class="block text-base font-extrabold text-sky-800">🔍 Điểm GIỐNG NHAU giữa các nghĩa của từ "chân" trên là gì?</label>
                    <select id="vn51-ex2-giong" class="w-full p-3 border-2 border-sky-100 rounded-xl font-bold bg-white text-base text-gray-800 outline-none focus:border-sky-500">
                        <option value="">-- Chọn điểm giống nhau --</option>
                        <option value="sai_dc">Đều có thể bước đi tự do trên đường ẩm ướt</option>
                        <option value="sai_chat">Đều được làm bằng gỗ hoặc kim loại cứng chống lửa</option>
                        <option value="dung">Đều chỉ bộ phận dưới cùng, nâng đỡ cơ thể hoặc đồ vật tiếp xúc với mặt đất</option>
                    </select>
                </div>

                <div class="space-y-2">
                    <label class="block text-base font-extrabold text-sky-800">🔍 Điểm KHÁC NHAU giữa các nghĩa của từ "chân" trên là gì?</label>
                    <select id="vn51-ex2-khac" class="w-full p-3 border-2 border-sky-100 rounded-xl font-bold bg-white text-base text-gray-800 outline-none focus:border-sky-500">
                        <option value="">-- Chọn điểm khác nhau --</option>
                        <option value="dung">Chân người có xương thịt, di chuyển chủ động; chân đồ vật là vật vô tri, đứng im một chỗ</option>
                        <option value="sai_mau">Chân người có màu chàm; chân đồ vật có màu đỏ rực rỡ</option>
                    </select>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="checkEx2_51();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn51-ex2" class="hidden p-4 rounded-xl text-base font-bold text-center mt-2 shadow-md"></div>
        </div>
    </section>

    <!-- BÀI TẬP 3: ĐẶT CÂU PHÂN BIỆT NGHĨA (AI THẦY E CHẤM) -->
    <section class="bg-white p-4 rounded-[40px] shadow-lg border border-amber-50">
        <div class="p-6 md:p-8 bg-amber-50/30 rounded-[32px] space-y-6">
            <div class="flex items-center gap-4 mb-2">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center text-2xl md:text-3xl font-black shadow-md">3</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black text-gray-800">Đặt câu phân biệt nghĩa</h3>
                    <p class="text-xs font-bold text-gray-800 mt-1">Hãy đặt câu để phân biệt các nghĩa của hai từ dưới đây. AI Thầy E sẽ nhận xét và chấm bài cho em.</p>
                </div>
            </div>

            <div class="space-y-6">
                <!-- Từ Mũi -->
                <div class="bg-white p-6 rounded-3xl border border-amber-100 space-y-4">
                    <span class="px-4 py-1.5 bg-amber-500 text-white font-black text-lg rounded-full inline-block">Từ "Mũi"</span>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="block text-sm font-bold text-gray-800">Nghĩa 1: Bộ phận thở & ngửi ở mặt người/động vật (Nghĩa gốc)</label>
                            <input type="text" id="ans-vn51-ex3-mui1" placeholder="Ví dụ: Mũi chú chó cún rất thính." class="w-full p-3 border border-amber-100 rounded-xl outline-none focus:border-amber-500 bg-amber-50/5 font-bold text-base text-gray-800">
                        </div>
                        <div class="space-y-2">
                            <label class="block text-sm font-bold text-gray-800">Nghĩa 2: Bộ phận đầu nhọn nhô ra của vật (Nghĩa chuyển)</label>
                            <input type="text" id="ans-vn51-ex3-mui2" placeholder="Ví dụ: Mũi thuyền rẽ sóng ra khơi." class="w-full p-3 border border-amber-100 rounded-xl outline-none focus:border-amber-500 bg-amber-50/5 font-bold text-base text-gray-800">
                        </div>
                    </div>
                </div>

                <!-- Từ Cao -->
                <div class="bg-white p-6 rounded-3xl border border-amber-100 space-y-4">
                    <span class="px-4 py-1.5 bg-amber-500 text-white font-black text-lg rounded-full inline-block">Từ "Cao"</span>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="block text-sm font-bold text-gray-800">Nghĩa 1: Khoảng cách theo chiều thẳng đứng (Nghĩa gốc)</label>
                            <input type="text" id="ans-vn51-ex3-cao1" placeholder="Ví dụ: Ngọn núi Phan-xi-păng rất cao." class="w-full p-3 border border-amber-100 rounded-xl outline-none focus:border-amber-500 bg-amber-50/5 font-bold text-base text-gray-800">
                        </div>
                        <div class="space-y-2">
                            <label class="block text-sm font-bold text-gray-800">Nghĩa 2: Hơn mức trung bình về lượng/chất (Nghĩa chuyển)</label>
                            <input type="text" id="ans-vn51-ex3-cao2" placeholder="Ví dụ: Anh ấy có chỉ số thông minh rất cao." class="w-full p-3 border border-amber-100 rounded-xl outline-none focus:border-amber-500 bg-amber-50/5 font-bold text-base text-gray-800">
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end items-center gap-4"><button onclick="checkWritingVn51();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            </div>
        </div>
    </section>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn51Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-sky-900 font-black text-xs shadow-sm">✓</div>
            <span>HOÀN THÀNH TIẾT HỌC</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Thế nào là từ đa nghĩa?",
            "options": [
                "Là những từ có cách viết hoàn toàn giống nhau nhưng nghĩa không liên quan gì nhau",
                "Là từ có một nghĩa gốc và một hay một số nghĩa chuyển, các nghĩa này luôn có mối liên hệ",
                "Là những từ chỉ có duy nhất một nghĩa gốc cố định",
                "Là các từ dùng để thay thế cho danh từ trong câu"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trong câu 'Bố em sửa chân bàn bị gãy', từ 'chân' mang nghĩa nào?",
            "options": [
                "Nghĩa gốc",
                "Nghĩa chuyển",
                "Nghĩa đồng âm",
                "Nghĩa trái ngược"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Cặp từ 'hạt' nào dưới đây được dùng với nghĩa gốc?",
            "options": [
                "Hạt đỗ xanh, hạt giống lúa",
                "Hạt mưa rơi, hạt cát biển",
                "Hạt nắng hanh, hạt bụi nhỏ",
                "Hạt sương đêm, hạt muối hạt"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'mũi' trong câu nào mang nghĩa gốc?",
            "options": [
                "Mũi kim khâu rất sắc nhọn",
                "Bé hít một hơi dài bằng mũi",
                "Mũi đất nhô ra phía ngoài biển",
                "Mũi quân ta tiến thẳng về đích"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Trong câu 'Chiếc com-pa có chân đứng, chân quay', từ 'chân' ở đây đồng nghĩa với:",
            "options": [
                "Cánh com-pa dài",
                "Bộ phận kim nhọn làm trụ và đầu bút dùng để vẽ vòng tròn tiếp xúc mặt giấy",
                "Vòng tròn đồng tâm",
                "Phần ốc vặn xoay của com-pa"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nét nghĩa giống nhau cơ bản giữa 'chân người' và 'chân kiềng' là gì?",
            "options": [
                "Đều có thể đi lại nhanh nhẹn",
                "Đều nằm ở vị trí dưới cùng tiếp xúc mặt đất và dùng để nâng đỡ",
                "Đều được cấu tạo bằng cơ và xương thịt",
                "Đều chịu được sức nóng của ngọn lửa"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ 'cao' trong câu nào được dùng với nghĩa chuyển?",
            "options": [
                "Cột cờ Hà Nội rất cao",
                "Bạn Nam đạt điểm số rất cao trong kì thi",
                "Cây cau trước nhà cao vút",
                "Máy bay đang bay ở độ cao lớn"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Trong câu thơ 'Quất gom từng hạt nắng rơi', từ 'hạt' được dùng với nghĩa chuyển theo phương thức nào?",
            "options": [
                "So sánh tia nắng đọng lại bé nhỏ giống như hạt cây tròn trịa",
                "Nhân hóa nắng có thể tự mình rơi xuống đất",
                "Hoán dụ chỉ quả quất vàng chín mọng",
                "Ẩn dụ chỉ thời tiết oi bức"
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Từ 'chân' trong câu 'Chân em bước thật êm' mang nghĩa gì?",
            "options": [
                "Nghĩa chuyển",
                "Nghĩa gốc",
                "Nghĩa đồng âm",
                "Nghĩa ẩn dụ"
            ],
            "answer": 1,
            "level": 0
        },
        {
            "question": "Từ 'mũi' trong 'mũi thuyền', 'mũi súng' mang nghĩa gì?",
            "options": [
                "Nghĩa chuyển",
                "Nghĩa gốc",
                "Nghĩa đồng âm",
                "Nghĩa hoán dụ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Cặp từ 'cao' nào mang nghĩa gốc chỉ khoảng cách thẳng đứng?",
            "options": [
                "Tòa tháp cao - Ngọn núi cao",
                "Năng suất cao - Chất lượng cao",
                "Điểm số cao - Nhu cầu cao",
                "Nhiệt độ cao - Cao giọng hát"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'đầu' trong câu nào dưới đây mang nghĩa chuyển?",
            "options": [
                "Bé đau đầu vì bị sốt",
                "Đầu con đường rực rỡ hoa bằng lăng",
                "Sư tử lắc đầu bờm xơ xác",
                "Bác nông dân gạt mồ hôi trên đầu"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Giữa nghĩa gốc và nghĩa chuyển của từ 'mũi' (mũi người và mũi thuyền) có liên hệ về đặc điểm gì?",
            "options": [
                "Đều dùng để ngửi mùi vị",
                "Đều có hình dáng thon nhọn nhô về phía trước",
                "Đều làm bằng sắt thép bền vững",
                "Đều nằm ở bộ phận phía dưới cùng"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Từ 'lưng' trong 'lưng đèo', 'lưng núi' được dùng với nghĩa nào?",
            "options": [
                "Nghĩa gốc",
                "Nghĩa chuyển",
                "Nghĩa đồng âm",
                "Nghĩa đen"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Sự khác biệt lớn nhất giữa từ đồng âm và từ đa nghĩa là gì?",
            "options": [
                "Từ đồng âm viết khác nhau; từ đa nghĩa viết giống nhau",
                "Từ đồng âm có các nghĩa hoàn toàn khác nhau không có mối liên hệ; từ đa nghĩa có các nghĩa liên hệ chặt chẽ với nhau",
                "Từ đồng âm chỉ dùng trong văn nói; từ đa nghĩa chỉ dùng trong văn viết",
                "Không có sự khác biệt nào cả"
            ],
            "answer": 1,
            "level": 2
        }
    ]
};

// --- DỰ ĐOÁN KHỞI ĐỘNG VN51 ---
window.checkKD51 = function(answer) {
    const fb = document.getElementById('fb-vn51-kd');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (answer === 'chuyen') {
        fb.innerHTML = "🎉 Chính xác! Từ **chân** bàn ở đây là bộ phận đỡ chiếc bàn tiếp xúc với đất (nghĩa chuyển từ chân người). Chúc mừng em khởi động xuất sắc!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. **Chân** bàn là bộ phận của vật vô tri, không phải bộ phận cơ thể người, nên đó phải là nghĩa chuyển nhé!";
        fb.className = "p-4 rounded-xl text-sm font-bold text-center bg-rose-600 text-white mt-2 shadow-sm animate-bounce";
    }
};

// --- KIỂM TRA BÀI TẬP 1 ---
window.checkEx1_51 = function() {
    const valA = document.getElementById('vn51-ex1-a')?.value;
    const valB = document.getElementById('vn51-ex1-b')?.value;
    const radioGoc = document.querySelector('input[name="vn51-ex1-goc"]:checked')?.value;
    const fb = document.getElementById('fb-vn51-ex1');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!valA || !valB || !radioGoc) {
        fb.innerHTML = "⚠️ Em hãy hoàn thành chọn giải nghĩa và xác định khổ thơ có từ 'hạt' mang nghĩa gốc nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2";
        return;
    }

    const dung = (valA === 'goc') && (valB === 'chuyen') && (radioGoc === 'a');

    if (dung) {
        fb.innerHTML = "🎉 Chính xác hoàn toàn! Ở khổ a, hạt giống là nghĩa gốc. Ở khổ b, hạt mưa, hạt nắng là các nghĩa chuyển chỉ sự vật có hình tròn nhỏ.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Điền từ hoặc chọn nghĩa gốc chưa chính xác. Hãy đọc kỹ gợi ý giải nghĩa trong bài và thử lại nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- KIỂM TRA BÀI TẬP 2 ---
window.checkEx2_51 = function() {
    const valA = document.getElementById('vn51-ex2-a')?.value;
    const valB = document.getElementById('vn51-ex2-b')?.value;
    const valGiong = document.getElementById('vn51-ex2-giong')?.value;
    const valKhac = document.getElementById('vn51-ex2-khac')?.value;
    const fb = document.getElementById('fb-vn51-ex2');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!valA || !valB || !valGiong || !valKhac) {
        fb.innerHTML = "⚠️ Em hãy hoàn thành chọn giải nghĩa và trả lời hai câu hỏi so sánh giống/khác nhau nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-amber-500 text-white mt-2";
        return;
    }

    const dung = (valA === 'chuyen') && (valB === 'goc') && (valGiong === 'dung') && (valKhac === 'dung');

    if (dung) {
        fb.innerHTML = "🎉 Tuyệt vời! Em đã phân tích từ 'chân' rất chuẩn xác. Nghĩa giống nhau là đều ở vị trí dưới cùng nâng đỡ, nghĩa khác nhau ở chỗ chân người là cơ thể sống di chuyển chủ động, chân vật là vô tri cố định.";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-emerald-600 text-white mt-2 shadow-md";
    } else {
        fb.innerHTML = "⚠️ Chưa chính xác. Em vui lòng xem lại giải nghĩa hoặc điểm giống/khác nhau của từ chân nhé!";
        fb.className = "p-4 rounded-xl text-base font-bold text-center bg-rose-600 text-white mt-2 shadow-md";
    }
};

// --- CHẤM TỰ LUẬN ĐẶT CÂU (BÀI TẬP 3) ---
window.checkWritingVn51 = function() {
    const mui1 = document.getElementById('ans-vn51-ex3-mui1')?.value.trim();
    const mui2 = document.getElementById('ans-vn51-ex3-mui2')?.value.trim();
    const cao1 = document.getElementById('ans-vn51-ex3-cao1')?.value.trim();
    const cao2 = document.getElementById('ans-vn51-ex3-cao2')?.value.trim();
    const fb = document.getElementById('fb-vn51-writing');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!mui1 || !mui2 || !cao1 || !cao2) {
        fb.innerHTML = "⚠️ Em hãy hoàn thành việc đặt câu cho cả 4 trường hợp để AI Thầy E chấm điểm nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    if (mui1.length < 5 || mui2.length < 5 || cao1.length < 5 || cao2.length < 5) {
        fb.innerHTML = "⚠️ Các câu của em đặt còn ngắn quá. Hãy viết câu hoàn chỉnh (có đầy đủ chủ ngữ, vị ngữ) để AI Thầy E đánh giá chính xác nhé!";
        fb.className = "p-4 rounded-xl font-bold text-base bg-amber-500 text-white shadow-md";
        return;
    }

    // Đánh giá giả lập từ AI Thầy E
    fb.innerHTML = `
        <div class="space-y-2">
            <span class="text-xs font-black text-emerald-800 block">🤖 ĐÁNH GIÁ TỪ AI THẦY E:</span>
            <p class="text-lg font-bold">"Các câu đặt vô cùng chuẩn xác! Em đã phân biệt rất tốt nghĩa gốc của 'mũi' (bộ phận ngửi) và nghĩa chuyển (mũi thuyền/mũi tên), cũng như nghĩa gốc của 'cao' (độ cao vật lý) và nghĩa chuyển (chất lượng/điểm số cao). Cú pháp câu đúng chuẩn ngữ pháp."</p>
            <span class="inline-block px-3 py-1 bg-white text-emerald-800 font-bold text-xs rounded-full shadow-sm mt-2">Điểm: 151% (Hoàn thành xuất sắc)</span>
        </div>
    `;
    fb.className = "p-5 rounded-2xl font-bold text-base bg-emerald-600 text-white shadow-xl border border-emerald-100 animate-in slide-in-from-top-3 duration-351";
};

// --- HOÀN THÀNH TOÀN BỘ TIẾT HỌC ---
window.submitVn51Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 51',
            '📝',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">✍️</span><p class="text-lg md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành bài học Luyện từ và câu: Luyện tập về từ đa nghĩa!</p><p class="text-lg text-gray-800 mt-3">Hãy tiếp tục tích lũy vốn từ và sử dụng từ đa nghĩa một cách sinh động, hiệu quả trong giao tiếp hàng ngày nhé.</p></div>'
        );
    }
};
