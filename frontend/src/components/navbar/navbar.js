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
  //const { navbarCallBack } = props;
  const navigate = useNavigate();
  const handleClick = (name) => {
    //  console.log("im trying to connect is :-" + name);
    try {
      //navbarCallBack(name);
      navigate("/" + name);
      console.log("Connection is Successful");
    } catch (error) {
      console.log(error);
    }

    // navigate("/" + e.target.name);
  };
  return (
    <Navbar expand='lg' style={{ "background-color": "whitesmoke" }}>
      <Container>
        <Navbar.Brand role='button' style={{}} onClick={(e) => handleClick("")}>
          <Image
            style={{ width: "150px", height: "auto" }}
            src={Logo}
            rounded
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => handleClick("")}>Home</Nav.Link>
            <Nav.Link onClick={() => handleClick("about-us")}>
              About Us
            </Nav.Link>
            <Nav.Link onClick={() => handleClick("how-we-work")}>
              How we work
            </Nav.Link>
          </Nav>
          <Button onClick={() => handleClick("contact-us")} variant='dark'>
            Talk to us <ArrowForwardIcon />
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
