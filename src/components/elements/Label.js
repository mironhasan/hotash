import React from "react";

export default function Label({ children, ...rest }) {
    return <label { ...rest }>{ children }</label>
}