
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Box from '@mui/material/Box';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Stack from "react-bootstrap/Stack";


//from MUI React
import TextField from "@mui/material/TextField";

import Stack from "@mui/material/Stack";

import "./Profile.css";

import axios from "axios";
import React, { useEffect, useState} from "react";


export default function ProfileDescription({ profileButton, handleProfileButton }) {

  const myFullName = JSON.parse(localStorage.getItem('userDataLogin'));

  const descriptionPro = null;
  const [dataProfile, setDataProfile] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // Realiza una solicitud GET a la API
    axios.get('http://localhost:5000/api/v1/profiles/' + myFullName[0])
      .then(response => {
        setDataProfile(response.data);
        setLoading(false);
        //console.log('response data');
        //console.log(response.data);
        //console.log('hook back');
        //console.log(dataBack);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
        setLoading(false);
      });
  }, []);

  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const postProfileData = () => {

    //console.log(typeof(myFullName[0]));

    const postData = {
      
      role: "Hitman",
      biography: "I'm a fucking killing machine.",
      photo: "johnMcClane.jpg",
      user: {
        userId: "11"
      }
    };

    axios
      .post('http://localhost:5000/api/v1/profiles', postData) //form
      .then((response) => {
        setResponseData(response.data);
        setError(null);
      })
      .catch((error) => {
        setResponseData(null);
        setError(error.message);
      });

  }

  const bothButtons = () => {
    postProfileData();
    handleProfileButton();
  }

  console.log(dataProfile);

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

              {/* <TextField
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
              /> */}

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
            <ListGroup.Item className=" text-center">
              <h4 className=" text-profile text-capitalize" >
                {myFullName[1]}
              </h4>
              <div className=" text-capitalize ">
                {descriptionPro ? (
                  descriptionPro(0)
                ) : (
                  <h5 className="alert alert-danger"> LLENAR ROL </h5>
                )}
              </div>
              <div className=" text-profile">
                {descriptionPro ? (
                  descriptionPro(0)
                ) : (
                  <h5 className="alert alert-danger"> LLENAR DESCRIPCION </h5>
                )}
              </div>
            </ListGroup.Item>
          </div>
          <ListGroup.Item className="text-center">
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
              onClick={bothButtons} // the function of hide and show it's done in this button
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
