import React from "react";
import Box from "../elements/Box";
import Input from "../elements/Input";
import Image from "../elements/Image";
import Label from "../elements/Label";
import Button from "../elements/Button";
import Option from "../elements/Option";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import alluser from "../../data/alluser.json";

export default function UserEditModal() {
    const [editShow, setEditShow] = React.useState(false);
    const [userData, setUserData] = React.useState("");

    return (
        <Modal show={editShow} onHide={()=> setEditShow(false, setUserData(""))}>
            <Form className="mc-modal-user-form">
                <Box className="mc-modal-user-group">
                    <Image className="mc-modal-user-avatar" src={ userData.src } alt={ userData.alt } />
                    <Box className="mc-modal-user-upload">
                        <Input type="file" id="avatar" />
                        <Label htmlFor="avatar" className="material-icons">photo_camera</Label>
                    </Box>
                </Box>
                <Form.Group className="form-group inline mb-4">
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" defaultValue={ userData.name }/>
                </Form.Group>
                <Form.Group className="form-group inline mb-4">
                    <Form.Label>role</Form.Label>
                    <Form.Select>
                        <Option>{ userData.role }</Option>
                        {alluser.role.map((item, index)=> (
                            <Option key={ index } value={ item }>{ item }</Option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="form-group inline mb-4">
                    <Form.Label>email</Form.Label>
                    <Form.Control type="text" defaultValue={ userData.email }/>
                </Form.Group>
                <Form.Group className="form-group inline">
                    <Form.Label>number</Form.Label>
                    <Form.Control type="text" defaultValue={ userData.phone }/>
                </Form.Group>
                <Modal.Footer>
                    <Button type="button" className="btn btn-secondary" onClick={()=> setEditShow(false)}>close popup</Button>
                    <Button type="button" className="btn btn-success" onClick={()=> setEditShow(false)}>save Changes</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}