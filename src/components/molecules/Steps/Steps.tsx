import React from "react";
import style from "./Steps.module.css";
import cn from "classnames";

import { NavLink } from "react-router-dom";

export const Steps = () => {
  return (
    <section className={style.section}>
      <NavLink className={style.stepItem} to="/order/place">
        Местоположение
      </NavLink>
      <span className={style.triangle} />
      <NavLink className={style.stepItem} to="/order/models">
        Модель
      </NavLink>
      <span className={style.triangle} />
      <NavLink className={style.stepItem} to="/order/options">
        Дополнительно
      </NavLink>
      <span className={style.triangle} />
      <NavLink className={style.stepItem} to="/order/total">
        Итого
      </NavLink>
    </section>
  );
};
