import React from "react";

export default function Box({ as, children, ...rest }) {
    const Component = as || "div";
    return <Component { ...rest }>{ children }</Component>
}