
import "./EventsCards.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

export const EventsCards = ({
  index, img, alt, title, footer, event_details
}) => {
  const [hidden, setHidden] = useState(false);// rastrear si un elemento debe estar oculto o visible en el componente
  const [liked, setLiked] = useState(false); // Estado para realizar un seguimiento de "Me interesa"

  const handleLike = () => {
    // Mostrar la alerta para "Me interesa"
    Swal.fire({
      title: "Genial",
      text: "Nos alegra saber que te gusta este evento.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
    setLiked(true); // Marcar como "Me interesa" cuando se hace clic en el botón
  };

  const handleDislike = () => { 
    // Mostrar la alerta para "No me interesa"
    Swal.fire({
     title: "Este evento no te interesa",
      text: "Se eliminará de tu lista",
      icon: "warning",
      confirmButtonText: "Confirmar",
    

    });

    // Ocultar la tarjeta de evento al hacer clic en "No me interesa"
    setHidden(true);
  };

  return (
    <>
       {!hidden && (
        <div className="eventsCards" key={index}>
          <h2 className="titleH2">{title}</h2>
          <img src={img} alt={alt} />
          <h3 className="footerh2">{footer}</h3>
          <h3 className="Event_details">{event_details}</h3>
          <Button
            id="eventCardsButtons1"
            className="me-1 btn btn-success btn-brillo"
            onClick={handleLike}
            disabled={liked} // Desactiva el botón si ya se ha marcado como "Me interesa"

            //Boton me interesa
          > 
        
            Me interesa
          </Button>
          <Button
            id="eventCardsButtons"
            className="me-1 btn btn-success btn-brillo"
            onClick={handleDislike}
            //Boton no me interesa
          >
            No me interesa
          </Button>
        </div>
      )}
    </>
  );
};