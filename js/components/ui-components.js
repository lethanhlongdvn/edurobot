// js/components/components.js - Aggregator cho hệ thống UI
import { common } from './common.js';
import { Dashboard } from './Dashboard.js';
import { Lesson } from './Lesson.js';
import { AIInteraction } from './AIInteraction.js';
import { Visuals } from './Visuals.js';
import { Quiz } from '../services/Quiz.js';
import { Honors } from '../services/Honors.js';
import { StarAdmin } from '../services/StarAdmin.js';
import { GameLibrary } from './games/GameLibrary.js';
import { HeadTiltGame } from './games/HeadTiltGame.js';
import { LuckyWheel } from './games/LuckyWheel.js';
import { GroupDivider } from './games/GroupDivider.js';
import { TugOfWar } from './games/TugOfWar.js';
import { ChoiceGame } from './games/ChoiceGame.js';
import { QuestionBankManager } from '../services/QuestionBankManager.js';
import { QuestionBankAdmin } from '../services/QuestionBankAdmin.js';
import { DashboardUI } from '../dashboard/dashboard-ui.js';
import { LessonBookReader } from './lesson/LessonBookReader.js';

// Register specific games
GameLibrary.registerGame('HeadTiltGame', HeadTiltGame);
GameLibrary.registerGame('LuckyWheel', LuckyWheel);
GameLibrary.registerGame('GroupDivider', GroupDivider);
GameLibrary.registerGame('tug_of_war', TugOfWar);
GameLibrary.registerGame('choice_game', ChoiceGame);

export const UI = {
    ...common,
    ...Dashboard,
    ...Lesson,
    ...AIInteraction,
    ...Visuals,
    ...Honors,
    ...StarAdmin,
    ...LessonBookReader,
    DashboardUI,

    // Quiz redirects to ensure single state management
    renderQuizContainer(lesson) { return Quiz.renderQuizContainer(lesson); },
    initQuiz(lesson) { Quiz.initQuiz(lesson); },
    cleanupQuiz() { if (Quiz.cleanup) Quiz.cleanup(); },

    renderNavbarSubjectSwitcher(currentSubject, allSubjects) {
        const isAdmin = (window.router && typeof window.router.isAdmin === 'function') 
            ? window.router.isAdmin() 
            : (localStorage.getItem('userRole') === 'admin' || localStorage.getItem('userRole') === 'teacher' || localStorage.getItem('userRole') === 'teacher-admin');
        return `
            <button class="text-gray-500 hover:text-indigo-600 transition-all py-2 flex items-center justify-center group" title="Bài học">
                <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                <svg class="w-3 h-3 group-hover:rotate-180 transition-transform ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-50 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
                ${allSubjects.map(s => {
            const isLocked = s.locked && !isAdmin;
            return `
                    <button onclick="router.navigateSubject('${s.id}')" 
                        class="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-black text-[10px] uppercase tracking-wide ${currentSubject.id === s.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-900'} ${isLocked ? 'opacity-60 cursor-not-allowed grayscale' : ''}">
                        <span class="flex items-center gap-3">
                            <span class="text-lg">${s.icon}</span>
                            ${s.name}
                        </span>
                        ${isLocked ? '<span class="text-xs">🔒</span>' : ''}
                    </button>
                `}).join('')}
            </div>
        `;
    },

    // Bộ giải mã placeholder [[TUTOR|id|requirement]] hoặc [[CUBE3D|label]]
    parseTutor(content) {
        if (!content) return '';

        // Xử lý [[TUTOR|id|req]]
        content = content.replace(/\[\[TUTOR\|([^|]+)\|([^\]]+)\]\]/g, (match, id, req) => {
            return this.renderTutor(id, req);
        });

        // Xử lý [[CUBE3D|label]]
        content = content.replace(/\[\[CUBE3D\|([^\]]+)\]\]/g, (match, label) => {
            return this.renderCube3D(label);
        });

        // Xử lý [[MATH_EX|id|display|label|action|answer]] hoặc [[READING_EX|...]]
        // Universal Parser: Tự động thích ứng với số lượng đối số khác nhau (2-5 đối số)
        content = content.replace(/\[\[(MATH_EX|READING_EX)\|([^|\]]+)\|([^|\]]+)(?:\|([^|\]]*))?(?:\|([^|\]]*))?(?:\|([^\]]*))?\]\]/g, (match, type, id, display, label, action, answer) => {
            return this.renderMathExercise(id, display, label || "Bài tập", action || "đọc là:", answer);
        });

        // Xử lý [[CONV_EX|id|display|unit|answer]]
        content = content.replace(/\[\[CONV_EX\|([^|\]]+)\|([^|\]]+)\|([^|\]]+)\|([^\]]*)\]\]/g, (match, id, display, unit, answer) => {
            return this.renderUnitConversionExercise(id, display, unit, answer);
        });

        // Xử lý [[CHAT_QUIZ|id|lesson_key]]
        content = content.replace(/\[\[CHAT_QUIZ\|([^|\]]+)\|([^\]]+)\]\]/g, (match, id, lessonKey) => {
            return AIInteraction.renderChatQuiz(id, lessonKey);
        });

        // Xử lý [[GAME|GameName|Options...]]
        // Ví dụ: [[GAME|HeadTiltQuiz|1 + 1 bằng mấy?|2|3|Left]]
        content = content.replace(/\[\[GAME\|([^|]+)\|([^\]]+)\]\]/g, (match, gameName, options) => {
            return `
                <div class="my-6 flex justify-center w-full">
                    <button onclick="GameLibrary.play('${gameName}', '${options.replace(/'/g, "\\'")}')" 
                        class="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-indigo-700 hover:scale-105 shadow-[0_8px_30px_rgb(79,70,229,0.3)]">
                        <span class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
                        <svg class="w-6 h-6 mr-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Khởi động Trò Chơi
                        <div class="absolute inset-0 h-full w-full rounded-xl group-hover:bg-white group-hover:opacity-10 transition-colors pointer-events-none"></div>
                    </button>
                </div>
            `;
        });


        content = content.replace(/<img\b([^>]*?)>/gi, (match, attrs) => {
            let a = attrs || '';
            if (!/loading\s*=/.test(a)) a += ' loading="lazy"';
            if (!/decoding\s*=/.test(a)) a += ' decoding="async"';
            return `<img${a}>`;
        });

        return content;
    }
};

window.UI = UI;
