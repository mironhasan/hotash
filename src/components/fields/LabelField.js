import React from "react";
import Box from "../elements/Box";
import Input from "../elements/Input";
import Label from "../elements/Label";
import Select from "../elements/Select";
import Option from "../elements/Option";

export default function LabelField({ label, labelDir, fieldSize, option, type, placeholder, ...rest }) {
    return (
        <Box className={`mc-label-field-group ${ label ? labelDir || "label-col" : "" }`}>
            {label && <Label className="mc-label-field-title">{ label }</Label>}
            {type ? 
                <Input 
                    type = { type || "text" } 
                    placeholder = { placeholder } 
                    className = {`mc-label-field-input ${ fieldSize || "w-md h-sm" }`} 
                    { ...rest } 
                />
                :
                <Select className={`mc-label-field-select ${ fieldSize || "w-md h-sm" }`}>
                    {option.map((item, index) => (
                        <Option key={ index } value={ item }>{ item}</Option>
                    ))}
                </Select>
            }
        </Box>
    )
}