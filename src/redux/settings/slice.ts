import { createSlice } from "@reduxjs/toolkit";
import { Settings, SettingsActions } from "../../interfaces/redux";

const initialState: Settings = {
    darkMode: false
}

const slice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        update: (state: Settings, action: SettingsActions) => {
            return { ...state, ...action.payload }
        }
    }
})

export default slice.reducer

export const settingActions = slice.actions