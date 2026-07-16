/**
 * Math Builder Engine - Template Engine sinh bài tập Toán
 * Chuyển đổi JSON data + design config → HTML + JS hoàn chỉnh
 */

const MathBuilderEngine = {

  // === DESIGN CONFIG → TAILWIND MAPPING ===
  designMap: {
    fontSize: {
      S: 'text-lg md:text-xl',
      M: 'text-xl md:text-2xl',
      L: 'text-2xl md:text-3xl',
      XL: 'text-3xl md:text-4xl',
      '2XL': 'text-4xl md:text-5xl'
    },
    fontWeight: {
      normal: 'font-medium',
      bold: 'font-bold',
      black: 'font-black'
    },
    textAlign: {
      left: 'text-left', center: 'text-center', right: 'text-right'
    },
    columns: {
      1: 'grid grid-cols-1',
      2: 'grid grid-cols-1 md:grid-cols-2 gap-10 items-center'
    },
    cardRadius: {
      small: 'rounded-2xl',
      medium: 'rounded-[32px]',
      large: 'rounded-[50px]'
    },
    shadow: {
      light: 'shadow-sm',
      medium: 'shadow-xl',
      heavy: 'shadow-2xl'
    }
  },

  accentColors: ['blue', 'emerald', 'amber', 'indigo', 'rose', 'teal', 'sky', 'orange'],

  getAccent(idx) {
    return this.accentColors[idx % this.accentColors.length];
  },

  cls(design, key) {
    const map = this.designMap[key];
    return map ? (map[design[key]] || Object.values(map)[2] || '') : '';
  },

  defaultDesign() {
    return {
      fontSize: 'L', fontWeight: 'black', fontItalic: false,
      textColor: 'gray-700', textAlign: 'left', columns: 1,
      imagePosition: 'right', cardRadius: 'large', cardBg: 'white',
      borderLeft: false, borderLeftColor: 'blue-500',
      shadow: 'heavy', accentColor: ''
    };
  },

  // === RENDER EXERCISE HEADER ===
  renderExHeader(idx, title, accent) {
    return `<h4 class="text-2xl md:text-4xl font-black text-${accent}-800 mb-8 md:mb-12 flex items-center gap-3">
  <span class="w-10 h-10 md:w-14 md:h-14 bg-${accent}-100 text-${accent}-600 rounded-2xl flex items-center justify-center font-black shadow-inner">${idx + 1}</span>
  ${title ? `<span>${this.escHtml(title)}</span>` : ''}
</h4>`;
  },

  // === RENDER FEEDBACK MODAL (Thầy E) ===
  renderFeedbackModal() {
    return `<div id="math-modal-overlay" style="display:none;" class="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
  <div class="bg-white rounded-[40px] shadow-2xl max-w-2xl w-full p-5 md:p-8 relative overflow-hidden border-4 border-blue-500 animate-in zoom-in-95 duration-300 flex flex-col" style="display:flex; flex-direction:column; max-height:90vh; box-sizing:border-box; padding:1.25rem;">
    <button id="math-modal-close-btn" onclick="window.closeMathModal()" style="position:absolute; top:1rem; right:1.5rem; font-size:1.75rem; font-weight:bold; color:#94a3b8; background:transparent; border:none; cursor:pointer; z-index:10; padding:0.25rem; line-height:1;">✕</button>
    <div id="modal-header-container" style="display:none !important;">
      <div id="modal-icon"></div>
      <div id="modal-title"></div>
    </div>
    <div id="modal-body" class="text-slate-700 text-xl md:text-2xl leading-relaxed overflow-y-auto pr-2 custom-scrollbar flex-1" style="flex:1; overflow-y:auto; max-height:100%; margin-top:1rem;">
      <!-- Content here -->
    </div>
    <!-- Thầy E character sub-icon -->
    <div class="absolute -bottom-6 -right-6 opacity-10 pointer-events-none">
      <div class="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-6xl text-white font-black">E</div>
    </div>
  </div>
</div>

<script>
window.showMathFeedback = function(isCorrect, rightAnswer, studentAnswer, guidance, solution) {
  let overlay = document.getElementById('math-modal-overlay');
  if (!overlay) return;
  
  // Đẩy modal ra ngoài body để vượt qua lỗi CSS Transform làm hỏng thuộc tính fixed
  if (overlay.parentNode !== document.body) {
      document.querySelectorAll('body > #math-modal-overlay').forEach(function(el) { el.remove(); });
      document.body.appendChild(overlay);
  }
  
  // Ép buộc inline CSS - giải pháp triệt để cho mọi trình duyệt
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;z-index:999999;background:rgba(15,23,42,0.3);backdrop-filter:blur(4px);padding:1rem;';
  
  // Thêm tính năng bấm ra ngoài để đóng
  overlay.onclick = function(e) {
      if (e.target === overlay) window.closeMathModal();
  };

  const title = document.getElementById('modal-title');
  const icon = document.getElementById('modal-icon');
  const body = document.getElementById('modal-body');
  
  const correctQuotes = [
    "Tuyệt vời quá! Em đã làm rất tốt. Thầy E rất tự hào về em!",
    "Chính xác rồi! Em có tư duy toán học thật nhạy bén.",
    "Wow! Một câu trả lời không thể chuẩn hơn. Tiếp tục phát huy nhé!",
    "Đúng rồi! Em đã nắm chắc kiến thức phần này rồi đấy."
  ];
  
  const wrongQuotes = [
    "Ôi, chưa chính xác rồi. Đừng nản lòng nhé, hãy thử tính lại xem nào!",
    "Có một chút nhầm lẫn ở đâu đó rồi. Em hãy kiểm tra lại các bước tính nhé.",
    "Cố gắng lên! Một chút xíu nữa thôi là đúng rồi. Thầy E tin em làm được!",
    "Chưa đúng rồi! Hãy bình tĩnh đọc kỹ lại đề bài và tính lại nhé."
  ];

  if (isCorrect) {
    title.innerText = "LỜI KHEN TỪ THẦY E";
    title.className = "tracking-tight uppercase text-emerald-600 font-black text-3xl md:text-4xl";
    icon.innerText = "✨";
    const quote = correctQuotes[Math.floor(Math.random() * correctQuotes.length)];
    
    // Xử lý nội dung lời giải chi tiết
    let solutionHtml = '';
    if (solution && (solution.includes('Lời giải') || solution.includes('Phép tính') || solution.includes('Đáp số') || solution.trim().startsWith('<'))) {
        solutionHtml = solution;
    } else {
        const solText = solution || ("Kết quả chính xác là: " + rightAnswer);
        solutionHtml = '<div class="space-y-3">' +
                '<div class="flex items-start gap-2">' +
                    '<span class="w-7 h-7 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0 font-bold text-sm">1</span>' +
                    '<p><span class="font-bold text-blue-700">Lời giải & Phép tính:</span> ' + solText + '</p>' +
                '</div>' +
                '<div class="flex items-start gap-2 border-t border-blue-100 pt-2 mt-2">' +
                    '<span class="w-7 h-7 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shrink-0 font-bold text-sm">2</span>' +
                    '<p><span class="font-bold text-orange-700">Đáp số:</span> ' + rightAnswer + '</p>' +
                '</div>' +
            '</div>';
    }

    body.innerHTML = '<div class="space-y-4">' +
                        '<p class="font-bold text-emerald-600 text-2xl md:text-3xl">' + quote + '</p>' +
                        '<div class="bg-blue-50 p-6 rounded-3xl border-2 border-blue-100 shadow-sm">' +
                          '<p class="text-blue-800 font-bold mb-4 flex items-center gap-2 border-b border-blue-200 pb-2">' +
                            '<span class="text-2xl">📝</span>' + 
                            '<span>CHI TIẾT BÀI GIẢI:</span>' +
                          '</p>' +
                          '<div class="text-slate-700 text-2xl leading-relaxed">' + solutionHtml + '</div>' +
                        '</div>' +
                      '</div>';
  } else {
    title.innerText = "HƯỚNG DẪN CỦA THẦY E";
    title.className = "tracking-tight uppercase text-amber-600 font-black text-3xl md:text-4xl";
    icon.innerText = "💡";
    const quote = wrongQuotes[Math.floor(Math.random() * wrongQuotes.length)];
    body.innerHTML = '<div class="space-y-4">' +
                        '<p class="font-bold text-amber-600 text-3xl">' + quote + '</p>' +
                        '<div class="bg-amber-50 p-6 rounded-3xl border-2 border-amber-100 shadow-inner">' +
                          '<p class="text-amber-800 font-bold mb-2 flex items-center gap-2">' +
                            '<span class="text-2xl">🔍</span>' + 
                            '<span>GỢI Ý CÁCH LÀM:</span>' +
                          '</p>' +
                          '<div class="text-slate-700 text-3xl leading-relaxed">' + (guidance || 'Hãy kiểm tra kỹ các bước tính và đơn vị em nhé! Thử lại một lần nữa nào.') + '</div>' +
                        '</div>' +
                        '<p class="text-slate-500 text-lg italic mt-4">* Thầy E sẽ không đưa đáp án khi em làm chưa đúng đâu nhé. Cố gắng lên!</p>' +
                      '</div>';
  }
  
  // Không cần remove hidden - đã dùng inline style display:flex ở trên
};

window.closeMathModal = function() {
  document.querySelectorAll('#math-modal-overlay').forEach(function(el) {
      el.style.display = 'none';
  });
};
</script>`;
  },

  renderCheckBtn(fnName, accent) {
    return `<button onclick="${fnName}()" class="w-14 h-14 md:w-24 md:h-24 bg-${accent}-600 hover:bg-${accent}-700 text-white rounded-[2rem] font-black text-2xl md:text-5xl flex items-center justify-center shadow-lg active:scale-95 transition-all">E</button>`;
  },

  renderFeedback(period, idx) {
    return `<div id="feedback-${period}-${idx + 1}" class="mt-4 hidden animate-in fade-in slide-in-from-top-4 duration-500"></div>`;
  },



  escHtml(s) { return (s || '').replace(/</g, '&lt;').replace(/>/g, '&gt;'); },

  // ==============================
  // 7 EXERCISE TEMPLATES - HTML
  // ==============================

  // --- TYPE 1: Điền 1 số ---
  renderFillSingle(ex, idx, design, period) {
    const accent = design.accentColor || this.getAccent(idx);
    const fs = this.cls(design, 'fontSize');
    const fw = this.cls(design, 'fontWeight');
    const colCls = this.cls(design, 'columns');
    const rd = this.cls(design, 'cardRadius');
    const sh = this.cls(design, 'shadow');
    const fnName = `window.check_${period}_${idx + 1}`;
    const inputId = `ans-${period}-${idx + 1}`;

    let inner = `<div class="space-y-6 text-${design.textColor} ${fs} leading-relaxed">${ex.statement}</div>`;
    const imgUrl = ex._blobUrl || ex.image;
    if (imgUrl) {
      inner = `<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  <img src="${this.escHtml(imgUrl)}" alt="Bài ${idx + 1}" class="w-full rounded-[40px] shadow-xl border-4 border-white object-cover aspect-video">
  <div class="space-y-6 text-${design.textColor} ${fs} leading-relaxed">${ex.statement}</div>
</div>`;
    }

    return `<div class="glass-card p-6 md:p-12 ${rd} bg-${design.cardBg} border border-gray-100 ${sh} relative overflow-hidden">
  ${this.renderExHeader(idx, ex.title || '', accent)}
  ${inner}
  <div class="mt-8 flex flex-wrap items-center gap-4 bg-${accent}-50 p-6 rounded-3xl">
    <span class="${fw} text-xl md:text-2xl">${ex.answerLabel || 'Đáp số:'}</span>
    <input type="number" id="${inputId}" class="w-32 md:w-48 px-4 py-3 border-4 border-${accent}-200 rounded-2xl text-center font-black text-3xl md:text-4xl outline-none focus:border-${accent}-500" step="any">
    <span class="font-black text-${accent}-600 text-xl md:text-2xl">${this.escHtml(ex.unit || '')}</span>
    ${this.renderCheckBtn(fnName, accent)}
  </div>
</div>`;
  },

  renderFillSingleJS(ex, idx, period) {
    const fnName = `check_${period}_${idx + 1}`;
    const inputId = `ans-${period}-${idx + 1}`;
    const answers = Array.isArray(ex.answer) ? ex.answer.map(a => `'${a}'`) : [`'${ex.answer}'`];
    return `window.${fnName} = function() {
  const ans = document.getElementById('${inputId}').value;
  const isCorrect = [${answers.join(',')}].includes(ans);
  
  if (window.showMathFeedback) {
    window.showMathFeedback(
      isCorrect, 
      "${ex.answer} ${this.escHtml(ex.unit || '')}", 
      ans,
      \`${(ex.guidance || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
      \`${(ex.solution || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
    );
  } else {
    alert(isCorrect ? "Chính xác!" : "Cố gắng lên!");
  }
  
  if (window.submitMathLesson) window.submitMathLesson("Bài ${period} - Bài ${idx + 1}: " + ans, "Bài ${idx + 1}", "${inputId}");
  if (window.syncRealtimeProgress) {
    window.syncRealtimeProgress({ ["scoreEx" + (${idx + 1})]: isCorrect ? 100 : 0 }, true);
  }
};`;
  },

  // --- TYPE 2: Đúng / Sai ---
  renderTrueFalse(ex, idx, design, period) {
    const accent = design.accentColor || this.getAccent(idx);
    const fs = this.cls(design, 'fontSize');
    const rd = this.cls(design, 'cardRadius');
    const sh = this.cls(design, 'shadow');
    const fnName = `window.check_${period}_${idx + 1}`;

    let inner = `<div class="space-y-6 text-${design.textColor} ${fs} leading-relaxed">${ex.statement}</div>`;
    const imgUrl = ex._blobUrl || ex.image;
    if (imgUrl) {
      inner = `<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  <img src="${this.escHtml(imgUrl)}" alt="Bài ${idx + 1}" class="w-full rounded-[40px] shadow-xl border-4 border-white object-cover aspect-video">
  <div class="space-y-6 text-${design.textColor} ${fs} leading-relaxed">${ex.statement}</div>
</div>`;
    }

    return `<div class="glass-card p-6 md:p-12 ${rd} bg-${design.cardBg} border border-gray-100 ${sh} relative overflow-hidden">
  ${this.renderExHeader(idx, ex.title || '', accent)}
  ${inner}
  <div class="mt-8 flex gap-6">
    <button onclick="${fnName}(true)" id="btn-${period}-${idx + 1}-true" class="flex-1 p-6 md:p-8 rounded-3xl border-4 border-gray-100 font-black text-2xl md:text-4xl hover:border-emerald-400 hover:bg-emerald-50 transition-all">ĐÚNG</button>
    <button onclick="${fnName}(false)" id="btn-${period}-${idx + 1}-false" class="flex-1 p-6 md:p-8 rounded-3xl border-4 border-gray-100 font-black text-2xl md:text-4xl hover:border-rose-400 hover:bg-rose-50 transition-all">SAI</button>
  </div>
  ${this.renderFeedback(period, idx)}
</div>`;
  },

  renderTrueFalseJS(ex, idx, period) {
    const fnName = `check_${period}_${idx + 1}`;
    const correct = ex.answer === true || ex.answer === 'true';
    return `window.${fnName} = function(val) {
  const isCorrect = (val === ${correct});
  if (window.showMathFeedback) {
    window.showMathFeedback(
      isCorrect, 
      "${correct ? 'ĐÚNG' : 'SAI'}", 
      val,
      \`${(ex.guidance || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
      \`${(ex.solution || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
    );
  }
  if (window.submitMathLesson) window.submitMathLesson("Bài ${period} - Bài ${idx + 1}: " + (val?"ĐÚNG":"SAI"), "Bài ${idx + 1}", "btn-${period}-${idx + 1}-"+(val?"true":"false"));
  if (window.syncRealtimeProgress) {
    window.syncRealtimeProgress({ ["scoreEx" + (${idx + 1})]: isCorrect ? 100 : 0 }, true);
  }
};`;
  },

  // --- TYPE 3: Trắc nghiệm A/B/C ---
  renderMultipleChoice(ex, idx, design, period) {
    const accent = design.accentColor || this.getAccent(idx);
    const fs = this.cls(design, 'fontSize');
    const rd = this.cls(design, 'cardRadius');
    const sh = this.cls(design, 'shadow');
    const fnName = `window.check_${period}_${idx + 1}`;
    const labels = ['A', 'B', 'C', 'D'];

    const optionsHtml = (ex.options || []).map((opt, oi) => {
      return `<button onclick="${fnName}('${labels[oi]}')" id="btn-${period}-${idx + 1}-${labels[oi]}" class="option-btn-${period}-${idx + 1} p-6 rounded-3xl border-4 border-gray-100 font-black text-xl md:text-2xl hover:border-${accent}-400 transition-all text-left">${labels[oi]}. ${this.escHtml(opt)}</button>`;
    }).join('\n');

    let inner = `<div class="space-y-6 text-${design.textColor} ${fs} leading-relaxed">${ex.statement}</div>`;
    const imgUrl = ex._blobUrl || ex.image;
    if (imgUrl) {
      inner = `<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
  <img src="${this.escHtml(imgUrl)}" alt="Bài ${idx + 1}" class="w-full rounded-[40px] shadow-xl border-4 border-white object-cover aspect-video">
  <div class="space-y-6 text-${design.textColor} ${fs} leading-relaxed">${ex.statement}</div>
</div>`;
    }

    return `<div class="glass-card p-6 md:p-12 ${rd} bg-${design.cardBg} border border-gray-100 ${sh} relative overflow-hidden">
  ${this.renderExHeader(idx, ex.title || 'Chọn câu trả lời đúng.', accent)}
  ${inner}
  <div class="mt-8 grid grid-cols-1 md:grid-cols-${Math.min(ex.options.length, 3)} gap-6">
    ${optionsHtml}
  </div>
  ${this.renderFeedback(period, idx)}
</div>`;
  },

  renderMultipleChoiceJS(ex, idx, period) {
    const fnName = `check_${period}_${idx + 1}`;
    const accent = ex.design?.accentColor || this.getAccent(idx);
    const labels = ['A', 'B', 'C', 'D'];
    const correctLabel = labels[ex.correctIndex || 0];
    const correctText = ex.options[ex.correctIndex || 0];
    return `window.${fnName} = function(choice) {
  document.querySelectorAll('.option-btn-${period}-${idx + 1}').forEach(b => {
    b.classList.remove('border-${accent}-500','bg-${accent}-50');
  });
  document.getElementById('btn-${period}-${idx + 1}-'+choice)?.classList.add('border-${accent}-500','bg-${accent}-50');
  
  const isCorrect = (choice === '${correctLabel}');
  if (window.showMathFeedback) {
    window.showMathFeedback(
      isCorrect, 
      "${correctLabel}. ${this.escHtml(correctText)}", 
      choice,
      \`${(ex.guidance || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
      \`${(ex.solution || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
    );
  }
  
  if (window.submitMathLesson) window.submitMathLesson("Bài ${period} - Bài ${idx + 1}: "+choice, "Bài ${idx + 1}", "btn-${period}-${idx + 1}-"+choice);
  if (window.syncRealtimeProgress) {
    window.syncRealtimeProgress({ ["scoreEx" + (${idx + 1})]: isCorrect ? 100 : 0 }, true);
  }
};`;
  },

  // --- TYPE 4: Điền nhiều ô ---
  renderFillMulti(ex, idx, design, period) {
    const accent = design.accentColor || this.getAccent(idx);
    const fs = this.cls(design, 'fontSize');
    const rd = this.cls(design, 'cardRadius');
    const sh = this.cls(design, 'shadow');
    const fnName = `window.check_${period}_${idx + 1}`;

    const fieldsHtml = (ex.fields || []).map((f, fi) => {
      const fid = `ans-${period}-${idx + 1}-${String.fromCharCode(97 + fi)}`;
      return `<div class="bg-${accent}-50 p-6 rounded-3xl border-2 border-${accent}-100 space-y-4 shadow-sm">
  <p class="font-bold text-xl md:text-2xl">${f.label}</p>
  <div class="flex items-center gap-3">
    <input type="number" id="${fid}" class="w-32 md:w-48 px-4 py-3 border-4 border-${accent}-200 rounded-2xl text-center font-black text-2xl md:text-3xl outline-none" step="any">
    <span class="font-black text-${accent}-600 text-xl md:text-2xl">${this.escHtml(f.unit || '')}</span>
  </div>
</div>`;
    }).join('\n');

    return `<div class="p-6 md:p-12 bg-${design.cardBg} ${rd} border border-gray-100 ${sh} relative overflow-hidden">
  ${this.renderExHeader(idx, ex.title || '', accent)}
  <div class="space-y-6 text-${design.textColor} ${fs} leading-relaxed mb-10">${ex.statement}</div>
  <div class="grid grid-cols-1 gap-6">${fieldsHtml}</div>
  <div class="mt-8 flex justify-center">
    ${this.renderCheckBtn(fnName, accent)}
  </div>
  ${this.renderFeedback(period, idx)}
</div>`;
  },

  renderFillMultiJS(ex, idx, period) {
    const fnName = `check_${period}_${idx + 1}`;
    const checks = (ex.fields || []).map((f, fi) => {
      const fid = `ans-${period}-${idx + 1}-${String.fromCharCode(97 + fi)}`;
      const ans = Array.isArray(f.answer) ? f.answer : [f.answer];
      return `[${ans.map(a => `'${a}'`).join(',')}].includes(document.getElementById('${fid}').value)`;
    });
    const rightAnswers = (ex.fields || []).map(f => `${f.label}: ${f.answer}`).join('; ');
    return `window.${fnName} = function() {
  const isCorrect = (${checks.join(' && ')});
  if (window.showMathFeedback) {
    window.showMathFeedback(
      isCorrect, 
      "${this.escHtml(rightAnswers)}", 
      "",
      \`${(ex.guidance || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
      \`${(ex.solution || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
    );
  }
  const vals = [${(ex.fields || []).map((_, fi) => `document.getElementById('ans-${period}-${idx + 1}-${String.fromCharCode(97 + fi)}').value`).join(',')}];
  if (window.submitMathLesson) window.submitMathLesson("Bài ${period} - Bài ${idx + 1}: "+vals.join(', '), "Bài ${idx + 1}", "ans-${period}-${idx + 1}-a");
  if (window.syncRealtimeProgress) {
    window.syncRealtimeProgress({ ["scoreEx" + (${idx + 1})]: isCorrect ? 100 : 0 }, true);
  }
};`;
  },

  // --- TYPE 5: Điền nhiều phép tính (grid) ---
  renderFillGrid(ex, idx, design, period) {
    const accent = design.accentColor || this.getAccent(idx);
    const rd = this.cls(design, 'cardRadius');
    const sh = this.cls(design, 'shadow');
    const fnName = `window.check_${period}_${idx + 1}`;

    const itemsHtml = (ex.items || []).map((item, ii) => {
      const iid = `ans-${period}-${idx + 1}-${ii}`;
      return `<div class="flex items-center gap-4 text-2xl md:text-3xl font-black text-${accent}-900 flex-nowrap whitespace-nowrap">
  <span>${item.expression} =</span>
  <input type="text" id="${iid}" class="w-24 text-3xl font-black text-${accent}-700 bg-white border-2 border-${accent}-200 rounded-xl p-2 text-center outline-none focus:border-${accent}-500 shadow-md" placeholder="?">
  <span>${this.escHtml(item.unit || '')}</span>
</div>`;
    }).join('\n');

    return `<div class="p-6 md:p-12 bg-${design.cardBg} ${rd} border border-gray-100 ${sh} relative overflow-hidden">
  ${this.renderExHeader(idx, ex.title || 'Số ?', accent)}
  <div class="bg-${accent}-50/50 p-6 rounded-3xl border-2 border-${accent}-100 space-y-8">
    ${itemsHtml}
  </div>
  <div class="mt-8 flex justify-center">
    ${this.renderCheckBtn(fnName, accent)}
  </div>
</div>`;
  },

  renderFillGridJS(ex, idx, period) {
    const fnName = `check_${period}_${idx + 1}`;
    const checks = (ex.items || []).map((item, ii) => {
      const iid = `ans-${period}-${idx + 1}-${ii}`;
      const ans = Array.isArray(item.answer) ? item.answer : [item.answer];
      return `[${ans.map(a => `'${a}'`).join(',')}].includes(document.getElementById('${iid}').value)`;
    });
    const rightAnswers = (ex.items || []).map(item => `${item.expression} = ${item.answer}`).join('; ');
    return `window.${fnName} = function() {
  const isCorrect = (${checks.join(' && ')});
  if (window.showMathFeedback) {
    window.showMathFeedback(
      isCorrect, 
      "${this.escHtml(rightAnswers)}", 
      "",
      \`${(ex.guidance || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
      \`${(ex.solution || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
    );
  }
  if (window.submitMathLesson) window.submitMathLesson("Bài ${period} - Bài ${idx + 1}", "Bài ${idx + 1}", "ans-${period}-${idx + 1}-0");
  if (window.syncRealtimeProgress) {
    window.syncRealtimeProgress({ ["scoreEx" + (${idx + 1})]: isCorrect ? 100 : 0 }, true);
  }
};`;
  },

  // --- TYPE 6: Chọn 1 từ danh sách (button group) ---
  renderSelectOne(ex, idx, design, period) {
    const accent = design.accentColor || this.getAccent(idx);
    const fs = this.cls(design, 'fontSize');
    const rd = this.cls(design, 'cardRadius');
    const sh = this.cls(design, 'shadow');

    const btnsHtml = (ex.options || []).map((opt, oi) => {
      return `<button onclick="window.select_${period}_${idx + 1}('${oi}',this)" class="btn-sel-${period}-${idx + 1} w-full sm:w-auto bg-white border-4 border-slate-200 py-6 px-8 rounded-2xl text-3xl md:text-4xl font-black text-slate-500 hover:border-${accent}-400 hover:bg-${accent}-50 hover:text-${accent}-700 transition shadow-md">${this.escHtml(opt)}</button>`;
    }).join('\n');

    return `<div class="p-6 md:p-12 bg-${design.cardBg} ${rd} border border-gray-100 ${sh} relative overflow-hidden">
  ${this.renderExHeader(idx, '', accent)}
  <div class="space-y-6 text-${design.textColor} ${fs} leading-relaxed mb-10">${ex.statement}</div>
  <div class="flex gap-4 flex-col sm:flex-row justify-center">${btnsHtml}</div>
  <div class="mt-8 flex justify-center">
    ${this.renderCheckBtn(`window.checkSel_${period}_${idx + 1}`, accent)}
  </div>
</div>`;
  },

  renderSelectOneJS(ex, idx, period) {
    const correctOpt = ex.options[ex.correctIndex || 0];
    return `let _sel_${period}_${idx + 1} = null;
window.select_${period}_${idx + 1} = function(val, btn) {
  _sel_${period}_${idx + 1} = val;
  document.querySelectorAll('.btn-sel-${period}-${idx + 1}').forEach(b => {
    b.classList.remove('border-blue-500','bg-blue-50','text-blue-700');
    b.classList.add('border-slate-200','text-slate-500');
  });
  btn.classList.remove('border-slate-200','text-slate-500');
  btn.classList.add('border-blue-500','bg-blue-50','text-blue-700');
};
window.checkSel_${period}_${idx + 1} = function() {
  const isCorrect = (_sel_${period}_${idx + 1} === '${ex.correctIndex}');
  if (window.showMathFeedback) {
    window.showMathFeedback(
      isCorrect, 
      "${this.escHtml(correctOpt)}", 
      _sel_${period}_${idx + 1},
      \`${(ex.guidance || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
      \`${(ex.solution || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
    );
  }
  if (window.submitMathLesson) window.submitMathLesson("Bài ${period} - Bài ${idx + 1}: "+_sel_${period}_${idx + 1}, "Bài ${idx + 1}", "btn-sel-${period}-${idx + 1}");
};`;
  },

  // --- TYPE 7: Trắc nghiệm nhiều phần (a/b/c) ---
  renderMultiPart(ex, idx, design, period) {
    const accent = design.accentColor || this.getAccent(idx);
    const fs = this.cls(design, 'fontSize');
    const rd = this.cls(design, 'cardRadius');
    const sh = this.cls(design, 'shadow');
    const partColors = ['indigo', 'amber', 'emerald', 'rose', 'sky'];
    const labels = ['A', 'B', 'C', 'D'];

    const partsHtml = (ex.parts || []).map((part, pi) => {
      const pc = partColors[pi % partColors.length];
      const optsHtml = (part.options || []).map((opt, oi) => {
        return `<button onclick="window.set_${period}_${idx + 1}_${pi}('${labels[oi]}')" id="btn-${period}-${idx + 1}-${pi}-${labels[oi]}" class="px-4 py-2 rounded-xl border-2 border-gray-200 font-bold hover:bg-${pc}-100">${labels[oi]}. ${this.escHtml(opt)}</button>`;
      }).join('\n');
      return `<div class="p-4 bg-${pc}-50 rounded-2xl border-l-[8px] border-${pc}-500">
  <p class="${fs}">${part.question}</p>
  <div class="mt-3 flex flex-wrap gap-2">${optsHtml}</div>
</div>`;
    }).join('\n');

    return `<div class="p-6 md:p-12 bg-${design.cardBg} ${rd} border border-gray-100 ${sh} relative overflow-hidden">
  ${this.renderExHeader(idx, ex.title || 'Chọn câu trả lời đúng.', accent)}
  <div class="space-y-6 text-${design.textColor} ${fs} leading-relaxed mb-10">${ex.statement || ''}</div>
  <div class="space-y-4">${partsHtml}</div>
  <div class="mt-8 flex justify-center">
    ${this.renderCheckBtn(`window.check_${period}_${idx + 1}`, accent)}
  </div>
</div>`;
  },

  renderMultiPartJS(ex, idx, period) {
    const labels = ['A', 'B', 'C', 'D'];
    const partColors = ['indigo', 'amber', 'emerald', 'rose', 'sky'];

    const stateVars = (ex.parts || []).map((_, pi) => `let _mp_${period}_${idx + 1}_${pi} = '';`).join('\n');
    const setFns = (ex.parts || []).map((part, pi) => {
      const pc = partColors[pi % partColors.length];
      return `window.set_${period}_${idx + 1}_${pi} = function(v) {
  _mp_${period}_${idx + 1}_${pi} = v;
  ['A','B','C','D'].forEach(x => { const e=document.getElementById('btn-${period}-${idx + 1}-${pi}-'+x); if(e) e.className="px-4 py-2 rounded-xl border-2 border-gray-200 font-bold hover:bg-${pc}-100"; });
  const sel=document.getElementById('btn-${period}-${idx + 1}-${pi}-'+v);
  if(sel) sel.className="px-4 py-2 rounded-xl border-2 border-${pc}-500 bg-${pc}-100 font-bold shadow-sm";
};`;
    }).join('\n');

    const correctChecks = (ex.parts || []).map((part, pi) => {
      const correctLbl = labels[part.correctIndex || 0];
      return `_mp_${period}_${idx + 1}_${pi} === '${correctLbl}'`;
    }).join(' && ');

    const correctAnswers = (ex.parts || []).map((part, pi) => {
      return `Phần ${String.fromCharCode(97 + pi)}: ${part.options[part.correctIndex || 0]}`;
    }).join('; ');

    return `${stateVars}
${setFns}
window.check_${period}_${idx + 1} = function() {
  const isCorrect = (${correctChecks});
  if (window.showMathFeedback) {
    window.showMathFeedback(
      isCorrect, 
      "${this.escHtml(correctAnswers)}", 
      "",
      \`${(ex.guidance || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
      \`${(ex.solution || '').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
    );
  }
  if (window.submitMathLesson) window.submitMathLesson("Bài ${period} - Bài ${idx + 1}", "Bài ${idx + 1}", "ans-${period}-${idx + 1}-a");
};`;
  },

  // --- TYPE 8: Nối các cặp ---
  renderMatching(ex, idx, design, period) {
    const rd = this.cls(design, 'cardRadius');
    const sh = this.cls(design, 'shadow');
    const id = `matching-${period}-${idx + 1}`;
    return `<div id="${id}" class="glass-card p-6 md:p-12 ${rd} bg-${design.cardBg} border border-gray-100 ${sh} relative overflow-hidden min-h-[400px]">
      ${this.renderExHeader(idx, ex.title || 'Nối các vế tương ứng.', design.accentColor || this.getAccent(idx))}
      <div class="space-y-6 text-${design.textColor} ${this.cls(design, 'fontSize')} leading-relaxed mb-10">${ex.statement || ''}</div>
      <div id="${id}-container"></div>
    </div>`;
  },

  renderMatchingJS(ex, idx, period) {
    const id = `matching-${period}-${idx + 1}`;
    const left = ex.leftCol || [];
    const right = ex.rightCol || [];
    const pairs = left.map((l, i) => ({ left: l, right: right[i] || '' }));
    return `if (window.Lesson && Lesson.renderMatchingExercise) {
      document.getElementById('${id}-container').innerHTML = Lesson.renderMatchingExercise('${id}', \`${(ex.title || 'Nối cặp').replace(/`/g, '\\`')}\`, ${JSON.stringify(pairs)});
    }`;
  },

  // --- TYPE 9: Sắp xếp thứ tự ---
  renderOrdering(ex, idx, design, period) {
    const rd = this.cls(design, 'cardRadius');
    const sh = this.cls(design, 'shadow');
    const id = `ordering-${period}-${idx + 1}`;
    return `<div id="${id}" class="glass-card p-6 md:p-12 ${rd} bg-${design.cardBg} border border-gray-100 ${sh} relative overflow-hidden min-h-[300px]">
      ${this.renderExHeader(idx, ex.title || 'Sắp xếp các mục theo thứ tự đúng.', design.accentColor || this.getAccent(idx))}
      <div class="space-y-6 text-${design.textColor} ${this.cls(design, 'fontSize')} leading-relaxed mb-10">${ex.statement || ''}</div>
      <div id="${id}-container"></div>
    </div>`;
  },

  renderOrderingJS(ex, idx, period) {
    const id = `ordering-${period}-${idx + 1}`;
    const items = ex.items || [];
    return `if (window.Lesson && Lesson.renderOrdering) {
      document.getElementById('${id}-container').innerHTML = Lesson.renderOrdering('${id}', \`${(ex.title || 'Sắp xếp').replace(/`/g, '\\`')}\`, ${JSON.stringify(items)});
    }`;
  },

  // --- TYPE 10: Phân loại ---
  renderCategorizing(ex, idx, design, period) {
    const rd = this.cls(design, 'cardRadius');
    const sh = this.cls(design, 'shadow');
    const id = `categorizing-${period}-${idx + 1}`;
    return `<div id="${id}" class="glass-card p-6 md:p-12 ${rd} bg-${design.cardBg} border border-gray-100 ${sh} relative overflow-hidden min-h-[400px]">
      ${this.renderExHeader(idx, ex.title || 'Kéo các mục vào đúng nhóm.', design.accentColor || this.getAccent(idx))}
      <div class="space-y-6 text-${design.textColor} ${this.cls(design, 'fontSize')} leading-relaxed mb-10">${ex.statement || ''}</div>
      <div id="${id}-container"></div>
    </div>`;
  },

  renderCategorizingJS(ex, idx, period) {
    const id = `categorizing-${period}-${idx + 1}`;
    const categories = ex.categories || [];
    const items = ex.categorizingItems || [];
    return `if (window.Lesson && Lesson.renderCategorizing) {
      document.getElementById('${id}-container').innerHTML = Lesson.renderCategorizing('${id}', \`${(ex.title || 'Phân loại').replace(/`/g, '\\`')}\`, ${JSON.stringify(categories)}, ${JSON.stringify(items)});
    }`;
  },

  // --- TYPE 11: Điền khuyết (Kéo thả) ---
  renderFillBlanks(ex, idx, design, period) {
    const rd = this.cls(design, 'cardRadius');
    const sh = this.cls(design, 'shadow');
    const id = `fill-blanks-${period}-${idx + 1}`;
    return `<div id="${id}" class="glass-card p-6 md:p-12 ${rd} bg-${design.cardBg} border border-gray-100 ${sh} relative overflow-hidden">
      ${this.renderExHeader(idx, ex.title || 'Kéo từ thích hợp vào ô trống.', design.accentColor || this.getAccent(idx))}
      <div class="space-y-6 text-${design.textColor} ${this.cls(design, 'fontSize')} leading-relaxed mb-10">${ex.statement || ''}</div>
      <div id="${id}-container"></div>
    </div>`;
  },

  renderFillBlanksJS(ex, idx, period) {
    const id = `fill-blanks-${period}-${idx + 1}`;
    const textWithSlots = (ex.textWithSlots || '').replace(/`/g, '\\`').replace(/\$/g, '\\$');
    const bank = ex.bank || [];
    return `if (window.Lesson && Lesson.renderFillBlanks) {
      document.getElementById('${id}-container').innerHTML = Lesson.renderFillBlanks('${id}', \`${(ex.title || 'Điền khuyết').replace(/`/g, '\\`')}\`, \`${textWithSlots}\`, ${JSON.stringify(bank)});
    }`;
  },

  // ==============================
  // MAIN BUILD FUNCTION
  // ==============================
  typeMap: {
    fill_single: { html: 'renderFillSingle', js: 'renderFillSingleJS' },
    true_false: { html: 'renderTrueFalse', js: 'renderTrueFalseJS' },
    multiple_choice: { html: 'renderMultipleChoice', js: 'renderMultipleChoiceJS' },
    fill_multi: { html: 'renderFillMulti', js: 'renderFillMultiJS' },
    fill_grid: { html: 'renderFillGrid', js: 'renderFillGridJS' },
    select_one: { html: 'renderSelectOne', js: 'renderSelectOneJS' },
    multi_part: { html: 'renderMultiPart', js: 'renderMultiPartJS' },
    matching: { html: 'renderMatching', js: 'renderMatchingJS' },
    ordering: { html: 'renderOrdering', js: 'renderOrderingJS' },
    categorizing: { html: 'renderCategorizing', js: 'renderCategorizingJS' },
    fill_blanks: { html: 'renderFillBlanks', js: 'renderFillBlanksJS' },
    image_labeling: { html: 'renderImageLabeling', js: 'renderImageLabelingJS' }
  },

  // --- TYPE 12: Gắn nhãn hình ảnh ---
  renderImageLabeling(ex, idx, design, period) {
    const id = `img-label-${period}-${idx + 1}`;
    const rd = this.cls(design, 'cardRadius');
    const sh = this.cls(design, 'shadow');
    return `<div id="${id}" class="glass-card p-6 md:p-12 ${rd} bg-${design.cardBg} border border-gray-100 ${sh} relative overflow-hidden">
      ${this.renderExHeader(idx, ex.title || 'Gắn nhãn vào đúng vị trí trên hình.', design.accentColor || this.getAccent(idx))}
      <div class="space-y-6 text-${design.textColor} ${this.cls(design, 'fontSize')} leading-relaxed mb-10">${ex.statement || ''}</div>
      <div id="${id}-container"></div>
    </div>`;
  },

  renderImageLabelingJS(ex, idx, period) {
    const id = `img-label-${period}-${idx + 1}`;
    const imageUrl = ex._blobUrl || ex.image || '';
    const labels = ex.labels || [];
    return `if (window.Lesson && Lesson.renderImageLabeling) {
      document.getElementById('${id}-container').innerHTML = Lesson.renderImageLabeling('${id}', \`${(ex.title || '').replace(/`/g, '\\`')}\`, '${imageUrl}', ${JSON.stringify(labels)});
    }`;
  },

  buildLesson(data) {
    const { lessonInfo, exercises, quizPool } = data;
    const period = lessonInfo.period;

    let htmlParts = [];
    let jsParts = [];

    exercises.forEach((ex, idx) => {
      const design = { ...this.defaultDesign(), ...(ex.design || {}) };
      if (!design.accentColor) design.accentColor = this.getAccent(idx);
      const tmpl = this.typeMap[ex.type];
      if (!tmpl) return;
      htmlParts.push(this[tmpl.html](ex, idx, design, period));
      jsParts.push(this[tmpl.js](ex, idx, period));
    });

    const practiceHtml = `<div class="space-y-8 md:space-y-16">
${htmlParts.join('\n\n')}

${this.renderFeedbackModal()}

<script>
${jsParts.join('\n\n')}
</script>
</div>`;

    const quizPoolStr = JSON.stringify(quizPool || [], null, 8);

    const ds = lessonInfo.design || {};
    const accent = ds.accentColor || 'blue';
    const sizeMap = { 'S': 'text-sm', 'M': 'text-base', 'L': 'text-xl md:text-2xl', 'XL': 'text-2xl md:text-3xl', '2XL': 'text-3xl md:text-4xl' };
    const weightMap = {
      'normal': 'font-medium',
      'bold': 'font-bold',
      'black': 'font-black',
      'italic': 'italic font-medium',
      'bold-italic': 'italic font-bold'
    };

    const sizeCls = sizeMap[ds.fontSize] || sizeMap['L'];
    const weightCls = weightMap[ds.fontWeight] || weightMap['bold'];

    let exploreInner = '';
    if (ds.columns === 2 && lessonInfo.exploreImage) {
      exploreInner = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="overflow-hidden rounded-3xl shadow-2xl border-4 border-slate-50 ring-1 ring-slate-100 shadow-slate-200">
                <img src="${lessonInfo.exploreImage}" class="w-full hover:scale-105 transition-transform duration-1000" alt="Khám phá">
            </div>
            <div class="prose prose-slate max-w-none text-slate-800 leading-relaxed ${sizeCls} ${weightCls} tracking-tight">
                ${lessonInfo.exploreContent.replace(/\n/g, '<br>')}
            </div>
        </div>`;
    } else {
      exploreInner = `
        <div class="space-y-10">
            ${lessonInfo.exploreImage ? `
            <div class="flex justify-center overflow-hidden rounded-3xl shadow-2xl border-4 border-slate-50 ring-1 ring-slate-100 shadow-slate-200 max-w-4xl mx-auto">
                <img src="${lessonInfo.exploreImage}" class="max-w-full hover:scale-105 transition-transform duration-1000" alt="Khám phá">
            </div>` : ''}
                ${(lessonInfo.exploreContent || '').replace(/\n/g, '<br>')}
        </div>`;
    }

    const exploreHtml = lessonInfo.exploreContent ? `
        <div class="theory-section rounded-[48px] p-10 md:p-20 bg-white shadow-2xl shadow-${accent}-100/50 border border-${accent}-50 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div class="flex items-center gap-4 mb-12">
                <div class="w-16 h-16 bg-${accent}-600 text-white rounded-[24px] flex items-center justify-center text-3xl shadow-xl shadow-${accent}-200/50">🔍</div>
                <div>
                   <h2 class="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">Khám phá</h2>
                   <div class="w-20 h-1.5 bg-${accent}-600 rounded-full mt-1"></div>
                </div>
            </div>
            ${exploreInner}
        </div>
    ` : `
        <div class="space-y-6 md:space-y-10">
            [[TUTOR|math-${period}-tutor|Chào các em! Hãy cùng làm bài tập nhé!]]
        </div>
    `;

    const fullFile = `export const lesson${period} = {
    "topic": "${lessonInfo.topic || ''}",
    "week": "${lessonInfo.week || ''}",
    "period": "${period}",
    "title": "${lessonInfo.title || ''}",
    "desc": "${lessonInfo.desc || ''}",
    "content": \`${exploreHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
    "practice": \`
        ${practiceHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}
    \`,
    "quizPool": ${quizPoolStr}
};
`;

    const manifestLine = `  { period: "${period}", week: "${lessonInfo.week}", title: "${lessonInfo.title}", topic: "${lessonInfo.topic}", modulePath: "./${period}/index.js", exportName: "lesson${period}" },`;
    const importLine = `import { lesson${period} } from './${period}/index.js';`;

    // Add Metadata for re-importing
    const metadata = `\n\n/* --- MATH_BUILDER_METADATA --- \n${JSON.stringify(data)} \n--- END_METADATA --- */`;
    const practiceJs = jsParts.join('\n\n');
    const finalFile = fullFile + metadata;

    return { fullFile: finalFile, practiceHtml, practiceJs, manifestLine, importLine };
  }
};

// Export for both browser and module
if (typeof window !== 'undefined') window.MathBuilderEngine = MathBuilderEngine;
if (typeof module !== 'undefined') module.exports = MathBuilderEngine;
