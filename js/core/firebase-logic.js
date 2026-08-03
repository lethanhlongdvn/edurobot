/**
 * Firebase Manager for EduRobot
 * Handles Firestore data saving and Storage uploads
 */

// Firebase config loaded from js/core/firebase-config.js (Single Source of Truth)
const firebaseConfig = window.__FIREBASE_CONFIG || {};

/**
 * XSS Mitigation helper to escape HTML
 */
window.escapeHTML = function (str) {
    if (!str) return '';
    return str.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

/**
 * Sanitize student input — strip dangerous chars, limit length
 * @param {string} value - Raw input value
 * @returns {string} Cleaned value safe for comparison and display
 */
window.sanitizeInput = function (value) {
    if (typeof value !== 'string') return '';
    return value.trim().replace(/[<>'"&]/g, '').substring(0, 50);
};

// Initialize Firebase safely
function initFirebase() {
    try {
        if (typeof firebase !== 'undefined') {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            
            // Check for Firestore
            if (typeof firebase.firestore === 'function') {
                window.db = firebase.firestore();
            } else {
                console.warn("Firebase Firestore SDK not ready yet.");
                window.db = null;
            }

            // Firebase Storage
            if (typeof firebase.storage === 'function') {
                window.storage = firebase.storage();
            } else {
                console.warn("Firebase Storage SDK not ready.");
                window.storage = null;
            }

            // Firebase Auth
            if (typeof firebase.auth === 'function') {
                window.auth = firebase.auth();
            } else {
                console.warn("Firebase Auth SDK not ready.");
                window.auth = null;
            }
            
            console.log("Firebase initialized successfully.");
        } else {
            console.warn("Firebase core not defined. Offline mode.");
            window.db = null;
            window.storage = null;
            window.auth = null;
        }
    } catch (e) {
        console.error("Firebase init error:", e);
        window.db = null;
        window.storage = null;
        window.auth = null;
    }
}

// Run init immediately and also on DOM ready to be safe
initFirebase();
document.addEventListener('DOMContentLoaded', initFirebase);

/**
 * Standard Slugify for Document IDs
 */
window.getSlug = function (str) {
    if (!str) return "unknown";
    return str.toString().toLowerCase()
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
        .replace(/ì|í|ị|ỉ|ĩ/g, "i")
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
        .replace(/đ/g, "d")
        .replace(/[^a-z0-9]/g, "_")
        .replace(/_+/g, "_")
        .replace(/^_+|_+$/g, "");
};

/**
 * NEW: Continuous slug for usernames (no accents, no spaces, no underscores)
 */
window.getSlugContinuous = function (str) {
    if (!str) return "";
    return str.toString().toLowerCase()
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
        .replace(/ì|í|ị|ỉ|ĩ/g, "i")
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
        .replace(/đ/g, "d")
        .replace(/[^a-z0-9]/g, "")
        .replace(/\s+/g, "");
};

/**
 * Global helper to get common student data
 */
function getStudentInfo() {
    let name = document.getElementById('studentName')?.value.trim();
    let cls = document.getElementById('studentClass')?.value;
    let schoolSelect = document.getElementById('schoolSelect')?.value;
    let otherSchool = document.getElementById('otherSchool')?.value.trim();

    // Fallback to localStorage if DOM elements don't provide it
    if (!name) name = localStorage.getItem('eduMathName') || "";
    if (!cls) cls = localStorage.getItem('eduMathClass') || "";
    if (!schoolSelect) schoolSelect = localStorage.getItem('eduMathSchool') || "";

    const school = schoolSelect === 'Khác' ? (otherSchool || localStorage.getItem('eduMathOtherSchool') || "") : schoolSelect;

    return { name, cls, school, schoolSelect };
}

/**
 * Handle Student Info Modal & LocalStorage
 */
let pendingSubmission = null; // Store submission data if modal needs to be shown

window.openStudentModal = function () {
    const { name, cls, schoolSelect } = getStudentInfo();

    const nameInput = document.getElementById('studentName');
    const classSelect = document.getElementById('studentClass');
    const schoolSel = document.getElementById('schoolSelect');
    const otherSchoolInput = document.getElementById('otherSchool');

    if (nameInput && name) nameInput.value = name;
    if (classSelect && cls) classSelect.value = cls;
    if (schoolSel && schoolSelect) {
        schoolSel.value = schoolSelect;
        if (schoolSelect === 'Khác') {
            document.getElementById('otherSchoolContainer').classList.remove('hidden');
            if (otherSchoolInput) otherSchoolInput.value = localStorage.getItem('eduMathOtherSchool') || "";
        }
    }

    const modal = document.getElementById('student-modal');
    const content = document.getElementById('student-modal-content');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => content.classList.replace('scale-95', 'scale-100'), 10);
};

window.closeStudentModal = function () {
    const modal = document.getElementById('student-modal');
    const content = document.getElementById('student-modal-content');
    if (!modal) return;
    if (content) {
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
    }
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        pendingSubmission = null;
    }, 300);
};

