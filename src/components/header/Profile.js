import React from 'react';
import Box from '../elements/Box';
import Image from '../elements/Image';
import Heading from '../elements/Heading';
import Dropdown from 'react-bootstrap/Dropdown';
import ProfileDropdown from '../dropdowns/ProfileDropdown';

export default function Profile({ data }) {
    return (
        <Dropdown className="mc-header-user-group">
            <Dropdown.Toggle className="mc-header-user-menu">
                <Box className="mc-header-user-image">
                    <Image src={ data.src } alt={ data.alt } />
                </Box>
                <Box className="mc-header-user-meta">
                    <Heading as="h3">{ data.name }</Heading>
                    <Heading as="h4">{ data.username }</Heading>
                </Box>
            </Dropdown.Toggle>
            <ProfileDropdown dropdown={ data.dropdown } />
        </Dropdown>
    );
}