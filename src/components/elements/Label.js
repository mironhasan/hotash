import React from "react";

export default function Label({ text, children, ...rest }) {
    return <label { ...rest }>{ text } { children }</label>
}