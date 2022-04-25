import React from "react";
import { ModelsFilter } from "../../atoms/ModelsFilter/ModelsFilter";
import { ModelsCars } from "../../molecules/ModelsCars/ModelsCars";
import style from "./Models.module.css";

export const Models = () => {
  return (
    <section className={style.section}>
      <article className={style.modelsFilter}>
        <ModelsFilter />
      </article>
      <article className={style.modelsCars}>
        <ModelsCars />
      </article>
    </section>
  );
};
