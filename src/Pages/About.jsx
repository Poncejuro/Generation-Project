import { NavBar } from "../Components/Navbar";
import { Cards } from "../Components/Cards";
import { intentions, team } from "../utils/constants";

import img1 from "../Img/2sd.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <>
      <NavBar />

      <section className="body">
        <div className="texts">
          {intentions.map((aux) => (
            <Cards
              title={aux.title}
              text={aux.text}
              cardSizeW={500}
              cardSizeH={400}
              key={aux.id}
              margin={52.5}
            />
          ))}
        </div>

        <div className="people">
          {team.map((aux) => (
            <Cards
              title4={aux.name}
              text={aux.rol}
              logo={aux.img}
              imgSize={100}
              key={aux.id}
              margin={15}
            />
          ))}
        </div>
      </section>
    </>
  );
};
