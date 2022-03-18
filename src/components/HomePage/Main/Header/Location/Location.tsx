import React from "react";
import s from "./Location.module.css";
import location from "../../../../../icons/location.svg";

export const Location = () => {
  return (
    <section className={s.section}>
      <img className={s.iconMarker} src={location} alt="icon: marker" />
      <span className={s.town}>Ульяновск</span>
    </section>
  );
};
