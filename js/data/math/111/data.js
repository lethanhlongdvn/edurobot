export const lesson111 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "111",
    "title": "BÀI 47: MÉT KHỐI",
    "desc": "Tìm hiểu đơn vị đo thể tích mét khối (m³). Mối quan hệ giữa m³, dm³ và cm³.",
    "content": `
        <div class="space-y-6 text-blue-900">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-10 rounded-[40px] shadow-2xl flex items-center gap-6 text-white">
                <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-4xl md:text-5xl">🧊</span>
                </div>
                <div>
                    <h3 class="text-3xl md:text-5xl lg:text-6xl font-black italic tracking-tight">Mét khối (m³)</h3>
                    <p class="text-xl md:text-3xl lg:text-4xl font-bold opacity-90">1 m³ = 1 000 dm³ = 1 000 000 cm³</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-6">
            <!-- Bài 1 -->
            <div id="box-111-1" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-3xl md:text-4xl lg:text-5xl mb-4 text-blue-700 flex items-center gap-3">
                    <span class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl md:text-3xl">1</span>
                    <span class="flex-1">Em hãy đọc các số đo thể tích sau:</span>
                </p>
                <div class="bg-blue-50 p-4 md:p-6 rounded-[32px] grid grid-cols-1 gap-3">
                    <div class="bg-white p-4 rounded-2xl flex flex-col md:flex-row items-center gap-4" id="box-111-1-1">
                        <span class="font-black text-3xl md:text-4xl lg:text-5xl text-blue-600 w-full md:w-40 text-center">1,25 m³</span>
                        <input type="text" id="b111-1-1" class="flex-1 bg-blue-50 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4" placeholder="Nhập cách đọc...">
                    </div>
                    <div class="bg-white p-4 rounded-2xl flex flex-col md:flex-row items-center gap-4" id="box-111-1-2">
                        <span class="font-black text-3xl md:text-4xl lg:text-5xl text-blue-600 w-full md:w-40 text-center">300 m³</span>
                        <input type="text" id="b111-1-2" class="flex-1 bg-blue-50 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4" placeholder="Nhập cách đọc...">
                    </div>
                </div>
                <div id="fb-111-1" class="mt-4 text-center text-xl font-bold min-h-[1.5rem]"></div>
            </div>

            <!-- Bài 2 -->
            <div id="box-111-2" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-3xl md:text-4xl lg:text-5xl mb-4 text-indigo-700 flex items-center gap-3">
                    <span class="w-14 h-14 md:w-16 md:h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl md:text-3xl">2</span>
                    <span class="flex-1">Chọn số đo thích hợp vào chỗ chấm:</span>
                </p>
                <div class="bg-indigo-50 p-4 md:p-6 rounded-[32px] grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-white p-4 rounded-2xl grid grid-cols-1 md:grid-cols-12 items-center gap-3">
                        <span class="md:col-span-4 lg:col-span-3 font-black text-xl md:text-2xl lg:text-3xl whitespace-nowrap text-indigo-700">3 m³ =</span>
                        <div class="md:col-span-8 lg:col-span-9 relative">
                            <input type="text" id="b111-2a" class="w-full bg-indigo-50 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4 pr-24 text-right" placeholder="Số?">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-black text-lg md:text-2xl lg:text-3xl pointer-events-none">dm³</span>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-2xl grid grid-cols-1 md:grid-cols-12 items-center gap-3">
                        <span class="md:col-span-4 lg:col-span-3 font-black text-xl md:text-2xl lg:text-3xl whitespace-nowrap text-indigo-700">1,7 m³ =</span>
                        <div class="md:col-span-8 lg:col-span-9 relative">
                            <input type="text" id="b111-2b" class="w-full bg-indigo-50 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4 pr-24 text-right" placeholder="Số?">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-black text-lg md:text-2xl lg:text-3xl pointer-events-none">dm³</span>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-2xl grid grid-cols-1 md:grid-cols-12 items-center gap-3">
                        <span class="md:col-span-4 lg:col-span-3 font-black text-xl md:text-2xl lg:text-3xl whitespace-nowrap text-indigo-700">2400 dm³ =</span>
                        <div class="md:col-span-8 lg:col-span-9 relative">
                            <input type="text" id="b111-2c" class="w-full bg-indigo-50 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4 pr-24 text-right" placeholder="Số?">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-black text-lg md:text-2xl lg:text-3xl pointer-events-none">m³</span>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-2xl grid grid-cols-1 md:grid-cols-12 items-center gap-3">
                        <span class="md:col-span-4 lg:col-span-3 font-black text-xl md:text-2xl lg:text-3xl whitespace-nowrap text-indigo-700">25 m³ =</span>
                        <div class="md:col-span-8 lg:col-span-9 relative">
                            <input type="text" id="b111-2d" class="w-full bg-indigo-50 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4 pr-24 text-right" placeholder="Số?">
                            <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-black text-lg md:text-2xl lg:text-3xl pointer-events-none">cm³</span>
                        </div>
                    </div>
                </div>
                <div id="fb-111-2" class="mt-4 text-center text-xl font-bold min-h-[1.5rem]"></div>
            </div>

            <!-- Bài 3 -->
            <div id="box-111-3" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-3xl md:text-4xl lg:text-5xl mb-4 text-orange-700 flex items-start gap-4">
                    <span class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl md:text-3xl shrink-0">3</span>
                    <span class="flex-1">Một chiếc xe tải có thùng xe dạng hình hộp chữ nhật với thể tích là 33,2 m³. Thùng xe đang chở hàng chiếm 80% thể tích. Tính thể tích phần còn trống trong thùng xe?</span>
                </p>
                <div class="bg-orange-50 p-4 md:p-6 rounded-[32px] flex flex-col gap-3">
                    <textarea id="ans-b111-3-text" rows="5" class="w-full bg-white border-none rounded-2xl p-4 text-xl md:text-3xl lg:text-4xl font-bold shadow-inner" placeholder="Nhập lời giải..."></textarea>
                    <div id="fb-111-3" class="mt-4 text-center text-xl font-bold min-h-[1.5rem] text-emerald-600"></div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-4">
                <button id="btn-submit-111" onclick="submit111()" class="btn-submit-global">Nộp bài</button>
            </div>
        </div>
    `,
    "quizPool": [
        { "question": "1 m³ bằng bao nhiêu dm³?", "options": ["10 dm³", "100 dm³", "1000 dm³", "10 000 dm³"], "answer": 2, "level": 1 }
    ],
    "presentation": []
};
