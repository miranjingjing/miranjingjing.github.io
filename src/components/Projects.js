import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import website from "../assets/img/website.jpg";
import settlers from "../assets/img/settlers-of-catan-board.jpg";

export const Projects = () => {

  const projects = [
    // {
    //   title: "Food Recommendation App",
    //   description: "Description 1",
    //   imgUrl: projImg1,
    // },
    {
      title: "The Settlers of Catan",
      description: "Description 3",
      imgUrl: settlers,
    },
    {
      title: "Personal Website",
      description: "Description 2",
      imgUrl: website,
    },
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p></p>
            <Row>
              {
                projects.map((project, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...project}
                    />
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}