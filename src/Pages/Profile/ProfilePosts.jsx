import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
// import Stack from "react-bootstrap/Stack";
import React, { useEffect, useRef } from "react";
import { useState } from "react";

import { FeedCards } from "./FeedCards/FeedCards";
import img1 from "../../Img/2sd.jpg";
//from MUI React
import Grid from "@mui/material/Unstable_Grid2";
import Chip from "@mui/material/Chip";
import "./Profile.css";

export default function ProfilePosts({
  setField,
  saveFeed,
  feddData,
  deletePost,
}) {
  const [titleExists, setTitleExists] = useState(false);
  const [footerExists, setFooterExists] = useState(false);
  const [detailsExists, setDetailsExists] = useState(false);

  const handleTitleInput = (event) => {
    setField(event);
    setTitleExists(event.target.value.length === 0);
  };
  const handleFooterInput = (event) => {
    setField(event);
    setFooterExists(event.target.value.length === 0);
  };
  const handleDetailsInput = (event) => {
    setField(event);
    setDetailsExists(event.target.value.length === 0);
  };

  return (
    <>
      <Col xs={12} sm={12} md={12} lg={9}>
        <Row>
          <Col>
            {/*///////////////////////////Button Section /////////////////////////////*/}
            <div className="Principal-Container-tittle">
              <h3>Publica un evento</h3>
            </div>
          </Col>
        </Row>
        {/*///////////////////////////Publications Section /////////////////////////////*/}
        <form>
          <div className="Principal-Container-2">
            <Grid container spacing={2} sx={{ m: 1, p: 1 }}>
              <Grid xs={12} md={4}>
                <Form.Control
                  as="input"
                  placeholder="Título de la publicación"
                  name="Title"
                  onChange={handleTitleInput}
                  onClick={handleTitleInput}
                />
                {titleExists ? (
                  <div
                    className="alert alert-danger my-1 text-center"
                    role="alert"
                  >
                    Inserta título
                  </div>
                ) : (
                  <div></div>
                )}
              </Grid>
              <Grid xs={12} md={4}>
                <Form.Control
                  as="input"
                  placeholder="Pie de imagen"
                  name="imgFooter"
                  onChange={handleFooterInput}
                  onClick={handleFooterInput}
                />
                {footerExists ? (
                  <div
                    className="alert alert-danger my-1 text-center"
                    role="alert"
                  >
                    Inserta pie de foto
                  </div>
                ) : (
                  <div></div>
                )}
              </Grid>
              <Grid xs={12} md={4}>
                <Form.Group controlId="formFile" className="m-1">
                  <Form.Control type="file" />
                </Form.Group>
              </Grid>
              <Grid xs={12} md={12}>
                <Form.Control
                  as="textarea"
                  placeholder="Detalles del evento"
                  name="text"
                  rows={4}
                  onChange={handleDetailsInput}
                  onClick={handleDetailsInput}
                />
                {detailsExists ? (
                  <div
                    className="alert alert-danger my-1 text-center"
                    role="alert"
                  >
                    Inserta detalles
                  </div>
                ) : (
                  <div></div>
                )}
              </Grid>
            </Grid>
          </div>
          <Grid xs={12}></Grid>
        </form>
        {/*///////////////////////////Feed Section /////////////////////////////*/}
        <section className="form-box-2">
          <Row>
            <Col>
              {/*///////////////////////////Button Section /////////////////////////////*/}
              <div className="Principal-Container-3">
                <Button
                  className="postButtonProPost"
                  variant="success"
                  onClick={saveFeed}
                  disabled={titleExists || footerExists || detailsExists}
                >
                  Publicar
                </Button>
                <DropdownButton
                  variant="success"
                  id="dropdown-basic"
                  title="Ordenar"
                  drop="up"
                >
                  <Dropdown.Item href="#/action-1">Más reciente</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Más antiguo</Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
          </Row>
          <Row>
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
                  cardSizeH={200}
                />
              ))}
            </div>
          </Row>
        </section>
      </Col>
    </>
  );
}
