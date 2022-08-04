import React from "react";
import Group from "../structure/Group";
import Label from "../elements/Label";
import Input from "../elements/Input";

export default function InputField({ label, labelDir, fieldSize, type, placeholder, ...rest }) {
    return (
        <Group className={`mc-field-group ${ label ? labelDir || "label-col" : "" }`}>
            {label && <Label className="mc-field-label">{ label }</Label>}
            <Input 
                type = { type || "text" } 
                placeholder = { placeholder || "placeholder..." } 
                className = {`mc-field-input ${ fieldSize || "w-md h-sm" }`} 
                { ...rest } 
            />
        </Group>
    );
}