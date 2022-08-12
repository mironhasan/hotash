import React from "react";
import Text from "../elements/Text";
import Box from "../elements/Box";
import Heading from "../elements/Heading";
import DotsMenu from "../DotsMenu";

export default function SalesCard ({ title, amount, dotsMenu, children }) {
    return (
        <Box className="mc-card">
            <Box className="mc-sales-card-head">
                <Heading as="h3">
                    <Text as="span">{ title }</Text>
                    { amount }
                </Heading>
                <DotsMenu dots={ dotsMenu.dots } dropdown={ dotsMenu.dropdown } />
            </Box>
            <Box className="mc-sales-card-chart">
                { children }
            </Box>
        </Box>
    );
}