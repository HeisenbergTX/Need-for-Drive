import React from "react";
import cn from "classnames";
import style from "./Form.module.css";

export const Form = () => {
  return (
    <section className={style.section}>
      <form className={style.form}>
        <div className={style.city}>
          <span>Город</span>
          <input
            placeholder="Начните вводить город"
            className={cn(style.cityInput, style.input)}
            type="search"
          />
        </div>
        <div className={style.point}>
          <span>Пункт выдачи</span>
          <input
            placeholder="Начните вводить пункт выдачи"
            className={cn(style.pointInput, style.input)}
            type="search"
          />
        </div>
      </form>
    </section>
  );
};
