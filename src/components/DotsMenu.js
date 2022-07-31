import React from "react";
import Button from "./elements/Button";
import Box from "./structure/Box";
import List from "./elements/List";

export default function DotsMenu({ icon, children, position }) {

    const [dropdown, setDropdown] = React.useState(false);
    const handleToggle = () => setDropdown(!dropdown);
    const handleClose = () => setDropdown(false);

    return (
        <Box className="mc-dots">
            <Button 
                icon = { dropdown ? "close" : icon }
                className = "mc-dots-icon" 
                onClick={ handleToggle } 
            />
            {dropdown && 
                <List 
                    className = {`mc-dots-list ${ position }`} 
                    onClick = { handleClose }
                >
                    { children }
                </List>
            }
        </Box>
    )
}