import { Row, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Row>
      <Col sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
        </div>
      </Col>
      <Col>
        <div className="proj-txt">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </Col>
    </Row>
  )
}