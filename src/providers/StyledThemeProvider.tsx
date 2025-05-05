import { useMantineTheme } from "@mantine/core";
import React from "react";
import { useAppSettings } from "../hooks/useAppSettings";
import { ThemeProvider } from "styled-components";

interface Props {
  children: React.ReactNode;
}

export const StyledThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = useMantineTheme();
  const appSettings = useAppSettings();

  const styledTheme = {
    ...theme,
    darkMode: appSettings.darkMode
  }
  return (
    <ThemeProvider theme={styledTheme}>
      {children}
    </ThemeProvider>
  );
};
