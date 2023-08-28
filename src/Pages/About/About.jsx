import { NavBar } from "../../Components/Navbar";
import { Cards } from "../../Components/Cards/Cards";
import { OursCards } from "../../Components/OursCards/OursCards";
import { intentions, team } from "../../utils/constants";

import "./About.css";

export const About = () => {
  return (
    <>
      <NavBar />
      <section className="body-About">
        <div className="texts">
          {intentions.map((aux) => (
            <Cards 
              key={aux.id} 
              title={aux.title} 
              text={aux.text} />
          ))}
        </div>

        <div className="people">
          {team.map((aux) => (
            <OursCards
              key={aux.id}
              name={aux.name}
              rol={aux.rol}
              img={aux.img}
            />
          ))}
        </div>
      </section>
    </>
  );
};
