import React from "react";

export default function List({ children, className }) {
    return <ul className={ className }>{ children }</ul>
}