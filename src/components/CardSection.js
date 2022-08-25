import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ocean1 from "../img/ocean1.jpg";
import ocean2 from "../img/ocean2.jpg";
import ocean3 from "../img/ocean3.jpg";


const CardSection = () => {
    return (
        <>
            <Container fluid style={{ paddingTop: '2rem', paddingBottom: '2rem', backgroundColor: "#212121"}}>
                <Row>
                    <Col>
                        <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ocean1} />
                            <Card.Body>
                                <Card.Title>
                                    WebDev Blog
                                </Card.Title>
                                <Card.Text>
                                    Et fugiat dolore amet ad laborum ex anim cillum laboris
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ocean2} />
                            <Card.Body>
                                <Card.Title>
                                    WebDev Blog
                                </Card.Title>
                                <Card.Text>
                                    Et fugiat dolore amet ad laborum ex anim cillum laboris
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ocean3} />
                            <Card.Body>
                                <Card.Title>
                                    WebDev Blog
                                </Card.Title>
                                <Card.Text>
                                    Et fugiat dolore amet ad laborum ex anim cillum laboris
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default CardSection;