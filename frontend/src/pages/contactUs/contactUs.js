import React from "react";
import CustomNavbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { Button, Container } from "react-bootstrap";
import SendUsMessage from "../../components/sendUsMessage/sendUsMessage";
import "./contactUs.css";
const ContactUs = () => {
  return (
    <div>
      <CustomNavbar />
      <div className='ContactUs'>
        <h2>CONTACT US PAGE </h2>
        <p>Have any questions? We'd love to hear from you.</p>
        <div className='ContactUs_card'>
          <div className='Card_HealthSupport'>
            <h3>Help & Support</h3>
            <p>
              Our support team is spread across the globe to give you answers
              fast.
            </p>
            <div
              href='mailto:user@example.com'
              className='Card_HealthSupport_btn'>
              dev@tekkzen.com
            </div>
          </div>
          <div className='Card_Sales'>
            <h3>Sales</h3>
            <p>
              Get in touch with our sales team to see how we can work together.
            </p>
            <div href='mailto:sales@tekkzen.com' className='Card_Sales_btn'>
              sales@tekkzen.com
            </div>
          </div>
        </div>
        <SendUsMessage />
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
