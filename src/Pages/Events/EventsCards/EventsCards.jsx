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
    
    <div className="card text-center" style={{ width: cardSizeW, height: "auto" }} key={keyDiv}>
  <Row>
  <Col className="sectionL" xs={12} sm={12} md={15}>
  <img src={logo} style={{ width: '150px', height: '150px', margin: 'auto', display: 'block', marginBottom: '20px', borderRadius: '3%' }} alt={alt} />
</Col>




    <Col className="sectionR" xs={12} sm={12} md={15} style={{ textAlign: 'left' }}>
      {console.log(title)}
      <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>{ETitle}</h3>
      <p style={{ fontSize: '14px', marginBottom: '8px' }}>{text}</p>
      <p style={{ fontSize: '12px', marginBottom: '4px' }}>{date}</p>
      <p style={{ fontSize: '12px', marginBottom: '4px' }}>{time}</p>
      <p style={{ fontSize: '12px', marginBottom: '4px' }}>{location}</p>
    </Col>
  </Row>
        <div class="contenedor-botones">
      
                    <Button className="me-1" variant="success" href="#">
                      Mis Amigos
                    </Button>
                    <Button className="me-1" variant="success" href="#">
                      Mis eventos
                    </Button>
                  </div>



      </div>
    </>
  );
};
