import { FriendCards } from "../../Components/FriendCards/FriendCards";
import { NavBar } from "../../Components/Navbar";
import { friendList } from "../../utils/friends";


export const Friends = () => {
  return (
    <>
      <NavBar />
      <section className="friends-about">
        <div className="friendsCard">{friendList.map((aux) => (
          <FriendCards
            key={aux.id}
            name={aux.name}
            rol={aux.rol}
            bio={aux.bio} />
        ))}</div>

      </section>

    </>
  )
}