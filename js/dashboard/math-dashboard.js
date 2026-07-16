/**
 * Math Dashboard Logic
 * Handles data fetching, processing, and rendering for teacher-toan.html
 */

import { parseScore, formatTimeTaken, getExpectedExKeys } from './utils.js';
import { mathManifest } from '../data/math/manifest.js';
import { renderScoreChart as renderScoreChartModule } from './dashboard-chart.js';
import { exportToExcel as excelExport, exportPracticeToExcel } from './dashboard-export.js';
import { renderTable, sortData } from './dashboard-table.js';
import { processRawData, calculateSummaryStats } from './dashboard-data.js';

let allQuizData = [];
let rawStudents = [];
let rawCungCo = [];
let rawLuyenTapEssays = [];
let rawLuyenTapProgress = [];
let unsubscribeCungCo = null;
let unsubscribeLuyenTapEssays = null;
let unsubscribeLuyenTapProgress = null;
let unsubscribeStudents = null;
let unsubscribeLop5Chon = null;
let lop5ChonIds = new Set();

/**
 * Initializes Math-specific filters from manifest.
 */
export function populateFilters() {
    const weekSelect = document.getElementById('week-filter');
    if (!weekSelect) return;
    const weeks = new Set();
    mathManifest.forEach(m => {
        if (m.week && m.week !== "N/A" && m.week !== "1") weeks.add(m.week);
    });
    Array.from(weeks).sort((a,b) => parseInt(a)-parseInt(b)).forEach(w => {
        let opt = document.createElement('option');
        opt.value = w;
        opt.innerText = "Tuần " + w;
        weekSelect.appendChild(opt);
    });

    // Deep link from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const urlW = urlParams.get('week');
    const urlP = urlParams.get('period');
    if (urlW) {
        weekSelect.value = urlW;
        updatePeriodDropdown(urlW);
        if (urlP) {
            const pSelect = document.getElementById('period-filter');
            if (pSelect) {
                setTimeout(() => {
                    if (Array.from(pSelect.options).some(o => o.value === urlP)) {
                        pSelect.value = urlP;
                        handlePeriodFilterChange();

                        // Auto-export practice report if flagged
                        if (urlParams.get('export') === 'practice') {
                            exportPracticeReport(urlP);
                        }
                    }
                }, 100);
            }
        }
    } else if (weeks.size > 0) {
        // Auto-select latest week
        const sortedWeeks = Array.from(weeks).sort((a,b) => parseInt(b)-parseInt(a));
        const latestWeek = sortedWeeks[0];
        weekSelect.value = latestWeek;
        updatePeriodDropdown(latestWeek);
        
        // Auto-select latest period in that week
        const pSelect = document.getElementById('period-filter');
        if (pSelect && pSelect.options.length > 1) {
            const latestPeriod = pSelect.options[pSelect.options.length - 1].value;
            pSelect.value = latestPeriod;
            handlePeriodFilterChange();
        }
    }
}

/**
 * Updates period dropdown based on selected week.
 * @param {string} selectedWeek 
 */
export function updatePeriodDropdown(selectedWeek) {
    const periodSelect = document.getElementById('period-filter');
    if (!periodSelect) return;
    periodSelect.innerHTML = '<option value="">-- Tất cả Tiết --</option>';

    const periods = mathManifest.filter(m => !selectedWeek || String(m.week) === String(selectedWeek));
    periods.forEach(m => {
        let opt = document.createElement('option');
        opt.value = m.period;
        opt.innerText = "Tiết " + m.period + (m.title ? ": " + m.title.split(':').pop().split('(')[0].trim() : "");
        periodSelect.appendChild(opt);
    });
}

/**
 * Handles period filter change.
 */
export async function handlePeriodFilterChange() {
    const periodId = document.getElementById('period-filter').value;
    window.currentLessonExKeys = await getExpectedExKeys('math', mathManifest, periodId);
    
    const btnPractice = document.getElementById('btn-export-practice');
    if (btnPractice) {
        if (periodId === '141' || periodId === '150') {
            btnPractice.classList.remove('hidden');
        } else {
            btnPractice.classList.add('hidden');
        }
    }

    renderStats();
}

/**
 * Initializes Real-time Firebase listeners for Math.
 */
