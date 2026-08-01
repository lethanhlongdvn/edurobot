import { LessonInteractive } from '../components/lesson/LessonInteractive.js';

/**
 * Math Builder UI Module
 * Handles all user interactions, state management, and export logic for the Math Builder.
 */

// ============================
// STATE
// ============================
let currentStep = 1;
let exercises = [];
let quizItems = [];
let previewMode = 'tv';

// Global state needs to be accessible for certain logic
window.exercises = exercises;
window.quizItems = quizItems;

// ============================
// IMAGE PICKER
// ============================
function handleImagePick(idx, fileInput) {
  const file = fileInput.files[0];
  if (!file) return;
  
  const period = document.getElementById('in-period').value || '000';
  const ext = file.name.split('.').pop().toLowerCase() || 'png';
  const imgName = `${period}-${idx + 1}.${ext}`;
  const autoPath = `assets/images/toan/toan_tap_2/${period}/${imgName}`;
  
  exercises[idx].image = autoPath;
  exercises[idx]._fileName = file.name;
  exercises[idx]._blobUrl = URL.createObjectURL(file);
  
  renderExerciseList();
  refreshPreview();
  showToast(`🖼️ Đường dẫn: ${autoPath}`);
}

function handleMediaPick(idx, fileInput, mediaType) {
  const file = fileInput.files[0];
  if (!file) return;
  const period = document.getElementById('in-period').value || '000';
  const ext = file.name.split('.').pop().toLowerCase();
  const mediaName = `${period}-${idx + 1}.${ext}`;
  const folder = mediaType === 'audio' ? 'am_thanh' : 'video';
  const autoPath = `${folder}/toan/${period}/${mediaName}`;
  exercises[idx][mediaType] = autoPath;
  renderExerciseList();
  refreshPreview();
  showToast(`${mediaType === 'audio' ? '🔊' : '🎬'} Đường dẫn: ${autoPath}`);
}

function handleExploreImage(input) {
  const file = input.files[0];
  if (!file) return;
  const period = document.getElementById('in-period').value || '999';
  const path = `assets/images/toan/toan_tap_2/${period}/${file.name}`;
  document.getElementById('in-explore-img').value = path;
  document.getElementById('explore-img-preview').src = URL.createObjectURL(file);
  document.getElementById('explore-img-name').innerText = file.name;
  document.getElementById('explore-img-preview-container').classList.remove('hidden');
}

function clearExploreImage() {
  document.getElementById('in-explore-img').value = '';
  document.getElementById('explore-img-preview-container').classList.add('hidden');
  document.getElementById('explore-img-pick').value = '';
}

// ============================
// IMPORT EXISTING LESSON
// ============================
function importLesson() {
  document.getElementById('import-file').click();
}

