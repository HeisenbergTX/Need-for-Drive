import React from "react";
import { Content } from "../../molecules/Content/Content";
import { Footer } from "../../molecules/Footer/Footer";
import { Header } from "../../molecules/Header/Header";
import style from "./Main.module.css";

export const Main = () => {
  return (
    <section className={style.section}>
      <Header />
      <Content />
      <footer className={style.footer}>
        <Footer />
      </footer>
    </section>
  );
};