window.saveStudentInfo = function () {
    const name = document.getElementById('studentName').value.trim();
    const cls = document.getElementById('studentClass').value;
    const schoolSel = document.getElementById('schoolSelect').value;
    const otherSchool = document.getElementById('otherSchool').value.trim();

    const check = window.isValidStudentName(name);
    if (!check.valid) {
        alert(check.msg);
        return;
    }
    if (!cls) {
        alert("Em hãy chọn Lớp của mình nhé!");
        return;
    }
    if (!schoolSel || (schoolSel === 'Khác' && !otherSchool)) {
        alert("Em hãy chọn hoặc nhập tên Trường nhé!");
        return;
    }

    localStorage.setItem('eduMathName', name);
    localStorage.setItem('eduMathClass', cls);
    localStorage.setItem('eduMathSchool', schoolSel);
    if (schoolSel === 'Khác') {
        localStorage.setItem('eduMathOtherSchool', otherSchool);
    }

    closeStudentModal();
    if (window.showStudentBadge) window.showStudentBadge();

    // Resume submission if there was one pending
    if (pendingSubmission) {
        window.submitMathLesson(
            pendingSubmission.content,
            pendingSubmission.score,
            pendingSubmission.btnId,
            pendingSubmission.timeTaken
        );
        pendingSubmission = null;
    } else {
        alert("Đã lưu thông tin! Bây giờ em có thể bấm Nộp Bài nhé.");
    }
};

/**
 * NEW: Device Fingerprinting for security
 */
window.getDeviceId = function () {
    let devId = localStorage.getItem('eduRobotDeviceId');
    if (!devId) {
        // Generate a simple unique ID
        devId = 'dev_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
        localStorage.setItem('eduRobotDeviceId', devId);
    }
    return devId;
};

/**
 * NEW: Check if device is blacklisted
 */
window.isBlacklisted = async function () {
    const devId = window.getDeviceId();
    try {
        const doc = await db.collection("blacklisted_devices").doc(devId).get();
        return doc.exists;
    } catch (e) {
        console.error("Blacklist check failed:", e);
        return false;
    }
};

/**
 * NEW: Centralized Student Name Validator
 */
window.isValidStudentName = function (name) {
    if (!name || name.trim().length === 0) {
        return { valid: false, msg: "Em hãy điền Tên trước khi nộp nhé!" };
    }
    const trimmed = name.trim();
    const words = trimmed.split(/\s+/).filter(w => w.length > 0);

    // Rule 1: At least 3 words
    if (words.length < 3) {
        return { valid: false, msg: "Bạn cần nhập đầy đủ Họ và Tên (ít nhất 3 từ), lớp, trường để nộp bài nhé!" };
    }

    // Rule 2: No numbers only
    if (/^\d+$/.test(trimmed.replace(/\s/g, ''))) {
        return { valid: false, msg: "Tên không hợp lệ. Bạn cần nhập đầy đủ họ và tên thật nhé!" };
    }

    // Rule 3: Meaningless repetitive chars (4+ same chars in a row)
    if (/(.)\1{3,}/.test(trimmed.replace(/\s/g, ''))) {
        return { valid: false, msg: "Tên có vẻ không hợp lệ (lặp lại ký tự quá nhiều). Em hãy nhập tên thật nhé!" };
    }

    // Rule 4: Blacklist (Common Vietnamese vulgar terms)
    const blacklist = ['dm', 'vcl', 'clm', 'cc', 'cl', 'đm', 'vờ lờ', 'vl', 'đệt', 'đéo', 'cac', 'concac'];
    const lowerName = trimmed.toLowerCase();
    for (const term of blacklist) {
        if (lowerName.includes(term)) {
            return { valid: false, msg: "Tên chứa từ ngữ không phù hợp. Em hãy nhập lại tên thật nhé!" };
        }
    }

    return { valid: true };
};

/**
 * Submit main essay to Firestore (essays_v2)
 */
