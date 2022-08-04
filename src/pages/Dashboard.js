import React from "react";

// data
import breadcrumb from "../data/breadcrumb.json";
import table from "../data/table.json";
import field from "../data/field.json";
import menu from "../data/menu.json";
import card from "../data/card.json"

// components
import Breadcrumb from "../components/Breadcrumb";
import Anchor from "../components/elements/Anchor";
import Item from "../components/elements/Item";
import Row from "../components/structure/Row";
import Column from "../components/structure/Column";
import HeroCard from "../components/cards/HeroCard";
import SalesCard from "../components/cards/SalesCard";
import CardLayout from "../components/cards/CardLayout";
import PieCharts from "../components/charts/PieCharts";
import BarCharts from "../components/charts/BarCharts";
import AreaCharts from "../components/charts/AreaCharts";
import ProductTable from "../components/tables/ProductTable";
import TrafficTable from "../components/tables/TrafficTable";
import Paginate from "../components/Paginate";
import CountryList from "../components/CountryList";
import SelectField from "../components/fields/SelectField";

// layouts
import PageLayout from "../layouts/PageLayout";


export default function Dashboard() {
    return (
        <PageLayout>
            <Row className="row">
                <Column className="col-xl-12">
                    <Breadcrumb title={ breadcrumb.dashboard.title } active={ breadcrumb.dashboard.active }>
                        {breadcrumb.dashboard.link.map((item, index) => (
                            <Item key={ index } className="mc-breadcrumb-item">
                                <Anchor className="mc-breadcrumb-link" href={ item.href }>{ item.text }</Anchor>
                            </Item>
                        ))}
                    </Breadcrumb>
                </Column>
                <Column className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                    <Row className="row row-cols-1 row-cols-sm-2">
                        {card.hero.map((item, index) => (
                            <Column key = { index } className="col">
                                <HeroCard 
                                    icon = { item.icon }
                                    trend = { item.trend }
                                    title = { item.title }
                                    number = { item.number }
                                    variant = { item.variant }
                                    percent = { item.percent }
                                    compare = { item.compare }
                                    dots = { menu.heroCard }
                                /> 
                            </Column>
                        ))}
                    </Row>
                </Column>
                <Column className="col-12 col-xl-4">
                    <SalesCard 
                        title = { card.sales.title } 
                        amount = { card.sales.amount } 
                        dots = { menu.salesCard }
                    >
                        <PieCharts chart={ card.sales.chart } />
                    </SalesCard>
                </Column>
                <Column className="col-12 col-xl-6">
                    <CardLayout 
                        title = { card.weeks.title } 
                        dots = { menu.CommonCard }
                    >
                        <AreaCharts chart={ card.weeks.chart } />
                    </CardLayout>
                </Column>
                <Column className="col-12 col-xl-6">
                    <CardLayout 
                        title = { card.years.title } 
                        dots = { menu.CommonCard }
                    >
                        <BarCharts chart={ card.years.chart } />
                    </CardLayout>
                </Column>
                <Column className="col-xl-12">
                    <CardLayout 
                        title = { card.popular.title } 
                        dots = { menu.CommonCard }
                    >
                        <Row className="row row-cols-1 row-cols-sm-4 row-cols-xl-4 mb-4">
                            <Column className="col">
                                <SelectField
                                    label = { field.productTable.select.category.label }
                                    option = { field.productTable.select.category.option }
                                    labelDir = "label-col"
                                    fieldSize = "w-100 h-sm"
                                />
                            </Column>
                            <Column className="col">
                                <SelectField
                                    label = { field.productTable.select.brand.label }
                                    option = { field.productTable.select.brand.option }
                                    labelDir = "label-col"
                                    fieldSize = "w-100 h-sm"
                                />
                            </Column>
                            <Column className="col">
                                <SelectField
                                    label = { field.productTable.select.rating.label }
                                    option = { field.productTable.select.rating.option }
                                    labelDir = "label-col"
                                    fieldSize = "w-100 h-sm"
                                />
                            </Column>
                            <Column className="col">
                                <SelectField
                                    label = { field.productTable.select.show.label }
                                    option = { field.productTable.select.show.option }
                                    labelDir = "label-col"
                                    fieldSize = "w-100 h-sm"
                                />
                            </Column>
                        </Row>
                        <ProductTable data={ table.product } />
                        <Paginate />
                    </CardLayout>
                </Column>
                <Column className="col-12 col-xl-8">
                    <CardLayout 
                        title = { card.traffic.title } 
                        dots = { menu.CommonCard }
                    >
                        <TrafficTable data={ table.traffic } />
                    </CardLayout>
                </Column>
                <Column className="col-12 col-xl-4">
                    <CardLayout 
                        title = { card.country.title } 
                        dots = { menu.CommonCard }
                    >
                        <CountryList data={ card.country.list } />
                    </CardLayout>
                </Column>
            </Row>
        </PageLayout>
    )
}