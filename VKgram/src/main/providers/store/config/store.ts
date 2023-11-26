import { type CombinedState, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { configureStore } from "@reduxjs/toolkit";
import { IStore } from '../types/store-scheme';
import { createReducerManager } from '../lib/reducerManager';

const appReducers: ReducersMapObject<IStore> = {

}

export const reducerManager = createReducerManager(appReducers);

export const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<IStore>>,
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch