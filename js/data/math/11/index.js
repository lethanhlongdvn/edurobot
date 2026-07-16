const metadata = {
    "lessonInfo": {
        "period": "11",
        "week": "3",
        "topic": "Phân số",
        "title": "BÀI 6: CỘNG, TRỪ HAI PHÂN SỐ KHÁC MẪU SỐ (TIẾT 1)",
        "desc": "Tìm hiểu và luyện tập quy tắc cộng, trừ hai phân số khác mẫu số thông qua quy đồng mẫu số."
    },
    "bai_tap": [
        {
            "id": "11_1a",
            "type": "fill_multiple",
            "title": "Bài 1a. Tính tổng phân số",
            "answers": ["16", "63", "113", "132", "113", "30"],
            "guidance": "Quy đồng mẫu số các phân số về cùng một mẫu chung, sau đó cộng các tử số lại và giữ nguyên mẫu số chung.",
            "solution": "- 1/7 + 1/9 = 9/63 + 7/63 = 16/63.<br>- 3/11 + 7/12 = 36/132 + 77/132 = 113/132.<br>- 13/5 + 7/6 = 78/30 + 35/30 = 113/30. Em làm xuất sắc!"
        },
        {
            "id": "11_1b",
            "type": "fill_multiple",
            "title": "Bài 1b. Tính hiệu phân số",
            "answers": ["5", "36", "3", "20", "53", "56"],
            "guidance": "Quy đồng mẫu số các phân số về mẫu số chung, sau đó lấy tử số của phân số thứ nhất trừ đi tử số của phân số thứ hai.",
            "solution": "- 1/4 - 1/9 = 9/36 - 4/36 = 5/36.<br>- 2/5 - 1/4 = 8/20 - 5/20 = 3/20.<br>- 11/7 - 5/8 = 88/56 - 35/56 = 53/56.<br>Rất chính xác!"
        },
        {
            "id": "11_2",
            "type": "fill_multiple",
            "title": "Bài 2. Tính số phần bể nước cả hai vòi chảy được",
            "answers": ["9", "10"],
            "guidance": "Em hãy cộng số phần bể vòi thứ nhất chảy được với số phần bể vòi thứ hai chảy được, chú ý quy đồng mẫu số hai phân số về cùng một mẫu số chung nhé!",
            "solution": "Cả hai vòi chảy được số phần bể nước là:<br>1/2 + 2/5 = 5/10 + 4/10 = 9/10 (bể)<br>Đáp số: 9/10 bể nước. Em giỏi lắm!"
        }
    ],
    "quizPool": [
        { "question": "Muốn cộng hai phân số khác mẫu số, bước đầu tiên ta cần làm là gì?", "options": ["Cộng tử với tử, mẫu với mẫu", "Quy đồng mẫu số hai phân số", "Nhân tử số phân số này với mẫu phân số kia", "Đảo ngược phân số thứ hai"], "answer": 1 },
        { "question": "Kết quả của phép tính 1/3 + 1/4 là:", "options": ["2/7", "7/12", "1/7", "5/12"], "answer": 1 },
        { "question": "Kết quả của phép tính 3/5 - 1/2 là:", "options": ["2/3", "1/10", "4/7", "2/10"], "answer": 1 },
        { "question": "Tính: 5/6 + 1/12 = ...", "options": ["6/18", "11/12", "7/12", "9/12"], "answer": 1 },
        { "question": "Tính: 3/4 - 1/3 = ...", "options": ["2/1", "5/12", "4/7", "1/12"], "answer": 1 },
        { "question": "Kết quả phép tính 2/7 + 3/5 là:", "options": ["5/12", "6/35", "31/35", "29/35"], "answer": 2 },
        { "question": "Kết quả phép tính 7/8 - 1/4 là:", "options": ["6/8", "5/8", "6/4", "3/8"], "answer": 1 },
        { "question": "Tính: 1/2 + 1/6 = ... (kết quả đã rút gọn tối giản)", "options": ["2/3", "4/6", "2/8", "1/3"], "answer": 0 },
        { "question": "Hiệu của 11/12 và 2/3 là:", "options": ["9/12", "3/12", "1/4", "Cả B và C đều đúng"], "answer": 3 },
        { "question": "Vòi thứ nhất chảy được 1/3 bể nước, vòi thứ hai chảy được 2/9 bể nước. Cả hai vòi chảy được:", "options": ["3/12 bể", "5/9 bể", "7/9 bể", "4/9 bể"], "answer": 1 },
        { "question": "Phân số 5/6 lớn hơn phân số 3/4 bao nhiêu?", "options": ["2/2", "1/12", "2/12", "8/10"], "answer": 1 },
        { "question": "Tính giá trị biểu thức: 1/2 + 1/3 + 1/6 = ...", "options": ["1", "5/6", "3/11", "2/3"], "answer": 0 },
        { "question": "Tìm x, biết x - 1/4 = 3/8. Giá trị của x là:", "options": ["1/2", "5/8", "4/12", "7/8"], "answer": 1 },
        { "question": "Tính nhanh: 7/8 - 1/3 + 1/8 - 2/3 =", "options": ["0", "1/3", "1", "1/2"], "answer": 0 },
        { "question": "Một người bán hàng, buổi sáng bán được 2/5 số dưa hấu, buổi chiều bán được 1/3 số dưa hấu. Số dưa hấu còn lại là bao nhiêu phần?", "options": ["11/15", "4/15", "7/15", "3/5"], "answer": 1 }
    ]
};
window.MATH_BUILDER_METADATA = metadata;