export function initRealtime() {
    const db = window.db || firebase.firestore();
    const ind = document.getElementById('loading-indicator');
    ind?.classList.remove('hidden');

    const clearListeners = () => {
        if (unsubscribeCungCo) unsubscribeCungCo();
        if (unsubscribeLuyenTapEssays) unsubscribeLuyenTapEssays();
        if (unsubscribeLuyenTapProgress) unsubscribeLuyenTapProgress();
        if (unsubscribeStudents) unsubscribeStudents();
        if (unsubscribeLop5Chon) unsubscribeLop5Chon();
    };
    clearListeners();

    // 1. Củng cố
    unsubscribeCungCo = db.collection("diem_tieng_viet_lop5")
        .where("subject", "==", "Toán học")
        .onSnapshot(snapshot => {
            rawCungCo = [];
            snapshot.forEach(doc => rawCungCo.push({ ...doc.data(), sourceTab: 'Củng cố' }));
            renderStats();
        }, error => console.error("Lỗi Realtime Củng cố:", error));

    // 2. Luyện tập Tự luận
    unsubscribeLuyenTapEssays = db.collection("essays_v2")
        .where("subject", "==", "Toán học")
        .where("type", "==", "math_lesson")
        .onSnapshot(snapshot => {
            rawLuyenTapEssays = [];
            snapshot.forEach(doc => rawLuyenTapEssays.push({ ...doc.data(), sourceTab: 'Luyện tập' }));
            renderStats();
        });

    // 3. Tiến độ từng bài
    unsubscribeLuyenTapProgress = db.collection("diem_tieng_viet_lop5")
        .where("subject", "==", "Toán học")
        .where("type", "==", "Luyện tập - Củng cố")
        .onSnapshot(snapshot => {
            rawLuyenTapProgress = [];
            snapshot.forEach(doc => rawLuyenTapProgress.push({ ...doc.data(), sourceTab: 'Luyện tập' }));
            renderStats();
        });

    // 4. Học sinh
    unsubscribeStudents = db.collection("users")
        .where("role", "in", ["hoc-sinh", "hocsinh", "student"])
        .onSnapshot(snapshot => {
            rawStudents = [];
            snapshot.forEach(doc => {
                const d = doc.data();
                rawStudents.push({ 
                    id: doc.id, ...d,
                    name: d.name || d.studentName || d.fullName || "N/A",
                    studentClass: d.studentClass || d.className || d.lop || d.grade,
                    school: d.school || d.studentSchool
                });
            });
            renderStats();
        });

    // 5. Lớp 5 Chọn
    unsubscribeLop5Chon = db.collection("lop5chon").doc("active")
        .onSnapshot(doc => {
            lop5ChonIds = new Set();
            if (doc.exists) {
                const data = doc.data();
                if (data.studentIds && Array.isArray(data.studentIds)) {
                    data.studentIds.forEach(id => lop5ChonIds.add(id));
                }
            }
            renderStats();
        });
}

/**
 * Processes raw data and renders dashboard table and stats.
 */
export function renderStats() {
    const ind = document.getElementById('loading-indicator');
    if (ind) ind.classList.remove('hidden');

    try {
        const filters = {
            week: document.getElementById('week-filter').value,
            period: document.getElementById('period-filter').value,
            class: document.getElementById('class-filter').value,
            school: document.getElementById('school-filter').value
        };

        const show120 = !filters.week || String(filters.week) === '24';
        window.lastShow120 = show120;

        updateFilterOptions();

        const context = {
            rawCungCo, rawLuyenTapEssays, rawLuyenTapProgress, 
            rawStudents, lop5ChonIds, 
            currentLessonExKeys: window.currentLessonExKeys
        };
        
        const { uniqueData, sortedExKeys, filteredCount } = processRawData(context, filters);
        
        allQuizData = uniqueData;
        window.currentSortedExKeys = sortedExKeys;

        const customCols = show120 ? [
            { key: 'score120B', label: '120B', class: 'text-blue-600' },
            { key: 'score120C', label: '120C', class: 'text-purple-600' }
        ] : [];

        renderTable(uniqueData, sortedExKeys, { 
            show120, 
            customCols,
            theme: 'orange',
            onSort: (key) => sortTableBy(key) 
        });
        
        const stats = calculateSummaryStats(uniqueData, filteredCount);
        document.getElementById('stat-total').innerText = stats.totalSubmissions;
        document.getElementById('stat-avg').innerText = stats.averageScore;
        document.getElementById('stat-students').innerText = stats.uniqueStudents;

        updateChartFilterOptions(sortedExKeys);
        renderScoreChartModule(uniqueData, document.getElementById('chart-data-filter')?.value || 'avgScore');

    } catch (e) {
        console.error("Dashboard render error:", e);
    } finally {
        if (ind) ind.classList.add('hidden');
    }
}

