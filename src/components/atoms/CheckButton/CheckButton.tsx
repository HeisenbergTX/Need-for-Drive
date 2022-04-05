import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPoint, getPoints } from "../../../store/point/selectors";
import style from "./CheckButton.module.css";

export const CheckButton = () => {
  let location = useLocation();
  const points = useSelector(getPoints);
  const point = useSelector(getPoint);

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
          <button className={style.btnCheck}>Дополнительно</button>
        </NavLink>
      )}
    </>
  );
};
