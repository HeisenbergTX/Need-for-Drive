import React, { ChangeEvent, useEffect } from "react";
import cn from "classnames";
import style from "./Form.module.css";

import {
  FetchCitiesRequest,
  SelectedAddressCity,
} from "../../../store/city/actions";
import { getCities } from "../../../store/city/selectors";
import { useDispatch, useSelector } from "react-redux";
import { City } from "../../atoms/City/City";
import { Point } from "../../atoms/Point/Point";
import { getPoints } from "../../../store/point/selectors";
import {
  FetchPointsRequest,
  SelectedAddressPoint,
} from "../../../store/point/actions";
import { getCity } from "../../../store/city/selectors";
import { getPoint } from "../../../store/point/selectors";

export const Form = () => {
  const dispatch = useDispatch();
  const cities = useSelector(getCities);
  const points = useSelector(getPoints);
  const city = useSelector(getCity);
  const point = useSelector(getPoint);

  const cityHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(SelectedAddressCity(e.target.value));
  };

  const pointHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(SelectedAddressPoint(e.target.value));
  };

  useEffect(() => {
    dispatch(FetchCitiesRequest());
  }, []);

  useEffect(() => {
    dispatch(FetchPointsRequest());
  }, []);

  return (
    <section className={style.section}>
      <form className={style.form}>
        <div className={style.city}>
          <span>Город</span>
          <input
            autoComplete="no"
            list="city"
            placeholder="Начните вводить город"
            className={cn(style.cityInput, style.input)}
            type="search"
            value={city}
            onChange={cityHandler}
          />
        </div>
        <datalist id="city">
          {cities.map((el: any) => {
            return (
              <article key={el.id}>
                <City city={el.name} />;
              </article>
            );
          })}
        </datalist>
        <div className={style.point}>
          <span>Пункт выдачи</span>
          <input
            autoComplete="no"
            placeholder="Начните вводить пункт выдачи"
            className={cn(style.pointInput, style.input)}
            type="search"
            list="point"
            value={point}
            onChange={pointHandler}
          />
        </div>
        <datalist id="point">
          {points
            .filter((point) => city === point?.cityId?.name || "")
            .map((point) => {
              return (
                <article key={point.id}>
                  <Point point={point.address} />;
                </article>
              );
            })}
        </datalist>
      </form>
    </section>
  );
};
