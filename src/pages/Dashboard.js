// packages
import React from "react";
import { Row, Col } from "react-bootstrap";
import PageLayout from "../layouts/PageLayout";
import Breadcrumb from "../components/Breadcrumb";
import HeroCard from "../components/cards/HeroCard";
import SalesCard from "../components/cards/SalesCard";
import CardLayout from "../components/cards/CardLayout";
import PieCharts from "../components/charts/PieCharts";
import BarCharts from "../components/charts/BarCharts";
import AreaCharts from "../components/charts/AreaCharts";
import ProductTable from "../components/tables/ProductTable";
import TrafficTable from "../components/tables/TrafficTable";
import Pagination from "../components/Pagination";
import CountryList from "../components/CountryList";
import LabelField from "../components/fields/LabelField";
import Item from "../components/elements/Item";
import Anchor from "../components/elements/Anchor";
import dashboard from "../data/dashboard.json";

export default function Dashboard() {
    return (
        <PageLayout>
            <Row>
                <Col xl={12}>
                    <Breadcrumb title={ dashboard.pageTitle }>
                        {dashboard.breadcrumb.map((item, index) => (
                             <Item key={ index } className="mc-breadcrumb-item">
                                {item.path ? <Anchor className="mc-breadcrumb-link" href={ item.path }>{ item.text }</Anchor> : item.text }
                            </Item>
                        ))}
                    </Breadcrumb>
                </Col>
                <Col xs={12} xl={8}>
                    <Row xs={1} sm={2}>
                        {dashboard.heroCard.map((item, index) => (
                            <Col key={ index }>
                                <HeroCard 
                                    icon = { item.icon }
                                    trend = { item.trend }
                                    title = { item.title }
                                    number = { item.number }
                                    variant = { item.variant }
                                    percent = { item.percent }
                                    compare = { item.compare }
                                    dotsMenu = { item.dotsMenu }
                                /> 
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xs={12} xl={4}>
                    <SalesCard 
                        title = { dashboard.salesCard.title } 
                        amount = { dashboard.salesCard.amount } 
                        dotsMenu = { dashboard.dotsMenu }
                    >
                        <PieCharts chart={ dashboard.salesCard.chart } />
                    </SalesCard>
                </Col>
                <Col xs={12} xl={6}>
                    <CardLayout 
                        title = { dashboard.weeksCard.title } 
                        dotsMenu = { dashboard.dotsMenu }
                    >
                        <AreaCharts chart={ dashboard.weeksCard.chart } />
                    </CardLayout>
                </Col>
                <Col xs={12} xl={6}>
                    <CardLayout 
                        title = { dashboard.yearsCard.title } 
                        dotsMenu = { dashboard.dotsMenu }
                    >
                        <BarCharts chart={ dashboard.yearsCard.chart } />
                    </CardLayout>
                </Col>
                <Col xl={12}>
                    <CardLayout 
                        title = { dashboard.productCard.title } 
                        dotsMenu = { dashboard.dotsMenu }
                    >
                        <Row xs={1} sm={4} className="mb-4">
                            {dashboard.productCard.filter.map((item, index)=> (
                                <Col key={ index }>
                                    <LabelField
                                        label = { item.label }
                                        option = { item.option }
                                        labelDir = "label-col"
                                        fieldSize = "w-100 h-sm"
                                    />
                                </Col>
                            ))}
                        </Row>
                        <ProductTable 
                            thead = { dashboard.productCard.thead } 
                            tbody = { dashboard.productCard.tbody }
                        />
                        <Pagination />
                    </CardLayout>
                </Col>
                <Col xs={12} xl={8}>
                    <CardLayout 
                        title = { dashboard.trafficCard.title } 
                        dotsMenu = { dashboard.dotsMenu }
                    >
                        <TrafficTable 
                            thead = { dashboard.trafficCard.thead } 
                            tbody = { dashboard.trafficCard.tbody }
                        />
                    </CardLayout>
                </Col>
                <Col xs={12} xl={4}>
                    <CardLayout 
                        title = { dashboard.countryCard.title } 
                        dotsMenu = { dashboard.dotsMenu }
                    >
                        <CountryList data={ dashboard.countryCard.country } />
                    </CardLayout>
                </Col>
            </Row>
        </PageLayout>
    );
}
