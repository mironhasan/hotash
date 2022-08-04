import React from "react";
import Button from "../elements/Button";
import Icon from "../elements/Icon";
import Image from "../elements/Image";
import Input from "../fields/InputField";
import Text from "../elements/Text";
import Box from "../structure/Box";
import Group from "../structure/Group";

export default function ProductTable({ data }) {
    return (
        <div className="mc-table-responsive">
            <table className="mc-table product">
                <thead className="mc-table-head primary">
                    <tr>
                        <th>
                            <Box className="mc-table-check">
                                <Input type="checkbox" />
                                <Text>uid</Text>
                            </Box>
                        </th>
                        {data.head.map((item, index) => (
                            <th key={ index }>{ item }</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="mc-table-body even">
                    {data.body.map((item, index) => (
                        <tr key={ index }> 
                            <td title={ item.id }>
                                <Box className="mc-table-check">
                                    <Input type="checkbox" />
                                    <Text>{ item.id }</Text>
                                </Box>
                            </td>
                            <td title={ item.name }>
                                <Box className="mc-table-product">
                                    <Image src={ item.src } alt={ item.alt } />
                                    <Group className="mc-table-group">
                                        <Text>{ item.name }</Text>
                                        <Box className="mc-table-review">
                                            <Icon>{ item.review.percent >= 1 ? "star" : item.rating >= .5 ? "star_half" : "star_outline" }</Icon>
                                            <Icon>{ item.review.percent >= 2 ? "star" : item.rating >= 1.5 ? "star_half" : "star_outline" }</Icon>
                                            <Icon>{ item.review.percent >= 3 ? "star" : item.rating >= 2.5 ? "star_half" : "star_outline" }</Icon>
                                            <Icon>{ item.review.percent >= 4 ? "star" : item.rating >= 3.5 ? "star_half" : "star_outline" }</Icon>
                                            <Icon>{ item.review.percent >= 5 ? "star" : item.rating >= 4.5 ? "star_half" : "star_outline" }</Icon>
                                            <Text as="span">({ item.review.number })</Text>
                                        </Box>
                                    </Group>
                                </Box>
                            </td>
                            <td title={ item.category }>{ item.category }</td>
                            <td title={ item.brand }>{ item.brand }</td>
                            <td title={ item.sales }>{ item.sales }</td>
                            <td title={ item.amount }>{ item.amount }</td>
                            <td title={ item.published }>{ item.published }</td>
                            <td>
                                <Box className="mc-table-action">
                                    {item.action.map((item, index) => (
                                        <Button title={ item.title } key={ index } className="material-icons">{ item.icon }</Button>
                                    ))}
                                </Box>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}