import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Hobbies = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    }
  };

  return (
    <section className="hobby" id="hobbies">
      <Container>
        <Row>
          <Col>
          <div className="hobby-bx">
            <h2>Hobbies</h2>
            <p></p>
            <Carousel responsive={responsive} infinite={true} className="hobby-slider">
              <div className="item">
                <h5>Badminton</h5>
              </div>
              <div className="item">
                <h5>Volleyball</h5>
              </div>
              <div className="item">
                <h5>Chess</h5>
              </div>
              <div className="item">
                <h5>Rock Climbing</h5>
              </div>
              <div className="item">
                <h5>Reading</h5>
              </div>
              <div className="item">
                <h5>Cooking</h5>
              </div>
            </Carousel>
            </div></Col>
        </Row>
      </Container>
    </section>
  )
}
