import { StyleSheet } from "react-native";

export const getStyles = (bgColor?: string) => StyleSheet.create({
    screen: {
        height: '100%',
        overflow: 'scroll',
        backgroundColor: bgColor,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 15
    }
})