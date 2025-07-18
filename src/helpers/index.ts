// export const calculateItemNumber = (length: number, limit: number, index: number) => {
//   return length > 0 ? index + 1 + (length - limit) : index;
// };

const convertToTitleCase = (str: string) => {
  return `${str[0].toUpperCase()}${str
    .slice(1)
    .split("_")
    .join(" ")
    .toLowerCase()}`;
};

export const createSelectData = (obj: Object) => {
  return Object.values(obj).map((value) => ({
    label: convertToTitleCase(value),
    value,
  }));
};
