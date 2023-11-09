import React, { useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import ThemeContext from "../Context/theme";

function Jumbotron() {
  const { dark } = useContext(ThemeContext);

  const jumbotronStyle = {
    backgroundImage: `url("https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1920")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px", // Regola l'altezza del jumbotron
    position: "relative",
    marginTop: "20px",
    marginBottom: "20px",
  };

  return (
    <Container>
      <div style={jumbotronStyle} className="jumbotron">
      </div>

      <Row className="d-flex justify-content-center">
        <Col xs={12} sm={6} className="d-flex align-items-end">
          <p className={`lead ${dark ? "dark-mode" : ""}`}>
          Welcome to EPICBOOKS, explore our fascinating world of online books, where inexhaustible worlds unfold between the pages. Discover engaging stories and enlightening essays, be captivated by literary adventures. We are here to fuel your passion for reading in a universe of knowledge and inspiration...
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Jumbotron;