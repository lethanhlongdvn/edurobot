// js/components/games/GameLibrary.js

/**
 * GameLibrary.js
 * Manages the launching and context passing for EduRobot games.
 * Decoupled from the main application to ensure performance stability.
 */
export const GameLibrary = {
    // Internal registry for legacy support (if needed)
    games: {},

    // Mapping of game identifiers to their standalone HTML wrappers
    gameRoutes: {
        'choice_game': 'games/choice_game.html',
        'LuckyWheel': 'games/lucky_wheel.html',
        'tug_of_war': 'games/tug_of_war.html',
        'HeadTiltGame': 'games/head_tilt.html',
        'GroupDivider': 'games/group_divider.html',
        'EduCardScanner': 'games/card_scanner.html'
    },

    registerGame(gameName, gameModule) {
        this.games[gameName] = gameModule;
    },

    /**
     * Primary entry point for launching a game.
     * Prepares lesson context in localStorage and opens the game in a new browser tab.
     */
    play(gameName, options) {
        const route = this.gameRoutes[gameName];
        
        if (!route) {
            console.warn(`[GameLibrary] Standalone route for "${gameName}" not found. Trying legacy modal.`);
            this.playLegacy(gameName, options);
            return;
        }

        // Prepare context for the game tab
        const gameData = {
            name: gameName,
            questions: this.prepareQuestions(options || this.getCurrentQuizPool()),
            isTeacher: (localStorage.getItem('userRole') === 'teacher' || localStorage.getItem('userRole') === 'admin'),
            lessonId: window.currentLessonData?.id || window.currentLessonData?.period || '',
            timestamp: Date.now()
        };

        // Save context to bridge the data to the new tab
        localStorage.setItem('edurobot_current_game_data', JSON.stringify(gameData));

        // Launch game in separate tab
        window.open(route, '_blank');
        console.log(`[GameLibrary] Launched ${gameName} in separate tab via ${route}`);
    },

    /**
     * Gets quiz pool from the current lesson data as fallback when no explicit options provided.
     */
    getCurrentQuizPool() {
        const lesson = window.currentLessonData;
        if (lesson && (lesson.quizPool || lesson.metadata?.quizPool)) {
            return lesson.quizPool || lesson.metadata.quizPool;
        }
        // Fallback: QuestionBankManager cached data (sync, only uses already-loaded data)
        if (window.QuestionBankManager?.isLoaded) {
            const period = lesson?.period || lesson?.id;
            if (period) {
                const cached = window.QuestionBankManager._quizPoolCache[String(period)];
                if (cached) return cached;
                // Try to build from raw data
                const pool = window.QuestionBankManager.data.filter(q =>
                    String(q.period) === String(period)
                );
                if (pool.length > 0) return window.QuestionBankManager._toQuizPool(pool);
            }
        }
        return [];
    },

    /**
     * Legacy modal-based launching (being deprecated).
     */
    playLegacy(gameName, options) {
        if (!this.games[gameName]) {
            console.error(`[GameLibrary] Game "${gameName}" not registered.`);
            return;
        }

        this.renderModal();
        const container = document.getElementById('game-library-content');
        container.innerHTML = '';
        this.games[gameName].start(container, options, () => this.close());
    },

    /**
     * Helper to ensure questions/data are formatted correctly for various game modules.
     */
    prepareQuestions(options) {
        if (!options) return [];
        
        // If options is already an array (passed from internal code), return as is
        if (Array.isArray(options)) return options;
        
        // If options is a string (passed from [[GAME|...]] placeholder), 
        // we might need to parse it if the game expects a specific structure.
        // For now, pass as is and let the game handle it or standardize later.
        return options;
    },

    renderModal() {
        let modal = document.getElementById('game-library-modal');
        if (modal) {
            modal.classList.remove('hidden');
            document.body.appendChild(modal);
            return;
        }

        modal = document.createElement('div');
        modal.id = 'game-library-modal';
        modal.className = `fixed inset-0 z-[2147483647] bg-white flex flex-col transition-opacity duration-300 pointer-events-auto`;
        
        modal.innerHTML = `
            <div class="relative w-screen h-screen bg-white flex flex-col overflow-hidden">
                <div class="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-[60] bg-gradient-to-b from-black/50 to-transparent">
                    <div class="text-white font-bold text-xl drop-shadow-md">🏆 Kho Trò Chơi Edurobot</div>
                    <button id="game-library-close" class="bg-red-500 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div id="game-library-content" class="flex-1 w-full h-full relative overflow-hidden bg-gray-50 flex flex-col items-center justify-center">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.getElementById('game-library-close').addEventListener('click', () => this.close());
    },

    close() {
        const modal = document.getElementById('game-library-modal');
        if (modal) {
            Object.values(this.games).forEach(game => {
                if (typeof game.cleanup === 'function') game.cleanup();
            });
            modal.classList.add('hidden');
            document.getElementById('game-library-content').innerHTML = '';
        }
    },

    async openMatchingGame() {
        if (window.QuestionBankManager) {
            await window.QuestionBankManager.init();
        }

        const lesson = window.currentLessonData;
        const subject = window.router?.currentSubject || 'math';
        const allLessons = window.lessons ? window.lessons[subject] : [];
        
        let prevQuiz = null;
        let currentQuiz = this.getCurrentQuizPool();

        if (lesson && allLessons.length > 0) {
            const currentIndex = allLessons.findIndex(l => String(l.period) === String(lesson.period));
            if (currentIndex > 0) {
                const prevLessonMeta = allLessons[currentIndex - 1];
                const cache = window.__lessonCache;
                const cachedPrev = cache ? cache.get(prevLessonMeta.id || prevLessonMeta.period) : null;
                if (cachedPrev && cachedPrev.quizPool) {
                    prevQuiz = cachedPrev.quizPool;
                } else if (window.QuestionBankManager) {
                    // Try to get from bank for prev lesson
                    prevQuiz = await window.QuestionBankManager.getQuizPool(prevLessonMeta.period);
                }
            }
        }

        if (currentQuiz && currentQuiz.length > 0) {
            localStorage.setItem('edurobot_matching_current', JSON.stringify(currentQuiz));
        } else {
            localStorage.removeItem('edurobot_matching_current');
        }
        
        if (prevQuiz && prevQuiz.length > 0) {
            localStorage.setItem('edurobot_matching_prev', JSON.stringify(prevQuiz));
        } else {
            localStorage.removeItem('edurobot_matching_prev');
        }

        localStorage.setItem('edurobot_matching_title', lesson?.title || 'Trò chơi ghép đôi');
        localStorage.setItem('edurobot_matching_lesson_id', lesson?.id || lesson?.period || '');
        
        window.open('games/GameGhepDoi/math_matching_game.html?source=lesson', '_blank');
    }
};

window.GameLibrary = GameLibrary;
