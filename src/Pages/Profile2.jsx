import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Anchor from "react-bootstrap/Anchor";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Stack from "react-bootstrap/Stack";

import { NavBar } from "../Components/Navbar";
import { Cards } from "../Components/Cards";
import { FeedCards } from "../Components/FeedCards";
import { publications } from "../utils/publications";
import img1 from "../Img/2sd.jpg";

export const Profile2 = () => {
  return (
    <>
      <NavBar />
      <Container controlId="main-container" fluid>
        <Row>
          <Col xs={12} sm={12} md={3}>
            <Card className="p-1" border="0" text="light">
              <Card.Body>
                <ListGroup className="p-1">
                  <ListGroup.Item className="text-center border-0">
                    <Image
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      fluid
                      roundedCircle
                    />
                  </ListGroup.Item>
                  <ListGroup.Item className="text-center text-light border-0">
                    <h4 className="text-capitalize text-light">
                      Juan González
                    </h4>
                    <h5 className="text-capitalize text-light">Bajista</h5>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-center border-0">
                    <Button variant="success" href="#">
                      Actividad
                    </Button>{" "}
                  </ListGroup.Item>
                  <ListGroup.Item className="text-start text-light border-0">
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-center border-0">
                    <ButtonGroup vertical>
                      <Button variant="success" href="#">
                        Editar Cuenta
                      </Button>{" "}
                      <Button variant="success" href="#">
                        Cerrar Sesión
                      </Button>{" "}
                    </ButtonGroup>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={9} controlId="feed-col">
            <Card className="p-1 text-center" border="0">
              <Card.Body className="p-1" border="0">
                <ButtonGroup aria-label="Basic example">
                  <Button variant="success" href="#">
                    Inicio
                  </Button>
                  <Button variant="success" href="#">
                    Amigos
                  </Button>
                  <Button variant="success" href="#">
                    Estado
                  </Button>
                  <Button variant="success" href="#">
                    Mis eventos
                  </Button>
                </ButtonGroup>
              </Card.Body>
            </Card>
            <Form className="p-0 text-light">
              <Form.Group>
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Algo en mente..."
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "12rem" }}
                  ></Form.Control>
                  <Row className="p-1 mt-0">
                    <Stack direction="horizontal" gap={4}>
                      <Button className="ms-auto" variant="success" type="file">
                        Foto/Video
                      </Button>
                      <Button variant="success" href="#">
                        Publicar
                      </Button>
                    </Stack>
                  </Row>
                </FloatingLabel>
              </Form.Group>
            </Form>

            <section className="feed">
              {/* <Form.Select size="lg"> */}
              {/* <option>Mas reciertes</option>
                <option>Mas antiguos</option>
                <option>Etc</option> */}
              <Row className="p-1 mt-0 ">
                <ButtonGroup aria-label="Basic example">
                  <Button className="me-5" variant="success" href="#">
                    Reciente
                  </Button>
                  <Button className="me-5" variant="success" href="#">
                    Antiguo
                  </Button>
                </ButtonGroup>
              </Row>
              {/* </Form.Select> */}

              <div className="feed-box">
                <Row>
                  <Col className="grid-L-In" xs={12} sm={12} md={12} lg={3}>
                    {publications.map((aux) => (
                      <Cards
                        logo={img1}
                        imgSize={100}
                        key={aux.id}
                        cardSizeH={300}
                        text={"ejemplo de de datos"}
                      />
                    ))}
                  </Col>
                  <Col className="grid-R-In" xs={12} sm={12} md={12} lg={9}>
                    {publications.map((aux) => (
                      <FeedCards
                        key={aux.id}
                        title={aux.title}
                        text={aux.text}
                        cardSizeH={300}
                      />
                    ))}
                  </Col>
                </Row>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};
