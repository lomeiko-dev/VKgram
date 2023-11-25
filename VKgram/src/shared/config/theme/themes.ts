import { ITheme } from "./types";

export const darkTheme: ITheme = {
    iconTheme: require("shared/assets/theme_icon/dark.png"),
    nameTheme: 'dark night',
    bgColor: '#001524',
    primaryColor: '#14213d',
    primarySecondaryColor: '#22223b',
    primaryThirdColor: '#2b2d50',
    textColor: '#fff',
    buttonColor: "#fff",
    buttonTextColor: '#333'
}

export const lightTheme: ITheme = {
    iconTheme: require("shared/assets/theme_icon/light.png"),
    nameTheme: 'light',
    bgColor: '#dadee2',
    primaryColor: '#f8f9fa',
    primarySecondaryColor: '#e9ecef',
    primaryThirdColor: '#dee2e6',
    textColor: '#333',
    buttonColor: "#333",
    buttonTextColor: '#fff'
}