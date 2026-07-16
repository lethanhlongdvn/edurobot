export const lesson184 = {
    "topic": "Tiếng Việt 5",
    "week": "27",
    "period": "184",
    "title": "ÔN TẬP VÀ ĐÁNH GIÁ GIỮA HKII (TIẾT 2)",
    "desc": "Học sinh thực hành phân biệt câu đơn - câu ghép, xác định các vế câu và liên kết các vế câu trong câu ghép bằng quan hệ từ hoặc cặp từ hô ứng.",
    "subject": "Tiếng Việt",
    "theme": "Hương sắc trăm miền",
    "content": `
<div class="space-y-8 animate-in fade-in duration-700 max-w-4xl mx-auto">
    <!-- 🎯 Mục tiêu ôn tập -->
    <div class="bg-blue-50/70 p-6 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-lg relative overflow-hidden">
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-100/40 rounded-full blur-2xl animate-pulse"></div>
        <h3 class="text-2xl md:text-5xl font-black text-blue-900 mb-4 flex items-center gap-3">
            <span class="p-2 bg-blue-600 text-white rounded-xl shadow-md">🎯</span>
            Mục tiêu ôn tập (Tiết 2)
        </h3>
        <ul class="space-y-3 text-blue-950 font-bold text-xl md:text-2xl ml-2">
            <li class="flex items-start gap-2">
                <span class="text-blue-900 font-black">•</span>
                Phân biệt chính xác câu đơn và câu ghép; xác định được cấu trúc (Chủ ngữ - Vị ngữ) của từng vế trong câu ghép.
            </li>
            <li class="flex items-start gap-2">
                <span class="text-blue-900 font-black">•</span>
                Biết cách liên kết các vế câu ghép bằng kết từ, quan hệ từ hoặc các cặp từ hô ứng thích hợp.
            </li>
        </ul>
    </div>

    <!-- 📖 BÀI 3: PHÂN TÍCH CÂU ĐƠN - CÂU GHÉP (INTERACTIVE TEXT PARSER) -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">3</span>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Phân biệt câu đơn, câu ghép & xác định vế câu</h2>
            </div>

            <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 serif-font leading-relaxed text-gray-800 text-xl md:text-4xl">
                (1) Mùa đông, rùa ngại rét. (2) Gió cứ thổi vù vù. (3) Rùa đợi đến mùa xuân. 
                (4) Mùa xuân nhiều hoa, nhưng mùa xuân vẫn là đứa em của mùa đông. 
                (5) Mưa phùn vẫn cứ lai rai và gió bắc vẫn thút thít ở các khe núi. 
                (6) Rùa lại đợi đến hè. (7) Mùa hè tạnh ráo. (8) Cây cối có nhiều quả chín thơm tho. 
                (9) Nhưng cái nóng cứ hầm hập. (10) Cả ngày, bụi cuốn mịt mùng. 
                (11) Hễ cơn dông đến thì đất đá lại như sôi lên, nước lũ đổ ào ào.
                <p class="text-right text-base font-bold text-gray-500 mt-2">(Theo Võ Quảng)</p>
            </div>

            <p class="text-lg md:text-xl font-bold text-slate-700">Em hãy nhấp vào từng câu dưới đây để phân loại và xem phân tích cú pháp chi tiết:</p>

            <div class="space-y-3" id="sentence-analysis-list">
                <!-- Sentences will be populated dynamically or static for absolute reliability -->
                <div class="border border-slate-150 rounded-xl bg-white hover:bg-slate-50/50 transition-all overflow-hidden">
                    <button onclick="toggleSentenceAnalysis(1)" class="w-full p-4 flex items-center justify-between text-left font-bold text-gray-800 text-lg md:text-xl">
                        <span>Câu 1: "Mùa đông, rùa ngại rét."</span>
                        <span class="text-blue-600 font-extrabold text-sm uppercase px-3 py-1 bg-blue-50 rounded-full" id="tag-s-1">Xem đáp án</span>
                    </button>
                    <div id="ans-s-1" class="hidden p-4 border-t border-slate-100 bg-emerald-50/20 text-base md:text-lg text-gray-700 space-y-2">
                        <p><strong>🏷️ Phân loại:</strong> <span class="text-emerald-700 font-black">Câu đơn</span></p>
                        <p><strong>📐 Cấu trúc cú pháp:</strong></p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><span class="text-amber-700">Mùa đông</span>: Trạng ngữ (chỉ thời gian).</li>
                            <li><span class="text-blue-700">rùa</span>: Chủ ngữ (CN).</li>
                            <li><span class="text-emerald-700">ngại rét</span>: Vị ngữ (VN).</li>
                        </ul>
                    </div>
                </div>

                <div class="border border-slate-150 rounded-xl bg-white hover:bg-slate-50/50 transition-all overflow-hidden">
                    <button onclick="toggleSentenceAnalysis(2)" class="w-full p-4 flex items-center justify-between text-left font-bold text-gray-800 text-lg md:text-xl">
                        <span>Câu 4: "Mùa xuân nhiều hoa, nhưng mùa xuân vẫn là đứa em của mùa đông."</span>
                        <span class="text-blue-600 font-extrabold text-sm uppercase px-3 py-1 bg-blue-50 rounded-full" id="tag-s-4">Xem đáp án</span>
                    </button>
                    <div id="ans-s-4" class="hidden p-4 border-t border-slate-100 bg-emerald-50/20 text-base md:text-lg text-gray-700 space-y-2">
                        <p><strong>🏷️ Phân loại:</strong> <span class="text-blue-700 font-black">Câu ghép</span></p>
                        <p><strong>📐 Cấu trúc cú pháp:</strong> Gồm 2 vế câu nối với nhau bằng kết từ <span class="text-red-600 font-black">"nhưng"</span>.</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Vế 1:</strong> Mùa xuân (CN1) // nhiều hoa (VN1).</li>
                            <li><strong>Vế 2:</strong> mùa xuân (CN2) // vẫn là đứa em của mùa đông (VN2).</li>
                        </ul>
                    </div>
                </div>

                <div class="border border-slate-150 rounded-xl bg-white hover:bg-slate-50/50 transition-all overflow-hidden">
                    <button onclick="toggleSentenceAnalysis(3)" class="w-full p-4 flex items-center justify-between text-left font-bold text-gray-800 text-lg md:text-xl">
                        <span>Câu 5: "Mưa phùn vẫn cứ lai rai và gió bắc vẫn thút thít ở các khe núi."</span>
                        <span class="text-blue-600 font-extrabold text-sm uppercase px-3 py-1 bg-blue-50 rounded-full" id="tag-s-5">Xem đáp án</span>
                    </button>
                    <div id="ans-s-5" class="hidden p-4 border-t border-slate-100 bg-emerald-50/20 text-base md:text-lg text-gray-700 space-y-2">
                        <p><strong>🏷️ Phân loại:</strong> <span class="text-blue-700 font-black">Câu ghép</span></p>
                        <p><strong>📐 Cấu trúc cú pháp:</strong> Gồm 2 vế câu nối bằng kết từ <span class="text-red-600 font-black">"và"</span>.</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Vế 1:</strong> Mưa phùn (CN1) // vẫn cứ lai rai (VN1).</li>
                            <li><strong>Vế 2:</strong> gió bắc (CN2) // vẫn thút thít ở các khe núi (VN2).</li>
                        </ul>
                    </div>
                </div>

                <div class="border border-slate-150 rounded-xl bg-white hover:bg-slate-50/50 transition-all overflow-hidden">
                    <button onclick="toggleSentenceAnalysis(4)" class="w-full p-4 flex items-center justify-between text-left font-bold text-gray-800 text-lg md:text-xl">
                        <span>Câu 11: "Hễ cơn dông đến thì đất đá lại như sôi lên, nước lũ đổ ào ào."</span>
                        <span class="text-blue-600 font-extrabold text-sm uppercase px-3 py-1 bg-blue-50 rounded-full" id="tag-s-11">Xem đáp án</span>
                    </button>
                    <div id="ans-s-11" class="hidden p-4 border-t border-slate-100 bg-emerald-50/20 text-base md:text-lg text-gray-700 space-y-2">
                        <p><strong>🏷️ Phân loại:</strong> <span class="text-blue-700 font-black">Câu ghép (3 vế câu)</span></p>
                        <p><strong>📐 Cấu trúc cú pháp:</strong> Vế 1 và vế 2 liên kết bằng cặp quan hệ từ <span class="text-red-600 font-black">"Hễ... thì..."</span>; vế 2 và vế 3 liên kết trực tiếp bằng dấu phẩy.</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><strong>Vế 1:</strong> cơn dông (CN1) // đến (VN1).</li>
                            <li><strong>Vế 2:</strong> đất đá (CN2) // lại như sôi lên (VN2).</li>
                            <li><strong>Vế 3:</strong> nước lũ (CN3) // đổ ào ào (VN3).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 🔗 BÀI 4: KẾT NỐI VẾ CÂU (DRAG-AND-DROP SIMULATOR) -->
    <section class="w-full">
        <div class="glass-card rounded-[40px] p-6 md:p-8 shadow-2xl bg-white border border-slate-100 space-y-6">
            <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">4</span>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Ghép các vế câu ở A và B tạo câu ghép thích hợp</h2>
            </div>

            <div class="bg-amber-50/50 p-6 rounded-3xl border border-amber-100 space-y-4">
                <p class="text-lg md:text-xl font-bold text-amber-900">Em hãy hoàn thành ghép câu ghép dưới đây bằng cách chọn vế A, kết từ thích hợp và vế B:</p>
                
                <div class="grid grid-cols-1 gap-4 text-base md:text-lg">
                    <!-- Ghép cặp 1 -->
                    <div class="flex flex-col md:flex-row items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
                        <select id="part-a-1" class="p-2 border rounded-lg font-bold bg-slate-50 w-full md:w-[35%]">
                            <option value="">-- Vế A --</option>
                            <option value="Mặt trời lên cao">Mặt trời lên cao</option>
                            <option value="Sương xuống dày đặc">Sương xuống dày đặc</option>
                            <option value="Trong vườn, những bông hồng đã nở rộ, toả hương ngào ngạt">Trong vườn, những bông hồng đã nở rộ, toả hương ngào ngạt</option>
                        </select>
                        <select id="conjunction-1" class="p-2 border rounded-lg font-bold text-red-600 bg-red-50 w-full md:w-[25%]">
                            <option value="">-- Từ nối --</option>
                            <option value="khi... thì... / hễ... thì...">Hễ / Khi ... thì ...</option>
                            <option value="vì... nên...">Vì ... nên ...</option>
                            <option value="tuy... nhưng...">Tuy ... nhưng ...</option>
                        </select>
                        <select id="part-b-1" class="p-2 border rounded-lg font-bold bg-slate-50 w-full md:w-[40%]">
                            <option value="">-- Vế B --</option>
                            <option value="chiếc bóng ngắn lại.">chiếc bóng ngắn lại.</option>
                            <option value="khung cảnh xung quanh mờ mịt, không còn nhìn rõ mặt người.">khung cảnh xung quanh mờ mịt, không còn nhìn rõ mặt người.</option>
                            <option value="những bông lan vẫn e ấp giữ nụ chúm chím.">những bông lan vẫn e ấp giữ nụ chúm chím.</option>
                        </select>
                    </div>

                    <!-- Ghép cặp 2 -->
                    <div class="flex flex-col md:flex-row items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
                        <select id="part-a-2" class="p-2 border rounded-lg font-bold bg-slate-50 w-full md:w-[35%]">
                            <option value="">-- Vế A --</option>
                            <option value="Mặt trời lên cao">Mặt trời lên cao</option>
                            <option value="Sương xuống dày đặc">Sương xuống dày đặc</option>
                            <option value="Trong vườn, những bông hồng đã nở rộ, toả hương ngào ngạt">Trong vườn, những bông hồng đã nở rộ, toả hương ngào ngạt</option>
                        </select>
                        <select id="conjunction-2" class="p-2 border rounded-lg font-bold text-red-600 bg-red-50 w-full md:w-[25%]">
                            <option value="">-- Từ nối --</option>
                            <option value="khi... thì... / hễ... thì...">Hễ / Khi ... thì ...</option>
                            <option value="vì... nên...">Vì ... nên ...</option>
                            <option value="tuy... nhưng...">Tuy ... nhưng ...</option>
                        </select>
                        <select id="part-b-2" class="p-2 border rounded-lg font-bold bg-slate-50 w-full md:w-[40%]">
                            <option value="">-- Vế B --</option>
                            <option value="chiếc bóng ngắn lại.">chiếc bóng ngắn lại.</option>
                            <option value="khung cảnh xung quanh mờ mịt, không còn nhìn rõ mặt người.">khung cảnh xung quanh mờ mịt, không còn nhìn rõ mặt người.</option>
                            <option value="những bông lan vẫn e ấp giữ nụ chúm chím.">những bông lan vẫn e ấp giữ nụ chúm chím.</option>
                        </select>
                    </div>
                </div>

                <div class="flex justify-center mt-4">
                    <button onclick="check184Combinations()" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all text-lg">
                        🔍 Kiểm tra kết nối
                    </button>
                </div>
                <div id="combinations-feedback" class="text-lg font-black text-center hidden mt-2"></div>
            </div>
        </div>
    </section>

    <!-- 🌸 BÀI 5: THÊM VẾ CÂU (AI ESSAY EVALUATOR) -->
    <section class="w-full">
        <div class="bg-white rounded-[32px] p-6 md:p-8 border border-slate-100 shadow-xl space-y-6">
            <div class="flex items-start gap-3">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl shrink-0 shadow-md">5</span>
                <h2 class="text-2xl md:text-5xl font-black text-gray-800">Hoàn thành câu ghép bằng cách điền thêm vế câu hoặc từ nối</h2>
            </div>

            <div class="p-6 bg-sky-50/50 rounded-2xl border border-sky-100 space-y-4">
                <div class="space-y-3">
                    <div>
                        <label class="text-lg md:text-xl font-bold text-sky-950 block mb-1">a. Nếu em chọn một sản vật quê hương để giới thiệu với bạn bè...</label>
                        <input type="text" id="sentence-a" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg font-semibold" placeholder="...thì em sẽ giới thiệu món bún bò Huế quê hương em.">
                    </div>
                    <div>
                        <label class="text-lg md:text-xl font-bold text-sky-950 block mb-1">b. ... nên tôi luôn háo hức mong đến giờ ông kể chuyện.</label>
                        <input type="text" id="sentence-b" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg font-semibold" placeholder="Vì những câu chuyện của ông vô cùng lý thú và ly kỳ...">
                    </div>
                    <div>
                        <label class="text-lg md:text-xl font-bold text-sky-950 block mb-1">c. Tuy những hạt gạo bé nhỏ, giản dị...</label>
                        <input type="text" id="sentence-c" class="w-full p-4 rounded-xl border border-slate-200 focus:ring-4 focus:ring-sky-100 outline-none text-lg font-semibold" placeholder="...nhưng chúng chứa đựng bao mồ hôi vất vả gieo trồng của nhà nông.">
                    </div>
                </div>

                <div class="flex justify-center mt-6">
                    <button onclick="check184SentenceAI()" class="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-xl transition-all active:scale-[0.95] flex items-center justify-center gap-3 text-lg md:text-xl uppercase tracking-wider">
                        <span>🤖</span> 
                        <span>Nộp bài cho EduRobot đánh giá</span>
                    </button>
                </div>
                <div id="fb-184-sentence-ai" class="w-full hidden mt-4"></div>
            </div>
        </div>

        <script>
            window.toggleSentenceAnalysis = function(num) {
                const content = document.getElementById('ans-s-' + num);
                const tag = document.getElementById('tag-s-' + num);
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    tag.innerHTML = 'Thu gọn';
                } else {
                    content.classList.add('hidden');
                    tag.innerHTML = 'Xem đáp án';
                }
            };

            window.check184Combinations = function() {
                const a1 = document.getElementById('part-a-1').value;
                const c1 = document.getElementById('conjunction-1').value;
                const b1 = document.getElementById('part-b-1').value;

                const a2 = document.getElementById('part-a-2').value;
                const c2 = document.getElementById('conjunction-2').value;
                const b2 = document.getElementById('part-b-2').value;

                if (!a1 || !c1 || !b1 || !a2 || !c2 || !b2) {
                    alert('Em hãy chọn đầy đủ vế câu và từ nối của cả 2 cặp nhé!');
                    return;
                }

                let success = true;
                let details = "";

                // Check Pair 1
                if (a1 === "Mặt trời lên cao" && c1 === "khi... thì... / hễ... thì..." && b1 === "chiếc bóng ngắn lại.") {
                    details += "✅ Cặp 1: Ghép chính xác! (Hễ mặt trời lên cao thì chiếc bóng ngắn lại).\\n";
                } else if (a1 === "Sương xuống dày đặc" && c1 === "vì... nên..." && b1 === "khung cảnh xung quanh mờ mịt, không còn nhìn rõ mặt người.") {
                    details += "✅ Cặp 1: Ghép chính xác! (Vì sương xuống dày đặc nên khung cảnh mờ mịt).\\n";
                } else if (a1 === "Trong vườn, những bông hồng đã nở rộ, toả hương ngào ngạt" && c1 === "tuy... nhưng..." && b1 === "những bông lan vẫn e ấp giữ nụ chúm chím.") {
                    details += "✅ Cặp 1: Ghép chính xác! (Tuy hồng đã nở rộ nhưng phong lan vẫn e ấp).\\n";
                } else {
                    success = false;
                    details += "❌ Cặp 1: Kết hợp chưa chính xác về mặt ngữ nghĩa hoặc từ nối.\\n";
                }

                // Check Pair 2
                if (a2 === "Mặt trời lên cao" && c2 === "khi... thì... / hễ... thì..." && b2 === "chiếc bóng ngắn lại.") {
                    details += "✅ Cặp 2: Ghép chính xác!\\n";
                } else if (a2 === "Sương xuống dày đặc" && c2 === "vì... nên..." && b2 === "khung cảnh xung quanh mờ mịt, không còn nhìn rõ mặt người.") {
                    details += "✅ Cặp 2: Ghép chính xác!\\n";
                } else if (a2 === "Trong vườn, những bông hồng đã nở rộ, toả hương ngào ngạt" && c2 === "tuy... nhưng..." && b2 === "những bông lan vẫn e ấp giữ nụ chúm chím.") {
                    details += "✅ Cặp 2: Ghép chính xác!\\n";
                } else {
                    success = false;
                    details += "❌ Cặp 2: Kết hợp chưa chính xác.\\n";
                }

                const fb = document.getElementById('combinations-feedback');
                fb.classList.remove('hidden');
                fb.innerHTML = details.replace(/\\n/g, '<br>');
                if (success) {
                    fb.className = "text-lg font-black text-center text-emerald-600 mt-4";
                } else {
                    fb.className = "text-lg font-black text-center text-amber-600 mt-4";
                }
            };

            window.check184SentenceAI = async function() {
                const sa = document.getElementById('sentence-a').value.trim();
                const sb = document.getElementById('sentence-b').value.trim();
                const sc = document.getElementById('sentence-c').value.trim();

                if (!sa || !sb || !sc) {
                    alert('Em hãy điền hoàn chỉnh cả 3 câu ghép trước khi nộp nhé!');
                    return;
                }

                const fb = document.getElementById('fb-184-sentence-ai');
                fb.classList.remove('hidden');
                fb.innerHTML = '<div class="p-6 bg-white border-2 border-sky-100 rounded-2xl shadow-lg italic text-lg md:text-xl text-sky-900 animate-pulse text-center">EduRobot đang kiểm tra ngữ pháp câu ghép của em, chờ một chút nhé...</div>';

                const prompt = \`Học sinh lớp 5 hoàn thành câu ghép:\\na. Nếu em chọn một sản vật quê hương để giới thiệu với bạn bè... [Học sinh điền]: \"\${sa}\"\\nb. [Học sinh điền] ... nên tôi luôn háo hức mong đến giờ ông kể chuyện: \"\${sb}\"\\nc. Tuy những hạt gạo bé nhỏ, giản dị... [Học sinh điền]: \"\${sc}\"\\nHãy viết lời nhận xét chi tiết, kiểm tra tính đúng đắn ngữ pháp, sự phù hợp ngữ nghĩa và khuyến khích học sinh. Xưng hô \"Thầy/Cô\" và gọi học sinh là \"em\".\`;

                await askAI('184-sentence-ai', prompt, 'single', 'writing', 25, prompt);
            };
        </script>
    </section>
</div>
`,
    "practice": {
        "settings": { "pick": 10 },
        "questions": [
            {
                "question": "Câu đơn là gì?",
                "options": [
                    "Câu gồm có hai hay nhiều vế câu tạo thành",
                    "Câu chỉ có một cụm Chủ ngữ - Vị ngữ làm nòng cốt",
                    "Câu không có chủ ngữ",
                    "Câu có nhiều hơn 3 kết từ"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Câu ghép là gì?",
                "options": [
                    "Câu có nhiều vị ngữ đi kèm trạng ngữ chỉ nơi chốn",
                    "Câu do nhiều vế câu ghép lại, mỗi vế có cấu trúc cụm Chủ - Vị hoàn chỉnh thể hiện quan hệ ngữ nghĩa chặt chẽ",
                    "Câu chỉ gồm duy nhất một chủ ngữ chính",
                    "Câu chỉ được liên kết bằng dấu phẩy mà không có quan hệ từ"
                ],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Phân tích cấu trúc câu sau:\\n'Gió cứ thổi vù vù.'",
                "options": [
                    "Gió (CN) // cứ thổi vù vù (VN) -> Câu đơn",
                    "Gió cứ (CN) // thổi vù vù (VN) -> Câu ghép",
                    "Gió (CN1) // cứ thổi (VN1) // vù vù (CN2) -> Câu ghép",
                    "Mất chủ ngữ chính"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Xác định vế câu và từ nối của câu ghép sau:\\n'Mưa phùn vẫn cứ lai rai và gió bắc vẫn thút thít ở các khe núi.'",
                "options": [
                    "Gồm 2 vế câu, nối với nhau bằng kết từ 'và'",
                    "Gồm 2 vế câu, nối với nhau bằng kết từ 'nhưng'",
                    "Là câu đơn có 2 trạng ngữ",
                    "Không có từ nối"
                ],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Câu nào dưới đây là câu đơn?",
                "options": [
                    "Mùa xuân nhiều hoa, nhưng mùa xuân vẫn là đứa em của mùa đông.",
                    "Cây cối có nhiều quả chín thơm tho.",
                    "Hễ cơn dông đến thì đất đá lại như sôi lên.",
                    "Mưa phùn lai rai và gió thút thít."
                ],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Xác định các vế trong câu ghép:\\n'Hễ cơn dông đến thì đất đá lại như sôi lên, nước lũ đổ ào ào.'",
                "options": [
                    "Gồm 3 vế câu liên kết chặt chẽ",
                    "Gồm 2 vế câu và 1 trạng ngữ",
                    "Là câu đơn dài",
                    "Gồm 1 vế câu duy nhất"
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Cặp quan hệ từ nào phù hợp nhất để nối 2 vế câu biểu thị quan hệ Nguyên nhân - Kết quả?\\n'Sương xuống dày đặc ... khung cảnh xung quanh mờ mịt.'",
                "options": ["Tuy ... nhưng ...", "Vì ... nên ...", "Nếu ... thì ...", "Hễ ... thì ..."],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Cặp quan hệ từ biểu thị mối quan hệ Tương phản (ngược nghĩa) là cặp nào?",
                "options": ["Vì ... nên ...", "Nếu ... thì ...", "Tuy ... nhưng ...", "Nhờ ... nên ..."],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Cặp quan hệ từ 'Nếu ... thì ...' biểu thị mối quan hệ gì giữa các vế câu ghép?",
                "options": ["Nguyên nhân - Kết quả", "Điều kiện / Giả thiết - Kết quả", "Tăng tiến", "Tương phản"],
                "answer": 1,
                "level": 1
            },
            {
                "question": "Điền vế câu thích hợp tạo câu ghép:\\n'Nếu em chọn một sản vật quê hương để giới thiệu với bạn bè...'",
                "options": [
                    "...thì em sẽ rất tự hào về hương vị đặc trưng quê em.",
                    "...và em đi chơi công viên.",
                    "...vì em thích ăn kẹo ngọt.",
                    "...tuy nhiên bạn bè không thích ăn."
                ],
                "answer": 0,
                "level": 2
            },
            {
                "question": "Trong các câu sau, câu nào nối các vế câu ghép bằng một cặp từ hô ứng?",
                "options": [
                    "Rùa lại đợi đến hè.",
                    "Nắng vừa lên, sương đã tan.",
                    "Mùa hè tạnh ráo.",
                    "Nhưng cái nóng cứ hầm hập."
                ],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Từ 'Nhưng' ở đầu câu 9: 'Nhưng cái nóng cứ hầm hập' có tác dụng gì?",
                "options": [
                    "Nối các vế câu trong một câu ghép",
                    "Nối câu 9 với câu 8 trước nó",
                    "Làm trạng ngữ chỉ mục đích",
                    "Không có vai trò liên kết"
                ],
                "answer": 1,
                "level": 2
            },
            {
                "question": "Điền kết từ thích hợp vào câu sau:\\n'Tuy những hạt gạo bé nhỏ, giản dị ... chúng chứa đựng bao mồ hôi vất vả của nhà nông.'",
                "options": ["nên", "thì", "nhưng", "và"],
                "answer": 2,
                "level": 1
            },
            {
                "question": "Liên kết các vế câu ghép bằng dấu câu nào là trực tiếp (không dùng từ nối)?",
                "options": ["Dấu phẩy, dấu chấm phẩy hoặc dấu hai chấm", "Dấu gạch ngang", "Dấu ngoặc kép", "Dấu hỏi chấm"],
                "answer": 0,
                "level": 1
            },
            {
                "question": "Câu ghép nào dưới đây biểu thị mối quan hệ tăng tiến?",
                "options": [
                    "Mưa phùn vẫn cứ lai rai và gió bắc vẫn thút thít.",
                    "Không những Nam học giỏi mà bạn ấy còn rất chăm chỉ làm việc nhà.",
                    "Tuy nhà nghèo nhưng Lan học tập rất tốt.",
                    "Hễ trời mưa thì đường trơn trượt."
                ],
                "answer": 1,
                "level": 2
            }
        ]
    }
};