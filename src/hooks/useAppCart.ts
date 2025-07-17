import { CartItem } from "../interfaces/redux";
import { cartActions } from "../redux/cart/slice";
import { useAppSelector, useAppDispatch } from "./useAppReduxHooks";

export const useCartOpened = () => {
    const cartState = useAppSelector((state) => state.cart)
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

export const useIncreaseCartItemQuantity = () => {
    const dispatch = useAppDispatch()

    return (cartItem: CartItem) => dispatch(cartActions.increaseQuentity(cartItem.item?._id!))
}

export const useDecreaseCartItemQuantity = () => {
    const dispatch = useAppDispatch()

    return (cartItem: CartItem) => dispatch(cartActions.decreseQuentity(cartItem.item?._id!))
}

export const useClearCart = () => {
    const dispatch = useAppDispatch()

    return () => dispatch(cartActions.clearCart())
}

export const useCartTotals = () => {
    const cartItems = useCartItems()
    const subTotal = cartItems.reduce((total, item) => total + (item.item.unitPrice! * item.quantity), 0)

    const delivery = 0 // TODO: get delivery cost from API

    const total = subTotal + delivery

    return {
        total,
        delivery,
        subTotal
    }
}