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
        <h2>{footer}</h2>
        <h2>{event_details}</h2>
        <Button id="eventCardsButtons" variant="success" href="#">
          Me interesa
        </Button>
        <Button id="eventCardsButtons1" variant="success" href="#">
          No me interesa
        </Button>




      </div>
    </>
  );
};
