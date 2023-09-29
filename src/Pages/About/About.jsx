import { NavBar } from "../Navbar";
import { Cards } from "./Cards/Cards";
import { OursCards } from "./OursCards/OursCards";
import { intentions, team } from "../../utils/constants";
import "./About.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const About = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2001 },
      items: 3 // Cambiamos de 3 a 1 elemento visible para superLargeDesktop
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 2 // Cambiamos de 2 a 1 elemento visible para desktop
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 599, min: 0 },
      items: 1
    }
  };

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
       
        <div className="carousel-box">
          <Carousel
            responsive={responsive} 
            removeArrowOnDeviceType={["mobile","tablet","desktop","superLargeDesktop"]}
            infinite={true}
            centerMode={true}
          >
            {team.map((aux, index) => (
              <OursCards
                key={index}
                name={aux.name}
                rol={aux.rol}
                img={aux.img}
                text={aux.text}
                linkedin={aux.linkedin}
                git={aux.git}
              />
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};