import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import SOCIALS from "../../Assets/mockup/intro.data";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">Full-stack Developer</b> with nearly <b className="purple">3 years of experience</b> building high-performance web applications using <b className="purple">Angular, ReactJS, NextJS, .NET, NodeJS and more...</b>
              <br />
              <br />
              Passionate about crafting clean, scalable code and optimizing user experience, I thrive on turning ideas into reality with efficient solutions. Adaptable and detail-oriented, I love tackling challenges and continuously expanding my skills.
              <br />
              <br />
              Let's connect if you're looking for <b className="purple">a dedicated, fast-learning developer</b> who delivers results! 🚀
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {
                SOCIALS.map((social, index) => (
                  <li className="social-icons" key={index}>
                    <a
                      href={social.url}
                      target={social.target}
                      rel={social.rel}
                      className="icon-colour home-social-icons"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