function handleImportFile(fileInput) {
  const file = fileInput.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const code = e.target.result;
      
      // Try to find Metadata first (Full re-import)
      const metaMatch = code.match(/\/\* --- MATH_BUILDER_METADATA --- \s*([\s\S]*?) \s*--- END_METADATA --- \*\//);
      if (metaMatch) {
        const fullData = JSON.parse(metaMatch[1]);
        if (fullData.lessonInfo) {
          document.getElementById('in-period').value = fullData.lessonInfo.period || '';
          document.getElementById('in-week').value = fullData.lessonInfo.week || '';
          document.getElementById('in-topic').value = fullData.lessonInfo.topic || '';
          document.getElementById('in-title').value = fullData.lessonInfo.title || '';
          document.getElementById('in-desc').value = fullData.lessonInfo.desc || '';
          document.getElementById('in-explore').value = fullData.lessonInfo.exploreContent || '';
          document.getElementById('in-explore-img').value = fullData.lessonInfo.exploreImage || '';
          
          if (fullData.lessonInfo.design) {
            document.getElementById('ex-ds-cols').value = fullData.lessonInfo.design.columns || '1';
            document.getElementById('ex-ds-size').value = fullData.lessonInfo.design.fontSize || 'L';
            document.getElementById('ex-ds-weight').value = fullData.lessonInfo.design.fontWeight || 'bold';
            document.getElementById('ex-ds-color').value = fullData.lessonInfo.design.accentColor || 'blue';
          }
          
          if (fullData.lessonInfo.exploreImage) {
            document.getElementById('explore-img-preview').src = fullData.lessonInfo.exploreImage;
            document.getElementById('explore-img-name').innerText = fullData.lessonInfo.exploreImage.split('/').pop();
            document.getElementById('explore-img-preview-container').classList.remove('hidden');
          } else {
            clearExploreImage();
          }
        }
        exercises.length = 0;
        if (fullData.exercises) exercises.push(...fullData.exercises);
        
        quizItems.length = 0;
        if (fullData.quizPool) quizItems.push(...fullData.quizPool);
        
        renderExerciseList();
        renderQuizList();
        goStep(1);
        showActiveFooter(fullData.lessonInfo);
        showToast(`✅ Đã hồi phục toàn bộ bài: ${fullData.lessonInfo.title}`);
        return;
      }

      // Fallback to regex (Old format or manual)
      const periodMatch = code.match(/"period"\s*:\s*"([^"]*)"/);
      const titleMatch = code.match(/"title"\s*:\s*"([^"]*)"/);
      const weekMatch = code.match(/"week"\s*:\s*"([^"]*)"/);
      const topicMatch = code.match(/"topic"\s*:\s*"([^"]*)"/);
      const descMatch = code.match(/"desc"\s*:\s*"([^"]*)"/);
      
      if (periodMatch) document.getElementById('in-period').value = periodMatch[1];
      if (weekMatch) document.getElementById('in-week').value = weekMatch[1];
      if (topicMatch) document.getElementById('in-topic').value = topicMatch[1];
      if (titleMatch) document.getElementById('in-title').value = titleMatch[1];
      if (descMatch) document.getElementById('in-desc').value = descMatch[1];
      
      // Parse quizPool
      const quizMatch = code.match(/"quizPool"\s*:\s*(\[[\s\S]*?\])\s*\n/);
      if (quizMatch) {
        try {
          // Replace eval with JSON.parse for safety. 
          // Note: Since index.js is JS, not pure JSON, we might need to be careful.
          // But our generated files use standard JSON structure for the pool.
          // Let's try a safer approach if possible, but for now JSON.parse is better than eval.
          const poolStr = quizMatch[1].replace(/(\w+):/g, '"$1":').replace(/'/g, '"');
          const pool = JSON.parse(poolStr);
          quizItems.length = 0;
          quizItems.push(...(pool || []).map(q => ({
            question: q.question || '',
            options: q.options || ['','','',''],
            answer: Array.isArray(q.options) ? q.options.indexOf(q.answer) : 0,
            level: q.level || 1
          })));
        } catch(qe) { 
          console.warn('Quiz parse error, falling back to basic extraction:', qe);
        }
      }
      
      exercises.length = 0; // Reset exercises for old format
      renderExerciseList();
      renderQuizList();
      goStep(1);
      showActiveFooter({ period: periodMatch?.[1], title: titleMatch?.[1] });
      showToast(`📖 Đã nạp bài: ${titleMatch ? titleMatch[1] : file.name}`);
      
    } catch (err) {
      console.error('Import error:', err);
      showToast('❌ Lỗi đọc file! Kiểm tra định dạng.');
    }
  };
  reader.readAsText(file);
  fileInput.value = '';
}

function renderMath() {
  const el = document.getElementById('preview-frame');
  if (el && window.renderMathInElement) {
    window.renderMathInElement(el, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false}
      ]
    });
  }
}

// ============================
// CORE UI
// ============================
function goStep(n) {
  currentStep = n;
  document.querySelectorAll('section[id^="panel-"]').forEach(p => p.classList.add('hidden'));
  document.getElementById(`panel-${n}`).classList.remove('hidden');
  
  document.querySelectorAll('button[id^="step-"]').forEach((b, i) => {
    b.className = (i + 1) === n ? 'step-active flex-1 py-3 rounded-xl font-black text-sm text-center transition-all' : 
                  (i + 1) < n ? 'step-done flex-1 py-3 rounded-xl font-black text-sm text-center transition-all' : 
                  'step-idle flex-1 py-3 rounded-xl font-black text-sm text-center transition-all';
  });
  
  if (n === 2) refreshPreview();
}

function setPreviewMode(m) {
  previewMode = m;
  const container = document.getElementById('preview-container');
  const frame = document.getElementById('preview-frame');
  const btnTv = document.getElementById('btn-pv-tv');
  const btnMobile = document.getElementById('btn-pv-mobile');
  
  if (m === 'tv') {
    container.style.width = '100%';
    frame.style.width = '100%';
    btnTv.className = 'px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-bold';
    btnMobile.className = 'px-3 py-1 bg-slate-700 text-slate-300 rounded-lg text-xs font-bold';
  } else {
    container.style.width = '375px';
    container.style.margin = '0 auto';
    btnTv.className = 'px-3 py-1 bg-slate-700 text-slate-300 rounded-lg text-xs font-bold';
    btnMobile.className = 'px-3 py-1 bg-blue-600 text-white rounded-lg text-xs font-bold';
  }
  refreshPreview();
}

