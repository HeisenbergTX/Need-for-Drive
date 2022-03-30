import React from "react";
import style from "./Dot.module.css";
import cn from "classnames";
import { slides } from "../../organisms/Slider/slides";

export const Dot = ({ id, activeSlide, setActiveSlide }: any) => {
  const clickDotHandler = () => {
    if (id !== activeSlide) {
      setActiveSlide((state: number) => id);
    }
  };

  return (
    <article
      onClick={clickDotHandler}
      className={cn(style.dot, {
        [style.activeDot]: id === slides[activeSlide].id,
      })}
    />
  );
};
