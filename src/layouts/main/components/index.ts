import { IconHistory, IconPackage, IconSettings } from "@tabler/icons-react";
import { routesEndPoints } from "../../../constants";
import { MenuItems } from "../interfaces";

export const menuItems: MenuItems[] = [
    {
        label: "Products",
        Icon: IconPackage,
        route: routesEndPoints.PRODUCTS
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

export const extractRoute = (route: string) => {
  const regex = /\/u(?:\/[^/]*)?/;
  const match = route.match(regex);
  return match ? match[0] : null;

}