function refreshPreview() {
  const data = collectData();
  const build = MathBuilderEngine.buildLesson(data);
  const frame = document.getElementById('preview-frame');
  
  if (!frame) return;

  // Set window.Lesson for interactive renderers (needed for global events like onclick="Lesson.xxx")
  window.Lesson = LessonInteractive;
  
  // Create a minimal structure for preview
  frame.innerHTML = `
    <div class="max-w-4xl mx-auto py-10 px-4">
      <div class="mb-12 text-center">
        <h1 class="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tighter">${data.lessonInfo.title || 'Tiêu đề bài học'}</h1>
        <p class="text-slate-400 font-bold uppercase tracking-widest text-xs">TIẾT ${data.lessonInfo.period} - TUẦN ${data.lessonInfo.week}</p>
      </div>
      
      <div id="pv-content">
        ${build.practiceHtml}
      </div>
    </div>
  `;

  // Execute practiceJs to trigger interactive rendering
  if (build.practiceJs) {
    try {
      const script = document.createElement('script');
      script.textContent = build.practiceJs;
      frame.appendChild(script);
    } catch (e) {
      console.error('Preview Interactive Error:', e);
    }
  }
  
  // Re-run math rendering if KaTeX is available
  if (typeof renderMath === 'function') {
    renderMath();
  }
}

function showTypeModal() { document.getElementById('type-modal').classList.remove('hidden'); }
function hideTypeModal() { document.getElementById('type-modal').classList.add('hidden'); }

function addExercise(type) {
  const ex = {
    type,
    title: '',
    statement: 'Nhập nội dung bài tập tại đây...',
    design: window.MathBuilderEngine.defaultDesign()
  };

  // Khởi tạo dữ liệu đặc thù cho từng loại bài tập nâng cao
  if (type === 'matching') {
    ex.leftCol = ['Vế A1', 'Vế A2'];
    ex.rightCol = ['Vế B1', 'Vế B2'];
    ex.connections = [0, 1];
  } else if (type === 'ordering') {
    ex.items = ['Mục 1', 'Mục 2', 'Mục 3'];
    ex.correctOrder = [0, 1, 2];
  } else if (type === 'categorizing') {
    ex.categories = ['Nhóm 1', 'Nhóm 2'];
    ex.categorizingItems = [
      { text: 'Mục A', categoryIndex: 0 },
      { text: 'Mục B', categoryIndex: 1 }
    ];
  } else if (type === 'fill_blanks') {
    ex.textWithSlots = 'Đây là [slot] và đây là [slot].';
    ex.bank = ['đáp án 1', 'đáp án 2'];
  } else if (type === 'image_labeling') {
    ex.image = '';
    ex.labels = [
      { text: 'Nhãn 1', x: 20, y: 30 },
      { text: 'Nhãn 2', x: 60, y: 50 }
    ];
  } else {
    ex.answer = '';
    ex.unit = '';
    ex.image = '';
  }

  exercises.push(ex);
  hideTypeModal();
  renderExerciseList();
  refreshPreview();
  saveDraft();
}

function removeExercise(idx) {
  if (confirm('Xóa bài tập này?')) {
    exercises.splice(idx, 1);
    renderExerciseList();
    refreshPreview();
    saveDraft();
  }
}

function renderExerciseList() {
  const list = document.getElementById('exercise-list');
  if (exercises.length === 0) {
    list.innerHTML = `<div class="text-center py-16 bg-slate-800/30 rounded-2xl border-2 border-dashed border-slate-700">
      <p class="text-slate-500 font-bold text-lg">Chưa có bài tập nào</p>
      <p class="text-slate-600 text-sm mt-1">Nhấn "➕ Thêm bài tập" để bắt đầu</p>
    </div>`;
    return;
  }
  
  list.innerHTML = exercises.map((ex, i) => renderExerciseCard(ex, i)).join('');
}

