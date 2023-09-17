import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
// import Stack from "react-bootstrap/Stack";
import React from "react";
import { FeedCards } from "./FeedCards/FeedCards";
import img1 from "../../Img/2sd.jpg";
//from MUI React
import Grid from "@mui/material/Unstable_Grid2";
import "./Profile.css";

export default function ProfilePosts({
  setField,
  titleError,
  imgFooterError,
  textError,
  saveFeed,
  feddData,
  deletePost
}) {
  return (
    <>
      <Col xs={12} sm={12} md={12} lg={9}>
        {/*///////////////////////////Publications Section /////////////////////////////*/}
        <form>
          <div className="Principal-Container-2">
            <Grid container spacing={2} sx={{ m: 1, p: 1 }}>
              <Grid xs={12} md={4}>
                <Form.Control
                  as="input"
                  placeholder="Título de la publicación"
                  name="Title"
                  onChange={setField}
                />
                {titleError && (
                  <div class="alert alert-danger" role="alert">
                    {titleError}
                  </div>
                )}
              </Grid>
              <Grid xs={12} md={4}>
                <Form.Control
                  as="input"
                  placeholder="Pie de imagen"
                  name="imgFooter"
                  onChange={setField}
                />
                {imgFooterError && (
                  <div class="alert alert-danger" role="alert">
                    {imgFooterError}
                  </div>
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
                  onChange={setField}
                />
                {textError && (
                  <div class="alert alert-danger" role="alert">
                    {textError}
                  </div>
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
                <Button className="postButtonProPost" variant="success" href="#" onClick={saveFeed}>
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
  )
}
