const toDayHour = (date: Date): string => `
  ${date.getHours().toString()}時
`;

const toMonthDay = (date: Date): string => `
  ${(date.getMonth() + 1).toString()}/${date.getDate().toString()}
`;

const toYearMonthDay = (date: Date): string => `
  ${date.getFullYear().toString()}/${(date.getMonth() + 1).toString()}/${date.getDate().toString()}
`;

const handleSameDate = (startDate: Date, endDate: Date) => {
  startDate.setHours(endDate.getHours() - 6);
  if (endDate.getHours() < 6) {
    startDate.setDate(endDate.getDate() - 1);
  }
};

const dateSection = (
  startDate: Date,
  endDate: Date,
  level: number,
) => Math.ceil((endDate.getDate() - startDate.getDate()) / (level - 1));

const handleDifferentDate = (startDate: Date, endDate: Date, level: number) => {
  const dateDiff = dateSection(startDate, endDate, level);
  startDate.setDate(endDate.getDate() - dateDiff * (level - 1));
};

export const getLabels = (
  startDate: Date,
  endDate: Date,
  level: number,
): string[] => {
  const newStartDate = new Date(startDate);
  if (startDate.getDate() === endDate.getDate()) handleSameDate(newStartDate, endDate);
  else handleDifferentDate(newStartDate, endDate, level);

  const diff = endDate.getTime() - newStartDate.getTime();
  const cur = Math.ceil(diff / (level - 1));
  const res = Array(level)
    .fill(null)
    .map((v, i) => new Date(newStartDate.getTime() + cur * i));

  return res.map((v) => {
    if (newStartDate.getDate() === endDate.getDate()) return toDayHour(v);
    if (newStartDate.getFullYear() !== endDate.getFullYear()) return toYearMonthDay(v);
    return toMonthDay(v);
  });
};

export const getOptions = () => ({
  title: {
    display: true,
  },
  hover: {
    mode: 'label',
  },
  animation: {
    duration: 1000,
    easing: 'easeOutExpo',
  },
});
