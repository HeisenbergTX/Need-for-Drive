import { useSelector } from "react-redux";
import { getColorCar } from "../../../store/optionalService/selectors";
import style from "./ColorItem.module.css";

export const ColorItem = () => {
  const colorCar = useSelector(getColorCar);
  return (
    <div className={style.checkItem}>
      <p className={style.title}>Цвет</p>
      <span className={style.dotted}></span>
      <span className={style.text}>{colorCar.toLowerCase()}</span>
    </div>
  );
};
