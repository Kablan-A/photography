import { Link } from "react-router-dom";
import routs from "../pages/routs";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const setLinkActive = (linkId) => {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => link.classList.remove("active"));

  document.getElementById(linkId).classList.add("active");
};

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Link
          id={routs.home}
          to={routs.home}
          className="nav-link navbar-brand fs-3"
          onClick={(ev) => setLinkActive(ev.target.id)}
        >
          Jessie.
        </Link>

        <Navbar.Toggle aria-controls="myNav" className="bg-light border-0" />

        <Navbar.Collapse id="myNav">
          <Nav className="ms-auto" id="navList">
            <Link
              id={routs.portfolio}
              to={routs.portfolio}
              className="nav-link"
              onClick={(ev) => setLinkActive(ev.target.id)}
            >
              Portfolio
            </Link>
            <Link
              id={routs.contact}
              to={routs.contact}
              className="nav-link"
              onClick={(ev) => setLinkActive(ev.target.id)}
            >
              Contact me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
