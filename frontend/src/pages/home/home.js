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
      stepName: "Initial Meeting & Drafting SRS",
      stepDescription:
        "We'll kick things off with an initial meeting to understand your needs and goals. From this discussion, we'll draft the first version of the Software Requirements Specification (SRS) to outline the project's scope.",
    },
    {
      stepCount: "02",
      stepName: "Finalizing SRS & Quotation",
      stepDescription:
        "Next, we'll work together to finalize the SRS, ensuring it covers all your requirements. Once we're aligned, we'll provide you with a detailed quotation for the project.",
    },
    {
      stepCount: "03",
      stepName: "Creating a Delivery Plan",
      stepDescription:
        "With the finalized SRS in hand, we'll create a delivery plan tailored to your preferences. Whether you prefer an Agile approach for iterative development or a Waterfall model for a single final delivery, we've got you covered.",
    },
    {
      stepCount: "04",
      stepName: "Development",
      stepDescription:
        "Our expert team will then get to work on developing your software. During this phase, we adhere closely to the specifications we've agreed upon, ensuring that every detail is meticulously crafted. We employ the latest technologies and best practices to build a robust and scalable solution. Throughout the development process, we maintain transparent communication, providing regular updates and incorporating your feedback to make sure the project stays on track and aligns with your vision.",
    },
    {
      stepCount: "05",
      stepName: "Testing & Quality Assurance",
      stepDescription:
        "Before we launch, we'll thoroughly test the software to ensure it's reliable, free of bugs, and meets all your requirements. Quality is our top priority.",
    },
    {
      stepCount: "06",
      stepName: "Delivery & Support",
      stepDescription:
        "Finally, we'll deliver the completed product and provide ongoing support to make sure everything runs smoothly and meets your expectations.",
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

      {/* <h2>Our Best Projects </h2>
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
      </Container> */}

      <Clients />
      <Footer />
    </div>
  );
};

export default Home;
