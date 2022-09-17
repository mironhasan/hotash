import React from "react";
import Logo from "../../components/Logo";
import data from "../../data/supports/overview.json";
import { Anchor, Box, Image, Heading, Section, Text } from "../../components/elements";
import { Container, Row, Col } from "react-bootstrap";

export default function Overview() {
    return (
        <Box className="mc-overview">
            <Section className="mc-overview-banner">
                <Container>
                    <Logo href="/" src={ data.banner.logo } alt="logo" name="hotash" className="lg" />
                    <Heading as="h1">{ data.banner.title }</Heading>
                    <Text>{ data.banner.descrip }</Text>
                    <Box className="tools">
                        <Heading>{ data.banner.subtitle }</Heading>
                        {data.tools.map((tool, index) => (
                            <Image key={ index } src={ tool } alt="tools" />
                        ))}
                    </Box>
                    <Anchor href="/ecommerce" icon="launch" text="explore now" className="mc-btn primary" />
                </Container>
            </Section>
            <Section className="mc-overview-demo">
                <Container fluid>
                    <Heading as="h2" className="mc-overview-title">unique demo</Heading>
                    <Row xs={1} sm={2} xl={3}>
                        {data.demos.map((demo, index) => (
                            <Col>
                                <Box key={index} className="mc-overview-card">
                                    <Box className="mc-overview-media">
                                        <Image src={demo.image} alt="demo" />
                                        <Box className="mc-overview-overlay">
                                            <Anchor href={demo.path} target="_blank" className="mc-overview-link">live preview</Anchor>
                                        </Box>
                                    </Box>
                                    <Heading className="mc-overview-name">{demo.title}</Heading>
                                </Box>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Section>
            <Section className="mc-overview-footer">
                <Heading as="h2">Do you want to inquiry about hotash template?</Heading>
                <Anchor href="/" icon="forum" text="contact us" className="mc-btn primary" />
                <Text>Hotash | © Copyrights by <Text as="span">Mironcoder</Text></Text>
            </Section>
        </Box>
    )
}