function renderExerciseCard(ex, idx) {
  const d = ex.design || {};
  
  // Xác định form nhập liệu dựa trên loại bài tập
  let formHtml = '';
  if (ex.type === 'matching') {
    formHtml = renderMatchingForm(ex, idx);
  } else if (ex.type === 'ordering') {
    formHtml = renderOrderingForm(ex, idx);
  } else if (ex.type === 'categorizing') {
    formHtml = renderCategorizingForm(ex, idx);
  } else if (ex.type === 'multiple_choice') {
    formHtml = renderMultipleChoiceForm(ex, idx);
  } else if (ex.type === 'true_false') {
    formHtml = renderTrueFalseForm(ex, idx);
  } else if (ex.type === 'fill_blanks') {
    formHtml = renderFillBlanksForm(ex, idx);
  } else if (ex.type === 'image_labeling') {
    formHtml = renderImageLabelingForm(ex, idx);
  } else {
    formHtml = renderStandardForm(ex, idx);
  }

  return `
  <div class="bg-slate-800/80 rounded-[2rem] p-6 border border-slate-700 shadow-xl space-y-4 fade-in">
    <div class="flex items-center justify-between border-b border-slate-700 pb-4">
      <div class="flex items-center gap-3">
        <span class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white text-xs">${idx+1}</span>
        <span class="text-xs font-black uppercase text-slate-400 tracking-widest">${ex.type}</span>
      </div>
      <div class="flex gap-2">
        <button onclick="removeExercise(${idx})" class="btn-danger">Xóa</button>
      </div>
    </div>
    
    <div class="space-y-4">
       <input class="input-field text-sm" value="${ex.title || ''}" oninput="exercises[${idx}].title=this.value; refreshPreview()" placeholder="Tiêu đề (VD: Bài 1)">
       <textarea class="input-field text-sm min-h-[80px]" oninput="exercises[${idx}].statement=this.value; refreshPreview()" placeholder="Đề bài chung...">${ex.statement}</textarea>
       
       <div class="p-5 bg-slate-900/50 rounded-2xl border border-slate-700 space-y-4">
         ${formHtml}
       </div>
    </div>
    
    <div class="pt-4 flex flex-wrap gap-2 items-center border-t border-slate-700">
      <span class="text-[10px] font-black text-slate-600 uppercase">Thiết kế:</span>
      <select class="input-sm w-24" onchange="exercises[${idx}].design.fontSize=this.value; refreshPreview()">
        <option value="" disabled>Cỡ chữ</option>
        ${[['S','S'],['M','M'],['L','L'],['XL','XL'],['2XL','2XL']].map(([v,l])=>`<option value="${v}" ${d.fontSize===v?'selected':''}>Chữ ${l}</option>`).join('')}
      </select>
      <select class="input-sm w-24" onchange="exercises[${idx}].design.cardRadius=this.value; refreshPreview()">
        <option value="" disabled selected>Bo góc</option>
        ${[['small','Nhẹ'],['medium','TB'],['large','Lớn']].map(([v,l])=>`<option value="${v}" ${d.cardRadius===v?'selected':''}>${l}</option>`).join('')}
      </select>
      <select class="input-sm w-32" onchange="exercises[${idx}].design.accentColor=this.value; refreshPreview()">
        <option value="" disabled selected>Màu chủ đạo</option>
        ${['blue','emerald','amber','indigo','rose','teal','sky','orange','violet','pink','lime'].map(c=>`<option value="${c}" ${d.accentColor===c?'selected':''}>${c}</option>`).join('')}
      </select>
    </div>
  </div>`;
}

function renderStandardForm(ex, idx) {
  return `
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="space-y-3">
      <label class="text-[10px] font-black text-slate-500 uppercase">Đáp án & Đơn vị</label>
      <div class="flex gap-2">
        <input class="input-field text-sm" value="${ex.answer || ''}" oninput="exercises[${idx}].answer=this.value; refreshPreview()" placeholder="Đáp số">
        <input class="input-field text-sm w-24" value="${ex.unit || ''}" oninput="exercises[${idx}].unit=this.value; refreshPreview()" placeholder="Đơn vị">
      </div>
    </div>
    <div class="space-y-3">
      <label class="text-[10px] font-black text-slate-500 uppercase">Hình ảnh minh họa</label>
      <div class="flex items-center gap-3 bg-slate-800 p-2 rounded-xl border border-slate-600">
        <button onclick="this.nextElementSibling.click()" class="px-3 py-1.5 bg-slate-700 rounded-lg text-[10px] font-bold">CHỌN ẢNH</button>
        <input type="file" class="hidden" onchange="handleImagePick(${idx}, this)">
        <span class="text-[10px] text-slate-400 truncate flex-1">${ex._fileName || (ex.image ? ex.image.split('/').pop() : 'Mặc định')}</span>
      </div>
    </div>
  </div>`;
}

function renderMultipleChoiceForm(ex, idx) {
  const labels = ['A', 'B', 'C', 'D'];
  const optionsHtml = (ex.options || []).map((opt, i) => `
    <div class="flex gap-2 items-center">
      <input type="radio" name="correct-${idx}" ${ex.correctIndex === i ? 'checked' : ''} onchange="exercises[${idx}].correctIndex=${i}; refreshPreview()">
      <span class="text-xs font-bold text-slate-500">${labels[i]}</span>
      <input class="input-sm flex-1" value="${opt}" oninput="exercises[${idx}].options[${i}]=this.value; refreshPreview()">
      <button onclick="exercises[${idx}].options.splice(${i},1); renderExerciseList()" class="text-rose-500 text-xs">✕</button>
    </div>
  `).join('');

  return `
  <div class="space-y-4">
    <div class="space-y-2">
      <p class="text-[10px] font-black text-amber-400 uppercase">Danh sách đáp án (Chọn nút tròn để đặt đáp án đúng)</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        ${optionsHtml}
      </div>
      <button onclick="exercises[${idx}].options.push('Đáp án mới'); renderExerciseList()" class="text-[10px] text-amber-400 font-bold">+ Thêm đáp án</button>
    </div>
  </div>`;
}

