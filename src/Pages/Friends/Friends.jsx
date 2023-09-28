import { FriendCards } from "./FriendCards/FriendCards";
import { NavBar } from "../Navbar";
import { friendList } from "../../utils/friends";
import './FriendCards/FriendCards.css'
import React, { useState, useEffect } from "react";
import axios from "axios";


export const Friends = () => {

  ///////////////////////////////API EXAMPLE//////////////////////
  const [dataBack, setDataBack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Realiza una solicitud GET a la API
    axios.get('http://localhost:5000/api/v1/profiles')
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

  /*
  function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Realizar el fetch automático aquí
      fetch('https://reqres.in/api/users?delay=3')
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al cargar los datos:', error);
          setLoading(false);
        });
    }, []);
  }
  */

  const profiles = dataBack;

  //Se agrego una api para generar imagenes aleatorias
  const updatedFriendList = [...profiles];

  for (let i = 0; i < updatedFriendList.length; i++) {
    updatedFriendList[i].photo2 = `https://picsum.photos/200?random=${i}`;
  }

  return (
    <>
      <NavBar />
      <section className="friends-container">
        <div className="friendsCard">{profiles.map((friend, index) => (
          <FriendCards
            key={index}
            name={friend.name}
            rol={friend.role}
            bio={friend.biography}
            photo={friend.photo2}
            alt={"aqui debe haber una foto"}
          />
        ))}</div>
      </section>
    </>
  )
};