const metadata = {
    "lessonInfo": {
        "period": "141",
        "week": "29",
        "topic": "Số liệu và Biểu đồ",
        "title": "BÀI 61. THỰC HÀNH VÀ TRẢI NGHIỆM (TIẾT 2)",
        "desc": "Thực hành tính toán vận tốc và ước lượng chu vi sân trường dựa trên số liệu thực tế."
    },
    "exercises": [
        {
            "id": "141_1",
            "type": "practical",
            "title": "Hoạt động 1: Đo vận tốc đi bộ",
            "statement": "Mỗi nhóm chọn 4 bạn, lần lượt đi bộ trên quãng đường 40m. Em hãy ghi lại thời gian của mỗi bạn vào bảng dưới đây.",
            "guidance": "Lấy quãng đường (40m) chia cho thời gian (giây) để tìm vận tốc (m/s).",
            "solution": "Học sinh tự thực hiện đo đạc và tính toán dựa trên kết quả thực tế."
        },
        {
            "id": "141_2",
            "type": "practical",
            "title": "Hoạt động 2: Ước lượng chu vi sân trường",
            "statement": "Đo thời gian đi bộ một vòng quanh sân trường của mỗi bạn.",
            "guidance": "Sử dụng vận tốc trung bình tính được ở HĐ1 nhân với thời gian đi 1 vòng sân.",
            "solution": "Kết quả phụ thuộc vào số liệu thực tế đo được."
        },
        {
            "id": "141_3",
            "type": "fill",
            "title": "Hoạt động 3: Tính toán và báo cáo",
            "statement": "Dựa vào bảng số liệu, hãy tính vận tốc trung bình và ước lượng chu vi sân trường.",
            "guidance": "Vận tốc = Quãng đường / Thời gian. Chu vi = Vận tốc x Thời gian đi 1 vòng.",
            "solution": "Sử dụng các công thức liên hệ giữa s, v, t."
        }
    ],
    "quizPool": []
};

metadata.quizPool = [
    { "question": "Muốn tính vận tốc khi biết quãng đường và thời gian, ta làm thế nào?", "options": ["s + t", "s - t", "s x t", "s : t"], "answer": 3 },
    { "question": "Đơn vị đo vận tốc có thể là:", "options": ["m", "giây", "m/giây", "m2"], "answer": 2 },
    { "question": "Nếu quãng đường là 40m, thời gian đi là 10 giây thì vận tốc là:", "options": ["4 m/giây", "400 m/giây", "0.25 m/giây", "30 m/giây"], "answer": 0 },
    { "question": "Một người đi 1 vòng sân hết 120 giây với vận tốc 1,2 m/giây. Chu vi sân là:", "options": ["100 m", "120 m", "144 m", "240 m"], "answer": 2 },
    { "question": "1 m/giây bằng bao nhiêu km/h?", "options": ["1 km/h", "3,6 km/h", "1,8 km/h", "60 km/h"], "answer": 1 },
    { "question": "Nếu tăng vận tốc và giữ nguyên thời gian, quãng đường sẽ:", "options": ["Tăng lên", "Giảm đi", "Không đổi", "Không xác định"], "answer": 0 },
    { "question": "Thời gian được tính bằng công thức:", "options": ["t = s x v", "t = v : s", "t = s : v", "t = s + v"], "answer": 2 },
    { "question": "Vận tốc 5 m/giây tương ứng với:", "options": ["10 km/h", "15 km/h", "18 km/h", "20 km/h"], "answer": 2 },
    { "question": "Một bạn đi 10m hết 5 giây, vận tốc là:", "options": ["2 m/s", "50 m/s", "0.5 m/s", "2.5 m/s"], "answer": 0 },
    { "question": "Nếu đi cùng một quãng đường, ai có vận tốc lớn hơn thì thời gian sẽ:", "options": ["Nhiều hơn", "Ít hơn", "Bằng nhau", "Gấp đôi"], "answer": 1 }
];

