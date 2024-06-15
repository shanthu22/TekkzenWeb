import React from "react";

import Footer from "../../components/footer/footer";
import "./home.css";
import PP2 from "../../assets/PreviousProjects/PP2.png";
import PreviousProject from "../../components/portfolio/previousProject";
import { Button, Container } from "react-bootstrap";
import Procedure from "../../components/procedure/procedure";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TZnavbar from "../../components/molecules/TZnavbar/TZnavbar";
import Clients from "../../components/molecules/clients/Clients";
const Home = () => {
  const PreviousProjectData = [
    {
      image: PP2,
      name: "Entertaiment Service  ",
      description:
        " Entertainment Service Dashboard, a comprehensive platform designed to empower users in effortlessly managing package credentials and associated costs. This centralized hub ensures a seamless and efficient experience, allowing users to have complete control over their entertainment service subscriptions.",
    },
  ];
  const procedureData = [
    {
      stepCount: "01",
      stepName: "Expertise ",
      stepDescription:
        " Our team is made up of highly skilled professionals who live and  breathe design, development, and user experience. We're passionate  about what we do, and it shows in our work.",
    },
    {
      stepCount: "02",
      stepName: "Tailored Solutions ",
      stepDescription:
        " We don't believe in a one-size-fits-all approach. We take the time to understand your unique needs and goals and create a customized solution that fits your budget and exceeds your expectations.",
    },
    {
      stepCount: "03",
      stepName: "Results-Driven ",
      stepDescription:
        "At the end of the day, what matters most is results. We are dedicated to delivering measurable results that drive your business forward. ",
    },
    {
      stepCount: "04",
      stepName: "Client Satisfaction ",
      stepDescription:
        " We measure our success by the satisfaction of our clients. Our goal is to not just meet your expectations but exceed them.",
    },
  ];
  const navigate = useNavigate();
  const HandleClick = (name) => {
    console.log(name);
    navigate("/" + name);
  };
  return (
    <div style={{ font: "16px  Roboto, Helvetica,Arial, sans-serif " }}>
      <TZnavbar />
      <h1 style={{ padding: "25px 20px", fontWeight: "700" }}>
        We bring your concepts and ideas to life
      </h1>

      <p style={{ textAlign: "center", margin: "12px" }}>
        Our experts craft innovative, scalable solutions for Startups and
        Enterprises. We set your brand apart and help your business reach new
        heights.
      </p>

      <Procedure procedureData={procedureData} />

      <h2>Our Best Projects </h2>
      <p
        style={{
          textAlign: "center",
          margin: "10px",
        }}>
        Our clients love what we do because we always deliver top-notch work.
        Take a look at some of our best projects!
      </p>
      <Button onClick={() => HandleClick("portfolio")} variant="dark">
        Explore Our Projects <ArrowForwardIcon />
      </Button>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          nargin: "0px",
        }}>
        <PreviousProject PreviousProjectData={PreviousProjectData} />
      </Container>

      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
