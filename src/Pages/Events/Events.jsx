import { NavBar } from "../Navbar";
import { EventsCards } from "./EventsCards/EventsCards";
import React from "react";
import eventsData from "../../utils/events";
import "./Events.css";
//import { Event } from "@mui/icons-material";
//import{ eventsList} from "../Events"


export const Events = () => {
  const events = eventsData;
  console.log(events);

 //Se agrego una api para generar imagenes aleatorias
const updatedFriendList = [...events];

for (let i = 0; i < updatedFriendList.length; i++) {
  updatedFriendList[i].img = `https://picsum.photos/200?random=${i}`;
}


  return (
    <>
      <NavBar />
      <div className="body-events align-content-center">
        <div className="events-box">
          {events.map((event, index) => (
            <EventsCards
              keyDiv={index}
              key={1}
              logo={event.img}
              ETitle={event.EventTitle}
              text={event.text}
              date={event.date}
              time={event.time}
              location={event.location}
              // detePost={() => deletePost(index)}
              imgSize={("250")}
              cardSizeH={("200")}
              
            />
          ))}
        </div>
      </div>
    </>
  );
};
