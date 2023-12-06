import { useTheme } from "shared/lib/hooks/useTheme"
import { Image } from "../Image"
import { Text, enumTextStyles } from "../Text"
import { Panel, enumPanelStyles } from "../panel"

interface INamespaceProps {
    isLogo?: boolean,
    fontSize?: number,
    width?: number,
}

export const Namespace: React.FC<INamespaceProps> = (props) => {
    const {
        isLogo = true,
        fontSize = 28,
        width = 120,
    } = props

    const {theme} = useTheme();

    return(
        <Panel 
            styleSheet={{alignItems: 'center'}} 
            width={width} stylePanel={enumPanelStyles.ROW}>
            {isLogo && 
                <Image 
                    marginRight={5}
                    width={45} height={45} 
                    source={require("shared/assets/img/logo.png")}/>}

            <Text color={theme.textColor} fontSize={fontSize} styleText={enumTextStyles.TITLE}>VK</Text>
            <Text fontSize={fontSize} color="#00b4d8" styleText={enumTextStyles.TITLE}>gram</Text>
        </Panel>
    )
}