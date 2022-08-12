import React from "react";
import Logo from "../components/Logo";
import Box from "../components/elements/Box";
import Text from "../components/elements/Text";
import Form from "../components/elements/Form";
import Image from "../components/elements/Image";
import Button from "../components/elements/Button";
import Anchor from "../components/elements/Anchor";
import Heading from "../components/elements/Heading";
import IconField from "../components/fields/IconField";
import Input from "../components/elements/Input";
import Label from "../components/elements/Label";
import register from "../data/register.json";

export default function Register() {
    return (
        <Box className="mc-register">
            <Box className="mc-register-banner">
                <Image className="mc-register-banner-pattern" src={ register.pattern.src } alt={ register.pattern.alt } />
                <Box className="mc-register-banner-content">
                    <Heading as="h2" className="mc-register-banner-title">{ register.title.banner }</Heading>
                    <Text as="p" className="mc-register-banner-descrip">{ register.descrip }</Text>
                    <Anchor 
                        icon = { register.anchor.icon } 
                        text = { register.anchor.text } 
                        href = { register.anchor.path }
                        className = "mc-btn" 
                    />
                </Box>
            </Box>
            <Form className="mc-register-form">
                <Logo 
                    src = { register.logo.src } 
                    alt = { register.logo.alt } 
                    href = { register.logo.path } 
                    className = "mc-auth-logo"
                />
                <Heading as="h4" className="mc-auth-title">{ register.title.from }</Heading>
                {register.input.map((item, index) => (
                    <IconField 
                        key = { index }
                        icon = { item.icon }
                        type = { item.type }
                        fieldSize = { item.fieldSize }
                        placeholder = { item.placeholder }
                        passwordVisible = { item.passwordVisible }
                    />
                ))}
                
                <Box className="mc-auth-checkbox">
                    <Input type="checkbox" id="checkbox" />
                    <Label text={ register.checkLabel } htmlFor="checkbox" />
                </Box>
                <Button className={`mc-auth-btn ${register.button.fieldSize}`} type={ register.button.type }>{ register.button.text }</Button>
                <Box className="mc-auth-divide"><Text as="span">{ register.divide.text }</Text></Box>
                <Box className="mc-auth-connect">
                    {register.connect.map((item, index) => (
                        <Anchor key={ index } href={ item.path } className={ item.classes }>
                            <i className={ item.icon }></i>
                            <span>{ item.text }</span>
                        </Anchor>
                    ))}
                </Box>
                <Box className="mc-register-navigate">
                    <Text as="span">{ register.navigate.title }</Text>
                    <Anchor href={ register.navigate.path }>{ register.navigate.text }</Anchor>
                </Box>
            </Form>
        </Box>
    )
}