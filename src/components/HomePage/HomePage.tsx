import React from "react";
import s from "./HomePage.module.css";
import { Main } from "./Main/Main";
import { Slider } from "./Slider/Slider";

export const HomePage = () => {
  return (
    <section className={s.homePage}>
      <Main />
      <article className={s.slider}>
        <Slider />
      </article>
    </section>
  );
};
