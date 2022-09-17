import React from "react";
import PageLayout from "../../layouts/PageLayout";
import { Box, Image } from "../../components/elements";

export default function BlankPage() {
    return (
        <PageLayout>
            <Box className="mc-card mc-blank">
                <Image src="images/blank.jpg" alt="blank" />
            </Box>
        </PageLayout>
    )
}