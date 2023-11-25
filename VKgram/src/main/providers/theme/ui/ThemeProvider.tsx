import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useEffect, useState } from "react"
import { ThemeContext, lightTheme } from "shared/config/theme"
import { ITheme } from "shared/config/theme/types"
import { THEME_KEY } from "shared/consts/storage-key"

interface IThemeProviderProps {
    children: React.ReactNode,
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<ITheme>(lightTheme)
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getItem(THEME_KEY) ?? undefined
            if(savedTheme)
                setTheme(JSON.parse(savedTheme) || lightTheme)
            setLoaded(true)
        }

        if(!loaded)
            loadTheme();
    }, [loaded])

    return(
       <ThemeContext.Provider value={{theme: theme, changeTheme: setTheme}}>
            {children}
       </ThemeContext.Provider> 
    )
}