/**
 * Dashboard Chart Module
 * Handles scorecard distribution chart rendering using Chart.js
 */

let scoreChartInstance = null;

/**
 * Re-renders the score distribution chart.
 * @param {Array} uniqueData 
 * @param {string} targetKey 'avgScore', 'luyenTapScore', 'cungCoScore', or 'scoreExN'
 */
export function renderScoreChart(uniqueData, targetKey = 'avgScore') {
    const ctx = document.getElementById('score-chart');
    if (!ctx || !uniqueData) return;

    const students = uniqueData.filter(d => {
        if (targetKey === 'avgScore') return d.attemptsCount > 0;
        if (targetKey === 'luyenTapScore') return d.luyenTapScore !== undefined;
        if (targetKey === 'cungCoScore') return d.cungCoScore !== null;
        return d.exercises && d.exercises[targetKey] !== undefined;
    });
    
    const counts = { 10: 0, 20: 0, 30: 0, 40: 0, 50: 0, 60: 0, 70: 0, 80: 0, 90: 0, 100: 0 };
    students.forEach(d => {
        let s = 0;
        if (targetKey === 'avgScore') s = d.avgScore;
        else if (targetKey === 'luyenTapScore') s = d.luyenTapScore;
        else if (targetKey === 'cungCoScore') s = d.cungCoScore;
        else s = d.exercises[targetKey];

        let group = Math.ceil(Math.min(100, Math.max(1, s)) / 10) * 10;
        if (s === 0) group = 10;
        counts[group]++;
    });
    
    const data = Object.values(counts);
    const colors = ['#fca5a5', '#f87171', '#ef4444', '#fb923c', '#f97316', '#ea580c', '#86efac', '#4ade80', '#22c55e', '#16a34a'];
    
    if (scoreChartInstance) {
        scoreChartInstance.data.datasets[0].data = data;
        scoreChartInstance.update();
    } else {
        scoreChartInstance = new Chart(ctx, {
            type: 'bar', 
            data: { 
                labels: ['0-10','11-20','21-30','31-40','41-50','51-60','61-70','71-80','81-90','91-100'], 
                datasets: [{ data, backgroundColor: colors, borderRadius: 6 }] 
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false, 
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true, ticks: { precision: 0 } } }
            }
        });
    }
}

/**
 * Resets the chart instance (useful for hot reloads or context switches)
 */
export function resetChart() {
    if (scoreChartInstance) {
        scoreChartInstance.destroy();
        scoreChartInstance = null;
    }
}
