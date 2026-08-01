const metadata = {
    "lessonInfo": {
        "period": "140B",
        "week": "28",
        "topic": "Số đo thời gian",
        "title": "TIẾT 140B: LUYỆN TẬP CHUNG VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN",
        "desc": "Tổng hợp luyện tập các dạng toán chuyển động đều: tính vận tốc, quãng đường và thời gian."
    },
    "exercises": [
        // Dạng I: VẬN TỐC
        {
            "id": "140B_1",
            "type": "fill_single",
            "statement": "Một người đi xe máy đi được quãng đường 18 km trong 30 phút. Tính vận tốc của xe máy đó với đơn vị đo là km/h.",
            "answer": "36",
            "unit": "km/h",
            "title": "Bài 1: Vận tốc xe máy",
            "guidance": "Đổi 30 phút ra giờ (30 phút = 0,5 giờ) rồi lấy quãng đường chia cho thời gian nhé!",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Đổi: 30 phút = 0,5 giờ. Vận tốc của xe máy là:</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>18 : 0,5 = 36 (km/h)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>36 km/h</span></div></div>"
        },
        {
            "id": "140B_2",
            "type": "fill_single",
            "statement": "Đà điểu khi cần có thể chạy được quãng đường 5,25 km trong thời gian 5 phút. Tính vận tốc của đà điểu theo đơn vị m/s.",
            "answer": "17.5",
            "unit": "m/s",
            "title": "Bài 2: Vận tốc đà điểu",
            "guidance": "Đổi 5,25 km ra mét và 5 phút ra giây trước khi tính vận tốc nhé!",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Đổi: 5,25 km = 5250 m; 5 phút = 300 giây. Vận tốc của đà điểu là:</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>5250 : 300 = 17,5 (m/s)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>17,5 m/s</span></div></div>"
        },
        {
            "id": "140B_3",
            "type": "fill_single",
            "statement": "Trong 1 phút 40 giây, một người đi xe đạp đi được đoạn đường 500 m. Tính vận tốc của người đi xe đạp đó theo đơn vị m/s.",
            "answer": "5",
            "unit": "m/s",
            "title": "Bài 3: Vận tốc xe đạp",
            "guidance": "Đổi 1 phút 40 giây ra giây rồi thực hiện phép tính chia s cho t.",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Đổi: 1 phút 40 giây = 100 giây. Vận tốc của người đi xe đạp là:</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>500 : 100 = 5 (m/s)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>5 m/s</span></div></div>"
        },
        {
            "id": "140B_4",
            "type": "fill_single",
            "statement": "Anh Hoà đi xe đạp với vận tốc 9 m/s, anh Bình đi với vận tốc 36 km/h. Hỏi ai đi nhanh hơn và nhanh hơn bao nhiêu m/s? (Nhập số m/s chênh lệch)",
            "answer": "1",
            "unit": "m/s",
            "title": "Bài 4: So sánh vận tốc",
            "guidance": "Đổi vận tốc của anh Bình (36 km/h) ra m/s để so sánh với anh Hoà nhé!",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Đổi vận tốc anh Bình: 36 km/h = 36000 m : 3600 s = 10 m/s. Vì 10 > 9 nên anh Bình nhanh hơn.</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>10 - 9 = 1 (m/s)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>Anh Bình nhanh hơn 1 m/s</span></div></div>"
        },
        {
            "id": "140B_5",
            "type": "fill_single",
            "statement": "Một ô tô đi quãng đường AB dài 120 km. Nửa quãng đường đầu đi với vận tốc 40 km/h, nửa quãng đường sau đi với vận tốc 60 km/h. Tính vận tốc trung bình của ô tô trên cả quãng đường.",
            "answer": "48",
            "unit": "km/h",
            "title": "Bài 5: Vận tốc trung bình",
            "guidance": "Vận tốc trung bình = Tổng quãng đường : Tổng thời gian. Hãy tính thời gian cho từng nửa quãng đường nhé!",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Nửa quãng đường là 60km. Thời gian đi nửa đầu: 60:40=1,5h. Thời gian đi nửa sau: 60:60=1h. Tổng thời gian: 2,5h.</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>120 : 2,5 = 48 (km/h)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>48 km/h</span></div></div>"
        },
        // Dạng II: QUÃNG ĐƯỜNG
        {
            "id": "140B_6",
            "type": "fill_single",
            "statement": "Một chiếc tàu biển đi với vận tốc 33,7 km/h. Hỏi quãng đường chiếc tàu đó đi được trong 4 giờ là bao nhiêu ki-lô-mét?",
            "answer": "134.8",
            "unit": "km",
            "title": "Bài 6: Quãng đường tàu biển",
            "guidance": "Áp dụng công thức s = v x t.",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Quãng đường chiếc tàu biển đó đi được là:</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>33,7 x 4 = 134,8 (km)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>134,8 km</span></div></div>"
        },
        {
            "id": "140B_7",
            "type": "fill_single",
            "statement": "Một chú chim cắt có thể bay với vận tốc 108 m/s. Tính quãng đường chú chim cắt bay được trong 15 giây.",
            "answer": "1620",
            "unit": "m",
            "title": "Bài 7: Quãng đường chim cắt",
            "guidance": "Lấy vận tốc nhân với thời gian bay.",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Quãng đường chú chim cắt bay được là:</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>108 x 15 = 1620 (m)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>1620 m</span></div></div>"
        },
        {
            "id": "140B_8",
            "type": "fill_single",
            "statement": "Một ô tô đi liên tục trong 2,5 giờ với vận tốc 62 km/h. Tính độ dài quãng đường ô tô đó đã đi được.",
            "answer": "155",
            "unit": "km",
            "title": "Bài 8: Quãng đường ô tô",
            "guidance": "Áp dụng công thức s = v x t.",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Độ dài quãng đường ô tô đã đi được là:</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>62 x 2,5 = 155 (km)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>155 km</span></div></div>"
        },
        {
            "id": "140B_9",
            "type": "fill_single",
            "statement": "Hai thành phố A và B cách nhau một khoảng. Xe máy từ A đi với vận tốc 42 km/h, ô tô từ B đi với vận tốc 58 km/h ngược chiều nhau. Sau 2,5 giờ hai xe gặp nhau. Tính quãng đường AB.",
            "answer": "250",
            "unit": "km",
            "title": "Bài 9: Quãng đường AB",
            "guidance": "Tính tổng vận tốc của hai xe rồi nhân với thời gian gặp nhau.",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Tổng vận tốc của hai xe là: 42 + 58 = 100 km/h. Quãng đường AB dài là:</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>100 x 2,5 = 250 (km)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>250 km</span></div></div>"
        },
        {
            "id": "140B_10",
            "type": "fill_single",
            "statement": "Một đoàn tàu hoả đi qua cầu dài 2290 m với vận tốc 24,3 km/h. Thời gian từ lúc đầu tàu vào cầu đến lúc toa cuối ra khỏi cầu là 6 phút. Hỏi đoàn tàu đó dài bao nhiêu mét?",
            "answer": "140",
            "unit": "m",
            "title": "Bài 10: Chiều dài đoàn tàu",
            "guidance": "Đổi 6 phút ra giờ (0,1h). Tính quãng đường tàu đi được (s = v x t), sau đó lấy kết quả trừ đi chiều dài cầu nhé!",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Đổi: 6 phút = 0,1 giờ. Quãng đường tàu đi được là: 24,3 x 0,1 = 2,43 km = 2430 m. Chiều dài tàu là:</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>2430 - 2290 = 140 (m)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>140 m</span></div></div>"
        },
        // Dạng III: THỜI GIAN
        {
            "id": "140B_11",
            "type": "fill_single",
            "statement": "Thầy Nam đi bộ trên quãng đường 9 km với vận tốc 1,5 km/h. Tính thời gian thầy Nam đi hết quãng đường đó.",
            "answer": "6",
            "unit": "giờ",
            "title": "Bài 11: Thời gian đi bộ",
            "guidance": "Áp dụng công thức t = s : v.",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Thời gian thầy Nam đi là:</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>9 : 1,5 = 6 (giờ)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>6 giờ</span></div></div>"
        },
        {
            "id": "140B_12",
            "type": "fill_single",
            "statement": "Một vận động viên trượt tuyết với vận tốc 24 m/s. Hỏi vận động viên đó hoàn thành quãng đường 600 m trong thời gian bao lâu?",
            "answer": "25",
            "unit": "giây",
            "title": "Bài 12: Thời gian trượt tuyết",
            "guidance": "Lấy quãng đường chia cho vận tốc.",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Thời gian vận động viên hoàn thành là:</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>600 : 24 = 25 (giây)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>25 giây</span></div></div>"
        },
        {
            "id": "140B_13",
            "type": "fill_single",
            "statement": "Quãng đường sông AB dài 80 km. Một tàu thuỷ đi với vận tốc 32 km/h. Tính thời gian tàu thuỷ đi hết quãng đường đó.",
            "answer": "2.5",
            "unit": "giờ",
            "title": "Bài 13: Thời gian tàu thuỷ",
            "guidance": "Áp dụng t = s : v.",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Thời gian tàu thuỷ đi là:</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>80 : 32 = 2,5 (giờ)</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>2,5 giờ</span></div></div>"
        },
        {
            "id": "140B_14",
            "type": "fill_single",
            "statement": "Chú Luân đi xe máy về quê lúc 7 giờ sáng với vận tốc 55 km/h. Quãng đường dài 137,5 km. Hỏi chú Luân về đến quê lúc mấy giờ?",
            "answer": "9.5",
            "unit": "giờ",
            "title": "Bài 14: Thời điểm đến nơi",
            "guidance": "Tính thời gian đi (s:v), sau đó cộng với thời điểm xuất phát (7 giờ). Lưu ý 9,5 giờ tương ứng 9 giờ 30 phút.",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Thời gian đi: 137,5 : 55 = 2,5 giờ = 2 giờ 30 phút. Chú Luân đến nơi lúc:</span></div><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Phép tính:</span><span class='text-slate-900 font-black italic text-2xl'>7 giờ + 2 giờ 30 phút = 9 giờ 30 phút</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>9 giờ 30 phút</span></div></div>"
        },
        {
            "id": "140B_15",
            "type": "fill_single",
            "statement": "Lúc 7 giờ sáng, Tí đi bộ từ trường về nhà (v=1m/s), cúng lúc đó cún chạy từ nhà đón Tí (v=3m/s). Quãng đường dài 1200m. Hỏi hai bạn gặp nhau lúc mấy giờ?",
            "answer": "7.0833", // Actually 7:05, but we need time in minutes or something. Let's adjust exercise logic.
            "unit": "giờ",
            "title": "Bài 15: Bài toán gặp nhau",
            "guidance": "Tính thời gian gặp nhau (s : tổng vận tốc). 300 giây = 5 phút. Sau đó cộng vào 7 giờ.",
            "solution": "<div class='math-solution space-y-3 p-4 bg-blue-50 rounded-2xl border-2 border-blue-100'><div class='flex items-start gap-2'><span class='font-black text-blue-700 min-w-[100px]'>Lời giải:</span><span class='text-slate-700 text-xl font-bold'>Thời gian gặp nhau: 1200 : (1+3) = 300 giây = 5 phút. Hai bạn gặp nhau lúc 7 giờ 5 phút.</span></div><div class='flex items-start gap-2 justify-end mt-4 pt-2 border-t border-blue-200'><span class='font-black text-blue-800'>Đáp số:</span><span class='font-black text-blue-900 ml-2 text-2xl'>7 giờ 5 phút</span></div></div>"
        }
    ],
    "quizPool": []
};

