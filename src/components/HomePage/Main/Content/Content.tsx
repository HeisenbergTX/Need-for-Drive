import React from "react";
import s from "./Content.module.css";

export const Content = () => {
  return (
    <section className={s.section}>
      <div className={s.infoBlock}>
        <h1 className={s.title}>
          Каршеринг <p className={s.nameCompany}>Need for drive</p>
        </h1>
        <p className={s.subtitle}>Поминутная аренда авто твоего города</p>
      </div>
      <button className={s.btnReservation}>Забронировать</button>
    </section>
  );
};
