import React from "react";

export default function Select({ children, ...rest }) {
    return <select { ...rest }>{ children }</select>
}