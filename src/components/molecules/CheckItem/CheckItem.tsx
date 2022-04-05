import cn from "classnames";
import style from "./CheckItem.module.css";
import { cars } from "../../molecules/ModelsCars/cars";
import { useLocation } from "react-router-dom";

export const CheckItem = () => {
  let location = useLocation();
  return (
    <section className={style.section}>
      <div className={cn(style.checkItem, style.point)}>
        <p className={style.title}>Пункт выдачи</p>
        <span className={style.dotted}></span>
        <span className={style.cityPickupPoint}>
          Ульяновск,
          <span className={style.streetPickupPoint}>Нариманова 42</span>
        </span>
      </div>
      {location.pathname === "/order/models" && (
        <div className={cars && style.checkItem}>
          <p className={style.title}>Модель</p>
          <span className={style.dotted}></span>
          <span className={style.cityPickupPoint}>Тесла</span>
        </div>
      )}
    </section>
  );
};
