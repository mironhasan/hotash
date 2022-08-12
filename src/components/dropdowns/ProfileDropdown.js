import React from "react";
import Anchor from "../elements/Anchor";
import Dropdown from 'react-bootstrap/Dropdown';

export default function ProfileDropdown({ dropdown }) {
    return (
        <Dropdown.Menu align="end" className="mc-dropdown profile">
            {dropdown.map((item, index) => (
                <Anchor
                    key = { index }
                    href = { item.path }
                    icon = { item.icon }
                    text = { item.text }
                    className = "mc-header-user-link"
                />
            ))}
        </Dropdown.Menu>
    )
}