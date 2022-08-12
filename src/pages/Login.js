// packages
import React from "react";
import Box from "../components/elements/Box";
import Form from "../components/elements/Form";
import Heading from "../components/elements/Heading";
import IconField from "../components/fields/IconField";
import Button from "../components/elements/Button";
import Anchor from "../components/elements/Anchor";
import Image from "../components/elements/Image";
import Text from "../components/elements/Text";
import login from "../data/login.json";
import Logo from "../components/Logo";

export default function Login() {
    return (
        <Box className="mc-auth">
            <Image className="mc-auth-pattern" src={ login.pattern.src } alt={ login.pattern.alt } />
            <Box className="mc-auth-group">
                <Logo 
                    src = { login.logo.src }
                    alt = { login.logo.alt }
                    href = { login.logo.path }
                    className = "mc-auth-logo"
                />
                <Heading as="h4" className="mc-auth-title">{ login.title }</Heading>
                <Form className="mc-auth-form">
                    {login.input.map((item, index) => (
                        <IconField 
                            key = { index }
                            icon = { item.icon }
                            type = { item.type }
                            option = { item.option }
                            fieldSize = { item.fieldSize }
                            placeholder = { item.placeholder }
                            passwordVisible = { item.passwordVisible }
                        />
                    ))}
                    <Button className={`mc-auth-btn ${login.button.fieldSize}`} type={ login.button.type }>{ login.button.text }</Button>
                    <Anchor className="mc-auth-forgot" href={ login.forgot.path }>{ login.forgot.text }</Anchor>
                    <Box className="mc-auth-divide"><Text as="span">{ login.divide.text }</Text></Box>
                    <Box className="mc-auth-connect">
                        {login.connect.map((item, index) => (
                            <Anchor key={ index } href={ item.path } className={ item.classes }>
                                <i className={ item.icon }></i>
                                <span>{ item.text }</span>
                            </Anchor>
                        ))}
                    </Box>
                </Form>
                <Box className="mc-auth-navigate">
                    <Text as="span">{ login.navigate.title }</Text>
                    <Anchor href={ login.navigate.path }>{ login.navigate.text }</Anchor>
                </Box>
            </Box>
        </Box>
    );
}