import React from "react";
import style from "./App.module.css";
import { Aside } from "./components/molecules/Aside/Aside";
import { BurgerMenu } from "./components/atoms/BurgerMenu/BurgerMenu";
import { Language } from "./components/atoms/Language/Language";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <section className={style.section}>
      <article className={style.aside}>
        <Aside />
        <Language />
      </article>
      <HomePage />
    </section>
  );
}

export default App;
