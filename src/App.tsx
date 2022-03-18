import React from "react";
import s from "./App.module.css";
import { Aside } from "./components/Aside/Aside";
import { BurgerMenu } from "./components/Aside/BurgerMenu/BurgerMenu";
import { Language } from "./components/Aside/Language/Language";
import { HomePage } from "./components/HomePage/HomePage";

function App() {
  return (
    <section className={s.section}>
      <article className={s.aside}>
        <Aside />
        <Language />
      </article>
      <HomePage />
    </section>
  );
}

export default App;
