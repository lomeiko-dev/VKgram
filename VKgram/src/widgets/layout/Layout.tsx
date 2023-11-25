import { styles } from "./Layout.styles"

import { View, ViewStyle} from "react-native"
import { NavBar } from "./navbar/NavBar"
import { Header } from "./header/Header"
import { Footer } from "widgets/layout/footer/Footer"

interface ILayoutProps {
    children: React.ReactNode,
    appStyle?: ViewStyle,
    hideNavbar?: boolean,
}

export const Layout: React.FC<ILayoutProps> = (props) => {
    const { 
        children,
        hideNavbar = true,
        appStyle
    } = props;

    return (
        <View style={{...styles.layout, ...appStyle}}>
            <Header/>
            {children}
            {hideNavbar ? <Footer/> : <NavBar/>}
        </View>
    )
}