import React, { useContext } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import ThemeContext from "../Context/theme";
import { MoonFill, BrightnessHighFill } from "react-bootstrap-icons";

function MyNavBar({ name, setName }) {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <Navbar
      expand="lg"
      className="ps-1"
      bg={dark ? "success-subtle" : "info-subtle"}
      data-bs-theme={dark ? "light" : "dark"}
    >
      <Navbar.Brand href="#home" className="d-flex justify-content-center align-items-center"
      >
        <img alt="book" src="https://images.pexels.com/photos/1122865/pexels-photo-1122865.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="d-inline-block align-top nav-img rounded-4"
        />
        <span className="fw-bolder ps-2">EPICBOOKS</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Browse</Nav.Link>
        </Nav>
        <label className="ms-auto pe-5">
          <input
            className="input-text"
            name="TitleName"
            placeholder="The Mandalorian..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <Button
          className="mx-5"
          variant={dark ? "primary" : "secondary"}
          onClick={() => setDark(!dark)}
        >
          {dark ? <BrightnessHighFill style={{color: "yellow"}} /> : <MoonFill />}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavBar;