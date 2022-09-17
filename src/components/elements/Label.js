import React from "react";

export default function Label({ text, children, className }) {
    return <label className={ className }>{ text } { children }</label>
}