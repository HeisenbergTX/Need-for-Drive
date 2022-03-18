import React from "react";
import s from "./Navigation.module.css";

import { Social } from "../Social/Social";
import { Language } from "../Language/Language";

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <div className={s.wrapper}>
        <ul className={s.list}>
          <li className={s.item}>
            <a className={s.link} href="#">
              ПАРКОВКА
            </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="#">
              СТРАХОВКА
            </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="#">
              БЕНЗИН
            </a>
          </li>
          <li className={s.item}>
            <a className={s.link} href="#">
              ОБСЛУЖИВАНИЕ
            </a>
          </li>
        </ul>
        <article className={s.social}>
          <Social />
        </article>
      </div>
      <article className={s.language}>
        <Language />
      </article>
    </nav>
  );
};
