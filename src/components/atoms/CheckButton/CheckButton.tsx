import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPoint, getPoints } from "../../../store/point/selectors";
import style from "./CheckButton.module.css";
import { getModelCar } from "../../../store/models/selectors";

export const CheckButton = () => {
  let location = useLocation();
  const points = useSelector(getPoints);
  const point = useSelector(getPoint);
  const modelCar = useSelector(getModelCar);

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
        <NavLink to="/order/more">
          <button
            disabled={modelCar.name ? false : true}
            className={style.btnCheck}
          >
            Дополнительно
          </button>
        </NavLink>
      )}
    </>
  );
};
