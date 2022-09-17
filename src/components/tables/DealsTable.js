import React from "react";
import Modal from 'react-bootstrap/Modal';
import { Table, Thead, Tbody, Th, Tr, Td } from "../elements/Table";
import { Heading, Anchor, Icon, Box, Text, Input, Image, Button } from "../elements";

export default function DealsTable({ thead, tbody }) {
    const [alertModal, setAlertModal] = React.useState(false);
    return (
        <Box className="mc-table-responsive">
            <Table className="mc-table">
                <Thead className="mc-table-head primary">
                    <Tr>
                        <Th>
                            <Box className="mc-table-check">
                                <Input type="checkbox" />
                                <Text>s.l</Text>
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
                            <Td>
                                <Box className="mc-table-check">
                                    <Input type="checkbox" />
                                    <Text>{ index + 1 }</Text>
                                </Box>
                            </Td>
                            <Td>
                                <Box className="mc-table-profile">
                                    <Image src={ item.src } alt={ item.alt } />
                                    <Text>{ item.name }</Text>
                                </Box>
                            </Td>
                            <Td>{ item.email }</Td>
                            <Td>{ item.amount }</Td>
                            <Td><Text className={`mc-table-badge ${ item.status.variant }`}>{ item.status.text }</Text></Td>
                            <Td>{ item.date }</Td>
                            <Td>
                                <Box className="mc-table-action">
                                    <Anchor title="View" href="#" className="material-icons view">{ item.action.view }</Anchor>
                                    <Anchor title="Download" href="#" className="material-icons download" download>{ item.action.download }</Anchor>
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
                    <Text as="p">Want to delete this deals?</Text>
                    <Modal.Footer>
                        <Button type="button" className="btn btn-secondary" onClick={()=> setAlertModal(false)}>nop, close</Button>
                        <Button type="button" className="btn btn-danger" onClick={()=> setAlertModal(false)}>yes, delete</Button>
                    </Modal.Footer>
                </Box>
            </Modal>
        </Box>
    )
}