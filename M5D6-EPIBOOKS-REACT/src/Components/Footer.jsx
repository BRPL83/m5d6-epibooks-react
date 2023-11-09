import {Row, Col, Container} from "react-bootstrap";



function Footer() {
  return (
    <Container fluid className='bg-dark text-light mt-5'>
      <Row className='d-flex justify-content-center pt-5'>
        <Col xs={12} sm={4}>
          <div className='footer-div'>
              <h4>Contacts</h4>
                <p>Address: 123 Main Street, Miami - Florida</p>
                <p>Email: info@example.com</p>
                <p>Phone: (305) 555-1234</p>
          </div>  
        </Col>
        <Col xs={12} sm={4}>
          <div className='footer-div'>
           <h4>Links</h4>
              <ul className="list-unstyled">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact</li>
               </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;