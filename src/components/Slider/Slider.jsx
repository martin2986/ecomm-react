import React, { useState, useEffect } from "react";
import classes from "./Slider.module.scss";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imgs = [
    "https://images.pexels.com/photos/7873590/pexels-photo-7873590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9775856/pexels-photo-9775856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const slideLength = imgs.length;
  let slideInterVal;
  const intervalTime = 5000;

  const nextSLide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  const auto = () => {
    slideInterVal = setInterval(nextSLide, intervalTime);
  };

  useEffect(() => {
    auto();
    return () => clearInterval(slideInterVal);
  }, [currentSlide, slideInterVal]);

  return imgs.map(
    (img, id) =>
      id === currentSlide && (
        <div
          className={
            id === currentSlide && `${classes.slide} ${classes.current}`
          }
        >
          <img className={classes.catImg} src={img} alt="" />
        </div>
      )
  );
};

export default Slider;
