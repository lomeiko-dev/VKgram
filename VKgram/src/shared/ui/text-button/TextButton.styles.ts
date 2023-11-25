import { DimensionValue, StyleSheet } from "react-native";

export const getDefaultStyles = (
    marginTop?: number, marginBottom?: number, marginLeft?: number, marginRight?: number,
    position?: boolean, top?: number, left?: number, right?: number, bottom?: number,
    isCircle?: boolean, width?: DimensionValue, height?: DimensionValue) => 
    StyleSheet.create({
        button: {
            position: position ? 'absolute' : undefined,
            top: top,
            left: left,
            right: right,
            bottom: bottom,
            fontFamily: "Arial",
            flexDirection: 'row',
            display: "flex",
            flexWrap: 'wrap',
            alignItems: "center",
            justifyContent: "center",
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight,
            borderRadius: isCircle ? (Number(width) + Number(height)) / 2 : 5,
            fontWeight: 600,
            width: width,
            height: height
        }
    })

export const getStyles = (color?: string, backgroundColor?: string) => {
    return StyleSheet.create({
        submit: {
            color: color === undefined ? "#fff" : color,
            backgroundColor: backgroundColor === undefined ? "#3a86ff" : backgroundColor,
        },
        default: {
            color: color === undefined ? "#333" : color,
            backgroundColor: backgroundColor === undefined ? "#fff" : backgroundColor,
        },
        none: {
            borderStyle: undefined,
            color: color === undefined ? "#333" : color,
        }
    })
}

export enum enumButtonStyle {
    SUBMIT = "submit",
    DEFAULT = "default",
    NONE = "none"
}