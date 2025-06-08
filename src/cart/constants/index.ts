const paymentMethods = {
  CREDIT_CARD: 'credit_card',
  CASH: 'cash',
  MOBILE_MONEY: 'mobile_money',
  BANK_TRANSFER: 'bank_transfer',
}

const orderMethods = {
    PICKUP: 'pickup',
    DELIVERY: 'delivery',
}

const convertToTitleCase = (str: string) => {
  return `${str[0].toUpperCase()}${str
    .slice(1)
    .split("_")
    .join(" ")
    .toLowerCase()}`;
}

const createSelectData = (obj: Object) => {
  return Object.values(obj).map((value) => ({
    label: convertToTitleCase(value),
    value,
  }))
}

export const paymentMethodsSelectData = createSelectData(paymentMethods);
export const orderMethodsSelectData = createSelectData(orderMethods);