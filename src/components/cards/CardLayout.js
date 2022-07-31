import React from "react";
import Item from "../elements/Item";
import Box from "../structure/Box";
import Button from "../elements/Button";
import Heading from "../elements/Heading";
import Group from "../structure/Group";
import DotsMenu from "../DotsMenu";

export default function CardLayout ({ title, dots, children }) {
    return (
        <Box className="mc-card">
            <Group className="mc-card-head">
                <Heading as="h4" className="mc-card-title">{ title }</Heading>
                <DotsMenu 
                    icon = { dots.icon }
                    position = { dots.position }
                >
                    {dots.dropdown.map((item, index) => (
                        <Item 
                            key = { index }
                            className="mc-dots-item"
                        >
                            <Button 
                                icon = { item.icon } 
                                text = { item.text } 
                                className = "mc-dots-btn"
                            />
                        </Item>
                    ))}
                </DotsMenu>
            </Group>
            { children }
        </Box>
    );
}