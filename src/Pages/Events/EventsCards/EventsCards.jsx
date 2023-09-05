import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Button from "react-bootstrap/Button";
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
    
    <div className="card text-center" style={{ width: cardSizeW, height: "auto" }} key={keyDiv}>
  <Row>
    <Col className="sectionL" xs={12} sm={12} md={15}>
      <img src={logo} style={{ width: '150px', height: '150px', margin: 'auto', display: 'block' }} alt={alt} />
    </Col>

    <Col className="sectionR" xs={12} sm={12} md={15} style={{ textAlign: 'left' }}>
  {console.log(title)}
  <h3 style={{ fontSize: '16px' }}>{ETitle}</h3>
  <p style={{ fontSize: '14px' }}>{text}</p>
  <p style={{ fontSize: '12px' }}>{date}</p>
  <p style={{ fontSize: '12px' }}>{time}</p>
  <p style={{ fontSize: '12px' }}>{location}</p>
</Col>

  </Row>
        <div class="contenedor-botones">
  <button class="btn btn-success" type="button">Reservar</button>
  <button class="btn btn-danger" type="button">Ignorar evento</button>
</div>



      </div>
    </>
  );
};
