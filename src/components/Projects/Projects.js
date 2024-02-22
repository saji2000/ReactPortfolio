import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather-images.jpg";
import uevents from "../../Assets/Projects/UEvents.png";
import chatapp from "../../Assets/Projects/chat-app.png";
import maple from "../../Assets/Projects/maple-logo.png";
import social from "../../Assets/Projects/logo.png";
import osm from "../../Assets/Projects/OSM.png";

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
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="City Weather Dashboard is a React.js app providing real-time global weather updates using GeoDB Cities and OpenWeather APIs deployed on AWS S3, perfect for timely info on multiple locations."
              ghLink="https://github.com/saji2000/weather-app"
              demoLink="http://sajad-portfolio.s3-website.us-east-2.amazonaws.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maple}
              isBlog={false}
              title="Maple"
              description="A complex dating mobile application based on psychological compatibility of users which uses Node.js, MySQL, Firebase for the back-end and Flutter for front-end, published on both iOS and Android."
              ghLink="https://github.com/saji2000"
              demoLink="https://maple.dating"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uevents}
              isBlog={false}
              title="UEvents"
              description="An event planning tool for University of Alberta students and groups developed using Node.js, Express.js, DynamoDB, EC2, S3 for the back-end and React.js and Material UI for front-end."
              ghLink="https://github.com/ECE493-Group11-UEvents/UEvents-API"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Social Network"
              description="Social networking application created by React.js and MUI (Material UI), has features such as navigation bar, side bars, feed, posts, dark theme and etc."
              ghLink="https://github.com/saji2000/social-network"
              demoLink="http://sajad-social-network.s3-website.us-east-2.amazonaws.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Chat Application"
              description="A full-stack react.js/node.js application made using Express.js and chatengine.io hosted on AWS EC2 virtual machine."
              ghLink="https://github.com/saji2000/chat-app"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={osm}
              isBlog={false}
              title="Edmonton OSM"
              description="A SQLite3 database using Python to extract Edmonton's OpenStreetMap data, incorporate tables, keys, queries, triggers, and indices in the database. Focused on extracting specific details like restaurant names, park accessibility, and locations."
              ghLink="https://github.com/saji2000/Edmonton-OSM-cmput391"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
