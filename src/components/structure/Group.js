import React from "react";

export default function Group({ as, children, ...rest }) {
    const Component = as || "div";
    return <Component { ...rest }>{ children }</Component>
}