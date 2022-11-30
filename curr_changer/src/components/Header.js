import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Currency exchanger</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="../">
            Home
          </Link>
          <Link className="nav-link" to="../UkrBank">
            Ukrainian national bank
          </Link>
          <Link className="nav-link" to="../Crypto">
            Crypto currencies
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;
