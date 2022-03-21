import React from "react";
import style from "./Navigation.module.css";

import { Social } from "../../atoms/Social/Social";
import { Language } from "../../atoms/Language/Language";

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <div className={style.wrapper}>
        <ul className={style.list}>
          <li className={style.item}>
            <a className={style.link} href="#">
              ПАРКОВКА
            </a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="#">
              СТРАХОВКА
            </a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="#">
              БЕНЗИН
            </a>
          </li>
          <li className={style.item}>
            <a className={style.link} href="#">
              ОБСЛУЖИВАНИЕ
            </a>
          </li>
        </ul>
        <article className={style.social}>
          <Social />
        </article>
      </div>
      <article className={style.language}>
        <Language />
      </article>
    </nav>
  );
};
