import React from "react";
import Box from "../components/elements/Box";
import Form from "../components/elements/Form";
import Heading from "../components/elements/Heading";
import IconField from "../components/fields/IconField";
import Button from "../components/elements/Button";
import Anchor from "../components/elements/Anchor";
import Image from "../components/elements/Image";
import Text from "../components/elements/Text";
import Logo from "../components/Logo";
import forgot from "../data/forgot.json";

export default function ForgotPassword() {
    return (
        <Box className="mc-auth">
            <Image className="mc-auth-pattern" src={ forgot.pattern.src } alt={ forgot.pattern.alt } />
            <Box className="mc-auth-group">
                <Logo 
                    src = { forgot.logo.src }
                    alt = { forgot.logo.alt }
                    href = { forgot.logo.path }
                    className = "mc-auth-logo"
                />
                <Heading as="h4" className="mc-auth-title">{ forgot.title }</Heading>
                <Form className="mc-auth-form">
                    {forgot.input.map((item, index) => (
                        <IconField 
                            key = { index }
                            icon = { item.icon }
                            type = { item.type }
                            fieldSize = { item.fieldSize }
                            placeholder = { item.placeholder }
                            passwordVisible = { item.passwordVisible }
                        />
                    ))}
                    <Button className={`mc-auth-btn ${forgot.button.fieldSize}`} type={ forgot.button.type }>{ forgot.button.text }</Button>
                </Form>
                <Box className="mc-auth-navigate">
                    <Text as="span">{ forgot.navigate.title }</Text>
                    <Anchor href={ forgot.navigate.path }>{ forgot.navigate.text }</Anchor>
                </Box>
            </Box>
        </Box>
    );
}