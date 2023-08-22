import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

export const NavBar = () => {

    return (
      <Navbar className="bg-body-tertiary justify-content-between">
        
        <Container>
        <Navbar.Brand href="#home">Facetify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Eventos</Nav.Link>
            <Nav.Link href="#link">Personas</Nav.Link>
            <Nav.Link href="#home">Contacto</Nav.Link>
            <Nav.Link href="#link">Perfil</Nav.Link>
            <Nav.Link href="#link">Cuenta</Nav.Link>    
          </Nav>
        </Navbar.Collapse>
      </Container>
        
    </Navbar>
      );
}

