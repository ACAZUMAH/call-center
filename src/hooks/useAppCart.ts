import { CartItem } from "../interfaces/redux";
import { cartActions } from "../redux/cart/slice";
import { useAppSelector, useAppDispatch } from "./useAppReduxHooks";

/**
 * Hook to get the current state of the cart (opened or closed).
 * @returns boolean - whether the cart is opened or not
 */
export const useCartOpened = () => {
  const cartState = useAppSelector((state) => state.cart);
  return cartState.opened;
};

/**
 * Hook to open the cart.
 * @returns function to open the cart
 */
export const useCartClose = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(cartActions.closeCart());
};

/**
 * Hook to close the cart.
 * @returns function to open the cart
 */
export const useToggleCart = () => {
  const dispatch = useAppDispatch();
  return () => dispatch(cartActions.toggleCart());
};

/**
 * Hook to get the number of items in the cart.
 * @returns number of items in the cart
 */
export const useCartItemsCount = () => {
  return useAppSelector((state) => state.cart.cartItems).length;
};

/**
 * Hook to get the items in the cart.
 * @returns array of cart items
 */
export const useCartItems = () => {
  return useAppSelector((state) => state.cart.cartItems);
};

/**
 * Hook to add an item to the cart.
 * @returns function to add item to cart
 */
export const useAddItemToCart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useCartItems();
  return (item: any) => {
    if (cartItems.length > 10) {
    }
    dispatch(cartActions.addItem(item));
  };
};

/**
 * Hook to remove an item from the cart.
 * @returns function to remove item from cart
 */
export const useRemoveItemFromCart = () => {
  const dispatch = useAppDispatch();

  return (id: string) => dispatch(cartActions.removeItem(id));
};

/**
 * Hook to increase the quantity of a cart item.
 * @returns function to increase quantity of cart item
 */
export const useIncreaseCartItemQuantity = () => {
  const dispatch = useAppDispatch();

  return (cartItem: CartItem) =>
    dispatch(cartActions.increaseQuantity(cartItem.item?._id!));
};

/**
 * Hook to decrease the quantity of a cart item.
 * @returns function to decrease quantity of cart item
 */
export const useDecreaseCartItemQuantity = () => {
  const dispatch = useAppDispatch();

  return (cartItem: CartItem) =>
    dispatch(cartActions.decreaseQuantity(cartItem.item?._id!));
};

/** Hook to clear all items from the cart.
 * @returns function to clear cart
 */
export const useClearCart = () => {
  const dispatch = useAppDispatch();

  return () => dispatch(cartActions.clearCart());
};

/**
 * Hook to set the delivery fee for the cart.
 * @returns function to set delivery fee
 */
export const useSetDeliveryFee = () => {
  const dispatch = useAppDispatch();
  return (fee: number) => dispatch(cartActions.addDeliveryFee(fee));
};

/**
 * Hook to get cart totals: subtotal, delivery fee, and total.
 * @returns object containing subtotal, delivery fee, and total
 */
export const useCartTotals = () => {
  const cartItems = useCartItems();
  const subTotal = cartItems.reduce(
    (total, item) => total + item.item.unitPrice! * item.quantity,
    0
  );

  const delivery = useAppSelector((state) => state.cart.deliveryFee);

  const total = subTotal + delivery;

  return {
    total,
    delivery,
    subTotal,
  };
};
