import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import etherwallet from "../../Assets/Projects/ether-wallet1.png";
import portfolio from "../../Assets/Projects/portfolio1.png";

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
              imgPath={etherwallet}
              isBlog={false}
              title="Ether-Wallet"
              description="Ether wallet is a Web Application, where user is able to receive Ethers from other addresses, And transfer Ethers to other addresses and can sell or buy Ethers and Securely access and Your ETH & Tokens or Ethers on your Bit Box and Ledger or TREZOR Hardware Wallet via the Ether Wallet interface."
              ghLink="https://github.com/umarshoaibhere/Ether-Wallet"
              demoLink="https://ether-wallet20.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal portfolio website is a showcase of my professional journey, skills, projects, and personality. Built using React.js, it provides visitors with an interactive and engaging experience, allowing them to learn about me, my work, and my interests."
              ghLink="https://github.com/umarshoaibhere/Portfolio"
              demoLink="https://umarshoaibportfolio.netlify.app/project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
