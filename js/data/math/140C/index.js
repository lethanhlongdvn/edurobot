const metadata = {
    "lessonInfo": {
        "period": "140C",
        "week": "28",
        "topic": "Số đo thời gian",
        "title": "TIẾT 140C: Bài 60. Quãng đường, thời gian của một chuyển động đều (tiết 3)",
        "desc": "Tổng hợp luyện tập các dạng toán chuyển động đều với 15 bài tập nâng cao và thực tế."
    },
    "exercises": [
        // Dạng I: VẬN TỐC
        {
            "id": "140C_1",
            "type": "fill_single",
            "level": 2,
            "title": "Bài 1: Vận tốc ô tô điện",
            "statement": "Một xe ô tô điện di chuyển được quãng đường 36 km trong 45 phút. Tính vận tốc của xe ô tô điện đó với đơn vị đo là km/h.",
            "answer": "48",
            "unit": "km/h",
            "guidance": "Đổi 45 phút ra giờ (45 : 60 = 0,75 giờ) rồi lấy quãng đường chia cho thời gian nhé!",
            "solution": "<div class='math-solution space-y-4 p-8 bg-teal-50 rounded-[3rem] border-2 border-teal-100 shadow-sm text-xl md:text-3xl shadow-sm' shadow-sm'><div class='font-black text-teal-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Đổi: 45 phút = 0,75 giờ. Vận tốc của xe ô tô điện là:</div><div class='text-slate-900 font-black italic text-xl md:text-3xl'>36 : 0,75 = 48 (km/h)</div><div class='text-slate-900 font-black pt-4 border-t border-teal-200 mt-4'>Đáp số: 48 km/h</div></div>"
        },
        {
            "id": "140C_2",
            "type": "fill_single",
            "level": 2,
            "title": "Bài 2: Vận tốc bơi",
            "statement": "Một vận động viên bơi lội hoàn thành đường đua dài 100 m trong thời gian 50 giây. Tính vận tốc bơi của vận động viên đó theo đơn vị m/s.",
            "answer": "2",
            "unit": "m/s",
            "guidance": "Áp dụng công thức v = s : t với s = 100m, t = 50 giây.",
            "solution": "<div class='math-solution space-y-4 p-8 bg-teal-50 rounded-[3rem] border-2 border-teal-100 shadow-sm text-xl md:text-3xl shadow-sm'><div class='font-black text-teal-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Vận tốc bơi của vận động viên là:</div><div class='text-slate-900 font-black italic text-xl md:text-3xl'>100 : 50 = 2 (m/s)</div><div class='text-slate-900 font-black pt-4 border-t border-teal-200 mt-4'>Đáp số: 2 m/s</div></div>"
        },
        {
            "id": "140C_3",
            "type": "fill_single",
            "level": 2,
            "title": "Bài 3: Vận tốc máy bay",
            "statement": "Một máy bay chở khách bay được quãng đường dài 1800 km trong 2,5 giờ. Tính vận tốc của máy bay đó.",
            "answer": "720",
            "unit": "km/h",
            "guidance": "Lấy quãng đường 1800 km chia cho thời gian 2,5 giờ.",
            "solution": "<div class='math-solution space-y-4 p-8 bg-teal-50 rounded-[3rem] border-2 border-teal-100 shadow-sm text-xl md:text-3xl shadow-sm'><div class='font-black text-teal-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Vận tốc của máy bay là:</div><div class='text-slate-900 font-black italic text-xl md:text-3xl'>1800 : 2,5 = 720 (km/h)</div><div class='text-slate-900 font-black pt-4 border-t border-teal-200 mt-4'>Đáp số: 720 km/h</div></div>"
        },
        {
            "id": "140C_4",
            "type": "fill_single",
            "level": 3,
            "title": "Bài 4: So sánh tốc độ chạy bộ",
            "statement": "Người thứ nhất chạy với vận tốc 6 m/s, người thứ hai chạy với vận tốc 18 km/h. Hỏi ai chạy nhanh hơn và nhanh hơn bao nhiêu m/s?",
            "answer": "1",
            "unit": "m/s",
            "guidance": "Đổi 18 km/h ra m/s (18000 : 3600 = 5 m/s) rồi so sánh với 6 m/s nhé!",
            "solution": "<div class='math-solution space-y-4 p-8 bg-teal-50 rounded-[3rem] border-2 border-teal-100 shadow-sm text-xl md:text-3xl shadow-sm'><div class='font-black text-teal-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Đổi: 18 km/h = 5 m/s. Vì 6 m/s > 5 m/s nên người thứ nhất nhanh hơn.</div><div class='text-slate-900 font-black italic text-xl md:text-3xl'>6 - 5 = 1 (m/s)</div><div class='text-slate-900 font-black pt-4 border-t border-teal-200 mt-4'>Đáp số: Người thứ nhất nhanh hơn 1 m/s</div></div>"
        },
        {
            "id": "140C_5",
            "type": "fill_single",
            "level": 3,
            "title": "Bài 5: Vận tốc trung bình xe khách",
            "statement": "Một xe khách đi từ A đến B dài 150 km. Đoạn đầu đi 60 km trong 1,5 giờ; đoạn sau đi 90 km trong 2,5 giờ. Tính vận tốc trung bình của xe trên cả quãng đường.",
            "answer": "37.5",
            "unit": "km/h",
            "guidance": "Vận tốc trung bình = Tổng quãng đường : Tổng thời gian.",
            "solution": "<div class='math-solution space-y-4 p-8 bg-teal-50 rounded-[3rem] border-2 border-teal-100 shadow-sm text-xl md:text-3xl shadow-sm'><div class='font-black text-teal-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Tổng thời gian: 1,5 + 2,5 = 4 giờ. Vận tốc trung bình là:</div><div class='text-slate-900 font-black italic text-xl md:text-3xl'>150 : 4 = 37,5 (km/h)</div><div class='text-slate-900 font-black pt-4 border-t border-teal-200 mt-4'>Đáp số: 37,5 km/h</div></div>"
        },
        // Dạng II: QUÃNG ĐƯỜNG
        {
            "id": "140C_6",
            "type": "fill_single",
            "level": 2,
            "title": "Bài 6: Quãng đường ca nô",
            "statement": "Một ca nô du lịch đi dọc bờ biển với vận tốc 24,5 km/h. Hỏi quãng đường ca nô đó đi được trong 3 giờ là bao nhiêu ki-lô-mét?",
            "answer": "73.5",
            "unit": "km",
            "guidance": "Áp dụng s = v x t = 24,5 x 3.",
            "solution": "<div class='math-solution space-y-4 p-8 bg-orange-50 rounded-[3rem] border-2 border-orange-100 shadow-sm text-3xl'><div class='font-black text-orange-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Quãng đường ca nô đó đi được là:</div><div class='text-slate-900 font-black italic text-3xl'>24,5 x 3 = 73,5 (km)</div><div class='text-slate-900 font-black pt-4 border-t border-orange-200 mt-4'>Đáp số: 73,5 km</div></div>"
        },
        {
            "id": "140C_7",
            "type": "fill_single",
            "level": 2,
            "title": "Bài 7: Quãng đường tàu hoả",
            "statement": "Một chiếc tàu hoả di chuyển với vận tốc 45 km/h. Tính quãng đường tàu hoả đi được trong 1,2 giờ.",
            "answer": "54",
            "unit": "km",
            "guidance": "Lấy vận tốc 45 km/h nhân với thời gian 1,2 giờ.",
            "solution": "<div class='math-solution space-y-4 p-8 bg-orange-50 rounded-[3rem] border-2 border-orange-100 shadow-sm text-3xl'><div class='font-black text-orange-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Quãng đường tàu hoả đi được là:</div><div class='text-slate-900 font-black italic text-3xl'>45 x 1,2 = 54 (km)</div><div class='text-slate-900 font-black pt-4 border-t border-orange-200 mt-4'>Đáp số: 54 km</div></div>"
        },
        {
            "id": "140C_8",
            "type": "fill_single",
            "level": 2,
            "title": "Bài 8: Quãng đường báo hoa mai",
            "statement": "Một con báo hoa mai có thể chạy với vận tốc 30 m/s khi săn mồi. Tính quãng đường con báo chạy được trong 12 giây.",
            "answer": "360",
            "unit": "m",
            "guidance": "Vận tốc 30 m/s nhân với thời gian 12 giây.",
            "solution": "<div class='math-solution space-y-4 p-8 bg-orange-50 rounded-[3rem] border-2 border-orange-100 shadow-sm text-3xl'><div class='font-black text-orange-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Quãng đường con báo chạy được là:</div><div class='text-slate-900 font-black italic text-3xl'>30 x 12 = 360 (m)</div><div class='text-slate-900 font-black pt-4 border-t border-orange-200 mt-4'>Đáp số: 360 m</div></div>"
        },
        {
            "id": "140C_9",
            "type": "fill_single",
            "level": 3,
            "title": "Bài 9: Quãng đường đến khu du lịch",
            "statement": "Một ô tô khởi hành từ A lúc 7 giờ 15 phút với vận tốc 52 km/h và đến B lúc 9 giờ 45 phút. Tính quãng đường AB.",
            "answer": "130",
            "unit": "km",
            "guidance": "Tính thời gian đi (Đến - Khởi hành) rồi đổi ra giờ trước khi tính quãng đường.",
            "solution": "<div class='math-solution space-y-4 p-8 bg-orange-50 rounded-[3rem] border-2 border-orange-100 shadow-sm text-3xl'><div class='font-black text-orange-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Thời gian đi: 9h45 - 7h15 = 2h30 = 2,5 giờ. Quãng đường AB dài là:</div><div class='text-slate-900 font-black italic text-3xl'>52 x 2.5 = 130 (km)</div><div class='text-slate-900 font-black pt-4 border-t border-orange-200 mt-4'>Đáp số: 130 km</div></div>"
        },
        {
            "id": "140C_10",
            "type": "fill_single",
            "level": 3,
            "title": "Bài 10: Khoảng cách giữa hai thị trấn",
            "statement": "Cùng lúc, xe máy từ C đi với vận tốc 40 km/h và ô tô từ D đi với vận tốc 60 km/h hướng về phía nhau. Gặp nhau sau 1,5 giờ. Tính khoảng cách CD.",
            "answer": "150",
            "unit": "km",
            "guidance": "Tính tổng vận tốc (40 + 60) rồi nhân với thời gian gặp nhau.",
            "solution": "<div class='math-solution space-y-4 p-8 bg-orange-50 rounded-[3rem] border-2 border-orange-100 shadow-sm text-3xl'><div class='font-black text-orange-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Tổng vận tốc hai xe là: 40 + 60 = 100 km/h. Khoảng cách CD là:</div><div class='text-slate-900 font-black italic text-3xl'>100 x 1,5 = 150 (km)</div><div class='text-slate-900 font-black pt-4 border-t border-orange-200 mt-4'>Đáp số: 150 km</div></div>"
        },
        // Dạng III: THỜI GIAN
        {
            "id": "140C_11",
            "type": "fill_single",
            "level": 2,
            "title": "Bài 11: Thời gian đạp xe bác An",
            "statement": "Bác An đạp xe trên đoạn đường dài 18 km với vận tốc 12 km/h. Hỏi bác An cần bao nhiêu thời gian để đạp hết đoạn đường đó?",
            "answer": "1.5",
            "unit": "giờ",
            "guidance": "Áp dụng t = s : v = 18 : 12.",
            "solution": "<div class='math-solution space-y-4 p-8 bg-blue-50 rounded-[3rem] border-2 border-blue-100 shadow-sm text-3xl'><div class='font-black text-blue-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Thời gian bác An đạp xe là:</div><div class='text-slate-900 font-black italic text-3xl'>18 : 12 = 1,5 (giờ)</div><div class='text-slate-900 font-black pt-4 border-t border-blue-200 mt-4'>Đáp số: 1,5 giờ</div></div>"
        },
        {
            "id": "140C_12",
            "type": "fill_single",
            "level": 2,
            "title": "Bài 12: Thời gian chạy bộ",
            "statement": "Một người chạy bộ với vận tốc trung bình 4 m/s. Hỏi người đó hoàn thành đoạn đường 1200 m trong thời gian bao lâu?",
            "answer": "5",
            "unit": "phút",
            "guidance": "Tính thời gian bằng giây (1200 : 4 = 300s) rồi đổi ra phút nhé!",
            "solution": "<div class='math-solution space-y-4 p-8 bg-blue-50 rounded-[3rem] border-2 border-blue-100 shadow-sm text-3xl'><div class='font-black text-blue-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Thời gian chạy là 300 giây. Đổi ra phút:</div><div class='text-slate-900 font-black italic text-3xl'>1200 : 4 = 300 (giây) = 5 (phút)</div><div class='text-slate-900 font-black pt-4 border-t border-blue-200 mt-4'>Đáp số: 5 phút</div></div>"
        },
        {
            "id": "140C_13",
            "type": "fill_single",
            "level": 2,
            "title": "Bài 13: Thời gian xe khách leo đèo",
            "statement": "Quãng đường đèo dài 84 km. Một xe khách đi với vận tốc chậm 35 km/h. Tính thời gian xe khách đi hết đoạn đèo.",
            "answer": "2.4",
            "unit": "giờ",
            "guidance": "Lấy 84 chia cho 35.",
            "solution": "<div class='math-solution space-y-4 p-8 bg-blue-50 rounded-[3rem] border-2 border-blue-100 shadow-sm text-3xl'><div class='font-black text-blue-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Thời gian xe khách đi hết đoạn đèo là:</div><div class='text-slate-900 font-black italic text-3xl'>84 : 35 = 2,4 (giờ)</div><div class='text-slate-900 font-black pt-4 border-t border-blue-200 mt-4'>Đáp số: 2,4 giờ</div></div>"
        },
        {
            "id": "140C_14",
            "type": "fill_single",
            "level": 3,
            "title": "Bài 14: Xe tải chở hoa quả",
            "statement": "Xe tải đi quãng đường 120 km với vận tốc 48 km/h. Xuất phát lúc 6 giờ 30 phút, nghỉ 15 phút. Hỏi xe đến nơi lúc mấy giờ?",
            "answer": "9.25",
            "unit": "giờ",
            "guidance": "Tính thời gian chạy (120:48=2,5h), cộng thời gian nghỉ (15p) rồi cộng vào giờ xuất phát.",
            "solution": "<div class='math-solution space-y-4 p-8 bg-blue-50 rounded-[3rem] border-2 border-blue-100 shadow-sm text-3xl'><div class='font-black text-blue-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Thời gian chạy: 2,5 giờ = 2 giờ 30 phút. Tổng thời gian: 2h30 + 15p = 2h45. Xe đến lúc:</div><div class='text-slate-900 font-black italic text-3xl'>6 giờ 30 phút + 2 giờ 45 phút = 9 giờ 15 phút</div><div class='text-slate-900 font-black pt-4 border-t border-blue-200 mt-4'>Đáp số: 9 giờ 15 phút</div></div>"
        },
        {
            "id": "140C_15",
            "type": "fill_single",
            "level": 3,
            "title": "Bài 15: Thời điểm hai xe gặp nhau",
            "statement": "Hai tỉnh M và N cách nhau 180 km. Lúc 8 giờ sáng, ô tô từ M đi với 50 km/h, xe máy từ N đi với 40 km/h hướng về nhau. Hỏi gặp nhau lúc mấy giờ?",
            "answer": "10",
            "unit": "giờ",
            "guidance": "Tính thời gian gặp nhau (s : tổng vận tốc) rồi cộng vào 8 giờ sáng.",
            "solution": "<div class='math-solution space-y-4 p-8 bg-blue-50 rounded-[3rem] border-2 border-blue-100 shadow-sm text-xl md:text-3xl shadow-sm'><div class='font-black text-orange-700 underline mb-2'>Bài giải</div><div class='text-slate-800 font-bold'>Tổng vận tốc: 90 km/h. Thời gian đi: 180 : 90 = 2 giờ. Hai xe gặp nhau lúc:</div><div class='text-slate-900 font-black italic text-xl md:text-3xl'>8 giờ + 2 giờ = 10 giờ</div><div class='text-slate-900 font-black pt-4 border-t border-orange-200 mt-4'>Đáp số: 10 giờ</div></div>"
        }
    ],
    "quizPool": []
};

