
const convertToTitleCase = (str: string) => {
  return `${str[0].toUpperCase()}${str
    .slice(1)
    .split("_")
    .join(" ")
    .toLowerCase()}`;
}

export const createSelectData = (obj: Object) => {
  return Object.values(obj).map((value) => ({
    label: convertToTitleCase(value),
    value,
  }))
}