import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

import { ThemesView } from "features/toggle-theme"
import { Text, enumTextStyles } from "shared/ui/Text"
import { Panel } from "shared/ui/panel"
import { TextButton, enumButtonStyle } from "shared/ui/text-button";
import { Screen } from "shared/ui/screen";

import { useTheme } from "shared/lib/hooks/useTheme"
import { useNavigation } from "@react-navigation/core";
import { useCallback } from "react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { enumKeyNavigation } from "shared/config/navigate/types";

export const SettingsScreen = () => {
    const {theme} = useTheme();
    const navigation: StackNavigationProp<enumKeyNavigation, enumKeyNavigation.PROFILE> 
        = useNavigation();

    const backHandler = useCallback(() => {
        navigation.goBack();
    }, [])

    return (
        <Screen>
            <TextButton 
                onPress={backHandler} 
                width={150} height={50} 
                buttonStyle={enumButtonStyle.NONE}>
                <IoIosArrowRoundBack color={theme.textColor} size={40}/>
                <Text styleText={enumTextStyles.SUBTITLE} color={theme.textColor}>Настройки</Text>
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