async function submitEssay(event) {
    const { name, cls, school } = getStudentInfo();
    const content = document.getElementById('ai-main-essay')?.value.trim();
    const lessonTitle = document.title.replace(" - EduRobot", "");

    // Use Centralized Validator
    const check = window.isValidStudentName(name);
    if (!check.valid) {
        alert(check.msg);
        return;
    }

    // NEW: Blacklist Check
    if (await window.isBlacklisted()) {
        alert("Thiết bị của em đã bị tạm khóa chức năng nộp bài do vi phạm quy định. Hãy liên hệ Thầy/Cô nhé!");
        return;
    }

    if (!cls) {
        alert("Em hãy điền Lớp trước khi nộp nhé!");
        return;
    }

    if (!content) {
        alert("Em hãy viết bài làm trước khi nộp nhé!");
        return;
    }

    const btn = event ? (event.currentTarget || event.target) : null;
    let originalText = "";
    if (btn) {
        originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<div class="w-4 h-4 bg-white rounded flex items-center justify-center text-blue-600 font-black text-[8px] shadow-sm animate-spin">E</div> <span>Đang gửi bài...</span>';
    }

    try {
        const currentUser = firebase.auth().currentUser;
        const currentUid = currentUser ? currentUser.uid : "unknown";
        const docId = window.getSlug(`${name}_${cls}_${school}_${lessonTitle}`);
        await db.collection("essays_v2").doc(docId).set({
            uid: currentUid,
            studentName: name,
            studentClass: cls,
            studentSchool: school,
            content: content,
            lessonTitle: lessonTitle,
            deviceId: window.getDeviceId(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: "Chưa chấm",
            type: "essay"
        });

        UI.showToast("Tuyệt vời! Bài làm của em đã được gửi tới Thầy/Cô thành công.", "success", 3000);
        if (typeof celebrate === 'function') celebrate();
        else if (typeof confetti === 'function') confetti();
    } catch (error) {
        console.error("Error submitting essay:", error);
        alert("Có lỗi xảy ra khi nộp bài. Em hãy thử lại nhé!\nChi tiết: " + error.message);
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    }
}

/**
 * Submit Math Lesson to Firestore (reuses essays_v2)
 */
window.submitMathLesson = async function (content, score, btnId, timeTaken = 0, totalQuestions = 0, correctCount = 0) {
    // ====== Debounce: Chặn spam submit (2 giây cooldown) ======
    const now = Date.now();
    if (window.__lastSubmitTime && (now - window.__lastSubmitTime < 2000)) {
        console.warn('⏳ Vui lòng đợi trước khi kiểm tra lại.');
        return;
    }
    window.__lastSubmitTime = now;

    // ====== Guard: Chặn Khách và tài khoản chưa duyệt ======
    const userRole = localStorage.getItem('userRole');
    const userApproved = localStorage.getItem('userApproved');

    // Định nghĩa hàm hiển thị Toast thông báo nhẹ nhàng ở góc màn hình
    function showEduRobotToast(message) {
        let container = document.getElementById('edurobot-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'edurobot-toast-container';
            container.style.cssText = 'position:fixed; top:20px; right:20px; z-index:2147483647; display:flex; flex-direction:column; gap:10px; pointer-events:none;';
            document.body.appendChild(container);
        }
        
        const toast = document.createElement('div');
        toast.style.cssText = 'pointer-events:auto; background:#fffbeb; border-left:6px solid #f59e0b; color:#b45309; padding:12px 18px; border-radius:16px; box-shadow:0 10px 25px rgba(0,0,0,0.1); font-family:\'Be Vietnam Pro\', sans-serif; font-weight:700; font-size:13px; min-width:280px; max-width:360px; transform:translateX(120%); transition:all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); opacity:0; box-sizing:border-box; border: 1px solid #fef3c7;';
        toast.innerHTML = `<div style="display:flex; align-items:center; gap:10px;"><span style="font-size: 18px;">⚠️</span><div>${message}</div></div>`;
        
        container.appendChild(toast);
        
        // Trượt vào
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
            toast.style.opacity = '1';
        }, 50);
        
        // Trượt ra và xóa
        setTimeout(() => {
            toast.style.transform = 'translateX(120%)';
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }

    if (!userRole || !userApproved) {
        // Tài khoản khách/chưa duyệt: Cho phép xem đáp án thoải mái, chỉ hiện toast nhắc nhở nhẹ nhàng không lưu điểm
        showEduRobotToast("Bạn đang dùng tài khoản Khách. Điểm số bài học sẽ không được lưu vào sổ điểm của lớp.");
        return;
    }

    const { name, cls, school } = getStudentInfo();

    // If info is missing, prompt user
    if (!name || !cls || !school) {
        pendingSubmission = { content, score, btnId, timeTaken };
        window.openStudentModal();
        return;
    }

    // Verify name
    const check = window.isValidStudentName(name);
    if (!check.valid) {
        pendingSubmission = { content, score, btnId, timeTaken };
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback(
                "⚠️ THÔNG TIN CHƯA HỢP LỆ",
                "✍️",
                `<div class="text-center p-4">
                    <p class="text-lg md:text-xl font-bold text-red-600 mb-6" style="line-height: 1.6;">${check.msg}</p>
                    <button onclick="window.closeMathModal(); window.openStudentModal();" class="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-xl shadow-md transition-all active:scale-95 text-sm md:text-base">Cập nhật thông tin</button>
                </div>`
            );
        } else {
            alert(check.msg);
            window.openStudentModal();
        }
        return;
    }

    // Blacklist Note
    if (await window.isBlacklisted()) {
        alert("Thiết bị của em đã bị tạm khóa chức năng nộp bài do vi phạm quy định. Hãy liên hệ Thầy/Cô nhé!");
        return;
    }

    const btn = document.getElementById(btnId);
    let originalText = "";
    if (btn) {
        originalText = btn.innerHTML;
        btn.disabled = true;
        btn.style.pointerEvents = 'none';
        btn.innerHTML = '<div class="w-5 h-5 bg-white rounded flex items-center justify-center text-emerald-600 font-black text-[10px] shadow-sm animate-spin mr-2">O</div> Gửi dữ liệu...';
    }

    try {
        if (!window.db) {
            throw new Error("Không thể kết nối với Cơ sở dữ liệu. Vui lòng kiểm tra mạng hoặc thử lại sau.");
        }
        const lessonTitle = document.title.replace(" - EduRobot", "");
        const week = window.currentLessonData ? window.currentLessonData.week : "N/A";
        const period = window.currentLessonData ? window.currentLessonData.period : "N/A";
        const subjectMap = { 
            math: 'Toán học', 
            vietnamese: 'Tiếng Việt', 
            history: 'Lịch sử - Địa lý', 
            science: 'Khoa học', 
            ethics: 'Đạo đức', 
            experiential: 'HĐ Trải nghiệm', 
            english: 'Tiếng Anh' 
        };
        const currentSub = window.router?.currentSubject || 'math';
        const subjectName = subjectMap[currentSub] || 'Toán học';
        
        // Stable docId for the lesson progress
        const baseDocId = window.getSlug(`${name}_${cls}_${school}_${lessonTitle}`);

        // Handle Quiz/Củng cố results consistency with syncRealtimeProgress
        if (typeof content === 'string' && (content.includes("Trắc nghiệm tổng:") || content.includes("Củng cố:"))) {
            const finalScore = Math.min(100, Math.max(0, parseInt(score) || 0));
            
            // Re-use logic to keep highest score
            let existingScore = 0;
            const doc = await db.collection("diem_tieng_viet_lop5").doc(baseDocId).get();
            if (doc.exists) existingScore = parseInt(doc.data().scoreQuiz || doc.data().score) || 0;

            if (finalScore >= existingScore) {
                const finalTotal = totalQuestions || 10;
                const finalCorrect = correctCount || Math.round(finalScore * finalTotal / 100);
                const currentUser = firebase.auth().currentUser;
                const currentUid = currentUser ? currentUser.uid : "unknown";

                await db.collection("diem_tieng_viet_lop5").doc(baseDocId).set({
                    uid: currentUid,
                    studentName: name,
                    studentClass: cls,
                    studentSchool: school,
                    score: finalScore,
                    scoreQuiz: finalScore,
                    totalQuestions: finalTotal,
                    correctCount: finalCorrect,
                    lessonTitle: lessonTitle,
                    week: week,
                    period: String(period),
                    timeTaken: timeTaken,
                    type: "Luyện tập - Củng cố",
                    deviceId: window.getDeviceId(),
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    subject: subjectName
                }, { merge: true });
            }
        } else {
            // Mặc định lưu vào bài tự luận Toán học (Essays)
            // Cần ID duy nhất cho từng Bài (Bài 1, Bài 2...) trong cùng 1 tiết
            let exId = "general";
            let contentStr = String(content);

            // Tự động nhận diện ID bài để đồng bộ với Dashboard Thống kê (L.Tập)
            // Hỗ trợ cả định dạng "Bài 1. " và "1. "
            const exMatch = contentStr.match(/^(?:Bài\s+|)(\d+)(?:\.|\s|:)/i);
            if (exMatch) {
                exId = "ex" + exMatch[1];
                const scoreKey = "scoreEx" + exMatch[1];
                window.syncRealtimeProgress({ [scoreKey]: parseInt(score) || 0 });
            } else if (typeof content === 'number') {
                exId = "ex" + content;
                contentStr = "Bài " + content;
                const scoreKey = "scoreEx" + content;
                window.syncRealtimeProgress({ [scoreKey]: parseInt(score) || 0 });
            }

            const essayDocId = `${baseDocId}_${exId}`;
            
            // Keep highest score for essay if graded by AI previously
            let existingAIScore = 0;
            const essayDoc = await db.collection("essays_v2").doc(essayDocId).get();
            if (essayDoc.exists) existingAIScore = parseInt(essayDoc.data().aiScore) || 0;

            if (parseInt(score) >= existingAIScore) {
                const currentUser = firebase.auth().currentUser;
                const currentUid = currentUser ? currentUser.uid : "unknown";
                await db.collection("essays_v2").doc(essayDocId).set({
                    uid: currentUid,
                    studentName: name,
                    studentClass: cls,
                    studentSchool: school,
                    content: contentStr,
                    lessonTitle: lessonTitle,
                    aiScore: parseInt(score) || 0,
                    week: week,
                    period: period,
                    timeTaken: timeTaken,
                    deviceId: window.getDeviceId(),
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    status: "Chưa chấm",
                    subject: subjectName,
                    type: subjectName === 'Toán học' ? 'math_lesson' : `${window.router?.currentSubject || 'essay'}_lesson`
                });
            }
        }

        UI.showToast("Tuyệt vời! Kết quả đã được gửi tới Thầy/Cô thành công.", "success", 3000);
        pendingSubmission = null; // Clear pending
        if (typeof confetti === 'function') confetti();
    } catch (error) {
        console.error("Error submitting:", error);
        alert("Có lỗi xảy ra khi nộp. Em hãy thử lại nhé!\n" + error.message);
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.style.pointerEvents = 'auto';
            btn.innerHTML = originalText;
        }
    }
};

