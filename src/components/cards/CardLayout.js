import React from "react";
import Box from "../elements/Box";
import Heading from "../elements/Heading";
import DotsMenu from "../DotsMenu";

export default function CardLayout ({ title, dotsMenu, children }) {
    return (
        <Box className="mc-card">
            <Box className="mc-card-head">
                { title && <Heading as="h4" className="mc-card-title">{ title }</Heading> }
                { dotsMenu && <DotsMenu dots={ dotsMenu.dots } dropdown={ dotsMenu.dropdown } /> }
            </Box>
            { children }
        </Box>
    );
}