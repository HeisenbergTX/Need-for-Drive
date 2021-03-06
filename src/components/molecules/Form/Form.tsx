import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Form.module.css";
import cn from "classnames";

import {
  FetchPointsRequest,
  SelectedAddressPoint,
} from "../../../store/point/actions";
import {
  FetchCitiesRequest,
  SelectedAddressCity,
} from "../../../store/city/actions";

import { City } from "../../atoms/City/City";
import { Point } from "../../atoms/Point/Point";
import { getCity } from "../../../store/city/selectors";
import { getPoint } from "../../../store/point/selectors";
import { getPoints } from "../../../store/point/selectors";

export const Form = () => {
  const dispatch = useDispatch();
  const points = useSelector(getPoints);
  const city = useSelector(getCity);
  const point = useSelector(getPoint);

  const cityHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(SelectedAddressCity(e.target.value));
    if (!city) {
      dispatch(SelectedAddressPoint(""));
    }
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
            list="city"
            placeholder="Начните вводить город"
            className={cn(style.cityInput, style.input)}
            type="search"
            value={city}
            onChange={cityHandler}
          />
        </div>
        <datalist id="city">
          {points.map((el) => {
            return (
              <article key={el.id}>
                <City city={el?.cityId?.name} />;
              </article>
            );
          })}
        </datalist>
        <div className={style.point}>
          <span>Пункт выдачи</span>
          <input
            placeholder="Начните вводить пункт выдачи"
            className={cn(style.pointInput, style.input)}
            type="search"
            list="point"
            value={city && point}
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
