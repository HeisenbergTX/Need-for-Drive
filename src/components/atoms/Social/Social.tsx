import React from "react";
import style from "./Social.module.css";

import { ReactComponent as Telegram } from "../../../icons/Telegram.svg";

export const Social = () => {
  return (
    <section className={style.section}>
      <a className={style.link} href="#">
        <Telegram className={style.icon} />
      </a>
    </section>
  );
};
