import React from "react";
import { Form, Button, Input } from "../elements";

export default function Search({ icon, type, placeholder }) {
    return (
        <Form className="mc-header-search">
            <Button className="material-icons">{ icon }</Button>
            <Input type={ type } placeholder={ placeholder } />
        </Form>
    )
}