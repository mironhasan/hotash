import React from "react";
import List from "../elements/List";
import Heading from "../elements/Heading";
import Menu from "../elements/Menu";
import MenuItem from "./MenuItem";

export default function MultipleMenu({ data }) {

    return (
        <>
            {data.map((item, menuIndex) => (
                <Menu key={ menuIndex }  className="mc-sidebar-menu">
                    <Heading as="h5" className="mc-sidebar-menu-title">{ item.title }</Heading>
                    <List className="mc-sidebar-menu-list">
                        {item.menu.map((item, itemIndex) => ( 
                            <MenuItem 
                                key = { itemIndex } 
                                item = { item } 
                                itemIndex = { itemIndex } 
                                menuIndex = { menuIndex } 
                            />  
                        ))}
                    </List>
                </Menu>
            ))}
        </>
    );
}