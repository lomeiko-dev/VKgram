import { Image } from "shared/ui/Image"
import { Text, enumTextStyles } from "shared/ui/Text";
import { Namespace } from "shared/ui/namespace";
import { Panel } from "shared/ui/panel"
import { enumPanelStyles, enumPositionChildrenStyles } from "shared/ui/panel/Panel.styles";

export const Hello = () => {
      return (
        <Panel height={240} stylePositionChildren={enumPositionChildrenStyles.CENTERED}>
            <Panel stylePanel={enumPanelStyles.ROW} stylePositionChildren={enumPositionChildrenStyles.CENTERED}>
                <Text styleText={enumTextStyles.TITLE}>Добро пожаловать в </Text> 
                <Namespace fontSize={20} isLogo={false} width={80}/>
                <Text styleText={enumTextStyles.TITLE}>!</Text> 
            </Panel>
            <Image 
                marginTop={15}
                width={120} height={120} 
                source={require('shared/assets/gifs/hello.gif')} />
        </Panel>
    )
}