import React from "react";

export default function Icon({ as, className, children, ...rest }) {
    const Component = as || "i";
    return <Component className={`material-icons ${ className ? className : "" }`} { ...rest }>{ children }</Component>
}