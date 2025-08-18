import { PayloadAction } from "@reduxjs/toolkit";
import { ProductType2 } from "../graphql/graphql";

export interface Settings {
    darkMode: boolean
}

export interface SettingsActions extends PayloadAction<Partial<Settings>> {}

export interface Authentication {
    isLoggedIn: boolean,
    user?: any ,
    token?: string 
    phoneNumber?: string
}

export interface AuthenticationActions extends PayloadAction<Partial<Authentication>> {}

export interface CartItem {
    item: ProductType2,
    quantity: number
}
export interface Cart {
    opened: boolean
    cartItems: CartItem[]
}

export interface CartActions extends PayloadAction<Partial<Cart>> {}