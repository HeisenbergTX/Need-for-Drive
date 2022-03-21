import React from "react";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <a className={style.telephone} href="tel:84952342244">
        8 (495) 234-22-44
      </a>
      <p className={style.copyright}>&copy; 2016-2019 «Need for drive»</p>
    </footer>
  );
};
