import React from "react";
import Box from "./structure/Box";
import Icon from "./elements/Icon";
import Item from "./elements/Item";
import List from "./elements/List";
import Text from "./elements/Text";

export default function Paginate() {
    return (
        <Box className="mc-paginate">
            <Text className="mc-paginate-title">Showing <b>12</b> of <b>60</b> Results</Text>
            <List className="mc-paginate-list">
                <Item className="mc-paginate-item">
                    <Icon>chevron_left</Icon>
                </Item>
                <Item className="mc-paginate-item active">1</Item>
                <Item className="mc-paginate-item">2</Item>
                <Item className="mc-paginate-item">3</Item>
                <Item className="mc-paginate-item">...</Item>
                <Item className="mc-paginate-item">45</Item>
                <Item className="mc-paginate-item">
                    <Icon>chevron_right</Icon>
                </Item>
            </List>
        </Box>
    )
}