export const lesson140B = {
    "topic": "Số đo thời gian",
    "week": "28",
    "period": "140B",
    "title": "TIẾT 140B: LUYỆN TẬP CHUNG VẬN TỐC, QUÃNG ĐƯỜNG, THỜI GIAN",
    "desc": "Tổng hợp luyện tập các dạng toán chuyển động đều.",
    "content": `
        <div class="theory-section space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div class="bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-12 rounded-[3rem] shadow-2xl text-white relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                     <span class="text-6xl md:text-8xl filter drop-shadow-2xl animate-bounce">🏃‍♂️</span>
                     <div>
                        <h2 class="text-3xl md:text-5xl font-black mb-2 uppercase tracking-tight">Ôn tập chuyển động đều</h2>
                        <p class="text-xl md:text-2xl opacity-90 leading-relaxed font-bold italic">
                            Chào các em! Hôm nay chúng ta sẽ cùng luyện tập tổng hợp cả 3 công thức:<br>
                            <span class="text-yellow-300">v = s : t</span> | <span class="text-yellow-300">s = v &times; t</span> | <span class="text-yellow-300">t = s : v</span><br>
                            Hãy nhớ đổi đơn vị thật cẩn thận trước khi tính nhé!
                        </p>
                     </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-8 md:space-y-16">
            ${metadata.exercises.map((ex, index) => `
                <div class="glass-card p-6 md:p-12 rounded-[50px] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                    <div class="flex items-start gap-6 mb-8 md:mb-12">
                        <span class="w-14 h-14 md:w-20 md:h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl md:text-3xl shadow-lg shrink-0">${index + 1}</span>
                        <div class="flex-1 text-slate-700 text-xl md:text-3xl leading-relaxed font-bold italic">
                            ${ex.statement}
                        </div>
                    </div>
                    <div class="mt-8 flex flex-wrap items-center gap-4 bg-blue-50 p-6 md:p-8 rounded-[2rem] border-2 border-blue-100">
                        <span class="font-black text-lg md:text-2xl text-blue-800 uppercase">Kết quả:</span>
                        <input type="text" id="ans-140B-${index}" class="w-32 md:w-40 p-4 border-b-4 border-blue-200 bg-transparent text-center font-black text-xl md:text-3xl outline-none focus:border-blue-500" placeholder="?">
                        <span class="font-black text-blue-600 text-lg md:text-2xl uppercase">${ex.unit}</span>
                        <button onclick="window.check_140B_${index}()" class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all ml-auto uppercase">Check</button>
                    </div>
                </div>
            `).join('')}

            <script>
                ${metadata.exercises.map((ex, index) => `
                    window.check_140B_${index} = function() {
                        const input = document.getElementById('ans-140B-${index}').value.replace(',', '.').trim();
                        const metadata = window.MATH_BUILDER_METADATA.exercises[${index}];
                        
                        // Special handling for time-based arrival in Bài 14 and 15
                        let isCorrect = (input === metadata.answer);
                        
                        if (${index} === 13) { // Bài 14: 9 giờ 30 phút
                             isCorrect = (input === "9.5" || input === "9:30" || input === "9h30" || input.includes("9 giờ 30"));
                        }
                        if (${index} === 14) { // Bài 15: 7 giờ 5 phút
                             isCorrect = (input === "7:05" || input === "7h05" || input.includes("7 giờ 5"));
                        }

                        window.showMathFeedback(isCorrect, metadata.solution, metadata.guidance);
                        if (window.submitMathLesson) window.submitMathLesson("Bài 140B - ${ex.title}: " + input, "${ex.title}", "ans-140B-${index}");
                    };
                `).join('\n')}
            </script>
        </div>
    `,
    "quizPool": metadata.quizPool,
    "metadata": metadata
};

/* --- MATH_BUILDER_METADATA ---
${JSON.stringify(metadata)}
--- END_METADATA --- */
