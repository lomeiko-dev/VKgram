import { StyleSheet } from "react-native";

export const getStyles = (
    marginLeft?: number, marginRight?: number, marginTop?: number, marginBottom?: number,
    paddingLeft?: number, paddingRight?: number, paddingTop?: number, paddingBottom?: number,
    borderRadius?: number, borderWidth?: number,
    borderStyle?: "solid" | "dotted" | "dashed",
    borderColor?: string,
    isCenterText?: boolean) =>
    StyleSheet.create({
        _text: {
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginBottom: marginBottom,
            marginTop: marginTop,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
            paddingBottom: paddingBottom,
            paddingTop: paddingTop,
            borderRadius: borderRadius,
            borderStyle: borderStyle,
            borderWidth: borderWidth,
            borderColor: borderColor,
            textAlign: isCenterText ? 'center' : undefined
        }
    })

export const getTextStyles = (color?: string, fontSize?: number) => {
    return StyleSheet.create({
        title: {
            fontSize: fontSize === undefined ? 24 : fontSize,
            fontWeight: "700",
            color: color === undefined ? "#333333100" : color,
        },
        subTitle: {
            fontSize: fontSize === undefined ? 20 : fontSize,
            fontWeight: "500",
            color: color === undefined ? "#333" : color
        },
        description: {
            fontSize: fontSize === undefined ? 16 : fontSize,
            fontWeight: "300",
            color: color === undefined ? "#33333390" : color
        },
        text: {
            fontSize: fontSize === undefined ? 18 : fontSize,
            fontWeight: "400",
            color: color === undefined ? "#333" : color
        },
        error: {
            fontSize: fontSize === undefined ? 18 : fontSize,
            fontWeight: "500",
            color: color === undefined ? "red" : color
        },
        warning: {
            fontSize: fontSize === undefined ? 18 : fontSize,
            fontWeight: "500",
            color: color === undefined ? "yellow" : color
        }
    });
}

export enum enumTextStyles {
    TITLE = "title",
    SUBTITLE = "subTitle",
    DESCRIPTION = "description",
    TEXT = "text",
    ERROR = "error",
    WARNING = "warning"
}