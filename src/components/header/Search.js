import React from "react";
import Form from "../elements/Form";
import Button from "../elements/Button";
import Input from "../elements/Input";

export default function Search({ icon, type, placeholder }) {
    return (
        <Form className="mc-header-search">
            <Button className="material-icons">{ icon }</Button>
            <Input type={ type } placeholder={ placeholder } />
        </Form>
    )
}