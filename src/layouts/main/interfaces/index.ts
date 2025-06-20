import React from "react";

export interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'>{
    image: string
    name: string
    email: string
    icon?: React.ReactNode
}

export interface MenuItems {
    label: string,
    route: string
}

export interface HeaderTabItemsProps extends MenuItems {
    onClick?: () => void
}