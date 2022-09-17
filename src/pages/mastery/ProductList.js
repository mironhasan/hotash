import React from "react";
import { Row, Col } from "react-bootstrap";
import { CardLayout, FloatCard } from "../../components/cards";
import ProductsTable from "../../components/tables/ProductsTable";
import LabelField from "../../components/fields/LabelField";
import Anchor from "../../components/elements/Anchor";
import Breadcrumb from "../../components/Breadcrumb";
import PageLayout from "../../layouts/PageLayout";
import data from "../../data/mastery/productList.json";

export default function ProductList() {
    return (
        <PageLayout>
            <Row>
                <Col xl={12}>
                    <CardLayout>
                        <Breadcrumb title={ data.pageTitle }>
                            {data.breadcrumb.map((item, index) => (
                                <li key={ index } className="mc-breadcrumb-item">
                                    {item.path ? <Anchor className="mc-breadcrumb-link" href={ item.path }>{ item.text }</Anchor> : item.text }
                                </li>
                            ))}
                        </Breadcrumb>
                    </CardLayout>
                </Col>
                {data.float.map((item, index) => (
                    <Col key={ index } xl={4}>
                        <FloatCard 
                            variant = { item.variant }
                            digit = { item.digit }
                            title = { item.title }
                            icon = { item.icon }
                        />
                    </Col>
                ))}
                <Col xl={12}>
                    <CardLayout>
                        <Row>
                            {data.product.filter.map((item, index)=> (
                                <Col xs={1} sm={3} key={ index }>
                                    <LabelField
                                        type = { item.type }
                                        label = { item.label }
                                        option = { item.option }
                                        placeholder = { item.placeholder }
                                        labelDir = "label-col"
                                        fieldSize = "w-100 h-md"
                                    />
                                </Col>
                            ))}
                            <Col xl={12}>
                                <ProductsTable 
                                    thead = { data.product.thead } 
                                    tbody = { data.product.tbody } 
                                />
                            </Col>
                        </Row>
                    </CardLayout>
                </Col>
            </Row>
        </PageLayout>
    );
}