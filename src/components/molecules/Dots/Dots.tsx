import React from "react";
import style from "./Dots.module.css";
import cn from "classnames";
import { slides } from "../../organisms/Slider/slides";
import { Dot } from "../../atoms/Dot/Dot";

export const Dots = ({ activeSlide, setActiveSlide }: any) => {
  return (
    <section className={style.dots}>
      {slides.map((el) => {
        return (
          <article key={el.id}>
            <Dot
              id={el.id}
              activeSlide={activeSlide}
              setActiveSlide={setActiveSlide}
            />
          </article>
        );
      })}
    </section>
  );
};
