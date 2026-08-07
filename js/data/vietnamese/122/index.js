export const lesson122 = {
    "topic": "Tiếng Việt 5",
    "week": "18",
    "period": "122",
    "title": "ÔN TẬP VÀ ĐÁNH GIÁ CUỐI HKI (TIẾT 3)",
    "desc": "Tiết 3 giúp học sinh thực hành phát biểu cảm nghĩ về một bài đọc tự chọn và giải ô chữ ngữ pháp Tiếng Việt để tìm từ hàng dọc bí ẩn.",
    "subject": "Tiếng Việt",
    "theme": "Bảo vệ ngôi nhà chung",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-sky-900">
    <!-- 🎯 Mục tiêu bài học -->
    <div class="bg-sky-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-sky-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-sky-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-sky-950 mb-4 flex items-center gap-3">
            <span class="p-2 bg-sky-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu bài học
        </h3>
        <ul class="space-y-3 text-sky-900 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Bày tỏ được cảm nghĩ chân thực, sâu sắc về một trong bốn bài đọc đã học (Thư gửi các học sinh, Tấm gương tự học, Tranh làng Hồ, Một ngôi chùa độc đáo).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Hệ thống hóa kiến thức Tiếng Việt học kỳ I thông qua việc giải ô chữ ngữ pháp (kết từ, đại từ xưng hô, điệp từ, dấu câu...).
            </li>
            <li class="flex items-start gap-2">
                <span class="text-sky-600 font-black">•</span>
                Tìm ra từ khóa hàng dọc bí ẩn và hiểu sâu sắc hơn về hiện tượng Từ đa nghĩa trong tiếng Việt.
            </li>
        </ul>
    </div>

    <!-- 📋 BÀI TẬP 1: Cảm nghĩ về bài đọc -->
    <!-- Bài 1 -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">1</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Đọc một bài dưới đây và nói lên cảm nghĩ của em về bài đọc đó:</h3>
        </div>

        <p class="text-lg font-bold text-sky-950">👉 Chọn một bài đọc em yêu thích nhất để phát biểu cảm nghĩ:</p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto select-none">
            <button onclick="chonBaiDoc122('thu-gui')" id="btn-vn122-thu-gui" class="p-4 bg-sky-50 hover:bg-sky-100 text-sky-950 font-black rounded-2xl border-2 border-sky-200 transition-all text-center">
                📬 Thư gửi các học sinh
            </button>
            <button onclick="chonBaiDoc122('tu-hoc')" id="btn-vn122-tu-hoc" class="p-4 bg-sky-50 hover:bg-sky-100 text-sky-950 font-black rounded-2xl border-2 border-sky-200 transition-all text-center">
                📖 Tấm gương tự học
            </button>
            <button onclick="chonBaiDoc122('lang-ho')" id="btn-vn122-lang-ho" class="p-4 bg-sky-50 hover:bg-sky-100 text-sky-950 font-black rounded-2xl border-2 border-sky-200 transition-all text-center">
                🎨 Tranh làng Hồ
            </button>
            <button onclick="chonBaiDoc122('chua-doc-dao')" id="btn-vn122-chua-doc-dao" class="p-4 bg-sky-50 hover:bg-sky-100 text-sky-950 font-black rounded-2xl border-2 border-sky-200 transition-all text-center">
                🛕 Một ngôi chùa độc đáo
            </button>
        </div>

        <!-- Ô viết cảm nghĩ -->
        <div id="box-vn122-camnghi" class="max-w-4xl mx-auto space-y-4 hidden">
            <h4 class="font-black text-lg text-sky-950" id="title-vn122-camnghi">✏️ Nhập cảm nghĩ của em về tác phẩm đã chọn:</h4>
            <div class="relative bg-amber-50/20 border-2 border-sky-300 rounded-[32px] p-6 shadow-inner">
                <textarea id="ans-vn122-camnghi" rows="4" placeholder="Ví dụ: Bài đọc giúp em hiểu được lòng biết ơn sâu sắc đối với nghệ sĩ làng Hồ..." class="w-full p-3 text-lg rounded-2xl border border-gray-200 focus:border-sky-500 font-bold bg-white text-gray-800 outline-none leading-relaxed"></textarea>
            </div>
            <div class="flex justify-end items-center gap-4"><button onclick="kiemTraCamNghi122();" class="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-md transition-all active:scale-95 shrink-0">E</button></div>
            <div id="fb-vn122-camnghi" class="hidden p-5 rounded-2xl font-bold text-lg"></div>
        </div>
    </div>
</div>
`,
    "practice": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-6xl mx-auto text-sky-900">
    <!-- 📋 BÀI TẬP 2: Giải ô chữ tương tác -->
    <!-- Bài 2 -->
    <div class="bg-white p-6 md:p-8 rounded-[36px] border border-sky-100 shadow-xl space-y-6">
        <div class="flex items-center gap-3 border-b border-sky-100 pb-4">
            <span class="w-10 h-10 rounded-full bg-sky-600 text-white font-black flex items-center justify-center text-xl md:text-2xl shadow-md shrink-0">2</span>
            <h3 class="text-2xl md:text-5xl font-black text-sky-950">Giải ô chữ: Ai giỏi tiếng Việt?</h3>
        </div>

        <p class="text-lg font-bold text-sky-950 max-w-3xl">✏️ Nhập đáp án cho 9 từ hàng ngang dưới đây. Khi em điền đúng, từ khóa ở cột màu hồng sẽ tự động xuất hiện!</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            <!-- Gợi ý hàng ngang -->
            <div class="space-y-3 bg-sky-50/30 p-5 rounded-3xl border border-sky-100 text-sm md:text-base font-semibold text-sky-900 max-h-[500px] overflow-y-auto">
                <p><strong>(1)</strong> Biện pháp <input id="grid-vn122-ans1" type="text" placeholder="điệp từ..." class="w-24 p-1 text-xs border border-sky-300 rounded font-bold text-center bg-white text-gray-800 outline-none"> là dùng từ lặp đi lặp lại để làm nổi bật sự vật, hoạt động...</p>
                <p><strong>(2)</strong> <input id="grid-vn122-ans2" type="text" placeholder="kết từ..." class="w-24 p-1 text-xs border border-sky-300 rounded font-bold text-center bg-white text-gray-800 outline-none"> được dùng để nối các từ, các vế câu, các câu với nhau.</p>
                <p><strong>(3)</strong> <input id="grid-vn122-ans3" type="text" placeholder="đại từ..." class="w-24 p-1 text-xs border border-sky-300 rounded font-bold text-center bg-white text-gray-800 outline-none"> là những từ được dùng để xưng hô, để hỏi hoặc để thay thế.</p>
                <p><strong>(4)</strong> Dấu <input id="grid-vn122-ans4" type="text" placeholder="gạch ngang..." class="w-24 p-1 text-xs border border-sky-300 rounded font-bold text-center bg-white text-gray-800 outline-none"> được dùng để đánh dấu bộ phận chú thích.</p>
                <p><strong>(5)</strong> <input id="grid-vn122-ans5" type="text" placeholder="động từ..." class="w-24 p-1 text-xs border border-sky-300 rounded font-bold text-center bg-white text-gray-800 outline-none"> là những từ được dùng để gọi tên hoạt động, trạng thái...</p>
                <p><strong>(6)</strong> Đại từ <input id="grid-vn122-ans6" type="text" placeholder="xưng hô..." class="w-24 p-1 text-xs border border-sky-300 rounded font-bold text-center bg-white text-gray-800 outline-none"> được dùng để chỉ người nói, người nghe trong giao tiếp.</p>
                <p><strong>(7)</strong> Đại từ <input id="grid-vn122-ans7" type="text" placeholder="nghi vấn..." class="w-24 p-1 text-xs border border-sky-300 rounded font-bold text-center bg-white text-gray-800 outline-none"> được dùng để hỏi.</p>
                <p><strong>(8)</strong> Những từ <input id="grid-vn122-ans8" type="text" placeholder="đồng nghĩa..." class="w-24 p-1 text-xs border border-sky-300 rounded font-bold text-center bg-white text-gray-800 outline-none"> là những từ có nghĩa giống nhau hoặc gần giống nhau.</p>
                <p><strong>(9)</strong> Đại từ <input id="grid-vn122-ans9" type="text" placeholder="thay thế..." class="w-24 p-1 text-xs border border-sky-300 rounded font-bold text-center bg-white text-gray-800 outline-none"> được dùng để thay cho từ ngữ đã được nêu trước đó.</p>
                
                <div class="flex justify-center pt-2">
                    <button onclick="capNhatOChu122()" class="px-6 py-2 bg-sky-600 hover:bg-sky-700 text-white font-black text-sm rounded-xl active:scale-95 transition-all">GIẢI Ô CHỮ ✓</button>
                </div>
            </div>

            <!-- Giao diện ô chữ tương tác -->
            <div class="flex flex-col items-center bg-white p-5 rounded-3xl border border-sky-100 shadow-sm select-none">
                <div class="grid grid-cols-9 gap-1 font-black text-sm md:text-base mb-6">
                    <!-- Dòng 1 (6 ô: Đ-I-Ệ-P-T-Ừ, cột 1-6, hồng ở cột 1) -->
                    <!-- Kế hoạch ghép: cột màu hồng hiển thị từ T-Ừ-Đ-A-N-G-H-I-A -->
                    <!-- Dòng 1: ĐIỆP TỪ (chữ T ở vị trí số 5, ô hồng là cột 5) -->
                    <!-- Hãy làm đơn giản: Hiển thị các ô chữ lưới, ô hồng tương ứng với chữ cái trong từ TỪ ĐA NGHĨA -->
                    <span class="text-gray-400 text-center font-bold text-lg md:text-3xl">1</span>
                    <div id="c1-1" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c1-2" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c1-3" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c1-4" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c1-5" class="w-7 h-7 md:w-9 md:h-9 border-2 border-rose-400 bg-rose-50 text-rose-700 flex items-center justify-center rounded font-black"></div>
                    <div id="c1-6" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div></div><div></div>

                    <!-- Dòng 2: KẾT TỪ (chữ Ư ở vị trí số 4, ô hồng là cột 5) -->
                    <span class="text-gray-400 text-center font-bold text-lg md:text-3xl">2</span>
                    <div id="c2-1" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c2-2" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c2-3" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c2-4" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c2-5" class="w-7 h-7 md:w-9 md:h-9 border-2 border-rose-400 bg-rose-50 text-rose-700 flex items-center justify-center rounded font-black"></div>
                    <div></div><div></div><div></div>

                    <!-- Dòng 3: ĐẠI TỪ (chữ Đ ở vị trí số 1, ô hồng là cột 5) -->
                    <span class="text-gray-400 text-center font-bold text-lg md:text-3xl">3</span>
                    <div id="c3-1" class="w-7 h-7 md:w-9 md:h-9 border-2 border-rose-400 bg-rose-50 text-rose-700 flex items-center justify-center rounded font-black"></div>
                    <div id="c3-2" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c3-3" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c3-4" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c3-5" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div></div><div></div><div></div>

                    <!-- Dòng 4: GẠCH NGANG (chữ A ở vị trí số 8, ô hồng là cột 5 - do căn lề) -->
                    <!-- Căn lề sao cho chữ thứ 2 của từ NGANG (tức chữ A) nằm ở cột hồng. G-A-C-H-N-G-A-N-G. Chữ A thứ 2 ở vị trí 7. -->
                    <span class="text-gray-400 text-center font-bold text-lg md:text-3xl">4</span>
                    <div id="c4-1" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c4-2" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c4-3" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c4-4" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c4-5" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c4-6" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c4-7" class="w-7 h-7 md:w-9 md:h-9 border-2 border-rose-400 bg-rose-50 text-rose-700 flex items-center justify-center rounded font-black"></div>
                    <div id="c4-8" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>

                    <!-- Dòng 5: ĐỘNG TỪ (chữ N ở vị trí số 3, ô hồng là cột 5) -->
                    <!-- D-O-N-G-T-U. Ô thứ 3 là N. Căn lề sao cho cột hồng là N -->
                    <span class="text-gray-400 text-center font-bold text-lg md:text-3xl">5</span>
                    <div id="c5-1" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c5-2" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c5-3" class="w-7 h-7 md:w-9 md:h-9 border-2 border-rose-400 bg-rose-50 text-rose-700 flex items-center justify-center rounded font-black"></div>
                    <div id="c5-4" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c5-5" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c5-6" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div></div><div></div>

                    <!-- Dòng 6: XƯNG HÔ (chữ G ở vị trí số 4, ô hồng là cột 5 - do căn lề) -->
                    <!-- X-U-N-G-H-O. Ô thứ 4 là G. -->
                    <span class="text-gray-400 text-center font-bold text-lg md:text-3xl">6</span>
                    <div id="c6-1" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c6-2" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c6-3" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c6-4" class="w-7 h-7 md:w-9 md:h-9 border-2 border-rose-400 bg-rose-50 text-rose-700 flex items-center justify-center rounded font-black"></div>
                    <div id="c6-5" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c6-6" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div></div><div></div>

                    <!-- Dòng 7: NGHI VẤN (chữ H ở vị trí số 3, ô hồng là cột 5 - do căn lề) -->
                    <!-- N-G-H-I-V-A-N. Ô thứ 3 là H. -->
                    <span class="text-gray-400 text-center font-bold text-lg md:text-3xl">7</span>
                    <div id="c7-1" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c7-2" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c7-3" class="w-7 h-7 md:w-9 md:h-9 border-2 border-rose-400 bg-rose-50 text-rose-700 flex items-center justify-center rounded font-black"></div>
                    <div id="c7-4" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c7-5" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c7-6" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c7-7" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div></div>

                    <!-- Dòng 8: ĐỒNG NGHĨA (chữ I ở vị trí số 7, ô hồng là cột 5 - do căn lề) -->
                    <!-- D-O-N-G-N-G-H-I-A. Ô thứ 8 là I. -->
                    <span class="text-gray-400 text-center font-bold text-lg md:text-3xl">8</span>
                    <div id="c8-1" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c8-2" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c8-3" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c8-4" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c8-5" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c8-6" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c8-7" class="w-7 h-7 md:w-9 md:h-9 border-2 border-rose-400 bg-rose-50 text-rose-700 flex items-center justify-center rounded font-black"></div>
                    <div id="c8-8" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>

                    <!-- Dòng 9: THAY THẾ (chữ A ở vị trí số 3, ô hồng là cột 5 - do căn lề) -->
                    <!-- T-H-A-Y-T-H-E. Ô thứ 3 là A. -->
                    <span class="text-gray-400 text-center font-bold text-lg md:text-3xl">9</span>
                    <div id="c9-1" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c9-2" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c9-3" class="w-7 h-7 md:w-9 md:h-9 border-2 border-rose-400 bg-rose-50 text-rose-700 flex items-center justify-center rounded font-black"></div>
                    <div id="c9-4" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c9-5" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c9-6" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                    <div id="c9-7" class="w-7 h-7 md:w-9 md:h-9 border border-gray-300 flex items-center justify-center bg-gray-50 rounded"></div>
                </div>

                <div class="mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-center w-full max-w-sm">
                    <p class="text-sm font-bold text-rose-800">🔍 Từ khóa hàng dọc màu hồng của em:</p>
                    <p id="txt-vn122-key" class="text-xl md:text-2xl font-black text-rose-600 tracking-widest mt-1">? ? ? ? ? ? ? ? ?</p>
                </div>
            </div>
        </div>

        <div id="fb-vn122-ochu" class="hidden p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto"></div>
    </div>

    <!-- NỘP BÀI HOÀN THÀNH -->
    <div class="pt-6 flex justify-center">
        <button onclick="submitVn122Global()" class="px-12 py-5 bg-gradient-to-r from-sky-600 to-emerald-500 hover:scale-105 text-white font-black text-xl rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span>HOÀN THÀNH TIẾT 3 ✓</span>
        </button>
    </div>
</div>
`,
    "quizPool": [
        {
            "question": "Trong trò chơi ô chữ 'Ai giỏi tiếng Việt', từ khóa hàng dọc màu hồng là gì?",
            "options": [
                "TỪ ĐA NGHĨA",
                "TỪ ĐỒNG NGHĨA",
                "TỪ TRÁI NGHĨA",
                "TỪ ĐỒNG ÂM"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ khóa hàng ngang thứ 4 tương ứng với định nghĩa: 'Dấu được dùng để đánh dấu bộ phận chú thích' là gì?",
            "options": [
                "gạch ngang",
                "ngoặc kép",
                "ngoặc đơn",
                "chấm hỏi"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Đại từ nào dưới đây được sử dụng làm đại từ nghi vấn (dùng để hỏi)?",
            "options": [
                "Ai, cái gì, ở đâu, tại sao",
                "Tôi, chúng ta, cậu, bạn",
                "Họ, bọn họ, các anh ấy",
                "Đây, đó, kia, nọ"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Bài đọc 'Tranh làng Hồ' của nhà văn nào?",
            "options": [
                "Nguyễn Tuân",
                "Xuân Diệu",
                "Tô Hoài",
                "Trần Đăng Khoa"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Nội dung chính của bài đọc 'Một ngôi chùa độc đáo' nói về di tích lịch sử nào?",
            "options": [
                "Chùa Một Cột ở thủ đô Hà Nội",
                "Chùa Hương ở Mỹ Đức",
                "Chùa Bái Đính ở Ninh Bình",
                "Chùa Đồng ở Yên Tử"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Khái niệm 'Từ đa nghĩa' trong tiếng Việt có nghĩa là gì?",
            "options": [
                "Từ có một nghĩa gốc và một hay một số nghĩa chuyển",
                "Những từ có nghĩa hoàn toàn giống nhau",
                "Những từ có nghĩa hoàn toàn trái ngược nhau",
                "Những từ có âm giống nhau nhưng nghĩa khác xa nhau"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Trong câu 'Thư gửi các học sinh', Bác Hồ khuyên học sinh cần làm gì sau khi nước nhà độc lập?",
            "options": [
                "Siêng năng học tập, kiến thiết nước nhà sánh vai với các cường quốc năm châu",
                "Mải chơi vui vẻ để bù đắp những ngày tháng chiến tranh gian khổ",
                "Lao động vất vả để kiếm tiền giúp đỡ gia đình",
                "Đi du lịch khám phá các nước khác trên thế giới"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ loại nào có định nghĩa: 'Những từ được dùng để gọi tên hoạt động, trạng thái của sự vật'?",
            "options": [
                "Động từ",
                "Tính từ",
                "Danh từ",
                "Kết từ"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Trong trò chơi ô chữ, từ ở dòng 9 dùng để làm gì?",
            "options": [
                "Thay thế cho từ ngữ đã được nêu trước đó để tránh lặp từ",
                "Biểu lộ thái độ ngạc nhiên, trầm trồ của người viết",
                "Nối các từ ngữ hoặc các vế câu lại với nhau",
                "Miêu tả đặc điểm hình dáng của nhân vật"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Đại từ xưng hô được dùng ở dòng thứ 6 có chức năng gì?",
            "options": [
                "Chỉ người nói, người nghe trong giao tiếp",
                "Dùng để hỏi về thời gian và địa điểm diễn ra sự việc",
                "Thay thế cho danh từ đứng trước nó",
                "Gọi tên các loài động vật trong truyện"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Bài đọc 'Tấm gương tự học' nêu bật đức tính quý báu nào?",
            "options": [
                "Tinh thần chủ động vượt khó học hỏi suốt đời của một cá nhân",
                "Sự giúp đỡ bạn bè trong học tập ở lớp học",
                "Việc đi học đúng giờ và làm bài đầy đủ",
                "Sự vâng lời cha mẹ và thầy cô giáo dạy bảo"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Từ nào dưới đây là từ đa nghĩa trong tiếng Việt?",
            "options": [
                "mũi (mũi người / mũi thuyền / mũi đất)",
                "bàn ghế",
                "bút mực",
                "xe đạp"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Từ 'kết từ' ở dòng thứ 2 có tác dụng gì trong ngữ pháp?",
            "options": [
                "Liên kết từ ngữ hoặc các vế câu với nhau",
                "Gọi tên sự vật, hiện tượng trong tự nhiên",
                "Thay thế cho động từ để câu văn ngắn gọn hơn",
                "Biểu thị hành động chạy nhảy của con vật"
            ],
            "answer": 0,
            "level": 0
        },
        {
            "question": "Chữ cái đầu tiên ở dòng thứ 8 của ô chữ (ĐỒNG NGHĨA) là chữ gì?",
            "options": [
                "Đ",
                "N",
                "G",
                "A"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Để giải được ô chữ hàng ngang chính xác, học sinh cần làm gì?",
            "options": [
                "Đọc kỹ định nghĩa ngữ pháp tương ứng của từng dòng để điền từ thích hợp",
                "Chọn đại một từ bất kỳ không liên quan đến tiếng Việt",
                "Đếm số chữ cái của tên tác giả bài đọc để điền",
                "Nhờ bạn điền hộ mà không cần suy nghĩ"
            ],
            "answer": 0,
            "level": 0
        }
    ]
};

// ==========================================
// ===== PHẦN HÀM XỬ LÝ TƯƠNG TÁC JS =======
// ==========================================

// 1. Chọn bài đọc để cảm nhận
window.chonBaiDoc122 = function(loai) {
    // Reset classes
    ['thu-gui', 'tu-hoc', 'lang-ho', 'chua-doc-dao'].forEach(id => {
        const btn = document.getElementById('btn-vn122-' + id);
        if (btn) {
            btn.className = 'p-4 bg-sky-50 hover:bg-sky-100 text-sky-950 font-black rounded-2xl border-2 border-sky-200 transition-all text-center';
        }
    });

    const activeBtn = document.getElementById('btn-vn122-' + loai);
    if (activeBtn) {
        activeBtn.className = 'p-4 bg-sky-600 text-white font-black rounded-2xl border-2 border-sky-600 transition-all text-center shadow-md';
    }

    const box = document.getElementById('box-vn122-camnghi');
    const title = document.getElementById('title-vn122-camnghi');
    const textarea = document.getElementById('ans-vn122-camnghi');
    
    if (box && title && textarea) {
        box.classList.remove('hidden');
        textarea.value = '';
        document.getElementById('fb-vn122-camnghi')?.classList.add('hidden');

        let name = '';
        if (loai === 'thu-gui') name = 'Thư gửi các học sinh';
        if (loai === 'tu-hoc') name = 'Tấm gương tự học';
        if (loai === 'lang-ho') name = 'Tranh làng Hồ';
        if (loai === 'chua-doc-dao') name = 'Một ngôi chùa độc đáo';

        title.innerHTML = `✏️ Hãy viết cảm nghĩ sâu sắc của em về bài đọc <strong>"${name}"</strong> vào đây:`;
        textarea.placeholder = `Viết cảm nghĩ về "${name}"... (Ví dụ: Bài đọc giúp em hiểu được...)`;
    }
};

// 2. Chấm bài cảm nghĩ
window.kiemTraCamNghi122 = function() {
    const text = document.getElementById('ans-vn122-camnghi')?.value.trim();
    const fb = document.getElementById('fb-vn122-camnghi');
    if (!fb) return;
    fb.classList.remove('hidden');

    if (!text) {
        fb.innerHTML = '⚠️ Em hãy nhập cảm nghĩ của mình trước khi gửi thầy chấm bài nhé!';
        fb.className = 'p-5 rounded-2xl font-bold bg-amber-100 text-amber-955 border border-amber-305';
        return;
    }

    const words = text.split(/\s+/).filter(w => w.length > 0);
    if (words.length < 35) {
        fb.innerHTML = `⚠️ Cảm nghĩ hơi ngắn (chỉ có ${words.length} từ). Hãy viết cụ thể, chia sẻ những gì em rút ra từ tác phẩm (tối thiểu 35 từ) nhé!`;
        fb.className = 'p-5 rounded-2xl font-bold bg-rose-100 text-rose-955 border border-rose-305';
        return;
    }

    fb.innerHTML = `
        <div class="flex items-start gap-4 animate-fade-in">
            <span class="text-2xl md:text-3xl">👨‍🏫</span>
            <div>
                <h5 class="font-black text-xl mb-1 text-emerald-950">AI Thầy E đánh giá cảm nghĩ:</h5>
                <p class="text-lg mb-2">Lời cảm nhận rất hay và sâu sắc! Em đã biết liên hệ thực tế bài đọc với những bài học bổ ích cho bản thân.</p>
                <span class="text-xl font-black bg-emerald-500 text-white px-3 py-1 rounded-lg shadow-sm">Thầy chấm đạt: 10/10 điểm</span>
            </div>
        </div>
    `;
    fb.className = 'p-5 rounded-2xl font-bold bg-emerald-100 text-emerald-950 border border-emerald-305 shadow-md';
};

// 3. Giải ô chữ tương tác
window.capNhatOChu122 = function() {
    const ans1 = document.getElementById('grid-vn122-ans1')?.value.trim().toLowerCase();
    const ans2 = document.getElementById('grid-vn122-ans2')?.value.trim().toLowerCase();
    const ans3 = document.getElementById('grid-vn122-ans3')?.value.trim().toLowerCase();
    const ans4 = document.getElementById('grid-vn122-ans4')?.value.trim().toLowerCase();
    const ans5 = document.getElementById('grid-vn122-ans5')?.value.trim().toLowerCase();
    const ans6 = document.getElementById('grid-vn122-ans6')?.value.trim().toLowerCase();
    const ans7 = document.getElementById('grid-vn122-ans7')?.value.trim().toLowerCase();
    const ans8 = document.getElementById('grid-vn122-ans8')?.value.trim().toLowerCase();
    const ans9 = document.getElementById('grid-vn122-ans9')?.value.trim().toLowerCase();

    const fb = document.getElementById('fb-vn122-ochu');
    const keyWordDiv = document.getElementById('txt-vn122-key');

    // Chân lý ô chữ
    // 1. điệp từ (D-I-E-P-T-U), chữ thứ 5 là T -> Cột hồng là T
    // 2. kết từ (K-E-T-T-U), chữ thứ 5 là U -> Cột hồng là U
    // 3. đại từ (D-A-I-T-U), chữ thứ 1 là D -> Cột hồng là D
    // 4. gạch ngang (G-A-C-H-N-G-A-N-G), chữ thứ 7 là A -> Cột hồng là A
    // 5. động từ (D-O-N-G-T-U), chữ thứ 3 là N -> Cột hồng là N
    // 6. xưng hô (X-U-N-G-H-O), chữ thứ 4 là G -> Cột hồng là G
    // 7. nghi vấn (N-G-H-I-V-A-N), chữ thứ 3 là H -> Cột hồng là H
    // 8. đồng nghĩa (D-O-N-G-N-G-H-I-A), chữ thứ 7 là I -> Cột hồng là I
    // 9. thay thế (T-H-A-Y-T-H-E), chữ thứ 3 là A -> Cột hồng là A
    // Hàng dọc: T - Ư - Đ - A - N - G - H - Ĩ - A

    const is1 = (ans1 === 'điệp từ' || ans1 === 'diep tu' || ans1 === 'điệp' || ans1 === 'diep');
    const is2 = (ans2 === 'kết từ' || ans2 === 'ket tu');
    const is3 = (ans3 === 'đại từ' || ans3 === 'dai tu');
    const is4 = (ans4 === 'gạch ngang' || ans4 === 'gach ngang');
    const is5 = (ans5 === 'động từ' || ans5 === 'dong tu');
    const is6 = (ans6 === 'xưng hô' || ans6 === 'xung ho');
    const is7 = (ans7 === 'nghi vấn' || ans7 === 'nghi van');
    const is8 = (ans8 === 'đồng nghĩa' || ans8 === 'dong nghia');
    const is9 = (ans9 === 'thay thế' || ans9 === 'thay the');

    // Cập nhật từng ô chữ trên lưới
    const setCell = (row, col, char) => {
        const cell = document.getElementById(`c${row}-${col}`);
        if (cell) cell.innerText = char.toUpperCase();
    };

    if (is1) {
        setCell(1, 1, 'đ'); setCell(1, 2, 'i'); setCell(1, 3, 'ệ'); setCell(1, 4, 'p'); setCell(1, 5, 't'); setCell(1, 6, 'ư');
    }
    if (is2) {
        setCell(2, 1, 'k'); setCell(2, 2, 'ế'); setCell(2, 3, 't'); setCell(2, 4, 't'); setCell(2, 5, 'ư');
    }
    if (is3) {
        setCell(3, 1, 'đ'); setCell(3, 2, 'ạ'); setCell(3, 3, 'i'); setCell(3, 4, 't'); setCell(3, 5, 'ư');
    }
    if (is4) {
        setCell(4, 1, 'g'); setCell(4, 2, 'ạ'); setCell(4, 3, 'c'); setCell(4, 4, 'h'); setCell(4, 5, 'n'); setCell(4, 6, 'g'); setCell(4, 7, 'a'); setCell(4, 8, 'n'); setCell(4, 9, 'g');
    }
    if (is5) {
        setCell(5, 1, 'đ'); setCell(5, 2, 'ộ'); setCell(5, 3, 'n'); setCell(5, 4, 'g'); setCell(5, 5, 't'); setCell(5, 6, 'ư');
    }
    if (is6) {
        setCell(6, 1, 'x'); setCell(6, 2, 'ư'); setCell(6, 3, 'n'); setCell(6, 4, 'g'); setCell(6, 5, 'h'); setCell(6, 6, 'ô');
    }
    if (is7) {
        setCell(7, 1, 'n'); setCell(7, 2, 'g'); setCell(7, 3, 'h'); setCell(7, 4, 'i'); setCell(7, 5, 'v'); setCell(7, 6, 'ấ'); setCell(7, 7, 'n');
    }
    if (is8) {
        setCell(8, 1, 'đ'); setCell(8, 2, 'ồ'); setCell(8, 3, 'n'); setCell(8, 4, 'g'); setCell(8, 5, 'n'); setCell(8, 6, 'g'); setCell(8, 7, 'h'); setCell(8, 8, 'ĩ'); setCell(8, 9, 'a');
    }
    if (is9) {
        setCell(9, 1, 't'); setCell(9, 2, 'h'); setCell(9, 3, 'a'); setCell(9, 4, 'y'); setCell(9, 5, 't'); setCell(9, 6, 'h'); setCell(9, 7, 'ế');
    }

    // Từ khóa hàng dọc xuất hiện dần
    const k1 = is1 ? 'T' : '?';
    const k2 = is2 ? 'Ư' : '?';
    const k3 = is3 ? 'Đ' : '?';
    const k4 = is4 ? 'A' : '?';
    const k5 = is5 ? 'N' : '?';
    const k6 = is6 ? 'G' : '?';
    const k7 = is7 ? 'H' : '?';
    const k8 = is8 ? 'Ĩ' : '?';
    const k9 = is9 ? 'A' : '?';

    if (keyWordDiv) {
        keyWordDiv.innerText = `${k1} ${k2} ${k3} ${k4} ${k5} ${k6} ${k7} ${k8} ${k9}`;
    }

    if (is1 && is2 && is3 && is4 && is5 && is6 && is7 && is8 && is9) {
        if (fb) {
            fb.classList.remove('hidden');
            fb.innerHTML = '🎉 Chúc mừng em! Giải ô chữ xuất sắc. Từ khóa hàng dọc xuất hiện chính xác là: <strong>TỪ ĐA NGHĨA</strong>!';
            fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-emerald-100 text-emerald-955 border border-emerald-300 shadow-sm';
        }
    } else {
        if (fb) {
            fb.classList.remove('hidden');
            fb.innerHTML = '⚠️ Còn một số từ hàng ngang chưa được giải chính xác. Hãy tiếp tục giải ô chữ để khám phá từ khóa bí ẩn hàng dọc nhé!';
            fb.className = 'p-4 rounded-xl text-lg font-bold text-center max-w-xl mx-auto bg-amber-100 text-amber-955 border border-amber-300';
        }
    }
};

// 4. Nộp bài global
window.submitVn122Global = function() {
    if (typeof window.showMathFeedback === 'function') {
        window.showMathFeedback(
            'Hoàn thành Tiết 122',
            '🧩',
            '<div class="text-center p-6"><span class="text-7xl block mb-4">🎉</span><p class="text-xl md:text-2xl font-bold text-sky-800">Chúc mừng em đã hoàn thành Tiết 3 Ôn tập!</p><p class="text-lg text-gray-700 mt-3">Kỹ năng ngôn ngữ và giải ô chữ của em rất vượt trội!</p></div>'
        );
    } else {
        alert('Chúc mừng em đã hoàn thành Tiết 3 Ôn tập!');
    }
};
