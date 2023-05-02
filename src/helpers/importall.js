export const importAll = (r) => {
  return r.keys().map((key) => r(key).default.src);
};
