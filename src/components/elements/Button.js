import React from "react";

export default function Button({ icon, text, badge, children, ...rest }) {
    return (
        <button { ...rest }>
            { icon && <i className="material-icons">{ icon }</i> }
            { text && <span>{ text }</span> }
            { badge && <sup className={ badge.variant }>{ badge.text }</sup> }
            { children }
        </button>
    );
}