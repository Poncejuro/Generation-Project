import { FriendCards } from "../../Components/FriendCards/FriendCards";
import { NavBar } from "../../Components/Navbar";
import { friendList } from "../../utils/friends";
import '../../Components/FriendCards/FriendCards.css'
import {useState, useEffect } from "react";


export const Friends = () => {

 
          
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
            }, []);}



return (
  <>
    <NavBar />
    <section className="friends-container">
      <h2>Personas que quizás conozcas</h2>
      <div className="friendsCard">{friendList.map((friend) => (
        <FriendCards
          key={1}
          name={friend.name}
          rol={friend.rol}
          bio={friend.bio}
          img={friend.img}
          alt={"aqui debe haber una foto"}
          imgSize={("250px")} />
      ))}</div>
    </section>
  </>
)
};