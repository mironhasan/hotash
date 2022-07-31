import React from "react";

export default function List({ children, ...rest }) {
    return <ul { ...rest }>{ children }</ul>
}