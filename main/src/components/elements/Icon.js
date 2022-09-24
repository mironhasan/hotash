import React from "react";

export default function Icon({ as, className, style, type, children }) {
    const Component = as || "i";
    return (
        <Component style={ style } className={ className ? className : "material-icons" }>
            { type || children }
        </Component>
    )
}