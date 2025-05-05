import { IconPackage, IconSettings } from "@tabler/icons-react";
import { routesEndPoints } from "../../../constants";
import { MenuItems } from "../interfaces";

export const menuItems: MenuItems[] = [
    {
        label: "Products",
        Icon: IconPackage,
        route: routesEndPoints.HOME
    },
    {
        label: "Settings",
        Icon: IconSettings,
        route: routesEndPoints.SETTINGS
    }
]