import React from "react";

export default function Image({ src, alt, ...rest }) {
    return <img src={ src } alt={ alt } { ...rest } />
}