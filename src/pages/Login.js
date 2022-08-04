import React from "react";
import Box from "../components/structure/Box";
import Form from "../components/elements/Form";
import Group from "../components/structure/Group";
import Heading from "../components/elements/Heading";
import IconInput from "../components/fields/IconInput";
import Button from "../components/elements/Button";
import Anchor from "../components/elements/Anchor";
import Image from "../components/elements/Image";
import Text from "../components/elements/Text";

// json data
import logo from "../data/logo.json";
import login from "../data/login.json";

export default function Login() {
    return (
        <Box className="mc-auth">
            <Anchor className="mc-auth-logo" href={logo.href}><Image src={logo.src} alt={logo.alt}/></Anchor>
            <Heading as="h4" className="mc-auth-title">{ login.title }</Heading>
            <Form className="mc-auth-form">
                {login.input.map((item, index) => (
                    <IconInput 
                        key = { index }
                        icon = { item.icon }
                        type = { item.type }
                        fieldSize = { item.fieldSize }
                        placeholder = { item.placeholder }
                        passwordVisible = { item.passwordVisible }
                    />
                ))}
                <Button className="mc-auth-btn" type={ login.button.type }>{ login.button.text }</Button>
                <Anchor className="mc-auth-forgot" href={ login.forgot.path }>{ login.forgot.text }</Anchor>
                <Box className="mc-auth-divide"><Text as="span">{ login.divide.text }</Text></Box>
                <Group className="mc-auth-connect">
                    {login.connect.map((item, index) => (
                        <Anchor key={ index } href={ item.path } className={ item.variant }>
                            <i className={ item.icon }></i>
                            <span>{ item.text }</span>
                        </Anchor>
                    ))}
                </Group>
            </Form>
            <Box className="mc-auth-navigate">
                <Text as="span">{ login.navigate.title }</Text>
                <Anchor href={ login.navigate.path }>{ login.navigate.text }</Anchor>
            </Box>
        </Box>
    );
}