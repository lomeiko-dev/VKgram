import React from "react"
import { enumPanelStyles, getStyles, getDisplayStyles } from "./Panel.styles"
import { View, ViewProps, ViewStyle } from "react-native"
import { DimensionValue } from "react-native"

interface IPanelProps extends ViewProps {
    children: React.ReactNode
    stylePanel?: enumPanelStyles
    styleSheet?: ViewStyle,
    width?: DimensionValue, 
    height?: DimensionValue, 
    bgColor?: string, 
    marginLeft?: number, 
    marginRight?: number, 
    marginTop?: number, 
    marginBottom?: number,
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
        width,
        height,
        bgColor,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        position = false,
        top,
        left,
        right,
        bottom,
        ...otherProps
    } = props

    const displayStyles = getDisplayStyles(stylePanel);
    const styles = getStyles(width, height, 
        bgColor, 
        marginLeft, marginRight, marginTop, marginBottom, 
        position, top, left, right, bottom);

    return(
        <View {...otherProps} style={{...styles.panel, ...displayStyles, ...styleSheet}}>
            {children}
        </View>
    )
}