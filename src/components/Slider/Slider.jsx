import React, { useState, useEffect } from "react";
import classes from "./Slider.module.scss";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const imgs = [
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <img className={classes.catImg} key={id} src={img} alt="" />
        </div>
      )
  );
};

export default Slider;
