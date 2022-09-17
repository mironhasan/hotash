import React from 'react';
import DropdownMenu from '../DropdownMenu';
import Dropdown from 'react-bootstrap/Dropdown';
import { Box, Image, Heading } from "../elements";

export default function Profile({ data }) {
    return (
        <Dropdown className="mc-header-user-group">
            <Dropdown.Toggle className="mc-dropdown-toggle mc-header-user-toggle">
                <Box className="mc-header-user-image">
                    <Image src={ data.src } alt={ data.alt } />
                </Box>
                <Box className="mc-header-user-meta">
                    <Heading as="h3">{ data.name }</Heading>
                    <Heading as="h4">{ data.username }</Heading>
                </Box>
            </Dropdown.Toggle>
            <DropdownMenu dropdown={ data.dropdown } />
        </Dropdown>
    );
}