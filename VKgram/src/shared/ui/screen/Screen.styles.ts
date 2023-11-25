import { StyleSheet } from "react-native";

export const getStyles = (bgColor?: string) => StyleSheet.create({
    screen: {
        height: '101%',
        backgroundColor: bgColor,
        marginTop: -1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5
    }
})