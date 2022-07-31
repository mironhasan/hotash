import React from "react";

export default function Section({ as, children, ...rest }) {
    const Component = as || "section";
    return <Component { ...rest }>{ children }</Component>
}