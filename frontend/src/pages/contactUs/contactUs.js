import React from "react";
import TZnavbar from "../../components/atoms/TZnavbar/TZnavbar";
import Footer from "../../components/footer/footer";
import { Button, Container } from "react-bootstrap";
import SendUsMessage from "../../components/sendUsMessage/sendUsMessage";
import "./contactUs.css";
const ContactUs = () => {
  const handleClick = (mail) => {
    console.log(mail);
  };

  return (
    <div>
      <TZnavbar />
      <div className='ContactUs'>
        <h2>Let’s Talk. </h2>
        <p>Have any questions? We'd love to hear from you.</p>
        <div className='ContactUs_card'>
          <div className='Card_HealthSupport'>
            <h3>Help & Support</h3>
            <p>
              Our support team is spread across the globe to give you answers
              fast.
            </p>
            <button
              onClick={() => handleClick("user@example.com")}
              href='user@example.com'
              className='Card_HealthSupport_btn'>
              dev@tekkzen.com
            </button>
          </div>
          <div className='Card_Sales'>
            <h3>Sales</h3>
            <p>
              Get in touch with our sales team to see how we can work together.
            </p>
            <button href='mailto:sales@tekkzen.com' className='Card_Sales_btn'>
              sales@tekkzen.com
            </button>
          </div>
        </div>
        <SendUsMessage />
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
