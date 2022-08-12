import React from "react";
import Button from "../elements/Button";
import Icon from "../elements/Icon";
import Image from "../elements/Image";
import Input from "../elements/Input";
import Text from "../elements/Text";
import Box from "../elements/Box";
import Table from "../elements/Table";

export default function ProductTable({ thead, tbody }) {
    return (
        <Box className="mc-table-responsive">
            <Table className="mc-table product">
                <thead className="mc-table-head primary">
                    <tr>
                        <th>
                            <Box className="mc-table-check">
                                <Input type="checkbox" />
                                <Text>uid</Text>
                            </Box>
                        </th>
                        {thead.map((item, index) => (
                            <th key={ index }>{ item }</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="mc-table-body even">
                    {tbody.map((item, index) => (
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
                                    <Box className="mc-table-group">
                                        <Text>{ item.name }</Text>
                                        <Box className="mc-table-review">
                                            <Icon type={ item.review.percent >= 1 ? "star" : item.rating >= .5 ? "star_half" : "star_outline" } />
                                            <Icon type={ item.review.percent >= 2 ? "star" : item.rating >= 1.5 ? "star_half" : "star_outline" } />
                                            <Icon type={ item.review.percent >= 3 ? "star" : item.rating >= 2.5 ? "star_half" : "star_outline" } />
                                            <Icon type={ item.review.percent >= 4 ? "star" : item.rating >= 3.5 ? "star_half" : "star_outline" } />
                                            <Icon type={ item.review.percent >= 5 ? "star" : item.rating >= 4.5 ? "star_half" : "star_outline" } />
                                            <Text as="span">({ item.review.number })</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </td>
                            <td title={ item.category }>{ item.category }</td>
                            <td title={ item.brand }>{ item.brand }</td>
                            <td title={ item.sales }>{ item.sales }</td>
                            <td title={ item.amount }>{ item.amount }</td>
                            <td title={ item.published }>{ item.published }</td>
                            <td>
                                <Box className="mc-table-action">
                                    <Button title={ item.action.edit } className="material-icons edit">{ item.action.edit }</Button>
                                    <Button title={ item.action.delete } className="material-icons delete">{ item.action.delete }</Button>
                                </Box>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Box>
    );
}