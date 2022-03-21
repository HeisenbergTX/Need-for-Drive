import React from "react";
import style from "./Location.module.css";
import location from "../../../icons/location.svg";

export const Location = () => {
  return (
    <section className={style.section}>
      <img className={style.iconMarker} src={location} alt="icon: marker" />
      <span className={style.town}>Ульяновск</span>
    </section>
  );
};
