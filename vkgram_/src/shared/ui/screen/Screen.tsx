import React from "react"
import { View, ViewStyle, ScrollView } from "react-native"
import { getStyles } from "./Screen.styles"
import { useTheme } from "shared/lib/hooks/useTheme"

interface IScreenProps {
    children: React.ReactNode,
    styleSheet?: ViewStyle,
}

export const Screen: React.FC<IScreenProps> = ({children, styleSheet}) => {
    const {theme} = useTheme();
    
    const styles = getStyles(theme.bgColor)
    return (
        <View style={{...styles.screen, ...styleSheet}}>
            <ScrollView>
                {children}
            </ScrollView>
        </View>
    )
}