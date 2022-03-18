import React from "react";
import s from "./Social.module.css";

import { ReactComponent as Telegram } from "../../../icons/Telegram.svg";
import { ReactComponent as Facebook } from "../../../icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../../icons/Instagram.svg";

export const Social = () => {
  return (
    <section className={s.section}>
      <a className={s.link} href="#">
        <Telegram className={s.icon} />
      </a>
      <a className={s.link} href="#">
        <Facebook className={s.icon} />
      </a>
      <a className={s.link} href="#">
        <Instagram className={s.icon} />
      </a>
    </section>
  );
};
