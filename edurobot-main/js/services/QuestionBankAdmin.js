// js/components/QuestionBankAdmin.js
export const QuestionBankAdmin = {
    renderModal() {
        let modal = document.getElementById('qb-admin-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'qb-admin-modal';
            modal.className = `fixed inset-0 z-[2147483647] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 transition-opacity duration-300 pointer-events-auto`;
            document.body.appendChild(modal);
        }
        
        modal.classList.remove('hidden');
        
        modal.innerHTML = `
            <div class="bg-white w-full max-w-5xl h-[90vh] rounded-[40px] shadow-2xl border border-white/20 flex flex-col overflow-hidden relative">
                <!-- Header -->
                <div class="p-8 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <div class="flex items-center gap-4">
                        <span class="text-4xl">🏛️</span>
                        <div>
                            <h2 class="text-3xl font-black text-slate-800 uppercase tracking-tight">Ngân Hàng Câu Hỏi Tập Trung</h2>
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Quản lý Dữ liệu & Tạo Đề Tự động</p>
                        </div>
                    </div>
                    <button onclick="document.getElementById('qb-admin-modal').classList.add('hidden')" class="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all active:scale-90">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div class="flex flex-1 overflow-hidden">
                    <!-- Sidebar Tabs -->
                    <div class="w-64 bg-slate-100/50 border-r border-slate-200 p-6 flex flex-col gap-4">
                        <button onclick="QuestionBankAdmin.switchTab('generator')" id="qb-tab-generator" class="qb-tab w-full text-left px-6 py-4 rounded-2xl font-black text-sm transition-all bg-indigo-600 text-white shadow-xl">
                            📝 Tạo Đề Kiểm Tra
                        </button>
                        <button onclick="QuestionBankAdmin.switchTab('manager')" id="qb-tab-manager" class="qb-tab w-full text-left px-6 py-4 rounded-2xl font-black text-sm transition-all text-slate-500 hover:bg-white hover:shadow-sm">
                            📂 Quản lý Dữ Liệu
                        </button>
                    </div>

                    <!-- Content Area -->
                    <div class="flex-1 p-8 overflow-y-auto bg-slate-50/30" id="qb-content-area">
                        <!-- Default: Generator -->
                        ${this.renderGeneratorTab()}
                    </div>
                </div>
            </div>
        `;
    },

    switchTab(tab) {
        document.querySelectorAll('.qb-tab').forEach(el => {
            el.classList.remove('bg-indigo-600', 'text-white', 'shadow-xl');
            el.classList.add('text-slate-500', 'hover:bg-white', 'hover:shadow-sm');
        });
        const activeTab = document.getElementById(`qb-tab-${tab}`);
        activeTab.classList.remove('text-slate-500', 'hover:bg-white', 'hover:shadow-sm');
        activeTab.classList.add('bg-indigo-600', 'text-white', 'shadow-xl');

        document.getElementById('qb-content-area').innerHTML = tab === 'generator' ? this.renderGeneratorTab() : this.renderManagerTab();
    },

    renderGeneratorTab() {
        return `
            <div class="space-y-8 animate-fade-in-down">
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 class="font-black text-slate-700 uppercase mb-4 text-sm tracking-widest flex items-center gap-2">🕹️ Cấu hình bộ đề</h3>
                    <div class="grid grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label class="text-[10px] font-bold text-slate-400 uppercase">Phạm vi Tiết</label>
                            <div class="flex items-center gap-2">
                                <input type="text" id="qb-gen-from" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 font-bold text-slate-700" placeholder="Từ tiết...">
                                <span>-</span>
                                <input type="text" id="qb-gen-to" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 font-bold text-slate-700" placeholder="Đến tiết...">
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label class="text-[10px] font-bold text-slate-400 uppercase text-center block">Số lượng câu theo mức độ</label>
                            <div class="flex gap-2">
                                <input type="number" id="qb-gen-l1" class="w-full bg-emerald-50 border border-emerald-200 rounded-xl px-2 py-2 text-center font-bold text-emerald-700 text-sm" placeholder="Mức 1" value="10">
                                <input type="number" id="qb-gen-l2" class="w-full bg-blue-50 border border-blue-200 rounded-xl px-2 py-2 text-center font-bold text-blue-700 text-sm" placeholder="Mức 2" value="5">
                                <input type="number" id="qb-gen-l3" class="w-full bg-orange-50 border border-orange-200 rounded-xl px-2 py-2 text-center font-bold text-orange-700 text-sm" placeholder="Mức 3" value="5">
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-end">
                        <button onclick="QuestionBankAdmin.generateExam()" class="bg-indigo-600 hover:bg-indigo-700 text-white font-black px-8 py-3 rounded-xl shadow-lg transition-all active:scale-95 flex items-center gap-2">
                            🚀 TẠO ĐỀ NGẪU NHIÊN
                        </button>
                    </div>
                </div>

                <div id="qb-gen-result" class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hidden">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="font-black text-slate-700 uppercase text-sm tracking-widest flex items-center gap-2">📄 Đề thi của bạn (<span id="qb-gen-count">0</span> câu)</h3>
                        <button onclick="QuestionBankAdmin.copyToClipboard('qb-exam-content')" class="bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold px-4 py-2 rounded-lg text-xs transition-all flex items-center gap-1">📋 Copy để in</button>
                    </div>
                    <div id="qb-exam-content" class="text-sm text-slate-700 space-y-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar p-4 bg-slate-50 rounded-2xl border border-slate-100"></div>
                </div>
            </div>
        `;
    },

    renderManagerTab() {
        return `
            <div class="space-y-8 animate-fade-in-down">
                <!-- Download Template -->
                <div class="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl shadow-sm flex items-center justify-between">
                    <div>
                        <h3 class="font-black text-emerald-800 uppercase mb-1 text-lg">Mẫu Nhập Excel Chuẩn</h3>
                        <p class="text-emerald-600 text-xs font-bold w-3/4">Tải bảng tính mẫu để nhập câu hỏi offline. Không tự ý đổi tên cột để tránh lỗi định dạng.</p>
                    </div>
                    <button onclick="QuestionBankAdmin.downloadExcelTemplate()" class="shrink-0 bg-white text-emerald-600 font-black px-6 py-4 rounded-2xl shadow-sm hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 border border-emerald-200">
                        📥 TẢI MẪU (.XLSX)
                    </button>
                </div>

                <!-- Upload Section -->
                <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 class="font-black text-slate-700 uppercase mb-4 text-sm tracking-widest flex items-center gap-2">📤 Cập Nhật Ngân Hàng</h3>
                    
                    <div class="grid grid-cols-2 gap-6 mb-6">
                        <label class="relative flex flex-col bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-indigo-400 group transition-all">
                            <input type="radio" name="qb_upload_mode" value="replace" class="absolute top-4 right-4 w-4 h-4 cursor-pointer" checked>
                            <span class="font-black text-indigo-700 mb-1">♻️ Ghi Đè Thay Thế</span>
                            <span class="text-[10px] font-bold text-slate-500 leading-relaxed">Hệ thống sẽ xóa TẤT CẢ câu hỏi cũ của các Tiết có mặt trong file tải lên, và thay bằng câu mới. (Khuyên dùng)</span>
                        </label>
                        <label class="relative flex flex-col bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 cursor-pointer hover:border-indigo-400 group transition-all">
                            <input type="radio" name="qb_upload_mode" value="append" class="absolute top-4 right-4 w-4 h-4 cursor-pointer">
                            <span class="font-black text-indigo-700 mb-1">➕ Ghi Nối Thêm</span>
                            <span class="text-[10px] font-bold text-slate-500 leading-relaxed">Giữ lại câu cũ, nhồi thêm câu mới vào ngân hàng của các Tiết có trong file.</span>
                        </label>
                    </div>

                    <div class="flex items-center justify-center w-full">
                        <label for="qb-file-upload" class="flex flex-col items-center justify-center w-full h-40 border-2 border-indigo-200 border-dashed rounded-3xl cursor-pointer bg-indigo-50/30 hover:bg-indigo-50 transition-all">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <span class="text-4xl mb-2 grayscale group-hover:grayscale-0">📊</span>
                                <p class="mb-2 text-sm text-indigo-700 font-black">Click để tải lên File Excel Ngân hàng</p>
                                <p class="text-xs text-indigo-500 font-bold uppercase tracking-widest">Chỉ nhận .XLSX hoặc .CSV / Max 5MB</p>
                            </div>
                            <input id="qb-file-upload" type="file" class="hidden" accept=".xlsx, .xls, .csv" onchange="QuestionBankAdmin.handleFileUpload(this)" />
                        </label>
                    </div>
                </div>
            </div>
        `;
    },

    async generateExam() {
        const fromVal = document.getElementById('qb-gen-from').value.trim();
        const toVal = document.getElementById('qb-gen-to').value.trim();
        const l1Count = parseInt(document.getElementById('qb-gen-l1').value) || 0;
        const l2Count = parseInt(document.getElementById('qb-gen-l2').value) || 0;
        const l3Count = parseInt(document.getElementById('qb-gen-l3').value) || 0;
        
        let periods = [];
        if (isNaN(fromVal) || isNaN(toVal)) {
            if (fromVal) periods.push(fromVal);
            if (toVal && toVal !== fromVal) periods.push(toVal);
        } else {
            const fromP = parseInt(fromVal) || 1;
            const toP = parseInt(toVal) || 175;
            for (let i = fromP; i <= toP; i++) periods.push(i);
        }

        const btn = event.currentTarget;
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '⏳...';

        try {
            const qs = await window.QuestionBankManager.getQuestions({
                periods: periods,
                countsPerLevel: { 1: l1Count, 2: l2Count, 3: l3Count }
            });

            const resDiv = document.getElementById('qb-gen-result');
            const cntDiv = document.getElementById('qb-gen-count');
            const contDiv = document.getElementById('qb-exam-content');

            resDiv.classList.remove('hidden');
            cntDiv.innerText = qs.length;

            if (qs.length === 0) {
                contDiv.innerHTML = '<p class="text-center text-slate-400 italic font-bold">Không tìm thấy câu hỏi nào thỏa mãn yêu cầu.</p>';
                btn.innerHTML = originalHtml;
                return;
            }

            let htmlString = '';
            qs.forEach((q, idx) => {
                const labels = ['A', 'B', 'C', 'D'];
                htmlString += `
                    <div class="mb-6 pb-6 border-b border-slate-200 border-dashed">
                        <p class="font-black text-slate-800 mb-3"><span class="text-indigo-600">Câu ${idx + 1}:</span> ${q.question} <span class="text-[9px] bg-slate-200 text-slate-500 px-2 py-0.5 rounded-md ml-2 relative -top-0.5 whitespace-nowrap">Tiết ${q.period} | Mức ${q.level}</span></p>
                        <div class="grid grid-cols-2 gap-y-2">
                `;
                q.options.forEach((opt, oIdx) => {
                    const isCorrect = q.answer === oIdx;
                    htmlString += `<p class="font-bold text-slate-600 ${isCorrect ? 'text-emerald-700 bg-emerald-50 px-2 py-1 rounded inline-block -ml-2' : ''}">${labels[oIdx]}. ${opt}</p>`;
                });
                htmlString += `</div></div>`;
            });

            contDiv.innerHTML = htmlString;

        } catch (e) {
            console.error(e);
            alert("Đã xảy ra lỗi khi bốc đề!");
        }
        btn.innerHTML = originalHtml;
    },

    copyToClipboard(elementId) {
        const textToCopy = document.getElementById(elementId).innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("Đã copy toàn bộ nội dung đề bộ nhớ tạm!");
        }).catch(err => {
            alert("Không thể copy. Bạn hãy tô đen và Copy thủ công nhé.");
        });
    },

    downloadExcelTemplate() {
        if (typeof XLSX === 'undefined') {
            alert('Thư viện Excel chưa được tải. Vui lòng kiểm tra lại kết nối!');
            return;
        }

        const wb = XLSX.utils.book_new();
        const ws_data = [
            ['ID', 'Tiết', 'Mức Độ', 'Câu Hỏi', 'Đáp Án Đúng', 'Đáp Án Nhiễu Khác (Tùy chọn)']
        ];
        
        // Add some instruction rows
        ws_data.push(['1', '134', '1', '15 phút 50 giây : 5 = ?', '3 phút 10 giây', '']);
        ws_data.push(['2', '140', '1', 'Công thức vận tốc?', 'v = s / t', 'v = s x t, s = v / t']);
        
        const ws = XLSX.utils.aoa_to_sheet(ws_data);
        XLSX.utils.book_append_sheet(wb, ws, "Question Bank");
        
        XLSX.writeFile(wb, "NganHangCauHoi_Mau.xlsx");
    },

    handleFileUpload(input) {
        if (!input.files || input.files.length === 0) return;
        if (typeof XLSX === 'undefined') {
            alert('Thư viện Excel chưa được tải. Vui lòng kiểm tra lại kết nối Mạng!');
            input.value = '';
            return;
        }

        const mode = document.querySelector('input[name="qb_upload_mode"]:checked').value;
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = async (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, {type: 'array'});
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(firstSheet, {header: 1});
                
                if (jsonData.length < 2) {
                    alert("File không có dữ liệu!");
                    return;
                }

                // Prepare parsing
                const newQuestions = [];
                // Skip header (i=1 to skip row 0)
                for (let i = 1; i < jsonData.length; i++) {
                    const row = jsonData[i];
                    if (!row || row.length < 5) continue;
                    
                    const periodNum = parseInt(row[1]);
                    const qText = row[3];
                    const aText = row[4];
                    if (isNaN(periodNum) || !qText || !aText) continue;

                    let qObj = {
                        id: row[0] || Date.now().toString() + i,
                        period: periodNum,
                        level: parseInt(row[2]) || 1,
                        q: qText.toString().trim(),
                        a: aText.toString().trim(),
                        customDistractors: row[5] ? row[5].toString().split(',').map(s=>s.trim()) : []
                    };
                    newQuestions.push(qObj);
                }

                if (newQuestions.length === 0) {
                    alert("Không tìm thấy câu hỏi hợp lệ trong file!");
                    return;
                }

                // Process mode
                await window.QuestionBankManager.init();
                const currentBank = window.QuestionBankManager.data;
                const affectedPeriods = [...new Set(newQuestions.map(q => q.period))];

                let finalBank = [];
                if (mode === 'replace') {
                    // Remove all questions that belong to affectedPeriods
                    finalBank = currentBank.filter(q => !affectedPeriods.includes(q.period));
                    // Concat new
                    finalBank = finalBank.concat(newQuestions);
                    alert(`Đã XÓA bộ câu hỏi cũ của ${affectedPeriods.length} tiết và GHI ĐÈ ${newQuestions.length} câu hỏi mới hoàn tất!`);
                } else {
                    finalBank = currentBank.concat(newQuestions);
                    alert(`Đã GHI NỐI THÊM ${newQuestions.length} câu hỏi mới thành công!`);
                }

                // Save back to QuestionBankManager
                window.QuestionBankManager.data = finalBank;
                
                // Usually this is where you would send an API request to save to backend DB. 
                // For now we simulate save by logging and replacing local memory bank.
                console.log("[QuestionBankAdmin] Synced to Memory Data. Total now: ", finalBank.length);

                input.value = '';
                
            } catch (err) {
                console.error("Excel parse err:", err);
                alert("Đã xảy ra lỗi khi phân tích file Excel.");
            }
        };

        reader.readAsArrayBuffer(file);
    }
};

window.QuestionBankAdmin = QuestionBankAdmin;
