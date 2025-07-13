/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  Upload: { input: any; output: any; }
  aDeviceToken_String_NotNull_minLength_10: { input: any; output: any; }
  branchContact_String_NotNull_minLength_9_maxLength_13: { input: any; output: any; }
  day_Int_minLength_1_maxLength_31: { input: any; output: any; }
  description_String_NotNull_minLength_3_maxLength_556: { input: any; output: any; }
  deviceNotificationToken_String_NotNull_minLength_10: { input: any; output: any; }
  deviceToken_String_NotNull_minLength_9_maxLength_256: { input: any; output: any; }
  displayName_String_NotNull_minLength_2_maxLength_256: { input: any; output: any; }
  email_String_minLength_3_maxLength_256: { input: any; output: any; }
  momoNumber_String_NotNull_minLength_9_maxLength_13: { input: any; output: any; }
  momoNumber_String_minLength_10_maxLength_14: { input: any; output: any; }
  month_Int_minLength_1_maxLength_12: { input: any; output: any; }
  name_String_NotNull_minLength_2_maxLength_256: { input: any; output: any; }
  otp_Int_NotNull_minLength_4_maxLength_4: { input: any; output: any; }
  otp_Int_minLength_4_maxLength_4: { input: any; output: any; }
  password_String_NotNull_minLength_6_maxLength_256: { input: any; output: any; }
  phoneNumber_String_NotNull_minLength_9_maxLength_13: { input: any; output: any; }
  phoneNumber_String_minLength_9_maxLength_13: { input: any; output: any; }
  quantity_Int_NotNull_minLength_1_maxLength_256: { input: any; output: any; }
  ratingNumber_Int_NotNull_minLength_1_maxLength_5: { input: any; output: any; }
  rating_Int_minLength_1_maxLength_5: { input: any; output: any; }
  region_String_minLength_2_maxLength_256: { input: any; output: any; }
  username_String_NotNull_minLength_3_maxLength_256: { input: any; output: any; }
  year_Int_minLength_1900: { input: any; output: any; }
};

