import React from "react";
import List from "../elements/List";
import Heading from "../elements/Heading";
import Menu from "../elements/Menu";
import MenuItem from "./MenuItem";

export default function MultipleMenu({ data }) {
    return (
        <>
            {data.map((item, index) => (
                <Menu key={ index }  className="mc-sidebar-menu">
                    <Heading as="h5" className="mc-sidebar-menu-title">{ item.title }</Heading>
                    <List className="mc-sidebar-menu-list">
                        {item.menu.map((item, index) => ( 
                            <MenuItem 
                                key = { index } 
                                index = {index} 
                                item = { item } 
                            />  
                        ))}
                    </List>
                </Menu>
            ))}
        </>
    );
}