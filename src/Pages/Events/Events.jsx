import { NavBar } from "../Navbar"
import { EventsCards } from "./EventsCards/EventsCards";

import eventsData from "../../utils/events";
import axios from "axios";
import React, { useEffect,useState } from "react";



export const Events = () => {

  ///////////////////////////////API EXAMPLE//////////////////////
  const [dataBack, setDataBack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realiza una solicitud GET a la API
    axios.get('http://localhost:5000/api/v1/publications')
      .then(response => {
        setDataBack(response.data);
        setLoading(false);
        console.log('response data');
        console.log(response.data);
        console.log('hook back');
        console.log(dataBack);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
        setLoading(false);
      });
  }, []);
  ///////////////////////////////////////////////////////////////

  const events = dataBack;

  const updatedFriendList = [...events];

  for (let i = 0; i < updatedFriendList.length; i++) {
    updatedFriendList[i].img = `https://picsum.photos/200?random=${i}`;
  }
  


  return (
    <>
      <NavBar />
      <div id="events-container " className="body-events align-content-center">
        <div className="EventsCard">
          {events.map((event, index) => (
            <EventsCards
              key={index}
              img={event.img}
              title={event.title}
              footer={event.footer}
              event_details={event.eventDetails}

            />
          ))}
        </div>
      </div>
    </>
  );
};