import React from "react";
import Box from "../elements/Box";
import Icon from "../elements/Icon";
import Text from "../elements/Text";
import Heading from "../elements/Heading";
import DotsMenu from "../DotsMenu";

export default function HeroCard({ variant, trend, number, title, icon, percent, compare, dotsMenu }) {
    return (
        <Box className={`mc-hero-card ${ variant }`}>
            <Icon className="mc-hero-card-trend material-icons">{ trend }</Icon>
            <Box className="mc-hero-card-head">
                <Heading as="h4" className="mc-hero-card-meta">
                    <Text as="span">{ title }</Text>
                    { number }
                </Heading>
                <Icon className="mc-hero-card-icon material-icons">{ icon }</Icon>
            </Box>
            <Box className="mc-hero-card-foot">
                <Box className="mc-hero-card-compare">
                    <Text as="mark">{ percent }</Text>
                    <Text as="span">{ compare }</Text>
                </Box>
                <DotsMenu dots={ dotsMenu.dots } dropdown={ dotsMenu.dropdown } />
            </Box>
        </Box>
    );
}