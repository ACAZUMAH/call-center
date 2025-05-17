import currency from "currency.js";

export const convertToHighUnit = (value: number) => {
  return currency(value, { fromCents: true }).value;
};

export const convertToLowerUnit = (value: number) => {
  return currency(value, { fromCents: true }).intValue;
};

export const formatCurrency = (value: number, symbol = "") => {
  return currency(value, { symbol, separator: "," }).format();
};
