import React from "react";
import { Box } from "../elements";
import CardHeader from "./CardHeader";
import Pagination from "../Pagination";
import { DealsTable } from "../tables";

export default function DealsCard({ title, dotsMenu, thead, tbody }) {
    return (
        <Box className="mc-card">
            <CardHeader title={ title } dotsMenu={ dotsMenu }  />
            <DealsTable thead={ thead } tbody={ tbody } />
            <Pagination />
        </Box>
    )
}