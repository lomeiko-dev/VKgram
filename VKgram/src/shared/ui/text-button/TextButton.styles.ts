import { StyleSheet } from "react-native";

export const getDefaultStyles = (
    marginTop?: number, marginBottom?: number, marginLeft?: number, marginRight?: number) => 
    StyleSheet.create({
        button: {
            fontFamily: "Arial",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
        }
    })

export const getStyles = (width: number, height: number, color?: string, backgroundColor?: string, isCircle?: boolean) => {
    return StyleSheet.create({
        submit: {
            color: color === undefined ? "#fff" : color,
            backgroundColor: backgroundColor === undefined ? "#3a86ff" : backgroundColor,
            borderRadius: isCircle ? (width + height) / 2 : 5,
            fontWeight: 600,
            width: width,
            height: height
        },
        default: {
            color: color === undefined ? "#333" : color,
            backgroundColor: backgroundColor === undefined ? "#fff" : backgroundColor,
            borderRadius: isCircle ? (width + height) / 2 : 5,
            fontWeight: 600,
            width: width,
            height: height
        },
        none: {
            borderStyle: undefined,
            color: color === undefined ? "#333" : color,
            fontWeight: 600,
            width: width,
            height: height
        }
    })
}

export enum enumButtonStyle {
    SUBMIT = "submit",
    DEFAULT = "default",
    NONE = "none"
}