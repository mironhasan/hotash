import React from "react";
import Group from "../structure/Group";
import Label from "../elements/Label";
import Select from "../elements/Select";
import Option from "../elements/Option";

export default function SelectField({ label, option, labelDir, fieldSize }) {
    return (
        <Group className={`mc-field-group ${ labelDir ? labelDir : "" }`}>
            {label && <Label className="mc-field-label">{ label }</Label>}
            <Select className={`mc-field-select ${ fieldSize }`}>
                {option.map((item, index) => (
                    <Option key={ index } value={ item }>{ item}</Option>
                ))}
            </Select>
        </Group>
    );
}