/**
/**
 * NEW: Sync partial progress in real-time (for Bài 1, 2, 3 and each Quiz question)
 * @param {Object} data - Score or progress data
 * @param {boolean} forceAuth - If true, prompts for login if not authenticated
 */
window.syncRealtimeProgress = async function (data, forceAuth = false) {
    const userRole = localStorage.getItem('userRole');
    const userApproved = localStorage.getItem('userApproved');

    if (!userRole || !userApproved || userRole !== 'student') {
        if (forceAuth) {
            // Hiển thị thông báo yêu cầu đăng nhập nếu là hành động nộp bài
            const shouldRedirect = confirm(
                '⚠️ Bạn cần đăng nhập bằng TÀI KHOẢN HỌC SINH đã được duyệt để nộp bài và cập nhật điểm.\n\n' +
                '• Bấm OK để chuyển đến trang đăng nhập học sinh.'
            );
            if (shouldRedirect) {
                window.location.href = 'auth.html';
            }
        }
        return; // Silent skip for guests / non-students unless forced
    }

    const { name, cls, school } = getStudentInfo();
    if (!name || !cls || !school) return;
    
    // Validate name briefly to avoid junk data
    const check = window.isValidStudentName(name);
    if (!check.valid) return;

    try {
        const lessonTitle = document.title.replace(" - EduRobot", "");
        const week = window.currentLessonData ? window.currentLessonData.week : "N/A";
        const period = window.currentLessonData ? window.currentLessonData.period : "N/A";
        const subjectMap = { 
            math: 'Toán học', 
            vietnamese: 'Tiếng Việt', 
            history: 'Lịch sử - Địa lý', 
            science: 'Khoa học', 
            ethics: 'Đạo đức', 
            experiential: 'HĐ Trải nghiệm', 
            english: 'Tiếng Anh' 
        };
        const currentSub = window.router?.currentSubject || 'math';
        const subjectName = subjectMap[currentSub] || 'Toán học';
        
        // Use a stable ID per student per lesson to record progress permanently
        const docId = window.getSlug(`${name}_${cls}_${school}_${lessonTitle}`);

        // Fetch existing data to compare scores (Highest score wins rule)
        let existingData = {};
        try {
            const doc = await db.collection("diem_tieng_viet_lop5").doc(docId).get();
            if (doc.exists) {
                existingData = doc.data();
            }
        } catch (err) {
            console.warn("Could not fetch existing data, proceeding with merge:", err);
        }

        const currentUser = firebase.auth().currentUser;
        const currentUid = currentUser ? currentUser.uid : "unknown";

        // Prepare payload with highest score logic and cap at 100
        const payload = {
            uid: currentUid,
            studentName: name,
            studentClass: cls,
            studentSchool: school,
            lessonTitle: lessonTitle,
            week: week,
            period: period,
            subject: subjectName,
            deviceId: window.getDeviceId(),
            lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
        };

        // Merge incoming data with "Highest Score Wins" rule
        Object.keys(data).forEach(key => {
            if (key.startsWith('score')) {
                const newVal = Math.min(100, Math.max(0, parseInt(data[key]) || 0));
                const oldVal = parseInt(existingData[key]) || 0;
                payload[key] = Math.max(oldVal, newVal);
            } else {
                payload[key] = data[key];
            }
        });

        // Ensure compatibility with common score field
        if (payload.scoreQuiz !== undefined) {
            payload.score = payload.scoreQuiz;
            payload.type = "Luyện tập - Củng cố";
        }

        await db.collection("diem_tieng_viet_lop5").doc(docId).set(payload, { merge: true });
        
        // --- TỰ ĐỘNG CỘNG SAO DỰA TRÊN ĐIỂM ---
        if (window.StarService && window.StarService.awardStarsByPerformance) {
            const snap = await db.collection("diem_tieng_viet_lop5").doc(docId).get();
            if (snap.exists) {
                const fullData = snap.data();
                let luyenTap = fullData.scorePractice || 0;
                let cungCo = fullData.scoreQuiz || fullData.score || 0;
                
                // Nếu có các bài tập lẻ (scoreEx), tính trung bình Luyện tập
                const exKeys = Object.keys(fullData).filter(k => k.startsWith('scoreEx'));
                if (exKeys.length > 0) {
                    let sumEx = 0;
                    exKeys.forEach(k => sumEx += (parseFloat(fullData[k]) || 0));
                    luyenTap = sumEx / exKeys.length;
                }
                
                // Tính điểm TB: chỉ tính phần nào có dữ liệu
                let avgScore = 0;
                let divisor = 0;
                if (luyenTap > 0) { avgScore += luyenTap; divisor++; }
                if (cungCo > 0) { avgScore += cungCo; divisor++; }
                avgScore = divisor > 0 ? Math.round(avgScore / divisor) : 0;
                
                if (avgScore >= 50) {
                    const studentEmail = localStorage.getItem('userEmail') || window.auth?.currentUser?.email || name;
                    window.StarService.awardStarsByPerformance(studentEmail, avgScore, lessonTitle);
                }
            }
        }

        console.log("Real-time sync success:", data);
    } catch (e) {
        console.error("Real-time sync error:", e);
    }
};

