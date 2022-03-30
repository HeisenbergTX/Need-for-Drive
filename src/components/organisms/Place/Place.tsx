import React from "react";
import { Maps } from "../../molecules/Map/Maps";
import { Form } from "../../molecules/Form/Form";
import style from "./Place.module.css";

export const Place = () => {
  return (
    <section className={style.section}>
      <article className={style.pickupPoint}>
        <Form />
      </article>
      <article className={style.placeMap}>
        <Maps />
      </article>
    </section>
  );
};
