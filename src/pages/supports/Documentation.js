import React from "react";
import { Breadcrumb, DivideTitle } from "../../components";
import { Box, Item, Anchor, Image } from "../../components/elements";
import PageLayout from "../../layouts/PageLayout";
import data from "../../data/supports/docs.json";

export default function Documentation() {
    return (
        <PageLayout>
            <Box className="mc-card">
                <Breadcrumb title={ data.pageTitle } className="mb-4">
                    {data.breadcrumb.map((item, index) => (
                        <Item key={ index } className="mc-breadcrumb-item">
                            {item.path ? <Anchor className="mc-breadcrumb-link" href={ item.path }>{ item.text }</Anchor> : item.text }
                        </Item>
                    ))}
                </Breadcrumb>
                {data.docs.map((item, index) => (
                    <Box key={ index } className="mc-docs">
                        <DivideTitle as="h3" title={ item.heading } />
                        <p dangerouslySetInnerHTML={{ __html: item.describe }} />
                        {item.images ?
                            item.images.map((image, index) => (
                                <Image 
                                    key={ index } 
                                    src={ image } 
                                    alt="screenshot" 
                                />
                            ))
                        : ""}
                    </Box>
                ))}
            </Box>
        </PageLayout>
    )
}