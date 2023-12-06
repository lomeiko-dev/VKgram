import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { IAuthScheme } from "../types/auth-scheme"

const initialState: IAuthScheme = {
    token_tg: undefined,
    token_vk: undefined
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setTokenVk: (state, action: PayloadAction<string>) => {
            state.token_vk = action.payload;
        },
        setTokenTg: (state, action: PayloadAction<string>) => {
            state.token_tg = action.payload;
        },
        logout: (state) => {
            state.token_tg = undefined;
            state.token_vk = undefined;
        }
    }
})

export const authReducer = authSlice.reducer;
export const {logout, setTokenTg, setTokenVk} = authSlice.actions;