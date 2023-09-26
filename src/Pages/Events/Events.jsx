import { NavBar } from "../Navbar"
import { EventsCards } from "./EventsCards/EventsCards";
import React from "react";
import eventsData from "../../utils/events";
import "./Events.css";



export const Events = () => {
  const events = eventsData;

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
              key={index}
              img={event.img}
              title={event.title}
              footer={event.footer}
              event_details={event.event_details}

            />
          ))}
        </div>
      </div>
    </>
  );
};