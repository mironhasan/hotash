import React from "react";
import Text from "../elements/Text";
import Item from "../elements/Item";
import Box from "../structure/Box";
import Button from "../elements/Button";
import Heading from "../elements/Heading";
import Group from "../structure/Group";
import DotsMenu from "../DotsMenu";

export default function SalesCard ({ title, amount, dots, children }) {
    return (
        <Box className="mc-card">
            <Group className="mc-sales-card-head">
                <Heading as="h3">
                    <Text as="span">{ title }</Text>
                    { amount }
                </Heading>
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
            <Box className="mc-sales-card-chart">
                { children }
            </Box>
        </Box>
    );
}