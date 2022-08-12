import React from "react";
import List from "./elements/List";
import Item from "./elements/Item";
import Image from "./elements/Image";
import Heading from "./elements/Heading";
import Text from "./elements/Text";
import Box from "./elements/Box";

export default function CountryList({ data }) {
    return (
        <List className="mc-country-list">
            {data.map((item, index) => (
                <Item key={ index } className="mc-country-item">
                    <Box>
                        <Image src={ item.src } alt={ item.alt } />
                        <Heading as="h6">
                            <Text as="span">{ item.name.title }</Text>
                            { item.name.text }
                        </Heading>
                    </Box>
                    <Heading as="h6"><Text as="span">{ item.sales.title }</Text>{ item.sales.text }</Heading>
                    <Heading as="h6"><Text as="span">{ item.bounce.title }</Text>{ item.bounce.text }</Heading>
                </Item>
            ))}
        </List>
    );
}