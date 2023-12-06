import { IAuthScheme } from "entities/auth"
import { authVkApi } from "entities/auth/services/auth-vk-api"

export interface IStore {
    authReducer: IAuthScheme
    authVkApi: ReturnType<typeof authVkApi.reducer>,
}

export type keyStore = keyof IStore