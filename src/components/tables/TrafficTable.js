import React from "react";
import Box from "../elements/Box";
import Icon from "../elements/Icon";
import Text from "../elements/Text";
import Table from "../elements/Table";

export default function TrafficTable({ thead, tbody }) {
    return (
        <Box className="mc-table-responsive">
            <Table className="mc-table">
                <thead className="mc-table-head">
                    <tr>
                        {thead.map((item, index) => (
                            <th key={ index }>{ item }</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="mc-table-body">
                    {tbody.map((item, index) => (
                        <tr key={ index }> 
                            <td>
                                <Box className="mc-table-icon">
                                    <Icon type={ item.source.icon } />
                                    <Text>{ item.source.text }</Text>
                                </Box>
                            </td>
                            <td>{ item.users }</td>
                            <td>{ item.sessions }</td>
                            <td>{ item.bounce }</td>
                            <td>{ item.duration }</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Box>
    )
}