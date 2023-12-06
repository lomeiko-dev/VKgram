import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { typeKeyNavigation } from "shared/config/navigate/types"

import { Panel, enumPanelStyles } from "shared/ui/panel"
import { TextButton, enumButtonStyle } from "shared/ui/text-button"
import { Namespace } from "shared/ui/namespace"

import { useTheme } from "shared/lib/hooks/useTheme"
import { useNavigation } from "@react-navigation/native"

import IonIcons from "react-native-vector-icons/Ionicons";

type screenProp = NativeStackNavigationProp<typeKeyNavigation, 'Profile'>

export const Header = () => {
    const {theme} = useTheme();
    const navigation = useNavigation<screenProp>();

    const navigationSettingsHandler = () => {
        navigation.navigate('Settings')
    }

    return (
        <Panel
            paddingTop={25} paddingLeft={10} paddingRight={10}
            bgColor={theme.primaryColor}
            height={85}
            styleSheet={{alignItems: 'center', justifyContent: "space-between"}} 
            stylePanel={enumPanelStyles.ROW}>
                <Namespace/>
                <TextButton 
                    onPress={navigationSettingsHandler} 
                    width={32} height={32} 
                    buttonStyle={enumButtonStyle.NONE}>
                        <IonIcons name="settings-sharp" color={theme.textColor} size={32}/>
                </TextButton>
        </Panel>
    )
}