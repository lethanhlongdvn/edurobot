// Tiết 161: Đọc mở rộng (Tuần 23)
export const lesson161 = {
    "topic": "Tiếng Việt 5",
    "week": "23",
    "period": "161",
    "title": "ĐỌC MỞ RỘNG",
    "desc": "Học sinh đọc phiếu đọc sách mẫu về truyện Đất rừng phương Nam, sau đó tự đọc một cuốn sách viết về miền đất và viết phiếu đọc sách theo mẫu.",
    "subject": "Đọc mở rộng",
    "theme": "Hương sắc trăm miền",
    "audio": "",
    "content": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- 🎯 Mục tiêu bài học -->
        <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl"></div>
            <h3 class="text-2xl md:text-3xl font-black text-sky-900 mb-4 flex items-center gap-3">
                <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
                Mục tiêu bài học
            </h3>
            <ul class="space-y-3 text-sky-800 font-bold text-xl md:text-2xl ml-2">
                <li class="flex items-start gap-2">
                    <span class="text-sky-900 font-black">•</span>
                    Đọc và hiểu phiếu đọc sách mẫu về truyện "Đất rừng phương Nam" (Đoàn Giỏi).
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-sky-900 font-black">•</span>
                    Biết viết phiếu đọc sách theo mẫu về một cuốn sách viết về một miền đất.
                </li>
            </ul>
        </div>

        <!-- 📋 Bài tập 1: Đọc phiếu đọc sách mẫu -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-sky-100">
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">1</div>
                    <h3 class="text-2xl md:text-3xl font-black text-sky-950">Đọc phiếu đọc sách dưới đây:</h3>
                </div>

                <!-- Phiếu đọc sách mẫu -->
                <div class="bg-sky-50/30 rounded-[32px] p-6 md:p-8 border-2 border-sky-200 shadow-inner relative overflow-hidden">
                    <!-- Tiêu đề phiếu -->
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 pb-6 border-b-2 border-sky-200">
                        <div>
                            <p class="text-lg font-bold text-sky-600 italic">Phiếu đọc sách này của Lâm Phong</p>
                            <p class="text-lg font-bold text-gray-500">Ngày đọc: 2 tháng 11 năm 2024</p>
                        </div>
                        <div class="text-right">
                            <p class="text-xl font-black text-gray-800">Tên truyện:</p>
                            <p class="text-2xl md:text-3xl font-black text-sky-800 uppercase">ĐẤT RỪNG PHƯƠNG NAM</p>
                            <p class="text-lg font-bold text-gray-600">Tác giả: <b>Đoàn Giỏi</b></p>
                            <p class="text-lg font-bold text-gray-600">Thể loại: <b>truyện</b></p>
                        </div>
                    </div>

                    <!-- Video minh hoạ -->
                    <div class="mb-8 max-w-xl mx-auto">
                        <video controls class="w-full rounded-2xl shadow-lg border-4 border-white/60">
                            <source src="assets/video/datrungphuongnam.mp4" type="video/mp4">
                            Trình duyệt không hỗ trợ video.
                        </video>
                        <p class="text-gray-500 font-bold text-center text-lg mt-2 italic">Phim "Đất rừng phương Nam"</p>
                    </div>

                    <!-- Nội dung tác phẩm -->
                    <div class="mb-8">
                        <h4 class="text-xl md:text-2xl font-black text-sky-800 mb-4 flex items-center gap-2">
                            <span class="bg-sky-600 text-white px-3 py-1 rounded-lg text-sm">📖</span>
                            Nội dung tác phẩm
                        </h4>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm">
                                <p class="text-lg md:text-xl font-bold text-gray-700 leading-relaxed">Giới thiệu về cảnh sắc của vùng đất Nam Bộ qua hành trình phiêu lưu của cậu bé An.</p>
                            </div>
                            <div class="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm">
                                <p class="text-lg md:text-xl font-bold text-gray-700 leading-relaxed">Tiền Giang, Hậu Giang, Kiên Giang, Cà Mau,... là những miền đất trù phú với những cánh đồng mênh mang, sông nước ri rào, rừng rậm bạt ngàn, có nhiều loài thú hoang dã: hổ, rắn, cá sấu,...</p>
                            </div>
                            <div class="bg-white p-5 rounded-2xl border border-sky-100 shadow-sm">
                                <p class="text-lg md:text-xl font-bold text-gray-700 leading-relaxed">Người dân Nam Bộ yêu lao động, yêu thiên nhiên, nhân ái, trí dũng, một lòng đi theo kháng chiến.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Điều ấn tượng nhất -->
                    <div class="mb-8">
                        <h4 class="text-xl md:text-2xl font-black text-amber-800 mb-4 flex items-center gap-2">
                            <span class="bg-amber-500 text-white px-3 py-1 rounded-lg text-sm">⭐</span>
                            Điều ấn tượng nhất về tác phẩm
                        </h4>
                        <div class="bg-white p-6 rounded-2xl border border-amber-100 shadow-sm">
                            <p class="text-lg md:text-xl font-bold text-gray-700 leading-relaxed mb-3">Những câu văn tả cảnh như chứa đầy âm thanh, màu sắc, hương vị:</p>
                            <p class="text-xl md:text-2xl font-bold text-amber-800 italic leading-relaxed serif-font">
                                <i>Chim hót líu lo.</i> <i>Nắng bốc hương hoa tràm thơm ngây ngất.</i> <i>Gió đưa mùi <b>hương ngọt</b> lan ra, <b>phảng phất</b> khắp rừng...</i>
                            </p>
                        </div>
                    </div>

                    <!-- Cảm nhận chung -->
                    <div class="mb-8">
                        <h4 class="text-xl md:text-2xl font-black text-emerald-800 mb-4 flex items-center gap-2">
                            <span class="bg-emerald-500 text-white px-3 py-1 rounded-lg text-sm">💚</span>
                            Cảm nhận chung về tác phẩm
                        </h4>
                        <div class="bg-white p-6 rounded-2xl border border-emerald-100 shadow-sm space-y-4">
                            <div class="flex items-start gap-3">
                                <span class="text-emerald-600 font-black text-xl shrink-0">–</span>
                                <p class="text-lg md:text-xl font-bold text-gray-700 leading-relaxed">Nhờ cuốn sách này, tôi có thêm hiểu biết về vùng đất Nam Bộ. Tôi bị choáng ngợp bởi thiên nhiên hoang sơ, đẹp đẽ lại rất êm đềm, trù phú. Tôi xúc động, trân trọng vẻ đẹp tâm hồn của con người nơi đây.</p>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="text-emerald-600 font-black text-xl shrink-0">–</span>
                                <p class="text-lg md:text-xl font-bold text-gray-700 leading-relaxed"><b>Điều tiếc nuối nhất:</b> Kết thúc tác phẩm, cậu bé An vẫn chưa được gặp lại bố mẹ của mình.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Mức độ yêu thích -->
                    <div class="flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-sky-200">
                        <span class="font-black text-sky-800 text-xl">Mức độ yêu thích:</span>
                        <div class="flex gap-2">
                            <span class="px-4 py-2 bg-sky-600 text-white font-black rounded-xl shadow-md text-lg">✓ Rất hay</span>
                            <span class="px-4 py-2 bg-gray-100 text-gray-400 font-bold rounded-xl text-lg">Khá hay</span>
                            <span class="px-4 py-2 bg-gray-100 text-gray-400 font-bold rounded-xl text-lg">Bình thường</span>
                            <span class="px-4 py-2 bg-gray-100 text-gray-400 font-bold rounded-xl text-lg hidden md:block">Không hấp dẫn</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 📖 Bài tập 2: Đọc sách về miền đất -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-sky-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">2</div>
                    <h3 class="text-2xl md:text-3xl font-black text-sky-950">Đọc một cuốn sách viết về một miền đất.</h3>
                </div>
                <div class="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                    <p class="text-xl md:text-2xl font-bold text-gray-700 leading-relaxed">
                        Em hãy tìm đọc một cuốn sách hoặc câu chuyện viết về một miền đất (quê hương, vùng miền) mà em thấy thú vị, ví dụ:
                    </p>
                    <ul class="mt-4 space-y-2 text-xl md:text-2xl font-bold text-gray-700">
                        <li class="flex items-start gap-2"><span class="text-sky-600">•</span> <i>Đất rừng phương Nam</i> (Đoàn Giỏi)</li>
                        <li class="flex items-start gap-2"><span class="text-sky-600">•</span> <i>Quê nội</i> (Võ Quảng)</li>
                        <li class="flex items-start gap-2"><span class="text-sky-600">•</span> <i>Phía tây Trường Sơn</i> (Vũ Hùng)</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
    `,
    "practice": `
    <div class="space-y-8 md:space-y-12 animate-in fade-in duration-700 max-w-6xl mx-auto pb-12">
        <!-- ✍️ Bài tập 3: Viết phiếu đọc sách -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-10 shadow-xl border border-sky-100">
                <div class="flex items-center gap-4 mb-6">
                    <div class="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-black shadow-md">3</div>
                    <h3 class="text-2xl md:text-3xl font-black text-sky-950">Viết phiếu đọc sách theo mẫu ở bài tập 1 và chia sẻ thông tin thú vị trong cuốn sách.</h3>
                </div>

                <!-- Form phiếu đọc sách -->
                <div class="bg-sky-50/30 rounded-[32px] p-6 md:p-8 border-2 border-sky-200 space-y-6">
                    <!-- Thông tin sách -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block font-black text-gray-800 text-xl mb-2">Tên sách / truyện:</label>
                            <input type="text" id="inp-161-tensach" placeholder="Ví dụ: Quê nội" class="w-full p-4 border-2 border-sky-200 rounded-xl text-xl font-bold focus:outline-none focus:border-sky-500 bg-white">
                        </div>
                        <div>
                            <label class="block font-black text-gray-800 text-xl mb-2">Tác giả:</label>
                            <input type="text" id="inp-161-tacgia" placeholder="Ví dụ: Võ Quảng" class="w-full p-4 border-2 border-sky-200 rounded-xl text-xl font-bold focus:outline-none focus:border-sky-500 bg-white">
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block font-black text-gray-800 text-xl mb-2">Thể loại:</label>
                            <select id="sel-161-theloai" class="w-full p-4 border-2 border-sky-200 rounded-xl text-xl font-bold focus:outline-none focus:border-sky-500 bg-white">
                                <option value="">-- Chọn thể loại --</option>
                                <option value="truyen">Truyện</option>
                                <option value="tho">Thơ</option>
                                <option value="kytam">Kí / Tản văn</option>
                                <option value="khac">Khác</option>
                            </select>
                        </div>
                        <div>
                            <label class="block font-black text-gray-800 text-xl mb-2">Ngày đọc:</label>
                            <input type="date" id="inp-161-ngaydoc" class="w-full p-4 border-2 border-sky-200 rounded-xl text-xl font-bold focus:outline-none focus:border-sky-500 bg-white">
                        </div>
                    </div>

                    <!-- Nội dung tác phẩm -->
                    <div>
                        <label class="block font-black text-gray-800 text-xl mb-2">📖 Nội dung tác phẩm (ghi tóm tắt):</label>
                        <textarea id="inp-161-noidung" rows="3" placeholder="Cuốn sách nói về vùng đất nào? Có những gì đặc biệt? Con người ở đó ra sao?..." class="w-full p-4 text-xl rounded-2xl border-2 border-sky-200 focus:border-sky-500 outline-none bg-white font-bold"></textarea>
                    </div>

                    <!-- Điều ấn tượng nhất -->
                    <div>
                        <label class="block font-black text-amber-800 text-xl mb-2">⭐ Điều ấn tượng nhất về tác phẩm:</label>
                        <textarea id="inp-161-antuong" rows="3" placeholder="Chi tiết, câu văn, hình ảnh nào trong sách khiến em ấn tượng nhất? Vì sao?..." class="w-full p-4 text-xl rounded-2xl border-2 border-amber-200 focus:border-amber-500 outline-none bg-white font-bold"></textarea>
                    </div>

                    <!-- Cảm nhận chung -->
                    <div>
                        <label class="block font-black text-emerald-800 text-xl mb-2">💚 Cảm nhận chung về tác phẩm:</label>
                        <textarea id="inp-161-camnhan" rows="3" placeholder="Cuốn sách giúp em hiểu thêm điều gì? Em có cảm xúc gì khi đọc? Điều tiếc nuối nhất?..." class="w-full p-4 text-xl rounded-2xl border-2 border-emerald-200 focus:border-emerald-500 outline-none bg-white font-bold"></textarea>
                    </div>

                    <!-- Mức độ yêu thích -->
                    <div>
                        <label class="block font-black text-gray-800 text-xl mb-3">Mức độ yêu thích:</label>
                        <div class="flex flex-wrap gap-3">
                            <label class="cursor-pointer"><input type="radio" name="mucdo-161" value="rat-hay" class="hidden peer"><span class="px-5 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl text-lg peer-checked:bg-sky-600 peer-checked:text-white peer-checked:shadow-lg transition-all">Rất hay</span></label>
                            <label class="cursor-pointer"><input type="radio" name="mucdo-161" value="kha-hay" class="hidden peer"><span class="px-5 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl text-lg peer-checked:bg-sky-600 peer-checked:text-white peer-checked:shadow-lg transition-all">Khá hay</span></label>
                            <label class="cursor-pointer"><input type="radio" name="mucdo-161" value="binh-thuong" class="hidden peer"><span class="px-5 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl text-lg peer-checked:bg-sky-600 peer-checked:text-white peer-checked:shadow-lg transition-all">Bình thường</span></label>
                            <label class="cursor-pointer"><input type="radio" name="mucdo-161" value="khong-hap-dan" class="hidden peer"><span class="px-5 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl text-lg peer-checked:bg-sky-600 peer-checked:text-white peer-checked:shadow-lg transition-all">Không hấp dẫn</span></label>
                        </div>
                    </div>
                </div>

                <!-- Nút nhận xét -->
                <div class="flex flex-wrap items-center gap-4 mt-8">
                    <button onclick="window.nhanXetPhieu161()" class="px-10 py-4 bg-sky-600 text-white font-black text-xl rounded-2xl shadow-lg hover:bg-sky-700 active:scale-95 transition-all flex items-center gap-3">
                        <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sky-600 font-black text-sm shadow-sm">E</div>
                        <span>NHẬN XÉT PHIẾU</span>
                    </button>
                    <button onclick="window.lamLaiPhieu161()" class="w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full flex items-center justify-center font-black text-lg shadow-md transition-all active:scale-95 shrink-0" title="Làm lại">🔄</button>
                </div>

                <div id="fb-161-phieu" class="hidden mt-8 p-8 bg-sky-900 text-white rounded-[28px] shadow-2xl animate-in slide-in-from-top-10 duration-500"></div>
            </div>
        </section>

        <!-- 🏠 Vận dụng -->
        <section class="w-full">
            <div class="bg-white rounded-[40px] p-6 md:p-8 shadow-xl border border-sky-100">
                <h3 class="text-2xl md:text-3xl font-black text-sky-950 mb-6 flex items-center gap-3">
                    <span class="text-xl md:text-3xl">🏠</span> Vận dụng sáng tạo
                </h3>
                <div class="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                    <p class="text-xl md:text-2xl font-bold text-gray-700 leading-relaxed">
                        Dựa vào cuốn sách mà em đã đọc về một miền đất, <b>vẽ tranh hoặc chia sẻ cảm xúc, suy nghĩ</b> về cảnh vật, con người,... của miền đất đó với người thân.
                    </p>
                </div>
            </div>
        </section>
    </div>
    `,
    "quizPool": [
        {
            "question": "Phiếu đọc sách mẫu trong bài là của ai?",
            "options": ["Thào A Sùng", "Lâm Phong", "Đoàn Giỏi", "Cậu bé An"],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Cuốn sách được giới thiệu trong phiếu đọc sách mẫu là gì?",
            "options": ["Quê nội", "Phía tây Trường Sơn", "Đất rừng phương Nam", "Dế Mèn Phiêu Lưu Ký"],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Tác giả của truyện 'Đất rừng phương Nam' là ai?",
            "options": ["Võ Quảng", "Tô Hoài", "Đoàn Giỏi", "Vũ Hùng"],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Thể loại của tác phẩm 'Đất rừng phương Nam' là gì?",
            "options": ["Thơ", "Truyện", "Kịch", "Tản văn"],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Vùng đất nào được giới thiệu trong truyện 'Đất rừng phương Nam'?",
            "options": ["Vùng đất Tây Bắc", "Vùng đất Nam Bộ", "Vùng đất Tây Nguyên", "Vùng đất Bắc Bộ"],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Nhân vật chính trong truyện 'Đất rừng phương Nam' là ai?",
            "options": ["Bạn Sùng", "Lâm Phong", "Cậu bé An", "Dế Mèn"],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Theo phiếu đọc sách, người dân Nam Bộ có những phẩm chất gì?",
            "options": [
                "Giàu có, sành điệu",
                "Yêu lao động, yêu thiên nhiên, nhân ái, trí dũng",
                "Hay đi du lịch, thích khám phá",
                "Lạnh lùng, ít nói"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Điều ấn tượng nhất mà Lâm Phong ghi nhận về tác phẩm là gì?",
            "options": [
                "Cốt truyện ly kỳ, hấp dẫn",
                "Những câu văn tả cảnh chứa đầy âm thanh, màu sắc, hương vị",
                "Có nhiều nhân vật phản diện",
                "Kết thúc có hậu"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Mức độ yêu thích mà Lâm Phong đánh giá cho cuốn sách là gì?",
            "options": ["Bình thường", "Khá hay", "Rất hay", "Không hấp dẫn"],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Điều tiếc nuối nhất mà Lâm Phong ghi trong phiếu là gì?",
            "options": [
                "Sách quá dài, đọc mệt",
                "Kết thúc tác phẩm, cậu bé An vẫn chưa được gặp lại bố mẹ",
                "Không có tranh minh hoạ",
                "Không được đọc tiếp phần 2"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phiếu đọc sách mẫu gồm những phần nào?",
            "options": [
                "Tên sách, tóm tắt, bài học rút ra",
                "Nội dung tác phẩm, điều ấn tượng nhất, cảm nhận chung, mức độ yêu thích",
                "Chỉ có tóm tắt nội dung",
                "Chỉ có tên tác giả và thể loại"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Các tỉnh nào ở Nam Bộ được nhắc đến trong phiếu?",
            "options": [
                "Hà Nội, Hải Phòng, Quảng Ninh",
                "Tiền Giang, Hậu Giang, Kiên Giang, Cà Mau",
                "Sơn La, Lai Châu, Điện Biên",
                "Đắk Lắk, Gia Lai, Kon Tum"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Các loài thú hoang dã nào được nhắc đến trong phiếu đọc sách?",
            "options": [
                "Sư tử, hươu cao cổ, voi",
                "Hổ, rắn, cá sấu",
                "Gấu trúc, cáo, sói",
                "Đại bàng, chim công, khỉ"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Bài tập 2 yêu cầu em làm gì?",
            "options": [
                "Viết một bài thơ về quê hương",
                "Đọc một cuốn sách viết về một miền đất",
                "Vẽ tranh về trường học",
                "Kể chuyện cười cho bạn nghe"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Phần vận dụng yêu cầu em làm gì?",
            "options": [
                "Viết bài văn tả phong cảnh",
                "Vẽ tranh hoặc chia sẻ cảm xúc về cảnh vật, con người của miền đất đã đọc",
                "Đọc thêm 5 cuốn sách",
                "Làm bài kiểm tra viết"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};

// --- HÀM TƯƠNG TÁC GIAO DIỆN (WINDOW GLOBALS) ---

// Nhận xét phiếu đọc sách bằng AI
window.nhanXetPhieu161 = async function () {
    const tenSach = document.getElementById('inp-161-tensach')?.value.trim() || '';
    const tacGia = document.getElementById('inp-161-tacgia')?.value.trim() || '';
    const noiDung = document.getElementById('inp-161-noidung')?.value.trim() || '';
    const anTuong = document.getElementById('inp-161-antuong')?.value.trim() || '';
    const camNhan = document.getElementById('inp-161-camnhan')?.value.trim() || '';

    if (!tenSach && !noiDung) {
        alert("Em hãy điền ít nhất tên sách và nội dung tác phẩm nhé!");
        return;
    }

    const fb = document.getElementById('fb-161-phieu');
    fb.classList.remove('hidden');
    fb.innerHTML = `
        <div class="flex items-center gap-4 mb-4">
            <div class="animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
            <p class="text-xl font-bold italic">Hệ thống đang nhận xét phiếu đọc sách của em...</p>
        </div>
    `;

    if (typeof askAI === 'function') {
        const prompt = `Hãy nhận xét phiếu đọc sách của học sinh lớp 5 về một cuốn sách viết về miền đất.
        Tên sách: "${tenSach}"
        Tác giả: "${tacGia || '(chưa ghi)'}"
        Nội dung tác phẩm: "${noiDung || '(chưa ghi)'}"
        Điều ấn tượng nhất: "${anTuong || '(chưa ghi)'}"
        Cảm nhận chung: "${camNhan || '(chưa ghi)'}"

        Yêu cầu nhận xét:
        1. Phiếu đọc sách có đầy đủ các phần không (tên sách, tác giả, nội dung, ấn tượng, cảm nhận)?
        2. Phần nội dung có nêu được vùng đất, cảnh vật, con người không?
        3. Phần ấn tượng có cụ thể (trích dẫn, chi tiết) không?
        4. Phần cảm nhận có thể hiện cảm xúc chân thực không?
        5. Gợi ý cải thiện và cổ vũ nhẹ nhàng. Thang điểm 10.`;

        await askAI('161-phieu', prompt, 'single', 'writing', 161);
    } else {
        fb.innerHTML = "Lỗi: Hệ thống AI chưa sẵn sàng.";
    }
};

// Làm lại phiếu đọc sách
window.lamLaiPhieu161 = function () {
    ['inp-161-tensach', 'inp-161-tacgia', 'inp-161-noidung', 'inp-161-antuong', 'inp-161-camnhan'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
    const sel = document.getElementById('sel-161-theloai');
    if (sel) sel.value = '';
    const dateInput = document.getElementById('inp-161-ngaydoc');
    if (dateInput) dateInput.value = '';
    // Xoá radio
    document.querySelectorAll('input[name="mucdo-161"]').forEach(r => r.checked = false);
    const fb = document.getElementById('fb-161-phieu');
    if (fb) { fb.classList.add('hidden'); fb.innerHTML = ''; }
};
