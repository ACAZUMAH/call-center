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

export interface Cart {
    opened: boolean
    cartItems: any[]
    subTotal: number,
    grandTotal: number
}

export interface CartActions extends PayloadAction<Partial<Cart>> {}