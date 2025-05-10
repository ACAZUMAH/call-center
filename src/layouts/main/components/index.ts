import { IconHistory, IconPackage } from "@tabler/icons-react";
import { routesEndPoints } from "../../../constants";
import { MenuItems } from "../interfaces";

export const menuItems: MenuItems[] = [
    {
        label: "Products",
        Icon: IconPackage,
        route: routesEndPoints.HOME
    },
    {
        label: "History",
        Icon: IconHistory,
        route: routesEndPoints.HISTORY
    },
    // {
    //     label: "Settings",
    //     Icon: IconSettings,
    //     route: routesEndPoints.SETTINGS
    // }
]
