import { createSlice } from "@reduxjs/toolkit";
import { Authentication, AuthenticationActions } from "../../interfaces/redux";

const initialState: Authentication = {
    isLoggedIn: true,
}

const slice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        update: (state: Authentication, actions: AuthenticationActions) => {
            return { ...state, ...actions.payload }
        }
    }
})

export default slice.reducer

export const authenticationActions = slice.actions