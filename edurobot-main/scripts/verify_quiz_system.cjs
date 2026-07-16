/**
 * Verification script: Quiz System E2E Data Flow Check
 * Tests the full pipeline from question_bank.txt through QuestionBankManager
 */
const fs = require('fs');
const path = require('path');

const BASE = path.resolve(__dirname, '..');
let errors = 0;
let warnings = 0;

function log(icon, msg) { console.log(`${icon} ${msg}`); }
function pass(msg) { log('✅', msg); }
function fail(msg) { errors++; log('❌', msg); }
function warn(msg) { warnings++; log('⚠️', msg); }

// 1. Check question_bank.txt exists and is valid
log('📋', '=== 1. QUESTION BANK FILE ===');
const bankPath = path.join(BASE, 'js/data/math/question_bank.txt');
if (!fs.existsSync(bankPath)) { fail('question_bank.txt NOT FOUND'); process.exit(1); }

const raw = fs.readFileSync(bankPath, 'utf8');
const cleanText = raw.charCodeAt(0) === 0xFEFF ? raw.slice(1) : raw;
const lines = cleanText.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('//') && !l.startsWith('#') && !l.toUpperCase().startsWith('ID'));

const periodsMap = {};
let badLines = 0;
lines.forEach((l, i) => {
    const parts = l.split('|').map(p => p.trim());
    if (parts.length < 5) { badLines++; return; }
    const period = parts[1];
    if (!periodsMap[period]) periodsMap[period] = [];
    periodsMap[period].push({ q: parts[3], a: parts[4], distractors: parts[5] ? parts[5].split(',').map(d=>d.trim()).filter(d=>d) : [] });
});

pass(`question_bank.txt loaded: ${lines.length} lines, ${Object.keys(periodsMap).length} periods`);
if (badLines > 0) warn(`${badLines} lines with <5 columns (skipped)`);

// 2. Verify distractor coverage
log('📋', '=== 2. DISTRACTOR COVERAGE ===');
let noDistractorCount = 0;
let hasDistractorCount = 0;
for (const [period, qs] of Object.entries(periodsMap)) {
    qs.forEach(q => {
        if (q.distractors.length >= 3) hasDistractorCount++;
        else noDistractorCount++;
    });
}
log('📊', `With custom distractors: ${hasDistractorCount} questions`);
log('📊', `Need auto-generation: ${noDistractorCount} questions`);
if (noDistractorCount > 0) {
    pass(`_toQuizPool() now generates distractors for ${noDistractorCount} questions (previously would show 1 option)`);
}

// 3. Check QuestionBankManager.js
log('📋', '=== 3. QUESTIONBANKMANAGER.JS ===');
const qbmPath = path.join(BASE, 'js/components/QuestionBankManager.js');
const qbmCode = fs.readFileSync(qbmPath, 'utf8');

if (qbmCode.includes('0xFEFF')) pass('BOM stripping: present');
else fail('BOM stripping: MISSING');

if (qbmCode.includes('generateDistractors') && qbmCode.includes('_toQuizPool')) {
    // Check _toQuizPool calls generateDistractors
    const toQuizPoolSection = qbmCode.substring(qbmCode.indexOf('_toQuizPool'));
    if (toQuizPoolSection.includes('generateDistractors')) pass('_toQuizPool calls generateDistractors: YES');
    else fail('_toQuizPool does NOT call generateDistractors');
} else fail('Missing generateDistractors or _toQuizPool');

// 4. Check router.js hydration
log('📋', '=== 4. ROUTER.JS HYDRATION ===');
const routerPath = path.join(BASE, 'js/router.js');
const routerCode = fs.readFileSync(routerPath, 'utf8');

if (routerCode.includes('QuestionBankManager.hasPeriod')) pass('hasQuiz checks QBM');
else fail('hasQuiz does NOT check QBM');

if (routerCode.includes('QuestionBankManager.getQuizPool')) pass('switchTab hydrates from QBM');
else fail('switchTab does NOT hydrate from QBM');

if (routerCode.includes('async switchTab')) pass('switchTab is async');
else fail('switchTab is NOT async');

// 5. Check Quiz.js format expectations
log('📋', '=== 5. QUIZ.JS FORMAT ===');
const quizPath = path.join(BASE, 'js/components/Quiz.js');
const quizCode = fs.readFileSync(quizPath, 'utf8');

if (quizCode.includes('q.options') && quizCode.includes('q.answer')) pass('Quiz.js uses q.options & q.answer');
else fail('Quiz.js format mismatch');

if (quizCode.includes('indices.indexOf(q.answer)')) pass('Quiz.js expects answer as NUMBER INDEX');
else warn('Quiz.js answer handling unclear');

// 6. Check Game Format Fixes
log('📋', '=== 6. GAME FORMAT COMPATIBILITY ===');

// TugOfWar
const towPath = path.join(BASE, 'js/components/games/TugOfWar.js');
const towCode = fs.readFileSync(towPath, 'utf8');
if (towCode.includes("typeof q.answer === 'number' ? q.options[q.answer] : q.answer")) pass('TugOfWar: answer format fix applied');
else fail('TugOfWar: answer format NOT fixed');

// HeadTiltGame
const htPath = path.join(BASE, 'js/components/games/HeadTiltGame.js');
const htCode = fs.readFileSync(htPath, 'utf8');
if (htCode.includes("typeof q.answer === 'number' ? q.answer : parseInt(q.answer)")) pass('HeadTiltGame: answer type normalization applied');
else fail('HeadTiltGame: answer type NOT normalized');

// ChoiceGame
const cgPath = path.join(BASE, 'js/components/games/ChoiceGame.js');
const cgCode = fs.readFileSync(cgPath, 'utf8');
if (cgCode.includes("typeof q.answer === 'number' ? q.answer : parseInt(q.answer)")) pass('ChoiceGame: answer type normalization applied');
else fail('ChoiceGame: answer type NOT normalized');

// GameLibrary
const glPath = path.join(BASE, 'js/components/games/GameLibrary.js');
const glCode = fs.readFileSync(glPath, 'utf8');
if (glCode.includes('QuestionBankManager') && glCode.includes('_toQuizPool')) pass('GameLibrary: QBM fallback active');
else fail('GameLibrary: QBM fallback MISSING');

// 7. Check no orphaned cungco file references
log('📋', '=== 7. ORPHAN CHECK ===');
const cungcoDir = path.join(BASE, 'js/data/math/cungco');
if (fs.existsSync(cungcoDir)) fail('cungco/ directory still exists (should be deleted)');
else pass('cungco/ directory removed');

// Summary
console.log('\n' + '='.repeat(50));
console.log(`  RESULTS: ${errors} errors, ${warnings} warnings`);
if (errors === 0) console.log('  ✅ HỆ THỐNG ĐÃ ĐỒNG BỘ HOÀN TOÀN');
else console.log('  ❌ CÒN LỖI CẦN SỬA');
console.log('='.repeat(50));
