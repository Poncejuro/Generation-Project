import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

import { NavBar } from "../Components/Navbar";
import { Cards } from "../Components/Cards";
import { FeedCards } from "../Components/FeedCards";
import { publications } from "../utils/publications";
import "../styles/Profile.css";
import img1 from "../Img/2sd.jpg";

export const Profile = () => {
  return (
    <>
      <NavBar />
      <Container className="principal" fluid>
        <Row>
          <Col className="grid-L" lg={3} md={3} sm={4} xs={12} >
            <section className="photo">
              <Image src={img1} style={{ width: 100 }} />
            </section>

            <section className="cuenta">
              <Button variant="outline-primary" className="btn">
                Ni idea que sea esto
              </Button>{" "}
              <Cards text={"Desarrollador"} imgSize={100} key={1} />
              <Button variant="outline-primary" className="btn">
                Cerrar Sesión
              </Button>{" "}
            </section>
          </Col>

          <Col className="grid-R" xs={12} md={9}>
            <section className="buttons">
              <Button variant="outline-primary" className="btn">
                Inicio
              </Button>{" "}
              <Button variant="outline-primary" className="btn">
                Amigos
              </Button>{" "}
              <Button variant="outline-primary" className="btn">
                Estatus
              </Button>{" "}
              <Button variant="outline-primary" className="btn">
                Mis Eventos
              </Button>{" "}
            </section>

            <section>
              <Form className="publications">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Default file input example</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
                <Button variant="outline-primary" className="btn">
                  Publicar
                </Button>{" "}
              </Form>
            </section>

            <section className="feed">
              <Form.Select size="lg">
                <option>Mas reciertes</option>
                <option>Mas antiguos</option>
                <option>Etc</option>
              </Form.Select>

              <div className="feed-box">
                <Row>
                  <Col className="grid-L-In" xs={12} md={2}>
                    {publications.map((aux) => (
                      <Cards
                        logo={img1}
                        imgSize={100}
                        key={aux.id}
                        cardSizeH={300}
                        text={"ejemplode de datos"}
                      />
                    ))}
                  </Col>
                  <Col className="grid-R-In" xs={12} md={10}>
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
