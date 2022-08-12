import React from "react";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Table from "../elements/Table";
import Input from "../elements/Input";
import Text from "../elements/Text";
import Box from "../elements/Box";
import Icon from "../elements/Icon";
import Anchor from "../elements/Anchor";
import Option from "../elements/Option";
import Modal from 'react-bootstrap/Modal';
import Heading from "../elements/Heading";
import Form from 'react-bootstrap/Form';
import alluser from "../../data/alluser.json";


export default function UserTable({ thead, tbody }) {

    const [editModal, setEditModal] = React.useState(false);
    const [blockModal, setBlockModal] = React.useState(false);
    const [userData, setUserData] = React.useState("");

    return (
        <Box className="mc-table-responsive">
            <Table className="mc-table">
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
                            <td title="id">
                                <Box className="mc-table-check">
                                    <Input type="checkbox" />
                                    <Text>#{ index + 1 }</Text>
                                </Box>
                            </td>
                            <td title={ item.name }>
                                <Box className="mc-table-profile">
                                    <Image src={ item.src } alt={ item.alt } />
                                    <Text>{ item.name }</Text>
                                </Box>
                            </td>
                            <td title={ item.role }>
                                <Box className="mc-table-icon role">
                                    { item.role.text === "vendor" && <Icon className="material-icons yellow">{ item.role.icon }</Icon> }
                                    { item.role.text === "member" && <Icon className="material-icons green">{ item.role.icon }</Icon> }
                                    { item.role.text === "admin" && <Icon className="material-icons purple">{ item.role.icon }</Icon> }
                                    { item.role.text === "founder" && <Icon className="material-icons blue">{ item.role.icon }</Icon> }
                                    <Text as="span">{ item.role.text }</Text>
                                </Box>
                            </td>
                            <td title={ item.email }>{ item.email }</td>
                            <td title={ item.password }>{ item.password }</td>
                            <td title={ item.phone }>{ item.phone }</td>
                            <td title={ item.status }>
                                { item.status === "approved" && <Text className="mc-table-badge green">{ item.status }</Text> }
                                { item.status === "pending" && <Text className="mc-table-badge yellow">{ item.status }</Text> }
                                { item.status === "blocked" && <Text className="mc-table-badge red">{ item.status }</Text> }
                            </td>
                            <td title={ item.created }>{ item.created }</td>
                            <td>
                                <Box className="mc-table-action">
                                    <Anchor href="#" title="View" className="material-icons view">{ item.action.view }</Anchor>
                                    <Button title="Edit" className="material-icons edit" onClick={()=> setEditModal(true, setUserData(item))}>{ item.action.edit }</Button>
                                    <Button title="Block" className="material-icons block" onClick={()=> setBlockModal(true)}>{ item.action.block }</Button>
                                </Box>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={ editModal } onHide={()=> setEditModal(false, setUserData(""))}>
                <Box className="mc-user-modal">
                    <Image src={ userData.src } alt={ userData.alt } />
                    <Heading as="h4">{ userData.name }</Heading>
                    <Text as="p">{ userData.email }</Text>
                    <Form.Group className="form-group inline mb-4">
                        <Form.Label>role</Form.Label>
                        <Form.Select>
                            <Option>{ userData.role ? userData.role.text : "" }</Option>
                            {alluser.role.map((item, index)=> (
                                <Option key={ index } value={ item }>{ item }</Option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="form-group inline">
                        <Form.Label>status</Form.Label>
                        <Form.Select>
                            <Option>{ userData.status }</Option>
                            {alluser.status.map((item, index)=> (
                                <Option key={ index } value={ item }>{ item }</Option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <Modal.Footer>
                        <Button type="button" className="btn btn-secondary" onClick={()=> setEditModal(false)}>close popup</Button>
                        <Button type="button" className="btn btn-success" onClick={()=> setEditModal(false)}>save Changes</Button>
                    </Modal.Footer>
                </Box>
            </Modal>
            
            <Modal show={ blockModal } onHide={()=> setBlockModal(false)}>
                <Box className="mc-alert-modal">
                    <Icon type="new_releases" />
                    <Heading as="h3">are your sure!</Heading>
                    <Text as="p">Want to block this user's account?</Text>
                    <Modal.Footer>
                        <Button type="button" className="btn btn-secondary" onClick={()=> setBlockModal(false)}>nop, close</Button>
                        <Button type="button" className="btn btn-danger" onClick={()=> setBlockModal(false)}>yes, block</Button>
                    </Modal.Footer>
                </Box>
            </Modal>
        </Box>
    )
}