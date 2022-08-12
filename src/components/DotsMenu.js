import React from "react";
import Icon from "../components/elements/Icon"
import Dropdown from 'react-bootstrap/Dropdown';
import DotsDropdown from "./dropdowns/DotsDropdown";

export default function DotsMenu({ dots, dropdown }) {
    return (
        <Dropdown bsPrefix="mc-dots">
            <Dropdown.Toggle bsPrefix="mc-dots-icon"><Icon type={ dots } /></Dropdown.Toggle>
            <DotsDropdown dropdown={ dropdown } />
        </Dropdown>
    )
}