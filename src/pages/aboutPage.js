import React from 'react';
import Hero from '../components/hero';
import Content from '../components/content';
import Container from 'react-bootstrap/Container';

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Container fluid={true} className="text-justify">
                <Content>
                    <p>
                        Graduate student with a strong base of analytical reasoning and problem-solving skills. 2 years 10 months of experience in the design and development of software products and services. Working knowledge of web services, microservices, full-stack development, AI-driven software development, and agile methodologies. Actively looking for software engineer opportunities.
                    </p>
                </Content>
                <Content>
                    <h3>Expereice</h3>
                </Content>
                <Content>
                    <p className="pl-5">
                        • Developed a client billing system using React, Spring and Oracle 10g. This application handles customer billing, invoicing and processing of complex accounts across multiple customers and product lines. This brought transparency among Fidelity Investments and its customers and helped them closely monitor every transaction.
                    </p>
                </Content>
                <Content>
                    <p className="pl-5">
                        • Migrated RESTFUL microservices of Fidelity investments PI domain from WSO2 tool to Spring framework. This made services more scalable and were able to manage more than 200 RPM with zero latency.
                    </p>
                </Content>
                <Content>
                    <p className="pl-5">
                        • Built automation tool for testing AT&T’s CSI services and generating a report on success and failed test cases which helped testing teams for quick testing when an update on CSI services is performed.
                    </p>
                </Content>
                <Content>
                    <p className="pl-5">
                        • Enhanced FOBPM application by adding new RESTFUL adapters and integrated them with legacy SOAP web services. This eased integrating customer services into AT&T’s CSI platform and helped onboarding more than 20 news customers within 2 months.
                    </p>
                </Content>
                <Content>
                    <p className="pl-5">
                        • Migrated SOAP and RESTFUL web services of DIRECTV’s sports platform’s proxy layer which were developed using APIGEE to the Java technology stack.
                    </p>
                </Content>
                <Content>
                    <h3>Internship</h3>
                </Content>
                <Content>
                    Infosys Limited Mysore, India <br />
                    Intern, Jan 2016 – May 2016
                    <p className="pl-5">
                        • Migrated SOAP and RESTFUL web services of DIRECTV’s sports platform’s proxy layer which were developed using APIGEE to the Java technology stack.
                    </p>
                </Content>
                <Content>
                    <h3>Technical Skills</h3>
                </Content>
                <Content>
                    Programming Languages: Java, Python.
                </Content>
                <Content>
                    Technologies: J2EE, SOAP & RESTFUL services, JSP & Servlets, Hibernate, Spring ORM, Spring & Spring boot.
                </Content>
                <Content>
                Web Development: HTML, CSS, JavaScript (ES6), Bootstrap, React.
                </Content>
                <Content>
                    Software tools: Eclipse, Maven, SOAP UI, Postman, Git, Source Tree, Jenkins, IBM Urban Code (uDeploy).
                </Content>
                <Content>
                Databases: MySQL, Oracle 10g, MongoDB.
                </Content>
            </Container>
        </div>
    );
}

export default AboutPage;