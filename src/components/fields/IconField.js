import React from "react";
import Box from "../elements/Box";
import Input from "../elements/Input";
import Select from "../elements/Select";
import Option from "../elements/Option";
import Icon from "../elements/Icon";
import Button from "../elements/Button";

export default function IconField({ fieldSize, icon, option, type, placeholder, passwordVisible, ...rest }) {
    const [visible, setVisible] = React.useState(false);
    
    return (
        <Box className={`mc-icon-field ${ fieldSize || "w-md h-sm" }`}>
            <Icon type={ icon } />
            {type ?
                <>
                    <Input 
                        type={ visible ? "text" : type || "text" }  
                        placeholder={ placeholder } 
                        { ...rest } 
                    />
                    {passwordVisible && 
                        <Button 
                            type = "button"
                            className = "material-icons"
                            onClick = {()=> setVisible(!visible)}
                        >
                            { visible ? "visibility_off" : "visibility" }
                        </Button>
                    }
                </>
                :
                <Select>
                    {option.map((item, index) => (
                        <Option key={ index } value={ item }>{ item}</Option>
                    ))}
                </Select>
            }
       </Box>
    )
}