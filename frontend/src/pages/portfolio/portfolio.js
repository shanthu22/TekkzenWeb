import React from "react";
import CustomNavbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

import PP2 from "../../assets/PreviousProjects/PP2.png";

import PreviousProject from "../../components/portfolio/previousProject";
import { Container } from "react-bootstrap";
const Portfolio = () => {
  const PreviousProjectData = [
    {
      image: PP2,
      name: "Entertaiment Service  ",
      description:
        " Entertainment Service Dashboard, a comprehensive platform designed to empower users in effortlessly managing package credentials and associated costs. This centralized hub ensures a seamless and efficient experience, allowing users to have complete control over their entertainment service subscriptions.",
    },
  ];

  return (
    <div>
      <CustomNavbar />
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}>
        <PreviousProject PreviousProjectData={PreviousProjectData} />
      </Container>
      <Footer />
    </div>
  );
};

export default Portfolio;
