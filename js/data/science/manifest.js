export const scienceManifest = Array.from({ length: 70 }, (_, idx) => {
  const periodNum = idx + 1;
  const period = String(periodNum);
  const padded = period.padStart(3, '0');
  const week = String(Math.ceil(periodNum / 2));
  return {
    id: `science-${period}`,
    period,
    week,
    title: `Bài Khoa học ${period}`,
    topic: 'Khoa học',
    modulePath: `./${period}/index.js`,
    exportName: `lesson${padded}`
  };
});
