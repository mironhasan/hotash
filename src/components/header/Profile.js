import React from 'react';
import List from '../elements/List';
import Item from '../elements/Item';
import Box from '../structure/Box';
import Image from '../elements/Image';
import Anchor from '../elements/Anchor';
import Group from '../structure/Group';
import Heading from '../elements/Heading';

export default function Profile({ data }) {
    const [dropdown, setDropdown] = React.useState(false);
    const handleToggle = () => setDropdown(!dropdown);
    const handleClose = () => setDropdown(false);

    return (
        <Box className="mc-header-user-group">
            <Group className="mc-header-user-menu" onClick={ handleToggle }>
                <Group className="mc-header-user-image">
                    <Image 
                        src = { data.user.src } 
                        alt = { data.user.alt } 
                    />
                </Group>
                <Group className="mc-header-user-meta">
                    <Heading as="h3">{ data.user.name }</Heading>
                    <Heading as="h4">{ data.user.username }</Heading>
                </Group>
            </Group>
            {dropdown &&
                <List className="mc-header-user-list" onClick={ handleClose }>
                    {data.menu.map((item, index) => (
                        <Item key={ index } className="mc-header-user-item">
                            <Anchor
                                href = { item.href }
                                icon = { item.icon }
                                text = { item.text }
                                className = "mc-header-user-link"
                            />
                        </Item>
                    ))}
                </List>
            }
        </Box>
    );
}