/**
 * Updates filter dropdown options based on available data.
 */
function updateFilterOptions() {
    const classesSet = new Set();
    const schoolsSet = new Set();
    const addData = (list) => list.forEach(d => {
        const c = d.studentClass || d.className || d.lop || d.grade;
        const s = d.school || d.studentSchool;
        if (c) classesSet.add(c);
        if (s) schoolsSet.add(s);
    });

    addData(rawStudents);
    addData([...rawCungCo, ...rawLuyenTapEssays, ...rawLuyenTapProgress]);

    const classEl = document.getElementById('class-filter');
    const schoolEl = document.getElementById('school-filter');
    const curClass = classEl.value;
    const curSchool = schoolEl.value;
    
    classEl.innerHTML = '<option value="">-- Lớp --</option>';
    if (lop5ChonIds.size > 0) {
        const opt = document.createElement('option');
        opt.value = '__lop5chon__';
        opt.textContent = `⭐ Lớp 5 Chọn (${lop5ChonIds.size})`;
        opt.className = "font-black text-yellow-600";
        classEl.appendChild(opt);
    }
    schoolEl.innerHTML = '<option value="">-- Trường --</option>';
    
    Array.from(classesSet).sort().forEach(c => {
        let opt = document.createElement('option'); opt.value = c; opt.innerText = c;
        classEl.appendChild(opt);
    });
    Array.from(schoolsSet).sort().forEach(s => {
        let opt = document.createElement('option'); opt.value = s; opt.innerText = s;
        schoolEl.appendChild(opt);
    });
    
    if (Array.from(classEl.options).some(o => o.value === curClass)) classEl.value = curClass;
    if (Array.from(schoolEl.options).some(o => o.value === curSchool)) schoolEl.value = curSchool;
}

// Logic extracted to dashboard-data.js

/**
 * Sorts dashboard data by key using the shared Table module.
 */
export function sortTableBy(key) {
    if (!allQuizData.length) return;
    sortData(allQuizData, key);
    
    const show120 = window.lastShow120;
    const customCols = show120 ? [
        { key: 'score120B', label: '120B', class: 'text-blue-600' },
        { key: 'score120C', label: '120C', class: 'text-purple-600' }
    ] : [];

    renderTable(allQuizData, window.currentSortedExKeys, { 
        show120, 
        customCols,
        theme: 'orange',
        onSort: (k) => sortTableBy(k)
    });
}

/**
 * Updates chart data filter dropdown based on available exercises.
 */
function updateChartFilterOptions(exKeys) {
    const select = document.getElementById('chart-data-filter');
    if (!select) return;
    const cur = select.value;
    select.innerHTML = '<option value="avgScore">Điểm trung bình</option><option value="luyenTapScore">Điểm Luyện tập</option><option value="cungCoScore">Điểm Củng cố</option>';
    exKeys.forEach(ek => {
        let opt = document.createElement('option'); opt.value = ek; opt.innerText = "Bài " + ek.replace('scoreEx',''); select.appendChild(opt);
    });
    if (Array.from(select.options).some(o => o.value === cur)) select.value = cur;
}

/**
 * Re-renders the score distribution chart (proxy to shared module).
 */
export function renderScoreChart() {
    renderScoreChartModule(allQuizData, document.getElementById('chart-data-filter')?.value || 'avgScore');
}

/**
 * Downloads math scores as Excel file (proxy to shared module).
 */
export function exportToExcel() {
    excelExport(allQuizData, "Toán học");
}

/**
 * Specifically exports practical report data for Lesson 141 and similar.
 */
export async function exportPracticeReport(periodId) {
    const db = window.db || firebase.firestore();
    const ind = document.getElementById('loading-indicator');
    ind?.classList.remove('hidden');
    
    try {
        const pid = periodId || document.getElementById('period-filter').value;
        if (!pid) {
            alert("Vui lòng chọn Tiết học để tải báo cáo.");
            return;
        }

        const snapshot = await db.collection("essays_v2")
            .where("lessonId", "==", pid)
            .where("type", "==", "practical_report")
            .get();
            
        const records = [];
        snapshot.forEach(doc => records.push(doc.data()));
        
        exportPracticeToExcel(records, pid);
    } catch (e) {
        console.error("Error exporting practice report:", e);
        alert("Có lỗi xảy ra khi tải báo cáo thực hành.");
    } finally {
        ind?.classList.add('hidden');
    }
}
