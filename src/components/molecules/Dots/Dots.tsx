import React from "react";
import style from "./Dots.module.css";
import cn from "classnames";
import { slides } from "../../organisms/Slider/slides";

export const Dots = ({ activeSlide }: any) => {
  return (
    <section className={style.dots}>
      <div
        className={cn(style.dot, {
          [style.activeDot]: slides[0].id === slides[activeSlide].id,
        })}
      />
      <div
        className={cn(style.dot, {
          [style.activeDot]: slides[1].id === slides[activeSlide].id,
        })}
      />
      <div
        className={cn(style.dot, {
          [style.activeDot]: slides[2].id === slides[activeSlide].id,
        })}
      />
      <div
        className={cn(style.dot, {
          [style.activeDot]: slides[3].id === slides[activeSlide].id,
        })}
      />
    </section>
  );
};
