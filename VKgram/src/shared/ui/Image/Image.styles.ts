import { DimensionValue, StyleSheet } from "react-native";

export enum enumImageStyle {
    CIRCLE = 'circle',
    RICTANGLE = 'rictangle'
}

export const getImageStyles = (
    width?: DimensionValue, height?: DimensionValue,
    marginTop?: number, marginBottom?: number, marginLeft?: number, marginRight?: number) =>
    StyleSheet.create({
        imgage: {
            backgroundColor: 'transperent',
            width: width,
            height: height,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            marginRight: marginRight
        },
        circle: {
            borderRadius: (Number(width) + Number(height)) / 2,
        },
        rictangle: {
            borderRadius: 5,
        }
    })