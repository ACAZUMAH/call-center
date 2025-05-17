import { NumberFormatter } from "@mantine/core";
import React from "react";
import { convertToHighUnit } from "../../helpers/currency";
import { currencySymbol } from "../../constants";

interface Props {
  value: number;
  hideSymbol?: boolean;
  symbol?: string
}

export const CurrencyFormatter: React.FC<Props> = ({ value = 0, hideSymbol, symbol = currencySymbol.GHS }) => {
  return (
    <NumberFormatter
      decimalScale={2}
      thousandSeparator
      fixedDecimalScale
      prefix={hideSymbol ? "" : symbol}
      value={convertToHighUnit(value)}
    />
  );
};
