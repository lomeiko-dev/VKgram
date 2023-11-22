import { styles } from "./Layout.styles"

import { View, ViewStyle} from "react-native"
import { NavBar } from "./navbar/NavBar"
import { Header } from "./header/Header"
import { Panel, enumPanelStyles } from "shared/ui/panel"

interface ILayoutProps {
    children: React.ReactNode,
    appStyle?: ViewStyle
}

export const Layout: React.FC<ILayoutProps> = ({children, appStyle}) => {
    return (
        <View style={appStyle}>
            <Header/>
            <Panel height='100%' stylePanel={enumPanelStyles.COLUMN}>
                {children}
            </Panel>
            <NavBar/>
        </View>
    )
}