import React from "react";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Input from "../elements/Input";
import Text from "../elements/Text";
import Box from "../structure/Box";

export default function UserTable({ data }) {
    return (
        <table className="mc-table">
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
                            <Box className="mc-table-profile">
                                <Image src={ item.src } alt={ item.alt } />
                                <Text>{ item.name }</Text>
                            </Box>
                        </td>
                        <td title={ item.role }>
                            { item.role === "admin" && <Text className="mc-table-role admin">{ item.role }</Text> }
                            { item.role === "member" && <Text className="mc-table-role member">{ item.role }</Text> }
                            { item.role === "client" && <Text className="mc-table-role client">{ item.role }</Text> }
                            { item.role === "vendor" && <Text className="mc-table-role vendor">{ item.role }</Text> }
                            { item.role === "founder" && <Text className="mc-table-role founder">{ item.role }</Text> }
                        </td>
                        <td title={ item.email }>{ item.email }</td>
                        <td title={ item.password }>{ item.password }</td>
                        <td title={ item.phone }>{ item.phone }</td>
                        <td title={ item.created }>{ item.created }</td>
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
    )
}