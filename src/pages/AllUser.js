import React from "react";
import { Row, Col } from "react-bootstrap";
import PageLayout from "../layouts/PageLayout";
import LabelField from "../components/fields/LabelField";
import CardLayout from "../components/cards/CardLayout";
import UserTable from "../components/tables/UserTable";
import Anchor from "../components/elements/Anchor";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import Item from "../components/elements/Item";
import alluser from "../data/alluser.json";

export default function AllUser() {
    return (
        <>
            <PageLayout>
                <Row>
                    <Col xl={12}>
                        <Breadcrumb title={ alluser.pageTitle }>
                            {alluser.breadcrumb.map((item, index) => (
                                <Item key={ index } className="mc-breadcrumb-item">
                                    {item.path ? <Anchor className="mc-breadcrumb-link" href={ item.path }>{ item.text }</Anchor> : item.text }
                                </Item>
                            ))}
                        </Breadcrumb>
                    </Col>
                    <Col xl={12}>
                        <CardLayout title={ alluser.cardTitle } dotsMenu={ alluser.dotsMenu }>
                            <Row xs={1} sm={4} className="mb-4">
                                {alluser.filter.map((item, index)=> (
                                    <Col key={index}>
                                        <LabelField 
                                            type = { item.type }
                                            label = { item.label }
                                            option = { item.option }
                                            placeholder = { item.placeholder }
                                            labelDir = "label-col"
                                            fieldSize = "w-100 h-sm"
                                        /> 
                                     </Col>
                                ))}
                            </Row>
                            <UserTable 
                                thead = { alluser.table.thead }
                                tbody = { alluser.table.tbody }
                            />
                            <Pagination />
                        </CardLayout>
                    </Col>
                </Row>
            </PageLayout>
        </>
    );
}