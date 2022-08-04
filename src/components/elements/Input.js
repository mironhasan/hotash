import React from "react";

export default function Input({ type, placeholder, ...rest }) {
    return <input type={ type || "text" } placeholder={ placeholder || "placeholder..." } { ...rest } />
}