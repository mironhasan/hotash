import React from "react";
import { Link } from "react-router-dom";

export default function Anchor({ href, icon, text, badge, children, ...rest }) {
    return (
        <Link to={ href } { ...rest }>
            { icon && <i className="material-icons">{ icon }</i> }
            { text && <span>{ text }</span> }
            { badge && <sup>{ badge }</sup> }
            { children }
        </Link>
    )
}