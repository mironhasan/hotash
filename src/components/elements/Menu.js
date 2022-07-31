import React from "react";

export default function Menu({ children, ...rest }) {
    return <menu { ...rest }>{ children }</menu>
}