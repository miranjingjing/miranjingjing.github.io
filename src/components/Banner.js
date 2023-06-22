import { Container, Row, Col } from "react-bootstrap";
import miranda from "../assets/img/miranda.png";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Website!</span>
                        <h1>{`Miranda Guo`}</h1>
                        <p1></p1>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={miranda} width={50} height={50} alt="Miranda"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}