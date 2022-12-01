import "./Header.css";
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = (props) => {
  const [activePage, setActivePage] = useState("home");
  useEffect(() => {
    setActivePage(props.active);
  }, [props.active]);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Currency exchanger</Navbar.Brand>
        <Nav className="me-auto">
          <Link
            className={"nav-link " + (activePage === "home" ? "active" : "")}
            to="../"
          >
            Home
          </Link>
          <Link
            className={"nav-link " + (activePage === "ukrBank" ? "active" : "")}
            to="../UkrBank"
          >
            Ukrainian national bank
          </Link>
          <Link
            className={"nav-link " + (activePage === "crypto" ? "active" : "")}
            to="../Crypto"
          >
            Crypto currencies
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
