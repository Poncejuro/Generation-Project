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