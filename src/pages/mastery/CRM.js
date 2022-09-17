import React from "react";
import data from "../../data/mastery/crm.json";
import { Breadcrumb } from "../../components";
import { Row, Col } from "react-bootstrap";
import PageLayout from "../../layouts/PageLayout";
import { Item, Anchor} from "../../components/elements";
import { CRMCard, DealsCard } from "../../components/cards";

export default function CRM() {
    return (
        <PageLayout>
            <Row>
                <Col xl={12}>
                    <Breadcrumb title={ data.breadcrumb.title }>
                        {data.breadcrumb.items.map((item, index) => (
                            <Item key={ index } className="mc-breadcrumb-item">
                                {item.path ? <Anchor className="mc-breadcrumb-link" href={ item.path }>{ item.text }</Anchor> : item.text }
                            </Item>
                        ))}
                    </Breadcrumb>
                </Col>
                {data.crms.map((item, index) => (
                    <Col xl={6} key={ index }>
                        <CRMCard 
                            variant={ item.variant }
                            content={ item.content }
                            status={ item.status }
                            dataKey={ item.dataKey }
                            dataSet={ item.dataSet }
                        />
                    </Col>
                ))}
                <Col xl={12}>
                    <DealsCard 
                        title={ data.deals.title }
                        dotsMenu={ data.deals.dotsMenu }
                        thead={ data.deals.table.thead }
                        tbody={ data.deals.table.tbody }
                    />
                </Col>
            </Row>
        </PageLayout>
    )
}