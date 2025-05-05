import { IconHome2 } from "@tabler/icons-react";
import React from "react";

export interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'>{
    image: string
    name: string
    email: string
    icon?: React.ReactNode
}

export interface MenuItems {
    label: string,
    Icon: typeof IconHome2,
    route: string
}

export interface SidebarItemsProps extends MenuItems {
    onClick?: () => void
}