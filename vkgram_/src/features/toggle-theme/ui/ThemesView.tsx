import { ITheme } from "shared/config/theme/types"
import { ThemeCard } from "./theme-card/ThemeCard"
import { Panel, enumPanelStyles } from "shared/ui/panel"
import { darkTheme, lightTheme } from "shared/config/theme"
import { useTheme } from "shared/lib/hooks/useTheme"

const allThemes: ITheme[] = [
    darkTheme,
    lightTheme,
]

export const ThemesView = () => {
    const {changeTheme, theme} = useTheme();
    return(
        <Panel width='100%' stylePanel={enumPanelStyles.ROW}>
            {allThemes.map(item => 
                <ThemeCard 
                    isSelectedTheme={item.nameTheme === theme.nameTheme }
                    src={item.iconTheme} 
                    name={item.nameTheme} 
                    selectTheme={() => changeTheme(item)}/>
            )}
        </Panel>
    )
}