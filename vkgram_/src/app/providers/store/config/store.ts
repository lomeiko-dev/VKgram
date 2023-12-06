import { type CombinedState, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { configureStore } from "@reduxjs/toolkit";
import { IStore } from '../types/store-scheme';
import { createReducerManager } from '../lib/reducerManager';
import { authReducer } from 'entities/auth';
import { authVkApi } from 'entities/auth/services/auth-vk-api';

const appReducers: ReducersMapObject<IStore> = {
    authReducer: authReducer,
    authVkApi: authVkApi.reducer,
}

export const reducerManager = createReducerManager(appReducers);

export const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStore>>,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authVkApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch