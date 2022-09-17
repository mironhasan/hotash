import React from "react";

export default function Select({ children, className }) {
    return <select className={ className }>{ children }</select>
}