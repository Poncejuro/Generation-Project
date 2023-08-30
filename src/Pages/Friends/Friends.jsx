import { FriendCards } from "../../Components/FriendCards/FriendCards";
import { NavBar } from "../../Components/Navbar";
import { friendList } from "../../utils/friends";
import '../../Components/FriendCards/FriendCards.css'
import {useState} from "react";
import Button from 'react-bootstrap/Button';

export const Friends = () => {

  const [miArray, setMiArray] = useState([]);

  const updateData = () => {
    const jsonData = localStorage.getItem("nakamasData");
    const objectData = JSON.parse(jsonData);
    console.log(objectData); //testing
    setMiArray([...miArray, objectData]);
};

  return (
    <>
      <NavBar />
      <Button variant="primary" onClick={updateData}>Actualizar</Button>{' '}
      <section className="friends-about d-flex">
        <div className="friendsCard">{miArray.map((aux) => (
          <FriendCards
            key={1}
            name={aux.usuario}
            rol={aux.Rol}
            bio={aux.Bibliografia}
            alt={"aqui debe haber una foto"}
            imgSize={("250px")} />
        ))}</div>

      </section>

    </>
  )
}