import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import PROJECT_DATA from "./project.data";

const projects = PROJECT_DATA;

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            projects.map((p, i) => (
              <Col md={4} className="project-card" key={i}>
                <ProjectCard
                  imgPath={p.imgPath}
                  isBlog={false}
                  title={p.name}
                  description={p.description}
                  demoLink={p.demoLink}
                  tandTs={p.tandTs}
                  timeLine={p.timeLine}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
