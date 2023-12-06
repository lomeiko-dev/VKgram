import AsyncStorage from "@react-native-async-storage/async-storage"
import {useContext, useCallback} from "react"
import { ThemeContext } from "shared/config/theme"
import { ITheme } from "shared/config/theme/types";
import { THEME_KEY } from "shared/consts/storage-key";

export const useTheme = () => {
    const {theme, changeTheme} = useContext(ThemeContext);

    const updateTheme = useCallback(async (newTheme: ITheme) => {
        await AsyncStorage.setItem(THEME_KEY, JSON.stringify(newTheme));
        changeTheme(newTheme)
    }, [changeTheme]);

    return {
        theme,
        changeTheme: updateTheme,
    }
}