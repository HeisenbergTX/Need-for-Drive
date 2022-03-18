import React from "react";
import s from "./Dots.module.css";
import cn from "classnames";
import { slides } from "../slides";

export const Dots = ({ activeSlide }: any) => {
  return (
    <section className={s.dots}>
      <div
        className={cn(s.dot, {
          [s.activeDot]: slides[0].id === slides[activeSlide].id,
        })}
      />
      <div
        className={cn(s.dot, {
          [s.activeDot]: slides[1].id === slides[activeSlide].id,
        })}
      />
      <div
        className={cn(s.dot, {
          [s.activeDot]: slides[2].id === slides[activeSlide].id,
        })}
      />
      <div
        className={cn(s.dot, {
          [s.activeDot]: slides[3].id === slides[activeSlide].id,
        })}
      />
    </section>
  );
};
