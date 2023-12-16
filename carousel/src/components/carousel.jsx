/* eslint-disable */
import { useState } from "react";
import { TestiData } from "./carouselData";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { BsBraces } from "react-icons/bs";
import { nin, nin1, naag } from "../assets";

/* BsBraces */
const Corousel = () => {
  const [slide, setslide] = useState(0);

  const nextSlide = () => {
    setslide(slide === TestiData.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setslide(slide === 0 ? TestiData.length - 1 : slide - 1);
  };

  return (
    <>
      <div className="haye">
        <h1 className="testiTitle">Testimonial</h1>
        <h3 className="bracesText">Our Client for past months </h3>
        <section className="testimonial">
          <FaAngleLeft className="arrow left" onClick={prevSlide} />
          {TestiData.map((item, index) => {
            return (
              <div
                className={slide === index ? "testiHaye" : "testihaye hidden"}
              >
                <div className="wrap">
                  <img className="image" width={100} src={item.img} alt="" />
                  <h1>{item.name}</h1>
                </div>
                <p>{item.desc}</p>
              </div>
            );
          })}
          <FaAngleRight className="arrow right" onClick={nextSlide} />
        </section>

        <span className="whites">
          {TestiData.map((_, index) => {
            return (
              <button
                onClick={() => setslide(index)}
                className={slide === index ? "gray" : "whiteInactive"}
                key={index}
              ></button>
            );
          })}
        </span>
      </div>
    </>
  );
};

export default Corousel;
/* 

1. `nextSlide` function:
   - When the `nextSlide` function is called, it first checks if the current slide is the last slide in the carousel.
    It does this by comparing the `slide` variable (which represents the current slide index)
     with the length of the `TestiData` array minus 1.
   - If the current slide is the last slide, `slide === TestiData.length - 1`, it means we're at 
   the end of the carousel. In this case, the function sets the `slide` state to 0,
    which means it loops back to the first slide.
   - If the current slide is not the last slide, `slide !== TestiData.length - 1`, it
    means we can simply increment the `slide` state by 1, moving to the next slide.
   - The `setslide` function is then called with the new slide index, updating the state
    and causing the component to re-render with the updated slide.

2. `prevSlide` function:
   - Similarly, the `prevSlide` function checks if the current slide is the first slide in the carousel.
    It does this by comparing the `slide` variable with 0.
   - If the current slide is the first slide, `slide === 0`, it means we're at the beginning of the 
   carousel. In this case, the function sets the `slide` state to the last slide index, `TestiData.length - 1`, 
   effectively looping back to the last slide.
   - If the current slide is not the first slide, `slide !== 0`, it means we can simply decrement
    the `slide` state by 1, moving to the previous slide.
   - Again, the `setslide` function is called with the new slide 
   index to update the state and trigger a re-render.


*/
