import React from "react";
import List from "../elements/List";
import Item from "../elements/Item";
import Anchor from "../elements/Anchor";
import Button from "../elements/Button";

export default function MenuItem({ item, index }) {
    const [open, setOpen] = React.useState(false);

    return (
        <Item className={`mc-sidebar-menu-item ${open ? "active" : ""} ${index == 0 ? "focused" : ""}`}>
            {item.submenu ?
                <>
                    <Button 
                        icon = { item.icon } 
                        text = { item.text } 
                        badge = { item.badge }
                        arrow = "expand_more"
                        className = "mc-sidebar-menu-btn" 
                        onClick={()=> setOpen(!open)}
                    />
                    <List className="mc-sidebar-dropdown-list">
                        {item.submenu.map((item, index) => (
                            <Item key={ index } className="mc-sidebar-dropdown-item">
                                <Anchor href={ item.href } className="mc-sidebar-dropdown-link">
                                    { item.text } 
                                </Anchor>
                            </Item>
                        ))}
                    </List>
                </>
            :
                <Anchor 
                    href={ item.href || "#" }
                    icon = { item.icon } 
                    text = { item.text } 
                    badge = { item.badge }
                    className = "mc-sidebar-menu-btn" 
                    onClick={()=> setOpen(!open)}
                />
            }
        </Item>
    )
}