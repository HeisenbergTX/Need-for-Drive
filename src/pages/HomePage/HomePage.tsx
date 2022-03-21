import React from "react";
import style from "./HomePage.module.css";
import { Main } from "../../components/organisms/Main/Main";
import { Slider } from "../../components/organisms/Slider/Slider";

export const HomePage = () => {
  return (
    <section className={style.homePage}>
      <Main />
      <article className={style.slider}>
        <Slider />
      </article>
    </section>
  );
};
