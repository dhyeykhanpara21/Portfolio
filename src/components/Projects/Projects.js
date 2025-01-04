import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Suchi Tracker"
              description="Aanganwadi Inventory Management System developed using PHP, CSS, SQL, and JavaScript. Features include real-time inventory tracking, user-friendly interface for staff, and efficient data management.\zzzz"
              ghLink="https://github.com/dhyeykhanpara21/Suchi_Tracker"
              demoLink="https://github.com/dhyeykhanpara21/Suchi_Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Jarvis"
              description=" My Personal Ai Assistant Which is Made Of a virtual assistant using HTML, CSS, and JavaScript for dynamic task automation. Features an interactive UI, real-time voice command processing, and a speech recognition system for seamless control."
              ghLink="https://github.com/dhyeykhanpara21/Jarvis-in-Javascript-main-main"
              demoLink="https://jarvis-black.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="@@@@@@"
              description="COMING SOON"
              ghLink="https://github.com/dhyeykhanpara21"
              demoLink="https://github.com/dhyeykhanpara21"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="@@@@@@"
              description="COMING SOON"
              ghLink="https://github.com/dhyeykhanpara21"
              demoLink="https://github.com/dhyeykhanpara21"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="@@@@@@@"
              description="COMING SOON"
              ghLink="https://github.com/dhyeykhanpara21"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="@@@@@@@"
              description="COMING SOON"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
