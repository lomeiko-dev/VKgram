import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { OAUTH_VK } from 'shared/consts/url-api'

export interface IAuthVkApiProps {
    client_id: string, 
    redirect_uri: string
}

export const authVkApi = createApi({
    reducerPath: 'authVkApi',
    baseQuery: fetchBaseQuery({baseUrl: "", mode: "cors"}),
    endpoints: (builder) => ({
        getAuthToken: builder.query<{token: string}, IAuthVkApiProps>({
            query: ({client_id, redirect_uri}) => 
                `https://oauth.vk.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=friends&response_type=code&display=mobile`
        })
    })
})

export const { useGetAuthTokenQuery } = authVkApi
export const authVkPath = authVkApi.reducerPath