import style from "./Steps.module.css";

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPoint, getPoints } from "../../../store/point/selectors";
import { getModelCar } from "../../../store/models/selectors";

export const Steps = () => {
  const points = useSelector(getPoints);
  const point = useSelector(getPoint);

  const modelCar = useSelector(getModelCar);
  let activePoint = points.find((el) => el.address === point);

  const disabledNavLink = (e: any) => {
    e.preventDefault();
  };

  return (
    <section className={style.section}>
      <NavLink className={style.stepItem} to="/order/place">
        Местоположение
      </NavLink>
      <span className={style.triangle} />
      <NavLink
        onClick={activePoint ? () => {} : disabledNavLink}
        className={style.stepItem}
        to="/order/models"
      >
        Модель
      </NavLink>
      <span className={style.triangle} />
      <NavLink
        onClick={modelCar.name ? () => {} : disabledNavLink}
        className={style.stepItem}
        to="/order/options"
      >
        Дополнительно
      </NavLink>
      <span className={style.triangle} />
      <NavLink className={style.stepItem} to="/order/total">
        Итого
      </NavLink>
    </section>
  );
};
