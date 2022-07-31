import React from "react";

export default function Heading({ as, children, ...rest }) {
    const Component = as || "h3";
    return <Component { ...rest }>{ children }</Component>
}