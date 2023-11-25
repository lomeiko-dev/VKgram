import { useTheme } from "shared/lib/hooks/useTheme"

import { Text, enumTextStyles } from "shared/ui/Text"
import { Panel } from "shared/ui/panel"

export const Footer = () => {
    const {theme} = useTheme();
    return(
        <Panel height={50} isCenterContent={true} position={true} bottom={0} bgColor={theme.primaryColor}>
            <Text color={theme.textColor} styleText={enumTextStyles.TEXT}>2024©️VKGRAM</Text>
        </Panel>
    )
}