/**
 * Submit Project (Tab 2) to Firestore & Storage
 */
async function submitProject(projectId, projectTitle) {
    const { name, cls, school } = getStudentInfo();
    const content = document.getElementById(`project-desc-${projectId}`)?.value.trim() || "";
    const fileInput = document.getElementById(`project-file-${projectId}`);
    const lessonTitle = document.title.replace(" - EduRobot", "");

    const check = window.isValidStudentName(name);
    if (!check.valid) {
        alert(check.msg);
        return;
    }

    // NEW: Blacklist Check
    if (await window.isBlacklisted()) {
        alert("Thiết bị của em đã bị tạm khóa chức năng nộp bài do vi phạm quy định. Hãy liên hệ Thầy/Cô nhé!");
        return;
    }

    if (!cls) {
        alert("Em hãy điền Lớp trước nhé!");
        return;
    }

    const btn = event ? (event.currentTarget || event.target) : null;
    let originalText = "";
    if (btn) {
        originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<div class="w-4 h-4 bg-white rounded flex items-center justify-center text-blue-600 font-black text-[8px] shadow-sm animate-spin">E</div> <span>Đang tải lên...</span>';
    }

    let fileUrl = "";

    try {
        // Upload file if exists
        if (fileInput && fileInput.files[0]) {
            const file = fileInput.files[0];
            const storageRef = storage.ref(`projects/${Date.now()}_${file.name}`);
            const snapshot = await storageRef.put(file);
            fileUrl = await snapshot.ref.getDownloadURL();
        }

        const docId = window.getSlug(`${name}_${cls}_${school}_${lessonTitle}_${projectId}`);
        await db.collection("projects").doc(docId).set({
            studentName: name,
            studentClass: cls,
            studentSchool: school,
            content: content,
            fileUrl: fileUrl,
            projectType: projectTitle,
            lessonTitle: lessonTitle,
            deviceId: window.getDeviceId(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: "Đã nộp"
        });

        UI.showToast("Dự án của em đã được gửi tới Thầy/Cô thành công! Chờ Thầy/Cô nhận xét nhé.", "success", 3000);
        if (typeof celebrate === 'function') celebrate();
        else if (typeof confetti === 'function') confetti();
    } catch (error) {
        console.error("Error submitting project:", error);
        alert("Lỗi khi gửi dự án. Em hãy thử lại nhé!\nChi tiết: " + error.message);
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    }
}

/**
 * Load Teacher Feedback
 */
function checkTeacherFeedback() {
    const { name } = getStudentInfo();
    const lessonTitle = document.title.replace(" - EduRobot", "");
    if (!name) return;

    db.collection("essays_v2")
        .where("studentName", "==", name)
        .where("lessonTitle", "==", lessonTitle)
        .orderBy("timestamp", "desc")
        .limit(1)
        .onSnapshot((snapshot) => {
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.teacherFeedback) {
                    displayTeacherFeedback(data.teacherFeedback, data.teacherGrade);
                }
            });
        });
}

