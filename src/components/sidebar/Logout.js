import React from "react";
import Box from "../structure/Box";
import Anchor from "../elements/Anchor";

export default function Logout({ data }) {
    return (
        <Box className="mc-sidebar-logout">
            <Anchor 
                href = { data.href } 
                icon = { data.icon } 
                text = { data.text } 
                className = "mc-btn"
            />
        </Box>
    )
}