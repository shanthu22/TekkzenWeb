import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import defaultProfile from "../../assets/profilePics/defaultProfile.jpg";
import { Container } from "react-bootstrap";
const TeamMembers = (props) => {
  const randomInt = Math.floor(Math.random() * 4);

  console.log(randomInt);
  const backgroundColors = ["#bfe1f1", "#8b8589", "#001f3f"];
  const fetchedTeamMembersData = props.teamMembersData;
  return (
    <div
      style={{
        backgroundColor: " rgb(39, 39, 39)",
        color: "white",
        padding: "20px",
      }}>
      <h2>Team Members</h2>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}>
        {fetchedTeamMembersData.map((item, index) => {
          return (
            <Card
              style={{
                width: "18rem",
                border: "none",
                borderRadius: "10px ",
                margin: "10px 0px 10px 0px ",
              }}>
              {item.profileImage == null ? (
                <Card.Img
                  variant='top'
                  style={{
                    height: "382px",
                    width: "288px",
                    objectFit: "cover",
                  }}
                  src={defaultProfile}
                />
              ) : (
                <Card.Img
                  variant='top'
                  style={{
                    height: "382px",
                    width: "288px",
                    objectFit: "cover",
                  }}
                  src={item.profileImage}
                />
              )}

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
