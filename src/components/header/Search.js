import React from "react";
import Form from "../elements/Form";
import Button from "../elements/Button";
import Input from "../elements/Input";

export default function Search({ data }) {
    return (
        <Form className="mc-header-search">
            <Button className="material-icons">search</Button>
            <Input 
                type = { data.type } 
                placeholder = { data.place } 
            />
        </Form>
    )
}