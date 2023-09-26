import "./EventsCards.css";
import { Button } from "react-bootstrap";

export const EventsCards = ({
  index, img, alt, title, footer, event_details
}) => {
  return (
    <>
      <div className="eventsCards" key={index}>
        <img src={img} alt={alt}  /*style={{ width: '150px', height: '150px', margin: 'auto', display:'block' }}*/
        />
        <h2>{title}</h2>
        <h3>{footer}</h3>
        <h3 className="Event_details">{event_details}</h3>
        

         <Button id="eventCardsButtons" className="me-1" variant="success" href="#">
          Me interesa
        </Button>
        <Button id="eventCardsButtons1" className="me-1" variant="success" href="#">
          No me interesa
        </Button>
        </div>
        
    </>
  );
};
