import React from "react";

export default function Table({ children, ...rest }) {
    return <table { ...rest }>{ children }</table>
}