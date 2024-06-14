import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Logo from "../../assets/logo.png";
import Button from "react-bootstrap/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const CustomNavbar = ({ navbarCallBack }) => {
  const navigate = useNavigate();
  const handleClick = (name) => {
    try {
      navigate("/" + name);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar expand='lg' style={{ backgroundColor: "#1B263B" }}>
      <Container>
        <Navbar.Brand role='button' onClick={(e) => handleClick("")}>
          <Image
            style={{ width: "150px", height: "auto" }}
            src={Logo}
            rounded
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' variant='light'>
          <Nav className='me-auto'>
            <Nav.Link
              style={{ color: "white" }}
              onClick={() => handleClick("")}>
              Home
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              onClick={() => handleClick("about-us")}>
              About Us
            </Nav.Link>
            <Nav.Link
              style={{ color: "white" }}
              onClick={() => handleClick("portfolio")}>
              Portfolio
            </Nav.Link>
          </Nav>
          <Button onClick={() => handleClick("contact-us")} variant='light'>
            Talk to us <ArrowForwardIcon />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