export const lesson11 = {
    ...metadata.lessonInfo,
    "content": `
        <div class="theory-section space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 pt-6">
            <div class="glass-card p-6 md:p-10 rounded-[3rem] bg-gradient-to-br from-teal-600 to-emerald-700 shadow-2xl relative overflow-hidden text-white">
<div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
<div class="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/20 rounded-full -ml-10 -mb-10 blur-2xl"></div>
<div class="flex flex-col md:flex-row items-center gap-8 relative z-10">
<div class="w-24 h-24 md:w-32 md:h-32 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center shadow-inner border border-white/30 animate-pulse">
<span class="text-5xl md:text-7xl">🥤</span>
</div>
<div class="text-center md:text-left">
<h2 class="text-2xl md:text-4xl font-black mb-2 tracking-tight">CỘNG, TRỪ HAI PHÂN SỐ KHÁC MẪU SỐ</h2>
<p class="text-teal-100 text-lg md:text-2xl font-medium opacity-90">Học cách cộng trừ phân số khác mẫu số thông qua câu chuyện thực tế</p>
</div>
</div>
</div>
<div class="glass-card p-6 md:p-10 rounded-[3rem] bg-white shadow-xl border border-teal-100 relative overflow-hidden">
<div class="flex items-center gap-4 mb-6">
<div class="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-white text-xl md:text-3xl shadow-lg shadow-teal-200">
<i class="fas fa-flask"></i>
</div>
<h3 class="text-2xl md:text-4xl font-black text-slate-800">Hoạt động khám phá</h3>
</div>
<div class="p-4 bg-slate-50 rounded-[2.5rem] border border-slate-200 flex flex-col items-center gap-6">
<div class="text-slate-700 font-bold text-lg md:text-2xl font-medium text-center leading-relaxed w-full">
                        Việt đổ <span class="text-blue-600 font-black">1/5 lít</span> nước vào bình, Mai đổ thêm <span class="text-emerald-600 font-black">1/2 lít</span> nước vào bình. Hãy xem tổng lượng nước trong bình sẽ dâng lên như thế nào nhé!
                    </div>
<!-- 3 Bình nước mô phỏng bằng nhau -->
<div class="flex gap-4 sm:gap-8 justify-center items-end py-4 w-full w-full">
    <!-- Bình 1: Việt (1/5) -->
    <div class="flex flex-col items-center">
        <span class="text-xs font-bold text-slate-500 mb-1">Việt: 1/5 l (2/10 l)</span>
        <div class="w-20 h-40 border-4 border-slate-400 rounded-b-2xl relative bg-white overflow-hidden shadow-inner">
            <!-- Nước của Việt (Màu xanh dương) -->
            <div id="jug-viet-water" class="absolute bottom-0 left-0 right-0 bg-blue-400 transition-all" style="height: 20%;"></div>
            <!-- Vạch chia từ 1-10 chính xác -->
            <div class="absolute inset-0 pointer-events-none text-[8px] font-bold text-slate-400/80 z-10">
                <div class="absolute w-full flex justify-between px-1.5" style="bottom: 95%;"><span>10</span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 90%;"><span>9</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 80%;"><span>8</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 70%;"><span>7</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 60%;"><span>6</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 50%;"><span>5</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 40%;"><span>4</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 30%;"><span>3</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 20%;"><span>2</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 10%;"><span>1</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
            </div>
        </div>
    </div>

    <!-- Bình 2: Mai (1/2) -->
    <div class="flex flex-col items-center">
        <span class="text-xs font-bold text-slate-500 mb-1">Mai: 1/2 l (5/10 l)</span>
        <div class="w-20 h-40 border-4 border-slate-400 rounded-b-2xl relative bg-white overflow-hidden shadow-inner">
            <!-- Nước của Mai (Màu xanh lá) -->
            <div id="jug-mai-water" class="absolute bottom-0 left-0 right-0 bg-emerald-400 transition-all" style="height: 50%;"></div>
            <!-- Vạch chia từ 1-10 chính xác -->
            <div class="absolute inset-0 pointer-events-none text-[8px] font-bold text-slate-400/80 z-10">
                <div class="absolute w-full flex justify-between px-1.5" style="bottom: 95%;"><span>10</span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 90%;"><span>9</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 80%;"><span>8</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 70%;"><span>7</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 60%;"><span>6</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 50%;"><span>5</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 40%;"><span>4</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 30%;"><span>3</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 20%;"><span>2</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 10%;"><span>1</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
            </div>
        </div>
    </div>

    <!-- Bình 3: Tổng cộng (1/5 + 1/2 = 7/10) -->
    <div class="flex flex-col items-center">
        <span class="text-xs font-bold text-slate-700 mb-1">Cả hai bạn (7/10 l)</span>
        <div class="w-20 h-40 border-4 border-slate-600 rounded-b-2xl relative bg-white overflow-hidden shadow-md">
            <!-- Nước của Việt rót sang (Màu xanh dương ở đáy: 0% -> 20%) -->
            <div id="jug-total-blue" class="absolute bottom-0 left-0 right-0 bg-blue-400 transition-all" style="height: 0%;"></div>
            <!-- Nước của Mai rót đè lên (Màu xanh lá ở trên: 0% -> 50%, xếp từ 20% trở lên) -->
            <div id="jug-total-green" class="absolute left-0 right-0 bg-emerald-400 transition-all" style="height: 0%; bottom: 20%;"></div>
            <!-- Vạch chia từ 1-10 chính xác -->
            <div class="absolute inset-0 pointer-events-none text-[8px] font-bold text-slate-400/80 z-10">
                <div class="absolute w-full flex justify-between px-1.5" style="bottom: 95%;"><span>10</span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 90%;"><span>9</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 80%;"><span>8</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 70%;"><span>7</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 60%;"><span>6</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 50%;"><span>5</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 40%;"><span>4</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 30%;"><span>3</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 20%;"><span>2</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
                <div class="absolute w-full border-b border-slate-300/40 flex justify-between px-1.5" style="bottom: 10%;"><span>1</span><span class="w-2 h-0.5 bg-slate-300"></span></div>
            </div>
        </div>
    </div>
</div>
<div class="flex flex-wrap gap-4 justify-center items-center">
    <button class="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-black text-lg md:text-2xl font-medium rounded-2xl shadow-lg shadow-teal-200 hover:scale-105 active:scale-95 transition-all" onclick="window.runPourSimulation()">🥤 Bắt đầu rót nước</button>
    <button class="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black text-lg md:text-2xl font-medium rounded-2xl shadow-lg shadow-amber-200 hover:scale-105 active:scale-95 transition-all" onclick="window.togglePourMethod()">📖 Cách làm</button>
</div>
<div class="hidden text-teal-800 font-black text-lg md:text-2xl text-center animate-bounce mt-4" id="pour-result-text">
    Cả hai bạn đã đổ: 1/5 + 1/2 = 7/10 (lít nước)!
</div>

<!-- Cách làm chi tiết như Sách giáo khoa -->
<div id="pour-method-box" class="hidden mt-6 p-6 md:p-8 rounded-[2.5rem] bg-amber-50/50 border-2 border-amber-300 space-y-6 text-slate-800 animate-in fade-in slide-in-from-top-4 duration-500 w-full w-full">
    <div class="text-xl md:text-2xl font-black text-amber-900 border-b-2 border-amber-200 pb-2">
        📖 Hướng dẫn cách làm chi tiết (SGK):
    </div>
    
    <div class="space-y-6">
        <!-- Phần a) Phép cộng -->
        <div class="space-y-3">
            <h3 class="text-lg md:text-xl font-black text-emerald-800 border-b border-emerald-100 pb-1">a) Phép cộng: 1/5 + 1/2 = ? (l)</h3>
            <div>
                <h4 class="text-base md:text-lg font-bold text-slate-800 mb-1">• Quy đồng mẫu số:</h4>
                <p class="text-sm md:text-base font-medium text-slate-700 leading-relaxed pl-4 mb-2">
                    Hai mẫu số <span class="text-rose-500 font-bold">5</span> và <span class="text-blue-500 font-bold">2</span> không chia hết cho nhau. Mẫu số chung là <span class="text-emerald-600 font-black">10</span>.
                </p>
                <div class="flex flex-wrap items-center gap-6 pl-4 py-1 text-base md:text-lg font-black">
                    <div class="flex items-center gap-1.5">
                        <div class="flex flex-col items-center">
                            <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>5</span>
                        </div>
                        <span>=</span>
                        <div class="flex flex-col items-center">
                            <span>1 &times; 2</span><div class="w-16 h-0.5 bg-slate-600 my-1"></div><span>5 &times; 2</span>
                        </div>
                        <span>=</span>
                        <div class="flex flex-col items-center">
                            <span>2</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>10</span>
                        </div>
                    </div>
                    <span class="text-slate-400">;</span>
                    <div class="flex items-center gap-1.5">
                        <div class="flex flex-col items-center">
                            <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>2</span>
                        </div>
                        <span>=</span>
                        <div class="flex flex-col items-center">
                            <span>1 &times; 5</span><div class="w-16 h-0.5 bg-slate-600 my-1"></div><span>2 &times; 5</span>
                        </div>
                        <span>=</span>
                        <div class="flex flex-col items-center">
                            <span>5</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>10</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <h4 class="text-base md:text-lg font-bold text-slate-800 mb-1">• Thực hiện phép cộng:</h4>
                <div class="flex items-center gap-1.5 pl-4 text-base md:text-lg font-black">
                    <div class="flex flex-col items-center">
                        <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>5</span>
                    </div>
                    <span>+</span>
                    <div class="flex flex-col items-center">
                        <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>2</span>
                    </div>
                    <span>=</span>
                    <div class="flex flex-col items-center">
                        <span>2</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>10</span>
                    </div>
                    <span>+</span>
                    <div class="flex flex-col items-center">
                        <span>5</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>10</span>
                    </div>
                    <span>=</span>
                    <div class="flex flex-col items-center">
                        <span>7</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>10</span>
                    </div>
                    <span class="text-sm md:text-base font-bold text-slate-600 ml-1.5">(l)</span>
                </div>
            </div>
        </div>

        <!-- Phần b) Phép trừ -->
        <div class="space-y-3 pt-2">
            <h3 class="text-lg md:text-xl font-black text-blue-800 border-b border-blue-100 pb-1">b) Phép trừ: 1/2 - 1/5 = ? (l)</h3>
            <p class="text-sm md:text-base font-medium text-slate-600 italic">Mai và Việt, ai đổ nước vào bình nhiều hơn và nhiều hơn bao nhiêu lít nước?</p>
            <div>
                <h4 class="text-base md:text-lg font-bold text-slate-800 mb-1">• Quy đồng mẫu số:</h4>
                <div class="flex flex-wrap items-center gap-6 pl-4 py-1 text-base md:text-lg font-black">
                    <div class="flex items-center gap-1.5">
                        <div class="flex flex-col items-center">
                            <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>2</span>
                        </div>
                        <span>=</span>
                        <div class="flex flex-col items-center">
                            <span>1 &times; 5</span><div class="w-16 h-0.5 bg-slate-600 my-1"></div><span>2 &times; 5</span>
                        </div>
                        <span>=</span>
                        <div class="flex flex-col items-center">
                            <span>5</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>10</span>
                        </div>
                    </div>
                    <span class="text-slate-400">;</span>
                    <div class="flex items-center gap-1.5">
                        <div class="flex flex-col items-center">
                            <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>5</span>
                        </div>
                        <span>=</span>
                        <div class="flex flex-col items-center">
                            <span>1 &times; 2</span><div class="w-16 h-0.5 bg-slate-600 my-1"></div><span>5 &times; 2</span>
                        </div>
                        <span>=</span>
                        <div class="flex flex-col items-center">
                            <span>2</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>10</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <h4 class="text-base md:text-lg font-bold text-slate-800 mb-1">• Thực hiện phép trừ:</h4>
                <div class="flex items-center gap-1.5 pl-4 text-base md:text-lg font-black">
                    <div class="flex flex-col items-center">
                        <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>2</span>
                    </div>
                    <span>-</span>
                    <div class="flex flex-col items-center">
                        <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>5</span>
                    </div>
                    <span>=</span>
                    <div class="flex flex-col items-center">
                        <span>5</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>10</span>
                    </div>
                    <span>-</span>
                    <div class="flex flex-col items-center">
                        <span>2</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>10</span>
                    </div>
                    <span>=</span>
                    <div class="flex flex-col items-center">
                        <span>3</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>10</span>
                    </div>
                    <span class="text-sm md:text-base font-bold text-slate-600 ml-1.5">(l)</span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Khối Ghi nhớ của bài học -->
<div class="mt-6 p-6 rounded-[2.5rem] bg-sky-50 border-2 border-sky-300 text-slate-800 shadow-md w-full w-full">
    <div class="flex items-start gap-4">
        <div class="text-2xl md:text-4xl animate-bounce">💡</div>
        <div>
            <h4 class="text-lg md:text-2xl font-black text-sky-900 mb-1">Ghi nhớ:</h4>
            <p class="text-base md:text-xl font-bold text-sky-950 leading-relaxed">
                Muốn cộng (hoặc trừ) hai phân số khác mẫu số, ta quy đồng mẫu số rồi cộng (hoặc trừ) hai phân số đã quy đồng mẫu số.
            </p>
        </div>
    </div>
</div>

</div>
</div>
        </div>
        <script>
            window.togglePourMethod = function() {
                const box = document.getElementById('pour-method-box');
                if (box) {
                    box.classList.toggle('hidden');
                }
            };

            window.runPourSimulation = function() {
                const jugViet = document.getElementById('jug-viet-water');
                const jugMai = document.getElementById('jug-mai-water');
                const jugTotalBlue = document.getElementById('jug-total-blue');
                const jugTotalGreen = document.getElementById('jug-total-green');
                const resultText = document.getElementById('pour-result-text');
                
                if (!jugViet || !jugMai || !jugTotalBlue || !jugTotalGreen) return;
                
                // Nếu đang hết nước ở hai bình con (đã rót xong), cho phép bấm lại để Reset và chạy lại từ đầu
                if (jugViet.style.height === '0%' || jugViet.style.height === '0px') {
                    jugViet.style.transition = 'none';
                    jugMai.style.transition = 'none';
                    jugTotalBlue.style.transition = 'none';
                    jugTotalGreen.style.transition = 'none';
                    
                    jugViet.style.height = '20%';
                    jugMai.style.height = '50%';
                    jugTotalBlue.style.height = '0%';
                    jugTotalGreen.style.height = '0%';
                    if (resultText) resultText.classList.add('hidden');
                    
                    // Trigger reflow
                    void jugViet.offsetHeight;
                }
                
                // Bước 1: Nước bình 1 (Việt) đổ trước (Blue: 20% -> 0% ở bình con, 0% -> 20% ở bình chung)
                setTimeout(() => {
                    jugViet.style.transition = 'height 1s ease-in-out';
                    jugTotalBlue.style.transition = 'height 1s ease-in-out';
                    
                    jugViet.style.height = '0%';
                    jugTotalBlue.style.height = '20%';
                }, 50);
                
                // Bước 2: Nước bình 2 (Mai) đổ sau (Green: 50% -> 0% ở bình con, 0% -> 50% ở bình chung sau 1.2s delay)
                setTimeout(() => {
                    jugMai.style.transition = 'height 1.2s ease-in-out';
                    jugTotalGreen.style.transition = 'height 1.2s ease-in-out';
                    
                    jugMai.style.height = '0%';
                    jugTotalGreen.style.height = '50%';
                    
                    if (resultText) {
                        resultText.classList.remove('hidden');
                    }
                }, 1150);
            };
        </script>
        `,
    "practice": `
        <div class="-mx-8 md:-mx-12 mt-2 -mb-8 md:-mb-12 text-xl md:text-3xl">
            <div id="ltViewport" style="overflow:hidden; width:100%; position:relative;">
                <div id="ltTrack" style="display:flex; transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);">  

                    <!-- Trang 1: Bài 1a -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-4 md:p-6 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-3">1</div>
                                <h3 class="text-lg md:text-2xl text-teal-900 font-black uppercase tracking-tighter">Bài 1a. Tính tổng các phân số khác mẫu số</h3>
                            </div>
                            
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <!-- Khối 1 -->
                                <div class="p-4 bg-teal-50/20 rounded-[2rem] border border-teal-100 flex flex-col justify-between items-center text-center">
                                    <div class="flex items-center gap-3 font-black text-xl md:text-3xl mb-4">
                                        <div class="flex flex-col items-center">
                                            <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>7</span>
                                        </div>
                                        <span>+</span>
                                        <div class="flex flex-col items-center">
                                            <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>9</span>
                                        </div>
                                        <span>=</span>
                                        <div class="flex flex-col items-center">
                                            <input type="text" id="ans-11-1a-tu" class="w-12 h-12 border border-teal-300 rounded-xl text-center font-black md:text-2xl text-teal-600 outline-none focus:border-teal-500 shadow-inner w-10" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            <div class="w-12 h-0.5 bg-slate-600 my-1"></div>
                                            <input type="text" id="ans-11-1a-mau" class="w-12 h-12 border border-teal-300 rounded-xl text-center font-black md:text-2xl text-teal-600 outline-none focus:border-teal-500 shadow-inner w-10" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        </div>
                                    </div>
                                </div>

                                <!-- Khối 2 -->
                                <div class="p-4 bg-teal-50/20 rounded-[2rem] border border-teal-100 flex flex-col justify-between items-center text-center">
                                    <div class="flex items-center gap-3 font-black text-xl md:text-3xl mb-4">
                                        <div class="flex flex-col items-center">
                                            <span>3</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>11</span>
                                        </div>
                                        <span>+</span>
                                        <div class="flex flex-col items-center">
                                            <span>7</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>12</span>
                                        </div>
                                        <span>=</span>
                                        <div class="flex flex-col items-center">
                                            <input type="text" id="ans-11-1b-tu" class="w-12 h-12 border border-teal-300 rounded-xl text-center font-black md:text-2xl text-teal-600 outline-none focus:border-teal-500 shadow-inner w-10" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            <div class="w-12 h-0.5 bg-slate-600 my-1"></div>
                                            <input type="text" id="ans-11-1b-mau" class="w-12 h-12 border border-teal-300 rounded-xl text-center font-black md:text-2xl text-teal-600 outline-none focus:border-teal-500 shadow-inner w-10" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        </div>
                                    </div>
                                </div>

                                <!-- Khối 3 -->
                                <div class="p-4 bg-teal-50/20 rounded-[2rem] border border-teal-100 flex flex-col justify-between items-center text-center">
                                    <div class="flex items-center gap-3 font-black text-xl md:text-3xl mb-4">
                                        <div class="flex flex-col items-center">
                                            <span>13</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>5</span>
                                        </div>
                                        <span>+</span>
                                        <div class="flex flex-col items-center">
                                            <span>7</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>6</span>
                                        </div>
                                        <span>=</span>
                                        <div class="flex flex-col items-center">
                                            <input type="text" id="ans-11-1c-tu" class="w-12 h-12 border border-teal-300 rounded-xl text-center font-black md:text-2xl text-teal-600 outline-none focus:border-teal-500 shadow-inner w-10" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            <div class="w-12 h-0.5 bg-slate-600 my-1"></div>
                                            <input type="text" id="ans-11-1c-mau" class="w-12 h-12 border border-teal-300 rounded-xl text-center font-black md:text-2xl text-teal-600 outline-none focus:border-teal-500 shadow-inner w-10" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button id="btn-check-11-1a" onclick="window.check_11_1a()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 2: Bài 1b -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-4 md:p-6 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform rotate-2">1</div>
                                <h3 class="text-lg md:text-2xl text-teal-900 font-black uppercase tracking-tighter">Bài 1b. Tính hiệu các phân số khác mẫu số</h3>
                            </div>
                            
                            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                                <!-- Khối 1 -->
                                <div class="p-4 bg-teal-50/20 rounded-[2rem] border border-teal-100 flex flex-col justify-between items-center text-center">
                                    <div class="flex items-center gap-3 font-black text-xl md:text-3xl mb-4">
                                        <div class="flex flex-col items-center">
                                            <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>4</span>
                                        </div>
                                        <span>-</span>
                                        <div class="flex flex-col items-center">
                                            <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>9</span>
                                        </div>
                                        <span>=</span>
                                        <div class="flex flex-col items-center">
                                            <input type="text" id="ans-11-1d-tu" class="w-12 h-12 border border-teal-300 rounded-xl text-center font-black md:text-2xl text-teal-600 outline-none focus:border-teal-500 shadow-inner w-10" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            <div class="w-12 h-0.5 bg-slate-600 my-1"></div>
                                            <input type="text" id="ans-11-1d-mau" class="w-12 h-12 border border-teal-300 rounded-xl text-center font-black md:text-2xl text-teal-600 outline-none focus:border-teal-500 shadow-inner w-10" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        </div>
                                    </div>
                                </div>

                                <!-- Khối 2 -->
                                <div class="p-4 bg-teal-50/20 rounded-[2rem] border border-teal-100 flex flex-col justify-between items-center text-center">
                                    <div class="flex items-center gap-3 font-black text-xl md:text-3xl mb-4">
                                        <div class="flex flex-col items-center">
                                            <span>2</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>5</span>
                                        </div>
                                        <span>-</span>
                                        <div class="flex flex-col items-center">
                                            <span>1</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>4</span>
                                        </div>
                                        <span>=</span>
                                        <div class="flex flex-col items-center">
                                            <input type="text" id="ans-11-1e-tu" class="w-12 h-12 border border-teal-300 rounded-xl text-center font-black md:text-2xl text-teal-600 outline-none focus:border-teal-500 shadow-inner w-10" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            <div class="w-12 h-0.5 bg-slate-600 my-1"></div>
                                            <input type="text" id="ans-11-1e-mau" class="w-12 h-12 border border-teal-300 rounded-xl text-center font-black md:text-2xl text-teal-600 outline-none focus:border-teal-500 shadow-inner w-10" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        </div>
                                    </div>
                                </div>

                                <!-- Khối 3 -->
                                <div class="p-4 bg-teal-50/20 rounded-[2rem] border border-teal-100 flex flex-col justify-between items-center text-center">
                                    <div class="flex items-center gap-3 font-black text-xl md:text-3xl mb-4">
                                        <div class="flex flex-col items-center">
                                            <span>11</span><div class="w-8 h-0.5 bg-slate-600 my-1"></div><span>7</span>
                                        </div>
                                        <span>-</span>
                                        <div class="flex flex-col items-center">
                                            <span>5</span><div class="w-6 h-0.5 bg-slate-600 my-1"></div><span>8</span>
                                        </div>
                                        <span>=</span>
                                        <div class="flex flex-col items-center">
                                            <input type="text" id="ans-11-1f-tu" class="w-12 h-12 border border-teal-300 rounded-xl text-center font-black md:text-2xl text-teal-600 outline-none focus:border-teal-500 shadow-inner w-10" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                            <div class="w-12 h-0.5 bg-slate-600 my-1"></div>
                                            <input type="text" id="ans-11-1f-mau" class="w-12 h-12 border border-teal-300 rounded-xl text-center font-black md:text-2xl text-teal-600 outline-none focus:border-teal-500 shadow-inner w-10" placeholder="?" style="padding: 0px !important; font-size: 1.5rem !important; line-height: 44px !important;">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button id="btn-check-11-1b" onclick="window.check_11_1b()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                    <!-- Trang 3: Bài 2 -->
                    <div class="ltTrang" style="width: 100%; min-width: 100%; max-width: 100%; flex-shrink: 0; box-sizing: border-box; overflow: hidden;">
                        <div class="glass-card p-4 md:p-6 rounded-[2.5rem] bg-white shadow-2xl border border-teal-50 relative overflow-hidden">
                            <div class="flex items-center gap-4 mb-4">
                                <div class="w-10 h-10 md:w-12 md:h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-black text-lg md:text-2xl shadow-lg transform -rotate-2">2</div>
                                <h3 class="text-lg md:text-2xl text-teal-900 font-black uppercase tracking-tighter">Bài toán hai vòi nước cùng chảy vào bể</h3>
                            </div>

                            <div class="space-y-4">
                                <div class="p-3.5 bg-teal-50/20 rounded-2xl border border-teal-100 text-lg md:text-2xl font-medium text-slate-700 leading-relaxed">
                                    Có hai vòi nước cùng chảy vào một bể. Vòi thứ nhất chảy được <span class="font-bold">1/2</span> bể, vòi thứ hai chảy được <span class="font-bold">2/5</span> bể. Hỏi cả hai vòi chảy được bao nhiêu phần bể nước?
                                </div>

                                <!-- Mô hình trực quan bể nước -->
                                <div class="flex flex-col items-center p-4 bg-slate-50 rounded-[2rem] border border-slate-100 my-2">
                                    <div class="flex gap-3 mb-4 flex-wrap justify-center">
                                        <button id="btn-faucet-1" onclick="window.toggleFaucet(1)" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-black rounded-xl text-sm md:text-lg shadow active:scale-95 transition-all flex items-center gap-2">
                                            🚰 Vòi 1
                                        </button>
                                        <button id="btn-faucet-2" onclick="window.toggleFaucet(2)" class="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-xl text-sm md:text-lg shadow active:scale-95 transition-all flex items-center gap-2">
                                            🚰 Vòi 2
                                        </button>
                                        <button id="btn-faucet-reset" onclick="window.resetFaucet()" class="px-4 py-2 bg-slate-500 hover:bg-slate-600 text-white font-black rounded-xl text-sm md:text-lg shadow active:scale-95 transition-all flex items-center gap-2">
                                            🔄 Làm lại
                                        </button>
                                    </div>

                                    <div class="relative w-full max-w-[420px] aspect-[4/3] bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-inner p-2">
                                        <svg viewBox="0 0 400 300" class="w-full h-full select-none">
                                            <!-- Water Tank Glass Wall (Back & Bottom Isometric) -->
                                            <polygon points="140,80 320,80 320,210 140,210" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" />
                                            <!-- Left back edge -->
                                            <line x1="140" y1="80" x2="140" y2="210" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3 3" />
                                            <!-- Bottom back edge -->
                                            <line x1="140" y1="210" x2="320" y2="210" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3 3" />
                                            
                                            <!-- Water elements (3D Polygons) -->
                                            <!-- Vòi 1 Water (Blue) -->
                                            <polygon id="water-3d-f1-front" points="100,230 280,230 280,230 100,230" fill="#60a5fa" fill-opacity="0.85" />
                                            <polygon id="water-3d-f1-right" points="280,230 320,210 320,210 280,230" fill="#2563eb" fill-opacity="0.8" />
                                            <polygon id="water-3d-f1-top" points="100,230 280,230 320,210 140,210" fill="#93c5fd" fill-opacity="0.9" style="transition: opacity 0.3s;" opacity="0" />

                                            <!-- Vòi 2 Water (Teal/Emerald) -->
                                            <polygon id="water-3d-f2-front" points="100,230 280,230 280,230 100,230" fill="#34d399" fill-opacity="0.85" />
                                            <polygon id="water-3d-f2-right" points="280,230 320,210 320,210 280,230" fill="#059669" fill-opacity="0.8" />
                                            <polygon id="water-3d-f2-top" points="100,230 280,230 320,210 140,210" fill="#a7f3d0" fill-opacity="0.9" style="transition: opacity 0.3s;" opacity="0" />

                                            <!-- Water streams from faucets -->
                                            <rect id="stream-1" x="110" y="45" width="8" height="185" fill="#93c5fd" opacity="0" style="transition: opacity 0.3s;" />
                                            <rect id="stream-2" x="282" y="45" width="8" height="165" fill="#a7f3d0" opacity="0" style="transition: opacity 0.3s;" />

                                            <!-- Faucet 1 Left (Vòi 1) -->
                                            <path d="M 50 35 L 115 35 L 115 45 L 105 45 L 105 39 L 50 39 Z" fill="#94a3b8" />
                                            <circle cx="110" cy="45" r="4" fill="#64748b" />
                                            <text x="75" y="28" font-size="10" font-weight="black" fill="#1e40af" text-anchor="middle">Vòi 1</text>

                                            <!-- Faucet 2 Right (Vòi 2) -->
                                            <path d="M 350 35 L 285 35 L 285 45 L 295 45 L 295 39 L 350 39 Z" fill="#94a3b8" />
                                            <circle cx="290" cy="45" r="4" fill="#64748b" />
                                            <text x="325" y="28" font-size="10" font-weight="black" fill="#065f46" text-anchor="middle">Vòi 2</text>

                                            <!-- Glass Tank Front & Side Frame (Isometric Outline) -->
                                            <!-- Front face -->
                                            <rect x="100" y="100" width="180" height="130" fill="none" stroke="#475569" stroke-width="3" />
                                            <!-- Top rim -->
                                            <polygon points="100,100 280,100 320,80 140,80" fill="none" stroke="#475569" stroke-width="3" />
                                            <!-- Right rim / side face -->
                                            <polygon points="280,100 320,80 320,210 280,230" fill="none" stroke="#475569" stroke-width="3" />
                                            <!-- Bottom front edge -->
                                            <line x1="100" y1="230" x2="280" y2="230" stroke="#475569" stroke-width="3" />
                                            <!-- Bottom side edge -->
                                            <line x1="280" y1="230" x2="320" y2="210" stroke="#475569" stroke-width="3" />

                                            <!-- Left ticks (on the front-left vertical edge x: 100): Divide by 2 (1 tick in the middle) -->
                                            <line x1="85" x2="100" y1="165" y2="165" stroke="#3b82f6" stroke-width="2" />
                                            <text x="80" y="169" font-size="10" font-weight="black" fill="#1d4ed8" text-anchor="end">1/2</text>
                                            
                                            <!-- Right ticks (on the front-right vertical edge x: 280): Divide by 5 (4 ticks) -->
                                            <line x1="280" x2="295" y1="204" y2="204" stroke="#10b981" stroke-width="2" />
                                            <text x="300" y="208" font-size="9" font-weight="black" fill="#047857" text-anchor="start">1/5</text>
                                            
                                            <line x1="280" x2="295" y1="178" y2="178" stroke="#10b981" stroke-width="2" />
                                            <text x="300" y="182" font-size="9" font-weight="black" fill="#047857" text-anchor="start">2/5</text>
                                            
                                            <line x1="280" x2="295" y1="152" y2="152" stroke="#10b981" stroke-width="2" />
                                            <text x="300" y="156" font-size="9" font-weight="black" fill="#047857" text-anchor="start">3/5</text>
                                            
                                            <line x1="280" x2="295" y1="126" y2="126" stroke="#10b981" stroke-width="2" />
                                            <text x="300" y="130" font-size="9" font-weight="black" fill="#047857" text-anchor="start">4/5</text>

                                            <!-- Center ticks (on the front face x: 190): Divide by 10 (9 ticks) -->
                                            <line x1="185" x2="195" y1="217" y2="217" stroke="#64748b" stroke-width="1.5" opacity="0.6" />
                                            <line x1="185" x2="195" y1="204" y2="204" stroke="#64748b" stroke-width="1.5" opacity="0.6" />
                                            <line x1="185" x2="195" y1="191" y2="191" stroke="#64748b" stroke-width="1.5" opacity="0.6" />
                                            <line x1="185" x2="195" y1="178" y2="178" stroke="#64748b" stroke-width="1.5" opacity="0.6" />
                                            <line x1="185" x2="195" y1="165" y2="165" stroke="#64748b" stroke-width="1.5" opacity="0.6" />
                                            <line x1="185" x2="195" y1="152" y2="152" stroke="#64748b" stroke-width="1.5" opacity="0.6" />
                                            <line x1="185" x2="195" y1="139" y2="139" stroke="#64748b" stroke-width="1.5" opacity="0.6" />
                                            <line x1="185" x2="195" y1="126" y2="126" stroke="#64748b" stroke-width="1.5" opacity="0.6" />
                                            <line x1="185" x2="195" y1="113" y2="113" stroke="#64748b" stroke-width="1.5" opacity="0.6" />

                                            <!-- Label for ticks on the center ticks -->
                                            <text x="200" y="220" font-size="7" font-weight="bold" fill="#475569" opacity="0.7">1/10</text>
                                            <text x="200" y="207" font-size="7" font-weight="bold" fill="#475569" opacity="0.7">2/10</text>
                                            <text x="200" y="194" font-size="7" font-weight="bold" fill="#475569" opacity="0.7">3/10</text>
                                            <text x="200" y="181" font-size="7" font-weight="bold" fill="#475569" opacity="0.7">4/10</text>
                                            <text x="200" y="168" font-size="7" font-weight="bold" fill="#475569" opacity="0.7">5/10</text>
                                            <text x="200" y="155" font-size="7" font-weight="bold" fill="#475569" opacity="0.7">6/10</text>
                                            <text x="200" y="142" font-size="7" font-weight="bold" fill="#475569" opacity="0.7">7/10</text>
                                            <text x="200" y="129" font-size="7" font-weight="bold" fill="#475569" opacity="0.7">8/10</text>
                                            <text x="200" y="116" font-size="7" font-weight="bold" fill="#475569" opacity="0.7">9/10</text>
                                        </svg>
                                    </div>
                                </div>

                                <div class="p-4 bg-teal-50/30 rounded-[2rem] border border-teal-100 flex flex-col justify-center items-center gap-4">
                                    <div class="flex items-center gap-3 text-lg md:text-2xl font-bold text-slate-600">
                                        <span>Cả hai vòi chảy được =</span>
                                        <div class="flex items-center gap-3">
                                            <div class="flex flex-col items-center">
                                                <input type="text" id="ans-11-2-tu" class="w-16 h-12 border-2 border-teal-300 rounded-xl text-center font-black text-teal-600 bg-white outline-none focus:border-teal-500 shadow-inner" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                                <div class="w-16 h-0.5 bg-slate-600 my-1"></div>
                                                <input type="text" id="ans-11-2-mau" class="w-16 h-12 border-2 border-teal-300 rounded-xl text-center font-black text-teal-600 bg-white outline-none focus:border-teal-500 shadow-inner" placeholder="?" style="padding: 0px !important; font-size: 1.25rem !important; line-height: 38px !important;">
                                            </div>
                                        </div>
                                        <span>bể nước</span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end mt-6">
                                <button id="btn-check-11-2" onclick="window.check_11_2()" class="w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-black text-xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div><!-- /ltViewport -->

            <!-- Điều hướng ltNav -->
                    </div>

        <script>
            // Kiểm tra kết quả
            function normalize(str) {
                if (!str) return '';
                return str.toString().replace(/\s+/g, '').replace(/,/g, '').trim();
            }

            // Điều khiển mô phỏng vòi nước Bài 2 (Bể 3D)
            let faucet1Active = false;
            let faucet2Active = false;
            let h1 = 0; // Chiều cao vòi 1 (pixel, tối đa 65px ứng với 1/2)
            let h2 = 0; // Chiều cao vòi 2 (pixel, tối đa 52px ứng với 2/5)
            let targetH1 = 0;
            let targetH2 = 0;
            let animationFrameId = null;

            function update3DWater() {
                const y1_front = 230 - h1;
                const y1_back = 210 - h1;
                const y2_front = 230 - h1 - h2;
                const y2_back = 210 - h1 - h2;

                // Cập nhật đa giác nước Vòi 1 (Màu xanh dương)
                const f1Front = document.getElementById('water-3d-f1-front');
                const f1Right = document.getElementById('water-3d-f1-right');
                const f1Top = document.getElementById('water-3d-f1-top');

                if (f1Front) f1Front.setAttribute('points', '100,230 280,230 280,' + y1_front + ' 100,' + y1_front);
                if (f1Right) f1Right.setAttribute('points', '280,230 320,210 320,' + y1_back + ' 280,' + y1_front);
                if (f1Top) {
                    f1Top.setAttribute('points', '100,' + y1_front + ' 280,' + y1_front + ' 320,' + y1_back + ' 140,' + y1_back);
                    f1Top.style.opacity = h1 > 0 ? '1' : '0';
                }

                // Cập nhật đa giác nước Vòi 2 (Màu xanh lá)
                const f2Front = document.getElementById('water-3d-f2-front');
                const f2Right = document.getElementById('water-3d-f2-right');
                const f2Top = document.getElementById('water-3d-f2-top');

                if (f2Front) f2Front.setAttribute('points', '100,' + y1_front + ' 280,' + y1_front + ' 280,' + y2_front + ' 100,' + y2_front);
                if (f2Right) f2Right.setAttribute('points', '280,' + y1_front + ' 320,' + y1_back + ' 320,' + y2_back + ' 280,' + y2_front);
                if (f2Top) {
                    f2Top.setAttribute('points', '100,' + y2_front + ' 280,' + y2_front + ' 320,' + y2_back + ' 140,' + y2_back);
                    f2Top.style.opacity = h2 > 0 ? '1' : '0';
                }
            }

            function animate3DWater() {
                let changed = false;
                const speed = 1.5; // Tốc độ tăng mực nước (px/frame)

                if (h1 < targetH1) {
                    h1 = Math.min(targetH1, h1 + speed);
                    changed = true;
                } else if (h1 > targetH1) {
                    h1 = Math.max(targetH1, h1 - speed);
                    changed = true;
                }

                if (h2 < targetH2) {
                    h2 = Math.min(targetH2, h2 + speed);
                    changed = true;
                } else if (h2 > targetH2) {
                    h2 = Math.max(targetH2, h2 - speed);
                    changed = true;
                }

                update3DWater();

                if (changed) {
                    animationFrameId = requestAnimationFrame(animate3DWater);
                } else {
                    animationFrameId = null;
                }
            }

            window.toggleFaucet = function(faucetId) {
                const stream1 = document.getElementById('stream-1');
                const stream2 = document.getElementById('stream-2');
                const btn1 = document.getElementById('btn-faucet-1');
                const btn2 = document.getElementById('btn-faucet-2');

                if (faucetId === 1) {
                    if (faucet1Active) return;
                    faucet1Active = true;
                    if (btn1) {
                        btn1.disabled = true;
                        btn1.classList.add('opacity-50', 'cursor-not-allowed');
                    }

                    if (stream1) stream1.style.opacity = '1';
                    targetH1 = 65; // 1/2 bể = 65px (tổng chiều cao 130px)

                    if (!animationFrameId) {
                        animationFrameId = requestAnimationFrame(animate3DWater);
                    }

                    setTimeout(() => {
                        if (stream1) stream1.style.opacity = '0';
                    }, 1000);
                } else if (faucetId === 2) {
                    if (faucet2Active) return;
                    faucet2Active = true;
                    if (btn2) {
                        btn2.disabled = true;
                        btn2.classList.add('opacity-50', 'cursor-not-allowed');
                    }

                    if (stream2) stream2.style.opacity = '1';
                    targetH2 = 52; // 2/5 bể = 52px (tổng chiều cao 130px)

                    if (!animationFrameId) {
                        animationFrameId = requestAnimationFrame(animate3DWater);
                    }

                    setTimeout(() => {
                        if (stream2) stream2.style.opacity = '0';
                    }, 1000);
                }
            };

            window.resetFaucet = function() {
                faucet1Active = false;
                faucet2Active = false;

                const btn1 = document.getElementById('btn-faucet-1');
                const btn2 = document.getElementById('btn-faucet-2');
                if (btn1) {
                    btn1.disabled = false;
                    btn1.classList.remove('opacity-50', 'cursor-not-allowed');
                }
                if (btn2) {
                    btn2.disabled = false;
                    btn2.classList.remove('opacity-50', 'cursor-not-allowed');
                }

                targetH1 = 0;
                targetH2 = 0;

                if (!animationFrameId) {
                    animationFrameId = requestAnimationFrame(animate3DWater);
                }

                const stream1 = document.getElementById('stream-1');
                const stream2 = document.getElementById('stream-2');
                if (stream1) stream1.style.opacity = '0';
                if (stream2) stream2.style.opacity = '0';
            };

            // Bài 1a
            window.check_11_1a = function() {
                var tA = normalize(document.getElementById('ans-11-1a-tu').value);
                var mA = normalize(document.getElementById('ans-11-1a-mau').value);
                var tB = normalize(document.getElementById('ans-11-1b-tu').value);
                var mB = normalize(document.getElementById('ans-11-1b-mau').value);
                var tC = normalize(document.getElementById('ans-11-1c-tu').value);
                var mC = normalize(document.getElementById('ans-11-1c-mau').value);

                var meta = window.MATH_BUILDER_METADATA.bai_tap[0];
                var isA = (tA === '16' && mA === '63');
                var isB = (tB === '113' && mB === '132');
                var isC = (tC === '113' && mC === '30');

                var isCorrect = (isA && isB && isC);
                var rightAns = "1/7+1/9 = 16/63 ; 3/11+7/12 = 113/132 ; 13/5+7/6 = 113/30";
                var studentAns = "16/63: " + tA + "/" + mA + " | 113/132: " + tB + "/" + mB + " | 113/30: " + tC + "/" + mC;

                if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-11-1a', 0, 6, isCorrect ? 6 : 0);
                }
            };

            // Bài 1b
            window.check_11_1b = function() {
                var tD = normalize(document.getElementById('ans-11-1d-tu').value);
                var mD = normalize(document.getElementById('ans-11-1d-mau').value);
                var tE = normalize(document.getElementById('ans-11-1e-tu').value);
                var mE = normalize(document.getElementById('ans-11-1e-mau').value);
                var tF = normalize(document.getElementById('ans-11-1f-tu').value);
                var mF = normalize(document.getElementById('ans-11-1f-mau').value);

                var meta = window.MATH_BUILDER_METADATA.bai_tap[1];
                var isD = (tD === '5' && mD === '36');
                var isE = (tE === '3' && mE === '20');
                var isF = (tF === '53' && mF === '56');

                var isCorrect = (isD && isE && isF);
                var rightAns = "1/4-1/9 = 5/36 ; 2/5-1/4 = 3/20 ; 11/7-5/8 = 53/56";
                var studentAns = "5/36: " + tD + "/" + mD + " | 3/20: " + tE + "/" + mE + " | 53/56: " + tF + "/" + mF;

                if (window.showMathFeedback) window.showMathFeedback(isCorrect, rightAns, studentAns, meta.guidance, meta.solution);
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-11-1b', 0, 6, isCorrect ? 6 : 0);
                }
            };

            // Bài 2
            window.check_11_2 = function() {
                var tu = normalize(document.getElementById('ans-11-2-tu').value);
                var mau = normalize(document.getElementById('ans-11-2-mau').value);

                var meta = window.MATH_BUILDER_METADATA.bai_tap[2];
                var isCorrect = (tu === '9' && mau === '10');

                if (window.showMathFeedback) window.showMathFeedback(isCorrect, "9/10 bể", tu + "/" + mau + " bể", meta.guidance, meta.solution);
                if (window.submitMathLesson) {
                    window.submitMathLesson(meta.title, isCorrect ? 100 : 0, 'btn-check-11-2', 0, 2, isCorrect ? 2 : 0);
                }
            };
        </script>
    `,
    "quizPool": [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "metadata": metadata
};

window.lesson11 = lesson11;
