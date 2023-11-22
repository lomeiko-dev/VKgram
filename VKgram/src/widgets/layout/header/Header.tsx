import { Image } from "shared/ui/Image"
import { Text, enumTextStyles } from "shared/ui/Text"
import { Panel, enumPanelStyles } from "shared/ui/panel"

export const Header = () => {
    return (
        <Panel
            height={65} 
            styleSheet={{alignItems: 'center'}} 
            stylePanel={enumPanelStyles.ROW}>
            <Image marginLeft={15} marginRight={5} width={45} height={45} source={require('shared/assets/img/logo.png')}/>
            <Text fontSize={32} styleText={enumTextStyles.TITLE}>VK</Text>
            <Text fontSize={32} color="#00b4d8" styleText={enumTextStyles.TITLE}>gram</Text>
        </Panel>
    )
}