import { keyStore } from "main/providers/store"
import { type Reducer } from "@reduxjs/toolkit";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";
import { reducerManager } from "main/providers/store";

interface IReduce {
    key: keyStore,
    reduce: Reducer,
    save: boolean
}

interface IReduceLoaderProps {
    children: React.ReactNode,
    reducers: IReduce[]
}

export const ReduceLoader: React.FC<IReduceLoaderProps> = (props) => {
    const {
        children,
        reducers
    } = props

    const dispatch = useAppDispatch();

    useEffect(() => {
        reducers.map(item => {
            if(reducerManager.getReducerMap()[item.key] !== item.reduce){
                reducerManager.add(item.key, item.reduce);
                dispatch({type: `@INIT ${item.key}`})
            }
        })

        return () => {
            reducers.map(item => {
                if(!item.save){
                    reducerManager.remove(item.key)
                    dispatch({type: `@REMOVE ${item.key}`})
                }
            })
        }
    }, [])

    return children
}