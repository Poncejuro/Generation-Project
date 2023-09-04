import { FriendCards } from "../../Components/FriendCards/FriendCards";
import { NavBar } from "../../Components/Navbar";
import { friendList } from "../../utils/friends";
import '../../Components/FriendCards/FriendCards.css'
import {useState} from "react";


export const Friends = () => {

  const [miArray, setMiArray] = useState([]);

  const updateData = () => {
    const jsonData = localStorage.getItem("nakamasData");
    const objectData = JSON.parse(jsonData);
    console.log(objectData); //testing
    setMiArray([...miArray, objectData]);
};

//Se agrego una api para generar imagenes aleatorias
const updatedFriendList = [...friendList];

for (let i = 0; i < updatedFriendList.length; i++) {
  updatedFriendList[i].img = `https://picsum.photos/200?random=${i}`;
}


return (
  <>
    <NavBar />
    <section className="friends-container">
      <h1>Personas que quizás conozcas</h1>
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