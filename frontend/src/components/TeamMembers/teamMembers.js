import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import defaultProfile from "../../assets/profilePics/defaultProfile.jpg";
import { Container } from "react-bootstrap";
const TeamMembers = () => {
  const TeamMembersData = [
    {
      name: "Shanthu",
      role: "Founder / Software Engineer",
      statement:
        " As the founder of Tekkzen and a software engineer, my mission is to drive business success through innovative tech solutions. I am dedicated to crafting robust software that contributes to our clients business  growth",
    },
    {
      name: "Emma",
      role: "Technical Counsultant",
      statement:
        " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      name: "Dhanuka",
      role: "Technical Counsultant",
      statement:
        " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      name: "w vibeeshan ",
      role: "Software Engineer",
      statement:
        " Proficient in Front-End Design and Web Development, Transforming Concepts into Visually Stunning and Functionally Robust Websites.",
    },
    {
      name: "Naomi",
      role: "Software Engineer QA",
      statement:
        " Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  return (
    <div className=''>
      <h2>Team Members</h2>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}>
        {TeamMembersData.map((item, index) => {
          return (
            <Card style={{ width: "18rem", margin: "10px 0px 10px 0px " }}>
              <Card.Img variant='top' src={defaultProfile} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.role}</Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                  {item.statement}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default TeamMembers;
