import { useTheme } from "shared/lib/hooks/useTheme"
import { Image } from "shared/ui/Image"
import { Text, enumTextStyles } from "shared/ui/Text";
import { Panel } from "shared/ui/panel"

export const Hello = () => {
    const { theme } = useTheme();

      return (
        <Panel height={300} isCenterContent={true}>
            <Text isCenterText={true} styleText={enumTextStyles.TITLE} color={theme.textColor}>
                Добро пожаловать в VK<Text styleText={enumTextStyles.TITLE} color="#00b4d8">gram</Text>!
            </Text>
            <Image marginTop={30} marginBottom={0} width={120} height={120} src={require('shared/assets/gifs/hello.gif')} />
        </Panel>
    )
}