function renderTrueFalseForm(ex, idx) {
  const isTrue = ex.answer === true || ex.answer === 'true';
  return `
  <div class="flex items-center gap-6 p-2">
    <p class="text-[10px] font-black text-emerald-400 uppercase">Đáp án đúng là:</p>
    <div class="flex bg-slate-800 rounded-xl p-1">
      <button onclick="exercises[${idx}].answer=true; renderExerciseList(); refreshPreview()" class="px-6 py-2 rounded-lg text-xs font-bold transition-all ${isTrue ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}">ĐÚNG</button>
      <button onclick="exercises[${idx}].answer=false; renderExerciseList(); refreshPreview()" class="px-6 py-2 rounded-lg text-xs font-bold transition-all ${!isTrue ? 'bg-rose-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}">SAI</button>
    </div>
  </div>`;
}

function renderMatchingForm(ex, idx) {
  const leftItems = (ex.leftCol || []).map((v, i) => `
    <div class="flex gap-2 items-center">
      <span class="text-xs text-slate-500 w-4">${i+1}</span>
      <input class="input-sm flex-1" value="${v}" oninput="exercises[${idx}].leftCol[${i}]=this.value; refreshPreview()" placeholder="Vế trái">
    </div>`).join('');
    
  const rightItems = (ex.rightCol || []).map((v, i) => `
    <div class="flex gap-2 items-center">
      <span class="text-xs text-slate-500 w-4">${i+1}</span>
      <input class="input-sm flex-1" value="${v}" oninput="exercises[${idx}].rightCol[${i}]=this.value; refreshPreview()" placeholder="Vế phải">
    </div>`).join('');

  return `
  <div class="space-y-4">
    <div class="grid grid-cols-2 gap-6">
      <div class="space-y-2">
        <p class="text-[10px] font-black text-blue-400 uppercase">Cột vế trái</p>
        ${leftItems}
        <button onclick="exercises[${idx}].leftCol.push(''); renderExerciseList()" class="text-[10px] text-blue-400 font-bold">+ Thêm vế trái</button>
      </div>
      <div class="space-y-2">
        <p class="text-[10px] font-black text-emerald-400 uppercase">Cột vế phải</p>
        ${rightItems}
        <button onclick="exercises[${idx}].rightCol.push(''); renderExerciseList()" class="text-[10px] text-emerald-400 font-bold">+ Thêm vế phải</button>
      </div>
    </div>
    <div class="pt-2 border-t border-slate-800">
       <p class="text-[10px] font-black text-slate-500 uppercase mb-2">Liên kết (Cột 1 nối sang chỉ số Cột 2, cách nhau bằng dấu phẩy)</p>
       <input class="input-sm w-full" value="${(ex.connections || []).join(', ')}" oninput="exercises[${idx}].connections=this.value.split(',').map(n=>parseInt(n.trim())); refreshPreview()" placeholder="VD: 0, 1, 2 (Vế 1 nối 1, 2 nối 2...)">
    </div>
  </div>`;
}

function renderOrderingForm(ex, idx) {
  const items = (ex.items || []).map((v, i) => `
    <div class="flex gap-2 items-center">
      <input class="input-sm flex-1" value="${v}" oninput="exercises[${idx}].items[${i}]=this.value; refreshPreview()">
      <button onclick="exercises[${idx}].items.splice(${i},1); renderExerciseList()" class="text-rose-500 text-xs">✕</button>
    </div>`).join('');

  return `
  <div class="space-y-3">
    <p class="text-[10px] font-black text-orange-400 uppercase">Các mục cần sắp xếp (Nhập theo thứ tự đúng)</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      ${items}
    </div>
    <button onclick="exercises[${idx}].items.push('Mục mới'); renderExerciseList()" class="text-[10px] text-orange-400 font-bold">+ Thêm mục</button>
    <p class="text-[10px] text-slate-500 italic mt-2">* Hệ thống sẽ tự động xáo trộn khi hiển thị. Thứ tự bạn nhập ở đây chính là đáp án.</p>
  </div>`;
}

