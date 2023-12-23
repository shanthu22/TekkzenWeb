import React from "react";
import CustomNavbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import PP1 from "../../assets/PreviousProjects/PP1.png";
import PP2 from "../../assets/PreviousProjects/PP2.png";
import PreviousProject from "../../components/portfolio/previousProject";
import { Container } from "react-bootstrap";
const Home = () => {
  const PreviousProjectData = [
    {
      image: PP2,
      name: "Entertaiment Service  ",
      description:
        " Entertainment Service Dashboard, a comprehensive platform designed to empower users in effortlessly managing package credentials and associated costs. This centralized hub ensures a seamless and efficient experience, allowing users to have complete control over their entertainment service subscriptions.",
    },
  ];

  return (
    <div style={{ font: "14px  Roboto, Helvetica,Arial, sans-serif " }}>
      <CustomNavbar />
      <h2>We bring your concepts and ideas to life</h2>
      <h2>Our Best Projects </h2>
      <p style={{ textAlign: "center", margin: "10px" }}>
        Our experts craft innovative, scalable solutions for Startups and
        Enterprises. We set your brand apart and help your business reach new
        heights.
      </p>
      <p
        style={{
          textAlign: "center",
          margin: "10px",
        }}>
        Our clients love what we do because we always deliver top-notch work.
        Take a look at some of our best projects!
      </p>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          nargin: "0px",
        }}>
        <PreviousProject PreviousProjectData={PreviousProjectData} />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
