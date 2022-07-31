import React from "react";

export default function Option({ children, ...rest }) {
    return <option { ...rest }>{ children }</option>
}