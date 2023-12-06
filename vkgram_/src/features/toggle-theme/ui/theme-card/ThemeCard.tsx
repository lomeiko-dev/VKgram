import { ImageSourcePropType } from "react-native"
import { useTheme } from "shared/lib/hooks/useTheme"
import { Image } from "shared/ui/Image"
import { Text, enumTextStyles } from "shared/ui/Text"
import { Panel } from "shared/ui/panel"
import { enumPositionChildrenStyles } from "shared/ui/panel/Panel.styles"
import { TextButton, enumButtonStyle } from "shared/ui/text-button"

interface IThemeCardProps {
    src: ImageSourcePropType,
    name: string,
    selectTheme: () => void,
    isSelectedTheme: boolean,
}

export const ThemeCard: React.FC<IThemeCardProps> = (props) => {
    const {
        name,
        src,
        selectTheme,
        isSelectedTheme
    } = props

    const {theme} = useTheme();

    return (
        <Panel
            stylePositionChildren={enumPositionChildrenStyles.CENTERED}
            marginTop={10} marginBottom={10} marginLeft={10} marginRight={10}
            height={250} width={150} 
            paddingLeft={10} paddingRight={10} paddingTop={10} paddingBottom={10} 
            borderRadius={5} bgColor={theme.primarySecondaryColor}>

            <Image width={130} height={130} source={src}/>
            <Text marginTop={10} color={theme.textColor} styleText={enumTextStyles.SUBTITLE}>{name}</Text>
            <TextButton 
                marginTop={20}
                width={120} height={40} 
                onPress={selectTheme} 
                buttonStyle={enumButtonStyle.SUBMIT} text={isSelectedTheme ? 'Установлено' : 'Установить'}/>
        </Panel>
    )
}