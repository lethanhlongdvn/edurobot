// js/components/QuestionBankManager.js

export const QuestionBankManager = {
    data: [],
    isLoaded: false,
    _quizPoolCache: {},

    async init() {
        if (this.isLoaded) return;
        try {
            // Check if we are in the /games/ subdirectory
            const pathPrefix = window.location.pathname.includes('/games/') ? '../' : '';
            const response = await fetch(`${pathPrefix}js/data/math/question_bank.txt`);
            if (response.ok) {
                const text = await response.text();
                this.parseData(text);
                console.log(`[QuestionBank] Loaded ${this.data.length} questions from question_bank.txt`);
            } else {
                console.warn("[QuestionBank] File not found. Creating empty bank.");
                this.data = [];
            }
        } catch (e) {
            console.error("[QuestionBankFailed]", e);
            this.data = [];
        }
        this.isLoaded = true;
    },

    parseData(text) {
        // Strip BOM if present
        const cleanText = text.charCodeAt(0) === 0xFEFF ? text.slice(1) : text;
        const lines = cleanText.split('\n');
        this.data = [];
        
        for (let line of lines) {
            line = line.trim();
            if (!line || line.startsWith('//') || line.startsWith('#') || line.toUpperCase().startsWith('ID')) continue;
            
            const parts = line.split('|').map(p => p.trim());
            if (parts.length < 5) continue; // ID | Period | Level | Q | A
            
            const id = parts[0];
            const pStr = parts[1];
            const period = isNaN(pStr) ? pStr : (parseInt(pStr) || 0);
            const level = parseInt(parts[2]) || 1;
            const q = parts[3];
            const a = parts[4];
            const customDistractors = parts[5] ? parts[5].split(',').map(d => d.trim()).filter(d => d) : [];
            
            this.data.push({ id, period, level, q, a, customDistractors });
        }
    },
    
    generateDistractors(correctAnswer, allCorrectAnswersInSamePeriod) {
        let distractors = new Set();
        
        // Strategy 1: Math permutation if it ends with unit or is pure number
        let numMatch = correctAnswer.match(/^([\d.,]+)\s*(.*)$/);
        // Sometimes it's like "3 phút 10 giây"
        let multiNumMatch = correctAnswer.match(/(\d+)\s*([a-zA-Záàãảạăắằẵẳặâấầẫẩậéèẽẻẹêếềễểệíìĩỉịóòõỏọôốồỗổộơớờỡởợúùũủụưứừữửựýỳỹỷỵđ]+)\s*(\d+)?\s*([a-zA-Záàãảạăắằẵẳặâấầẫẩậéèẽẻẹêếềễểệíìĩỉịóòõỏọôốồỗổộơớờỡởợúùũủụưứừữửựýỳỹỷỵđ]+)?/i);

        if (numMatch && !multiNumMatch) {
            const numStr = numMatch[1].replace(',', '.');
            const num = parseFloat(numStr);
            const unit = numMatch[2] || "";
            if (!isNaN(num)) {
                const variations = [
                    num * 10,
                    num / 10,
                    num + 1,
                    num - 1,
                    num + 10,
                    num - 10,
                    num + 0.5,
                    num - 0.5,
                    parseFloat(numStr.split('').reverse().join('')) // e.g. 45 -> 54
                ].filter(n => n > 0 && n !== num).map(n => {
                    let s = Number.isInteger(n) ? n.toString() : n.toFixed(1).replace('.0', '');
                    return unit ? `${s} ${unit}` : s;
                });
                
                // Shuffle variations
                variations.sort(() => Math.random() - 0.5);
                
                for (let v of variations) {
                    if (v !== correctAnswer) distractors.add(v);
                    if (distractors.size >= 3) break;
                }
            }
        }
        
        if (distractors.size < 3 && multiNumMatch && multiNumMatch[3]) {
            let n1 = parseInt(multiNumMatch[1]);
            let u1 = multiNumMatch[2];
            let n2 = parseInt(multiNumMatch[3]);
            let u2 = multiNumMatch[4] || "";
            
            const v1 = `${n1 + 1} ${u1} ${n2} ${u2}`.trim();
            const v2 = `${n1} ${u1} ${n2 + 10} ${u2}`.trim();
            const v3 = `${n1 - 1 > 0 ? n1 - 1 : n1 + 2} ${u1} ${n2} ${u2}`.trim();
            const v4 = `${n2} ${u1} ${n1} ${u2}`.trim(); // Swap numbers
            
            [v1, v2, v3, v4].forEach(v => {
                if (v !== correctAnswer) distractors.add(v);
            });
        }
        
        // Fallback Strategy: pick random correct answers from other questions in the same period
        let fallbackChoices = [...allCorrectAnswersInSamePeriod].filter(a => a !== correctAnswer && a.length > 0);
        fallbackChoices.sort(() => Math.random() - 0.5);
        
        for (let f of fallbackChoices) {
            if (distractors.size >= 3) break;
            distractors.add(f);
        }
        
        // Ultimate fallback
        while (distractors.size < 3) {
            let rd = Math.floor(Math.random() * 100) + 1;
            if (!distractors.has(rd.toString()) && rd.toString() !== correctAnswer) {
                distractors.add(rd.toString());
            }
        }
        
        return Array.from(distractors).slice(0, 3);
    },

    /**
     * @param {Object} options 
     * @param {number|number[]} options.periods - Ex: 134 or [133, 134]. If omitting, searches entire bank.
     * @param {Object} options.countsPerLevel - Ex: {1: 5, 2: 3, 3: 2} (Level: Count)
     * @param {number} options.totalCount - Fallback if countsPerLevel not specified
     */
    async getQuestions(options = {}) {
        await this.init();
        
        let pool = this.data;
        if (options.periods) {
            const periods = Array.isArray(options.periods) ? options.periods : [options.periods];
            pool = pool.filter(q => periods.includes(q.period));
        }

        let selected = [];
        
        if (options.countsPerLevel) {
            for (let [level, count] of Object.entries(options.countsPerLevel)) {
                let lvlPool = pool.filter(q => q.level == parseInt(level));
                lvlPool.sort(() => Math.random() - 0.5);
                selected = selected.concat(lvlPool.slice(0, count));
            }
        } else {
            let totalCount = options.totalCount || 10;
            let tempPool = [...pool].sort(() => Math.random() - 0.5);
            selected = tempPool.slice(0, totalCount);
        }
        
        const allCorrectInPool = Array.from(new Set(pool.map(q => q.a)));
        
        return selected.map(q => {
            let distractors = [...q.customDistractors];
            if (distractors.length < 3) {
                let autoGens = this.generateDistractors(q.a, allCorrectInPool);
                for (let ag of autoGens) {
                    if (distractors.length >= 3) break;
                    if (!distractors.includes(ag)) distractors.push(ag);
                }
            }
            // Shuffle correct answer into 4 options
            let opts = [q.a, ...distractors].slice(0, 4);
            opts.sort(() => Math.random() - 0.5);
            let corIdx = opts.indexOf(q.a);
            
            return {
                id: q.id,
                period: q.period,
                level: q.level,
                question: q.q,
                options: opts,
                answer: corIdx
            };
        });
    },

    /**
     * Returns quiz pool in the format used by Quiz tab: [{q, options[], a}]
     * where 'a' is the string answer (not index).
     * @param {string|number} period
     * @returns {Promise<Array>}
     */
    async getQuizPool(period) {
        await this.init();
        const key = String(period);

        if (this._quizPoolCache[key]) return this._quizPoolCache[key];

        const pool = this.data.filter(q => String(q.period) === key);
        if (pool.length === 0) return [];

        const result = this._toQuizPool(pool);
        this._quizPoolCache[key] = result;
        return result;
    },

    /**
     * Converts internal data entries to Quiz tab format.
     * Format: {question: string, options: string[], answer: number (index)}
     * This matches the format Quiz.js renderCurrentQuestion() expects.
     * @param {Array} entries - Raw bank entries [{q, a, customDistractors, ...}]
     * @returns {Array}
     */
    _toQuizPool(entries) {
        const allCorrectInPool = Array.from(new Set(entries.map(e => e.a)));
        return entries.map(item => {
            let distractors = [...item.customDistractors];
            if (distractors.length < 3) {
                const autoGens = this.generateDistractors(item.a, allCorrectInPool);
                for (const ag of autoGens) {
                    if (distractors.length >= 3) break;
                    if (!distractors.includes(ag) && ag !== item.a) distractors.push(ag);
                }
            }
            let allOptions = [item.a, ...distractors.filter(d => d !== item.a)].slice(0, 4);
            // Shuffle options
            allOptions.sort(() => Math.random() - 0.5);
            const answerIdx = allOptions.indexOf(item.a);
            return {
                question: item.q,
                options: allOptions,
                answer: answerIdx
            };
        });
    },

    /**
     * Checks if a period has questions in the bank.
     * @param {string|number} period
     * @returns {Promise<boolean>}
     */
    async hasPeriod(period) {
        await this.init();
        return this.data.some(q => String(q.period) === String(period));
    },

    /**
     * Returns count of questions per period.
     * @returns {Promise<Object>} - {111: 15, 112: 12, ...}
     */
    async getPeriodStats() {
        await this.init();
        const stats = {};
        this.data.forEach(q => {
            const key = String(q.period);
            stats[key] = (stats[key] || 0) + 1;
        });
        return stats;
    }
};

window.QuestionBankManager = QuestionBankManager;
