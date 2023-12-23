import React from "react";

import { Container, Row, Col } from 'react-bootstrap';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer =()=>{
    
    
    return(
<footer  style={{backgroundColor: 'WhiteSmoke',padding: '30px 0px 0px 0px'}}>
    <Container >
        <Row>
            <Col> 
            <h5  className="text-left" style={{textAlign: "left"}}>Services</h5>
            <ul style={{ listStyleType: 'none', textAlign: 'left', padding: 0 }}>
    <li>For Startups</li>
    <li>For Enterprise</li>
    <li>Software Development</li>
    <li>UI/UX Design</li>
    <li>Quality Assurance</li>
    <li>Adsense</li>
    <li>SEO Optimization</li>
  </ul>
        </Col>
           
<Col>
<h5 style={{textAlign: "left"}}>Company </h5>
<ol style={{ listStyleType: 'none', textAlign: 'left', padding: 0 }}>
    <li>About Us</li>
    <li>Portfolio</li>
    <li>Contact Us</li>
</ol>


 </Col>
<Col> 
<p>Got questions? Let's chat and find the answers together!</p>
<h2 style={{margin:'10px'}}>Talk to us <ArrowForwardIcon/></h2>
<FacebookIcon style={{color:'black'}}/>
<EmailOutlinedIcon style={{color:'black'}}/>
<InstagramIcon style={{color:'black'}}/>


</Col>        
        </Row>
    <Row style={{borderTop: '1px solid black',padding: '5px'}}> 
        <h7>&copy; 2023 Tekkzen. All Rights Reserved </h7>
    </Row>
    </Container>
</footer>)}

export default Footer; 


// <Row>
//           <Col xs={12} sm={6}>
//             <h5>Contact Us</h5>
//             <p>Email: example@example.com</p>
//             <p>Phone: +1 123-456-7890</p>
//           </Col>
//           <Col xs={12} sm={6}>
//             <h5>Follow Us</h5>
//             {/* Add your social media links or icons here */}
//           </Col>
//         </Row>