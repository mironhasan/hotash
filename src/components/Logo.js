import React from "react";
import Text from "./elements/Text";
import Image from "./elements/Image";
import { Link } from "react-router-dom";

export default function Logo({ src, alt, name, href }) {
    return (
        <Link to={ href } className="mc-logo">
            <Image src={ src } alt={ alt } />
            { name && <Text as="span">{ name }</Text> }
        </Link>
    )
}