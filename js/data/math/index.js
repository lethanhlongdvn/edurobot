import { lesson1 } from './1/index.js';
import { lesson2 } from './2/index.js';
import { lesson3 } from './3/index.js';
import { lesson4 } from './4/index.js';
import { lesson5 } from './5/index.js';
import { lesson6 } from './6/index.js';
import { lesson7 } from './7/index.js';
import { lesson8 } from './8/index.js';
import { lesson9 } from './9/index.js';
import { lesson10 } from './10/index.js';
import { lesson11 } from './11/index.js';
import { lesson12 } from './12/index.js';
import { lesson13 } from './13/index.js';
import { lesson14 } from './14/index.js';
import { lesson15 } from './15/index.js';
import { lesson16 } from './16/index.js';
import { lesson17 } from './17/index.js';
import { lesson26 } from './26/index.js';
import { lesson42 } from './42/index.js';
import { lesson45 } from './45/index.js';
import { lesson27 } from './27/index.js';
import { lesson28 } from './28/index.js';
import { lesson29 } from './29/index.js';
import { lesson30 } from './30/index.js';
import { lesson111 } from './111/index.js';
import { lesson112 } from './112/index.js';
import { lesson113 } from './113/index.js';
import { lesson114 } from './114/index.js';
import { lesson115 } from './115/index.js';
import { lesson116 } from './116/index.js';
import { lesson117 } from './117/index.js';
import { lesson118 } from './118/index.js';
import { lesson119 } from './119/index.js';
import { lesson120 } from './120/index.js';
import { lesson120B } from './120B/index.js';
import { lesson120C } from './120C/index.js';
import { lesson121 } from './121/index.js';
import { lesson122 } from './122/index.js';
import { lesson123 } from './123/index.js';
import { lesson124 } from './124/index.js';
import { lesson125 } from './125/index.js';
import { lesson126 } from './126/index.js';
import { lesson127 } from './127/index.js';
import { lesson128 } from './128/index.js';
import { lesson129 } from './129/index.js';
import { lesson130 } from './130/index.js';
import { lesson131 } from './131/index.js';
import { lesson132 } from './132/index.js';
import { lesson133 } from './133/index.js';
import { lesson134 } from './134/index.js';
import { lesson135 } from './135/index.js';
import { lesson136 } from './136/index.js';
import { lesson137 } from './137/index.js';
import { lesson138 } from './138/index.js';
import { lesson139 } from './139/index.js';
import { lesson140 } from './140/index.js';
import { lesson140B } from './140B/index.js';
import { lesson140C } from './140C/index.js';
import { lesson141 } from './141/index.js';
import { lesson142 } from './142/index.js';
import { lesson143 } from './143/index.js';
import { lesson144 } from './144/index.js';
import { lesson145 } from './145/index.js';
import { lesson146 } from './146/index.js';
import { lesson147 } from './147/index.js';
import { lesson148 } from './148/index.js';
import { lesson149 } from './149/index.js';
import { lesson150 } from './150/index.js';
import { lesson151 } from './151/index.js';
import { lesson152 } from './152/index.js';
import { lesson153 } from './153/index.js';
import { lesson154 } from './155/index.js';
import { lesson155 } from './155/index.js';
import { lesson156 } from './156/index.js';
import { lesson157 } from './157/index.js';
import { lesson158 } from './158/index.js';
import { lesson159 } from './159/index.js';
import { lesson160 } from './160/index.js';
import { lesson161 } from './161/index.js';
import { lesson101 } from './101/index.js';
import { lesson103 } from './103/index.js';
import { lesson106 } from './106/index.js';
import { lesson107 } from './107/index.js';
import { lesson110 } from './110/index.js';
import { lessonDemo } from '../demo_interactions.js';
import { lesson56 } from './56/index.js';
import { lesson61 } from './61/index.js';
import { lesson62 } from './62/index.js';

import { lessonTemplate } from './standard_template/index.js';
import { placeholderLessons } from './placeholders.js';

const activeLessons = [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8,
    lesson9,
    lesson10,
    lesson11,
    lesson12,
    lesson13,
    lesson14,
    lesson15,
    lesson16,
    lesson17,
    lesson26,
    lesson42,
    lesson45,
    lesson27,
    lesson28,
    lesson29,
    lesson30,
    lesson56,
    lesson61,
    lesson62,
    lesson111,
    lesson112,
    lesson113,
    lesson114,
    lesson115,
    lesson116,
    lesson117,
    lesson118,
    lesson119,
    lesson120,
    lesson120B,
    lesson120C,
    lesson121,
    lesson122,
    lesson123,
    lesson124,
    lesson125,
    lesson126,
    lesson127,
    lesson128,
    lesson129,
    lesson130,
    lesson131,
    lesson132,
    lesson133,
    lesson134,
    lesson135,
    lesson136,
    lesson137,
    lesson138,
    lesson139,
    lesson140,
    lesson140B,
    lesson140C,
    lesson141,
    lesson142,
    lesson143,
    lesson144,
    lesson145,
    lesson146,
    lesson147,
    lesson148,
    lesson149,
    lesson150,
    lesson151,
    lesson152,
    lesson153,
    lesson154,
    lesson155,
    lesson156,
    lesson157,
    lesson158,
    lesson159,
    lesson160,
    lesson161,
    lesson101,
    lesson103,
    lesson106,
    lesson107,
    lesson110,
    lessonDemo
];

const activePeriods = activeLessons.map(l => l.period);

export const mathData = [
    ...activeLessons,
    ...placeholderLessons.filter(p => !activePeriods.includes(p.period)),
    lessonTemplate
].sort((a, b) => {
    // Attempt to sort by period (numerical value)
    const pA = parseInt(a.period);
    const pB = parseInt(b.period);
    if (!isNaN(pA) && !isNaN(pB)) {
        return pA - pB;
    }
    // Put non-numerical periods (like TEMPLATE) at the end
    if (isNaN(pA) && isNaN(pB)) return 0;
    if (isNaN(pA)) return 1;
    return -1;
});
