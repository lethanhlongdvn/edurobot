/**
 * Dashboard Table Module
 * Handles dynamic table rendering and sorting for student results
 */

import { formatTimeTaken } from './utils.js';

let currentSortKey = 'avgScore';
let currentSortOrder = 'desc';

/**
 * Renders the results table body and headers.
 * @param {Object} options 
 */
export function renderTable(dataList, exKeys, options = {}) {
    const { 
        tableId = 'results-table', 
        headerSelector = 'thead tr',
        show120 = false,
        customCols = [], // { key, label, class }
        theme = 'orange', // 'orange' or 'blue'
        onSort = null
    } = options;

    const table = document.getElementById(tableId);
    const tableHeader = document.querySelector(headerSelector);
    if (!table || !tableHeader) return;

    const themeColor = theme === 'orange' ? 'orange' : 'blue';

    // 1. Determine active columns (only show those with data)
    const activeExKeys = exKeys.filter(exKey => dataList.some(d => d.exercises[exKey] !== undefined));
    const hasCungCo = dataList.some(d => d.cungCoScore !== null);
    const hasLuyenTap = dataList.some(d => d.luyenTapScore > 0) || activeExKeys.length > 0;
    const hasTime = dataList.some(d => d.totalTime > 0);
    const hasVideo = show120 && dataList.some(d => d.hasVideo120);

    // 2. Render Header
    let headerHtml = `
        <th class="p-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center">TT</th>
        <th class="p-6 text-xs font-black text-gray-400 uppercase tracking-widest cursor-pointer hover:text-${themeColor}-500" data-sort="studentName">Học sinh ↕</th>
    `;
    
    activeExKeys.forEach(exKey => {
        headerHtml += `<th class="p-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Bài ${exKey.replace('scoreEx','')}</th>`;
    });

    if (hasLuyenTap) {
        headerHtml += `<th class="p-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center cursor-pointer hover:text-${themeColor}-500" data-sort="luyenTapScore">Luyện tập ↕</th>`;
    }
    
    if (hasCungCo) {
        headerHtml += `<th class="p-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center cursor-pointer hover:text-${themeColor}-500" data-sort="cungCoScore">Củng cố ↕</th>`;
    }

    customCols.forEach(col => {
        headerHtml += `<th class="p-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center cursor-pointer hover:text-${themeColor}-500" data-sort="${col.key}">${col.label} ↕</th>`;
    });

    if (hasVideo) {
        headerHtml += `<th class="p-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center">Video 120s</th>`;
    }

    headerHtml += `
        <th class="p-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center cursor-pointer hover:text-${themeColor}-500" data-sort="avgScore">Điểm TB ↕</th>
    `;

    if (hasTime) {
        headerHtml += `<th class="p-6 text-xs font-black text-gray-400 uppercase tracking-widest text-center cursor-pointer hover:text-${themeColor}-500" data-sort="totalTime">Thời gian ↕</th>`;
    }

    tableHeader.innerHTML = headerHtml;

    // Add sort listeners
    tableHeader.querySelectorAll('[data-sort]').forEach(th => {
        th.onclick = () => {
            const key = th.getAttribute('data-sort');
            if (onSort) onSort(key);
        };
    });

    // 3. Render Rows
    let rows = "";
    dataList.forEach((data, index) => {
        const avgClass = data.avgScore >= 80 ? 'text-green-600' : (data.avgScore >= 50 ? 'text-orange-600' : 'text-red-600');
        
        let exCols = "";
        activeExKeys.forEach(ey => {
            const val = data.exercises[ey];
            let cell = '-';
            if (val !== undefined) {
                cell = val >= 100 ? '<span class="text-green-500 text-xl">✅</span>' : '<span class="text-red-500 text-xl">❌</span>';
            }
            exCols += `<td class="p-4 text-center font-black">${cell}</td>`;
        });

        let customColHtml = "";
        customCols.forEach(col => {
            const val = data[col.key];
            const text = val !== null ? val + '%' : '-';
            customColHtml += `<td class="p-4 text-center font-black ${col.class || ''}">${text}</td>`;
        });

        rows += `
            <tr class="hover:bg-${themeColor}-50/30 transition-colors border-b border-gray-100">
                <td class="p-4 text-center text-gray-400 font-black">${index + 1}</td>
                <td class="p-4 font-black text-gray-700">${data.studentName}</td>
                ${exCols}
                ${hasLuyenTap ? `<td class="p-4 text-center bg-${themeColor}-50/10 font-black text-${themeColor}-700">${data.luyenTapScore !== undefined ? data.luyenTapScore + '%' : '-'}</td>` : ''}
                ${hasCungCo ? `<td class="p-4 text-center font-black text-indigo-600">${data.cungCoScore !== null ? data.cungCoScore + '%' : '-'}</td>` : ''}
                ${customColHtml}
                ${hasVideo ? `<td class="p-4 text-center font-black">${data.hasVideo120 ? '<span class="text-blue-500 text-xl">🎥</span>' : '-'}</td>` : ''}
                <td class="p-4 text-center bg-green-50/30 font-black ${avgClass} text-xl">${data.avgScore}%</td>
                ${hasTime ? `<td class="p-4 text-center text-gray-400 font-bold">${formatTimeTaken(data.totalTime)}</td>` : ''}
            </tr>
        `;
    });

    table.innerHTML = rows || `<tr><td colspan="25" class="p-10 text-center text-gray-400 italic">Không có dữ liệu phù hợp với bộ lọc.</td></tr>`;
}

/**
 * Sorts data list by key.
 */
export function sortData(dataList, key) {
    if (currentSortKey === key) {
        currentSortOrder = currentSortOrder === 'desc' ? 'asc' : 'desc';
    } else {
        currentSortKey = key;
        currentSortOrder = 'desc';
    }

    dataList.sort((a, b) => {
        let vA = a[key] ?? -1;
        let vB = b[key] ?? -1;
        if (typeof vA === 'string') {
            return currentSortOrder === 'asc' ? vA.localeCompare(vB) : vB.localeCompare(vA);
        }
        return currentSortOrder === 'asc' ? vA - vB : vB - vA;
    });

    return dataList;
}
