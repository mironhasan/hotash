import React from "react";
import Text from "./elements/Text";
import Image from "./elements/Image";
import { Link } from "react-router-dom";

export default function Logo({ src, alt, name, href, className }) {
    return (
        <>
            {name ?
                <Link to={ href } className={`mc-logo-group ${ className }`}>
                    <Image src={ src } alt={ alt } />
                    <Text as="span">{ name }</Text>
                </Link>
            :
                <Link to={ href } className={`mc-logo ${ className }`}>
                    <Image src={ src } alt={ alt } />
                </Link>
            }
        </>
    )
}