export const lesson140C = {
    "topic": "Số đo thời gian",
    "week": "28",
    "period": "140C",
    "title": "TIẾT 140C: LUYỆN TẬP CHUNG CHUYỂN ĐỘNG ĐỀU (BỘ BÀI TẬP MỚI)",
    "desc": "Luyện tập nâng cao các dạng toán về Vận tốc, Quãng đường, Thời gian.",
    "content": `
        <div class="theory-section space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div class="bg-gradient-to-br from-teal-600 to-emerald-700 p-8 md:p-12 rounded-[3rem] shadow-2xl text-white relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                     <span class="text-6xl md:text-8xl filter drop-shadow-2xl animate-bounce">⚡</span>
                     <div>
                        <h2 class="text-3xl md:text-5xl font-black mb-2 uppercase tracking-tight">Luyện tập chung</h2>
                        <p class="text-xl md:text-2xl opacity-90 leading-relaxed font-bold italic">
                            Chào các em! Chúng ta tiếp tục rèn luyện kỹ năng giải các bài toán chuyển động thực tế.<br>
                            Hãy chú ý các bài toán về <span class="text-yellow-300">vận tốc trung bình</span>, <span class="text-yellow-300">bài toán gặp nhau</span> và <span class="text-yellow-300">đổi đơn vị thời gian</span> nhé!
                        </p>
                     </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-4 md:space-y-8">
            ${metadata.exercises.map((ex, index) => `
                <div class="glass-card p-6 md:p-12 rounded-[50px] bg-white border border-gray-100 shadow-2xl relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-6">
                        <span class="px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm md:text-lg border border-emerald-200">Mức ${ex.level}</span>
                    </div>
                    <div class="flex items-start gap-6 mb-8 md:mb-12">
                        <span class="w-14 h-14 md:w-20 md:h-20 bg-teal-600 text-white rounded-2xl flex items-center justify-center font-black text-xl md:text-3xl shadow-lg shrink-0">${index + 1}</span>
                        <div class="flex-1 text-slate-700 text-xl md:text-3xl leading-relaxed font-bold italic">
                            ${ex.statement}
                        </div>
                    </div>
                    <div class="mt-8 flex flex-wrap items-center gap-4 bg-teal-50 p-6 md:p-8 rounded-[2rem] border-2 border-teal-100">
                        <span class="font-black text-lg md:text-2xl text-teal-800 uppercase">Kết quả:</span>
                        <input type="text" id="ans-140C-${index}" class="w-32 md:w-40 p-4 border-b-4 border-teal-200 bg-transparent text-center font-black text-xl md:text-3xl outline-none focus:border-teal-500" placeholder="?">
                        <span class="font-black text-teal-600 text-lg md:text-2xl uppercase">${ex.unit}</span>
                        <button onclick="window.check_140C_${index}()" class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-black text-xl md:text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-all ml-auto uppercase">Check</button>
                    </div>
                </div>
            `).join('')}

            <script>
                ${metadata.exercises.map((ex, index) => `
                    window.check_140C_${index} = function() {
                        const input = document.getElementById('ans-140C-${index}').value.replace(',', '.').trim();
                        const metadata = window.MATH_BUILDER_METADATA.exercises[${index}];
                        
                        let isCorrect = (input === metadata.answer);
                        
                        // Special handling for time/arrival
                        if (${index} === 13) { // Bài 14: 9 giờ 15 phút
                             isCorrect = (input === "9.25" || input === "9:15" || input === "9h15" || input.includes("9 giờ 15"));
                        }
                        if (${index} === 14) { // Bài 15: 10 giờ
                             isCorrect = (input === "10" || input === "10:00" || input === "10h" || input.includes("10 giờ"));
                        }

                        window.showMathFeedback(isCorrect, metadata.solution, metadata.guidance);
                        if (window.submitMathLesson) window.submitMathLesson("Bài 140C - ${ex.title}: " + input, "${ex.title}", "ans-140C-${index}");
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
