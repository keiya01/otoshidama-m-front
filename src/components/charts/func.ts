const toDayHour = (date: Date): string => `
  ${date.getHours().toString()}時
`;
const toMonthDay = (date: Date): string => `
  ${(date.getMonth() + 1).toString()}/${date.getDate().toString()}
`;
const toYearMonthDay = (date: Date): string => `
  ${date.getFullYear().toString()}/${(date.getMonth() + 1).toString()}/${date.getDate().toString()}
`;

export const getLabels = (startDate: Date, endDate: Date, level: number): string[] => {
  const res = [];
  const newStartDate = new Date(startDate);
  if (startDate.getDate() === endDate.getDate()) {
    newStartDate.setHours(endDate.getHours() - 6);
    if (endDate.getHours() < 6) {
      newStartDate.setDate(endDate.getDate() - 1);
    }
  } else {
    const dateDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / 86400000 / (level - 1));
    newStartDate.setDate(endDate.getDate() - dateDiff * (level - 1));
  }

  const diff = endDate.getTime() - newStartDate.getTime();
  const cur = Math.ceil(diff / (level - 1));

  for (let i = 0; i < level; i += 1) {
    const d = new Date(newStartDate.getTime() + cur * i);
    res.push(d);
  }

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
