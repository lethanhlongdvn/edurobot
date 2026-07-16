/**
 * Dashboard Export Module
 * Handles Excel file generation for student score reports using SheetJS
 */

import { formatTimeTaken } from './utils.js';

/**
 * Downloads dashboard data as an Excel file.
 * @param {Array} allQuizData 
 * @param {string} subjectTitle (e.g., 'Toán', 'Tiếng Việt')
 */
export function exportToExcel(allQuizData, subjectTitle) {
    if (!allQuizData || !allQuizData.length) return;

    const data = allQuizData.map((d, i) => ({
        "TT": i + 1,
        "Họ và Tên": d.studentName,
        "Lớp": "'" + d.studentClass,
        "Trường": d.school,
        "Luyện tập": d.luyenTapScore || 0,
        "Củng cố": d.cungCoScore || 0,
        "Trung bình": d.avgScore,
        "Thời gian": formatTimeTaken(d.totalTime)
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `Điểm ${subjectTitle || 'Học tập'}`);
    XLSX.writeFile(wb, `Bang_Diem_${subjectTitle || 'Hoc_Tap'}.xlsx`);
}

/**
 * Downloads practical report data as an Excel file.
 * @param {Array} records 
 * @param {string} lessonId 
 */
export function exportPracticeToExcel(records, lessonId) {
    if (!records || !records.length) {
        alert("Không có dữ liệu báo cáo thực hành cho tiết này.");
        return;
    }

    // Flatten data for Excel
    const data = records.map((r, i) => {
        const pd = r.practicalData || {};
        const row = {
            "STT": i + 1,
            "Họ và Tên": r.studentName,
            "Lớp": "'" + r.studentClass,
            "Trường": r.school,
            "Ngày nộp": r.timestamp ? (r.timestamp.toDate ? r.timestamp.toDate().toLocaleString('vi-VN') : new Date(r.timestamp).toLocaleString('vi-VN')) : "N/A"
        };
        
        // Table 1 (Lesson 141)
        if (pd.table1 && Array.isArray(pd.table1)) {
            pd.table1.forEach((item, idx) => {
                row[`Bảng 1 - Vật ${idx + 1} (${item.object || '?'}) - Chiều dài`] = item.length;
                row[`Bảng 1 - Vật ${idx + 1} (${item.object || '?'}) - Chiều rộng`] = item.width;
                row[`Bảng 1 - Vật ${idx + 1} (${item.object || '?'}) - Diện tích`] = item.area;
            });
        }
        
        // Table 2 (Lesson 141)
        if (pd.table2 && Array.isArray(pd.table2)) {
            pd.table2.forEach((item, idx) => {
                row[`Bảng 2 - Vật ${idx + 1} (${item.object || '?'}) - KL Trước`] = item.weightBefore;
                row[`Bảng 2 - Vật ${idx + 1} (${item.object || '?'}) - KL Sau`] = item.weightAfter;
                row[`Bảng 2 - Vật ${idx + 1} (${item.object || '?'}) - Chênh lệch`] = item.diff;
            });
        }
        
        // Calculations (Lesson 141)
        if (pd.calculations) {
            row["Câu hỏi 1 (Diện tích TB)"] = pd.calculations.q1;
            row["Câu hỏi 2 (Chênh lệch)"] = pd.calculations.q2;
        }

        // Lesson 150 specific flattening
        if (lessonId === '150') {
            if (pd.activity1) {
                const a1 = pd.activity1;
                row["Xúc xắc - Mặt 1 (Thực tế)"] = a1.rolls?.r1 || 0;
                row["Xúc xắc - Mặt 1 (Học sinh)"] = a1.studentInput?.r1 || "";
                row["Xúc xắc - Mặt 2 (Thực tế)"] = a1.rolls?.r2 || 0;
                row["Xúc xắc - Mặt 2 (Học sinh)"] = a1.studentInput?.r2 || "";
                row["Xúc xắc - Mặt 3/4 (Thực tế)"] = a1.rolls?.r34 || 0;
                row["Xúc xắc - Mặt 3/4 (Học sinh)"] = a1.studentInput?.r34 || "";
                row["Xúc xắc - Mặt 5/6 (Thực tế)"] = a1.rolls?.r56 || 0;
                row["Xúc xắc - Mặt 5/6 (Học sinh)"] = a1.studentInput?.r56 || "";
                row["Xúc xắc - Nhóm đông nhất"] = a1.studentInput?.winner || "";
                row["Xúc xắc - Tỉ số"] = a1.studentInput?.ratio || "";
            }
            if (pd.activity2) {
                const a2 = pd.activity2;
                row["Dự án - Số Áo"] = a2.donations?.shirts || "";
                row["Dự án - Số Quần"] = a2.donations?.pants || "";
                row["Dự án - Số Lịch"] = a2.donations?.calendars || "";
                row["Dự án - Cây cà chua"] = a2.trees?.tomato || "";
                row["Dự án - Cây chà là"] = a2.trees?.datePalm || "";
                row["Dự án - Cây bơ"] = a2.trees?.avocado || "";
            }
        }

        return row;
    });

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `Báo cáo thực hành ${lessonId}`);
    XLSX.writeFile(wb, `Bao_Cao_Thuc_Hanh_Tiet_${lessonId}.xlsx`);
}
