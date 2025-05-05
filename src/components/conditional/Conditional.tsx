import React from "react";

interface conditionalProps {
    condition: boolean,
    children: React.ReactNode
}

export const Conditional: React.FC<conditionalProps> = ({ condition, children }) => {
    if(!condition) return null

    return <>{children}</>
};