export const lesson141 = {
    "topic": metadata.lessonInfo.topic,
    "week": metadata.lessonInfo.week,
    "period": metadata.lessonInfo.period,
    "title": metadata.lessonInfo.title,
    "desc": metadata.lessonInfo.desc,
    "content": "",
    "practice": `
    <div class="space-y-12 md:space-y-16 font-vietpro pb-20">
            <!-- Bài 1 -->
            <div class="glass-card p-5 md:p-8 rounded-[2.5rem] bg-white shadow-xl transition-all hover:shadow-2xl">
                <div class="flex items-start gap-4 mb-4">
                    <span class="w-10 h-10 md:w-14 md:h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl shadow-inner shrink-0">1</span>
                    <p class="text-xl md:text-3xl text-slate-700 font-bold leading-relaxed">
                        Em hãy ghi lại kết quả đo thời gian đi bộ trên quãng đường <span class="text-teal-600 underline text-2xl md:text-4xl px-2">40m</span> của mỗi bạn vào bảng dưới đây.
                    </p>
                </div>

                <div class="overflow-hidden rounded-[2.5rem] border-2 border-teal-100 shadow-lg mb-8">
                    <table class="w-full text-center divide-y-2 divide-teal-100">
                        <thead class="bg-teal-600 text-white font-black uppercase text-lg md:text-xl">
                            <tr class="divide-x-2 divide-teal-500">
                                <th class="p-4 md:p-6">Tên bạn</th>
                                <th class="p-4 md:p-6">s (m)</th>
                                <th class="p-4 md:p-6">t (giây)</th>
                            </tr>
                        </thead>
                        <tbody id="table-body-141-1" class="bg-white divide-y-2 divide-teal-50 text-xl md:text-2xl font-bold text-slate-700">
                             <tr class="divide-x-2 divide-teal-50">
                                <td class="p-4 md:p-6"><input type="text" id="name-141-1-0" value="Bạn A" class="w-full text-center bg-transparent outline-none font-bold"></td>
                                <td class="p-4 md:p-6 text-slate-500 italic">40</td>
                                <td class="p-4 md:p-6"><input type="number" id="time-141-1-0" value="31" class="w-24 md:w-32 text-center border-2 border-teal-100 rounded-xl p-2 outline-none focus:border-teal-500 text-2xl md:text-3xl font-black shadow-inner"></td>
                            </tr>
                            <tr class="bg-teal-50/30 divide-x-2 divide-teal-50">
                                <td class="p-4 md:p-6"><input type="text" id="name-141-1-1" placeholder="..." class="w-full text-center bg-transparent outline-none font-bold text-slate-400"></td>
                                <td class="p-4 md:p-6 text-slate-500 italic font-bold">40</td>
                                <td class="p-4 md:p-6"><input type="number" id="time-141-1-1" placeholder="?" class="w-24 md:w-32 text-center border-2 border-teal-100 rounded-xl p-2 outline-none focus:border-teal-500 text-2xl md:text-3xl font-black shadow-inner bg-white/50"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                    <button onclick="window.addRow(1)" class="flex items-center gap-3 px-6 py-3 bg-slate-800 text-white rounded-[1.5rem] font-black text-lg md:text-xl hover:bg-slate-900 active:scale-95 transition-all shadow-xl uppercase tracking-tight">
                        <span class="text-xl">➕</span> Thêm dòng mới
                    </button>
                    <img src="assets/images/toan/toan_tap_2/141/141-1.png" alt="Thực hành" class="w-40 md:w-56 rounded-2xl border-4 border-white shadow-2xl transition-transform hover:scale-110 duration-500">
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="glass-card p-5 md:p-8 rounded-[2.5rem] bg-white shadow-xl transition-all hover:shadow-2xl">
                <div class="flex items-start gap-4 mb-4">
                    <span class="w-10 h-10 md:w-14 md:h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl shadow-inner shrink-0">2</span>
                    <p class="text-xl md:text-3xl text-slate-700 font-bold leading-relaxed">
                        Em hãy ghi lại thời gian đi bộ <span class="text-teal-600 underline text-2xl md:text-4xl px-2">một vòng quanh sân</span> của mỗi bạn vào bảng 2.
                    </p>
                </div>

                <div class="overflow-hidden rounded-[2.5rem] border-2 border-teal-100 shadow-lg mb-8">
                    <table class="w-full text-center divide-y-2 divide-teal-100">
                        <thead class="bg-teal-600 text-white font-black uppercase text-lg md:text-xl">
                            <tr class="divide-x-2 divide-teal-500">
                                <th class="p-4 md:p-6">Tên bạn</th>
                                <th class="p-4 md:p-6">t (giây)</th>
                            </tr>
                        </thead>
                        <tbody id="table-body-141-2" class="bg-white divide-y-2 divide-teal-50 text-xl md:text-2xl font-bold text-slate-700">
                             <tr class="divide-x-2 divide-teal-50">
                                <td class="p-4 md:p-6"><input type="text" id="name-141-2-0" value="Bạn A" class="w-full text-center bg-transparent outline-none font-bold"></td>
                                <td class="p-4 md:p-6"><input type="number" id="time-141-2-0" value="125" class="w-24 md:w-32 text-center border-2 border-teal-100 rounded-xl p-2 outline-none focus:border-teal-500 text-2xl md:text-3xl font-black shadow-inner"></td>
                            </tr>
                            <tr class="bg-teal-50/30 divide-x-2 divide-teal-50">
                                <td class="p-4 md:p-6"><input type="text" id="name-141-2-1" placeholder="..." class="w-full text-center bg-transparent outline-none font-bold text-slate-400"></td>
                                <td class="p-4 md:p-6"><input type="number" id="time-141-2-1" placeholder="?" class="w-24 md:w-32 text-center border-2 border-teal-100 rounded-xl p-2 outline-none focus:border-teal-500 text-2xl md:text-3xl font-black shadow-inner bg-white/50"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button onclick="window.addRow(2)" class="flex items-center gap-3 px-6 py-3 bg-slate-800 text-white rounded-xl font-black text-lg md:text-xl hover:bg-slate-900 active:scale-95 transition-all shadow-xl uppercase tracking-tight">
                    <span class="text-xl">➕</span> Thêm dòng mới
                </button>
            </div>

            <!-- Bài 3 -->
            <div class="glass-card p-5 md:p-8 rounded-[2.5rem] bg-white border border-teal-50 shadow-xl transition-all">
                <div class="flex items-start gap-4 mb-6">
                    <span class="w-10 h-10 md:w-14 md:h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl shadow-inner shrink-0">3</span>
                    <div class="flex-1 space-y-4">
                        <div class="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed italic border-l-8 border-orange-400 pl-4">
                            a) Tính vận tốc đi bộ của mỗi bạn ở bảng 1 (làm tròn đến 1 chữ số thập phân).
                        </div>
                        <div class="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed italic border-l-8 border-teal-400 pl-4">
                            b) Dựa vào thời gian ở bảng 2 và vận tốc vừa tính được, em hãy ước lượng chu vi của sân trường.
                        </div>
                    </div>
                </div>

                <div class="overflow-hidden rounded-[2.5rem] border-2 border-orange-100 shadow-lg mb-8">
                    <table class="w-full text-center divide-y-2 divide-orange-100">
                        <thead class="bg-orange-600 text-white font-black uppercase text-lg md:text-xl">
                            <tr class="divide-x-2 divide-orange-500">
                                <th class="p-4 md:p-6">Tên bạn</th>
                                <th class="p-4 md:p-6">Vận tốc (m/s)</th>
                                <th class="p-4 md:p-6">Chu vi (m)</th>
                            </tr>
                        </thead>
                        <tbody id="table-body-141-3" class="bg-white divide-y-2 divide-orange-50 text-xl md:text-2xl font-bold text-slate-700">
                             <tr class="divide-x-2 divide-orange-50">
                                <td class="p-4 md:p-6 text-slate-500 font-bold">Bạn A</td>
                                <td class="p-4 md:p-6"><input type="text" id="ans-141-3a-0" placeholder="VD: 1,3" class="w-full text-center border-2 border-orange-100 rounded-xl p-2 outline-none focus:border-orange-500 text-2xl md:text-3xl font-black shadow-inner"></td>
                                <td class="p-4 md:p-6"><input type="text" id="ans-141-3b-0" placeholder="VD: 160" class="w-full text-center border-2 border-orange-100 rounded-xl p-2 outline-none focus:border-orange-500 text-2xl md:text-3xl font-black shadow-inner"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
                    <button onclick="window.addRow(3)" class="flex items-center gap-3 px-6 py-3 bg-slate-800 text-white rounded-[1.5rem] font-black text-lg md:text-xl hover:bg-slate-900 active:scale-95 transition-all shadow-xl uppercase tracking-tight">
                        <span class="text-xl">➕</span> Thêm dòng mới (Bài 3)
                    </button>
                    <button id="check_141_3_btn" onclick="window.check_141_3()" class="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-[2rem] font-black text-xl shadow-xl hover:shadow-orange-200/50 transform hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-4 uppercase">
                        🎯 Kiểm tra đáp án
                    </button>
                </div>

                <div class="border-t-4 border-dashed border-teal-200 pt-8">
                    <button id="btn-submit-practical" onclick="window.submitPracticalReport()" class="w-full bg-teal-600 text-white p-8 rounded-[3rem] font-black text-3xl shadow-2xl hover:bg-teal-700 transform hover:-translate-y-2 active:scale-95 transition-all flex items-center justify-center gap-6 border-b-8 border-teal-800">
                        🚀 GỬI BÁO CÁO THỰC HÀNH
                    </button>
                    <p class="text-center text-teal-600 font-bold mt-4 animate-pulse italic">Học sinh bấm nút này để nộp kết quả thực hành biểu đồ!</p>
                </div>
            </div>

            <script>
            window.addRow = function(tableNum) {
                const tbody = document.getElementById('table-body-141-' + tableNum);
                if (!tbody) return;
                const rowCount = tbody.rows.length;
                const newRow = tbody.insertRow();
                newRow.className = "divide-x-2 divide-teal-50";
                if (rowCount % 2 !== 0) newRow.classList.add('bg-teal-50/30');

                if (tableNum === 1) {
                    newRow.innerHTML = '<td class="p-4 md:p-6"><input type="text" id="name-141-1-' + rowCount + '" placeholder="..." class="w-full text-center bg-transparent outline-none font-bold text-slate-400"></td>' +
                        '<td class="p-4 md:p-6 text-slate-500 italic font-bold">40</td>' +
                        '<td class="p-4 md:p-6"><input type="number" id="time-141-1-' + rowCount + '" placeholder="?" class="w-24 md:w-32 text-center border-2 border-teal-100 rounded-xl p-2 outline-none focus:border-teal-500 text-2xl md:text-3xl font-black shadow-inner bg-white/50"></td>';
                } else if (tableNum === 2) {
                    newRow.innerHTML = '<td class="p-4 md:p-6"><input type="text" id="name-141-2-' + rowCount + '" placeholder="..." class="w-full text-center bg-transparent outline-none font-bold text-slate-400"></td>' +
                        '<td class="p-4 md:p-6"><input type="number" id="time-141-2-' + rowCount + '" placeholder="?" class="w-24 md:w-32 text-center border-2 border-teal-100 rounded-xl p-2 outline-none focus:border-teal-500 text-2xl md:text-3xl font-black shadow-inner bg-white/50"></td>';
                } else if (tableNum === 3) {
                    const friendNameInput1 = document.getElementById('name-141-1-' + rowCount);
                    const name = (friendNameInput1 && friendNameInput1.value) ? friendNameInput1.value : 'Bạn ' + String.fromCharCode(65 + rowCount);
                    newRow.className = "divide-x-2 divide-orange-50";
                    if (rowCount % 2 !== 0) newRow.classList.add('bg-orange-50/30');
                    newRow.innerHTML = '<td class="p-4 md:p-6 text-slate-500 font-bold">' + name + '</td>' +
                        '<td class="p-4 md:p-6"><input type="text" id="ans-141-3a-' + rowCount + '" placeholder="VD: 1,3" class="w-full text-center border-2 border-orange-100 rounded-xl p-2 outline-none focus:border-orange-500 text-2xl md:text-3xl font-black shadow-inner"></td>' +
                        '<td class="p-4 md:p-6"><input type="text" id="ans-141-3b-' + rowCount + '" placeholder="VD: 160" class="w-full text-center border-2 border-orange-100 rounded-xl p-2 outline-none focus:border-orange-500 text-2xl md:text-3xl font-black shadow-inner"></td>';
                }
            };

            window.submitPracticalReport = async function() {
                const btn = document.getElementById('btn-submit-practical');
                if (!btn) return;
                btn.disabled = true;
                btn.innerHTML = '<span>⏳ Đang gửi...</span>';

                try {
                    let reports = [];
                    const tbody = document.getElementById('table-body-141-3');
                    const rows = tbody.rows.length;
                    for (let i = 0; i < rows; i++) {
                        const nameEl = document.getElementById('name-141-1-' + i) || document.getElementById('name-141-2-' + i);
                        const name = (nameEl && nameEl.value) ? nameEl.value : ('Bạn ' + String.fromCharCode(65 + i));
                        const v = document.getElementById('ans-141-3a-' + i)?.value || "";
                        const p = document.getElementById('ans-141-3b-' + i)?.value || "";
                        reports.push(name + ': v=' + v + ', C=' + p);
                    }
                    const reportContent = "Báo cáo thực hành Tiết 141: " + reports.join("; ");

                    if (window.submitMathLesson) {
                        await window.submitMathLesson(reportContent, 100, 'btn-submit-practical', 0, 1, 1);
                        btn.innerHTML = '<span>✅ Đã gửi thành công!</span>';
                        btn.classList.replace('bg-teal-600', 'bg-emerald-600');
                    }
                } catch (e) {
                    btn.innerHTML = '<span>❌ Lỗi khi gửi! Thử lại</span>';
                    btn.disabled = false;
                }
            };

            window.check_141_3 = function() {
                const tbody3 = document.getElementById('table-body-141-3');
                if (!tbody3) return;
                const rowCount = tbody3.rows.length;
                let allCorrect = true;
                let resultsHtml = "";

                for (let i = 0; i < rowCount; i++) {
                    const name = "Bạn " + String.fromCharCode(65 + i);
                    const t1_val = document.getElementById('time-141-1-' + i)?.value;
                    const t2_val = document.getElementById('time-141-2-' + i)?.value;
                    
                    if (!t1_val || !t2_val) continue;
                    
                    const t1 = parseFloat(t1_val);
                    const t2 = parseFloat(t2_val);
                    const v_correct = (40 / t1).toFixed(1).replace('.', ',');
                    const perimeter_correct = Math.round((40 / t1) * t2);
                    
                    const user_v = document.getElementById('ans-141-3a-' + i)?.value.trim() || "";
                    const user_p = document.getElementById('ans-141-3b-' + i)?.value.trim() || "";
                    
                    const vMatch = (user_v === v_correct);
                    const pMatch = (Math.abs(parseFloat(user_p.replace(',', '.')) - perimeter_correct) <= 5);
                    const rowCorrect = vMatch && pMatch;
                    
                    if (!rowCorrect) allCorrect = false;
                    
                    const colorClass = rowCorrect ? 'text-emerald-700' : 'text-red-600';
                    resultsHtml += '<p class="' + colorClass + '"><b>' + name + ':</b> v ≈ ' + v_correct + ' m/s; C ≈ ' + perimeter_correct + ' m</p>';
                }
                
                if (window.submitMathLesson) {
                    window.submitMathLesson("Kiểm tra Bài 3 HĐ tính toán", allCorrect ? 100 : 0, "check_141_3_btn", 0, 1, allCorrect ? 1 : 0);
                }
                
                let solution = '<div class="p-5 rounded-[2rem] border-2 shadow-sm space-y-2 bg-orange-50 border-orange-200">' +
                    '<div class="font-black text-2xl underline mb-2 text-orange-800">Đáp án đúng:</div>' +
                    '<div class="font-bold text-xl text-slate-800 space-y-2">' + resultsHtml + '</div>' +
                '</div>';
                
                window.showMathFeedback(allCorrect, solution, "Kết quả thực tế", "Hãy kiểm tra lại thời gian đo được ở HĐ 1 và HĐ 2 để tính toán chính xác nhé!", solution);
            };
            </script>
        </div>
    `,
    "quizPool": [...metadata.quizPool].sort(() => Math.random() - 0.5).slice(0, 10),
    "metadata": metadata
};

window.lesson141 = lesson141;

/* --- MATH_BUILDER_METADATA ---
${JSON.stringify(metadata, null, 4)}
--- END_METADATA --- */

