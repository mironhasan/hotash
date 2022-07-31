import React from "react";
import List from "../elements/List";
import Item from "../elements/Item";
import Heading from "../elements/Heading";
import Anchor from "../elements/Anchor";
import Button from "../elements/Button";
import Menu from "../elements/Menu";

export default function MultipleMenu({ data }) {
    return (
        <>
            {data.map((item, index) => (
                <Menu key={ index }  className="mc-sidebar-menu">
                    <Heading as="h5" className="mc-sidebar-menu-title">{ item.title }</Heading>
                    <List className="mc-sidebar-menu-list">
                        {item.menu.map((item, index) => (                            
                            <Item key={ index } className="mc-sidebar-menu-item">
                                <Button 
                                    icon = { item.icon } 
                                    text = { item.text } 
                                    badge = { item.badge }
                                    className = "mc-sidebar-menu-btn" 
                                />
                                {item.submenu &&
                                    <List className="mc-sidebar-dropdown-list">
                                        {item.submenu.map((item, index) => (
                                            <Item key={ index } className="mc-sidebar-dropdown-item">
                                                <Anchor href={ item.href } className="mc-sidebar-dropdown-link">
                                                    { item.text } 
                                                </Anchor>
                                            </Item>
                                        ))}
                                    </List>
                                }
                            </Item>
                        ))}
                    </List>
                </Menu>
            ))}
        </>
    );
}