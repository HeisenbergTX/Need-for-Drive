import React from "react";
import { YMaps, Map } from "react-yandex-maps";
import style from "./Maps.module.css";

export const Maps = () => {
  const mapSetting = { center: [54.31, 48.36], zoom: 10 };
  const state = { width: "100%", height: "350px" };
  return (
    <section className={style.section}>
      <p className={style.textPointer}>Выберите на карте:</p>
      <article className={style.maps}>
        <YMaps style={{ width: "100%", heigth: "100%" }}>
          <Map
            height={state.height}
            width={state.width}
            defaultState={mapSetting}
          ></Map>
        </YMaps>
      </article>
    </section>
  );
};
