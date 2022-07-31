import React from "react";
import Box from "./structure/Box";
import Heading from "./elements/Heading";
import Item from "./elements/Item";
import List from "./elements/List";

export default function Breadcrumb({ title, active, children }) {
    return (
        <Box className="mc-card mc-breadcrumb">
            <Heading className="mc-breadcrumb-title">{ title }</Heading>
            <List className="mc-breadcrumb-list">
                { children }
                <Item className="mc-breadcrumb-item">{ active }</Item>
            </List>
        </Box>
    )
}