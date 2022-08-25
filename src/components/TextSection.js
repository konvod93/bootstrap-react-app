import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import tree from "../img/tree.jpg";

const TextSection = () => {
    return (
        <>            
            <Container>
                <Row style={{paddingTop: 20, paddingBottom: 20}}>
                    <Col md={7}>
                        <img src={tree} height={400} />
                    </Col>
                    <Col md={5}>
                    <h2>Web Developer Blog</h2>
                        <p>Cillum incididunt aliquip Lorem ea aute incididunt pariatur et sunt qui cillum cupidatat. Consequat consequat sunt veniam ex duis ex irure. Elit ut sint aliquip duis excepteur ipsum enim pariatur quis elit non.</p>
                        <p>Cillum incididunt aliquip Lorem ea aute incididunt pariatur et sunt qui cillum cupidatat. Consequat consequat sunt veniam ex duis ex irure. Elit ut sint aliquip duis excepteur ipsum enim pariatur quis elit non.</p>
                        <p>Cillum incididunt aliquip Lorem ea aute incididunt pariatur et sunt qui cillum cupidatat. Consequat consequat sunt veniam ex duis ex irure. Elit ut sint aliquip duis excepteur ipsum enim pariatur quis elit non.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TextSection;