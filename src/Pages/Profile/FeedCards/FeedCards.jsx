import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./FeedCards.css";

export const FeedCards = ({
  title,
  text,
  cardSizeW,
  logo,
  alt,
  imgSize,
  imgFooter,
  keyDiv,
  detePost,
}) => {
  return (
    <>
      <div
        className="feedCard"
        style={{ width: cardSizeW, height: "auto" }}
        key={keyDiv}
      >
        <Row>
          <Col className="sectionL" xs={12} sm={12} md={3}>
            <img src={logo} style={{ width: imgSize }} alt={alt} />
            <p>{imgFooter}</p>
            <Button style={{ width: imgSize }} variant="success" href="#" onClick={detePost}>
              Eliminar
            </Button>
          </Col>

          <Col className="sectionR" xs={12} sm={12} md={9}>
            <h3 className="justifyToLeftFC">{title}</h3>
            <p className="justifyToLeftFC">{text}</p>
          </Col>
        </Row>

       
      </div>
    </>
  );
};
