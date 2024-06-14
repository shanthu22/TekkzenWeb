import React from "react";
import "./aboutUs.css";

import TZnavbar from "../../components/atoms/TZnavbar/TZnavbar";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import aboutus from "../../assets/about-us/about-us.gif";
import Footer from "../../components/footer/footer";
import TeamMembers from "../../components/TeamMembers/teamMembers";
import d0003 from "../../assets/profilePics/d0003.jpg";
import s0001 from "../../assets/profilePics/s0001.jpg";
import v0004 from "../../assets/profilePics/v0004.jpg";
const AboutUs = () => {
  const teamMembersData = [
    {
      profileImage: s0001,
      Id: "0001",
      name: "Shanthu  ",
      role: "Founder / Software Engineer",
      statement:
        " As the founder of Tekkzen and a software engineer, my mission is to drive business success through innovative tech solutions. I am dedicated to crafting robust software that contributes to our clients business  growth",
    },
    {
      profileImage: null,
      Id: "0002",
      name: "Emma",
      role: "Technical Counsultant",
      statement:
        " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      profileImage: d0003,
      Id: "0003",
      name: "Dhanuka Thenuwara",
      role: "Technical Counsultant",
      statement:
        " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      profileImage: v0004,
      Id: "0004",
      name: "W Vibeeshan ",
      role: "Software Engineer",
      statement:
        " Proficient in Front-End Design and Web Development, Transforming Concepts into Visually Stunning and Functionally Robust Websites.",
    },
    {
      profileImage: null,
      Id: "0005",
      name: "Naomi",
      role: "Software Engineer QA",
      statement:
        " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
  return (
    <div style={{ font: "16px  Roboto, Helvetica,Arial, sans-serif " }}>
      <TZnavbar />

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

      <TeamMembers teamMembersData={teamMembersData} />

      <Footer />
    </div>
  );
};

export default AboutUs;
