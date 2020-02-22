type Map = Record<string, string>;

export const parseQueryParam = (_url: string): Map => {
  const url = decodeURIComponent(_url);
  const element = url.split('?');
  const res: Map = {};
  if (element.length !== 2) return res;
  element[1].split('&').forEach((v) => {
    const buf = v.split('=');
    if (buf.length !== 2) {
      res[buf[0]] = '';
      return;
    }
    const key = buf[0];
    const value = buf[1];
    res[key] = value;
  });
  return res;
};
