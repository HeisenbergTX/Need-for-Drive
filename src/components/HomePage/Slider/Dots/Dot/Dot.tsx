import React from "react";
import s from "./Dot.module.css";
import cn from "classnames";
import { slides } from "../../slides";

export const Dot = ({ id, activeSlide, setActiveSlide }: any) => {
  const clickDotHandler = () => {
    if (id !== activeSlide) {
      setActiveSlide((state: number) => (state = id));
    }
  };

  return (
    <article
      onClick={clickDotHandler}
      className={cn(s.dot, {
        [s.activeDot]: id === slides[activeSlide].id,
      })}
    />
  );
};
