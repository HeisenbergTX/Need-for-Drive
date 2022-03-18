import React from "react";
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <a className={s.telephone} href="tel:84952342244">
        8 (495) 234-22-44
      </a>
      <p className={s.copyright}>&copy; 2016-2019 «Need for drive»</p>
    </footer>
  );
};
