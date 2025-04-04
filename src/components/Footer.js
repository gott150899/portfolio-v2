import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import SOCIALS from "../Assets/mockup/intro.data";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body">
        <ul className="footer-icons">
          {
            SOCIALS.map((social, index) => (
              <li className="social-icons" key={index}>
                <a
                  href={social.url}
                  style={{ color: "white" }}
                  target={social.target}
                  rel={social.rel}
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
  );
}

export default Footer;
