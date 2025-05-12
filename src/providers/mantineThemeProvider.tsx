import { MantineProvider, createTheme } from "@mantine/core";
import React from "react";
import { useAppSettings } from "../hooks/useAppSettings";
import { Notifications } from "@mantine/notifications";

interface Props {
    children: React.ReactNode
}

export const MantineThemeProvider: React.FC<Props> = ({ children }) => {

    const appSettings = useAppSettings()

    const theme = createTheme(appSettings.themeObject)

    return (
        <MantineProvider theme={theme} forceColorScheme={appSettings.colorScheme}>
            <Notifications position="top-right" />
            {children}
        </MantineProvider>
    )
}