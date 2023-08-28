import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Stack from "react-bootstrap/Stack";
import React, { useState } from "react";

import { NavBar } from "../../Components/Navbar";
import { FeedCards } from "../../Components/FeedCards/FeedCards";
import img1 from "../../Img/2sd.jpg";

export const Profile = () => {
  const [form, setForm] = useState({});
  const [miArray, setMiArray] = useState([]);

  const setField = (field) => {
    setForm({
      ...form,
      [field.target.name]: field.target.value,
    });
    //console.log('funciona')
    console.log(form); //testing
    //console.log(typeof(form))//testing
  };

  const saveFeed = () => {
    console.log("funciona asd" + form.text); //testing
    localStorage.setItem("feedData", JSON.stringify(form));
  };

  const updateData = () => {
    const jsonData = localStorage.getItem("feedData");
    const objectData = JSON.parse(jsonData);
    console.log(objectData); //testing
    setMiArray([...miArray, objectData]);
  };

  return (
    <>
      <NavBar />
      <Container fluid>
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
          <Col xs={12} sm={12} md={9}>
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
                <FloatingLabel label="Titulo">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "2rem" }}
                    name="text"
                    onChange={setField}
                  />
                </FloatingLabel>
                <FloatingLabel label="Algo en mente...">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "12rem" }}
                    name="text"
                    onChange={setField}
                  />
                  <FloatingLabel label="Pie de foto">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "2rem" }}
                      name="text"
                      onChange={setField}
                    />
                  </FloatingLabel>
                  <Row className="p-1 mt-0">
                    <Stack direction="horizontal" gap={4}>
                      <Form.Group controlId="formFile" className="mb-3 ">
                        <Form.Control type="file"/>
                      </Form.Group>
                      <Button className="ms-auto" variant="success" type="file">
                        Foto/Video
                      </Button>
                      <Button variant="success" href="#" onClick={saveFeed}>
                        Publicar
                      </Button>
                    </Stack>
                  </Row>
                </FloatingLabel>
              </Form.Group>
            </Form>

            <section>
              {/* <Form.Select size="lg"> */}
              {/* <option>Mas reciertes</option>
                <option>Mas antiguos</option>
                <option>Etc</option> */}
              <Row className="p-1 mt-0 ">
                <ButtonGroup aria-label="Basic example">
                  <Button
                    className="me-5"
                    variant="success"
                    href="#"
                    onClick={updateData}
                  >
                    Actualizar
                  </Button>
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
                {miArray.map((aux) => (
                  <FeedCards
                    logo={img1}
                    imgSize={150}
                    key={1}
                    cardSizeH={200}
                    text={aux.text}
                  />
                ))}
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};
