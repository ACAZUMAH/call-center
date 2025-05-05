import { useAppDispatch, useAppSelector } from "./useAppReduxHooks"
import { settingActions } from "../redux/settings/slice"
import { theme } from "../constants/theme/theme"

export const useAppSettings = () => {
    const dispatch = useAppDispatch()

    const settings = useAppSelector((state) => state.settings)

    const toggleTheme = () => {
        if(settings.darkMode){
            dispatch(settingActions.update({ darkMode: false }))
        }else{
            dispatch(settingActions.update({ darkMode: true }))
        }
    }

    const themeObject = settings.darkMode ? theme.dark : theme.light

    const colorScheme: "dark" | "light" | undefined = settings.darkMode
      ? "dark"
      : "light";

    return { ...settings, toggleTheme, colorScheme, themeObject }
}