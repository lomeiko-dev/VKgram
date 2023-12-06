import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { TextButton, enumButtonStyle } from "shared/ui/text-button"
import { Panel, enumPanelStyles } from "shared/ui/panel";

import {useState, useCallback} from "react"
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "shared/lib/hooks/useTheme";

import { typeKeyNavigation } from "shared/config/navigate/types";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import IonIcons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

type screenProp = NativeStackNavigationProp<typeKeyNavigation, "Profile">

export const NavBar = () => {
    const {theme} = useTheme();
    const [select, setSelect] = useState(1);
    const navigation = useNavigation<screenProp>();

    const navigateHandle = useCallback((indexSelect: number, keyScreen: keyof typeKeyNavigation) => {
        setSelect(indexSelect)
        navigation.navigate(keyScreen)
    }, [select]);

    return (
        <Panel
            height={55}
            bgColor={theme.primaryColor}
            position={true} bottom={0}
            styleSheet={{alignItems: "center", justifyContent: "space-between"}} 
            stylePanel={enumPanelStyles.ROW}>
                <TextButton 
                    onPress={() => navigateHandle(0, "Profile")}
                    width={75} height={55}
                    buttonStyle={select === 0 ? enumButtonStyle.SUBMIT : enumButtonStyle.NONE}>
                    <EvilIcons name="user" color={theme.textColor} size={45}/>
                </TextButton>

                <TextButton 
                    onPress={() => navigateHandle(1, "Chats")}
                    width={75} height={55} 
                    buttonStyle={select === 1 ? enumButtonStyle.SUBMIT : enumButtonStyle.NONE}>
                    <IonIcons name="chatbubble-outline" color={theme.textColor} size={32}/>
                </TextButton>

                <TextButton 
                    onPress={() => navigateHandle(2, "Posts")}
                    width={75} height={55} 
                    buttonStyle={select === 2 ? enumButtonStyle.SUBMIT : enumButtonStyle.NONE}>
                    <FontAwesome name="newspaper-o" color={theme.textColor} size={32}/>
                </TextButton>
                
                <TextButton 
                    onPress={() => navigateHandle(3, "Users")}
                    width={75} height={55}
                    buttonStyle={select === 3 ? enumButtonStyle.SUBMIT : enumButtonStyle.NONE}>
                    <Feather name="users" color={theme.textColor} size={32}/>
                </TextButton>
        </Panel>
    )
}