import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant={"dark"} className="nav-box">
      <Container fluid>
        <Navbar.Brand href="#">Facetify</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
            <Form.Control type="search..." placeholder="Búsqueda" style={{width:'20%'}} />
            <Button variant="outline-success" style={{backgroundColor:"white"}}>Search</Button>
          
          <Nav
            className="me-auto my-2 my-lg-0 text-right d-flex justify-content-end w-100"
            style={{ maxHeight: "100px", fontSize: "24px" }}
            navbarScroll
          >
            <Nav.Link href="/AboutUs">Nosotros</Nav.Link>
            <Nav.Link href="#action2">Personas</Nav.Link>
            <Nav.Link href="/Contact">Contacto</Nav.Link>
            <Nav.Link href="/Profile">Perfil</Nav.Link>
            <Nav.Link href="#action1">Cuenta</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
