import React from "react";
import { Row, Col } from "react-bootstrap";
import { List, Item, Icon, Text, Box, Image, Heading, Anchor } from "../../components/elements";
import { Breadcrumb, RoundAvatar, DivideTitle, DuelText } from "../../components";
import { CardLayout, CardHeader, FloatCard } from "../../components/cards";
import PageLayout from "../../layouts/PageLayout";
import data from "../../data/master/userProfile.json";

export default function UserProfile() {
    return (
        <PageLayout>
            <Row>
                <Col xl={12}>
                    <CardLayout>
                        <Breadcrumb title="user profile">
                            {data.breadcrumb.map((item, index) => (
                                <Item key={ index } className="mc-breadcrumb-item">
                                    {item.path ? <Anchor className="mc-breadcrumb-link" href={ item.path }>{ item.text }</Anchor> : item.text }
                                </Item>
                            ))}
                        </Breadcrumb>
                    </CardLayout>
                </Col>
                <Col xl={5}>
                    <CardLayout>
                        <CardHeader title="user information" dotsMenu={ data.dotsMenu } />
                        <Box className="mc-user-group">
                            <Box className="mc-user-profile">
                                <RoundAvatar 
                                    src={ data.profile.src } 
                                    alt={ data.profile.alt } 
                                    size={ data.profile.size } 
                                />
                                <DuelText 
                                    title={ data.profile.fullname }
                                    descrip={ data.profile.username } 
                                    size={ data.profile.size }
                                />
                            </Box>
                            <Box className="mb-4">
                                <DivideTitle title="communication" className="mb-4" />
                                <List className="mc-user-metalist">
                                    {data.contact.map((item, index)=> (
                                        <Item key={ index }>
                                            <Icon>{ item.icon }</Icon>
                                            <Text as="span">{ item.text }</Text>
                                        </Item>
                                    ))}
                                </List>
                            </Box>
                            <Box className="mb-4">
                                <DivideTitle title={ data.bio.title } className="mb-3" />
                                <Text className="mc-user-bio mb-4">{ data.bio.descrip }</Text>
                            </Box>
                            <Box>
                                <DivideTitle title="elsewhere" className="mb-4" />
                                <Box className="mc-user-social">
                                    {data.social.map((item, index)=> (
                                        <Anchor 
                                            key = { index } 
                                            href = { item.path }
                                            text = { item.type }
                                            iconClass = { item.icon }
                                            className = { item.type }
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </CardLayout>
                </Col>
                <Col xl={7}>
                    <Row>
                        {data.float.map((item, index) => (
                            <Col xl={4} key={ index }>
                                <FloatCard 
                                    variant={ item.variant }
                                    digit={ item.digit }
                                    title={ item.title }
                                    icon={ item.icon }
                                />
                            </Col>
                        ))}
                        <Col xl={12}>
                            <CardLayout>
                                <CardHeader title="activity timeline" dotsMenu={ data.dotsMenu } />
                                <List className="mc-user-activity-list">
                                    {data.activity.map((item, index)=> (
                                        <Item key={ index } className="mc-user-activity-item">
                                            <Box className="mc-user-activity-title">
                                                <DivideTitle as="h6" title={ item.title } />
                                                <Text as="small">{ item.time }</Text>
                                            </Box>
                                            <Box className="mc-user-activity-body">
                                                <Text>{ item.text }</Text>
                                                <Box className="mc-user-activity-media">
                                                    <Image src={ item.src } alt={ item.alt } />
                                                    <Heading as="h6">{ item.name }</Heading>
                                                </Box>
                                                { item.button && <Anchor href={ item.button.path } className="mc-btn sm">{ item.button.label }</Anchor> }
                                            </Box>
                                        </Item>
                                    ))}
                                </List>
                            </CardLayout>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </PageLayout>
    )
}