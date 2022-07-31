import React from "react";
import Box from "../structure/Box";
import Icon from "../elements/Icon";
import Text from "../elements/Text";
import Group from "../structure/Group";
import Heading from "../elements/Heading";
import DotsMenu from "../DotsMenu";
import Button from "../elements/Button";
import Item from "../elements/Item";

export default function HeroCard({ variant, trend, number, title, icon, percent, compare, dots }) {
    return (
        <Box className={`mc-hero-card ${ variant }`}>
            <Icon className="mc-hero-card-trend">{ trend }</Icon>
            <Group className="mc-hero-card-head">
                <Heading as="h4" className="mc-hero-card-meta">
                    <Text as="span">{ title }</Text>
                    { number }
                </Heading>
                <Icon className="mc-hero-card-icon">{ icon }</Icon>
            </Group>
            <Group className="mc-hero-card-foot">
                <Box className="mc-hero-card-compare">
                    <Text as="mark">{ percent }</Text>
                    <Text as="span">{ compare }</Text>
                </Box>
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
        </Box>
    );
}