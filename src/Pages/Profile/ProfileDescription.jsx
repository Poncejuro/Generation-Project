
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Box from '@mui/material/Box';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Stack from "react-bootstrap/Stack";
import React from "react";

//from MUI React
import TextField from "@mui/material/TextField";

import Stack from "@mui/material/Stack";

import "./Profile.css";

export default function ProfileDescription({ profileButton, handleProfileButton }) {
  return (
    <>
      <Col lg={3} md={12} className="flow-box">
        {/*///////////////////////////Img Profile/////////////////////////////*/}
        <div className="img-box-profile p-2 text-center">
          
          <ListGroup.Item>
            <Box
              component="img"
              sx={{

                maxWidth: { xs: 225, sm: 225, md: 225, lg: 275 },
                borderRadius: "50%"
              }}
              alt="The house from the offer."
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
            />
          </ListGroup.Item>
        </div>
        {/*///////////////////////////Biography Section /////////////////////////////*/}
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
        <div className="Principal-Container">
          <div style={{ display: !profileButton ? "inline" : "none" }}>
            <ListGroup.Item className=" text-center text-light">
              <h4 className=" text-profile text-capitalize text-light">
                Juan González
              </h4>
              <h5 className=" text-capitalize text-light">Bajista</h5>
              <p className=" text-profile">
                This is a longer card with supporting text below as a
                natural lead-in to additional content. This content is a
                little bit longer. asdasdasdadas This is a longer card with
                supporting text below as a natural lead-in to additional
                content. This content is a little bit longer. asdasdasdadas
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
        </div>
      </Col>
    </>
  )
}
