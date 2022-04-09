import style from "./Steps.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import cn from "classnames";

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
  console.log(modelCar);

  return (
    <section className={style.section}>
      <NavLink
        className={cn(style.stepItem, { [style.passedPhase]: point })}
        to="/order/place"
      >
        Местоположение
      </NavLink>
      <span className={style.triangle} />
      <NavLink
        onClick={activePoint ? () => {} : disabledNavLink}
        className={cn(style.stepItem, { [style.passedPhase]: point })}
        to="/order/models"
      >
        Модель
      </NavLink>
      <span className={style.triangle} />
      <NavLink
        onClick={modelCar.name ? () => {} : disabledNavLink}
        className={cn(style.stepItem, { [style.passedPhase]: modelCar.id })}
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