function renderCategorizingForm(ex, idx) {
  const cats = (ex.categories || []).map((c, i) => `
    <div class="bg-slate-800 p-3 rounded-xl space-y-2">
      <div class="flex justify-between items-center">
        <input class="bg-transparent border-none text-xs font-black text-pink-400 focus:ring-0 p-0" value="${c}" oninput="exercises[${idx}].categories[${i}]=this.value; refreshPreview()">
        <button onclick="exercises[${idx}].categories.splice(${i},1); renderExerciseList()" class="text-rose-500 text-xs">✕</button>
      </div>
      <div class="space-y-1">
        ${(ex.categorizingItems || []).filter(item => item.categoryIndex === i).map((item, itemIdx) => `
          <div class="flex justify-between items-center bg-slate-900 px-2 py-1 rounded-lg">
            <input class="bg-transparent border-none text-[10px] text-slate-100 focus:ring-0 p-0 flex-1" value="${item.text}" oninput="const j=exercises[${idx}].categorizingItems.indexOf(item); exercises[${idx}].categorizingItems[j].text=this.value; refreshPreview()">
            <button onclick="const j=exercises[${idx}].categorizingItems.indexOf(item); exercises[${idx}].categorizingItems.splice(j,1); renderExerciseList()" class="text-slate-600 text-[8px] ml-1">✕</button>
          </div>
        `).join('')}
        <div class="flex gap-1 mt-2">
           <input type="text" id="add-cat-item-${idx}-${i}" placeholder="Mục mới..." 
            class="bg-slate-900 border border-slate-700 text-[10px] px-2 py-1 rounded-lg flex-1 focus:border-pink-500 outline-none"
            onkeydown="if(event.key==='Enter') addCategorizingItem(${idx}, ${i})">
           <button onclick="addCategorizingItem(${idx}, ${i})" class="bg-pink-600/20 text-pink-400 text-[10px] px-2 py-1 rounded-lg hover:bg-pink-600/40 transition-all">+</button>
        </div>
      </div>
    </div>
  `).join('');

  return `
  <div class="space-y-3">
    <p class="text-[10px] font-black text-pink-400 uppercase">Nhóm phân loại</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      ${cats}
      <button onclick="exercises[${idx}].categories.push('Nhóm mới'); renderExerciseList()" class="bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-xl p-3 text-[10px] text-slate-500 hover:border-pink-500 transition-all">+ Thêm nhóm</button>
    </div>
  </div>`;
}

function renderFillBlanksForm(ex, idx) {
  return `
  <div class="space-y-4">
    <div class="space-y-2">
      <p class="text-[10px] font-black text-lime-400 uppercase">Đoạn văn có ô trống (Dùng [đáp án] để tạo ô trống)</p>
      <textarea class="input-field text-sm min-h-[100px]" oninput="exercises[${idx}].textWithSlots=this.value; refreshPreview()" placeholder="Ví dụ: Một năm có [12] tháng.">${ex.textWithSlots || ''}</textarea>
    </div>
    <div class="space-y-2">
      <p class="text-[10px] font-black text-slate-500 uppercase">Ngân hàng từ bổ sung (Nếu muốn thêm các từ gây nhiễu)</p>
      <input class="input-sm w-full" value="${(ex.bank || []).join(', ')}" oninput="exercises[${idx}].bank=this.value.split(',').map(s=>s.trim()).filter(s=>s)" placeholder="Từ nhiễu 1, Từ nhiễu 2...">
    </div>
  </div>`;
}

function renderImageLabelingForm(ex, idx) {
  const labelsHtml = (ex.labels || []).map((label, li) => `
    <div class="flex gap-2 items-center bg-slate-800 p-2 rounded-xl">
      <input class="input-sm flex-1" value="${label.text}" oninput="exercises[${idx}].labels[${li}].text=this.value; refreshPreview()" placeholder="Tên nhãn">
      <div class="flex gap-1 items-center">
        <span class="text-[8px] text-slate-500">X:</span>
        <input type="number" class="input-sm w-12" value="${label.x}" oninput="exercises[${idx}].labels[${li}].x=parseInt(this.value); refreshPreview()">
      </div>
      <div class="flex gap-1 items-center">
        <span class="text-[8px] text-slate-500">Y:</span>
        <input type="number" class="input-sm w-12" value="${label.y}" oninput="exercises[${idx}].labels[${li}].y=parseInt(this.value); refreshPreview()">
      </div>
      <button onclick="exercises[${idx}].labels.splice(${li},1); renderExerciseList()" class="text-rose-500 text-xs">✕</button>
    </div>
  `).join('');

  return `
  <div class="space-y-4">
    <div class="space-y-3">
      <label class="text-[10px] font-black text-slate-500 uppercase">Hình ảnh nền</label>
      <div class="flex items-center gap-3 bg-slate-800 p-2 rounded-xl border border-slate-600">
        <button onclick="this.nextElementSibling.click()" class="px-3 py-1.5 bg-slate-700 rounded-lg text-[10px] font-bold">CHỌN ẢNH</button>
        <input type="file" class="hidden" onchange="handleImagePick(${idx}, this)">
        <span class="text-[10px] text-slate-400 truncate flex-1">${ex._fileName || (ex.image ? ex.image.split('/').pop() : 'Chưa có ảnh')}</span>
      </div>
    </div>
    <div class="space-y-2">
      <p class="text-[10px] font-black text-sky-400 uppercase">Danh sách nhãn (Tọa độ 0-100%)</p>
      <div class="space-y-2">
        ${labelsHtml}
      </div>
      <button onclick="exercises[${idx}].labels.push({text:'Nhãn mới', x:50, y:50}); renderExerciseList()" class="text-[10px] text-sky-400 font-bold">+ Thêm nhãn</button>
    </div>
  </div>`;
}
function addQuizItem() {
  quizItems.push({ question: '', options: ['','','',''], answer: 0, level: 1 });
  renderQuizList();
}

