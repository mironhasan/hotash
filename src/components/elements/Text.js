import React from "react";

export default function Text({ as, children, ...rest }) {
    const Component = as || "p";
    return <Component { ...rest }>{ children }</Component>
}