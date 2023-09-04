import { NavBar } from "../../Components/Navbar";
import { EventsCards } from "../../Components/EventsCards/EventsCards";
import React from "react";
import eventsData from "../../utils/events.json";
import "./Events.css";


export const Events = () => {
  const events = eventsData;
  console.log(events);

  return (
    <>
      <NavBar />
      <div className="body-events align-content-center">
        <div className="events-box">
          {events.map((event, index) => (
            <EventsCards
              keyDiv={index}
              key={index}
              logo={event.img}
              ETitle={event.EventTitle}
              text={event.text}
              date={event.date}
              time={event.time}
              location={event.location}
              // detePost={() => deletePost(index)}
              imgSize={150}
              cardSizeH={200}
            />
          ))}
        </div>
      </div>
    </>
  );
};
