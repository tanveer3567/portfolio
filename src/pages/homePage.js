import React from "react";
import Hero from "../components/hero";
import { Container, Row, Col, Button } from "react-bootstrap";
import ExampleComponent from "react-rounded-image";
import my_photo from "../assets/images/me.jpg";
import { SocialIcon } from "react-social-icons";

function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Container fluid={false}>
        <Row>
          <Col md="auto">
            <ExampleComponent
              image={my_photo}
              roundedSize="0"
              imageWidth="350"
              imageHeight="350"
            />
            <br />
            <SocialIcon url="https://twitter.com/tanveer88658551" /> &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;
            <SocialIcon url="https://www.youtube.com/channel/UCbHZWJiPHi1NzmzE3RvXBvg?view_as=subscriber" />{" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <SocialIcon url="https://www.linkedin.com/in/tanveer3567" /> &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;
            <SocialIcon url="https://github.com/tanveer3567" /> &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;
          </Col>
          <Col>
            <Row className="text-justify"> 
              <p>
                Graduate student with a strong base of analytical reasoning and
                problem-solving skills. 2 years 10 months of experience in the
                design and development of software products and services.
                Working knowledge of web services, microservices, full-stack
                development, Data-driven software development, and agile
                methodologies. Actively looking for software engineer
                opportunities.
              </p>
              <p>
                I am highly skilled in designing, testing, and developing
                software and I have a thorough understanding of data structures
                and algorithms. I am knowledgeable of software development best
                practices and I have excellent work ethics. I enjoy solving
                difficult challenges and learning from them. Building,
                developing, deploying, and operating software products and
                services is something I am passionate about, which reflects my
                decision for applying here.
              </p>
              <p>Interested roles:</p>
            </Row>
            <Row>
              <Col>
                  <ul>
                    <li>Software Engineer</li>
                    <li>Backend Developer</li>
                    <li>Full-Stack Engineer</li>
                  </ul>
              </Col>
              <Col className="p-0">
                <Button className="p-4" variant="info" size="lg" href="https://github.com/tanveer3567/portfolio/raw/master/resume.pdf">Download my resume</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
