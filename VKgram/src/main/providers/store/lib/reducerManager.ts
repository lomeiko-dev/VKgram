import { type AnyAction, combineReducers, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit'
import { type IStore, type keyStore } from '../types/store-scheme'

export function createReducerManager (initialReducers: ReducersMapObject<IStore>) {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: keyStore[] = []

  return {
    getReducerMap: () => reducers,
    reduce (state: IStore, action: AnyAction) {
      if (keysToRemove.length > 0) {
        state = { ...state }
        for (const key of keysToRemove) {
          delete state[key]
        }

        keysToRemove = []
      }

      return combinedReducer(state, action)
    },
    add (key: keyStore, reducer: Reducer) {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },
    remove (key: keyStore) {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    }
  }
}
