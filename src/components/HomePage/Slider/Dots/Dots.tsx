import React from "react";
import s from "./Dots.module.css";

import { slides } from "../slides";
import { Dot } from "./Dot/Dot";

export const Dots = ({ activeSlide, setActiveSlide }: any) => {
  return (
    <section className={s.dots}>
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
