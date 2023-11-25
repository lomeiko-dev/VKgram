import { DimensionValue, StyleSheet } from "react-native";

export enum enumPanelStyles {
    ROW = "row",
    COLUMN = "column"
}

export enum enumPanelPasitionStyles {
    LEFT = 'left',
    RIGHT = 'right',
    TOP = 'top',
    BOTTOM = 'bottom',
    LEFT_TOP = 'left_top',
    RIGHT_TOP = 'right_top',
    LEFT_BOTTOM = 'left_bottom',
    RIGHT_BOTTOM = 'right_bottom'
}

export const getStyles = (
    width?: DimensionValue, height?: DimensionValue,
    bgColor?: string, borderRadius?: number,
    marginLeft?: number, marginRight?: number, marginTop?: number, marginBottom?: number,
    paddingLeft?: number, paddingRight?: number, paddingTop?: number, paddingBottom?: number,
    position?: boolean, top?: number, left?: number, right?: number, bottom?: number) =>
    StyleSheet.create({
        panel: {
            position: position ? 'absolute' : undefined,
            top: top,
            left: left,
            right: right,
            bottom: bottom,
            display: 'flex',
            width: width === undefined ? '100%' : width,
            height: height,
            backgroundColor: bgColor === undefined ? 'transparent' : bgColor,
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            marginBottom: marginBottom,
            paddingLeft: paddingLeft,
            paddingRight: paddingRight,
            paddingBottom: paddingBottom,
            paddingTop: paddingTop,
            borderRadius: borderRadius,
        }
    })

export const getDisplayStyles = (style: enumPanelStyles) => {
    const styles = StyleSheet.create({
        row: {
            flexDirection: 'row',
            flexWrap:'wrap'
            
        },
        column: {
            flexDirection: "column"
        }
    })

    return styles[style]
}