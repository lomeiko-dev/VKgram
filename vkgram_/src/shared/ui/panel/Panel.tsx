import React from "react"
import { enumPanelStyles, getStyles, getDisplayStyles, enumPositionChildrenStyles, getPositionChildrenStyles } from "./Panel.styles"
import { View, ViewProps, ViewStyle } from "react-native"
import { DimensionValue } from "react-native"

interface IPanelProps extends ViewProps {
    children: React.ReactNode,
    stylePanel?: enumPanelStyles,
    stylePositionChildren?: enumPositionChildrenStyles,
    styleSheet?: ViewStyle,
    width?: DimensionValue, 
    height?: DimensionValue, 
    bgColor?: string, 
    borderRadius?: number,
    marginLeft?: number, 
    marginRight?: number, 
    marginTop?: number, 
    marginBottom?: number,
    paddingLeft?: number,
    paddingRight?: number,
    paddingTop?: number,
    paddingBottom?: number,
    position?: boolean,
    top?: number,
    left?: number,
    right?: number,
    bottom?: number
}

export const Panel: React.FC<IPanelProps> = (props) => {
    const {
        children,
        stylePanel = enumPanelStyles.COLUMN,
        styleSheet,
        stylePositionChildren,
        width,
        height,
        bgColor,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        borderRadius,
        position = false,
        top,
        left,
        right,
        bottom,
        ...otherProps
    } = props

    const displayStyles = getDisplayStyles(stylePanel);
    const styles = getStyles(width, height, 
        bgColor, borderRadius, 
        marginLeft, marginRight, marginTop, marginBottom, 
        paddingLeft, paddingRight, paddingTop, paddingBottom,
        position, top, left, right, bottom);
    const positionChildStyles = getPositionChildrenStyles();

    return(
        <View 
            {...otherProps} 
            style={{
                ...styles.panel, 
                ...displayStyles, 
                ...styleSheet, 
                ...(stylePositionChildren && positionChildStyles[stylePositionChildren])}}>
            {children}
        </View>
    )
}