import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
            <img src={logo} style={{ width: '200px', height: 'px', margin: 'auto', display:'block' }} alt={alt} />
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
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-outline-success" type="button">Reservar</button>
  <button class="btn btn-outline-light" type="button">Ignorar evento</button>
</div>
      </div>
    </>
  );
};