import React from "react";
import Box from "./elements/Box";
import Heading from "./elements/Heading";
import List from "./elements/List";

export default function Breadcrumb({ title, children }) {
    return (
        <Box className="mc-card mc-breadcrumb">
            <Heading className="mc-breadcrumb-title">{ title }</Heading>
            <List className="mc-breadcrumb-list">{ children }</List>
        </Box>
    )
}