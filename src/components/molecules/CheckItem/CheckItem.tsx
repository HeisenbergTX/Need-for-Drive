import cn from "classnames";
import { useSelector } from "react-redux";
import { getCity } from "../../../store/city/selectors";
import { getPoint } from "../../../store/point/selectors";
import style from "./CheckItem.module.css";
import { useLocation } from "react-router-dom";
import { getModelCar, getModels } from "../../../store/models/selectors";

export const CheckItem = () => {
  let location = useLocation();
  const city = useSelector(getCity);
  const street = useSelector(getPoint);
  const modelCar = useSelector(getModelCar);
  const models = useSelector(getModels);
  
  return (
    <section className={style.section}>
      <div className={cn(style.checkItem, style.point)}>
        <p className={style.title}>Пункт выдачи</p>
        <span className={style.dotted}></span>
        <span className={style.cityPickupPoint}>
          {city && `${city},`}
          <span className={style.streetPickupPoint}>{city && street}</span>
        </span>
      </div>
      {location.pathname === "/order/models" && (
        <div className={[models || modelCar] && style.checkItem}>
          <p className={style.title}>Модель</p>
          <span className={style.dotted}></span>
          <span className={style.cityPickupPoint}>{modelCar.name}</span>
        </div>
      )}
    </section>
  );
};
