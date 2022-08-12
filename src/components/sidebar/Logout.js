import React from "react";
import Box from "../elements/Box";
import Anchor from "../elements/Anchor";

export default function Logout({ data }) {
    return (
        <Box className="mc-sidebar-logout">
            <Anchor 
                href = { data.path } 
                icon = { data.icon } 
                text = { data.text } 
                className = "mc-btn"
            />
        </Box>
    )
}