function displayTeacherFeedback(message, grade) {
    const container = document.getElementById('teacher-feedback-box');
    if (!container) return;

    container.classList.remove('hidden');
    container.innerHTML = `
        <div class="p-6 bg-blue-50 border-2 border-blue-200 rounded-[32px] shadow-sm animate-bounce-subtle">
            <h4 class="text-blue-700 font-black text-sm uppercase mb-3 flex items-center">
                <span class="mr-2">👩‍🏫</span> Lời khen từ Thầy/Cô
            </h4>
            <p class="text-gray-700 font-bold serif-font italic text-lg leading-relaxed mb-4">"${message}"</p>
            <div class="flex justify-end">
                <span class="bg-blue-600 text-white px-4 py-2 rounded-xl font-black text-xl shadow-lg">
                    Điểm của Thầy/Cô: ${grade}/10
                </span>
            </div>
        </div>
    `;
}

// Global functions for UI interaction (if not inline)
window.checkSchool = function () {
    const select = document.getElementById('schoolSelect');
    const otherInput = document.getElementById('otherSchool');
    if (select && otherInput) {
        if (select.value === 'Khác') {
            otherInput.classList.remove('hidden');
        } else {
            otherInput.classList.add('hidden');
        }
    }
};

/**
 * Show Student Badge in Navbar
 */
