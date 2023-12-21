import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/logo.png';
import Button from 'react-bootstrap/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const CustomNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" style={{ 'background-color': 'whitesmoke' }}>
        <Container>
          <Navbar.Brand href="#home">
            <Image style={{ width: '150px', height: 'auto' }} src={Logo} rounded />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link  href="#home">
                Home
              </Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#how-we-work">How we work</Nav.Link>
             
            </Nav> <Button variant="dark">Talk to us <ArrowForwardIcon/> </Button>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
