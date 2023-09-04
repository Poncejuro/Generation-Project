import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./EventsCards.css";

export const EventsCards = ({
  title,
  text,
  cardSizeW,
  logo,
  alt,
  imgSize,
  keyDiv,
  detePost,
  ETitle,
  date,
  time,
  location,
}) => {
  return (
    <>
      <div
        className="card text-center"
        style={{ width: cardSizeW, height: "auto" }}
        key={keyDiv}
      >
        <Row>
          <Col className="sectionL" xs={12} sm={12} md={3}>
            <img src={logo} style={{ width: imgSize }} alt={alt} />
          </Col>

          <Col className="sectionR" xs={12} sm={12} md={9}>
            {console.log(title)}
            <h3>{ETitle}</h3>
            <p>{text}</p>
            <p>{date}</p>
            <p>{time}</p>
            <p>{location}</p>
          </Col>
        </Row>

        <Button variant="success" href="#" onClick={detePost}>
          Eliminar
        </Button>
      </div>
    </>
  );
};
