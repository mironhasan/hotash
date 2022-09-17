import React from "react";
import Box from "../elements/Box";
import CardHeader from "./CardHeader";
import Pagination from "../Pagination";
import ProductsTable from "../tables/ProductsTable";

export default function ProductsCard({ title, dotsMenu, table }) {
    return (
        <Box className="mc-card">
            <CardHeader title={ title } dotsMenu={ dotsMenu } />
            <ProductsTable thead={ table.thead } tbody={ table.tbody } />
            <Pagination />
        </Box>
    )
}