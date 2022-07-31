import React from "react";
import Group from "../structure/Group";
import Label from "../elements/Label";
import Input from "../elements/Input";

export default function InputField({ label, labelDir, fieldSize, type, place, ...rest }) {
    return (
        <Group className={`mc-field-group ${ labelDir ? labelDir : "" }`}>
            {label && <Label className="mc-field-label">{ label }</Label>}
            <Input 
                type = { type } 
                placeholder = { place } 
                className = {`mc-field-input ${ fieldSize }`} 
                { ...rest } 
            />
        </Group>
    );
}