const toDayHour = (date: Date): string => `${date.getHours().toString()}時`;
const toMonthDay = (date: Date): string => `${(date.getMonth() + 1).toString()}/${date.getDate().toString()}`;

export enum LabelType {
  HALF_DAY = 0,
  DAY = 1,
  WEEK = 2,
  MONTH = 3,
  YEAR = 5
}

const getPastDay = (ltype: LabelType): Date => {
  const pastDay = new Date();
  switch (ltype) {
    case LabelType.HALF_DAY:
      pastDay.setHours(pastDay.getHours() - 12);
      break;
    case LabelType.DAY:
      pastDay.setDate(pastDay.getDate() - 1);
      break;
    case LabelType.WEEK:
      pastDay.setDate(pastDay.getDate() - 7);
      break;
    case LabelType.MONTH:
      pastDay.setMonth(pastDay.getMonth() - 1);
      break;
    case LabelType.YEAR:
      pastDay.setFullYear(pastDay.getFullYear() - 1);
      break;
    default:
      break;
  }
  return pastDay;
};

export const getLabels = (ltype: LabelType): string[] => {
  const today = new Date();
  const pastDay = getPastDay(ltype);
  const res = [];
  const diff = today.getTime() - pastDay.getTime();
  const cur = diff / 7;

  for (let i = 1; i <= 7; i += 1) {
    res.push(new Date(cur * i + pastDay.getTime()));
  }

  return res.map((v) => {
    if (ltype <= 1) return toDayHour(v);
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
