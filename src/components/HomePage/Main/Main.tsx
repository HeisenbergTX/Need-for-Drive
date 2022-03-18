import React from "react";
import { Content } from "./Content/Content";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import s from "./Main.module.css";

export const Main = () => {
  return (
    <section className={s.section}>
      <Header />
      <Content />
      <footer className={s.footer}>
        <Footer />
      </footer>
    </section>
  );
};
