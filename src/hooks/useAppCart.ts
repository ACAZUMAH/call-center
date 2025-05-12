import { CartItem } from "../interfaces/redux";
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

export const useCartItems = () => {
    return useAppSelector((state) => state.cart.cartItems)
}

export const useAddItemToCart = () => {
    const dispatch = useAppDispatch()
    const cartItems = useCartItems()
    return (item: any) => {
        if(cartItems.length > 10){
            
        }
        dispatch(cartActions.addItem(item))
    }
}

export const useRemoveItemFromCart = () => {
    const dispatch = useAppDispatch()

    return (id: string) => dispatch(cartActions.removeItem(id))
}

export const useIncreaseItemQuantity = () => {
    const dispatch = useAppDispatch()

    return (cartItem: CartItem) => dispatch(cartActions.increaseQuentity(cartItem.item.id))
}

export const useDecreaseItemQuantity = () => {
    const dispatch = useAppDispatch()

    return (cartItem: CartItem) => dispatch(cartActions.decreseQuentity(cartItem.item.id))
}