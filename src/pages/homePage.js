import React from 'react';
import Hero from '../components/hero';
import {Container, Row, Col} from 'react-bootstrap';
import ExampleComponent from "react-rounded-image";
import my_photo from "../assets/images/me.jpg"
import { SocialIcon } from 'react-social-icons';


function HomePage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Container fluid={false}>
                <Row>
                    <Col md="auto">
                        <ExampleComponent image={my_photo} roundedSize="0" imageWidth="350" imageHeight="350"/>
                        <br />
                        <SocialIcon url="http://twitter.com" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <SocialIcon url="http://youtube.com/jaketrent" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <SocialIcon url="http://github.com/jaketrent" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <SocialIcon url="http://linkedin.com/jaketrent" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </Col>
                    <Col className="text-justify">
                        <p>
                            Graduate student with a strong base of analytical reasoning and problem-solving skills. 2 years 10 months of experience in the design and development of software products and services. Working knowledge of web services, microservices, full-stack development, AI-driven software development, and agile methodologies. Actively looking for software engineer opportunities.
                        </p>
                        <p>
                        I am highly skilled in designing, testing, and developing software and I have a thorough understanding of data structures and algorithms. I am knowledgeable of software development best practices and I have excellent work ethics. I enjoy solving difficult challenges and learning from them. Building, developing, deploying, and operating software products and services is something I am passionate about, which reflects my decision for applying here.
                        </p>
                        <p>
                            Interested roles:
                            <p></p>
                            <ul>
                                <li>
                                    Software Engineer
                                </li>
                                <li>
                                    Backend Developer
                                </li>
                                <li>
                                    Full-Stack Engineer
                                </li>
                            </ul>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;