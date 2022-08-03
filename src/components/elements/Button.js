import React from "react";

export default function Button({ icon, text, badge, arrow, children, ...rest }) {
    return (
        <button { ...rest }>
            { icon && <i className="material-icons">{ icon }</i> }
            { text && <span>{ text }</span> }
            { badge && <sup className={ badge.variant }>{ badge.text }</sup> }
            { arrow && <small className="material-icons">{ arrow }</small>}
            { children }
        </button>
    );
}