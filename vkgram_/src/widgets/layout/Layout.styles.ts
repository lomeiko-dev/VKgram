import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    layout: {
        height: '100%',
        overflow: 'hidden'
    },
    content: {
        height: Dimensions.get('window').height - 60,
    }
})