export type AcceptOrderInput = {
  orderId: Scalars['ID']['input'];
  salesPersonPhoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type AccountDetailsInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  ghanaCardNumber?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  licenseNumber?: InputMaybe<Scalars['String']['input']>;
  licensePlate?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type AdminGetAProductResponse = {
  __typename?: 'AdminGetAProductResponse';
  data?: Maybe<ProductType2>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type AdminGetRiderTotalWalletInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  cashoutRequestId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  customerOrderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  notIntransactionType?: InputMaybe<Array<InputMaybe<WalletTransactionType>>>;
  paymentType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  riderId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionType?: InputMaybe<Array<InputMaybe<WalletTransactionType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type AdministratorInput = {
  adminType?: InputMaybe<EnumAdminType>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<EnumOrderOf>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AdministratorLoginData = {
  __typename?: 'AdministratorLoginData';
  jwt: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  userDetails?: Maybe<AdministratorType>;
};

export type AdministratorType = {
  __typename?: 'AdministratorType';
  _id?: Maybe<Scalars['ID']['output']>;
  adminType?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Maybe<Role>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type AllAdministratorPagination = {
  __typename?: 'AllAdministratorPagination';
  administratorList?: Maybe<Array<Maybe<AdministratorType>>>;
  nextCursor?: Maybe<AdministratorType>;
};

export type AllBranchesPagination = {
  __typename?: 'AllBranchesPagination';
  branchList?: Maybe<Array<Maybe<BranchType>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<BranchType>;
};

export type AllCallCenterAgentDeliveryInputType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  callCenterAgentId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryFee?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  deliveryType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  excludeStatus?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderCode?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  riderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type AllCallCenterAgentDeliveryPaginationType = {
  __typename?: 'AllCallCenterAgentDeliveryPaginationType';
  callCenterAgentDeliveryList?: Maybe<Array<Maybe<CallCenterAgentDeliveryType>>>;
  nextCursor?: Maybe<CallCenterAgentDeliveryType>;
};

export type AllCallCenterAgentOrderCursorType = {
  __typename?: 'AllCallCenterAgentOrderCursorType';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<CallCenterAgentOrderType>;
  orderList?: Maybe<Array<Maybe<CallCenterAgentOrderType>>>;
};

export type AllCallCenterAgentPagination = {
  __typename?: 'AllCallCenterAgentPagination';
  callCenterAgentsList?: Maybe<Array<Maybe<CallCenterAgentDataType>>>;
  nextCursor?: Maybe<CallCenterAgentDataType>;
};

export type AllCustomerOrderCursorType = {
  __typename?: 'AllCustomerOrderCursorType';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<CustomerOrderType>;
  orderList?: Maybe<Array<Maybe<CustomerOrderType>>>;
};

export type AllCustomerPointsPaginationType = {
  __typename?: 'AllCustomerPointsPaginationType';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<CustomerPointType2>;
  pointsList?: Maybe<Array<Maybe<CustomerPointType2>>>;
};

export type AllCustomersPagination = {
  __typename?: 'AllCustomersPagination';
  customerList?: Maybe<Array<Maybe<CustomerDataType2>>>;
  nextCursor?: Maybe<CustomerDataType>;
};

export type AllDeliveryPaginationType = {
  __typename?: 'AllDeliveryPaginationType';
  deliveryList?: Maybe<Array<Maybe<RiderDeliveryType>>>;
  nextCursor?: Maybe<RiderDeliveryType>;
};

export enum AllPlatformType {
  CallCenter = 'CALL_CENTER',
  MobileApp = 'MOBILE_APP',
  ScanToOrder = 'SCAN_TO_ORDER',
  Self = 'SELF',
  Web = 'WEB'
}

export type AllProductsPagination = {
  __typename?: 'AllProductsPagination';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<ProductType2>;
  productList?: Maybe<Array<Maybe<ProductType2>>>;
};

export type AllRiderSendMoneyByRiderInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  callCenterAgentDeliveryId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type AllRiderSendMoneyInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  callCenterAgentDeliveryId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  riderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type AllRidersPagination = {
  __typename?: 'AllRidersPagination';
  nextCursor?: Maybe<RiderType>;
  ridersList?: Maybe<Array<Maybe<RiderType>>>;
};

export type AllSalesPersonPagination = {
  __typename?: 'AllSalesPersonPagination';
  nextCursor?: Maybe<SalesPersonDataType>;
  salesPersonsList?: Maybe<Array<Maybe<SalesPersonDataType>>>;
};

export type AllSearchHistoryInputType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  megSearch?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  patternText?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SearchHistoryEnum>;
  text?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type AppSettingsInput = {
  appEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  branchId?: InputMaybe<Scalars['String']['input']>;
  brandInfo?: InputMaybe<BrandInfoInput>;
  cashOrderLimit?: InputMaybe<Scalars['Int']['input']>;
  flashSalesGroups?: InputMaybe<Array<InputMaybe<FlashSalesInput>>>;
  flashSalesTitle?: InputMaybe<Scalars['String']['input']>;
  freeStakes?: InputMaybe<Scalars['Int']['input']>;
  highSellingGroups?: InputMaybe<Array<InputMaybe<HighSellingGroupInput>>>;
  paymentMethod?: InputMaybe<Array<InputMaybe<PaymentMethodInput>>>;
  permissions?: InputMaybe<PermissionsInput>;
  selfEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  serviceMaxFee?: InputMaybe<Scalars['Int']['input']>;
  servicePercentage?: InputMaybe<Scalars['Int']['input']>;
  webEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AppSettingsType = {
  __typename?: 'AppSettingsType';
  BrandInfo?: Maybe<BrandInfo>;
  appEnabled?: Maybe<Scalars['Boolean']['output']>;
  brandId?: Maybe<Scalars['String']['output']>;
  cashOrderLimit?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  deliverySettings?: Maybe<DeliverySettings>;
  flashSalesGroups?: Maybe<Array<Maybe<HighSellingGroupsType>>>;
  flashSalesTitle?: Maybe<Scalars['String']['output']>;
  freeStakes?: Maybe<Scalars['Int']['output']>;
  highSellingGroups?: Maybe<Array<Maybe<HighSellingGroupsType>>>;
  paymentMethod?: Maybe<Array<Maybe<PaymentMethodSettingsType>>>;
  permissions?: Maybe<Permissions>;
  selfEnabled?: Maybe<Scalars['Boolean']['output']>;
  serviceMaxFee?: Maybe<Scalars['Int']['output']>;
  servicePercentage?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  webEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type BranchDetailsInput = {
  branchContact?: InputMaybe<Scalars['String']['input']>;
  branchLocation?: InputMaybe<Scalars['String']['input']>;
  coordinates?: InputMaybe<LocationInput>;
  deliveryOperationTime?: InputMaybe<OperationTimeInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  operationTime?: InputMaybe<OperationTimeInput>;
  region?: InputMaybe<Scalars['String']['input']>;
};

export type BranchType = {
  __typename?: 'BranchType';
  _id?: Maybe<Scalars['ID']['output']>;
  branchCode?: Maybe<Scalars['String']['output']>;
  branchContact?: Maybe<Scalars['String']['output']>;
  branchHasPinkBerry?: Maybe<Scalars['Boolean']['output']>;
  branchImage?: Maybe<Scalars['String']['output']>;
  branchLocation?: Maybe<Scalars['String']['output']>;
  cardPaymentPOSKeys?: Maybe<Array<Maybe<CardPaymentPosKeysType>>>;
  coordinates?: Maybe<LocationType>;
  courierType?: Maybe<CourierType>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deliveryOnly?: Maybe<Scalars['Boolean']['output']>;
  deliveryOperationTime?: Maybe<OperationTimeType>;
  deliveryType?: Maybe<Array<Maybe<EnumDeliveryType>>>;
  distance?: Maybe<Scalars['Float']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  imagePublicId?: Maybe<Scalars['String']['output']>;
  locationPoint?: Maybe<LocationPointType>;
  name?: Maybe<Scalars['String']['output']>;
  operationTime?: Maybe<OperationTimeType>;
  paymentMethod?: Maybe<Array<Maybe<PaymentMethodSettingsType>>>;
  pickupOnly?: Maybe<Scalars['Boolean']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  secondCourierEnabled?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type BrandColor = {
  __typename?: 'BrandColor';
  hex?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BrandColorInput = {
  hex?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type BrandInfo = {
  __typename?: 'BrandInfo';
  brandColors?: Maybe<Array<BrandColor>>;
  displayName?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BrandInfoInput = {
  brandColors?: InputMaybe<Array<BrandColorInput>>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CacheOrderInput = {
  address: Scalars['String']['input'];
  branchId: Scalars['ID']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  deliveryFee?: InputMaybe<Scalars['Int']['input']>;
  deliveryType?: InputMaybe<EnumDeliveryType>;
  location: LocationInput;
  packages: Array<PackagesInput>;
  paymentOption: PaymentOptionType;
  pickup: Scalars['Boolean']['input'];
  pickupEndDate?: InputMaybe<Scalars['String']['input']>;
  pickupStartDate?: InputMaybe<Scalars['String']['input']>;
  pickupType?: InputMaybe<ScanToOrderPickupType>;
  vehicleCategoryId?: InputMaybe<Scalars['Int']['input']>;
};

export type CallCenterAgentDataType = {
  __typename?: 'CallCenterAgentDataType';
  _id?: Maybe<Scalars['ID']['output']>;
  deviceToken?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  email?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type CallCenterAgentDeliveryType = {
  __typename?: 'CallCenterAgentDeliveryType';
  _id?: Maybe<Scalars['ID']['output']>;
  assignedAt?: Maybe<Scalars['String']['output']>;
  branchId?: Maybe<Scalars['ID']['output']>;
  callCenterAgentOrderId?: Maybe<CallCenterAgentOrderType>;
  cancelledAt?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['String']['output']>;
  delieveryAddress?: Maybe<Scalars['String']['output']>;
  deliveredAt?: Maybe<Scalars['String']['output']>;
  deliveringAt?: Maybe<Scalars['String']['output']>;
  deliveryFee?: Maybe<Scalars['Int']['output']>;
  deliveryType?: Maybe<EnumDeliveryType>;
  location?: Maybe<LocationType>;
  otp?: Maybe<Scalars['otp_Int_minLength_4_maxLength_4']['output']>;
  riderId?: Maybe<RiderType>;
  riderVerifyDelivery?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type CallCenterAgentOrderDetailsResponse = {
  __typename?: 'CallCenterAgentOrderDetailsResponse';
  data?: Maybe<CallCenterAgentOrderType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CallCenterAgentOrderSalesDetails = {
  __typename?: 'CallCenterAgentOrderSalesDetails';
  totalProductsCost?: Maybe<Scalars['Int']['output']>;
  totalcouponCashWorth?: Maybe<Scalars['Int']['output']>;
};

export type CallCenterAgentOrderSalesDetailsList = {
  __typename?: 'CallCenterAgentOrderSalesDetailsList';
  branch?: Maybe<BranchType>;
  numberOfOrders?: Maybe<Scalars['Int']['output']>;
  totalCouponCashWorth?: Maybe<Scalars['Int']['output']>;
  totalProductsCost?: Maybe<Scalars['Int']['output']>;
};

export type CallCenterAgentOrderType = {
  __typename?: 'CallCenterAgentOrderType';
  _id?: Maybe<Scalars['ID']['output']>;
  acceptedAt?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  andasOrderDetails?: Maybe<Scalars['String']['output']>;
  andasReceiptNumber?: Maybe<Scalars['String']['output']>;
  assignedSalesPerson?: Maybe<SalesPersonDataType>;
  assignedSalesPersonNumber?: Maybe<Scalars['String']['output']>;
  branch?: Maybe<BranchType>;
  branchId?: Maybe<Scalars['ID']['output']>;
  callCenterAgentId?: Maybe<CallCenterAgentDataType>;
  cancelledAt?: Maybe<Scalars['String']['output']>;
  cancelledReason?: Maybe<Scalars['String']['output']>;
  channel?: Maybe<Scalars['String']['output']>;
  checkoutUrl?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['String']['output']>;
  couponCashWorth?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerName?: Maybe<Scalars['String']['output']>;
  deliveredAt?: Maybe<Scalars['String']['output']>;
  deliveringAt?: Maybe<Scalars['String']['output']>;
  deliveryFee?: Maybe<Scalars['Float']['output']>;
  deviceToken?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<LocationType>;
  momoNumber?: Maybe<Scalars['String']['output']>;
  orderCode?: Maybe<Scalars['String']['output']>;
  otp?: Maybe<Scalars['Int']['output']>;
  packages?: Maybe<Array<Maybe<PackagesType>>>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  paymentOption?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  pickup?: Maybe<Scalars['Boolean']['output']>;
  pickupEndDate?: Maybe<Scalars['Date']['output']>;
  pickupStartDate?: Maybe<Scalars['Date']['output']>;
  pickupType?: Maybe<ScanToOrderPickupType>;
  platform?: Maybe<PlatformCallCenterType>;
  preorderedAt?: Maybe<Scalars['Date']['output']>;
  productTotalPrice?: Maybe<Scalars['Int']['output']>;
  readyAt?: Maybe<Scalars['String']['output']>;
  serviceFee?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  trackingId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CallCenterDeliveryRequestType = {
  __typename?: 'CallCenterDeliveryRequestType';
  branchId?: Maybe<Scalars['ID']['output']>;
  callCenterAgentDeliveryId?: Maybe<Scalars['ID']['output']>;
  callCenterAgentOrderId?: Maybe<Scalars['ID']['output']>;
  riderList?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
};

export type CallCenterOrderInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  branchId: Scalars['ID']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  deliveryFee?: InputMaybe<Scalars['Int']['input']>;
  deliveryType?: InputMaybe<EnumDeliveryType>;
  deviceToken?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  packages: Array<PackagesInput>;
  paymentOption: CallCenterPaymentOptionType;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  pickup: Scalars['Boolean']['input'];
  pickupEndDate?: InputMaybe<Scalars['String']['input']>;
  pickupStartDate?: InputMaybe<Scalars['String']['input']>;
  pickupType?: InputMaybe<ScanToOrderPickupType>;
  platform?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type CallCenterOrderInputNow = {
  address?: InputMaybe<Scalars['String']['input']>;
  branchId: Scalars['ID']['input'];
  channel?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  deliveryFee?: InputMaybe<Scalars['Int']['input']>;
  deliveryType?: InputMaybe<EnumDeliveryType>;
  deviceToken?: InputMaybe<Scalars['String']['input']>;
  idempotencyKey?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  momoNumber?: InputMaybe<Scalars['String']['input']>;
  packages: Array<PackagesInput>;
  paymentOption: CallCenterPaymentOptionType;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  pickup: Scalars['Boolean']['input'];
  pickupEndDate?: InputMaybe<Scalars['String']['input']>;
  pickupStartDate?: InputMaybe<Scalars['String']['input']>;
  pickupType?: InputMaybe<ScanToOrderPickupType>;
  platform?: InputMaybe<Scalars['String']['input']>;
  posDeviceId?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export enum CallCenterPaymentOptionType {
  Cash = 'CASH',
  CreditCard = 'CREDIT_CARD',
  MobilePayment = 'MOBILE_PAYMENT'
}

export type CardPaymentPosKeysType = {
  __typename?: 'CardPaymentPOSKeysType';
  provider?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CashRequestType = {
  __typename?: 'CashRequestType';
  _id?: Maybe<Scalars['ID']['output']>;
  administratorId?: Maybe<AdministratorType>;
  amount?: Maybe<Scalars['Int']['output']>;
  approvedAt?: Maybe<Scalars['String']['output']>;
  balance?: Maybe<Scalars['Int']['output']>;
  cashoutResponse?: Maybe<Scalars['String']['output']>;
  channel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  momoNumber?: Maybe<Scalars['String']['output']>;
  paidAt?: Maybe<Scalars['Date']['output']>;
  referenceNumber?: Maybe<Scalars['String']['output']>;
  rejectedAt?: Maybe<Scalars['String']['output']>;
  riderId?: Maybe<RiderType>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CasinoGameType = {
  __typename?: 'CasinoGameType';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  displayImage?: Maybe<Scalars['String']['output']>;
  freeStakes?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  useSlotsWeights?: Maybe<Scalars['Boolean']['output']>;
  wager?: Maybe<Scalars['Int']['output']>;
  weightDrawn?: Maybe<Scalars['Int']['output']>;
  weightLost?: Maybe<Scalars['Int']['output']>;
  weightWon?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type CasinoGamesInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryAndMenuType = {
  __typename?: 'CategoryAndMenuType';
  _id?: Maybe<Scalars['ID']['output']>;
  branchId?: Maybe<Scalars['String']['output']>;
  productCategory?: Maybe<Array<Maybe<ProductCategoryType>>>;
};

export type CheckConstituentsDataType = {
  __typename?: 'CheckConstituentsDataType';
  available?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  unAvailable?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CheckConstituentsResponse = {
  __typename?: 'CheckConstituentsResponse';
  data?: Maybe<CheckConstituentsDataType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CheckProductsDataType = {
  __typename?: 'CheckProductsDataType';
  available?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  unAvailable?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CheckProductsPreferenceResponse = {
  __typename?: 'CheckProductsPreferenceResponse';
  data?: Maybe<ProductsPreferenceDataType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CheckProductsResponse = {
  __typename?: 'CheckProductsResponse';
  data?: Maybe<CheckProductsDataType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CivilServantType = {
  __typename?: 'CivilServantType';
  _id?: Maybe<Scalars['ID']['output']>;
  civilServantTypeId?: Maybe<CivilServantTypeType>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<CustomerDataType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['String']['output']>;
};

export type CivilServantTypeType = {
  __typename?: 'CivilServantTypeType';
  _id?: Maybe<Scalars['ID']['output']>;
  discount?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum CivilServantTypeVerificationType {
  Cancelled = 'CANCELLED',
  Pending = 'PENDING',
  Verified = 'VERIFIED'
}

export type ConstituentDetailsInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ConstituentType = {
  __typename?: 'ConstituentType';
  _id?: Maybe<Scalars['ID']['output']>;
  activatedBranches?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  displayImage?: Maybe<Scalars['String']['output']>;
  dominantColor?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  imagePublicId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type CouponType = {
  __typename?: 'CouponType';
  _id?: Maybe<Scalars['ID']['output']>;
  couponCode?: Maybe<Scalars['String']['output']>;
  couponPercentage?: Maybe<Scalars['Int']['output']>;
  couponPrice?: Maybe<Scalars['Int']['output']>;
  couponType?: Maybe<CouponEnumType>;
  createdAt?: Maybe<Scalars['String']['output']>;
  pointThreshold?: Maybe<Scalars['Int']['output']>;
  promotionalType?: Maybe<PromotionalType>;
  status?: Maybe<CouponStatusType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CourierDeliveryFeeType = {
  __typename?: 'CourierDeliveryFeeType';
  _id?: Maybe<Scalars['ID']['output']>;
  administratorId?: Maybe<AdministratorType>;
  amount?: Maybe<Scalars['Int']['output']>;
  approvedAt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  momoNumber?: Maybe<Scalars['String']['output']>;
  referenceNumber?: Maybe<Scalars['String']['output']>;
  rejectedAt?: Maybe<Scalars['String']['output']>;
  salesPersonId?: Maybe<SalesPersonDataType>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  yangoDeliveryId?: Maybe<YangoDeliveryType>;
};

export enum CourierType {
  ChrisbDispatch = 'CHRISB_DISPATCH',
  Pickup = 'PICKUP',
  YangoDelivery = 'YANGO_DELIVERY'
}

export type CreateBranchInput = {
  branchContact: Scalars['branchContact_String_NotNull_minLength_9_maxLength_13']['input'];
  branchLocation?: InputMaybe<Scalars['String']['input']>;
  branchcode: Scalars['String']['input'];
  coordinates: LocationInput;
  name: Scalars['name_String_NotNull_minLength_2_maxLength_256']['input'];
  region?: InputMaybe<Scalars['region_String_minLength_2_maxLength_256']['input']>;
};

export type CreateBranchResponse = {
  __typename?: 'CreateBranchResponse';
  data?: Maybe<BranchType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateCallCenterAgentOrderResponse = {
  __typename?: 'CreateCallCenterAgentOrderResponse';
  data?: Maybe<CallCenterAgentOrderType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateCashRequestIdempotencyInput = {
  amount: Scalars['Int']['input'];
  channel: Scalars['String']['input'];
  createIdempotencyKey: Scalars['String']['input'];
  momoNumber: Scalars['String']['input'];
};

export type CreateCashRequestInput = {
  amount: Scalars['Int']['input'];
  channel: Scalars['String']['input'];
  momoNumber: Scalars['String']['input'];
};

export type CreateCashoutRequestResponse = {
  __typename?: 'CreateCashoutRequestResponse';
  data?: Maybe<CashRequestType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateCouponInput = {
  couponCode?: InputMaybe<Scalars['String']['input']>;
  couponPrice: Scalars['Int']['input'];
  couponType: CouponEnumType;
  isPercentage: Scalars['Boolean']['input'];
  pointThreshold: Scalars['Int']['input'];
};

export type CreateCouponResponse = {
  __typename?: 'CreateCouponResponse';
  data?: Maybe<CouponType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateCourierDeliveryFeeInput = {
  channel: Scalars['String']['input'];
  customerOrderId: Scalars['ID']['input'];
  momoNumber: Scalars['String']['input'];
};

export type CreateCourierDeliveryFeeResponse = {
  __typename?: 'CreateCourierDeliveryFeeResponse';
  data?: Maybe<CourierDeliveryFeeType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateCustomerOrderRefundResponse = {
  __typename?: 'CreateCustomerOrderRefundResponse';
  data?: Maybe<CustomerOrderRefundType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateCustomerWalletPointResponse = {
  __typename?: 'CreateCustomerWalletPointResponse';
  data?: Maybe<CustomerWalletType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateDeliveryResponse = {
  __typename?: 'CreateDeliveryResponse';
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateMenuInput = {
  branchId: Scalars['ID']['input'];
  productCategory?: InputMaybe<Array<ProductCategoryInput>>;
};

export type CreateOrderResponse = {
  __typename?: 'CreateOrderResponse';
  data?: Maybe<CustomerOrderType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreatePointInput = {
  customerId: Scalars['ID']['input'];
  pointIn: Scalars['Int']['input'];
  referenceNumber: Scalars['String']['input'];
};

export type CreatePointResponse = {
  __typename?: 'CreatePointResponse';
  data?: Maybe<CustomerPointType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateProductInput = {
  activatedBranches?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
  name: Scalars['String']['input'];
  productCategory: ProductCategoryTypeType;
  productCode: Scalars['String']['input'];
  productImage: Scalars['String']['input'];
  unitPrice: Scalars['Int']['input'];
};

export type CreateProductResponse = {
  __typename?: 'CreateProductResponse';
  data?: Maybe<ProductType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateRiderPointResponse = {
  __typename?: 'CreateRiderPointResponse';
  data?: Maybe<RiderPointType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateRiderWalletResponse = {
  __typename?: 'CreateRiderWalletResponse';
  data?: Maybe<RiderWalletType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateRoleResponse = {
  __typename?: 'CreateRoleResponse';
  data?: Maybe<Role>;
  message: Scalars['String']['output'];
  statusCode: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type CreateVerifiedPhoneNumberOtpResponse = {
  __typename?: 'CreateVerifiedPhoneNumberOTPResponse';
  data?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateWalletPointInput = {
  customerId: Scalars['ID']['input'];
  pointIn: Scalars['Int']['input'];
  referenceNumber: Scalars['String']['input'];
};

export type CreateYourAccountData = {
  __typename?: 'CreateYourAccountData';
  jwt?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type CreateYourAccountResponse = {
  __typename?: 'CreateYourAccountResponse';
  data?: Maybe<CreateYourAccountData>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CustomerAccountInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<DateOfBirthInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerAppRatingType = {
  __typename?: 'CustomerAppRatingType';
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<CustomerDataType2>;
  rating?: Maybe<Scalars['rating_Int_minLength_1_maxLength_5']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CustomerCouponType = {
  __typename?: 'CustomerCouponType';
  _id?: Maybe<Scalars['ID']['output']>;
  couponCode?: Maybe<Scalars['String']['output']>;
  couponId?: Maybe<CouponType>;
  createdAt?: Maybe<Scalars['String']['output']>;
  ownedByCustomerId?: Maybe<CustomerDataType>;
  status?: Maybe<CouponStatusType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  usedAt?: Maybe<Scalars['String']['output']>;
  usedByCustomerId?: Maybe<CustomerDataType>;
};

export type CustomerDataType = {
  __typename?: 'CustomerDataType';
  _id?: Maybe<Scalars['ID']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  dateOfBirth?: Maybe<DateOfBirthType>;
  deviceToken?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  dominantColor?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  isCivilServant?: Maybe<Scalars['Boolean']['output']>;
  isOnLeaderBoard?: Maybe<Scalars['Boolean']['output']>;
  isStaff?: Maybe<Scalars['Boolean']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  profilePublicId?: Maybe<Scalars['String']['output']>;
  staff?: Maybe<Staff>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type CustomerDataType2 = {
  __typename?: 'CustomerDataType2';
  _id?: Maybe<Scalars['ID']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  dateOfBirth?: Maybe<DateOfBirthType>;
  deviceToken?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  dominantColor?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['String']['output']>;
  enabled: Scalars['Boolean']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  isCivilServant?: Maybe<Scalars['Boolean']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  profilePublicId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type CustomerFeedbackType = {
  __typename?: 'CustomerFeedbackType';
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<CustomerDataType>;
  message?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CustomerFeedbackTypePagination = {
  __typename?: 'CustomerFeedbackTypePagination';
  feedbackList?: Maybe<Array<Maybe<CustomerFeedbackType>>>;
  nextCursor?: Maybe<CustomerFeedbackType>;
};

export type CustomerGameStakesInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  prizeType?: InputMaybe<Array<InputMaybe<PrizeType>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  stakeCostStatus?: InputMaybe<Array<InputMaybe<GameStakeCostStatusType>>>;
  stakeKey?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tangibleStatus?: InputMaybe<Array<InputMaybe<TangibleStatusType>>>;
  tangibleType?: InputMaybe<Array<InputMaybe<TangibleType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  winStatus?: InputMaybe<Array<InputMaybe<WinStatusType>>>;
};

export type CustomerGetAllBranchesInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cursor?: InputMaybe<Scalars['Float']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryOnly?: InputMaybe<Scalars['Boolean']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  megSearch?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['Int']['input']>;
  pageNumber?: InputMaybe<Scalars['Int']['input']>;
  pickupOnly?: InputMaybe<Scalars['Boolean']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerGetAllCouponsResponse = {
  __typename?: 'CustomerGetAllCouponsResponse';
  data?: Maybe<GetCustomerCouponPaginatedData>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CustomerGetCouponResponse = {
  __typename?: 'CustomerGetCouponResponse';
  data?: Maybe<CustomerCouponType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CustomerGetCouponsResponse = {
  __typename?: 'CustomerGetCouponsResponse';
  data?: Maybe<Array<Maybe<CustomerCouponType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CustomerGetCustomerFoodPreferenceResponse = {
  __typename?: 'CustomerGetCustomerFoodPreferenceResponse';
  data?: Maybe<Array<Maybe<FoodPreferenceDataType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CustomerGetIngredientsResponse = {
  __typename?: 'CustomerGetIngredientsResponse';
  data?: Maybe<Array<Maybe<IngredientDataType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CustomerOrderDetailsResponse = {
  __typename?: 'CustomerOrderDetailsResponse';
  data?: Maybe<CustomerOrderType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CustomerOrderFeedbackType = {
  __typename?: 'CustomerOrderFeedbackType';
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<CustomerDataType>;
  customerOrderId?: Maybe<CustomerOrderType>;
  message?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CustomerOrderFeedbackTypePagination = {
  __typename?: 'CustomerOrderFeedbackTypePagination';
  feedbackList?: Maybe<Array<Maybe<CustomerOrderFeedbackType>>>;
  nextCursor?: Maybe<CustomerOrderFeedbackType>;
};

export type CustomerOrderIdType = {
  __typename?: 'CustomerOrderIdType';
  _id?: Maybe<Scalars['ID']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  location?: Maybe<LocationType>;
  orderCode?: Maybe<Scalars['String']['output']>;
};

export type CustomerOrderItem = {
  __typename?: 'CustomerOrderItem';
  Extras?: Maybe<Array<Maybe<Extras>>>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  order?: Maybe<Scalars['ID']['output']>;
  pricingSnapshot?: Maybe<PricingSnapshot>;
  product?: Maybe<Scalars['ID']['output']>;
  productSnapshot?: Maybe<ProductSnapshot>;
  quantity?: Maybe<Scalars['Int']['output']>;
  subtotal?: Maybe<Scalars['Float']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CustomerOrderRatingType = {
  __typename?: 'CustomerOrderRatingType';
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<CustomerDataType2>;
  customerorderId?: Maybe<CustomerOrderType>;
  rating?: Maybe<Scalars['rating_Int_minLength_1_maxLength_5']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CustomerOrderRatingTypePagination = {
  __typename?: 'CustomerOrderRatingTypePagination';
  nextCursor?: Maybe<CustomerOrderRatingType>;
  ratingList?: Maybe<Array<Maybe<CustomerOrderRatingType>>>;
};

export type CustomerOrderSalesDetails = {
  __typename?: 'CustomerOrderSalesDetails';
  deliveryFee?: Maybe<Scalars['Float']['output']>;
  serviceFee?: Maybe<Scalars['Float']['output']>;
  totalDiscount?: Maybe<Scalars['Float']['output']>;
  totalProductDiscount?: Maybe<Scalars['Float']['output']>;
  totalProductsCost?: Maybe<Scalars['Float']['output']>;
  totalcouponCashWorth?: Maybe<Scalars['Float']['output']>;
};

export type CustomerOrderSalesListDetails = {
  __typename?: 'CustomerOrderSalesListDetails';
  branch?: Maybe<BranchType>;
  deliveryFee?: Maybe<Scalars['Int']['output']>;
  numberOfOrders?: Maybe<Scalars['Int']['output']>;
  serviceFee?: Maybe<Scalars['Int']['output']>;
  totalCouponCashWorth?: Maybe<Scalars['Int']['output']>;
  totalDiscount?: Maybe<Scalars['Int']['output']>;
  totalProductDiscount?: Maybe<Scalars['Int']['output']>;
  totalProductsCost?: Maybe<Scalars['Int']['output']>;
  totalWalletCouponCashWorth?: Maybe<Scalars['Int']['output']>;
};

export type CustomerOrderType = {
  __typename?: 'CustomerOrderType';
  PaymentOption?: Maybe<Scalars['String']['output']>;
  _id?: Maybe<Scalars['ID']['output']>;
  acceptedAt?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  andasReceiptNumber?: Maybe<Scalars['String']['output']>;
  assignedManager?: Maybe<ManagerDataType>;
  assignedSalesPerson?: Maybe<SalesPersonDataType>;
  assignedSalesPersonNumber?: Maybe<Scalars['String']['output']>;
  boltRideId?: Maybe<Scalars['Int']['output']>;
  branch?: Maybe<BranchType>;
  branchId?: Maybe<Scalars['ID']['output']>;
  cancelledAt?: Maybe<Scalars['String']['output']>;
  cancelledReason?: Maybe<Scalars['String']['output']>;
  channel?: Maybe<Scalars['String']['output']>;
  checkoutUrl?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['String']['output']>;
  couponCashOwned?: Maybe<Scalars['Int']['output']>;
  couponCashWorth?: Maybe<Scalars['Int']['output']>;
  courierType?: Maybe<CourierType>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<CustomerDataType>;
  deliveredAt?: Maybe<Scalars['String']['output']>;
  deliveringAt?: Maybe<Scalars['String']['output']>;
  deliveryFee?: Maybe<Scalars['Float']['output']>;
  discount?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<LocationType>;
  momoNumber?: Maybe<Scalars['String']['output']>;
  orderCode?: Maybe<Scalars['String']['output']>;
  otp?: Maybe<Scalars['Int']['output']>;
  packages?: Maybe<Array<Maybe<PackagesType>>>;
  paid?: Maybe<Scalars['Boolean']['output']>;
  paymentOption?: Maybe<Scalars['String']['output']>;
  pickup?: Maybe<Scalars['Boolean']['output']>;
  pickupCode?: Maybe<Scalars['String']['output']>;
  pickupEndDate?: Maybe<Scalars['Date']['output']>;
  pickupStartDate?: Maybe<Scalars['Date']['output']>;
  pickupType?: Maybe<ScanToOrderPickupType>;
  platform?: Maybe<Scalars['String']['output']>;
  preorderedAt?: Maybe<Scalars['Date']['output']>;
  productDiscount?: Maybe<Scalars['Int']['output']>;
  productTotalPrice?: Maybe<Scalars['Int']['output']>;
  purchaseType?: Maybe<PurchaseType>;
  readyAt?: Maybe<Scalars['String']['output']>;
  serviceFee?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  vehicleCategoryId?: Maybe<Scalars['Int']['output']>;
};

export type CustomerPointType = {
  __typename?: 'CustomerPointType';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  customerOrderId?: Maybe<CustomerOrderType>;
  customerWalletId?: Maybe<CustomerWalletType>;
  pointIn?: Maybe<Scalars['Int']['output']>;
  pointOut?: Maybe<Scalars['Int']['output']>;
  pointType?: Maybe<PointType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CustomerPointType2 = {
  __typename?: 'CustomerPointType2';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<CustomerDataType>;
  customerOrderId?: Maybe<CustomerOrderType>;
  customerWalletId?: Maybe<CustomerWalletType>;
  pointIn?: Maybe<Scalars['Float']['output']>;
  pointOut?: Maybe<Scalars['Float']['output']>;
  pointType?: Maybe<PointType>;
  reason?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type CustomerRatingTypePagination = {
  __typename?: 'CustomerRatingTypePagination';
  nextCursor?: Maybe<CustomerAppRatingType>;
  ratingList?: Maybe<Array<Maybe<CustomerAppRatingType>>>;
};

export type CustomerSlotFaceInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  couponId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  gameId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  prizeType?: InputMaybe<Array<InputMaybe<PrizeType>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  tangibleType?: InputMaybe<Array<InputMaybe<TangibleType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerWalletPaginationType = {
  __typename?: 'CustomerWalletPaginationType';
  nextCursor?: Maybe<CustomerWalletType>;
  walletList?: Maybe<Array<Maybe<CustomerWalletType>>>;
};

export enum CustomerWalletTransactionType {
  DRefund = 'D_REFUND',
  Payment = 'PAYMENT',
  Refund = 'REFUND',
  Topup = 'TOPUP'
}

export type CustomerWalletType = {
  __typename?: 'CustomerWalletType';
  _id?: Maybe<Scalars['ID']['output']>;
  balanceAfter?: Maybe<Scalars['Int']['output']>;
  balancebefore?: Maybe<Scalars['Int']['output']>;
  checkoutUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerCouponId?: Maybe<CustomerCouponType>;
  customerId?: Maybe<CustomerDataType>;
  customerOrderId?: Maybe<CustomerOrderType>;
  momoNumber?: Maybe<Scalars['String']['output']>;
  referenceNumber?: Maybe<Scalars['String']['output']>;
  transactionType?: Maybe<CustomerWalletTransactionType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  walletIn?: Maybe<Scalars['Int']['output']>;
  walletOut?: Maybe<Scalars['Int']['output']>;
};

export type DateOfBirthInput = {
  day?: InputMaybe<Scalars['day_Int_minLength_1_maxLength_31']['input']>;
  month?: InputMaybe<Scalars['month_Int_minLength_1_maxLength_12']['input']>;
  year?: InputMaybe<Scalars['year_Int_minLength_1900']['input']>;
};

export type DateOfBirthType = {
  __typename?: 'DateOfBirthType';
  day?: Maybe<Scalars['day_Int_minLength_1_maxLength_31']['output']>;
  month?: Maybe<Scalars['month_Int_minLength_1_maxLength_12']['output']>;
  year?: Maybe<Scalars['year_Int_minLength_1900']['output']>;
};

export enum DeliveryAgentType {
  Bolt = 'BOLT',
  Car = 'CAR',
  Drone = 'DRONE',
  Motor = 'MOTOR'
}

export type DeliveryFeeInputType = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<EnumDeliveryType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type DeliveryFeeType = {
  __typename?: 'DeliveryFeeType';
  deliveryType?: Maybe<EnumDeliveryType>;
  distance?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type DeliveryFeedbackType = {
  __typename?: 'DeliveryFeedbackType';
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<CustomerDataType>;
  message?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type DeliveryFeedbackTypePagination = {
  __typename?: 'DeliveryFeedbackTypePagination';
  feedbackList?: Maybe<Array<Maybe<DeliveryFeedbackType>>>;
  nextCursor?: Maybe<DeliveryFeedbackType>;
};

export type DeliveryInput = {
  branchId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
};

export type DeliveryRatingType = {
  __typename?: 'DeliveryRatingType';
  createdAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<CustomerDataType2>;
  deliveryId?: Maybe<DeliveryType>;
  rating?: Maybe<Scalars['rating_Int_minLength_1_maxLength_5']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type DeliveryRatingTypePagination = {
  __typename?: 'DeliveryRatingTypePagination';
  nextCursor?: Maybe<DeliveryRatingType>;
  ratingList?: Maybe<Array<Maybe<DeliveryRatingType>>>;
};

export type DeliveryRequestType = {
  __typename?: 'DeliveryRequestType';
  branchId?: Maybe<Scalars['ID']['output']>;
  customerOrderId?: Maybe<Scalars['ID']['output']>;
  deliveryId?: Maybe<Scalars['ID']['output']>;
  riderList?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
};

export type DeliverySettings = {
  __typename?: 'DeliverySettings';
  deliveryAgentType?: Maybe<Array<Maybe<DeliveryAgentType>>>;
};

export type DeliverySettingsInput = {
  deliveryAgentType?: InputMaybe<Array<InputMaybe<DeliveryAgentType>>>;
};

export type DeliveryType = {
  __typename?: 'DeliveryType';
  _id?: Maybe<Scalars['ID']['output']>;
  assignedAt?: Maybe<Scalars['String']['output']>;
  boltRideStateResponse?: Maybe<Scalars['String']['output']>;
  branchId?: Maybe<Scalars['ID']['output']>;
  cancelledAt?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['String']['output']>;
  customerOrderId?: Maybe<CustomerOrderType>;
  delieveryAddress?: Maybe<Scalars['String']['output']>;
  deliveredAt?: Maybe<Scalars['String']['output']>;
  deliveringAt?: Maybe<Scalars['String']['output']>;
  deliveryFee?: Maybe<Scalars['Int']['output']>;
  deliveryType?: Maybe<EnumDeliveryType>;
  location?: Maybe<LocationType>;
  otp?: Maybe<Scalars['otp_Int_minLength_4_maxLength_4']['output']>;
  riderId?: Maybe<RiderType>;
  riderVerifyDelivery?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type EditOrderResponse = {
  __typename?: 'EditOrderResponse';
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export enum EnumAdminType {
  CourierAdmin = 'COURIER_ADMIN',
  Default = 'DEFAULT',
  Finance = 'FINANCE',
  General = 'GENERAL'
}

export enum EnumOrderOf {
  Asc = 'asc',
  Desc = 'desc'
}

export enum EnumRiderType {
  Bolt = 'BOLT',
  Car = 'CAR',
  Motor = 'MOTOR'
}

export type ExternalServiceResponse = {
  __typename?: 'ExternalServiceResponse';
  data?: Maybe<ExternalServiceType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ExternalServiceTokenResponse = {
  __typename?: 'ExternalServiceTokenResponse';
  data?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ExternalServiceType = {
  __typename?: 'ExternalServiceType';
  _id?: Maybe<Scalars['String']['output']>;
  apiKey?: Maybe<Scalars['String']['output']>;
  apiKeyStatus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type Extras = {
  __typename?: 'Extras';
  pricingSnapshot?: Maybe<PricingSnapshot>;
  product?: Maybe<Scalars['ID']['output']>;
  productSnapshot?: Maybe<ProductSnapshot>;
  quantity?: Maybe<Scalars['Int']['output']>;
  subtotal?: Maybe<Scalars['Float']['output']>;
};

export type ExtrasType = {
  __typename?: 'ExtrasType';
  _id?: Maybe<Scalars['ID']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productImage?: Maybe<Scalars['String']['output']>;
  unitPrice?: Maybe<Scalars['Int']['output']>;
};

export type FamilyMappedProductSizes = {
  __typename?: 'FamilyMappedProductSizes';
  _id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productCode?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  unitPrice?: Maybe<Scalars['Int']['output']>;
};

export type FamilyMappedProductType = {
  __typename?: 'FamilyMappedProductType';
  _id?: Maybe<Scalars['ID']['output']>;
  activatedBranches?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  description?: Maybe<Scalars['String']['output']>;
  dominantColor?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  family?: Maybe<Scalars['String']['output']>;
  generalDescription?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  imagePublicId?: Maybe<Scalars['String']['output']>;
  ingredientsList?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  name?: Maybe<Scalars['String']['output']>;
  productCode?: Maybe<Scalars['String']['output']>;
  productImage?: Maybe<Scalars['String']['output']>;
  productionCategory?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Array<Maybe<FamilyMappedProductSizes>>>;
  unitPrice?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type FlashSalesGroupInput = {
  groupName?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FlashSalesInput = {
  groups?: InputMaybe<Array<InputMaybe<FlashSalesGroupInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type FlexibleCreateRequestInput = {
  note_to_driver?: InputMaybe<Scalars['String']['input']>;
  ready_for_dispatch_at?: InputMaybe<Scalars['String']['input']>;
  stops: Array<StopInput>;
  user: UserInfoInput;
  vehicle_category_id: Scalars['Int']['input'];
};

export type FoodPreferenceDataType = {
  __typename?: 'FoodPreferenceDataType';
  _id?: Maybe<Scalars['ID']['output']>;
  customerId?: Maybe<Scalars['ID']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  ingredientId?: Maybe<IngredientDataType>;
};

export enum GameStakeCostStatusType {
  Free = 'FREE',
  Paid = 'PAID'
}

export type GameStakesCountInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  customerId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  prizeType?: InputMaybe<Array<InputMaybe<PrizeType>>>;
  stakeCostStatus?: InputMaybe<Array<InputMaybe<GameStakeCostStatusType>>>;
  stakeKey?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tangibleStatus?: InputMaybe<Array<InputMaybe<TangibleStatusType>>>;
  tangibleType?: InputMaybe<Array<InputMaybe<TangibleType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  winStatus?: InputMaybe<Array<InputMaybe<WinStatusType>>>;
};

export type GameStakesInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  prizeType?: InputMaybe<Array<InputMaybe<PrizeType>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  stakeCostStatus?: InputMaybe<Array<InputMaybe<GameStakeCostStatusType>>>;
  stakeKey?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  tangibleStatus?: InputMaybe<Array<InputMaybe<TangibleStatusType>>>;
  tangibleType?: InputMaybe<Array<InputMaybe<TangibleType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  winStatus?: InputMaybe<Array<InputMaybe<WinStatusType>>>;
};

export type GameStakesType = {
  __typename?: 'GameStakesType';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  customerCouponId?: Maybe<CustomerCouponType>;
  customerId?: Maybe<CustomerDataType>;
  customerPointStakedId?: Maybe<CustomerPointType2>;
  customerPointWonId?: Maybe<CustomerPointType2>;
  gameId?: Maybe<CasinoGameType>;
  prizeType?: Maybe<PrizeType>;
  slotFaceId?: Maybe<SlotFaceType>;
  stakeCostStatus?: Maybe<GameStakeCostStatusType>;
  stakeKey?: Maybe<Scalars['ID']['output']>;
  tangibleStatus?: Maybe<TangibleStatusType>;
  tangibleType?: Maybe<TangibleType>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  winStatus?: Maybe<WinStatusType>;
};

export type GeometryResponse = {
  __typename?: 'GeometryResponse';
  data?: Maybe<GeometryType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GeometryType = {
  __typename?: 'GeometryType';
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type GetABranchResponse = {
  __typename?: 'GetABranchResponse';
  data?: Maybe<BranchType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetACallCenterAgentResponse = {
  __typename?: 'GetACallCenterAgentResponse';
  data?: Maybe<CallCenterAgentDataType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetACashoutRequestResponse = {
  __typename?: 'GetACashoutRequestResponse';
  data?: Maybe<CashRequestType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetACivilServentResponse = {
  __typename?: 'GetACivilServentResponse';
  data?: Maybe<CivilServantType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetACourierDeliveryFeeResponse = {
  __typename?: 'GetACourierDeliveryFeeResponse';
  data?: Maybe<CourierDeliveryFeeType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetACustomerOrderRefundResponse = {
  __typename?: 'GetACustomerOrderRefundResponse';
  data?: Maybe<CustomerOrderRefundType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetADeliveryFeeResponse = {
  __typename?: 'GetADeliveryFeeResponse';
  data?: Maybe<DeliveryFeeType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAGameStakeResponse = {
  __typename?: 'GetAGameStakeResponse';
  data?: Maybe<GameStakesType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAProductResponse = {
  __typename?: 'GetAProductResponse';
  data?: Maybe<ProductType2>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetARiderOnlineResponse = {
  __typename?: 'GetARiderOnlineResponse';
  data?: Maybe<OnlineRiderType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetARiderResponse = {
  __typename?: 'GetARiderResponse';
  data?: Maybe<RiderType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetASalesPersonResponse = {
  __typename?: 'GetASalesPersonResponse';
  data?: Maybe<SalesPersonDataType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAShopBannerResponse = {
  __typename?: 'GetAShopBannerResponse';
  data?: Maybe<ShopBannerType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetASlotFaceResponse = {
  __typename?: 'GetASlotFaceResponse';
  data?: Maybe<SlotFaceType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAllAdministratorsResponse = {
  __typename?: 'GetAllAdministratorsResponse';
  data?: Maybe<AllAdministratorPagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAllBranchesInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  megSearch?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllCallCenterAgentOrdersInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  assignedSalesPerson?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderCode?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  paymentOption?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pickup?: InputMaybe<Scalars['Boolean']['input']>;
  platform?: InputMaybe<Array<InputMaybe<PlatformCallCenterType>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllCallCenterAgentOrdersResponse = {
  __typename?: 'GetAllCallCenterAgentOrdersResponse';
  data?: Maybe<AllCallCenterAgentOrderCursorType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAllCallCenterAgentsInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllCashoutRequestResponse = {
  __typename?: 'GetAllCashoutRequestResponse';
  data?: Maybe<PaginatedCashoutRequest>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAllCashoutRequestsInputType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  approvedLowerDate?: InputMaybe<Scalars['String']['input']>;
  approvedUpperDate?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  momoNumber?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  paidLowerDate?: InputMaybe<Scalars['String']['input']>;
  paidUpperDate?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  riderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  riderName?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllCourierDeliveryFeeInputType = {
  administratorId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  excludeStatus?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  salesPersonId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  yangoDeliveryId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type GetAllCourierDeliveryFeeResponse = {
  __typename?: 'GetAllCourierDeliveryFeeResponse';
  data?: Maybe<PaginatedCourierDeliveryFee>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAllCustomerOrderRefundInputType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  approvedAt?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  excludeStatus?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  refundTransactionType?: InputMaybe<Array<InputMaybe<RefundTransactionType>>>;
  rejectedAt?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<RefundStatus>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllCustomerOrderRefundResponse = {
  __typename?: 'GetAllCustomerOrderRefundResponse';
  data?: Maybe<PaginatedCustomerOrderRefund>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAllCustomerOrdersInput = {
  PaymentOption?: InputMaybe<Array<InputMaybe<PaymentOptionType>>>;
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  assignedSalesPerson?: InputMaybe<Scalars['ID']['input']>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<Array<InputMaybe<EnumDeliveryType>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderCode?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  paymentOption?: InputMaybe<Array<InputMaybe<PaymentOptionType>>>;
  pickup?: InputMaybe<Scalars['Boolean']['input']>;
  platform?: InputMaybe<Array<InputMaybe<PlatformType>>>;
  purchaseType?: InputMaybe<Array<InputMaybe<PurchaseType>>>;
  referenceNumber?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<OrderStatusType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllCustomerOrdersResponse = {
  __typename?: 'GetAllCustomerOrdersResponse';
  data?: Maybe<AllCustomerOrderCursorType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAllCustomerPointInput = {
  administratorId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  customerOrderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  customerWalletId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  pointType?: InputMaybe<Array<InputMaybe<PointType>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllCustomerPointsResponse = {
  __typename?: 'GetAllCustomerPointsResponse';
  data?: Maybe<AllCustomerPointsPaginationType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAllCustomerWalletType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerCouponId?: InputMaybe<Scalars['ID']['input']>;
  customerOrderId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  transactionType?: InputMaybe<CustomerWalletTransactionType>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllCustomersInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Array<InputMaybe<PlatformType>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllDeliveriesInputType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerOrderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<Array<InputMaybe<EnumDeliveryType>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderCode?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  riderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllDeliveriesResponse = {
  __typename?: 'GetAllDeliveriesResponse';
  data?: Maybe<AllDeliveryPaginationType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAllDeliveryFeeResponse = {
  __typename?: 'GetAllDeliveryFeeResponse';
  data?: Maybe<Array<Maybe<DeliveryFeeType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAllProductsInput = {
  branchIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  branchIdsNotIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  cursorField?: InputMaybe<Scalars['String']['input']>;
  cursorValue?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  exactFamily?: InputMaybe<Scalars['String']['input']>;
  exactFamilyList?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  exactSizes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  extraCursorValue?: InputMaybe<Scalars['String']['input']>;
  family?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  megSearch?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  productCode?: InputMaybe<Scalars['String']['input']>;
  productionCategory?: InputMaybe<Scalars['String']['input']>;
  sellingGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  unitPrice?: InputMaybe<Scalars['Int']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllRiderSendMoneyResponse = {
  __typename?: 'GetAllRiderSendMoneyResponse';
  data?: Maybe<GetAllRiderSendMoneypagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAllRiderSendMoneypagination = {
  __typename?: 'GetAllRiderSendMoneypagination';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  moneyList?: Maybe<Array<Maybe<RiderSendMoneyType>>>;
  nextCursor?: Maybe<RiderSendMoneyType>;
};

export type GetAllRiderWalletType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  cashoutRequestId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerOrderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  notIntransactionType?: InputMaybe<Array<InputMaybe<WalletTransactionType>>>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  transactionType?: InputMaybe<Array<InputMaybe<WalletTransactionType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllRidersInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  riderType?: InputMaybe<EnumRiderType>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
  verifiedLowerDate?: InputMaybe<Scalars['String']['input']>;
  verifiedUpperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetAllSalesPersonsInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  branchId?: InputMaybe<Scalars['ID']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type GetAnAdministratorResponse = {
  __typename?: 'GetAnAdministratorResponse';
  data?: Maybe<AdministratorType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAppSettingsResponse = {
  __typename?: 'GetAppSettingsResponse';
  data?: Maybe<AppSettingsType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetAvailableFreeStakesResponse = {
  __typename?: 'GetAvailableFreeStakesResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetBranchesResponse = {
  __typename?: 'GetBranchesResponse';
  data?: Maybe<Array<Maybe<BranchType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCallCenterAgentDeliveriesResponse = {
  __typename?: 'GetCallCenterAgentDeliveriesResponse';
  data?: Maybe<AllCallCenterAgentDeliveryPaginationType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCallCenterAgentDeliveryResponse = {
  __typename?: 'GetCallCenterAgentDeliveryResponse';
  data?: Maybe<CallCenterAgentDeliveryType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCallCenterAgentOrderResponse = {
  __typename?: 'GetCallCenterAgentOrderResponse';
  data?: Maybe<CallCenterAgentOrderType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCallCenterAgentsResponse = {
  __typename?: 'GetCallCenterAgentsResponse';
  data?: Maybe<Array<Maybe<CallCenterAgentDataType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCashoutRequestsResponse = {
  __typename?: 'GetCashoutRequestsResponse';
  data?: Maybe<Array<Maybe<CashRequestType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCasinoGamesResponse = {
  __typename?: 'GetCasinoGamesResponse';
  data?: Maybe<PaginatedCasinoGameType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCivilServentTypesResponse = {
  __typename?: 'GetCivilServentTypesResponse';
  data?: Maybe<Array<Maybe<CivilServantTypeType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCivilServentsResponse = {
  __typename?: 'GetCivilServentsResponse';
  data?: Maybe<Array<Maybe<CivilServantType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetClosestRidersResponse = {
  __typename?: 'GetClosestRidersResponse';
  data?: Maybe<Array<Maybe<RiderType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetConstituentDetailsInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetConstituentsResponse = {
  __typename?: 'GetConstituentsResponse';
  data?: Maybe<PaginatedConstituentsResponse>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCouponResponse = {
  __typename?: 'GetCouponResponse';
  data?: Maybe<CouponType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCouponsResponse = {
  __typename?: 'GetCouponsResponse';
  data?: Maybe<Array<Maybe<CouponType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCourierDeliveryFeeResponse = {
  __typename?: 'GetCourierDeliveryFeeResponse';
  data?: Maybe<Array<Maybe<CourierDeliveryFeeType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCurrentAdministratorResponse = {
  __typename?: 'GetCurrentAdministratorResponse';
  data?: Maybe<AdministratorType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCurrentRiderData = {
  __typename?: 'GetCurrentRiderData';
  _id?: Maybe<Scalars['ID']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  branchId?: Maybe<BranchType>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  ghanaCardBackPhoto?: Maybe<Scalars['String']['output']>;
  ghanaCardNumber?: Maybe<Scalars['String']['output']>;
  ghanaCardPhoto?: Maybe<Scalars['String']['output']>;
  ghanaCardPhotoBackPublicId?: Maybe<Scalars['String']['output']>;
  ghanaCardPhotoPublicId?: Maybe<Scalars['String']['output']>;
  isProfileUpdated?: Maybe<Scalars['Boolean']['output']>;
  isRiderOnline?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  licenseNumber?: Maybe<Scalars['String']['output']>;
  licensePhoto?: Maybe<Scalars['String']['output']>;
  licensePhotoPublicId?: Maybe<Scalars['String']['output']>;
  licensePlate?: Maybe<Scalars['String']['output']>;
  momoNumber?: Maybe<Scalars['String']['output']>;
  momoNumberChannel?: Maybe<Scalars['String']['output']>;
  phoneNumber: Scalars['String']['output'];
  profileImage?: Maybe<Scalars['String']['output']>;
  profilePublicId?: Maybe<Scalars['String']['output']>;
  riderType?: Maybe<EnumRiderType>;
  selfiePhoto?: Maybe<Scalars['String']['output']>;
  selfiePublicId?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  vehiclePhoto?: Maybe<Scalars['String']['output']>;
  vehiclePublicId?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCurrentRiderResponse = {
  __typename?: 'GetCurrentRiderResponse';
  data?: Maybe<GetCurrentRiderData>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCurrentUserData = {
  __typename?: 'GetCurrentUserData';
  email?: Maybe<Scalars['String']['output']>;
  phoneNumber: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type GetCurrentUserResponse = {
  __typename?: 'GetCurrentUserResponse';
  data?: Maybe<GetCurrentUserData>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerAWalletResponse = {
  __typename?: 'GetCustomerAWalletResponse';
  data?: Maybe<CustomerWalletType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerAppRatingResponse = {
  __typename?: 'GetCustomerAppRatingResponse';
  data?: Maybe<CustomerRatingTypePagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerCouponInputType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  couponCode?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  couponId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  couponType?: InputMaybe<Array<InputMaybe<CouponEnumType>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  isPointOut?: InputMaybe<Scalars['Boolean']['input']>;
  isWalletOut?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  ownedByCustomerId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<CouponStatusType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetCustomerCouponPaginatedData = {
  __typename?: 'GetCustomerCouponPaginatedData';
  customerCouponList?: Maybe<Array<Maybe<CustomerCouponType>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<CustomerCouponType>;
};

export type GetCustomerDeliveryAddress = {
  __typename?: 'GetCustomerDeliveryAddress';
  data?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerFeedbackInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetCustomerOrderFeedbackInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  customerOrderId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetCustomerOrderFeedbacksResponse = {
  __typename?: 'GetCustomerOrderFeedbacksResponse';
  data?: Maybe<CustomerOrderFeedbackTypePagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerOrderRatingInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  customerOrderId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetCustomerOrderRatingResponse = {
  __typename?: 'GetCustomerOrderRatingResponse';
  data?: Maybe<CustomerOrderRatingTypePagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerOrderRefundResponse = {
  __typename?: 'GetCustomerOrderRefundResponse';
  data?: Maybe<Array<Maybe<CustomerOrderRefundType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerOrderResponse = {
  __typename?: 'GetCustomerOrderResponse';
  data?: Maybe<CustomerOrderType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerOrdersResponse = {
  __typename?: 'GetCustomerOrdersResponse';
  data?: Maybe<Array<Maybe<CustomerOrderType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerPointResponse = {
  __typename?: 'GetCustomerPointResponse';
  data?: Maybe<TotalPointsType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerRatingInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetCustomerResponse = {
  __typename?: 'GetCustomerResponse';
  data?: Maybe<CustomerDataType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerWalletListResponse = {
  __typename?: 'GetCustomerWalletListResponse';
  data?: Maybe<CustomerWalletPaginationType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerWalletResponse = {
  __typename?: 'GetCustomerWalletResponse';
  data?: Maybe<TotalWalletsType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomerWalletTotalInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  customerCouponId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  customerId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  customerOrderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  transactionType?: InputMaybe<Array<InputMaybe<CustomerWalletTransactionType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetCustomerWalletTotalResponse = {
  __typename?: 'GetCustomerWalletTotalResponse';
  data?: Maybe<WalletTotalType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetCustomersFeedbacksResponse = {
  __typename?: 'GetCustomersFeedbacksResponse';
  data?: Maybe<CustomerFeedbackTypePagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetDeliveriesResponse = {
  __typename?: 'GetDeliveriesResponse';
  data?: Maybe<Array<Maybe<DeliveryType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetDeliveryByOrderResponse = {
  __typename?: 'GetDeliveryByOrderResponse';
  data?: Maybe<GetDeliveryByOrderType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetDeliveryByOrderType = {
  __typename?: 'GetDeliveryByOrderType';
  _id?: Maybe<Scalars['ID']['output']>;
  assignedAt?: Maybe<Scalars['String']['output']>;
  branchCode?: Maybe<Scalars['String']['output']>;
  branchId?: Maybe<Scalars['ID']['output']>;
  clientName?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<Scalars['ID']['output']>;
  customerOrderId?: Maybe<Scalars['ID']['output']>;
  delieveryAddress?: Maybe<Scalars['String']['output']>;
  deliveredAt?: Maybe<Scalars['String']['output']>;
  deliveryFee?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<LocationType>;
  otp?: Maybe<Scalars['otp_Int_minLength_4_maxLength_4']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  riderId?: Maybe<RiderType>;
  status?: Maybe<Scalars['String']['output']>;
};

export type GetDeliveryByOrderTypeRiderIdType = {
  __typename?: 'GetDeliveryByOrderTypeRiderIdType';
  _id?: Maybe<Scalars['ID']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  riderType?: Maybe<RiderType>;
  username?: Maybe<Scalars['String']['output']>;
};

export type GetDeliveryFeedbackInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetDeliveryFeedbackResponse = {
  __typename?: 'GetDeliveryFeedbackResponse';
  data?: Maybe<DeliveryFeedbackTypePagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetDeliveryRatingInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetDeliveryRatingResponse = {
  __typename?: 'GetDeliveryRatingResponse';
  data?: Maybe<DeliveryRatingTypePagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetDeliveryRequestResponse = {
  __typename?: 'GetDeliveryRequestResponse';
  data?: Maybe<Array<Maybe<GetDeliveryRequestResponseData>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetDeliveryRequestResponseData = {
  __typename?: 'GetDeliveryRequestResponseData';
  _id?: Maybe<Scalars['ID']['output']>;
  branchId?: Maybe<BranchIdType>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerOrderId?: Maybe<CustomerOrderIdType>;
  deliveryId?: Maybe<DeliveryType>;
  riderList?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type GetDeliveryResponse = {
  __typename?: 'GetDeliveryResponse';
  data?: Maybe<DeliveryType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetEveryCustomerWalletInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerCouponId?: InputMaybe<Scalars['ID']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  customerOrderId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  transactionType?: InputMaybe<CustomerWalletTransactionType>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetExternalServiceResponse = {
  __typename?: 'GetExternalServiceResponse';
  data?: Maybe<Array<Maybe<ExternalServiceType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetFamilyMappedProductResponse = {
  __typename?: 'GetFamilyMappedProductResponse';
  data?: Maybe<Array<Maybe<FamilyMappedProductType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetGameStakesCountResponse = {
  __typename?: 'GetGameStakesCountResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetGameStakesResponse = {
  __typename?: 'GetGameStakesResponse';
  data?: Maybe<PaginatedGameStakesType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetIngredientsResponse = {
  __typename?: 'GetIngredientsResponse';
  data?: Maybe<Array<Maybe<IngredientDataType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetLeaderBoardResponse = {
  __typename?: 'GetLeaderBoardResponse';
  data?: Maybe<Array<Maybe<LeaderBoardData>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetLeadersBoardInput = {
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetLocationSuggestionResponse = {
  __typename?: 'GetLocationSuggestionResponse';
  data?: Maybe<Array<Maybe<LocationSuggestionType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetMenuResponse = {
  __typename?: 'GetMenuResponse';
  data?: Maybe<Array<Maybe<CategoryAndMenuType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetNonPaginatedCallCenterAgentDeliveriesResponse = {
  __typename?: 'GetNonPaginatedCallCenterAgentDeliveriesResponse';
  data?: Maybe<Array<Maybe<CallCenterAgentDeliveryType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetOpenedDeliveryRequestResponse = {
  __typename?: 'GetOpenedDeliveryRequestResponse';
  data?: Maybe<GetDeliveryRequestResponseData>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetPaginatedAllCallCenterAgentResponse = {
  __typename?: 'GetPaginatedAllCallCenterAgentResponse';
  data?: Maybe<AllCallCenterAgentPagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetPaginatedAllCustomersResponse = {
  __typename?: 'GetPaginatedAllCustomersResponse';
  data?: Maybe<AllCustomersPagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetPaginatedAllRidersResponse = {
  __typename?: 'GetPaginatedAllRidersResponse';
  data?: Maybe<AllRidersPagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetPaginatedAllSalesPersonResponse = {
  __typename?: 'GetPaginatedAllSalesPersonResponse';
  data?: Maybe<AllSalesPersonPagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetPaginatedBranchesResponse = {
  __typename?: 'GetPaginatedBranchesResponse';
  data?: Maybe<AllBranchesPagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetPaginatedProductsResponse = {
  __typename?: 'GetPaginatedProductsResponse';
  data?: Maybe<AllProductsPagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetPaginatedRoleResponse = {
  __typename?: 'GetPaginatedRoleResponse';
  data?: Maybe<RolePagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetPaginatedStaffResponse = {
  __typename?: 'GetPaginatedStaffResponse';
  data?: Maybe<StaffPagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetProductsResponse = {
  __typename?: 'GetProductsResponse';
  data?: Maybe<Array<Maybe<ProductType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetRiderAWalletResponse = {
  __typename?: 'GetRiderAWalletResponse';
  data?: Maybe<CustomerWalletType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetRiderFeedbackResponse = {
  __typename?: 'GetRiderFeedbackResponse';
  data?: Maybe<RiderFeedbackType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetRiderPointResponse = {
  __typename?: 'GetRiderPointResponse';
  data?: Maybe<Array<Maybe<RiderPointType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetRiderWalletListResponse = {
  __typename?: 'GetRiderWalletListResponse';
  data?: Maybe<RiderWalletPaginationType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetRiderWalletResponse = {
  __typename?: 'GetRiderWalletResponse';
  data?: Maybe<Array<Maybe<RiderWalletType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetRidersFeedbacksResponse = {
  __typename?: 'GetRidersFeedbacksResponse';
  data?: Maybe<Array<Maybe<RiderFeedbackType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetRidersOnlineResponse = {
  __typename?: 'GetRidersOnlineResponse';
  data?: Maybe<Array<Maybe<OnlineRiderType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetRidersResponse = {
  __typename?: 'GetRidersResponse';
  data?: Maybe<Array<Maybe<RiderType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetRoleResponse = {
  __typename?: 'GetRoleResponse';
  data?: Maybe<Role>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetRolesInput = {
  branch?: InputMaybe<Scalars['ID']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetSalesPersonsResponse = {
  __typename?: 'GetSalesPersonsResponse';
  data?: Maybe<Array<Maybe<SalesPersonDataType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetSearchHistoryResponse = {
  __typename?: 'GetSearchHistoryResponse';
  data?: Maybe<SearchHistoryPaginationType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetServerTimeResponse = {
  __typename?: 'GetServerTimeResponse';
  data?: Maybe<ServerTimeType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetShopBannersResponse = {
  __typename?: 'GetShopBannersResponse';
  data?: Maybe<ShopBannerTypepaginationType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetSlotFacesResponse = {
  __typename?: 'GetSlotFacesResponse';
  data?: Maybe<PaginatedSlotFaceType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetStaffResponse = {
  __typename?: 'GetStaffResponse';
  data?: Maybe<Staff>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetStaffsInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  branchIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetStaffsResponse = {
  __typename?: 'GetStaffsResponse';
  data?: Maybe<StaffPagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalAdministratorsResponse = {
  __typename?: 'GetTotalAdministratorsResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalAppRatingResponse = {
  __typename?: 'GetTotalAppRatingResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalBranchesInput = {
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalBranchesResponse = {
  __typename?: 'GetTotalBranchesResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCallCenterAgentDeliveryResponse = {
  __typename?: 'GetTotalCallCenterAgentDeliveryResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCallCenterAgentOrderSalesInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  assignedSalesPerson?: InputMaybe<Scalars['ID']['input']>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  callCenterAgentId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  paymentOption?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pickup?: InputMaybe<Scalars['Boolean']['input']>;
  platform?: InputMaybe<Array<InputMaybe<PlatformCallCenterType>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalCallCenterAgentOrderSalesListPagination = {
  __typename?: 'GetTotalCallCenterAgentOrderSalesListPagination';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<CallCenterAgentOrderSalesDetailsList>;
  salesList?: Maybe<Array<Maybe<CallCenterAgentOrderSalesDetailsList>>>;
};

export type GetTotalCallCenterAgentOrderSalesListResponse = {
  __typename?: 'GetTotalCallCenterAgentOrderSalesListResponse';
  data?: Maybe<GetTotalCallCenterAgentOrderSalesListPagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCallCenterAgentOrderSalesResponse = {
  __typename?: 'GetTotalCallCenterAgentOrderSalesResponse';
  data?: Maybe<CallCenterAgentOrderSalesDetails>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCallCenterAgentOrdersInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  assignedSalesPerson?: InputMaybe<Scalars['ID']['input']>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  callCenterAgentId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  paymentOption?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pickup?: InputMaybe<Scalars['Boolean']['input']>;
  platform?: InputMaybe<Array<InputMaybe<PlatformCallCenterType>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalCallCenterAgentOrdersResponse = {
  __typename?: 'GetTotalCallCenterAgentOrdersResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCallCenterAgentsInput = {
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalCallCenterAgentsResponse = {
  __typename?: 'GetTotalCallCenterAgentsResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCashoutRequestResponse = {
  __typename?: 'GetTotalCashoutRequestResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCashoutRequestsInputType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  riderId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalCourierDeliveryFeeInputType = {
  administratorId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  salesPersonId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  yangoDeliveryId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type GetTotalCourierDeliveryFeeResponse = {
  __typename?: 'GetTotalCourierDeliveryFeeResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCustomerOrderRefundInputType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  approvedAt?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  excludeStatus?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  refundTransactionType?: InputMaybe<Array<InputMaybe<RefundTransactionType>>>;
  rejectedAt?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<RefundStatus>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalCustomerOrderRefundResponse = {
  __typename?: 'GetTotalCustomerOrderRefundResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCustomerOrderSalesInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  assignedSalesPerson?: InputMaybe<Scalars['ID']['input']>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<Array<InputMaybe<EnumDeliveryType>>>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  paymentOption?: InputMaybe<Array<InputMaybe<PaymentOptionType>>>;
  pickup?: InputMaybe<Scalars['Boolean']['input']>;
  platform?: InputMaybe<Array<InputMaybe<PlatformType>>>;
  purchaseType?: InputMaybe<Array<InputMaybe<PurchaseType>>>;
  status?: InputMaybe<Array<InputMaybe<OrderStatusType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalCustomerOrderSalesListInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  assignedSalesPerson?: InputMaybe<Scalars['ID']['input']>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  cursorField?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<Array<InputMaybe<EnumDeliveryType>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['Int']['input']>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  paymentOption?: InputMaybe<Array<InputMaybe<PaymentOptionType>>>;
  pickup?: InputMaybe<Scalars['Boolean']['input']>;
  platform?: InputMaybe<Array<InputMaybe<PlatformType>>>;
  purchaseType?: InputMaybe<Array<InputMaybe<PurchaseType>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<InputMaybe<OrderStatusType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalCustomerOrderSalesListPagination = {
  __typename?: 'GetTotalCustomerOrderSalesListPagination';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<CustomerOrderSalesListDetails>;
  salesList?: Maybe<Array<Maybe<CustomerOrderSalesListDetails>>>;
};

export type GetTotalCustomerOrderSalesListResponse = {
  __typename?: 'GetTotalCustomerOrderSalesListResponse';
  data?: Maybe<GetTotalCustomerOrderSalesListPagination>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCustomerOrderSalesResponse = {
  __typename?: 'GetTotalCustomerOrderSalesResponse';
  data?: Maybe<CustomerOrderSalesDetails>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCustomerOrdersFeedbacksResponse = {
  __typename?: 'GetTotalCustomerOrdersFeedbacksResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCustomerOrdersInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  assignedSalesPerson?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  customerId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<Array<InputMaybe<EnumDeliveryType>>>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  paymentOption?: InputMaybe<Array<InputMaybe<PaymentOptionType>>>;
  pickup?: InputMaybe<Scalars['Boolean']['input']>;
  platform?: InputMaybe<Array<InputMaybe<PlatformType>>>;
  purchaseType?: InputMaybe<Array<InputMaybe<PurchaseType>>>;
  status?: InputMaybe<Array<InputMaybe<OrderStatusType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalCustomerOrdersRatingResponse = {
  __typename?: 'GetTotalCustomerOrdersRatingResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCustomerOrdersResponse = {
  __typename?: 'GetTotalCustomerOrdersResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCustomerPointInput = {
  administratorId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  customerOrderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  customerWalletId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  pointType?: InputMaybe<Array<InputMaybe<PointType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalCustomerPointsResponse = {
  __typename?: 'GetTotalCustomerPointsResponse';
  data?: Maybe<TotalCustomerPointsType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCustomersFeedbacksResponse = {
  __typename?: 'GetTotalCustomersFeedbacksResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalCustomersInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Array<InputMaybe<PlatformType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalCustomersResponse = {
  __typename?: 'GetTotalCustomersResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalDeliveriesResponse = {
  __typename?: 'GetTotalDeliveriesResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalDeliveryFeedbacksResponse = {
  __typename?: 'GetTotalDeliveryFeedbacksResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalDeliveryInputType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  branchId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryType?: InputMaybe<EnumDeliveryType>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  riderId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalDeliveryRatingResponse = {
  __typename?: 'GetTotalDeliveryRatingResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalProductsInput = {
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  family?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  productionCategory?: InputMaybe<Scalars['String']['input']>;
  sellingGroup?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  size?: InputMaybe<Scalars['String']['input']>;
  unitPrice?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalProductsResponse = {
  __typename?: 'GetTotalProductsResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalRiderSendMoneyResponse = {
  __typename?: 'GetTotalRiderSendMoneyResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalRiderWalletInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  cashoutRequestId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  customerOrderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  notIntransactionType?: InputMaybe<Array<InputMaybe<WalletTransactionType>>>;
  paymentType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  transactionType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalRiderWalletResponse = {
  __typename?: 'GetTotalRiderWalletResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalRidersInput = {
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  riderType?: InputMaybe<EnumRiderType>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GetTotalRidersResponse = {
  __typename?: 'GetTotalRidersResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalRolesInput = {
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalRolesResponse = {
  __typename?: 'GetTotalRolesResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalSalesPeronsInput = {
  branchId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalSalesPersonsResponse = {
  __typename?: 'GetTotalSalesPersonsResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalSalesRiderSendMoneyListResponse = {
  __typename?: 'GetTotalSalesRiderSendMoneyListResponse';
  data?: Maybe<Array<Maybe<SendMoneySaleList>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalSalesRiderSendMoneyResponse = {
  __typename?: 'GetTotalSalesRiderSendMoneyResponse';
  data?: Maybe<RiderSendMoneyFields>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalSearchHistoryResponse = {
  __typename?: 'GetTotalSearchHistoryResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetTotalStaffsInput = {
  branchIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  roleIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type GetTotalStaffsResponse = {
  __typename?: 'GetTotalStaffsResponse';
  data?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetUsersDataResponse = {
  __typename?: 'GetUsersDataResponse';
  data?: Maybe<Array<Maybe<GetCurrentUserData>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GetVerfiedPhoneNumbersResponse = {
  __typename?: 'GetVerfiedPhoneNumbersResponse';
  data?: Maybe<Array<Maybe<VerifiedNumberForPaymnetType>>>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type GoOnlineInput = {
  deviceToken: Scalars['deviceToken_String_NotNull_minLength_9_maxLength_256']['input'];
  location: LocationInput;
};

export type HighSellingGroupInput = {
  groupName?: InputMaybe<Scalars['String']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type HighSellingGroupsType = {
  __typename?: 'HighSellingGroupsType';
  groupName?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ImageDetails = {
  __typename?: 'ImageDetails';
  dominantColor?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  imagePublicId?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type IngredientDataType = {
  __typename?: 'IngredientDataType';
  _id?: Maybe<Scalars['ID']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type LeaderBoardData = {
  __typename?: 'LeaderBoardData';
  _id?: Maybe<Scalars['ID']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  totalPoints?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type LocationPointType = {
  __typename?: 'LocationPointType';
  coordinates?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type LocationSuggestionType = {
  __typename?: 'LocationSuggestionType';
  name?: Maybe<Scalars['String']['output']>;
  placeId?: Maybe<Scalars['String']['output']>;
};

export type LocationType = {
  __typename?: 'LocationType';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type LoginAdministratorResponse = {
  __typename?: 'LoginAdministratorResponse';
  data?: Maybe<AdministratorLoginData>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type LoginStaffResponse = {
  __typename?: 'LoginStaffResponse';
  data?: Maybe<StaffLoginData>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ManagerDataType = {
  __typename?: 'ManagerDataType';
  _id?: Maybe<Scalars['ID']['output']>;
  branchId?: Maybe<BranchIdType>;
  deviceToken?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  email?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type MenuInput = {
  name: Scalars['String']['input'];
  products?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type MenuType = {
  __typename?: 'MenuType';
  name?: Maybe<Scalars['String']['output']>;
  products?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptCallCenterAgentOrder?: Maybe<SuccessResponse>;
  acceptCustomerOrder?: Maybe<SuccessResponse>;
  acceptYangoClaim?: Maybe<YangoDeliveryResponse>;
  administratorCreateRider?: Maybe<SuccessResponse>;
  administratorLogout?: Maybe<SuccessResponse>;
  administratorPhoneNumberVerification?: Maybe<SuccessResponse>;
  administratorUpdateDeviceToken?: Maybe<SuccessResponse>;
  administratorVerifyCreateAccountOTP?: Maybe<SuccessResponse>;
  administratorVerifyResetAccountOTP?: Maybe<SuccessResponse>;
  adminsAllowRiderUpdateProfile?: Maybe<SuccessResponse>;
  adminsDeleteCustomerAccount?: Maybe<SuccessResponse>;
  adminsDeleteRiderAccount?: Maybe<SuccessResponse>;
  adminsDisableCallCenterAgentAccount?: Maybe<SuccessResponse>;
  adminsDisableCustomerAccount?: Maybe<SuccessResponse>;
  adminsDisableRiderAccount?: Maybe<SuccessResponse>;
  adminsDisableSalesPersonAccount?: Maybe<SuccessResponse>;
  adminsVerifyRiderAccount?: Maybe<SuccessResponse>;
  approveCashoutRequest?: Maybe<CreateCashoutRequestResponse>;
  approveCivilServantRequest?: Maybe<SuccessResponse>;
  approveCourierDeliveryFee?: Maybe<CreateCourierDeliveryFeeResponse>;
  /** Customer Order Refund */
  approveCustomerOrderRefund?: Maybe<SuccessResponse>;
  autoCompleteAllDeliveryOrders?: Maybe<SuccessResponse>;
  branchDeliveryOnly?: Maybe<SuccessResponse>;
  branchPickupOnly?: Maybe<SuccessResponse>;
  broadcastClosestRidersNotification?: Maybe<SuccessResponse>;
  broadcastClosestRidersNotificationCallCenter?: Maybe<SuccessResponse>;
  /** # CallCenterAgent */
  callCenterAgentLogin?: Maybe<CreateYourAccountResponse>;
  callCenterAgentLogout?: Maybe<SuccessResponse>;
  callCenterAgentPhoneNumberVerification?: Maybe<SuccessResponse>;
  callCenterAgentVerifyCreateAccountOTP?: Maybe<SuccessResponse>;
  callCenterAgentVerifyResetAccountOTP?: Maybe<SuccessResponse>;
  cancelCallCenterAgentOrder?: Maybe<SuccessResponse>;
  /** # CustomerOrder */
  cancelCustomerOrder?: Maybe<EditOrderResponse>;
  cancelYangoDelivery?: Maybe<YangoDeliveryResponse>;
  changeCallCenterAgentDeliveryToPickup?: Maybe<SuccessResponse>;
  changeDeliveryToPickup?: Maybe<SuccessResponse>;
  changePickupToCallCenterDelivery?: Maybe<SuccessResponse>;
  changePickupToDelivery?: Maybe<SuccessResponse>;
  checkConstituentAvailability?: Maybe<CheckConstituentsResponse>;
  checkCustomerPreferProduct?: Maybe<CheckProductsPreferenceResponse>;
  checkOrderRatingStatus?: Maybe<SuccessResponse>;
  checkProductAvailability?: Maybe<CheckProductsResponse>;
  civilServantRequest?: Maybe<SuccessResponse>;
  clearRidersOnline?: Maybe<SuccessResponse>;
  closerSendCustomerNotification?: Maybe<SuccessResponse>;
  closestRidersNotification?: Maybe<SuccessResponse>;
  createAdministrator?: Maybe<CreateYourAccountResponse>;
  createBranch?: Maybe<CreateBranchResponse>;
  createCallCenterAgent?: Maybe<CreateYourAccountResponse>;
  /** Call center  Delivery */
  createCallCenterAgentDelivery?: Maybe<SuccessResponse>;
  /** # Call  centerAgent Order */
  createCallCenterAgentOrder?: Maybe<CreateCallCenterAgentOrderResponse>;
  /** # cashRequest */
  createCashoutRequest?: Maybe<CreateCashoutRequestResponse>;
  createCashoutRequestIdempotentically?: Maybe<CreateCashoutRequestResponse>;
  createCivilServantType?: Maybe<SuccessResponse>;
  /** Coupon */
  createCoupon?: Maybe<CreateCouponResponse>;
  /** # CourierDeliveryFee */
  createCourierDeliveryFee?: Maybe<CreateCourierDeliveryFeeResponse>;
  createCustomer?: Maybe<CreateYourAccountResponse>;
  /** # customerRating */
  createCustomerDeliveryRating?: Maybe<SuccessResponse>;
  /** # customerFeedback */
  createCustomerFeedback?: Maybe<SuccessResponse>;
  /** Customer Food Preference */
  createCustomerFoodPreference?: Maybe<SuccessResponse>;
  createCustomerOrder?: Maybe<CreateOrderResponse>;
  createCustomerOrderDirectPayment?: Maybe<CreateOrderResponse>;
  createCustomerOrderFeedback?: Maybe<SuccessResponse>;
  createCustomerOrderForPayment?: Maybe<CreateOrderResponse>;
  createCustomerOrderInCache?: Maybe<CreateOrderResponse>;
  createCustomerOrderNow?: Maybe<CreateOrderResponse>;
  createCustomerOrderRating?: Maybe<SuccessResponse>;
  /** # CustomerPoints */
  createCustomerPoint?: Maybe<CreatePointResponse>;
  /** Delivery */
  createDelivery?: Maybe<CreateDeliveryResponse>;
  createDeliveryFeedback?: Maybe<SuccessResponse>;
  createDeliveryRate?: Maybe<SuccessResponse>;
  /** # ExternalService */
  createExternalService?: Maybe<ExternalServiceResponse>;
  createExternalServiceApiKey?: Maybe<ExternalServiceResponse>;
  createExternalServiceToken?: Maybe<ExternalServiceTokenResponse>;
  createFlexibleRide?: Maybe<StringDataResponse>;
  createGame?: Maybe<SuccessResponse>;
  /** Ingredients */
  createIngredient?: Maybe<SuccessResponse>;
  /** # Menu */
  createMenu?: Maybe<SuccessResponse>;
  createOnDemandRide?: Maybe<StringDataResponse>;
  createPaidDelivery?: Maybe<SuccessResponse>;
  createPayOnDeliveryClaim?: Maybe<SuccessResponse>;
  /** # Product */
  createProduct?: Maybe<SuccessResponse>;
  createRider?: Maybe<CreateYourAccountResponse>;
  createRiderFeedback?: Maybe<SuccessResponse>;
  /** # RiderPoints */
  createRiderPoint?: Maybe<CreatePointResponse>;
  createRole: CreateRoleResponse;
  createSalesPerson?: Maybe<SuccessResponse>;
  createScanToOrder?: Maybe<CreateCallCenterAgentOrderResponse>;
  createScanToOrderDirectPayment?: Maybe<CreateCallCenterAgentOrderResponse>;
  createScanToOrderNow?: Maybe<CreateCallCenterAgentOrderResponse>;
  /** # shopBanner */
  createShopBanner?: Maybe<SuccessResponse>;
  createStaff?: Maybe<CreateYourAccountResponse>;
  customerCancelOrder?: Maybe<SuccessResponse>;
  customerLogin?: Maybe<CreateYourAccountResponse>;
  customerLogout?: Maybe<SuccessResponse>;
  customerPhoneNumberVerification?: Maybe<SuccessResponse>;
  customerRedeemCouponWithMomo?: Maybe<SuccessResponse>;
  customerRedeemCouponWithPMCM?: Maybe<SuccessResponse>;
  /** Customer coupon */
  customerRedeemCouponWithPoints?: Maybe<SuccessResponse>;
  customerRedeemMultiCouponWithPoints?: Maybe<SuccessResponse>;
  customerUpdateCustomerAccountDetails?: Maybe<SuccessResponse>;
  customerUpdateDeviceToken?: Maybe<SuccessResponse>;
  customerUseCoupon?: Maybe<SuccessResponse>;
  customerUseWallet?: Maybe<SuccessResponse>;
  customerVerifyCreateAccountOTP?: Maybe<SuccessResponse>;
  customerVerifyOrderOTPOnDelivery?: Maybe<SuccessResponse>;
  customerVerifyOtpLogin?: Maybe<CreateYourAccountResponse>;
  customerVerifyPhoneNumberOtpLogin?: Maybe<SuccessResponse>;
  customerVerifyResetAccountOTP?: Maybe<SuccessResponse>;
  deleteAdmninistratorAccount?: Maybe<SuccessResponse>;
  deleteCallCenterAgentAccount?: Maybe<SuccessResponse>;
  deleteCallCenterAgentDeliveryRequest?: Maybe<SuccessResponse>;
  deleteCivilServantType?: Maybe<SuccessResponse>;
  deleteCustomerAccount?: Maybe<SuccessResponse>;
  /** deliveryRequest */
  deleteDeliveryRequest?: Maybe<SuccessResponse>;
  deleteRiderAccount?: Maybe<SuccessResponse>;
  deleteRole: SuccessResponse;
  deleteSalesPersonAccount?: Maybe<SuccessResponse>;
  deleteShopBanner?: Maybe<SuccessResponse>;
  disableBranchConstituent?: Maybe<SuccessResponse>;
  disableBranchProduct?: Maybe<SuccessResponse>;
  disableCivilServantType?: Maybe<SuccessResponse>;
  disableConstituent?: Maybe<SuccessResponse>;
  disableCoupon?: Maybe<SuccessResponse>;
  disableProduct?: Maybe<SuccessResponse>;
  disableShopBanner?: Maybe<SuccessResponse>;
  enableBranch?: Maybe<SuccessResponse>;
  enableBranchConstituent?: Maybe<SuccessResponse>;
  enableBranchProduct?: Maybe<SuccessResponse>;
  enableCoupon?: Maybe<SuccessResponse>;
  errorCreateCustomerOrderInCache?: Maybe<SuccessResponse>;
  errorPayCashoutRequestInCache?: Maybe<SuccessResponse>;
  errorPayCourierDeliveryFeeInCache?: Maybe<SuccessResponse>;
  errorPayCustomerOrderRefundInCache?: Maybe<SuccessResponse>;
  errorPayCustomerTransactionInCache?: Maybe<SuccessResponse>;
  errorSendMoneyInCache?: Maybe<SuccessResponse>;
  errorServiceFeeInCache?: Maybe<SuccessResponse>;
  estimateFlexible: StringDataResponse;
  estimateOnDemand: StringDataResponse;
  findLocationAddress?: Maybe<GetCustomerDeliveryAddress>;
  /** # CustomerWallet */
  generateCustomerTransactionInCache?: Maybe<CreateCustomerWalletPointResponse>;
  generateRiderTransaction?: Maybe<CreateRiderWalletResponse>;
  getBoltApiAccessToken: Scalars['String']['output'];
  getFlexibleRideDetails: StringDataResponse;
  getOnDemandRideDetails: StringDataResponse;
  getRideDetails: StringDataResponse;
  goOffline?: Maybe<SuccessResponse>;
  goOnline?: Maybe<SuccessResponse>;
  leaderBoardRequest?: Maybe<SuccessResponse>;
  loginAdministrator?: Maybe<LoginAdministratorResponse>;
  manuallyAddCustomerPoint?: Maybe<CreatePointResponse>;
  manuallyAssignCallCenterAgentDelivery?: Maybe<SuccessResponse>;
  manuallyAssignDelivery?: Maybe<SuccessResponse>;
  markCallCenterAgentDeliveryCompleted?: Maybe<SuccessResponse>;
  markCallCenterAgentOrderCompleted?: Maybe<SuccessResponse>;
  markCallCenterAgentOrderDelivered?: Maybe<SuccessResponse>;
  markCallCenterAgentOrderReady?: Maybe<SuccessResponse>;
  markCustomerOrderDeliveering?: Maybe<SuccessResponse>;
  markDeliveryCompleted?: Maybe<SuccessResponse>;
  markOrderCompleted?: Maybe<SuccessResponse>;
  markOrderDelivered?: Maybe<SuccessResponse>;
  markOrderReady?: Maybe<SuccessResponse>;
  markYangoDeliveryAsDeliveering?: Maybe<SuccessResponse>;
  payCashoutRequest?: Maybe<SuccessResponse>;
  payCashoutRequestInCache?: Maybe<SuccessResponse>;
  payCourierDeliveryFee?: Maybe<SuccessResponse>;
  payCourierDeliveryFeeInCache?: Maybe<SuccessResponse>;
  payCustomerOrderForPayment?: Maybe<CreateOrderResponse>;
  payCustomerOrderInCache?: Maybe<CreateOrderResponse>;
  payCustomerOrderPhoneNumberVerification?: Maybe<SuccessResponse>;
  payCustomerOrderRefundInCache?: Maybe<SuccessResponse>;
  payCustomerOrderRefundToCustomer?: Maybe<SuccessResponse>;
  payCustomerOrderVerifyOTP?: Maybe<SuccessResponse>;
  payCustomerTransactionInCache?: Maybe<CreateCustomerWalletPointResponse>;
  payForCustomerOrderLater?: Maybe<SuccessResponse>;
  payForScanToOrderLater?: Maybe<ExternalServiceTokenResponse>;
  payScanToOrderForPayment?: Maybe<CreateCallCenterAgentOrderResponse>;
  payScanToOrderInCache?: Maybe<CreateCallCenterAgentOrderResponse>;
  rejectCashoutRequest?: Maybe<CreateCashoutRequestResponse>;
  rejectCourierDeliveryFee?: Maybe<CreateCourierDeliveryFeeResponse>;
  rejectCustomerOrderRefund?: Maybe<SuccessResponse>;
  removeCustomerSearch?: Maybe<SuccessResponse>;
  resetAdministratorPassword?: Maybe<SuccessResponse>;
  resetCallCenterAgentPassword?: Maybe<SuccessResponse>;
  resetCustomerPassword?: Maybe<SuccessResponse>;
  resetRiderPassword?: Maybe<SuccessResponse>;
  resetSalesPersonPassword?: Maybe<SuccessResponse>;
  resetStaffPassword?: Maybe<SuccessResponse>;
  retryCustomerPhoneNumberVerification?: Maybe<SuccessResponse>;
  retryVerifyResetCustomerPassword?: Maybe<SuccessResponse>;
  riderAcceptCallCenterAgentDeliveryRequest?: Maybe<SuccessResponse>;
  riderAcceptDeliveryRequest?: Maybe<SuccessResponse>;
  /** # Call center Delivery request */
  riderDeclineCallCenterAgentDeliveryRequest?: Maybe<SuccessResponse>;
  riderDeclineDeliveryRequest?: Maybe<SuccessResponse>;
  riderLogin?: Maybe<CreateYourAccountResponse>;
  riderLogout?: Maybe<SuccessResponse>;
  riderMomoNumberVerification?: Maybe<SuccessResponse>;
  riderPayServiceFee?: Maybe<CreateRiderWalletResponse>;
  riderPayServiceFeeInCache?: Maybe<SuccessResponse>;
  riderPhoneNumberVerification?: Maybe<SuccessResponse>;
  riderSendCallCenterAgentOtp?: Maybe<SuccessResponse>;
  riderSendCustomerOtp?: Maybe<SuccessResponse>;
  riderSendMoneyInCache?: Maybe<RiderSendMoneyResponse>;
  /** riderSendMoney */
  riderSendOrderMoney?: Maybe<RiderSendMoneyResponse>;
  riderSendOrderMoneyNow?: Maybe<RiderSendMoneyResponse>;
  riderUpdateAccountDetails?: Maybe<SuccessResponse>;
  riderUpdateBranch?: Maybe<SuccessResponse>;
  riderUpdateDeviceToken?: Maybe<SuccessResponse>;
  riderVerifyCallCenterAgentDeliveryOTP?: Maybe<SuccessResponse>;
  riderVerifyCreateAccountOTP?: Maybe<SuccessResponse>;
  riderVerifyCreateMomotOTP?: Maybe<SuccessResponse>;
  riderVerifyDeliveryOTP?: Maybe<SuccessResponse>;
  riderVerifyResetAccountOTP?: Maybe<SuccessResponse>;
  riderWithDrawWallet?: Maybe<SuccessResponse>;
  /** # SalesPerson */
  salesPersonLogin?: Maybe<CreateYourAccountResponse>;
  salesPersonLogout?: Maybe<SuccessResponse>;
  salesPersonPhoneNumberVerification?: Maybe<SuccessResponse>;
  salesPersonUpdateDeviceToken?: Maybe<SuccessResponse>;
  salesPersonVerifyCreateAccountOTP?: Maybe<SuccessResponse>;
  salesPersonVerifyResetAccountOTP?: Maybe<SuccessResponse>;
  /** # CourierDeliveryFee */
  saveCustomerSearch?: Maybe<SuccessResponse>;
  scheduleCustomerDeletion?: Maybe<SuccessResponse>;
  scheduleRiderDeletion?: Maybe<SuccessResponse>;
  sendARiderCallCenterAgentDeliveryRequest?: Maybe<SuccessResponse>;
  sendARiderDeliveryRequest?: Maybe<SuccessResponse>;
  sendRiderCallCenterAgentDeliveryOtp?: Maybe<SuccessResponse>;
  sendRiderDeliveryOtp?: Maybe<SuccessResponse>;
  staffChangePassword?: Maybe<SuccessResponse>;
  staffLogin?: Maybe<LoginStaffResponse>;
  staffLogout?: Maybe<SuccessResponse>;
  staffPhoneNumberVerification?: Maybe<SuccessResponse>;
  staffUpdateDeviceToken?: Maybe<SuccessResponse>;
  staffVerifyCreateAccountOTP?: Maybe<SuccessResponse>;
  staffVerifyResetAccountOTP?: Maybe<SuccessResponse>;
  /** # Games */
  stakeGame?: Maybe<StakeAGameResponse>;
  terminateCustomerAccountDeletion?: Maybe<SuccessResponse>;
  terminateRiderAccountDeletion?: Maybe<SuccessResponse>;
  toggleBranchCourierType?: Maybe<SuccessResponse>;
  toggleEnableRole: SuccessResponse;
  toggleExternalServiceStatus?: Maybe<ExternalServiceResponse>;
  topUpCustomerPhoneNumberVerification?: Maybe<CreateVerifiedPhoneNumberOtpResponse>;
  topUpCustomerVerifyOTP?: Maybe<SuccessResponse>;
  topUpWalletInCache?: Maybe<CreateCustomerWalletPointResponse>;
  unassignRiderFromDelivery?: Maybe<SuccessResponse>;
  updateBranchtDetails?: Maybe<SuccessResponse>;
  /** # */
  updateConstituentDetails?: Maybe<SuccessResponse>;
  updateCustomerAccountDetails?: Maybe<SuccessResponse>;
  updateCustomerFoodPreference?: Maybe<SuccessResponse>;
  updateCustomerOrder?: Maybe<SuccessResponse>;
  updateCustomerUserName?: Maybe<SuccessResponse>;
  updateIngredient?: Maybe<SuccessResponse>;
  updatePreorderedCallCenterOrders?: Maybe<SuccessResponse>;
  updatePreorderedCustomerOrders?: Maybe<SuccessResponse>;
  updateProductDetails?: Maybe<SuccessResponse>;
  updateRiderAccountDetails?: Maybe<SuccessResponse>;
  updateRiderBranch?: Maybe<SuccessResponse>;
  updateRiderLocation?: Maybe<SuccessResponse>;
  updateRiderUserName?: Maybe<SuccessResponse>;
  updateRole: UpdateRoleResponse;
  verifyCallCenterAgentOrderOTPOnDelivery?: Maybe<SuccessResponse>;
  verifyCouponCode?: Maybe<CreateCouponResponse>;
  verifyCustomerTopUpOrder?: Maybe<SuccessResponse>;
  verifyOTPChangeCustomerPhoneNumber?: Maybe<SuccessResponse>;
  verifyResetAdministratorPassword?: Maybe<SuccessResponse>;
  verifyResetCallCenterAgentPassword?: Maybe<SuccessResponse>;
  verifyResetCustomerPassword?: Maybe<SuccessResponse>;
  verifyResetRiderPassword?: Maybe<SuccessResponse>;
  verifyResetSalesPersonPassword?: Maybe<SuccessResponse>;
  verifyResetStaffPassword?: Maybe<SuccessResponse>;
  verifyTransactionStatus?: Maybe<SuccessDataResponse>;
};


export type MutationAcceptCallCenterAgentOrderArgs = {
  callCenterAgentOrderId: Scalars['ID']['input'];
  salesPersonNumber?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAcceptCustomerOrderArgs = {
  acceptOrderInput: AcceptOrderInput;
};


export type MutationAcceptYangoClaimArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type MutationAdministratorCreateRiderArgs = {
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  username: Scalars['String']['input'];
};


export type MutationAdministratorPhoneNumberVerificationArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationAdministratorUpdateDeviceTokenArgs = {
  deviceNotificationToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAdministratorVerifyCreateAccountOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationAdministratorVerifyResetAccountOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationAdminsAllowRiderUpdateProfileArgs = {
  isProfileUpdated?: InputMaybe<Scalars['ID']['input']>;
  riderId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationAdminsDeleteCustomerAccountArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationAdminsDeleteRiderAccountArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationAdminsDisableCallCenterAgentAccountArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationAdminsDisableCustomerAccountArgs = {
  isEnabled: Scalars['Boolean']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationAdminsDisableRiderAccountArgs = {
  isEnabled: Scalars['Boolean']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationAdminsDisableSalesPersonAccountArgs = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['ID']['input'];
};


export type MutationAdminsVerifyRiderAccountArgs = {
  isVerified: Scalars['Boolean']['input'];
  userId: Scalars['ID']['input'];
};


export type MutationApproveCashoutRequestArgs = {
  cashoutInput: UpdateCashRequestInput;
};


export type MutationApproveCivilServantRequestArgs = {
  customerId: Scalars['ID']['input'];
  verified: CivilServantTypeVerificationType;
};


export type MutationApproveCourierDeliveryFeeArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type MutationApproveCustomerOrderRefundArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['ID']['input'];
  customerOrderRefundId: Scalars['ID']['input'];
  refundMethod: RefundMethod;
  transactionType: RefundTransactionType;
};


export type MutationBranchDeliveryOnlyArgs = {
  branchId: Scalars['ID']['input'];
  status: Scalars['Boolean']['input'];
};


export type MutationBranchPickupOnlyArgs = {
  branchId: Scalars['ID']['input'];
  status: Scalars['Boolean']['input'];
};


export type MutationBroadcastClosestRidersNotificationArgs = {
  branchId: Scalars['ID']['input'];
  deliveryId: Scalars['ID']['input'];
};


export type MutationBroadcastClosestRidersNotificationCallCenterArgs = {
  branchId: Scalars['ID']['input'];
  callCenterAgentDeliveryId: Scalars['ID']['input'];
};


export type MutationCallCenterAgentLoginArgs = {
  aDeviceToken?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationCallCenterAgentLogoutArgs = {
  aDeviceToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCallCenterAgentPhoneNumberVerificationArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationCallCenterAgentVerifyCreateAccountOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationCallCenterAgentVerifyResetAccountOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationCancelCallCenterAgentOrderArgs = {
  callCenterAgentOrderId: Scalars['ID']['input'];
};


export type MutationCancelCustomerOrderArgs = {
  cancelledReason?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
};


export type MutationCancelYangoDeliveryArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type MutationChangeCallCenterAgentDeliveryToPickupArgs = {
  callCenterAgentOrderId: Scalars['ID']['input'];
};


export type MutationChangeDeliveryToPickupArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationChangePickupToCallCenterDeliveryArgs = {
  callCenterAgentOrderId: Scalars['ID']['input'];
  deliveryType: EnumDeliveryType;
};


export type MutationChangePickupToDeliveryArgs = {
  deliveryType: EnumDeliveryType;
  orderId: Scalars['ID']['input'];
};


export type MutationCheckConstituentAvailabilityArgs = {
  branchId: Scalars['ID']['input'];
  constituentIds: Array<Scalars['ID']['input']>;
};


export type MutationCheckCustomerPreferProductArgs = {
  productIds: Array<Scalars['ID']['input']>;
};


export type MutationCheckOrderRatingStatusArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationCheckProductAvailabilityArgs = {
  branchId: Scalars['ID']['input'];
  productIds: Array<Scalars['ID']['input']>;
};


export type MutationCivilServantRequestArgs = {
  civilServantTypeId: Scalars['String']['input'];
  staffId: Scalars['String']['input'];
};


export type MutationClosestRidersNotificationArgs = {
  branchId: Scalars['ID']['input'];
  deliveryId: Scalars['ID']['input'];
};


export type MutationCreateAdministratorArgs = {
  adminType: EnumAdminType;
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  username: Scalars['username_String_NotNull_minLength_3_maxLength_256']['input'];
};


export type MutationCreateBranchArgs = {
  branchInput: CreateBranchInput;
};


export type MutationCreateCallCenterAgentArgs = {
  email?: InputMaybe<Scalars['email_String_minLength_3_maxLength_256']['input']>;
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  username: Scalars['username_String_NotNull_minLength_3_maxLength_256']['input'];
};


export type MutationCreateCallCenterAgentDeliveryArgs = {
  branchId: Scalars['ID']['input'];
  callCenterAgentOrderId: Scalars['ID']['input'];
};


export type MutationCreateCallCenterAgentOrderArgs = {
  orderInput: CallCenterOrderInput;
};


export type MutationCreateCashoutRequestArgs = {
  cashoutInput: CreateCashRequestInput;
};


export type MutationCreateCashoutRequestIdempotenticallyArgs = {
  cashoutInput: CreateCashRequestIdempotencyInput;
};


export type MutationCreateCivilServantTypeArgs = {
  discount: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateCouponArgs = {
  couponInput: CreateCouponInput;
};


export type MutationCreateCourierDeliveryFeeArgs = {
  courierFeeInput: CreateCourierDeliveryFeeInput;
};


export type MutationCreateCustomerArgs = {
  aDeviceToken?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  platform?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};


export type MutationCreateCustomerDeliveryRatingArgs = {
  deliveryId: Scalars['ID']['input'];
  ratingNumber: Scalars['ratingNumber_Int_NotNull_minLength_1_maxLength_5']['input'];
};


export type MutationCreateCustomerFeedbackArgs = {
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateCustomerFoodPreferenceArgs = {
  ingredientIds: Array<Scalars['ID']['input']>;
};


export type MutationCreateCustomerOrderArgs = {
  orderInput: OrderInput;
};


export type MutationCreateCustomerOrderDirectPaymentArgs = {
  orderInput: OrderInputNow;
};


export type MutationCreateCustomerOrderFeedbackArgs = {
  customerOrderId: Scalars['ID']['input'];
  message: Scalars['String']['input'];
};


export type MutationCreateCustomerOrderForPaymentArgs = {
  cacheOrderInput: CacheOrderInput;
};


export type MutationCreateCustomerOrderInCacheArgs = {
  cacheOrderInput: CacheOrderInput;
};


export type MutationCreateCustomerOrderNowArgs = {
  orderInput: OrderInputNow;
};


export type MutationCreateCustomerOrderRatingArgs = {
  orderId: Scalars['ID']['input'];
  ratingNumber: Scalars['ratingNumber_Int_NotNull_minLength_1_maxLength_5']['input'];
};


export type MutationCreateCustomerPointArgs = {
  pointInput: CreatePointInput;
};


export type MutationCreateDeliveryArgs = {
  deliveryInput: DeliveryInput;
};


export type MutationCreateDeliveryFeedbackArgs = {
  deliveryId: Scalars['ID']['input'];
  message: Scalars['String']['input'];
};


export type MutationCreateDeliveryRateArgs = {
  deliveryType?: InputMaybe<EnumDeliveryType>;
  distance?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateExternalServiceArgs = {
  phoneNumber?: InputMaybe<Scalars['phoneNumber_String_minLength_9_maxLength_13']['input']>;
  username: Scalars['username_String_NotNull_minLength_3_maxLength_256']['input'];
};


export type MutationCreateExternalServiceApiKeyArgs = {
  externalServiceId: Scalars['String']['input'];
};


export type MutationCreateExternalServiceTokenArgs = {
  apiKey?: InputMaybe<Scalars['String']['input']>;
  externalServiceId: Scalars['String']['input'];
};


export type MutationCreateFlexibleRideArgs = {
  flexibleCreateRequestInput?: InputMaybe<FlexibleCreateRequestInput>;
};


export type MutationCreateGameArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateIngredientArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateOnDemandRideArgs = {
  onDemandCreateRequestInput?: InputMaybe<OnDemandCreateRequestInput>;
  orderId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreatePaidDeliveryArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type MutationCreatePayOnDeliveryClaimArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type MutationCreateRiderArgs = {
  aDeviceToken?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  riderType: EnumRiderType;
  username: Scalars['String']['input'];
};


export type MutationCreateRiderFeedbackArgs = {
  message: Scalars['String']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateRiderPointArgs = {
  pointInput: CreatePointInput;
};


export type MutationCreateRoleArgs = {
  description: Scalars['description_String_NotNull_minLength_3_maxLength_556']['input'];
  name: Scalars['name_String_NotNull_minLength_2_maxLength_256']['input'];
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationCreateSalesPersonArgs = {
  branchId: Scalars['ID']['input'];
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  username: Scalars['username_String_NotNull_minLength_3_maxLength_256']['input'];
};


export type MutationCreateScanToOrderArgs = {
  orderInput: CallCenterOrderInput;
};


export type MutationCreateScanToOrderDirectPaymentArgs = {
  orderInput: CallCenterOrderInputNow;
};


export type MutationCreateScanToOrderNowArgs = {
  orderInput: CallCenterOrderInputNow;
};


export type MutationCreateStaffArgs = {
  branchId: Scalars['String']['input'];
  displayName: Scalars['displayName_String_NotNull_minLength_2_maxLength_256']['input'];
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  roleId: Scalars['String']['input'];
};


export type MutationCustomerCancelOrderArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationCustomerLoginArgs = {
  aDeviceToken?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  userAgent?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerLogoutArgs = {
  aDeviceToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerPhoneNumberVerificationArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationCustomerRedeemCouponWithMomoArgs = {
  couponId: Scalars['ID']['input'];
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerRedeemCouponWithPmcmArgs = {
  couponId: Scalars['ID']['input'];
};


export type MutationCustomerRedeemCouponWithPointsArgs = {
  couponId: Scalars['ID']['input'];
};


export type MutationCustomerRedeemMultiCouponWithPointsArgs = {
  couponId: Scalars['ID']['input'];
};


export type MutationCustomerUpdateCustomerAccountDetailsArgs = {
  accountDetailsInput?: InputMaybe<CustomerAccountInput>;
};


export type MutationCustomerUpdateDeviceTokenArgs = {
  aDeviceToken: Scalars['aDeviceToken_String_NotNull_minLength_10']['input'];
  userAgent?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerUseCouponArgs = {
  couponId: Scalars['ID']['input'];
};


export type MutationCustomerUseWalletArgs = {
  customerOrderId?: InputMaybe<Scalars['ID']['input']>;
  walletOut: Scalars['Int']['input'];
};


export type MutationCustomerVerifyCreateAccountOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationCustomerVerifyOrderOtpOnDeliveryArgs = {
  orderId: Scalars['ID']['input'];
  otp: Scalars['Int']['input'];
};


export type MutationCustomerVerifyOtpLoginArgs = {
  aDeviceToken?: InputMaybe<Scalars['String']['input']>;
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  userAgent?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCustomerVerifyPhoneNumberOtpLoginArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationCustomerVerifyResetAccountOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationDeleteCallCenterAgentDeliveryRequestArgs = {
  callCenterAgentDeliveryId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteCivilServantTypeArgs = {
  civilServantTypeId: Scalars['String']['input'];
};


export type MutationDeleteDeliveryRequestArgs = {
  deliveryId: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteShopBannerArgs = {
  shopBannerId: Scalars['ID']['input'];
};


export type MutationDisableBranchConstituentArgs = {
  branchId: Scalars['ID']['input'];
  constituentIds: Array<Scalars['ID']['input']>;
};


export type MutationDisableBranchProductArgs = {
  branchId: Scalars['ID']['input'];
  productIds: Array<Scalars['ID']['input']>;
};


export type MutationDisableCivilServantTypeArgs = {
  civilServantTypeId: Scalars['String']['input'];
};


export type MutationDisableConstituentArgs = {
  constituentId: Scalars['ID']['input'];
  enabled: Scalars['Boolean']['input'];
};


export type MutationDisableCouponArgs = {
  couponId: Scalars['ID']['input'];
};


export type MutationDisableProductArgs = {
  enabled: Scalars['Boolean']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationDisableShopBannerArgs = {
  shopBannerId: Scalars['ID']['input'];
  status: Scalars['Boolean']['input'];
};


export type MutationEnableBranchArgs = {
  branchId: Scalars['ID']['input'];
  status: Scalars['Boolean']['input'];
};


export type MutationEnableBranchConstituentArgs = {
  branchId: Scalars['ID']['input'];
  constituentIds: Array<Scalars['ID']['input']>;
};


export type MutationEnableBranchProductArgs = {
  branchId: Scalars['ID']['input'];
  productIds: Array<Scalars['ID']['input']>;
};


export type MutationEnableCouponArgs = {
  couponId: Scalars['ID']['input'];
};


export type MutationEstimateFlexibleArgs = {
  stops: Array<StopInput>;
};


export type MutationEstimateOnDemandArgs = {
  stops: Array<StopInput>;
};


export type MutationFindLocationAddressArgs = {
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationGenerateCustomerTransactionInCacheArgs = {
  referenceNumber: Scalars['String']['input'];
  walletIn: Scalars['Int']['input'];
};


export type MutationGenerateRiderTransactionArgs = {
  customerOrderId: Scalars['ID']['input'];
  paymentType: WalletPaymentType;
  walletIn: Scalars['Int']['input'];
};


export type MutationGetFlexibleRideDetailsArgs = {
  rideId: Scalars['String']['input'];
};


export type MutationGetOnDemandRideDetailsArgs = {
  rideId: Scalars['String']['input'];
};


export type MutationGetRideDetailsArgs = {
  rideId: Scalars['String']['input'];
};


export type MutationGoOnlineArgs = {
  goOnlineInput: GoOnlineInput;
};


export type MutationLeaderBoardRequestArgs = {
  status: Scalars['Boolean']['input'];
};


export type MutationLoginAdministratorArgs = {
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationManuallyAddCustomerPointArgs = {
  pointInput: ManualPointInput;
};


export type MutationManuallyAssignCallCenterAgentDeliveryArgs = {
  callCenterAgentOrderId: Scalars['ID']['input'];
  riderId: Scalars['ID']['input'];
};


export type MutationManuallyAssignDeliveryArgs = {
  orderId: Scalars['ID']['input'];
  riderId: Scalars['ID']['input'];
};


export type MutationMarkCallCenterAgentDeliveryCompletedArgs = {
  branchId: Scalars['ID']['input'];
  callCenterAgentDeliveryId: Scalars['ID']['input'];
};


export type MutationMarkCallCenterAgentOrderCompletedArgs = {
  callCenterAgentOrderId: Scalars['ID']['input'];
};


export type MutationMarkCallCenterAgentOrderDeliveredArgs = {
  callCenterAgentOrderId: Scalars['ID']['input'];
};


export type MutationMarkCallCenterAgentOrderReadyArgs = {
  callCenterAgentOrderId: Scalars['ID']['input'];
};


export type MutationMarkCustomerOrderDeliveeringArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type MutationMarkDeliveryCompletedArgs = {
  branchId: Scalars['ID']['input'];
  deliveryId: Scalars['ID']['input'];
};


export type MutationMarkOrderCompletedArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationMarkOrderDeliveredArgs = {
  orderId: Scalars['ID']['input'];
  otp?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationMarkOrderReadyArgs = {
  customerId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
};


export type MutationMarkYangoDeliveryAsDeliveeringArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type MutationPayCashoutRequestArgs = {
  cashoutRequestId: Scalars['ID']['input'];
  clientReference?: InputMaybe<Scalars['String']['input']>;
  riderId: Scalars['ID']['input'];
};


export type MutationPayCashoutRequestInCacheArgs = {
  administratorId: Scalars['ID']['input'];
  cashoutRequestId: Scalars['ID']['input'];
  cashoutResponse?: InputMaybe<Scalars['String']['input']>;
  referenceNumber: Scalars['String']['input'];
};


export type MutationPayCourierDeliveryFeeArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type MutationPayCourierDeliveryFeeInCacheArgs = {
  courierDeliveryFeeId: Scalars['ID']['input'];
  courierFeeResponse?: InputMaybe<Scalars['String']['input']>;
  referenceNumber: Scalars['String']['input'];
  salesPersonId: Scalars['ID']['input'];
};


export type MutationPayCustomerOrderForPaymentArgs = {
  payOrderInput: PayOrderInput;
};


export type MutationPayCustomerOrderInCacheArgs = {
  payOrderInput: PayOrderInput;
};


export type MutationPayCustomerOrderPhoneNumberVerificationArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationPayCustomerOrderRefundInCacheArgs = {
  administratorId: Scalars['ID']['input'];
  customerOrderRefundId: Scalars['ID']['input'];
  customerRefundResponse: Scalars['ID']['input'];
  referenceNumber: Scalars['ID']['input'];
};


export type MutationPayCustomerOrderRefundToCustomerArgs = {
  customerOrderRefundId: Scalars['ID']['input'];
  idempotencyKey: Scalars['String']['input'];
};


export type MutationPayCustomerOrderVerifyOtpArgs = {
  channel: Scalars['String']['input'];
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationPayCustomerTransactionInCacheArgs = {
  cacheKey: Scalars['String']['input'];
  momoNumber?: InputMaybe<Scalars['momoNumber_String_minLength_10_maxLength_14']['input']>;
  referenceNumber: Scalars['String']['input'];
  topUpResponse?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPayForCustomerOrderLaterArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
  customerOrderId?: InputMaybe<Scalars['String']['input']>;
  momoNumber?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPayForScanToOrderLaterArgs = {
  callCenterAgentOrderId?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  momoNumber?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPayScanToOrderForPaymentArgs = {
  payOrderInput: PayOrderInput;
};


export type MutationPayScanToOrderInCacheArgs = {
  payOrderInput: PayOrderInput;
};


export type MutationRejectCashoutRequestArgs = {
  cashoutRequestId: Scalars['ID']['input'];
  riderId: Scalars['ID']['input'];
};


export type MutationRejectCourierDeliveryFeeArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type MutationRejectCustomerOrderRefundArgs = {
  customerOrderRefundId: Scalars['ID']['input'];
};


export type MutationRemoveCustomerSearchArgs = {
  searchId: Scalars['String']['input'];
};


export type MutationResetAdministratorPasswordArgs = {
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationResetCallCenterAgentPasswordArgs = {
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationResetCustomerPasswordArgs = {
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationResetRiderPasswordArgs = {
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationResetSalesPersonPasswordArgs = {
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationResetStaffPasswordArgs = {
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationRetryCustomerPhoneNumberVerificationArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationRetryVerifyResetCustomerPasswordArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationRiderAcceptCallCenterAgentDeliveryRequestArgs = {
  callCenterAgentOrderId: Scalars['ID']['input'];
};


export type MutationRiderAcceptDeliveryRequestArgs = {
  orderId: Scalars['ID']['input'];
};


export type MutationRiderDeclineCallCenterAgentDeliveryRequestArgs = {
  callCenterAgentDeliveryId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRiderDeclineDeliveryRequestArgs = {
  deliveryId: Scalars['ID']['input'];
};


export type MutationRiderLoginArgs = {
  aDeviceToken?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationRiderLogoutArgs = {
  aDeviceToken: Scalars['String']['input'];
};


export type MutationRiderMomoNumberVerificationArgs = {
  momoNumber: Scalars['momoNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  momoNumberChannel?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRiderPayServiceFeeArgs = {
  referenceNumber: Scalars['String']['input'];
};


export type MutationRiderPhoneNumberVerificationArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationRiderSendCallCenterAgentOtpArgs = {
  callCenterAgentOrderId: Scalars['ID']['input'];
};


export type MutationRiderSendCustomerOtpArgs = {
  customerId: Scalars['ID']['input'];
  orderId: Scalars['ID']['input'];
};


export type MutationRiderSendMoneyInCacheArgs = {
  cacheKey?: InputMaybe<Scalars['String']['input']>;
  momoNumber?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  sendMoneyResponse?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRiderSendOrderMoneyArgs = {
  anyDeliveryId: Scalars['ID']['input'];
  isCallCenter: Scalars['Boolean']['input'];
  referenceNumber: Scalars['String']['input'];
};


export type MutationRiderSendOrderMoneyNowArgs = {
  anyDeliveryId: Scalars['ID']['input'];
  channel: Scalars['String']['input'];
  isCallCenter: Scalars['Boolean']['input'];
  momoNumber: Scalars['String']['input'];
  referenceNumber: Scalars['String']['input'];
};


export type MutationRiderUpdateAccountDetailsArgs = {
  accountDetailsInput?: InputMaybe<AccountDetailsInput>;
};


export type MutationRiderUpdateBranchArgs = {
  branchId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRiderUpdateDeviceTokenArgs = {
  aDeviceToken: Scalars['aDeviceToken_String_NotNull_minLength_10']['input'];
};


export type MutationRiderVerifyCallCenterAgentDeliveryOtpArgs = {
  callCenterAgentDeliveryId: Scalars['ID']['input'];
  otp: Scalars['Int']['input'];
};


export type MutationRiderVerifyCreateAccountOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationRiderVerifyCreateMomotOtpArgs = {
  momoNumber: Scalars['momoNumber_String_NotNull_minLength_9_maxLength_13']['input'];
  momoNumberChannel?: InputMaybe<Scalars['String']['input']>;
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
};


export type MutationRiderVerifyDeliveryOtpArgs = {
  deliveryId: Scalars['ID']['input'];
  otp: Scalars['Int']['input'];
};


export type MutationRiderVerifyResetAccountOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationRiderWithDrawWalletArgs = {
  walletOut: Scalars['Int']['input'];
};


export type MutationSalesPersonLoginArgs = {
  aDeviceToken?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationSalesPersonLogoutArgs = {
  aDeviceToken: Scalars['String']['input'];
};


export type MutationSalesPersonPhoneNumberVerificationArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationSalesPersonUpdateDeviceTokenArgs = {
  aDeviceToken: Scalars['aDeviceToken_String_NotNull_minLength_10']['input'];
  loggedInDeviceVersion?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSalesPersonVerifyCreateAccountOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationSalesPersonVerifyResetAccountOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationSaveCustomerSearchArgs = {
  searchField: Scalars['String']['input'];
};


export type MutationSendARiderCallCenterAgentDeliveryRequestArgs = {
  callCenterAgentDeliveryId: Scalars['Int']['input'];
  riderId: Scalars['ID']['input'];
};


export type MutationSendARiderDeliveryRequestArgs = {
  deliveryId: Scalars['Int']['input'];
  riderId: Scalars['ID']['input'];
};


export type MutationSendRiderCallCenterAgentDeliveryOtpArgs = {
  callCenterAgentDeliveryId: Scalars['ID']['input'];
  riderId: Scalars['ID']['input'];
};


export type MutationSendRiderDeliveryOtpArgs = {
  deliveryId: Scalars['ID']['input'];
  riderId: Scalars['ID']['input'];
};


export type MutationStaffChangePasswordArgs = {
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
};


export type MutationStaffLoginArgs = {
  deviceNotificationToken?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['password_String_NotNull_minLength_6_maxLength_256']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationStaffLogoutArgs = {
  deviceNotificationToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationStaffPhoneNumberVerificationArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationStaffUpdateDeviceTokenArgs = {
  deviceNotificationToken: Scalars['deviceNotificationToken_String_NotNull_minLength_10']['input'];
};


export type MutationStaffVerifyCreateAccountOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationStaffVerifyResetAccountOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationStakeGameArgs = {
  gameId: Scalars['ID']['input'];
  stakeCostStatus: GameStakeCostStatusType;
  stakeKey: Scalars['ID']['input'];
};


export type MutationToggleBranchCourierTypeArgs = {
  branchId: Scalars['ID']['input'];
  courierType: CourierType;
};


export type MutationToggleEnableRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationToggleExternalServiceStatusArgs = {
  externalServiceId: Scalars['String']['input'];
  isEnabled: Scalars['Boolean']['input'];
};


export type MutationTopUpCustomerPhoneNumberVerificationArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationTopUpCustomerVerifyOtpArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationTopUpWalletInCacheArgs = {
  channel: Scalars['String']['input'];
  momoNumber: Scalars['String']['input'];
  walletIn: Scalars['Int']['input'];
};


export type MutationUnassignRiderFromDeliveryArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type MutationUpdateBranchtDetailsArgs = {
  branchDetails?: InputMaybe<BranchDetailsInput>;
  branchId: Scalars['ID']['input'];
};


export type MutationUpdateConstituentDetailsArgs = {
  constituentDetails?: InputMaybe<ConstituentDetailsInput>;
  constituentId: Scalars['ID']['input'];
};


export type MutationUpdateCustomerAccountDetailsArgs = {
  accountDetailsInput?: InputMaybe<CustomerAccountInput>;
  customerId: Scalars['ID']['input'];
};


export type MutationUpdateCustomerFoodPreferenceArgs = {
  ingredientIds: Array<Scalars['ID']['input']>;
};


export type MutationUpdateCustomerOrderArgs = {
  customerOrderDetailsInput?: InputMaybe<UpdateOrderInput>;
  customerOrderId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateCustomerUserNameArgs = {
  username: Scalars['String']['input'];
};


export type MutationUpdateIngredientArgs = {
  ingredientId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateProductDetailsArgs = {
  productDetails?: InputMaybe<ProductDetailsInput>;
  productId: Scalars['ID']['input'];
};


export type MutationUpdateRiderAccountDetailsArgs = {
  accountDetailsInput?: InputMaybe<AccountDetailsInput>;
  riderId: Scalars['ID']['input'];
};


export type MutationUpdateRiderBranchArgs = {
  branchId?: InputMaybe<Scalars['ID']['input']>;
  riderId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateRiderLocationArgs = {
  locationInput: LocationInput;
};


export type MutationUpdateRiderUserNameArgs = {
  username: Scalars['String']['input'];
};


export type MutationUpdateRoleArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationVerifyCallCenterAgentOrderOtpOnDeliveryArgs = {
  callCenterAgentOrderId: Scalars['ID']['input'];
  otp: Scalars['Int']['input'];
};


export type MutationVerifyCouponCodeArgs = {
  couponCode: Scalars['String']['input'];
};


export type MutationVerifyCustomerTopUpOrderArgs = {
  referenceNumber: Scalars['String']['input'];
};


export type MutationVerifyOtpChangeCustomerPhoneNumberArgs = {
  otp: Scalars['otp_Int_NotNull_minLength_4_maxLength_4']['input'];
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationVerifyResetAdministratorPasswordArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationVerifyResetCallCenterAgentPasswordArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationVerifyResetCustomerPasswordArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationVerifyResetRiderPasswordArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationVerifyResetSalesPersonPasswordArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationVerifyResetStaffPasswordArgs = {
  phoneNumber: Scalars['phoneNumber_String_NotNull_minLength_9_maxLength_13']['input'];
};


export type MutationVerifyTransactionStatusArgs = {
  clientReference?: InputMaybe<Scalars['String']['input']>;
};

export type OnDemandCreateRequestInput = {
  fare_id: Scalars['String']['input'];
  note_to_driver?: InputMaybe<Scalars['String']['input']>;
  stops: Array<StopAdressInput>;
  user: UserInfoInput;
};

export type OnlineRiderType = {
  __typename?: 'OnlineRiderType';
  deviceToken?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  location?: Maybe<LocationType>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  riderType?: Maybe<EnumRiderType>;
  username?: Maybe<Scalars['String']['output']>;
};

export type OperationTimeInput = {
  closingTime?: InputMaybe<Scalars['String']['input']>;
  openingTime?: InputMaybe<Scalars['String']['input']>;
};

export type OperationTimeType = {
  __typename?: 'OperationTimeType';
  closingTime?: Maybe<Scalars['String']['output']>;
  openingTime?: Maybe<Scalars['String']['output']>;
};

export type OrderInput = {
  PaymentOption: PaymentOptionType;
  address: Scalars['String']['input'];
  branchId: Scalars['ID']['input'];
  comment?: InputMaybe<Scalars['String']['input']>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  deliveryFee?: InputMaybe<Scalars['Int']['input']>;
  deliveryType?: InputMaybe<EnumDeliveryType>;
  description?: InputMaybe<Scalars['String']['input']>;
  gameStakeId?: InputMaybe<Scalars['ID']['input']>;
  location: LocationInput;
  packages: Array<PackagesInput>;
  pickup: Scalars['Boolean']['input'];
  pickupEndDate?: InputMaybe<Scalars['String']['input']>;
  pickupStartDate?: InputMaybe<Scalars['String']['input']>;
  pickupType?: InputMaybe<ScanToOrderPickupType>;
  platform?: InputMaybe<Scalars['String']['input']>;
  purchaseType?: InputMaybe<PurchaseType>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  vehicleCategoryId?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderInputNow = {
  address: Scalars['String']['input'];
  branchId: Scalars['ID']['input'];
  channel?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  deliveryFee?: InputMaybe<Scalars['Int']['input']>;
  deliveryType?: InputMaybe<EnumDeliveryType>;
  description?: InputMaybe<Scalars['String']['input']>;
  gameStakeId?: InputMaybe<Scalars['ID']['input']>;
  location: LocationInput;
  momoNumber?: InputMaybe<Scalars['String']['input']>;
  packages: Array<PackagesInput>;
  paymentOption: PaymentOptionType;
  pickup: Scalars['Boolean']['input'];
  pickupEndDate?: InputMaybe<Scalars['String']['input']>;
  pickupStartDate?: InputMaybe<Scalars['String']['input']>;
  pickupType?: InputMaybe<ScanToOrderPickupType>;
  platform?: InputMaybe<Scalars['String']['input']>;
  purchaseType?: InputMaybe<PurchaseType>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  vehicleCategoryId?: InputMaybe<Scalars['Int']['input']>;
};

export enum OrderStatusType {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Delivered = 'DELIVERED',
  Delivering = 'DELIVERING',
  Pending = 'PENDING',
  Preorder = 'PREORDER',
  Ready = 'READY'
}

export type PackageInput = {
  constituents?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  extras?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};

export type PackagesInput = {
  constituents?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  extras?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  productId: Scalars['ID']['input'];
  quantity: Scalars['quantity_Int_NotNull_minLength_1_maxLength_256']['input'];
};

export type PackagesType = {
  __typename?: 'PackagesType';
  constituents?: Maybe<Array<Maybe<ConstituentType>>>;
  extras?: Maybe<Array<Maybe<ProductType>>>;
  productId?: Maybe<ProductType>;
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type PageType = {
  __typename?: 'PageType';
  size?: Maybe<Scalars['String']['output']>;
};

export type PaginatedCashoutRequest = {
  __typename?: 'PaginatedCashoutRequest';
  cashoutRequestList?: Maybe<Array<Maybe<CashRequestType>>>;
  nextCursor?: Maybe<CashRequestType>;
};

export type PaginatedCasinoGameType = {
  __typename?: 'PaginatedCasinoGameType';
  gamesList?: Maybe<Array<Maybe<CasinoGameType>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<CasinoGameType>;
};

export type PaginatedConstituentsResponse = {
  __typename?: 'PaginatedConstituentsResponse';
  constituentsList?: Maybe<Array<Maybe<ConstituentType>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<ConstituentType>;
};

export type PaginatedCourierDeliveryFee = {
  __typename?: 'PaginatedCourierDeliveryFee';
  courierDeliveryFeeList?: Maybe<Array<Maybe<CourierDeliveryFeeType>>>;
  nextCursor?: Maybe<CourierDeliveryFeeType>;
};

export type PaginatedCustomerOrderRefund = {
  __typename?: 'PaginatedCustomerOrderRefund';
  customerOrderRefundList?: Maybe<Array<Maybe<CustomerOrderRefundType>>>;
  nextCursor?: Maybe<CustomerOrderRefundType>;
};

export type PaginatedGameStakesType = {
  __typename?: 'PaginatedGameStakesType';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<GameStakesType>;
  stakesList?: Maybe<Array<Maybe<GameStakesType>>>;
};

export type PaginatedSlotFaceType = {
  __typename?: 'PaginatedSlotFaceType';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<SlotFaceType>;
  slotFacesList?: Maybe<Array<Maybe<SlotFaceType>>>;
};

export type PayOrderInput = {
  cacheKey: Scalars['String']['input'];
  momoNumber?: InputMaybe<Scalars['momoNumber_String_minLength_10_maxLength_14']['input']>;
  payOrderResponse?: InputMaybe<Scalars['String']['input']>;
  referenceNumber: Scalars['String']['input'];
};

export type PaymentMethodInput = {
  platform?: InputMaybe<Array<InputMaybe<AllPlatformType>>>;
  schedule?: InputMaybe<PaymentMethodScheduleInput>;
  type?: InputMaybe<PaymentOptionType>;
};

export type PaymentMethodSchedule = {
  __typename?: 'PaymentMethodSchedule';
  enabled: Scalars['Boolean']['output'];
  platformRestrictions?: Maybe<Array<Maybe<PlatformRestriction>>>;
};

export type PaymentMethodScheduleInput = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  platformRestrictions?: InputMaybe<Array<PlatformRestrictionInput>>;
};

export type PaymentMethodSettingsType = {
  __typename?: 'PaymentMethodSettingsType';
  platforms?: Maybe<Array<Maybe<AllPlatformType>>>;
  schedule?: Maybe<PaymentMethodSchedule>;
  type?: Maybe<PaymentOptionType>;
};

export enum PaymentOptionType {
  Cash = 'CASH',
  CreditCard = 'CREDIT_CARD',
  MobilePayment = 'MOBILE_PAYMENT',
  PmcmWallet = 'PMCM_WALLET'
}

export type Permissions = {
  __typename?: 'Permissions';
  action?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  resource?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  scope?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PermissionsInput = {
  action?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  resource?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  scope?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum PlatformCallCenterType {
  CallCenter = 'CALL_CENTER',
  ScanToOrder = 'SCAN_TO_ORDER',
  Self = 'SELF'
}

export type PlatformRestriction = {
  __typename?: 'PlatformRestriction';
  alwaysAvailable?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<AllPlatformType>;
  timeRanges?: Maybe<Array<Maybe<TimeRange>>>;
};

export type PlatformRestrictionInput = {
  alwaysAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  platform: AllPlatformType;
  timeRanges?: InputMaybe<Array<TimeRangeInput>>;
};

export enum PlatformType {
  MobileApp = 'MOBILE_APP',
  Web = 'WEB'
}

export enum PointType {
  Checkout = 'CHECKOUT',
  Credit = 'CREDIT',
  Topup = 'TOPUP'
}

export type PricingSnapshot = {
  __typename?: 'PricingSnapshot';
  couponAmount?: Maybe<Scalars['Float']['output']>;
  couponPercentage?: Maybe<Scalars['Float']['output']>;
  discountAmount?: Maybe<Scalars['Float']['output']>;
  discountPercentage?: Maybe<Scalars['Float']['output']>;
  discountedPrice?: Maybe<Scalars['Float']['output']>;
  finalUnitPrice?: Maybe<Scalars['Float']['output']>;
  pointWorth?: Maybe<Scalars['Float']['output']>;
  pointsApplied?: Maybe<Scalars['Float']['output']>;
  pointsDiscountAmount?: Maybe<Scalars['Float']['output']>;
  priceMultiplier?: Maybe<Scalars['Float']['output']>;
  unitPrice?: Maybe<Scalars['Float']['output']>;
};

export enum PrizeType {
  None = 'NONE',
  NonTangible = 'NON_TANGIBLE',
  Tangible = 'TANGIBLE'
}

export type ProductCategoryInput = {
  menu?: InputMaybe<Array<InputMaybe<MenuInput>>>;
  name: Scalars['String']['input'];
};

export type ProductCategoryType = {
  __typename?: 'ProductCategoryType';
  menu?: Maybe<Array<Maybe<MenuType>>>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum ProductCategoryTypeType {
  Chickenman = 'CHICKENMAN',
  Drinks = 'DRINKS',
  Packages = 'PACKAGES',
  Pizzaman = 'PIZZAMAN',
  PizzamanChickenman = 'PIZZAMAN_CHICKENMAN'
}

export type ProductDetailsInput = {
  constituentsList?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  family?: InputMaybe<Scalars['String']['input']>;
  generalDescription?: InputMaybe<Scalars['String']['input']>;
  ingredientsList?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  productionCategory?: InputMaybe<ProductCategoryTypeType>;
  size?: InputMaybe<Scalars['String']['input']>;
  unitPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductSnapshot = {
  __typename?: 'ProductSnapshot';
  family?: Maybe<Scalars['String']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  productionCategory?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
};

export type ProductType = {
  __typename?: 'ProductType';
  _id?: Maybe<Scalars['ID']['output']>;
  activatedBranches?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  constituentsList?: Maybe<Array<Maybe<ConstituentType>>>;
  couponPercentage?: Maybe<Scalars['Int']['output']>;
  couponPrice?: Maybe<Scalars['Int']['output']>;
  deliveryType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountPercentage?: Maybe<Scalars['Int']['output']>;
  discountedPrice?: Maybe<Scalars['Int']['output']>;
  dominantColor?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  family?: Maybe<Scalars['String']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
  generalDescription?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  imagePublicId?: Maybe<Scalars['String']['output']>;
  ingredientsList?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  isHighSelling?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  priceMultiplier?: Maybe<Scalars['Int']['output']>;
  productCode?: Maybe<Scalars['String']['output']>;
  productImage?: Maybe<Scalars['String']['output']>;
  productionCategory?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  unitPrice?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['String']['output']>;
};

export type ProductType2 = {
  __typename?: 'ProductType2';
  _id?: Maybe<Scalars['ID']['output']>;
  activatedBranches?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  constituentsList?: Maybe<Array<Maybe<ConstituentType>>>;
  deliveryType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dominantColor?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  extras?: Maybe<Array<Maybe<ProductType2>>>;
  family?: Maybe<Scalars['String']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
  generalDescription?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  imagePublicId?: Maybe<Scalars['String']['output']>;
  ingredientsList?: Maybe<Array<Maybe<IngredientDataType>>>;
  name?: Maybe<Scalars['String']['output']>;
  priceMultiplier?: Maybe<Scalars['Int']['output']>;
  productCode?: Maybe<Scalars['String']['output']>;
  productImage?: Maybe<Scalars['String']['output']>;
  productionCategory?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['String']['output']>;
  unitPrice?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type ProductsPreferenceDataType = {
  __typename?: 'ProductsPreferenceDataType';
  allergicDislikeIngredients?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  productId?: Maybe<Scalars['ID']['output']>;
};

export enum PromotionalType {
  Influencer = 'INFLUENCER'
}

export enum PurchaseType {
  Preorder = 'PREORDER',
  Regular = 'REGULAR'
}

export type Query = {
  __typename?: 'Query';
  adminGetAProduct?: Maybe<AdminGetAProductResponse>;
  adminGetRiderWalletHistoryTotal?: Maybe<GetTotalRiderWalletResponse>;
  calculateDeliveryPrice?: Maybe<DeliveryPriceResponse>;
  callCenterAgentGetAllCallCenterAgentOrders?: Maybe<GetAllCallCenterAgentOrdersResponse>;
  customerGetACustomerCoupon?: Maybe<CustomerGetCouponResponse>;
  customerGetAllBranches?: Maybe<GetPaginatedBranchesResponse>;
  customerGetAllCustomerCoupons?: Maybe<CustomerGetAllCouponsResponse>;
  customerGetAllCustomerOrders?: Maybe<GetAllCustomerOrdersResponse>;
  /** # CustomerOrder */
  customerGetAnOrder?: Maybe<GetCustomerOrderResponse>;
  customerGetBranches?: Maybe<GetBranchesResponse>;
  customerGetConstituents?: Maybe<GetConstituentsResponse>;
  /** # Coupon */
  customerGetCoupons?: Maybe<GetCouponsResponse>;
  /** Customer coupon */
  customerGetCustomerCoupons?: Maybe<CustomerGetCouponsResponse>;
  /** Customer Food Preference */
  customerGetCustomerFoodPreference?: Maybe<CustomerGetCustomerFoodPreferenceResponse>;
  customerGetCustomerOrderRefund?: Maybe<GetCustomerOrderRefundResponse>;
  customerGetFlashSalesProducts?: Maybe<GetProductsResponse>;
  customerGetGameStakes?: Maybe<GetGameStakesResponse>;
  /** Game */
  customerGetGames?: Maybe<GetCasinoGamesResponse>;
  customerGetIngredients?: Maybe<CustomerGetIngredientsResponse>;
  customerGetMenus?: Maybe<GetMenuResponse>;
  customerGetOrders?: Maybe<GetCustomerOrdersResponse>;
  customerGetProducts?: Maybe<GetProductsResponse>;
  customerGetSlotFaces?: Maybe<GetSlotFacesResponse>;
  customerGetTotalPoints?: Maybe<GetCustomerPointResponse>;
  customerGetTotalWallets?: Maybe<GetCustomerWalletResponse>;
  customerGetWalletById?: Maybe<GetCustomerAWalletResponse>;
  customerGetWalletHistory?: Maybe<GetCustomerWalletListResponse>;
  findLocationCordinate?: Maybe<GeometryResponse>;
  findLocationList?: Maybe<GetLocationSuggestionResponse>;
  getABranch?: Maybe<GetABranchResponse>;
  getACallCenterAgent?: Maybe<GetACallCenterAgentResponse>;
  /** # Delivery */
  getACallCenterAgentDelivery?: Maybe<GetCallCenterAgentDeliveryResponse>;
  getACivilServant?: Maybe<GetACivilServentResponse>;
  getACourierDeliveryFee?: Maybe<GetACourierDeliveryFeeResponse>;
  getACustomer?: Maybe<GetCustomerResponse>;
  getACustomerCivilServant?: Maybe<GetACivilServentResponse>;
  getACustomerOrderRefund?: Maybe<GetACustomerOrderRefundResponse>;
  getACustomerOrders?: Maybe<GetCustomerOrdersResponse>;
  getAGameStake?: Maybe<GetAGameStakeResponse>;
  getAProduct?: Maybe<GetAProductResponse>;
  getARider?: Maybe<GetARiderResponse>;
  getARiderCashoutRequest?: Maybe<GetACashoutRequestResponse>;
  getARiderOnline?: Maybe<GetARiderOnlineResponse>;
  getASalesPerson?: Maybe<GetASalesPersonResponse>;
  getAShopBanner?: Maybe<GetAShopBannerResponse>;
  getASlotFace?: Maybe<GetASlotFaceResponse>;
  getAllAdministrators?: Maybe<GetAllAdministratorsResponse>;
  getAllBranches?: Maybe<GetPaginatedBranchesResponse>;
  getAllCallCenterAgentOrders?: Maybe<GetAllCallCenterAgentOrdersResponse>;
  getAllCallCenterAgents?: Maybe<GetPaginatedAllCallCenterAgentResponse>;
  /** # Cash Request */
  getAllCashoutRequests?: Maybe<GetAllCashoutRequestResponse>;
  /** # CourierDeliveryFee */
  getAllCourierDeliveryFee?: Maybe<GetAllCourierDeliveryFeeResponse>;
  getAllCustomerCoupons?: Maybe<CustomerGetAllCouponsResponse>;
  /** Customer Order Refund */
  getAllCustomerOrderRefund?: Maybe<GetAllCustomerOrderRefundResponse>;
  getAllCustomerOrders?: Maybe<GetAllCustomerOrdersResponse>;
  getAllCustomerPoints?: Maybe<GetAllCustomerPointsResponse>;
  getAllDeliveryFee?: Maybe<GetAllDeliveryFeeResponse>;
  getAllProducts?: Maybe<GetPaginatedProductsResponse>;
  getAllRiderCallCenterAgentDeliveries?: Maybe<GetCallCenterAgentDeliveriesResponse>;
  getAllRiderDeliveries?: Maybe<GetAllDeliveriesResponse>;
  getAllRiders?: Maybe<GetPaginatedAllRidersResponse>;
  getAllSalesPersons?: Maybe<GetPaginatedAllSalesPersonResponse>;
  getAllSearchHistorys?: Maybe<GetSearchHistoryResponse>;
  getAnAdministrator?: Maybe<GetAnAdministratorResponse>;
  getAnOrderById?: Maybe<GetCustomerOrderResponse>;
  /** # App settings */
  getAppSettings?: Maybe<GetAppSettingsResponse>;
  getBranchDeliveries?: Maybe<GetDeliveriesResponse>;
  getBranches?: Maybe<GetBranchesResponse>;
  /** # Call Center Order */
  getCallCenterAgentOrderById?: Maybe<GetCallCenterAgentOrderResponse>;
  getCallCenterAgents?: Maybe<GetCallCenterAgentsResponse>;
  getCivilServantTypes?: Maybe<GetCivilServentTypesResponse>;
  getCivilServants?: Maybe<GetCivilServentsResponse>;
  /** Ingredients */
  getConstituents?: Maybe<GetConstituentsResponse>;
  getCoupons?: Maybe<GetCouponsResponse>;
  /** # Administrator */
  getCurrentAdministrator?: Maybe<GetCurrentAdministratorResponse>;
  /** # CallCenterAgent */
  getCurrentCallCenterAgent?: Maybe<GetACallCenterAgentResponse>;
  getCurrentCustomer?: Maybe<GetCustomerResponse>;
  /** Rider */
  getCurrentRider?: Maybe<GetCurrentRiderResponse>;
  /** SalesPerson */
  getCurrentSalesPerson?: Maybe<GetASalesPersonResponse>;
  getCurrentStaff?: Maybe<GetStaffResponse>;
  getCustomerAppRatings?: Maybe<GetCustomerAppRatingResponse>;
  getCustomerOrderFeedbacks?: Maybe<GetCustomerOrderFeedbacksResponse>;
  getCustomerOrders?: Maybe<GetCustomerOrdersResponse>;
  getCustomerTotalFreeStakes?: Maybe<GetAvailableFreeStakesResponse>;
  getCustomerWalletHistory?: Maybe<GetCustomerWalletListResponse>;
  getCustomerWalletHistoryTotal?: Maybe<GetCustomerWalletTotalResponse>;
  getCustomers?: Maybe<GetPaginatedAllCustomersResponse>;
  /** # Customer Rating */
  getCustomersDeliveryRatings?: Maybe<GetDeliveryRatingResponse>;
  /** # customerFeedback */
  getCustomersFeedbacks?: Maybe<GetCustomersFeedbacksResponse>;
  getCustomersLeaderBoard?: Maybe<GetLeaderBoardResponse>;
  getCustomersOrderRatings?: Maybe<GetCustomerOrderRatingResponse>;
  getCustomersVerfiedNumbersForPayment?: Maybe<GetVerfiedPhoneNumbersResponse>;
  getDeletedCustomers?: Maybe<GetUsersDataResponse>;
  getDeletedRiders?: Maybe<GetUsersDataResponse>;
  getDeliveryByOrder?: Maybe<GetDeliveryResponse>;
  getDeliveryFeedbacks?: Maybe<GetDeliveryFeedbackResponse>;
  getFamilyMappedProducts?: Maybe<GetFamilyMappedProductResponse>;
  getGameStakes?: Maybe<GetGameStakesResponse>;
  getGameStakesCount?: Maybe<GetGameStakesCountResponse>;
  /** Ingredients */
  getIngredients?: Maybe<GetIngredientsResponse>;
  getMenus?: Maybe<GetMenuResponse>;
  getProducts?: Maybe<GetProductsResponse>;
  getRiderActiveCallCenterAgentDeliveries?: Maybe<GetNonPaginatedCallCenterAgentDeliveriesResponse>;
  getRiderActiveDeliveries?: Maybe<GetDeliveriesResponse>;
  getRiderDelivery?: Maybe<GetDeliveryResponse>;
  getRiderPoint?: Maybe<GetRiderPointResponse>;
  getRiderPositionFromYango?: Maybe<RiderLocationResponse>;
  /** riderSendMoney */
  getRiderSendMoney?: Maybe<GetAllRiderSendMoneyResponse>;
  getRiderWallet?: Maybe<GetRiderWalletResponse>;
  getRiderWalletHistory?: Maybe<SuccessResponse>;
  getRiderWalletHistoryTotal?: Maybe<SuccessResponse>;
  getRiders?: Maybe<GetRidersResponse>;
  /** # Rider feedback */
  getRidersFeedbacks?: Maybe<GetRidersFeedbacksResponse>;
  getRidersOnline?: Maybe<GetRidersOnlineResponse>;
  getRidersOnlineInRadius?: Maybe<GetRidersOnlineResponse>;
  getRole?: Maybe<GetRoleResponse>;
  getRoles?: Maybe<GetPaginatedRoleResponse>;
  getSalesPersons?: Maybe<GetSalesPersonsResponse>;
  getServerTime?: Maybe<GetServerTimeResponse>;
  /** # shopBanner */
  getShopBanners?: Maybe<GetShopBannersResponse>;
  getSlotFaces?: Maybe<GetSlotFacesResponse>;
  getStaff?: Maybe<GetStaffResponse>;
  getStaffs?: Maybe<GetPaginatedStaffResponse>;
  getTotalAdministrators?: Maybe<GetTotalAdministratorsResponse>;
  getTotalBranches?: Maybe<GetTotalBranchesResponse>;
  getTotalCallCenterAgentOrderSales?: Maybe<GetTotalCallCenterAgentOrderSalesResponse>;
  getTotalCallCenterAgentOrderSalesList?: Maybe<GetTotalCallCenterAgentOrderSalesListResponse>;
  getTotalCallCenterAgentOrders?: Maybe<GetTotalCallCenterAgentOrdersResponse>;
  getTotalCallCenterAgents?: Maybe<GetTotalCallCenterAgentsResponse>;
  getTotalCashoutRequests?: Maybe<GetTotalCashoutRequestResponse>;
  getTotalCashoutRequestsAmount?: Maybe<GetTotalCashoutRequestResponse>;
  getTotalCourierDeliveryFee?: Maybe<GetTotalCourierDeliveryFeeResponse>;
  getTotalCourierDeliveryFeeAmount?: Maybe<GetTotalCourierDeliveryFeeResponse>;
  getTotalCustomerAppFeedbacks?: Maybe<GetTotalCustomersFeedbacksResponse>;
  getTotalCustomerAppRatings?: Maybe<GetTotalAppRatingResponse>;
  getTotalCustomerCoupons?: Maybe<TotalCustomerCouponResponse>;
  getTotalCustomerOrderRefund?: Maybe<GetTotalCustomerOrderRefundResponse>;
  getTotalCustomerOrderRefundAmount?: Maybe<GetTotalCustomerOrderRefundResponse>;
  getTotalCustomerOrderSales?: Maybe<GetTotalCustomerOrderSalesResponse>;
  getTotalCustomerOrderSalesList?: Maybe<GetTotalCustomerOrderSalesListResponse>;
  getTotalCustomerOrders?: Maybe<GetTotalCustomerOrdersResponse>;
  getTotalCustomerPoints?: Maybe<GetTotalCustomerPointsResponse>;
  getTotalCustomers?: Maybe<GetTotalCustomersResponse>;
  getTotalCustomersOrderFeedbacks?: Maybe<GetTotalCustomerOrdersFeedbacksResponse>;
  getTotalCustomersOrderRatings?: Maybe<GetTotalCustomerOrdersRatingResponse>;
  getTotalDeliveryFeedbacks?: Maybe<GetTotalDeliveryFeedbacksResponse>;
  getTotalDeliveryRatings?: Maybe<GetTotalDeliveryRatingResponse>;
  getTotalProducts?: Maybe<GetTotalProductsResponse>;
  getTotalRiderCallCenterAgentDeliveries?: Maybe<GetTotalCallCenterAgentDeliveryResponse>;
  getTotalRiderDeliveries?: Maybe<GetTotalDeliveriesResponse>;
  getTotalRiderSendMoney?: Maybe<GetTotalRiderSendMoneyResponse>;
  getTotalRiders?: Maybe<GetTotalRidersResponse>;
  getTotalRoles?: Maybe<GetTotalRolesResponse>;
  getTotalSalesPersons?: Maybe<GetTotalSalesPersonsResponse>;
  getTotalSalesRiderSendMoney?: Maybe<GetTotalSalesRiderSendMoneyResponse>;
  getTotalSalesRiderSendMoneyList?: Maybe<GetTotalSalesRiderSendMoneyListResponse>;
  /** # Search History */
  getTotalSearchHistory?: Maybe<GetTotalSearchHistoryResponse>;
  getTotalStaffs?: Maybe<GetTotalStaffsResponse>;
  getYangoDeliveryProof?: Maybe<YangoDeliveryResponse>;
  getYangoOrderStatus?: Maybe<YangoDeliveryResponse>;
  getYangoOrderStatusDelivered?: Maybe<YangoDeliveryResponse>;
  getYangoOrderStatusRiderFound?: Maybe<YangoDeliveryRiderFoundResponse>;
  getYangoPointConfirmationCode?: Maybe<YangoDeliveryResponse>;
  getYangoRiderPhoneNumber?: Maybe<YangoDeliveryResponse>;
  riderGetADelivery?: Maybe<GetDeliveryResponse>;
  riderGetActiveCallCenterAgentDeliveries?: Maybe<GetNonPaginatedCallCenterAgentDeliveriesResponse>;
  riderGetActiveDeliveries?: Maybe<GetDeliveriesResponse>;
  riderGetAllDeliveries?: Maybe<GetAllDeliveriesResponse>;
  riderGetCashoutRequests?: Maybe<GetCashoutRequestsResponse>;
  riderGetCompletedDeliveries?: Maybe<GetDeliveriesResponse>;
  riderGetDeliveries?: Maybe<GetDeliveriesResponse>;
  /** # Delivery request */
  riderGetDeliveryRequests?: Maybe<GetDeliveryRequestResponse>;
  riderGetPendingCashoutRequests?: Maybe<GetCashoutRequestsResponse>;
  riderGetRiderSendMoney?: Maybe<GetAllRiderSendMoneyResponse>;
  riderGetWalletById?: Maybe<GetRiderAWalletResponse>;
  riderGetWalletHistory?: Maybe<GetRiderWalletListResponse>;
  riderGetWalletHistoryTotal?: Maybe<GetTotalRiderWalletResponse>;
};


export type QueryAdminGetAProductArgs = {
  productId: Scalars['ID']['input'];
};


export type QueryAdminGetRiderWalletHistoryTotalArgs = {
  adminGetRiderTotalWalletInput?: InputMaybe<AdminGetRiderTotalWalletInput>;
};


export type QueryCalculateDeliveryPriceArgs = {
  branchId: Scalars['ID']['input'];
  locationInput: LocationInput;
};


export type QueryCallCenterAgentGetAllCallCenterAgentOrdersArgs = {
  getAllCallCenterAgentOrdersInput?: InputMaybe<GetAllCallCenterAgentOrdersInput>;
};


export type QueryCustomerGetACustomerCouponArgs = {
  couponId: Scalars['ID']['input'];
};


export type QueryCustomerGetAllBranchesArgs = {
  getAllBranchesInput?: InputMaybe<CustomerGetAllBranchesInput>;
};


export type QueryCustomerGetAllCustomerCouponsArgs = {
  getCustomerCouponsInput?: InputMaybe<GetCustomerCouponInputType>;
};


export type QueryCustomerGetAllCustomerOrdersArgs = {
  getAllCustomersOrdersInput?: InputMaybe<GetAllCustomerOrdersInput>;
};


export type QueryCustomerGetAnOrderArgs = {
  orderId: Scalars['ID']['input'];
};


export type QueryCustomerGetConstituentsArgs = {
  getConstituentInput?: InputMaybe<GetConstituentDetailsInput>;
};


export type QueryCustomerGetGameStakesArgs = {
  gameStakesInput?: InputMaybe<CustomerGameStakesInput>;
};


export type QueryCustomerGetGamesArgs = {
  casinoGamesInput?: InputMaybe<CasinoGamesInput>;
};


export type QueryCustomerGetMenusArgs = {
  branchId: Scalars['ID']['input'];
};


export type QueryCustomerGetProductsArgs = {
  branchId: Scalars['ID']['input'];
};


export type QueryCustomerGetSlotFacesArgs = {
  CustomerSlotFaceInput?: InputMaybe<SlotFaceInput>;
};


export type QueryCustomerGetWalletByIdArgs = {
  walletId: Scalars['ID']['input'];
};


export type QueryCustomerGetWalletHistoryArgs = {
  getAllWalletInput?: InputMaybe<GetAllCustomerWalletType>;
};


export type QueryFindLocationCordinateArgs = {
  placeId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFindLocationListArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetABranchArgs = {
  branchId: Scalars['ID']['input'];
};


export type QueryGetACallCenterAgentArgs = {
  callCenterAgentId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetACallCenterAgentDeliveryArgs = {
  callCenterAgentDeliveryId?: InputMaybe<Scalars['ID']['input']>;
  callCenterAgentOrderId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetACourierDeliveryFeeArgs = {
  courierDeliveryFeeId?: InputMaybe<Scalars['ID']['input']>;
  customerOrderId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetACustomerArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryGetACustomerCivilServantArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryGetACustomerOrderRefundArgs = {
  customerOrderRefundId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetACustomerOrdersArgs = {
  customerId: Scalars['ID']['input'];
};


export type QueryGetAGameStakeArgs = {
  stakeId: Scalars['ID']['input'];
};


export type QueryGetAProductArgs = {
  productId: Scalars['ID']['input'];
};


export type QueryGetARiderArgs = {
  riderId: Scalars['ID']['input'];
};


export type QueryGetARiderCashoutRequestArgs = {
  cashoutRequestId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetARiderOnlineArgs = {
  riderId: Scalars['ID']['input'];
};


export type QueryGetASalesPersonArgs = {
  salesPersonId: Scalars['ID']['input'];
};


export type QueryGetAShopBannerArgs = {
  shopBannerId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetASlotFaceArgs = {
  slotFaceId: Scalars['ID']['input'];
};


export type QueryGetAllAdministratorsArgs = {
  getAdministratorInput?: InputMaybe<AdministratorInput>;
};


export type QueryGetAllBranchesArgs = {
  getAllBranchesInput?: InputMaybe<GetAllBranchesInput>;
};


export type QueryGetAllCallCenterAgentOrdersArgs = {
  getAllCallCenterAgentOrdersInput?: InputMaybe<GetAllCallCenterAgentOrdersInput>;
};


export type QueryGetAllCallCenterAgentsArgs = {
  getCallCenterAgentsInput?: InputMaybe<GetAllCallCenterAgentsInput>;
};


export type QueryGetAllCashoutRequestsArgs = {
  getCashoutRequestsInput?: InputMaybe<GetAllCashoutRequestsInputType>;
};


export type QueryGetAllCourierDeliveryFeeArgs = {
  getCourierDeliveryFeeInput?: InputMaybe<GetAllCourierDeliveryFeeInputType>;
};


export type QueryGetAllCustomerCouponsArgs = {
  getCustomerCouponsInput?: InputMaybe<GetCustomerCouponInputType>;
};


export type QueryGetAllCustomerOrderRefundArgs = {
  getCustomerOrderRefundInput?: InputMaybe<GetAllCustomerOrderRefundInputType>;
};


export type QueryGetAllCustomerOrdersArgs = {
  getAllCustomersOrdersInput?: InputMaybe<GetAllCustomerOrdersInput>;
};


export type QueryGetAllCustomerPointsArgs = {
  getAllCustomerPointInput?: InputMaybe<GetAllCustomerPointInput>;
};


export type QueryGetAllDeliveryFeeArgs = {
  getDeliveryFeeInput?: InputMaybe<DeliveryFeeInputType>;
};


export type QueryGetAllProductsArgs = {
  getAllProductsInput?: InputMaybe<GetAllProductsInput>;
};


export type QueryGetAllRiderCallCenterAgentDeliveriesArgs = {
  getCallCenterAgentDeliveriesInput?: InputMaybe<AllCallCenterAgentDeliveryInputType>;
};


export type QueryGetAllRiderDeliveriesArgs = {
  getDeliveriesInput?: InputMaybe<GetAllDeliveriesInputType>;
};


export type QueryGetAllRidersArgs = {
  getRidersInput?: InputMaybe<GetAllRidersInput>;
};


export type QueryGetAllSalesPersonsArgs = {
  getSalesPersonsInput?: InputMaybe<GetAllSalesPersonsInput>;
};


export type QueryGetAllSearchHistorysArgs = {
  getSearchHistoryInput?: InputMaybe<AllSearchHistoryInputType>;
};


export type QueryGetAnAdministratorArgs = {
  administratorId: Scalars['ID']['input'];
};


export type QueryGetAnOrderByIdArgs = {
  orderId: Scalars['ID']['input'];
};


export type QueryGetBranchDeliveriesArgs = {
  branchId: Scalars['ID']['input'];
};


export type QueryGetCallCenterAgentOrderByIdArgs = {
  callCenterAgentOrderId: Scalars['ID']['input'];
};


export type QueryGetConstituentsArgs = {
  getConstituentInput?: InputMaybe<GetConstituentDetailsInput>;
};


export type QueryGetCustomerAppRatingsArgs = {
  getAllRatingInput?: InputMaybe<GetCustomerRatingInput>;
};


export type QueryGetCustomerOrderFeedbacksArgs = {
  getAllFeedbackInput?: InputMaybe<GetCustomerOrderFeedbackInput>;
};


export type QueryGetCustomerOrdersArgs = {
  branchId: Scalars['ID']['input'];
};


export type QueryGetCustomerWalletHistoryArgs = {
  getAllWalletInput?: InputMaybe<GetEveryCustomerWalletInput>;
};


export type QueryGetCustomerWalletHistoryTotalArgs = {
  getWalletTotalInput?: InputMaybe<GetCustomerWalletTotalInput>;
};


export type QueryGetCustomersArgs = {
  getAllCustomers?: InputMaybe<GetAllCustomersInput>;
};


export type QueryGetCustomersDeliveryRatingsArgs = {
  getAllRatingInput?: InputMaybe<GetDeliveryRatingInput>;
};


export type QueryGetCustomersFeedbacksArgs = {
  getAllFeedbackInput?: InputMaybe<GetCustomerFeedbackInput>;
};


export type QueryGetCustomersLeaderBoardArgs = {
  getLeadersBoardInput?: InputMaybe<GetLeadersBoardInput>;
};


export type QueryGetCustomersOrderRatingsArgs = {
  getAllRatingInput?: InputMaybe<GetCustomerOrderRatingInput>;
};


export type QueryGetDeliveryByOrderArgs = {
  orderId: Scalars['ID']['input'];
};


export type QueryGetDeliveryFeedbacksArgs = {
  getAllFeedbackInput?: InputMaybe<GetDeliveryFeedbackInput>;
};


export type QueryGetFamilyMappedProductsArgs = {
  branchId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetGameStakesArgs = {
  gameStakesInput?: InputMaybe<GameStakesInput>;
};


export type QueryGetGameStakesCountArgs = {
  gameStakesInput?: InputMaybe<GameStakesCountInput>;
};


export type QueryGetRiderActiveCallCenterAgentDeliveriesArgs = {
  riderId: Scalars['ID']['input'];
};


export type QueryGetRiderActiveDeliveriesArgs = {
  riderId: Scalars['ID']['input'];
};


export type QueryGetRiderDeliveryArgs = {
  riderId: Scalars['ID']['input'];
};


export type QueryGetRiderPositionFromYangoArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type QueryGetRiderSendMoneyArgs = {
  allRiderSendMoneyInput?: InputMaybe<AllRiderSendMoneyInput>;
};


export type QueryGetRidersOnlineInRadiusArgs = {
  location: LocationInput;
  radius: Scalars['Float']['input'];
};


export type QueryGetRoleArgs = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  roleId: Scalars['ID']['input'];
};


export type QueryGetRolesArgs = {
  getRolesInput?: InputMaybe<GetRolesInput>;
};


export type QueryGetShopBannersArgs = {
  shopBannerInput?: InputMaybe<ShopBannerInputType>;
};


export type QueryGetSlotFacesArgs = {
  SlotFaceInput?: InputMaybe<SlotFaceInput>;
};


export type QueryGetStaffArgs = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  staffId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetStaffsArgs = {
  getStaffsInput?: InputMaybe<GetStaffsInput>;
};


export type QueryGetTotalAdministratorsArgs = {
  getAdministratorInput?: InputMaybe<TotalAdministratorInput>;
};


export type QueryGetTotalBranchesArgs = {
  totalBranchesInput?: InputMaybe<GetTotalBranchesInput>;
};


export type QueryGetTotalCallCenterAgentOrderSalesArgs = {
  getTotalCallCenterAgentOrderSales?: InputMaybe<GetTotalCallCenterAgentOrderSalesInput>;
};


export type QueryGetTotalCallCenterAgentOrderSalesListArgs = {
  getTotalCallCenterAgentOrderSales?: InputMaybe<GetTotalCallCenterAgentOrderSalesInput>;
};


export type QueryGetTotalCallCenterAgentOrdersArgs = {
  getTotalCallCenterAgentOrdersInput?: InputMaybe<GetTotalCallCenterAgentOrdersInput>;
};


export type QueryGetTotalCallCenterAgentsArgs = {
  getAllCallCenterAgents?: InputMaybe<GetTotalCallCenterAgentsInput>;
};


export type QueryGetTotalCashoutRequestsArgs = {
  getCashoutRequestsInput?: InputMaybe<GetTotalCashoutRequestsInputType>;
};


export type QueryGetTotalCashoutRequestsAmountArgs = {
  getCashoutRequestsInput?: InputMaybe<GetTotalCashoutRequestsInputType>;
};


export type QueryGetTotalCourierDeliveryFeeArgs = {
  getCourierDeliveryFeeInput?: InputMaybe<GetTotalCourierDeliveryFeeInputType>;
};


export type QueryGetTotalCourierDeliveryFeeAmountArgs = {
  getCourierDeliveryFeeInput?: InputMaybe<GetTotalCourierDeliveryFeeInputType>;
};


export type QueryGetTotalCustomerAppFeedbacksArgs = {
  getAllFeedbackInput?: InputMaybe<TotalCustomerFeedbackInput>;
};


export type QueryGetTotalCustomerAppRatingsArgs = {
  getAllRatingInput?: InputMaybe<TotalCustomerRatingInput>;
};


export type QueryGetTotalCustomerCouponsArgs = {
  totalCustomerCouponInput?: InputMaybe<TotalCustomerCouponInput>;
};


export type QueryGetTotalCustomerOrderRefundArgs = {
  getCustomerOrderRefundInput?: InputMaybe<GetTotalCustomerOrderRefundInputType>;
};


export type QueryGetTotalCustomerOrderRefundAmountArgs = {
  getCustomerOrderRefundInput?: InputMaybe<GetTotalCustomerOrderRefundInputType>;
};


export type QueryGetTotalCustomerOrderSalesArgs = {
  getTotalCustomerOrderSales?: InputMaybe<GetTotalCustomerOrderSalesInput>;
};


export type QueryGetTotalCustomerOrderSalesListArgs = {
  getTotalCustomerOrderSales?: InputMaybe<GetTotalCustomerOrderSalesListInput>;
};


export type QueryGetTotalCustomerOrdersArgs = {
  getTotalCustomersOrdersInput?: InputMaybe<GetTotalCustomerOrdersInput>;
};


export type QueryGetTotalCustomerPointsArgs = {
  getTotalCustomerPointInput?: InputMaybe<GetTotalCustomerPointInput>;
};


export type QueryGetTotalCustomersArgs = {
  getAllCustomers?: InputMaybe<GetTotalCustomersInput>;
};


export type QueryGetTotalCustomersOrderFeedbacksArgs = {
  getAllFeedbackInput?: InputMaybe<TotalCustomerOrderFeedbackInput>;
};


export type QueryGetTotalCustomersOrderRatingsArgs = {
  getAllRatingInput?: InputMaybe<TotalCustomerOrderRatingInput>;
};


export type QueryGetTotalDeliveryFeedbacksArgs = {
  getAllFeedbackInput?: InputMaybe<TotalDeliveryFeedbackInput>;
};


export type QueryGetTotalDeliveryRatingsArgs = {
  getAllRatingInput?: InputMaybe<TotalDeliveryRatingInput>;
};


export type QueryGetTotalProductsArgs = {
  totalProductsInput?: InputMaybe<GetTotalProductsInput>;
};


export type QueryGetTotalRiderCallCenterAgentDeliveriesArgs = {
  getTotalRiderCallCenterAgentDeliveryInput?: InputMaybe<TotalCallCenterAgentDeliveryInputType>;
};


export type QueryGetTotalRiderDeliveriesArgs = {
  getTotalRiderDeliveryInput?: InputMaybe<GetTotalDeliveryInputType>;
};


export type QueryGetTotalRiderSendMoneyArgs = {
  totalRiderSendMoneyInput?: InputMaybe<TotalDeliveryRatingInput>;
};


export type QueryGetTotalRidersArgs = {
  getAllRiders?: InputMaybe<GetTotalRidersInput>;
};


export type QueryGetTotalRolesArgs = {
  getRoles?: InputMaybe<GetTotalRolesInput>;
};


export type QueryGetTotalSalesPersonsArgs = {
  getAllSalesPersons?: InputMaybe<GetTotalSalesPeronsInput>;
};


export type QueryGetTotalSalesRiderSendMoneyArgs = {
  totalRiderSendMoneyInput?: InputMaybe<TotalSalesRiderSendMoneyInput>;
};


export type QueryGetTotalSalesRiderSendMoneyListArgs = {
  totalSalesRiderSendMoneyListInput?: InputMaybe<TotalSalesRiderSendMoneyListInput>;
};


export type QueryGetTotalSearchHistoryArgs = {
  getSearchHistoryInput?: InputMaybe<TotalSearchHistoryInputType>;
};


export type QueryGetTotalStaffsArgs = {
  getStaffs?: InputMaybe<GetTotalStaffsInput>;
};


export type QueryGetYangoDeliveryProofArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type QueryGetYangoOrderStatusArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type QueryGetYangoOrderStatusDeliveredArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type QueryGetYangoOrderStatusRiderFoundArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type QueryGetYangoPointConfirmationCodeArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type QueryGetYangoRiderPhoneNumberArgs = {
  customerOrderId: Scalars['ID']['input'];
};


export type QueryRiderGetADeliveryArgs = {
  deliveryId: Scalars['ID']['input'];
};


export type QueryRiderGetAllDeliveriesArgs = {
  getDeliveriesInput?: InputMaybe<GetAllDeliveriesInputType>;
};


export type QueryRiderGetRiderSendMoneyArgs = {
  allRiderSendMoneyInput?: InputMaybe<AllRiderSendMoneyByRiderInput>;
};


export type QueryRiderGetWalletByIdArgs = {
  walletId: Scalars['ID']['input'];
};


export type QueryRiderGetWalletHistoryArgs = {
  getAllWalletInput?: InputMaybe<GetAllRiderWalletType>;
};


export type QueryRiderGetWalletHistoryTotalArgs = {
  getTotalRiderWalletInput?: InputMaybe<GetTotalRiderWalletInput>;
};

export enum RefundMethod {
  MobilePayment = 'MOBILE_PAYMENT',
  PmcmWallet = 'PMCM_WALLET'
}

export enum RefundStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export enum RefundTransactionType {
  All = 'ALL',
  DeliveryPrice = 'DELIVERY_PRICE',
  FoodPrice = 'FOOD_PRICE'
}

export type RiderDeliveryType = {
  __typename?: 'RiderDeliveryType';
  _id?: Maybe<Scalars['ID']['output']>;
  assignedAt?: Maybe<Scalars['String']['output']>;
  boltRideStateResponse?: Maybe<Scalars['String']['output']>;
  branchId?: Maybe<BranchType>;
  cancelledAt?: Maybe<Scalars['String']['output']>;
  completedAt?: Maybe<Scalars['String']['output']>;
  customerOrderId?: Maybe<CustomerOrderType>;
  delieveryAddress?: Maybe<Scalars['String']['output']>;
  deliveredAt?: Maybe<Scalars['String']['output']>;
  deliveringAt?: Maybe<Scalars['String']['output']>;
  deliveryFee?: Maybe<Scalars['Int']['output']>;
  deliveryType?: Maybe<EnumDeliveryType>;
  location?: Maybe<LocationType>;
  otp?: Maybe<Scalars['Int']['output']>;
  riderId?: Maybe<RiderType>;
  riderVerifyDelivery?: Maybe<Scalars['Boolean']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type RiderFeedbackType = {
  __typename?: 'RiderFeedbackType';
  message?: Maybe<Scalars['String']['output']>;
  riderId?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type RiderLocationResponse = {
  __typename?: 'RiderLocationResponse';
  location?: Maybe<LocationType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type RiderPointType = {
  __typename?: 'RiderPointType';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  pointIn?: Maybe<Scalars['Int']['output']>;
  pointOut?: Maybe<Scalars['Int']['output']>;
  riderId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type RiderSendMoneyFields = {
  __typename?: 'RiderSendMoneyFields';
  totalCallCenterAgentOrder?: Maybe<Scalars['Int']['output']>;
  totalCustomerOrders?: Maybe<Scalars['Int']['output']>;
};

export type RiderSendMoneyResponse = {
  __typename?: 'RiderSendMoneyResponse';
  data?: Maybe<RiderSendMoneyType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type RiderType = {
  __typename?: 'RiderType';
  _id?: Maybe<Scalars['ID']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  branchId?: Maybe<BranchType>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  deviceToken?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  email?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  ghanaCardBackPhoto?: Maybe<Scalars['String']['output']>;
  ghanaCardNumber?: Maybe<Scalars['String']['output']>;
  ghanaCardPhoto?: Maybe<Scalars['String']['output']>;
  ghanaCardPhotoBackPublicId?: Maybe<Scalars['String']['output']>;
  ghanaCardPhotoPublicId?: Maybe<Scalars['String']['output']>;
  isProfileUpdated?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  licenseNumber?: Maybe<Scalars['String']['output']>;
  licensePhoto?: Maybe<Scalars['String']['output']>;
  licensePhotoPublicId?: Maybe<Scalars['String']['output']>;
  licensePlate?: Maybe<Scalars['String']['output']>;
  location?: Maybe<LocationType>;
  momoNumber?: Maybe<Scalars['String']['output']>;
  momoNumberChannel?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  profilePublicId?: Maybe<Scalars['String']['output']>;
  riderType?: Maybe<EnumRiderType>;
  selfiePhoto?: Maybe<Scalars['String']['output']>;
  selfiePublicId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  vehiclePhoto?: Maybe<Scalars['String']['output']>;
  vehiclePublicId?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type RiderWalletPaginationType = {
  __typename?: 'RiderWalletPaginationType';
  nextCursor?: Maybe<RiderWalletType>;
  walletList?: Maybe<Array<Maybe<RiderWalletType>>>;
};

export type RiderWalletType = {
  __typename?: 'RiderWalletType';
  _id?: Maybe<Scalars['ID']['output']>;
  balanceAfter?: Maybe<Scalars['Int']['output']>;
  balancebefore?: Maybe<Scalars['Int']['output']>;
  cashoutRequestId?: Maybe<CashRequestType>;
  checkoutUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerOrderId?: Maybe<Scalars['ID']['output']>;
  momoNumber?: Maybe<Scalars['String']['output']>;
  payServiceFeeResponse?: Maybe<Scalars['String']['output']>;
  paymentType?: Maybe<WalletPaymentType>;
  referenceID?: Maybe<Scalars['String']['output']>;
  referenceNumber?: Maybe<Scalars['String']['output']>;
  transactionType?: Maybe<WalletTransactionType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  walletIn?: Maybe<Scalars['Int']['output']>;
  walletOut?: Maybe<Scalars['Int']['output']>;
};

export type Role = {
  __typename?: 'Role';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type RolePagination = {
  __typename?: 'RolePagination';
  nextCursor?: Maybe<Role>;
  roleList?: Maybe<Array<Maybe<Role>>>;
};

export type SalesPersonDataType = {
  __typename?: 'SalesPersonDataType';
  _id?: Maybe<Scalars['ID']['output']>;
  branchId?: Maybe<BranchIdType>;
  deviceToken?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  email?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export enum ScanToOrderPickupType {
  DineIn = 'DINE_IN',
  None = 'NONE',
  TakeAway = 'TAKE_AWAY'
}

export enum SearchHistoryEnum {
  CustomerDeleted = 'CUSTOMER_DELETED',
  Enabled = 'ENABLED'
}

export type SearchHistoryPaginationType = {
  __typename?: 'SearchHistoryPaginationType';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<SearchHistoryType>;
  searchHistoryList?: Maybe<Array<Maybe<SearchHistoryType>>>;
};

export type SearchHistoryType = {
  __typename?: 'SearchHistoryType';
  createdAt?: Maybe<Scalars['Date']['output']>;
  customerId?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<SearchHistoryEnum>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type ServerTimeType = {
  __typename?: 'ServerTimeType';
  currentTime?: Maybe<Scalars['String']['output']>;
};

export type ShopBannerInputType = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type ShopBannerType = {
  __typename?: 'ShopBannerType';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  imagePublicId?: Maybe<Scalars['String']['output']>;
  redirectLink?: Maybe<Scalars['String']['output']>;
  redirectPlaceholderText?: Maybe<Scalars['String']['output']>;
  routeLink?: Maybe<Scalars['String']['output']>;
  routePlaceholderText?: Maybe<Scalars['String']['output']>;
  shopBannerImage?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type ShopBannerTypepaginationType = {
  __typename?: 'ShopBannerTypepaginationType';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  nextCursor?: Maybe<ShopBannerType>;
  shopBannerList?: Maybe<Array<Maybe<ShopBannerType>>>;
};

export type SlotFaceInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  couponId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  gameId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  prizeType?: InputMaybe<Array<InputMaybe<PrizeType>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  tangibleType?: InputMaybe<Array<InputMaybe<TangibleType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type SlotFaceType = {
  __typename?: 'SlotFaceType';
  _id?: Maybe<Scalars['ID']['output']>;
  couponId?: Maybe<CouponType>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  displayImage?: Maybe<Scalars['String']['output']>;
  dorminantColor?: Maybe<Scalars['String']['output']>;
  gameId?: Maybe<CasinoGameType>;
  height?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pointWorth?: Maybe<Scalars['Int']['output']>;
  prizeType?: Maybe<PrizeType>;
  productId?: Maybe<ProductType2>;
  tangibleType?: Maybe<TangibleType>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
  winStatus?: Maybe<WinStatusType>;
};

export type Staff = {
  __typename?: 'Staff';
  _id?: Maybe<Scalars['ID']['output']>;
  branch?: Maybe<BranchType>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  deviceNotificationTokens?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  imageDetails?: Maybe<ImageDetails>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<Role>>>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type StaffLoginData = {
  __typename?: 'StaffLoginData';
  refreshToken: Scalars['String']['output'];
  userDetails?: Maybe<Staff>;
};

export type StaffPagination = {
  __typename?: 'StaffPagination';
  nextCursor?: Maybe<Staff>;
  staffList?: Maybe<Array<Maybe<Staff>>>;
};

export type StakeAGameData = {
  __typename?: 'StakeAGameData';
  gameStake?: Maybe<GameStakesType>;
  numberOfFreeSpins?: Maybe<Scalars['Int']['output']>;
  wonSlot?: Maybe<SlotFaceType>;
};

export type StakeAGameResponse = {
  __typename?: 'StakeAGameResponse';
  data?: Maybe<StakeAGameData>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type StopAdressInput = {
  address: Scalars['String']['input'];
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type StopInput = {
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type StringDataResponse = {
  __typename?: 'StringDataResponse';
  data?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  boltRideStateSubscription?: Maybe<StringDataResponse>;
  broadCastNewCallCenterAgentOrder?: Maybe<CallCenterAgentOrderDetailsResponse>;
  broadCastNewCustomerOrder?: Maybe<CustomerOrderDetailsResponse>;
  callCenterAgentOrderDetails?: Maybe<CallCenterAgentOrderDetailsResponse>;
  cashoutRequestDetails?: Maybe<CreateCashoutRequestResponse>;
  courierDeliveryFeeDetails?: Maybe<CreateCourierDeliveryFeeResponse>;
  customerOrderDetails?: Maybe<CustomerOrderDetailsResponse>;
  customerOrderRefundDetails?: Maybe<CreateCustomerOrderRefundResponse>;
  customerWalletDetails?: Maybe<CreateCustomerWalletPointResponse>;
  riderListenDeliveryRequest?: Maybe<GetOpenedDeliveryRequestResponse>;
  riderLocation?: Maybe<RiderLocationResponse>;
  riderSendMoneyDetails?: Maybe<RiderSendMoneyResponse>;
  riderServiceFeeDetails?: Maybe<CreateRiderWalletResponse>;
  yangoDeliveryStatusDetails?: Maybe<YangoDeliveryStatusDetailsResponse>;
};


export type SubscriptionBoltRideStateSubscriptionArgs = {
  channelId: Scalars['ID']['input'];
};


export type SubscriptionBroadCastNewCallCenterAgentOrderArgs = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionBroadCastNewCustomerOrderArgs = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionCallCenterAgentOrderDetailsArgs = {
  channelId?: InputMaybe<Scalars['ID']['input']>;
};


export type SubscriptionCashoutRequestDetailsArgs = {
  channelId: Scalars['ID']['input'];
};


export type SubscriptionCourierDeliveryFeeDetailsArgs = {
  channelId: Scalars['ID']['input'];
};


export type SubscriptionCustomerOrderDetailsArgs = {
  channelId: Scalars['ID']['input'];
};


export type SubscriptionCustomerOrderRefundDetailsArgs = {
  channelId: Scalars['ID']['input'];
};


export type SubscriptionCustomerWalletDetailsArgs = {
  channelId: Scalars['ID']['input'];
};


export type SubscriptionRiderListenDeliveryRequestArgs = {
  channelId: Scalars['ID']['input'];
};


export type SubscriptionRiderLocationArgs = {
  channelId: Scalars['ID']['input'];
};


export type SubscriptionRiderSendMoneyDetailsArgs = {
  channelId: Scalars['ID']['input'];
};


export type SubscriptionRiderServiceFeeDetailsArgs = {
  channelId: Scalars['ID']['input'];
};


export type SubscriptionYangoDeliveryStatusDetailsArgs = {
  channelId: Scalars['ID']['input'];
};

export type SuccessDataResponse = {
  __typename?: 'SuccessDataResponse';
  data?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export enum TangibleStatusType {
  Claimed = 'CLAIMED',
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
  None = 'NONE'
}

export enum TangibleType {
  None = 'NONE',
  OffApp = 'OFF_APP',
  OnApp = 'ON_APP'
}

export type TimeRange = {
  __typename?: 'TimeRange';
  days: Array<Weekday>;
  endTime: Scalars['String']['output'];
  startTime: Scalars['String']['output'];
};

export type TimeRangeInput = {
  days?: InputMaybe<Array<Weekday>>;
  endTime: Scalars['String']['input'];
  startTime: Scalars['String']['input'];
};

export type TotalAdministratorInput = {
  adminType?: InputMaybe<EnumAdminType>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TotalCallCenterAgentDeliveryInputType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryFee?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  deliveryType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  riderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type TotalCustomerCouponInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  couponType?: InputMaybe<Array<InputMaybe<CouponEnumType>>>;
  includeTotalCost?: InputMaybe<Scalars['Boolean']['input']>;
  isPointOut?: InputMaybe<Scalars['Boolean']['input']>;
  isWalletOut?: InputMaybe<Scalars['Boolean']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  ownedByCustomerId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  status?: InputMaybe<Array<InputMaybe<CouponStatusType>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type TotalCustomerCouponResponse = {
  __typename?: 'TotalCustomerCouponResponse';
  data?: Maybe<TotalCustomerCouponType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type TotalCustomerCouponType = {
  __typename?: 'TotalCustomerCouponType';
  count?: Maybe<Scalars['Int']['output']>;
  totalCost?: Maybe<Scalars['Int']['output']>;
};

export type TotalCustomerFeedbackInput = {
  customerId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type TotalCustomerOrderFeedbackInput = {
  customerId?: InputMaybe<Scalars['ID']['input']>;
  customerOrderId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type TotalCustomerOrderRatingInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  customerOrderId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type TotalCustomerRatingInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type TotalDeliveryFeedbackInput = {
  customerId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryId?: InputMaybe<Scalars['ID']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type TotalDeliveryRatingInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryId?: InputMaybe<Scalars['ID']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  riderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type TotalPointsType = {
  __typename?: 'TotalPointsType';
  totalPoints?: Maybe<Scalars['Int']['output']>;
};

export type TotalSalesRiderSendMoneyInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  callCenterAgentDeliveryId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  riderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type TotalSalesRiderSendMoneyListInput = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  branchId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  callCenterAgentDeliveryId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  deliveryId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<Scalars['String']['input']>;
  riderId?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type TotalSearchHistoryInputType = {
  allTime?: InputMaybe<Scalars['Boolean']['input']>;
  customerId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  patternText?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<SearchHistoryEnum>;
  text?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
};

export type TotalStaffInput = {
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TotalWalletsType = {
  __typename?: 'TotalWalletsType';
  totalWallet?: Maybe<Scalars['Int']['output']>;
};

export type UpdateCashRequestInput = {
  cashoutRequestId: Scalars['String']['input'];
  riderId: Scalars['ID']['input'];
};

export type UpdateOrderInput = {
  acceptedAt?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  andasReceiptNumber?: InputMaybe<Scalars['String']['input']>;
  assignedManager?: InputMaybe<Scalars['ID']['input']>;
  assignedSalesPerson?: InputMaybe<Scalars['ID']['input']>;
  assignedSalesPersonNumber?: InputMaybe<Scalars['String']['input']>;
  branchId?: InputMaybe<Scalars['ID']['input']>;
  cancelledAt?: InputMaybe<Scalars['String']['input']>;
  cancelledReason?: InputMaybe<Scalars['String']['input']>;
  channel?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  completedAt?: InputMaybe<Scalars['String']['input']>;
  couponCashOwned?: InputMaybe<Scalars['Float']['input']>;
  couponCashWorth?: InputMaybe<Scalars['Float']['input']>;
  couponCode?: InputMaybe<Scalars['String']['input']>;
  couponId?: InputMaybe<Scalars['ID']['input']>;
  couponType?: InputMaybe<Scalars['String']['input']>;
  courierType?: InputMaybe<CourierType>;
  customerCouponId?: InputMaybe<Scalars['ID']['input']>;
  customerId?: InputMaybe<Scalars['ID']['input']>;
  deliveredAt?: InputMaybe<Scalars['String']['input']>;
  deliveringAt?: InputMaybe<Scalars['String']['input']>;
  deliveryFee?: InputMaybe<Scalars['Float']['input']>;
  deliveryFeeBalance?: InputMaybe<Scalars['Float']['input']>;
  deliveryType?: InputMaybe<EnumDeliveryType>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  estimatedTime?: InputMaybe<Scalars['String']['input']>;
  invalidatedAt?: InputMaybe<Scalars['String']['input']>;
  isInvalid?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<LocationInput>;
  momoNumber?: InputMaybe<Scalars['String']['input']>;
  orderCode?: InputMaybe<Scalars['String']['input']>;
  otp?: InputMaybe<Scalars['Int']['input']>;
  packages?: InputMaybe<Array<PackageInput>>;
  paid?: InputMaybe<Scalars['Boolean']['input']>;
  payOrderResponse?: InputMaybe<Scalars['String']['input']>;
  paymentOption?: InputMaybe<PaymentOptionType>;
  pickup?: InputMaybe<Scalars['Boolean']['input']>;
  pickupCode?: InputMaybe<Scalars['String']['input']>;
  pickupEndDate?: InputMaybe<Scalars['String']['input']>;
  pickupStartDate?: InputMaybe<Scalars['String']['input']>;
  pickupType?: InputMaybe<ScanToOrderPickupType>;
  platform?: InputMaybe<PlatformType>;
  preorderedAt?: InputMaybe<Scalars['String']['input']>;
  productDiscount?: InputMaybe<Scalars['Float']['input']>;
  productTotalPrice?: InputMaybe<Scalars['Float']['input']>;
  purchaseType?: InputMaybe<PurchaseType>;
  readyAt?: InputMaybe<Scalars['String']['input']>;
  referenceNumber?: InputMaybe<Scalars['String']['input']>;
  serviceFee?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<OrderStatusType>;
  vehicleCategoryId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRoleResponse = {
  __typename?: 'UpdateRoleResponse';
  data?: Maybe<Role>;
  message: Scalars['String']['output'];
  statusCode: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type UserInfoInput = {
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type VerifiedNumberForPaymnetType = {
  __typename?: 'VerifiedNumberForPaymnetType';
  channel?: Maybe<Scalars['String']['output']>;
  lastUsedAt?: Maybe<Scalars['Date']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export enum WalletPaymentType {
  CreditCard = 'CREDIT_CARD',
  ExtraCash = 'EXTRA_CASH',
  MobilePayment = 'MOBILE_PAYMENT',
  PmcmWallet = 'PMCM_WALLET'
}

export type WalletTotalType = {
  __typename?: 'WalletTotalType';
  walletIn?: Maybe<Scalars['Float']['output']>;
  walletOut?: Maybe<Scalars['Float']['output']>;
};

export enum WalletTransactionType {
  Refund = 'REFUND',
  ServiceFee = 'SERVICE_FEE',
  Topup = 'TOPUP',
  Withdrawal = 'WITHDRAWAL'
}

export enum Weekday {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

export enum WinStatusType {
  Drawn = 'DRAWN',
  Lost = 'LOST',
  Won = 'WON'
}

export type YangoDeliveryResponse = {
  __typename?: 'YangoDeliveryResponse';
  data?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type YangoDeliveryRiderFound = {
  __typename?: 'YangoDeliveryRiderFound';
  riderInfo?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type YangoDeliveryRiderFoundResponse = {
  __typename?: 'YangoDeliveryRiderFoundResponse';
  data?: Maybe<YangoDeliveryRiderFound>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type YangoDeliveryStatusDetailsResponse = {
  __typename?: 'YangoDeliveryStatusDetailsResponse';
  data?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type BranchIdType = {
  __typename?: 'branchIdType';
  _id?: Maybe<Scalars['ID']['output']>;
  branchCode?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum CouponEnumType {
  Promotional = 'PROMOTIONAL',
  UserGenerated = 'USER_GENERATED'
}

export enum CouponStatusType {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
  Used = 'USED'
}

export type CustomerOrderRefundType = {
  __typename?: 'customerOrderRefundType';
  _id?: Maybe<Scalars['ID']['output']>;
  administrator?: Maybe<AdministratorType>;
  amount?: Maybe<Scalars['Int']['output']>;
  approvedAt?: Maybe<Scalars['Date']['output']>;
  balance?: Maybe<Scalars['Int']['output']>;
  channel?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  customer?: Maybe<CustomerDataType>;
  customerOrder?: Maybe<CustomerOrderType>;
  momoNumber?: Maybe<Scalars['String']['output']>;
  paidAt?: Maybe<Scalars['Date']['output']>;
  referenceNumber?: Maybe<Scalars['String']['output']>;
  refundMethod?: Maybe<RefundMethod>;
  rejectedAt?: Maybe<Scalars['Date']['output']>;
  salesPerson?: Maybe<SalesPersonDataType>;
  status?: Maybe<Scalars['String']['output']>;
  transactionType?: Maybe<RefundTransactionType>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type DeliveryDistanceType = {
  __typename?: 'deliveryDistanceType';
  car?: Maybe<Scalars['Int']['output']>;
  motor?: Maybe<Scalars['Int']['output']>;
};

export type DeliveryPriceResponse = {
  __typename?: 'deliveryPriceResponse';
  data?: Maybe<DeliveryDistanceType>;
  message?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export enum EnumDeliveryType {
  Bolt = 'BOLT',
  Car = 'CAR',
  Express = 'EXPRESS',
  Motor = 'MOTOR',
  Pickup = 'PICKUP'
}

export type ManualPointInput = {
  customerId: Scalars['ID']['input'];
  pointIn: Scalars['Int']['input'];
  reason: Scalars['String']['input'];
};

export type RiderSendMoneyType = {
  __typename?: 'riderSendMoneyType';
  _id?: Maybe<Scalars['ID']['output']>;
  amount?: Maybe<Scalars['Int']['output']>;
  branchId?: Maybe<BranchType>;
  callCenterAgentDeliveryId?: Maybe<CallCenterAgentDeliveryType>;
  channel?: Maybe<Scalars['String']['output']>;
  checkoutUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  deliveryId?: Maybe<DeliveryType>;
  momoNumber?: Maybe<Scalars['String']['output']>;
  riderId?: Maybe<RiderType>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type SendMoneySaleList = {
  __typename?: 'sendMoneySaleList';
  branch?: Maybe<BranchType>;
  totalRiderSendMoneyFor?: Maybe<Scalars['Int']['output']>;
};

export type StaffInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  dateAgo?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  lowerDate?: InputMaybe<Scalars['String']['input']>;
  orderOf?: InputMaybe<EnumOrderOf>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  upperDate?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TotalCustomerPointsType = {
  __typename?: 'totalCustomerPointsType';
  totalPointIn?: Maybe<Scalars['Int']['output']>;
  totalPointOut?: Maybe<Scalars['Int']['output']>;
  totalPoints?: Maybe<Scalars['Int']['output']>;
};

export type YangoDeliveryType = {
  __typename?: 'yangoDeliveryType';
  _id?: Maybe<Scalars['ID']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  customerOrderId?: Maybe<CustomerOrderType>;
  deliveryFee?: Maybe<Scalars['Int']['output']>;
  riderInfoResponse?: Maybe<Scalars['String']['output']>;
  riderName?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};
