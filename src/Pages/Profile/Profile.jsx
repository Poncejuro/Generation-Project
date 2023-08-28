import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import React, { useState } from "react";
import { NavBar } from "../../Components/Navbar";
import { FeedCards } from "../../Components/FeedCards/FeedCards";
import img1 from "../../Img/2sd.jpg";

import "./Profile.css";


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



  const [userText, setUserText] = useState('');

  const handleTextChange = (event) => {
    setUserText(event.target.value);
  }

  const editEvent = (event) => {
    setUserText(event.target.value);
  }

  return (
    <>
      <NavBar />

      <div className="body-Profile">
        <Row>
          <Col xs={12} sm={12} md={3} className="flow-box">
            
            <div className="img-box-profile">
              <ListGroup.Item className="text-center border-0">
                <Image
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  fluid
                  roundedCircle
                  />
              </ListGroup.Item>
            </div>

            <div className="bio-box-profile-edit" style={{display:'none'}}>
              <ListGroup.Item className=" Principal-Container text-center text-light border-0">
                <textarea
                  value={userText}
                  onChange={handleTextChange}
                  placeholder="Escribe tu nombre"
                  style={{marginTop:'1vh', marginBottom:'1vh'}}
                />
                <textarea
                  value={userText}
                  onChange={handleTextChange}
                  placeholder="escribe tu rol"
                />
                <textarea
                  value={userText}
                  onChange={handleTextChange}
                  placeholder="Agrega una pequeña biografía"
                  style={{marginTop:'1vh', marginBottom:'1vh'}}
                />
                </ListGroup.Item>
                <Form.Group controlId="formFile" className="mb-3 ">
                      <Form.Control type="file"/>
                </Form.Group>
            </div>
            
            <div className="bio-box-profile-save">
              <ListGroup.Item className=" Principal-Container text-center text-light border-0">
                <h4 className=" text-profile text-capitalize text-light">Juan González</h4>
                <h5 className=" text-profile text-capitalize text-light">Bajista</h5>
                <Card.Text className=" text-profile-2">
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer. asdasdasdadas
                        This is a longer card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer. asdasdasdadas
                      </Card.Text>
                </ListGroup.Item>
            </div>
            

            <ListGroup.Item className="text-center border-0">
              <Button variant="success" href="#">
                Editar perfil
              </Button>
              <Button variant="success" href="#" style={{display:'none'}}>
                Guardar cambios
              </Button>
            </ListGroup.Item>
          </Col>

          <Col xs={12} sm={12} md={9} className="flow-box">
            
            <section className="buttons-container">

            <Card className="p-1" border="0">
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
            </section>

         
            <form >
              <section className="form-box">
                <Form.Control
                      as="textarea"
                      placeholder="Título de la publicación"
                      name="text"
                      onChange={setField}
                      style={{ width: '650px'}}
                      />
                <Form.Control
                        as="textarea"
                        placeholder="Pie de imagen"
                        name="text"
                        onChange={setField}
                        style={{ width: '650px'}}
                        />       
              </section> 

              <section className="form-box-2">
              <Form.Control
                    as="textarea"
                    placeholder="Detalles del evento"
                    name="text"
                    onChange={setField}
                    style={{ width: '1300px', height: '30vh'}}
              /> 
              </section>

              <section className="form-box-2">
                <Stack direction="horizontal" style={{ width: '1300px'}}>
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
              </section>
            </form>

            <section className="form-box-2">
              {/* <Form.Select size="lg"> */}
              {/* <option>Mas reciertes</option>
                <option>Mas antiguos</option>
                <option>Etc</option> */}
              <Row className="p-1 mt-0 ">
                <ButtonGroup aria-label="Basic example" style={{ width: '1320px'}}>
                  <Button
                    className="me-1"
                    variant="success"
                    href="#"
                    onClick={updateData}
                  >
                    Actualizar
                  </Button>
                  <Button className="me-1" variant="success" href="#">
                    Reciente
                  </Button>
                  <Button className="me-6" variant="success" href="#">
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
      </div>
    </>
  );
};