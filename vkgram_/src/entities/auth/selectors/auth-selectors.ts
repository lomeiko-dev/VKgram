import { IStore } from "main/providers/store";

export const tokenVkSelector = (state: IStore) => state.authReducer.token_vk ?? "";
export const tokenTgSelector = (state: IStore) => state.authReducer.token_tg ?? "";