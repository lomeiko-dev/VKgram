export interface ITheme {
    iconTheme: string,
    nameTheme: string,
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