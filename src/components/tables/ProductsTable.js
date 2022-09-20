import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Table, Thead, Tbody, Th, Tr, Td } from "../elements/Table";
import { Anchor, Heading, Box, Text, Input, Image, Icon, Button } from "../elements";

export default function ProductsTable({ thead, tbody }) {

    const [alertModal, setAlertModal] = React.useState(false);

    return (
        <Box className="mc-table-responsive">
            <Table className="mc-table product">
                <Thead className="mc-table-head primary">
                    <Tr>
                        <Th>
                            <Box className="mc-table-check">
                                <Input type="checkbox" />
                                <Text>uid</Text>
                            </Box>
                        </Th>
                        {thead.map((item, index) => (
                            <Th key={ index }>{ item }</Th>
                        ))}
                    </Tr>
                </Thead>
                <Tbody className="mc-table-body even">
                    {tbody.map((item, index) => (
                        <Tr key={ index }> 
                            <Td title={ index + 1 }>
                                <Box className="mc-table-check">
                                    <Input type="checkbox" />
                                    <Text>#{ index + 1 }</Text>
                                </Box>
                            </Td>
                            <Td>
                                <Box className="mc-table-product md">
                                    <Image src={ item.src } alt={ item.alt } />
                                    <Box className="mc-table-group">
                                        <Heading as="h6">{ item.heading }</Heading>
                                        <Text>{ item.descrip }</Text>
                                    </Box>
                                </Box>
                            </Td>
                            <Td>{ item.category }</Td>
                            <Td>{ item.brand }</Td>
                            <Td>
                                <Box className="mc-table-price">
                                    <del>{ item.price.previous }</del>
                                    <Text>{ item.price.present }</Text>
                                </Box>
                            </Td>
                            <Td>{ item.stock }</Td>
                            <Td>
                                <Box className="mc-table-rating">
                                    <Icon>{ item.rating.icon }</Icon>
                                    <Heading>{ item.rating.percent }</Heading>
                                    <Text>({ item.rating.number })</Text>
                                </Box>
                            </Td>
                            <Td>{ item.order }</Td>
                            <Td>{ item.sales }</Td>
                            <Td>
                                <Box className="mc-table-action">
                                    <Anchor href="/product-view" title="View" className="material-icons view">{ item.action.view }</Anchor>
                                    <Anchor href="/product-upload" title="Edit" className="material-icons edit">{ item.action.edit }</Anchor>
                                    <Button title="Delete" className="material-icons delete" onClick={()=> setAlertModal(true)}>{ item.action.delete }</Button>
                                </Box>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <Modal show={ alertModal } onHide={()=> setAlertModal(false)}>
                <Box className="mc-alert-modal">
                    <Icon type="new_releases" />
                    <Heading as="h3">are your sure!</Heading>
                    <Text as="p">Want to delete this product?</Text>
                    <Modal.Footer>
                        <Button type="button" className="btn btn-secondary" onClick={()=> setAlertModal(false)}>nop, close</Button>
                        <Button type="button" className="btn btn-danger" onClick={()=> setAlertModal(false)}>yes, delete</Button>
                    </Modal.Footer>
                </Box>
            </Modal>
        </Box>
    );
}