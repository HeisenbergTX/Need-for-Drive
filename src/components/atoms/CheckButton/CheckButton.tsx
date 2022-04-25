import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPoint, getPoints } from "../../../store/point/selectors";
import style from "./CheckButton.module.css";
import { getModelCar } from "../../../store/models/selectors";
import {
  getColorCar,
  getOptions,
  getRateCar,
  getRentalPeriodCar,
} from "../../../store/optionalService/selectors";

export const CheckButton = () => {
  let location = useLocation();
  const points = useSelector(getPoints);
  const point = useSelector(getPoint);
  const modelCar = useSelector(getModelCar);
  const orderInfo = useSelector(getOptions);

  const fullnessCheck = [orderInfo.color, orderInfo.rate, orderInfo.isRentalPeriod];
  const buttonActive = fullnessCheck.every((check) => check);

  let activePoint = points.find((el) => el.address === point);
  return (
    <>
      {location.pathname === "/order/place" && (
        <NavLink to="/order/models">
          <button
            disabled={activePoint ? false : true}
            className={style.btnCheck}
          >
            Выбрать модель
          </button>
        </NavLink>
      )}
      {location.pathname === "/order/models" && (
        <NavLink to="/order/options">
          <button
            disabled={modelCar.name ? false : true}
            className={style.btnCheck}
          >
            Дополнительно
          </button>
        </NavLink>
      )}
      {location.pathname === "/order/options" && (
        <NavLink to="/order/result">
          <button
            disabled={buttonActive ? false : true}
            className={style.btnCheck}
          >
            Итого
          </button>
        </NavLink>
      )}
    </>
  );
};
