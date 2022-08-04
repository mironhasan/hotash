import React from "react";

export default function Icon({ as, className, type, ...rest }) {
    const Component = as || "i";
    return <Component className={`material-icons ${ className ? className : "" }`} { ...rest }>{ type || "home" }</Component>
}