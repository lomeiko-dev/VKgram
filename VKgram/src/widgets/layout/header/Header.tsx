import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types"

import { Image } from "shared/ui/Image"
import { Text, enumTextStyles } from "shared/ui/Text"
import { Panel, enumPanelStyles } from "shared/ui/panel"
import { TextButton, enumButtonStyle } from "shared/ui/text-button"

import { useTheme } from "shared/lib/hooks/useTheme"
import { useNavigation } from "@react-navigation/core"
import { useCallback } from "react"

import { IoSettingsSharp } from "react-icons/io5";
import { enumKeyNavigation } from "shared/config/navigate/types"

export const Header = () => {
    const {theme} = useTheme();
    const navigation: StackNavigationProp<enumKeyNavigation, enumKeyNavigation.PROFILE> 
        = useNavigation();

    const navigationSettingsHandler = useCallback(() => {
        navigation.navigate(enumKeyNavigation.SETTINGS)
    }, [])

    return (
        <Panel
            bgColor={theme.primaryColor}
            height={65} 
            styleSheet={{alignItems: 'center'}} 
            stylePanel={enumPanelStyles.ROW}>
                <Image marginLeft={15} marginRight={5} width={50} height={50} src={require('shared/assets/img/logo.png')}/>
                <Text color={theme.textColor} fontSize={32} styleText={enumTextStyles.TITLE}>VK</Text>
                <Text fontSize={32} color="#00b4d8" styleText={enumTextStyles.TITLE}>gram</Text>

                <TextButton 
                    position={true} right={15}
                    onPress={navigationSettingsHandler} 
                    width={35} height={35} 
                    buttonStyle={enumButtonStyle.NONE}>
                    <IoSettingsSharp color={theme.textColor} size={35}/>
                </TextButton>
        </Panel>
    )
}