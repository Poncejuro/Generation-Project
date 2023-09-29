import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";



export const NavBar = () => {
  const handleLogout=()=>{
    localStorage.clear();
  }

  return (
    <Navbar expand="lg" bg="dark" variant={"dark"} >
      <Container fluid>
        <Link
          to="/Events"
          className="link-box"
          style={{
            color: "white",
            marginRight: "1rem",
            fontSize: "35px",
          }}
        >
          Facetify
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="me-auto">
            <div style={{display:'flex', alignItems:'center'}}>
              <Form.Control
                type="search..."
                placeholder="Búsqueda"
                style={{ width: "400px" }}
              />
              <Button variant="success" style={{ marginLeft: "5px" }}>
                {" "}
                Buscar{" "}
              </Button>
              </div>
          </Form>
          <Nav
            className="d-flex "
            style={{ maxHeight: '100px', fontSize: "25px"}}
            navbarScroll
            
          > 
            <Nav.Link href="/Events">Eventos</Nav.Link>
            <Nav.Link href="/Friends">Personas</Nav.Link>
            <Nav.Link href="/Profile">Perfil</Nav.Link>
            <Nav.Link href="/AboutUs">Nosotros</Nav.Link>
            <Nav.Link href="/Contact">Contacto</Nav.Link>
            <Nav.Link href="/"onClick={handleLogout}>Salir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};