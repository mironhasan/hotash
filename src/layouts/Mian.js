import React from "react";
import Box from "../components/structure/Box";

export default function Main({ drawerClass, children }) {
    return <Box as="main" className={`mc-main ${ drawerClass }`}>{ children }</Box>
}