import { ChartData } from 'react-chartjs-2';

// To string functions.
const toStringDayHour = (date: Date): string => `
  ${date.getHours().toString()}時
`;

const toStringMonthDay = (date: Date): string => `
  ${(date.getMonth() + 1).toString()}/${date.getDate().toString()}
`;

const toStringYearMonthDay = (date: Date): string => `
  ${date.getFullYear().toString()}/${(date.getMonth() + 1).toString()}/${date.getDate().toString()}
`;


// Handle chart labels
export type GetLabelsArguments = { startDate: Date; endDate: Date; margin: number };

const handleSameDate = (args: GetLabelsArguments) => {
  args.startDate.setHours(args.endDate.getHours() - (args.margin - 1));
  if (args.endDate.getHours() < 6) {
    args.startDate.setDate(args.endDate.getDate() - 1);
  }
};

const dateSection = (
  args: GetLabelsArguments,
) => Math.ceil((args.endDate.getDate() - args.startDate.getDate()) / (args.margin - 1));

const handleDifferentDate = (args: GetLabelsArguments) => {
  const dateDiff = dateSection(args);
  args.startDate.setDate(args.endDate.getDate() - dateDiff * (args.margin - 1));
};

export const getLabels = (args: GetLabelsArguments): string[] => {
  const { startDate, endDate, margin } = args;
  const newStartDate = new Date(startDate);
  const newArgs = {
    startDate: newStartDate,
    endDate,
    margin,
  };

  if (startDate.getDate() === endDate.getDate()) handleSameDate(newArgs);
  else handleDifferentDate(newArgs);

  const diff = endDate.getTime() - newStartDate.getTime();
  const cur = Math.ceil(diff / (margin - 1));
  const res = Array(margin)
    .fill(null)
    .map((v, i) => new Date(newStartDate.getTime() + cur * i));

  return res.map((v) => {
    if (newStartDate.getDate() === endDate.getDate()) return toStringDayHour(v);
    if (newStartDate.getFullYear() !== endDate.getFullYear()) return toStringYearMonthDay(v);
    return toStringMonthDay(v);
  });
};


// Handle chart options.
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


// Handle chart data.
type BaseDataType = (args: BaseDataArguments) => object;

interface BaseDataArguments {
  data: number[];
  label: string;
  color: string;
}

export const lineBaseData = (args: BaseDataArguments): object => {
  const {
    data, label, color,
  } = args;
  return {
    label,
    fill: false,
    lineTension: 0.01,
    backgroundColor: '#fff',
    borderColor: color,
    pointBorderColor: color,
    pointHoverBorderColor: '#fff',
    pointBackgroundColor: '#fff',
    pointHoverBackgroundColor: color,
    pointBorderWidth: 7,
    pointHoverBorderWidth: 2,
    pointRadius: 2,
    pointHoverRadius: 5,
    pointHitRadius: 12,
    data,
  };
};

export const barBaseData = (args: BaseDataArguments): object => {
  const {
    data, label, color,
  } = args;
  return {
    label,
    backgroundColor: color,
    borderColor: color,
    borderWidth: 1,
    data,
  };
};

type ChartDataType = { datasets: object[]; labels: string[] };

export const getChartData = (
  data: number[][],
  getLabelsArgs: GetLabelsArguments,
  baseData: BaseDataType,
): ChartData<ChartDataType> => ({
  datasets: [
    baseData({
      data: data[0],
      label: 'お気に入り',
      color: 'red',
    }),
    baseData({
      data: data[1],
      label: 'リツイート',
      color: 'yellowgreen',
    }),
  ],
  labels: getLabels(getLabelsArgs),
});