window.showStudentBadge = function () {
    const studentName = localStorage.getItem('eduMathName');
    const userRole = localStorage.getItem('userRole');
    const teacherName = localStorage.getItem('teacherName') || 'Giáo viên';

    const badge = document.getElementById('student-badge-li');
    const badgeName = document.getElementById('student-badge-name');
    const authButtons = document.getElementById('auth-buttons-li');
    const teacherBtnLi = document.getElementById('teacher-btn-li');

    if (!badge || !badgeName) return;

    if (userRole === 'admin') {
        badgeName.innerText = `👑 ${teacherName}`;
        badge.classList.remove('hidden');
        if (authButtons) authButtons.classList.add('hidden');
        if (teacherBtnLi) teacherBtnLi.classList.add('hidden');
        
        // Màu vàng cho Admin
        const badgeDiv = badge.querySelector('div');
        if (badgeDiv) {
            badgeDiv.className = "flex items-center gap-1 bg-amber-50 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-800";
        }
    } else if (userRole === 'teacher') {
        badgeName.innerText = `👩‍🏫 ${teacherName}`;
        badge.classList.remove('hidden');
        if (authButtons) authButtons.classList.add('hidden');
        if (teacherBtnLi) teacherBtnLi.classList.add('hidden');
        
        // Màu xanh dương cho giáo viên
        const badgeDiv = badge.querySelector('div');
        if (badgeDiv) {
            badgeDiv.className = "flex items-center gap-1 bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 px-3 py-1.5 rounded-xl border border-blue-200 dark:border-blue-800";
        }
    } else if (studentName && studentName.trim()) {
        badgeName.innerText = studentName.trim();
        badge.classList.remove('hidden');
        if (authButtons) authButtons.classList.add('hidden');
        if (teacherBtnLi) teacherBtnLi.classList.add('hidden');
        
        // Màu xanh lá cho học sinh
        const badgeDiv = badge.querySelector('div');
        if (badgeDiv) {
            badgeDiv.className = "flex items-center gap-1 bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800";
        }
    } else {
        badge.classList.add('hidden');
        if (authButtons) authButtons.classList.remove('hidden');
        if (teacherBtnLi) teacherBtnLi.classList.add('hidden');
    }
};

window.logoutStudent = function () {
    const userRole = localStorage.getItem('userRole');
    
    if (userRole === 'teacher') {
        if (confirm('Thầy/Cô có muốn đăng xuất khỏi tài khoản Giáo viên không?')) {
            localStorage.removeItem('userRole');
            localStorage.removeItem('teacherName');
            // Firebase Auth sign out
            if (window.auth) window.auth.signOut().catch(() => {});
            window.location.reload();
        }
        return;
    }

    if (confirm('Bạn muốn đổi học sinh? Thông tin đã lưu sẽ bị xóa.')) {
        localStorage.removeItem('eduMathName');
        localStorage.removeItem('eduMathClass');
        localStorage.removeItem('eduMathSchool');
        localStorage.removeItem('eduMathOtherSchool');
        localStorage.removeItem('userRole');
        // Firebase Auth sign out
        if (window.auth) window.auth.signOut().catch(() => {});
        const badge = document.getElementById('student-badge-li');
        if (badge) badge.classList.add('hidden');
        window.location.reload();
    }
};

/**
 * Re-authenticate user before sensitive operations (like changing password)
 */
window.reauthenticate = async function (currentPassword) {
    const user = firebase.auth().currentUser;
    if (!user) throw new Error("Vui lòng đăng nhập lại.");
    const cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
};

/**
 * Change current user's password
 */
