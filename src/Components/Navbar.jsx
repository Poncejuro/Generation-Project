import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../styles/Navbar.css";

export const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant={"dark"}>
      <Container fluid>
        <Navbar.Brand href="#">Facetify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search..."
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <div className="elementsNav">
            <Nav
              className="me-auto my-2 my-lg-0 text-right d-flex w-100"
              style={{ maxHeight: "100px", fontSize: "24px" }}
              navbarScroll
            >
              <Nav.Link href="/AboutUs">Nosotros</Nav.Link>
              <Nav.Link href="#action2">Personas</Nav.Link>
              <Nav.Link href="/Contact">Contacto</Nav.Link>
              <Nav.Link href="/Profile2">Perfil</Nav.Link>
              <Nav.Link href="#action1">Cuenta</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
