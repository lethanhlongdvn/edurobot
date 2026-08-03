/**
 * Exercise Utilities — Shared answer checking library
 * ====================================================
 * Giảm boilerplate code trong lesson files.
 * 
 * Usage:
 *   // Simple check + feedback + submit
 *   ExerciseUtils.checkAndSubmit({
 *       'input-id-1': '576',
 *       'input-id-2': '864'
 *   }, {
 *       taskName: 'Tiết 120 - Bài 1',
 *       guidance: 'Gợi ý không lộ đáp án...',
 *       solution: 'Lời giải chi tiết...',
 *       btnId: 'btn-check-120-1'
 *   });
 */
window.ExerciseUtils = {

    /**
     * Check multiple fill-in-blank answers from DOM inputs
     * @param {Object} answerMap - { inputId: expectedAnswer | [acceptedAnswers], ... }
     * @param {Object} options - { normalize: boolean, commaAsDot: boolean }
     * @returns {{ correct: number, total: number, score: number, studentAnswers: Object, isCorrect: boolean }}
     */
    checkAnswers(answerMap, options = {}) {
        const { normalize = false, commaAsDot = false } = options;
        let correct = 0;
        const total = Object.keys(answerMap).length;
        const studentAnswers = {};

        for (const [id, expected] of Object.entries(answerMap)) {
            const el = document.getElementById(id);
            let value = el ? el.value.trim() : '';

            // Optional normalizations
            if (commaAsDot) value = value.replace(',', '.');
            if (normalize) value = value.replace(/\s/g, '').toLowerCase();

            studentAnswers[id] = value;

            // Support single string or array of accepted answers
            const expectedValues = Array.isArray(expected) ? expected : [expected];
            const isMatch = expectedValues.some(exp => {
                let expVal = String(exp);
                if (commaAsDot) expVal = expVal.replace(',', '.');
                if (normalize) expVal = expVal.replace(/\s/g, '').toLowerCase();
                return value === expVal;
            });

            if (isMatch) {
                correct++;
                if (el) {
                    el.classList.remove('border-red-500', 'bg-red-50');
                    el.classList.add('border-green-500', 'bg-green-50');
                }
            } else {
                if (el) {
                    el.classList.remove('border-green-500', 'bg-green-50');
                    el.classList.add('border-red-500', 'bg-red-50');
                }
            }
        }

        const score = total > 0 ? Math.round((correct / total) * 100) : 0;
        return { correct, total, score, studentAnswers, isCorrect: correct === total };
    },

    /**
     * Run checkAnswers + show feedback + submit to Firestore
     * All-in-one helper for standard exercises
     * @param {Object} answerMap - { inputId: expectedAnswer, ... }
     * @param {Object} options - { taskName, guidance, solution, btnId, commaAsDot, normalize }
     * @returns {{ correct, total, score, studentAnswers, isCorrect }}
     */
    checkAndSubmit(answerMap, options = {}) {
        const { taskName, guidance = '', solution = '', btnId = '', commaAsDot = false, normalize = false } = options;
        const result = this.checkAnswers(answerMap, { commaAsDot, normalize });

        // Format student answers for feedback display
        const studentStr = Object.values(result.studentAnswers)
            .map(v => v || '(trống)')
            .join(', ');
        const rightStr = Object.values(answerMap)
            .map(v => Array.isArray(v) ? v[0] : v)
            .join(', ');

        // Show feedback modal
        if (typeof window.showMathFeedback === 'function') {
            window.showMathFeedback(result.isCorrect, rightStr, studentStr, guidance, solution);
        }

        // Submit to Firestore
        if (typeof window.submitMathLesson === 'function') {
            window.submitMathLesson(taskName, result.score, btnId, 0, result.total, result.correct);
        }

        return result;
    },

    /**
     * Reset input styles (clear green/red borders)
     * @param {string[]} inputIds - Array of input element IDs
     */
    resetInputStyles(inputIds) {
        for (const id of inputIds) {
            const el = document.getElementById(id);
            if (el) {
                el.classList.remove('border-green-500', 'bg-green-50', 'border-red-500', 'bg-red-50');
            }
        }
    }
};
