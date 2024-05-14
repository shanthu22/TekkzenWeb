import React from "react";
import "./sendUsMessage.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "react-bootstrap";
const SendUsMessage = () => {
  //testing git branch
  //tetsing again
  return (
    <div className='sendUsMessage'>
      <h2> Send us a message</h2>
      <p>
        Send us a message and we will get back to you as soon as possible. We
        look forward to hearing from you
      </p>

      <form className='sendUsMessage_form'>
        <div className='sendUsMessage_form_basic'>
          <div className='sendUsMessage_form_element'>
            <label>Name</label>
            <input className='' type='text' placeholder='Enter Name' />
          </div>

          <div className='sendUsMessage_form_element'>
            <label>Your Company website (optional)</label>
            <input
              className=''
              type='url'
              placeholder='Enter Company website link'
            />
          </div>
          <div className='sendUsMessage_form_element'>
            <label>E-mail</label>
            <input
              className=''
              type='text'
              placeholder='Enter E-mail Address'
            />
          </div>
          <div className='sendUsMessage_form_element'>
            <label>Phone (Optional)</label>
            <input className='' type='text' placeholder='Enter Phone Number' />
          </div>
        </div>

        <div className='sendUsMessage_form_element'>
          <label>What are you planning to build?</label>
          <input className='' type='text' placeholder='Message' />
        </div>

        <Button variant='dark'>
          Send <ArrowForwardIcon />
        </Button>
      </form>
    </div>
  );
};

export default SendUsMessage;
