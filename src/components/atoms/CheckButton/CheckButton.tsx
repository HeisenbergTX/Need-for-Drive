import { NavLink, useLocation } from "react-router-dom";
import style from "./CheckButton.module.css";

export const CheckButton = () => {
  let location = useLocation();

  return (
    <>
      {location.pathname === "/order/place" && (
        <NavLink to="/order/models">
          <button className={style.btnCheck}>Выбрать модель</button>
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
