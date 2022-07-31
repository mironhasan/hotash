import React from "react";
import Box from "../structure/Box";
import Icon from "../elements/Icon";
import Text from "../elements/Text";

export default function TrafficTable({ data }) {
    return (
        <table className="mc-table">
            <thead className="mc-table-head">
                <tr>
                    {data.head.map((item, index) => (
                        <th key={ index }>{ item }</th>
                    ))}
                </tr>
            </thead>
            <tbody className="mc-table-body">
                {data.body.map((item, index) => (
                    <tr key={ index }> 
                        <td>
                            <Box className="mc-table-icon">
                                <Icon>{ item.source.icon }</Icon>
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
        </table>
    )
}