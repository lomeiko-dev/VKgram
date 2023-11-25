import { useTheme } from "shared/lib/hooks/useTheme"
import { Image } from "shared/ui/Image"
import { Text, enumTextStyles } from "shared/ui/Text"
import { Panel } from "shared/ui/panel"
import { TextButton, enumButtonStyle } from "shared/ui/text-button"

interface IThemeCardProps {
    src: string,
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

    console.log(src);
    return (
        <Panel 
            isCenterContent={true}
            marginTop={10} marginBottom={10} marginLeft={10} marginRight={10}
            height={250} width={150} 
            paddingLeft={10} paddingRight={10} paddingTop={10} paddingBottom={10} 
            borderRadius={5} bgColor={theme.primarySecondaryColor}>
            <Image width={120} height={120} src={src}/>
            <Text color={theme.textColor} styleText={enumTextStyles.SUBTITLE}>{name}</Text>
            <TextButton 
                marginTop={20}
                width={120} height={40} 
                onPress={selectTheme} 
                buttonStyle={enumButtonStyle.SUBMIT}>{isSelectedTheme ? 'Установлено' : 'Установить'}</TextButton>
        </Panel>
    )
}