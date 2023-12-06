import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ThemesView } from "features/toggle-theme"
import { Text, enumTextStyles } from "shared/ui/Text"
import { Panel } from "shared/ui/panel"
import { TextButton, enumButtonStyle } from "shared/ui/text-button";
import { Screen } from "shared/ui/screen";

import { useTheme } from "shared/lib/hooks/useTheme"
import { useNavigation } from "@react-navigation/core";
import { useCallback } from "react";

import AntDesign from "react-native-vector-icons/AntDesign";
import { typeKeyNavigation } from "shared/config/navigate/types";

type screenProp = NativeStackNavigationProp<typeKeyNavigation, 'Settings'>

export const SettingsScreen = () => {
    const {theme} = useTheme();
    const navigation = useNavigation<screenProp>();

    const backHandler = useCallback(() => {
        navigation.goBack();
    }, [])

    return (
        <Screen>
            <TextButton 
                onPress={backHandler} 
                width={130} height={50} 
                buttonStyle={enumButtonStyle.NONE} text="Настройки">
                <AntDesign name="arrowleft" color={theme.textColor} size={20}/>
            </TextButton>
            <Panel marginLeft={10} marginTop={15} marginRight={10}>
                <Text 
                    styleText={enumTextStyles.TEXT} 
                    color={theme.textColor}>Тема приложения:</Text>
                <ThemesView/>
            </Panel>
        </Screen>
    )
}