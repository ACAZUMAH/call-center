import { MantineTheme } from "@mantine/core";
import { MantineThemeOverride } from "@mantine/core";

export interface Themes {
    dark: MantineThemeOverride,
    light: MantineThemeOverride
}


declare module "styled-components" {
  export interface DefaultTheme extends MantineTheme {
    darkMode: boolean;
  }
}
