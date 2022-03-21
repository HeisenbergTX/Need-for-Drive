import React from "react";
import style from "./Social.module.css";

import { ReactComponent as Telegram } from "../../../icons/Telegram.svg";
import { ReactComponent as Facebook } from "../../../icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../../icons/Instagram.svg";

export const Social = () => {
  return (
    <section className={style.section}>
      <a className={style.link} href="#">
        <Telegram className={style.icon} />
      </a>
      <a className={style.link} href="#">
        <Facebook className={style.icon} />
      </a>
      <a className={style.link} href="#">
        <Instagram className={style.icon} />
      </a>
    </section>
  );
};
