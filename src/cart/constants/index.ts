import { createSelectData } from "../../helpers";

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

export const paymentMethodsSelectData = createSelectData(paymentMethods);
export const orderMethodsSelectData = createSelectData(orderMethods);