function removeQuiz(idx) { quizItems.splice(idx, 1); renderQuizList(); }

function renderQuizList() {
  const container = document.getElementById('quiz-list');
  if (quizItems.length === 0) {
    container.innerHTML = '<div class="text-center py-10 bg-slate-800/30 rounded-xl border-2 border-dashed border-slate-700"><p class="text-slate-500 font-bold">Chưa có câu hỏi</p></div>';
    return;
  }
  container.innerHTML = quizItems.map((q, qi) => `<div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700 space-y-2 fade-in">
  <div class="flex items-center justify-between">
    <span class="text-xs font-black text-orange-400">Câu ${qi+1}</span>
    <div class="flex items-center gap-2">
      <select class="input-sm w-20" onchange="quizItems[${qi}].level=parseInt(this.value)">
        ${[1,2,3].map(l=>`<option value="${l}" ${q.level===l?'selected':''}>Mức ${l}</option>`).join('')}
      </select>
      <button onclick="removeQuiz(${qi})" class="btn-danger">✕</button>
    </div>
  </div>
  <input class="input-field text-sm" value="${q.question}" oninput="quizItems[${qi}].question=this.value" placeholder="Câu hỏi">
  <div class="grid grid-cols-2 gap-2">
    ${q.options.map((opt,oi)=>`<div class="flex items-center gap-1">
      <input type="radio" name="quiz-ans-${qi}" ${oi===q.answer?'checked':''} onchange="quizItems[${qi}].answer=${oi}" class="accent-emerald-500">
      <input class="input-sm flex-1" value="${opt}" oninput="quizItems[${qi}].options[${oi}]=this.value" placeholder="Đáp án ${oi+1}">
    </div>`).join('')}
  </div>
</div>`).join('');
}

// ============================
// EXPORT
// ============================
function collectData() {
  return {
    lessonInfo: {
      period: document.getElementById('in-period').value || '999',
      week: document.getElementById('in-week').value || '',
      topic: document.getElementById('in-topic').value || '',
      title: document.getElementById('in-title').value || '',
      desc: document.getElementById('in-desc').value || '',
      exploreContent: document.getElementById('in-explore').value || '',
      exploreImage: document.getElementById('in-explore-img').value || '',
      design: {
        columns: parseInt(document.getElementById('ex-ds-cols').value || '1'),
        fontSize: document.getElementById('ex-ds-size').value || 'L',
        fontWeight: document.getElementById('ex-ds-weight').value || 'bold',
        accentColor: document.getElementById('ex-ds-color').value || 'blue'
      }
    },
    exercises,
    quizPool: quizItems
  };
}

function generateOutput() {
  const data = collectData();
  const result = MathBuilderEngine.buildLesson(data);
  document.getElementById('output-code').textContent = result.fullFile;
  return result;
}

function generateAndCopy() {
  const result = generateOutput();
  navigator.clipboard.writeText(result.fullFile).then(() => showToast('✅ Đã copy mã JS!'));
}

