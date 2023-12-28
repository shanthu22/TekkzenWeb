import React from "react";
import "./aboutUs.css";
import CustomNavbar from "../../components/navbar/navbar";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import aboutus from "../../assets/about-us/about-us.gif";
import Footer from "../../components/footer/footer";
import TeamMembers from "../../components/TeamMembers/teamMembers";
const AboutUs = () => {
  return (
    <div style={{ font: "16px  Roboto, Helvetica,Arial, sans-serif " }}>
      <CustomNavbar />

      <Container>
        <Row>
          <Col className='aboutUs-Top'>
            <h2>Tekkzen Mission </h2>
            <p>
              Our mission is to make websites convert better with the help of
              user-centered design. Our team of awesome designers makes the best
              experience that converts into paying customers.
            </p>
          </Col>

          <Col className='aboutUs-Img'>
            <img src={aboutus}></img>
          </Col>
        </Row>
      </Container>

      <TeamMembers />

      <Footer />
    </div>
  );
};

export default AboutUs;
