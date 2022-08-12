import React from "react";

export default function Icon({ as, className, type, children, ...rest }) {
    const Component = as || "i";
    return (
        <Component className={ className ? className : "material-icons" } { ...rest }>
            { type || children || "home" }
        </Component>
    )
}