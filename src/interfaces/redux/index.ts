import { PayloadAction } from "@reduxjs/toolkit";

export interface Settings {
    darkMode: boolean
}

export interface SettingsActions extends PayloadAction<Partial<Settings>> {}

export interface Authentication {
    isLoggedIn: boolean,
    user?: any ,
    token?: string 
}

export interface AuthenticationActions extends PayloadAction<Partial<Authentication>> {}

export interface CartItem {
    item: any,
    quantity: number
}
export interface Cart {
    opened: boolean
    cartItems: CartItem[]
}

export interface CartActions extends PayloadAction<Partial<Cart>> {}