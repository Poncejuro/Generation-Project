import { NavBar } from "../../Components/Navbar";
import { Cards } from "../../Components/Cards/Cards";
import { OursCards } from "../../Components/OursCards/OursCards";
import { intentions, team } from "../../utils/constants";
import "./About.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const About = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 2
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
       
        {/*//https://www.npmjs.com/package/react-multi-carousel*/}
        <div className="carousel-box">
          <Carousel responsive={responsive} 
          removeArrowOnDeviceType={["desktop"]}
          infinite={true}
          centerMode={true}
          >
            {team.map((aux,index) => (
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
