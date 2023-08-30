import { FriendCards } from "../../Components/FriendCards/FriendCards";
import { NavBar } from "../../Components/Navbar";
import { friendList } from "../../utils/friends";
import '../../Components/FriendCards/FriendCards.css'


export const Friends = () => {
  return (
    <>
      <NavBar />
      <section className="friends-about d-flex">
        <div className="friendsCard">{friendList.map((aux) => (
          <FriendCards
            key={aux.id}
            name={aux.name}
            img={aux.img}
            rol={aux.rol}
            bio={aux.bio}
            alt={"aqui debe haber una foto"}
            imgSize={("250px")} />
        ))}</div>

      </section>

    </>
  )
}