import React from "react";
import cn from "classnames";
import style from "./CheckItem.module.css";

export const CheckItem = () => {
  return (
    <section className={style.section}>
      <p className={style.pickupPoint}>Пункт выдачи</p>
      <span className={style.dotted}></span>
      <p className={style.cityPickupPoint}>
        Ульяновск,<p className={style.streetPickupPoint}>Нариманова 42</p>
      </p>
    </section>
  );
};
