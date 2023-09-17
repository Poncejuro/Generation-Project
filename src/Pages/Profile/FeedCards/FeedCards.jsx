import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./FeedCards.css";
import "./FeedCardImage.css";

export const FeedCards = ({
  title,
  text,
  cardSizeW,
  logo,
  alt,
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
          <Col className="sectionL" xs={6} sm={3} md={3} lg={4} xl={5}>
            <img className="ImgSizeFeedCard" src={logo}  alt={alt} />
            <p className="TextSizeFeedCard" >{imgFooter}</p>
            <Button className="ImgSizeFeedCard" variant="success" href="#" onClick={detePost}>
              Eliminar
            </Button>
          </Col>

          <Col className="sectionR" xs={6} sm={9} md={9} lg={8} xl={7}>
            <h3 className="justifyToLeftFC">{title}</h3>
            <p className="justifyToLeftFC">{text}</p>
          </Col>
        </Row>

       
      </div>
    </>
  );
};
