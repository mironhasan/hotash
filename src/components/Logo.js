import React from "react";
import Text from "./elements/Text";
import Image from "./elements/Image";
import { Link } from "react-router-dom";

export default function Logo({ data }) {
    return (
        <Link to={ data.href } className="mc-logo">
            <Image src={ data.src } alt={ data.alt } />
            { data.name && <Text as="span">{ data.name }</Text> }
        </Link>
    )
}