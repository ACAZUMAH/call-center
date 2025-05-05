import { cartActions } from "../redux/cart/slice";
import { useAppSelector, useAppDispatch } from "./useAppReduxHooks";

export const useCartOpened = () => {
    const cartState = useAppSelector((state) => state.cart )
    return cartState.opened
}


export const useCartClose = () => {
    const dispatch = useAppDispatch()
    return () => dispatch(cartActions.closeCart())
}

export const useToggleCart = () => {
    const dispatch = useAppDispatch()
    return () => dispatch(cartActions.toggleCart())
}

export const useCartItemsCount = () => {
    return useAppSelector((state) => state.cart.cartItems).length
}