import {ImageSourcePropType} from 'react-native'

export interface ITheme {
    iconTheme: ImageSourcePropType,
    nameTheme: string,
    statusBarStyle: "light" | "dark",
    bgColor: string,
    primaryColor: string,
    primarySecondaryColor: string,
    primaryThirdColor: string,
    textColor: string,
    buttonColor: string,
    buttonTextColor: string
}

export interface IThemeContext {
    theme: ITheme,
    changeTheme: (theme: ITheme) => void
}