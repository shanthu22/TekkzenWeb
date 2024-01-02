import React from "react";
import CustomNavbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Container } from "react-bootstrap";
import "./contactUs.css";
const ContactUs = () => {
  return (
    <div>
      <CustomNavbar />
      <Container>
        <h1>CONTACT US PAGE </h1>
        <p>Have any questions? We'd love to hear from you.</p>
        <div className='ContactUs'>
          <div className='Card_HealthSupport'>
            <h3>Help & Support</h3>
            <p>
              Our support team is spread across the globe to give you answers
              fast.
            </p>
            <a href='mailto:user@example.com'>Contact Us</a>
          </div>
          <div className='Card_Sales'>
            <h3>Sales</h3>
            <p>
              Get in touch with our sales team to see how we can work together.
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactUs;
