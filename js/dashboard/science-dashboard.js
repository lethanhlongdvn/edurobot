/**
 * Science Dashboard Logic
 * Handles data fetching, processing, and rendering for teacher-khoahoc.html
 */

import { parseScore, formatTimeTaken } from './utils.js';
import { scienceManifest } from '../data/science/manifest.js';
import { renderScoreChart as renderScoreChartModule } from './dashboard-chart.js';
import { exportToExcel as excelExport } from './dashboard-export.js';
import { renderTable, sortData } from './dashboard-table.js';

let allQuizData = [];
let rawStudents = [];
let rawCungCo = [];
let rawLuyenTapEssays = [];
let rawLuyenTapProgress = [];
let unsubscribeCungCo = null;
let unsubscribeLuyenTapEssays = null;
let unsubscribeLuyenTapProgress = null;
let unsubscribeStudents = null;

const SUBJECT_NAME = "Khoa học";

/**
 * Initializes Science-specific filters from manifest.
 */
export function populateFilters() {
    const weekSelect = document.getElementById('week-filter');
    if (!weekSelect) return;
    const weeks = new Set();
    scienceManifest.forEach(m => {
        if (m.week && m.week !== "N/A" && m.week !== "0") weeks.add(m.week);
    });
    Array.from(weeks).sort((a,b) => parseInt(a)-parseInt(b)).forEach(w => {
        let opt = document.createElement('option');
        opt.value = w; opt.innerText = "Tuần " + w;
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
 */
export function updatePeriodDropdown(selectedWeek) {
    const periodSelect = document.getElementById('period-filter');
    if (!periodSelect) return;
    periodSelect.innerHTML = '<option value="">-- Tất cả Tiết --</option>';
    const periods = scienceManifest.filter(m => !selectedWeek || String(m.week) === String(selectedWeek));
    periods.forEach(m => {
        let opt = document.createElement('option');
        opt.value = m.period;
        opt.innerText = "Tiết " + m.period + (m.title ? ": " + m.title.split(':').pop().split('(')[0].trim() : "");
        periodSelect.appendChild(opt);
    });
}

/**
 * Loads lesson module to identify expected exercise keys.
 */
async function getLessonExpectedExKeys(periodId) {
    if (!periodId) return [];
    const lessonMeta = scienceManifest.find(m => String(m.period) === String(periodId));
    if (!lessonMeta || !lessonMeta.modulePath) return [];
    try {
        const basePath = '../data/science/';
        const fullPath = basePath + lessonMeta.modulePath.replace('./', '');
        const module = await import(fullPath);
        const lessonObj = Object.values(module).find(v => v && typeof v === 'object' && (v.practice || (v.content && v.content.includes('id="ex-'))));
        if (lessonObj) {
            const html = lessonObj.practice || lessonObj.content || "";
            const regex = /id=["'](?:ex|box)-(?:[0-9A-Z]+-)?([0-9]+)["']/g;
            let match;
            const exNums = new Set();
            while ((match = regex.exec(html)) !== null) exNums.add(parseInt(match[1]));
            return Array.from(exNums).sort((a,b) => a-b).map(n => `scoreEx${n}`);
        }
    } catch (e) {
        console.warn("Không thể tải chi tiết bài học:", e);
    }
    return [];
}

/**
 * Handles period filter change.
 */
export async function handlePeriodFilterChange() {
    const periodId = document.getElementById('period-filter').value;
    window.currentLessonExKeys = await getLessonExpectedExKeys(periodId);
    renderStats();
}

/**
 * Initializes Real-time Firebase listeners for Science.
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
    };
    clearListeners();

    // 1. Củng cố - chỉ lọc Khoa học
    unsubscribeCungCo = db.collection("diem_tieng_viet_lop5")
        .where("subject", "==", SUBJECT_NAME)
        .onSnapshot(snapshot => {
            rawCungCo = [];
            snapshot.forEach(doc => rawCungCo.push({ ...doc.data(), sourceTab: 'Củng cố' }));
            renderStats();
        });

    // 2. Luyện tập Tự luận - chỉ lọc Khoa học
    unsubscribeLuyenTapEssays = db.collection("essays_v2")
        .where("subject", "==", SUBJECT_NAME)
        .onSnapshot(snapshot => {
            rawLuyenTapEssays = [];
            snapshot.forEach(doc => rawLuyenTapEssays.push({ ...doc.data(), sourceTab: 'Luyện tập' }));
            renderStats();
        });

    // 3. Tiến độ từng bài
    unsubscribeLuyenTapProgress = db.collection("diem_tieng_viet_lop5")
        .where("subject", "==", SUBJECT_NAME)
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
}

/**
 * Main render function.
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

        updateFilterOptions();
        const { uniqueData, sortedExKeys, filteredCount } = processStudentData(filters);
        
        allQuizData = uniqueData;
        window.currentSortedExKeys = sortedExKeys;

        renderTable(uniqueData, sortedExKeys, { 
            theme: 'emerald',
            onSort: (key) => sortTableBy(key) 
        });
        
        updateStatCards(uniqueData, filteredCount);
        updateChartFilterOptions(sortedExKeys);
        renderScoreChartModule(uniqueData, document.getElementById('chart-data-filter')?.value || 'avgScore');

    } catch (error) {
        console.error("Render error:", error);
    } finally {
        if (ind) ind.classList.add('hidden');
    }
}

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
    schoolEl.innerHTML = '<option value="">-- Trường --</option>';
    
    Array.from(classesSet).sort().forEach(c => {
        let opt = document.createElement('option'); opt.value = c; opt.innerText = c; classEl.appendChild(opt);
    });
    Array.from(schoolsSet).sort().forEach(s => {
        let opt = document.createElement('option'); opt.value = s; opt.innerText = s; schoolEl.appendChild(opt);
    });
    
    if (Array.from(classEl.options).some(o => o.value === curClass)) classEl.value = curClass;
    if (Array.from(schoolEl.options).some(o => o.value === curSchool)) schoolEl.value = curSchool;
}

function processStudentData(filters) {
    let allRaw = [...rawCungCo, ...rawLuyenTapEssays, ...rawLuyenTapProgress];
    const filtered = allRaw.filter(d => {
        if (filters.week && String(d.week) !== String(filters.week)) return false;
        if (filters.period && String(d.period) !== String(filters.period)) return false;
        if (filters.class && (d.studentClass || d.className || d.lop || d.grade) !== filters.class) return false;
        if (filters.school && (d.school || d.studentSchool) !== filters.school) return false;
        return true;
    });

    const exerciseKeys = new Set(window.currentLessonExKeys || []);
    filtered.forEach(d => Object.keys(d).forEach(k => { if (k.startsWith('scoreEx')) exerciseKeys.add(k); }));
    const sortedExKeys = Array.from(exerciseKeys).sort((a, b) => parseInt(a.replace('scoreEx', '')) - parseInt(b.replace('scoreEx', '')));

    const studentData = {};
    rawStudents.filter(s => (!filters.class || s.studentClass === filters.class) && (!filters.school || s.school === filters.school)).forEach(s => {
        const key = `${s.name}_${s.studentClass || "-"}_${s.school || ""}`;
        studentData[key] = {
            studentName: s.name, studentClass: s.studentClass || "-", school: s.school || "",
            exercises: {}, cungCoScore: null, attemptsCount: 0, lastTimestamp: 0
        };
    });

    filtered.forEach((data) => {
        const key = `${data.studentName}_${data.studentClass || data.className || data.lop || data.grade || "-"}_${data.school || data.studentSchool || ""}`;
        if (!studentData[key]) {
            studentData[key] = {
                studentName: data.studentName, studentClass: data.studentClass || "-", school: data.school || "", 
                exercises: {}, cungCoScore: null, attemptsCount: 0, lastTimestamp: 0
            };
        }
        const st = studentData[key];
        st.attemptsCount++;
        const timestamp = data.timestamp ? data.timestamp.seconds : 0;
        if (timestamp > st.lastTimestamp) st.lastTimestamp = timestamp;

        sortedExKeys.forEach(exKey => {
            const val = Math.min(100, parseScore(data[exKey]));
            if (data[exKey] !== undefined) {
                if (st.exercises[exKey] === undefined || val > st.exercises[exKey]) st.exercises[exKey] = val;
            }
        });

        const practiceScore = Math.min(100, parseScore(data.scorePractice || data.aiScore));
        if (practiceScore > 0 && (st.luyenTapScore === undefined || practiceScore > st.luyenTapScore)) st.luyenTapScore = practiceScore;

        if (data.type === "Luyện tập - Củng cố" || data.sourceTab === "Củng cố") {
            const s = Math.min(100, parseScore(data.score || data.scoreQuiz));
            if (st.cungCoScore === null || s > st.cungCoScore) {
                st.cungCoScore = s;
                st.totalTime = data.timeTaken || 0;
            }
        }
    });

    const uniqueData = Object.values(studentData);
    uniqueData.forEach(d => {
        let totalLuyenTap = 0;
        const numEx = sortedExKeys.length || (window.currentLessonExKeys ? window.currentLessonExKeys.length : 0);
        if (numEx > 0) {
            let hasAnyEx = false;
            const weight = 100 / numEx;
            sortedExKeys.forEach(exKey => {
                if (d.exercises[exKey] !== undefined) {
                    hasAnyEx = true;
                    totalLuyenTap += (d.exercises[exKey] / 100) * weight;
                }
            });
            d.luyenTapScore = hasAnyEx ? Math.round(totalLuyenTap) : (numEx === 0 ? d.luyenTapScore : 0);
        }
        let countParts = 0; let sumParts = 0;
        if (d.luyenTapScore !== undefined && d.luyenTapScore !== null) { sumParts += d.luyenTapScore; countParts++; }
        if (d.cungCoScore !== null) { sumParts += d.cungCoScore; countParts++; }
        d.avgScore = countParts > 0 ? Math.round(sumParts / countParts) : 0;
    });

    uniqueData.sort((a, b) => b.avgScore - a.avgScore);
    
    return { uniqueData, sortedExKeys, filteredCount: filtered.length };
}

function updateStatCards(uniqueData, filteredCount) {
    const subStudents = uniqueData.filter(d => d.attemptsCount > 0);
    const totalAvg = subStudents.length > 0 ? Math.round(subStudents.reduce((s,d)=>s+d.avgScore,0)/subStudents.length) : 0;

    document.getElementById('stat-total').innerText = filteredCount;
    document.getElementById('stat-students').innerText = subStudents.length;
    document.getElementById('stat-avg').innerText = totalAvg;
}

/**
 * Sorts dashboard data by key using shared Table module.
 */
export function sortTableBy(key) {
    if (!allQuizData.length) return;
    sortData(allQuizData, key);
    renderTable(allQuizData, window.currentSortedExKeys, { 
        theme: 'emerald',
        onSort: (k) => sortTableBy(k)
    });
}

function updateChartFilterOptions(exKeys) {
    const select = document.getElementById('chart-data-filter');
    if (!select) return;
    const cur = select.value;
    select.innerHTML = `<option value="avgScore">Điểm trung bình</option><option value="luyenTapScore">Điểm Luyện tập</option><option value="cungCoScore">Điểm Củng cố</option>`;
    exKeys.forEach(ek => { let opt = document.createElement('option'); opt.value = ek; opt.innerText = "Bài " + ek.replace('scoreEx',''); select.appendChild(opt); });
    if (Array.from(select.options).some(o => o.value === cur)) select.value = cur;
}

/**
 * Re-renders the score distribution chart.
 */
export function renderScoreChart() {
    renderScoreChartModule(allQuizData, document.getElementById('chart-data-filter')?.value || 'avgScore');
}

/**
 * Downloads science scores as Excel file.
 */
export function exportToExcel() {
    excelExport(allQuizData, SUBJECT_NAME);
}
