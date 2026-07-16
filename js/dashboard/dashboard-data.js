/**
 * dashboard-data.js
 * Centralized data processing for teacher dashboards.
 */

import { parseScore } from './utils.js';

/**
 * Calculates summary statistics for dashboard cards.
 */
export function calculateSummaryStats(uniqueData, filteredCount) {
    const submissions = uniqueData.filter(d => d.attemptsCount > 0);
    const totalAvg = submissions.length > 0 
        ? Math.round(submissions.reduce((s, d) => s + d.avgScore, 0) / submissions.length) 
        : 0;

    return {
        totalSubmissions: filteredCount,
        averageScore: totalAvg,
        uniqueStudents: submissions.length
    };
}

/**
 * Processes raw activity data into a student-centric summary list.
 * @param {Object} context - { rawCungCo, rawLuyenTapEssays, rawLuyenTapProgress, rawStudents, lop5ChonIds, currentLessonExKeys }
 * @param {Object} filters - { week, period, class, school }
 */
export function processRawData(context, filters) {
    const { rawCungCo, rawLuyenTapEssays, rawLuyenTapProgress, rawStudents, lop5ChonIds, currentLessonExKeys } = context;
    
    let allRaw = [...rawCungCo, ...rawLuyenTapEssays, ...rawLuyenTapProgress];
    
    let lop5ChonNames = null;
    if (filters.class === '__lop5chon__') {
        lop5ChonNames = new Set(rawStudents.filter(s => lop5ChonIds.has(s.id)).map(s => s.name));
    }

    const filtered = allRaw.filter(d => {
        if (filters.week && String(d.week) !== String(filters.week)) return false;
        if (filters.period && String(d.period) !== String(filters.period)) return false;
        if (filters.class === '__lop5chon__') {
            if (!lop5ChonNames || !lop5ChonNames.has(d.studentName)) return false;
        } else if (filters.class && (d.studentClass || d.className || d.lop || d.grade) !== filters.class) return false;
        if (filters.school && (d.school || d.studentSchool) !== filters.school) return false;
        return true;
    });

    const exerciseKeys = new Set(currentLessonExKeys || []);
    filtered.forEach(d => Object.keys(d).forEach(k => {
        if (k.startsWith('scoreEx') && !k.includes('Practice') && !k.includes('Quiz')) exerciseKeys.add(k);
    }));

    // Filter out redundant keys that match the period ID (e.g., scoreEx153 in Lesson 153)
    const sortedExKeys = Array.from(exerciseKeys)
        .filter(k => k.replace('scoreEx', '') !== String(filters.period))
        .sort((a, b) => parseInt(a.replace('scoreEx', '')) - parseInt(b.replace('scoreEx', '')));

    const studentData = {};
    rawStudents.filter(s => {
        if (filters.class === '__lop5chon__') return lop5ChonIds.has(s.id);
        if (filters.class && s.studentClass !== filters.class) return false;
        if (filters.school && s.school !== filters.school) return false;
        return true;
    }).forEach(s => {
        const key = `${s.name}_${s.studentClass || "-"}_${s.school || ""}`;
        studentData[key] = {
            studentName: s.name, studentClass: s.studentClass || "-", school: s.school || "",
            exercises: {}, cungCoScore: null, cungCoTime: null, score120B: null, score120C: null, attemptsCount: 0, lastTimestamp: 0
        };
    });

    filtered.forEach((data) => {
        const key = `${data.studentName}_${data.studentClass || data.className || data.lop || data.grade || "-"}_${data.school || data.studentSchool || ""}`;
        if (!studentData[key]) {
            studentData[key] = {
                studentName: data.studentName, studentClass: data.studentClass || "-", school: data.school || "", 
                exercises: {}, cungCoScore: null, cungCoTime: null, score120B: null, score120C: null, attemptsCount: 0, lastTimestamp: 0
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
        if (practiceScore > 0 && (st.rawLuyenTapScore === undefined || practiceScore > st.rawLuyenTapScore)) st.rawLuyenTapScore = practiceScore;

        if (data.type === "Luyện tập - Củng cố" || data.sourceTab === "Củng cố") {
            const s = Math.min(100, parseScore(data.score || data.scoreQuiz));
            if (st.cungCoScore === null || s > st.cungCoScore) {
                st.cungCoScore = s;
                st.cungCoTime = data.timeTaken || 0;
            }
        }
        if (data.lessonTitle?.includes('120B')) {
            const s = parseScore(data.aiScore || data.score);
            if (st.score120B === null || s > st.score120B) st.score120B = s;
        } else if (data.lessonTitle?.includes('120C')) {
            const s = parseScore(data.aiScore || data.score);
            if (st.score120C === null || s > st.score120C) st.score120C = s;
        }
    });

    const uniqueData = Object.values(studentData);
    uniqueData.forEach(d => {
        let totalLuyenTap = 0;
        const numEx = sortedExKeys.length || (currentLessonExKeys ? currentLessonExKeys.length : 0);
        if (numEx > 0) {
            let hasAnyEx = false;
            const weight = 100 / numEx;
            sortedExKeys.forEach(exKey => {
                if (d.exercises[exKey] !== undefined) {
                    hasAnyEx = true;
                    totalLuyenTap += (d.exercises[exKey] / 100) * weight;
                }
            });
            d.luyenTapScore = hasAnyEx ? Math.round(totalLuyenTap) : (numEx === 0 ? d.rawLuyenTapScore : 0);
        } else {
            d.luyenTapScore = d.rawLuyenTapScore || 0;
        }
        let countParts = 0; let sumParts = 0;
        if (d.luyenTapScore !== null) { sumParts += d.luyenTapScore; countParts++; }
        if (d.cungCoScore !== null) { sumParts += d.cungCoScore; countParts++; }
        d.avgScore = countParts > 0 ? Math.round(sumParts / countParts) : 0;
        d.totalTime = d.cungCoTime || 0;
    });

    uniqueData.sort((a, b) => b.avgScore - a.avgScore || a.totalTime - b.totalTime);
    
    return { uniqueData, sortedExKeys, filteredCount: filtered.length };
}
