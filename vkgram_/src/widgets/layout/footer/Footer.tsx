import { useTheme } from "shared/lib/hooks/useTheme"

import { Text, enumTextStyles } from "shared/ui/Text"
import { Panel } from "shared/ui/panel"
import { enumPositionChildrenStyles } from "shared/ui/panel/Panel.styles";

export const Footer = () => {
    const {theme} = useTheme();
    return(
        <Panel 
            height={55}
            stylePositionChildren={enumPositionChildrenStyles.CENTERED}
            position={true} bottom={0} 
            bgColor={theme.primaryColor}>
            <Text 
                color={theme.textColor}
                styleText={enumTextStyles.TEXT}>2024©VKGRAM</Text>
        </Panel>
    )
}