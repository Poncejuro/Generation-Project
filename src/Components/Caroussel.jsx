import { useState } from 'react';


export const Caroussel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    position: "abosolute",
    top: "50%",
    transform: "translate (0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  }

  const rightArrowStyles = {
    position: "abosolute",
    top: "50%",
    transform: "translate (0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  }

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <>
      <div>
        <div style={leftArrowStyles} onClick={goToPrevious}> X </div>
        <div style={rightArrowStyles} onClick={goToNext}> X </div>
        <div style={slideStyle}></div>
      </div>
    </>


  )
}