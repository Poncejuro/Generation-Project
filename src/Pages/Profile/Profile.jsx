import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
// import Stack from "react-bootstrap/Stack";
import React, { useState } from "react";
import { NavBar } from "../../Components/Navbar";
import { FeedCards } from "../../Components/FeedCards/FeedCards";
import img1 from "../../Img/2sd.jpg";
//from MUI React
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { palette } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import "./Profile.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>
  );
}

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

  const [userText, setUserText] = useState("");

  const handleTextChange = (event) => {
    setUserText(event.target.value);
  };

  const editEvent = (event) => {
    setUserText(event.target.value);
  };

  let [profileButton, setProfileButton] = useState(false);
  // let [saveButton, setSaveButton] = useState(false);
  //getting the value of the button profile and activate the textareas
  //using useState
  const handleProfileButton = (event) => {
    // setProfileButton(true);
    setProfileButton(!profileButton);
  };

  return (
    <>
      <NavBar />

      <div className="body-Profile">
        <Row>
          <Col xs={12} sm={12} md={3} className="flow-box">
            <div className="img-box-profile p-2 text-center">
              <ListGroup.Item>
                <Image
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  fluid
                  roundedCircle
                />
              </ListGroup.Item>
            </div>

            <div
              className="bio-box-profile-edit"
              style={{ display: profileButton ? "inline" : "none" }}
            >
              <ListGroup.Item
                className="Principal-Container"
                // sx={{ p: 1.5, m: 1.5 }}
              >
                {/* <ListGroup.Item className="text-center text-light border-0"> */}
                <Stack>
                  <TextField
                    id="nombreUsuario"
                    label="Escribe tu nombre"
                    variant="filled"
                    defaultValue=""
                    // value={userText}
                    sx={{
                      p: 1.5,
                      m: 1.5,
                      input: { color: "black" },
                      background: "#FFF",
                      label: { color: "black" },
                      // color: "text.primary",
                    }}
                  />
                  <TextField
                    id="nombreUsuario"
                    label="Escribe tu rol"
                    variant="filled"
                    defaultValue=""
                    // value={userText}
                    sx={{
                      p: 1.5,
                      m: 1.5,
                      input: { color: "black" },
                      background: "#FFF",
                      label: { color: "black" },
                      // color: "text.primary",
                    }}
                  />
                  <TextField
                    id="nombreUsuario"
                    label="Autobiografía"
                    variant="filled"
                    defaultValue=""
                    multiline
                    rows={2}
                    // value={userText}
                    sx={{
                      p: 1.5,
                      m: 1.5,
                      input: { color: "black" },
                      background: "#FFF",
                      label: { color: "black" },
                      // color: "text.primary",
                    }}
                  />
                  {/* <input
                    className="p-2 m-3"
                    value={userText}
                    onChange={handleTextChange}
                    placeholder="Escribe tu nombre"
                  />
                  <input
                    className="p-2 m-3"
                    value={userText}
                    onChange={handleTextChange}
                    placeholder="escribe tu rol"
                  />
                  <textarea
                    className="p-2 m-3"
                    value={userText}
                    onChange={handleTextChange}
                    placeholder="Agrega una pequeña biografía"
                    rows={2}
                  /> */}
                  <Form.Group controlId="formFile" className="mb-3 p-2 m-3">
                    <Form.Control type="file" />
                  </Form.Group>
                </Stack>
              </ListGroup.Item>
            </div>

            <div
              className="bio-box-profile-save"
              style={{ display: !profileButton ? "inline" : "none" }}
            >
              <ListGroup.Item className=" Principal-Container text-center text-light border-0">
                <h4 className=" text-profile text-capitalize text-light">
                  Juan González
                </h4>
                <h5 className=" text-profile text-capitalize text-light">
                  Bajista
                </h5>
                <p className=" text-profile-2">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. asdasdasdadas This is a longer card with supporting
                  text below as a natural lead-in to additional content. This
                  content is a little bit longer. asdasdasdadas
                </p>
              </ListGroup.Item>
            </div>

            <ListGroup.Item className="text-center ">
              <Button
                className="m-2"
                variant="success"
                onClick={handleProfileButton}
                style={{ display: profileButton ? "none" : "inline" }}
              >
                Editar perfil
              </Button>
              <Button
                className="m-2"
                variant="success"
                onClick={handleProfileButton} // the function of hide and show it's done in this button
                style={{ display: profileButton ? "inline" : "none" }}
              >
                Guardar cambios
              </Button>
            </ListGroup.Item>
          </Col>

          <Col xs={12} sm={12} md={9}>
            {/* <section className="buttons-container text-center"> */}
            <Box
              sx={{
                m: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Grid container spacing={2}>
                <Grid xs={12}>
                  <Stack direction="row" spacing={4}>
                    <Button variant="success" href="#">
                      Amigos
                    </Button>
                    <Button variant="success" href="#">
                      Mis eventos
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
            {/* </section> */}

            <form>
              <Grid container spacing={2} sx={{ m: 1, p: 1 }}>
                <Grid xs={12} md={6}>
                  <Form.Control
                    as="input"
                    placeholder="Título de la publicación"
                    name="text"
                    onChange={setField}
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <Form.Control
                    as="input"
                    placeholder="Pie de imagen"
                    name="text"
                    onChange={setField}
                  />
                </Grid>
                <Grid xs={12} md={12}>
                  <Form.Control
                    as="textarea"
                    placeholder="Detalles del evento"
                    name="text"
                    rows={4}
                    onChange={setField}
                  />
                </Grid>
              </Grid>
              <Grid xs={12}>
                <Row>
                  <Box
                    sx={{
                      m: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <Grid container spacing={3}>
                      {/* <Stack direction="row" spacing={1}> */}
                      <Form.Group controlId="formFile" className="m-1">
                        <Form.Control type="file" />
                      </Form.Group>
                      {/* <Button className="ms-auto" variant="success" type="file">
                      Foto/Video
                    </Button> */}
                      <Button
                        // className="ms-auto"
                        variant="success"
                        href="#"
                        onClick={saveFeed}
                      >
                        Publicar
                      </Button>
                      {/* </Stack> */}
                    </Grid>
                  </Box>
                </Row>
              </Grid>
            </form>

            <section className="form-box-2">
              <Row>
                <Box
                  sx={{
                    m: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <Grid container spacing={2}>
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
                  </Grid>
                </Box>
              </Row>

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
