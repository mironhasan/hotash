import React from "react";
import { Box, Icon, Item, List, Text } from "./elements";

export default function Pagination() {
    return (
        <Box className="mc-paginate">
            <Text className="mc-paginate-title">Showing <b>12</b> of <b>60</b> Results</Text>
            <List className="mc-paginate-list">
                <Item className="mc-paginate-item">
                    <Icon type="chevron_left" />
                </Item>
                <Item className="mc-paginate-item active">1</Item>
                <Item className="mc-paginate-item">2</Item>
                <Item className="mc-paginate-item">3</Item>
                <Item className="mc-paginate-item">...</Item>
                <Item className="mc-paginate-item">45</Item>
                <Item className="mc-paginate-item">
                    <Icon type="chevron_right" />
                </Item>
            </List>
        </Box>
    )
}