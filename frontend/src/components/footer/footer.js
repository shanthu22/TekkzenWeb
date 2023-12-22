import React from "react";
//import Container from "react-bootstrap/esm/Container";
import { Container, Row, Col } from 'react-bootstrap';
const Footer =()=>{return(<footer>
    <Container>
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
<Col> </Col>

           
            
           
           
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