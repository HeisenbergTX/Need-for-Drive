import React from "react";
import style from "./App.module.css";

import { Aside } from "./components/molecules/Aside/Aside";
import { Language } from "./components/atoms/Language/Language";
import { AppRouter } from "./pages/AppRouter/AppRouter";

function App() {
  return (
    <section className={style.section}>
      <article className={style.aside}>
        <Aside />
        <Language />
      </article>
      <AppRouter />
    </section>
  );
}

export default App;
