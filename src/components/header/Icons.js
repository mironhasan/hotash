import React from "react";
import Button from "../elements/Button";

export default function Icons({ data }) {
    return (
        <>
            {data.map((item, index) => (
                <Button 
                    key = { index } 
                    icon = { item.icon }
                    title = { item.title }
                    badge = { item.badge }
                    className = "mc-header-icon"
                />
            ))}
        </>
    )
}