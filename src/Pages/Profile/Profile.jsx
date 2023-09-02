import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
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
import Stack from "@mui/material/Stack";
import initialData from "../../utils/feedPosts.json";
import "./Profile.css";

export const Profile = () => {
  const firstData = initialData;

  //setup de los errores
  const [titleError, setTitleError] = useState("");
  const [imgFooterError, setImgFooterError] = useState("");
  const [textError, setTextError] = useState("");

  const [form, setForm] = useState({});
  const setField = (field) => {
    setForm({
      ...form,
      [field.target.name]: field.target.value,
    });

    //validaciones de que no este vacio

    if (field.target.name === "Title" && !field.target.value.trim()) {
      setTitleError("Agregue texto antes de publicar");
    } else {
      setTitleError("");
    }

    if (field.target.name === "imgFooter" && !field.target.value.trim()) {
      setImgFooterError("Agregue texto antes de publicar");
    } else {
      setImgFooterError("");
    }

    if (field.target.name === "text" && !field.target.value.trim()) {
      setTextError("Agregue texto antes de publicar");
    } else {
      setTextError("");
    }

  };

  const [posts, setPosts] = useState([]);
  const saveFeed = () => {

    //if que valida que no haya errores
    if (!titleError && !imgFooterError && !textError) {
      const updatedPosts = [...posts, form, ...firstData];
      setPosts(updatedPosts);
      localStorage.setItem("feedData", JSON.stringify(updatedPosts));
    }
  };

  const [feddData, setObjectData] = useState([]);
  const updateData = () => {
    const jsonData = localStorage.getItem("feedData");
    const objectData = JSON.parse(jsonData);
    console.log(objectData);
    setObjectData(objectData);
  };

  const deleteAllPosts = () => {
    localStorage.removeItem("feedData");
    localStorage.setItem("feedData", JSON.stringify([]));
    updateData();
  };

  const deletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("feedData", JSON.stringify(updatedPosts));
    updateData();
  };

  let [profileButton, setProfileButton] = useState(false);

  const handleProfileButton = (event) => {
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
              <ListGroup.Item className="Principal-Container">
                <Stack>
                  <TextField
                    id="nombreUsuario"
                    label="Escribe tu nombre"
                    variant="filled"
                    defaultValue=""
                    sx={{
                      p: 1.5,
                      m: 1.5,
                      input: { color: "black" },
                      background: "#FFF",
                      label: { color: "black" },
                    }}
                  />
                  <TextField
                    id="nombreUsuario"
                    label="Escribe tu rol"
                    variant="filled"
                    defaultValue=""
                    sx={{
                      p: 1.5,
                      m: 1.5,
                      input: { color: "black" },
                      background: "#FFF",
                      label: { color: "black" },
                    }}
                  />
                  <TextField
                    id="nombreUsuario"
                    label="Autobiografía"
                    variant="filled"
                    defaultValue=""
                    multiline
                    rows={2}
                    sx={{
                      p: 1.5,
                      m: 1.5,
                      input: { color: "black" },
                      background: "#FFF",
                      label: { color: "black" },
                    }}
                  />

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

            <form>
              <Grid container spacing={2} sx={{ m: 1, p: 1 }}>
                <Grid xs={12} md={6}>
                  <Form.Control
                    as="input"
                    placeholder="Título de la publicación"
                    name="Title"
                    onChange={setField}
                  />
                  {titleError && <p className="text-danger">{titleError}</p>} {/*agrega el p cuando haya error*/}
                </Grid>
                <Grid xs={12} md={6}>
                  <Form.Control
                    as="input"
                    placeholder="Pie de imagen"
                    name="imgFooter"
                    onChange={setField}
                  />
                  {imgFooterError && <p className="text-danger">{imgFooterError}</p>}
                </Grid>
                <Grid xs={12} md={12}>
                  <Form.Control
                    as="textarea"
                    placeholder="Detalles del evento"
                    name="text"
                    rows={4}
                    onChange={setField}
                  />
                  {textError && <p className="text-danger">{textError}</p>}
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
                      <Form.Group controlId="formFile" className="m-1">
                        <Form.Control type="file" />
                      </Form.Group>
                      <Button variant="success" href="#" onClick={saveFeed}>
                        Publicar
                      </Button>
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
                    <Button
                      className="me-6"
                      variant="success"
                      href="#"
                      onClick={deleteAllPosts}
                    >
                      deleteAllPosts
                    </Button>
                  </Grid>
                </Box>
              </Row>
              <div className="feed-box">
                {feddData.map((aux, index) => (
                  <FeedCards
                    keyDiv={index}
                    key={index}
                    logo={img1}
                    imgFooter={aux.imgFooter}
                    title={aux.Title}
                    text={aux.text}
                    detePost={() => deletePost(index)}
                    imgSize={150}
                    cardSizeH={200}
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