function generateAndDownload() {
  const result = generateOutput();
  const blob = new Blob([result.fullFile], { type: 'text/javascript' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'index.js';
  a.click();
  showToast('💾 Đã tải file!');
}

function copyManifest() {
  const result = generateOutput();
  const text = result.manifestLine + '\n\n// Thêm vào index.js:\n' + result.importLine;
  navigator.clipboard.writeText(text).then(() => showToast('📝 Đã copy manifest + import!'));
}

function copyQuestionBank() {
  const data = collectData();
  const period = data.lessonInfo.period;
  const lines = (data.quizPool || []).map((q, i) => {
    const correct = q.options[q.answer] || '';
    const others = q.options.filter((_, oi) => oi !== q.answer).join(', ');
    return `${i+1} | ${period} | ${q.level} | ${q.question} | ${correct} | ${others}`;
  }).join('\n');
  navigator.clipboard.writeText(lines).then(() => showToast('🗃️ Đã copy question bank!'));
}

function copyAiSyncPayload() {
  const data = collectData();
  const result = MathBuilderEngine.buildLesson(data);
  
  const payload = {
    period: data.lessonInfo.period,
    week: data.lessonInfo.week,
    title: data.lessonInfo.title,
    topic: data.lessonInfo.topic,
    code: result.fullFile,
    manifestEntry: result.manifestLine
  };
  
  const message = `@antigravity: Vui lòng tự động cập nhật bài học này vào hệ thống giúp mình: \n\n=== LESSON_SYNC_START ===\n${JSON.stringify(payload, null, 2)}\n=== LESSON_SYNC_END ===`;
  
  navigator.clipboard.writeText(message).then(() => {
    showToast('🚀 Đã copy mã ĐỒNG BỘ! Hãy dán vào cửa sổ chat bên cạnh.');
  });
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  t.classList.add('flex'); // Add flex for centering if needed
  setTimeout(() => {
    t.classList.add('hidden');
    t.classList.remove('flex');
  }, 2000);
}

window.addCategorizingItem = function(exIdx, catIdx) {
  const input = document.getElementById(`add-cat-item-${exIdx}-${catIdx}`);
  const text = input.value.trim();
  if (!text) return;
  
  exercises[exIdx].categorizingItems.push({ text, categoryIndex: catIdx });
  input.value = '';
  renderExerciseList();
  refreshPreview();
  saveDraft();
};

// ============================
// LOCALSTORAGE DRAFT
// ============================
function saveDraft() {
  const data = { ...collectData(), exercises, quizItems };
  localStorage.setItem('math-builder-draft', JSON.stringify(data));
  showToast('💾 Đã lưu nháp!');
}

function loadDraft() {
  const raw = localStorage.getItem('math-builder-draft');
  if (!raw) { showToast('❌ Không có bản nháp!'); return; }
  try {
    const data = JSON.parse(raw);
    document.getElementById('in-period').value = data.lessonInfo?.period || '';
    document.getElementById('in-week').value = data.lessonInfo?.week || '';
    document.getElementById('in-topic').value = data.lessonInfo?.topic || '';
    document.getElementById('in-title').value = data.lessonInfo?.title || '';
    document.getElementById('in-desc').value = data.lessonInfo?.desc || '';
    document.getElementById('in-explore').value = data.lessonInfo?.exploreContent || '';
    document.getElementById('in-explore-img').value = data.lessonInfo?.exploreImage || '';
    
    if (data.lessonInfo?.design) {
      document.getElementById('ex-ds-cols').value = data.lessonInfo.design.columns || '1';
      document.getElementById('ex-ds-size').value = data.lessonInfo.design.fontSize || 'L';
      document.getElementById('ex-ds-weight').value = data.lessonInfo.design.fontWeight || 'bold';
      document.getElementById('ex-ds-color').value = data.lessonInfo.design.accentColor || 'blue';
    }
    
    if (data.lessonInfo?.exploreImage) {
      document.getElementById('explore-img-preview').src = data.lessonInfo.exploreImage;
      document.getElementById('explore-img-name').innerText = data.lessonInfo.exploreImage.split('/').pop();
      document.getElementById('explore-img-preview-container').classList.remove('hidden');
    } else {
      clearExploreImage();
    }
    
    exercises.length = 0;
    if (data.exercises) exercises.push(...data.exercises);
    
    quizItems.length = 0;
    if (data.quizItems) quizItems.push(...data.quizItems);
    
    renderExerciseList();
    renderQuizList();
    showActiveFooter(data.lessonInfo);
    showToast('📂 Đã nạp bản nháp!');
  } catch (e) { showToast('❌ Lỗi đọc bản nháp!'); }
}

function showActiveFooter(info) {
  const footer = document.getElementById('active-lesson-footer');
  const title = document.getElementById('footer-lesson-title');
  if (info && info.period) {
    title.innerText = `TIẾT ${info.period} - ${info.title || 'Chưa có tiêu đề'}`;
    footer.classList.remove('hidden');
    document.body.classList.add('pb-24'); 
  }
}

function closeActiveFooter() {
  document.getElementById('active-lesson-footer').classList.add('hidden');
  document.body.classList.remove('pb-24');
}

// ============================
// BIND TO WINDOW
// ============================
window.handleImagePick = handleImagePick;
window.handleMediaPick = handleMediaPick;
window.handleExploreImage = handleExploreImage;
window.clearExploreImage = clearExploreImage;
window.importLesson = importLesson;
window.handleImportFile = handleImportFile;
window.renderMath = renderMath;
window.goStep = goStep;
window.setPreviewMode = setPreviewMode;
window.refreshPreview = refreshPreview;
window.showTypeModal = showTypeModal;
window.hideTypeModal = hideTypeModal;
window.addExercise = addExercise;
window.removeExercise = removeExercise;
window.renderExerciseList = renderExerciseList;
window.renderQuizList = renderQuizList;
window.addQuizItem = addQuizItem;
window.removeQuiz = removeQuiz;
window.collectData = collectData;
window.generateOutput = generateOutput;
window.generateAndCopy = generateAndCopy;
window.generateAndDownload = generateAndDownload;
window.copyManifest = copyManifest;
window.copyQuestionBank = copyQuestionBank;
window.copyAiSyncPayload = copyAiSyncPayload;
window.showToast = showToast;
window.saveDraft = saveDraft;
window.loadDraft = loadDraft;
window.showActiveFooter = showActiveFooter;
window.closeActiveFooter = closeActiveFooter;

// ============================
// INIT
// ============================
renderExerciseList();
renderQuizList();

