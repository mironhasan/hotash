import React from "react";
import { Dropdown } from "react-bootstrap";
import { Icon, Text } from "../elements";

export default function Languages() {
    return (
        <Dropdown className="mc-dropdown">
            <Dropdown.Toggle className="mc-header-icon mc-dropdown-toggle">
                <Icon type="language" />
                <Text as="sup" className="primary">03</Text>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="mc-dropdown-paper">

            </Dropdown.Menu>
        </Dropdown>
    )
}