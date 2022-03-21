import React from "react";
import style from "./Content.module.css";

export const Content = () => {
  return (
    <section className={style.section}>
      <div className={style.infoBlock}>
        <h1 className={style.title}>
          Каршеринг <p className={style.nameCompany}>Need for drive</p>
        </h1>
        <p className={style.subtitle}>Поминутная аренда авто твоего города</p>
      </div>
      <button className={style.btnReservation}>Забронировать</button>
    </section>
  );
};
