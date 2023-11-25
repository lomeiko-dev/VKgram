import React from "react";
import { enumTextStyles, getStyles, getTextStyles } from "./Text.styles";
import {Text as TextNative, TextProps } from "react-native";

interface ITextProps extends TextProps {
    children: React.ReactNode,
    styleText?: enumTextStyles,

    marginLeft?: number,
    marginRight?: number,
    marginTop?: number,
    marginBottom?: number,

    paddingLeft?: number,
    paddingRight?: number,
    paddingTop?: number,
    paddingBottom?: number,

    borderRadius?: number,
    borderWidth?: number,
    borderStyle?: "solid" | "dotted" | "dashed",
    borderColor?: string,
    color?: string,
    fontSize?: number,
    isCenterText?: boolean,
}


export const Text: React.FC<ITextProps> = (props) => {
    const {
        children,
        styleText = enumTextStyles.TEXT,
        marginLeft,
        marginBottom,
        marginRight,
        marginTop,
        paddingLeft,
        paddingRight,
        paddingBottom,
        paddingTop,
        borderRadius,
        borderStyle,
        borderWidth,
        borderColor,
        color,
        fontSize,
        isCenterText,
        ...otherProps
    } = props;

    const textStyles = getTextStyles(color, fontSize)
    const styles = getStyles(
        marginLeft, marginRight, marginTop, marginBottom,
        paddingLeft, paddingRight, paddingTop, paddingBottom,
        borderRadius, borderWidth, borderStyle, borderColor, isCenterText)

    return(
        <TextNative 
            {...otherProps} 
            style={{...textStyles[styleText], ...styles._text}}>
                {children}
        </TextNative>
    )
}