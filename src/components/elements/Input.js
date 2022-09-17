import React from "react";

export default function Input({ type, placeholder, className }) {
    return <input type={ type || "text" } placeholder={ placeholder } className={ className } />
}