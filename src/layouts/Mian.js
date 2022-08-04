import React from "react";
import Box from "../components/structure/Box";

export default function Main({ drawer, children }) {
    return <Box as="main" className={`mc-main ${ drawer }`}>{ children }</Box>
}