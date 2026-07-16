export const historyManifest = Array.from({ length: 70 }, (_, idx) => {
  const periodNum = idx + 1;
  const period = String(periodNum);
  const padded = period.padStart(3, '0');
  const week = String(Math.ceil(periodNum / 2));
  return {
    id: `history-${period}`,
    period,
    week,
    title: `Bài Lịch sử - Địa lý ${period}`,
    topic: 'Lịch sử - Địa lý',
    modulePath: `./${period}/index.js`,
    exportName: `lesson${padded}`
  };
});
