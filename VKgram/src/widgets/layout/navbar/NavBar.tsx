import { StackNavigationProp } from "react-navigation-stack/lib/typescript/src/vendor/types";

import { TextButton, enumButtonStyle } from "shared/ui/text-button"
import { Panel, enumPanelStyles } from "shared/ui/panel";

import { CgProfile } from "react-icons/cg";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { FaRegNewspaper } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import {useState, useCallback} from "react"
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "shared/lib/hooks/useTheme";

import { enumKeyNavigation } from "shared/config/navigate/types";

export const NavBar = () => {
    const {theme} = useTheme();
    const [select, setSelect] = useState(1);
    const navigation: StackNavigationProp<enumKeyNavigation, enumKeyNavigation.PROFILE> 
        = useNavigation();

    const navigateHandle = useCallback((indexSelect: number, keyScreen: enumKeyNavigation) => {
        setSelect(indexSelect)
        navigation.navigate(keyScreen)
    }, [select]);

    return (
        <Panel
            bgColor={theme.primaryColor}
            position={true} bottom={0}
            styleSheet={{alignItems: "center", justifyContent: "space-around"}} 
            stylePanel={enumPanelStyles.ROW}>
                <TextButton 
                    onPress={() => navigateHandle(0, enumKeyNavigation.PROFILE)}
                    width={75} height={50} 
                    buttonStyle={select === 0 ? enumButtonStyle.SUBMIT : enumButtonStyle.NONE}>
                    <CgProfile color={theme.textColor} size={32}/>
                </TextButton>

                <TextButton 
                    onPress={() => navigateHandle(1, enumKeyNavigation.CHATS)}
                    width={75} height={50} 
                    buttonStyle={select === 1 ? enumButtonStyle.SUBMIT : enumButtonStyle.NONE}>
                    <BsChatSquareDotsFill color={theme.textColor} size={32}/>
                </TextButton>

                <TextButton 
                    onPress={() => navigateHandle(2, enumKeyNavigation.POSTS)}
                    width={75} height={50} 
                    buttonStyle={select === 2 ? enumButtonStyle.SUBMIT : enumButtonStyle.NONE}>
                    <FaRegNewspaper color={theme.textColor} size={32}/>
                </TextButton>
                
                <TextButton 
                    onPress={() => navigateHandle(3, enumKeyNavigation.USERS)}
                    width={75} height={50} 
                    buttonStyle={select === 3 ? enumButtonStyle.SUBMIT : enumButtonStyle.NONE}>
                    <FaUsers color={theme.textColor} size={32}/>
                </TextButton>
        </Panel>
    )
}