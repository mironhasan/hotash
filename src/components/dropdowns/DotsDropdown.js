import React from "react";
import Button from "../elements/Button";
import Dropdown from 'react-bootstrap/Dropdown';

export default function DotsDropdown({ dropdown }) {
    return (
        <Dropdown.Menu align="end" className="mc-dropdown">
            {dropdown.map((item, index)=> (
                <Button 
                    key = { index }
                    icon = { item.icon } 
                    text ={ item.text } 
                    className = "mc-dots-btn" 
                />
            ))}
        </Dropdown.Menu>
    )
}