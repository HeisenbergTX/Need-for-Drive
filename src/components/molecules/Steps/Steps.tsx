import React from "react";
import style from "./Steps.module.css";
import cn from "classnames";

import { Link } from "react-router-dom";

export const Steps = () => {
  return (
    <section className={style.section}>
      <Link className={cn(style.stepItem, style.activeStep)} to="/order/place">
        Местоположение
      </Link>
      <span className={style.triangle} />
      <Link className={style.stepItem} to="#">
        Модель
      </Link>
      <span className={style.triangle} />
      <Link className={style.stepItem} to="#">
        Дополнительно
      </Link>
      <span className={style.triangle} />
      <Link className={style.stepItem} to="#">
        Итого
      </Link>
    </section>
  );
};