window.changeUserPassword = async function (currentPassword, newPassword) {
    try {
        await window.reauthenticate(currentPassword);
        const user = firebase.auth().currentUser;
        await user.updatePassword(newPassword);
        
        // Update Firestore if needed (e.g., tempPassword field for display)
        const db = window.db || firebase.firestore();
        await db.collection('users').doc(user.uid).update({
            tempPassword: newPassword
        });
        
        return { success: true };
    } catch (e) {
        console.error("Change password error:", e);
        let msg = "Lỗi khi đổi mật khẩu.";
        if (e.code === 'auth/wrong-password') msg = "Mật khẩu hiện tại không đúng.";
        else if (e.code === 'auth/weak-password') msg = "Mật khẩu mới quá yếu (ít nhất 6 ký tự).";
        throw new Error(msg);
    }
};

/**
 * Admin/Teacher: Reset student password to default 123456
 * Note: This only works if we have the student's email and they use the default format.
 * Since client-side SDK cannot change OTHERS' passwords, we update the tempPassword
 * and the student will need to use that. (Actually better to use a cloud function, 
 * but for this prototype we'll update the Firestore hint and instruct the user 
 * that the next time the Admin SDK script runs, it will sync, OR we just update the Firestore record).
 * 
 * IMPORTANT: To REALLLY reset Auth password from browser, we'd need a backend.
 * But we can update the 'tempPassword' in Firestore and if the student registers again 
 * or if we use the delete script + re-import, it works.
 * 
 * FOR NOW: We will implement the Firestore update part.
 */
window.resetStudentPasswordHint = async function (studentUid) {
    try {
        const db = window.db || firebase.firestore();
        await db.collection('users').doc(studentUid).update({
            tempPassword: "123456",
            passwordResetRequired: true // Hint for the system
        });
        return { success: true };
    } catch (e) {
        console.error("Reset password error:", e);
        throw e;
    }
};

// Auto-show badge on page load & auth change
document.addEventListener('DOMContentLoaded', () => {
    // Initial call
    setTimeout(() => window.showStudentBadge(), 500);
    
    // Auth state observer
    if (window.firebase && firebase.auth) {
        firebase.auth().onAuthStateChanged((user) => {
            console.log("Auth state changed:", user ? user.email : "Logged out");
            window.showStudentBadge();
        });
    }
});

/**
 * Persist star count for a student to Firestore
 */
window.saveStarData = async function(studentEmail, amount) {
    if (!studentEmail) return;
    try {
        const db = window.db || firebase.firestore();
        await db.collection('stars').doc(studentEmail.toLowerCase()).set({
            email: studentEmail.toLowerCase(),
            totalStars: parseInt(amount),
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        return { success: true };
    } catch (e) {
        console.error("Lỗi khi lưu số sao lên Firebase:", e);
        // Don't throw, let local storage be the fallback
        return { success: false, error: e };
    }
};

/**
 * Load all star data from Firestore (for teacher/admin view)
 */
window.loadAllStars = async function() {
    try {
        const db = window.db || firebase.firestore();
        const snapshot = await db.collection('stars').get();
        const starMap = {};
        snapshot.forEach(doc => {
            const data = doc.data();
            starMap[doc.id] = data.totalStars || 0;
        });
        return starMap;
    } catch (e) {
        console.error("Lỗi khi tải dữ liệu sao từ Firebase:", e);
        return null;
    }
};

/**
 * Persist an honor (Flag/Certificate) for a student to Firestore
 */
window.saveHonor = async function(studentEmail, honorData) {
    if (!studentEmail || !honorData) return;
    try {
        const db = window.db || firebase.firestore();
        const docRef = db.collection('stars').doc(studentEmail.toLowerCase());
        
        await db.runTransaction(async (transaction) => {
            const doc = await transaction.get(docRef);
            let milestones = { certificates: [], flags: [] };
            
            if (doc.exists && doc.data().milestones) {
                milestones = doc.data().milestones;
            }
            
            if (honorData.type === 'flag') {
                milestones.flags.push(honorData);
            } else {
                milestones.certificates.push(honorData);
            }
            
            if (doc.exists) {
                transaction.update(docRef, { milestones });
            } else {
                transaction.set(docRef, { milestones });
            }
        });
        
        return { success: true };
    } catch (e) {
        console.error("Lỗi khi lưu vinh danh lên Firebase:", e);
        return { success: false, error: e };
    }
};

/**
 * Load honors for the current student
 */
window.loadStudentHonors = async function(studentEmail) {
    if (!studentEmail) return null;
    try {
        const db = window.db || firebase.firestore();
        const doc = await db.collection('stars').doc(studentEmail.toLowerCase()).get();
        if (doc.exists) {
            return doc.data().milestones || { certificates: [], flags: [] };
        }
        return { certificates: [], flags: [] };
    } catch (e) {
        console.error("Lỗi khi tải vinh danh:", e);
        return null;
    }
};
