import { useSelector } from "react-redux";
import { getRentalPeriodCar } from "../../../store/optionalService/selectors";
import style from "./RentalPeriodItem.module.css";

export const RentalPeriodItem = () => {
  const getRentalPeriod = useSelector(getRentalPeriodCar);

  return (
    <div className={style.checkItem}>
      <p className={style.title}>Длительность аренды</p>
      <span className={style.dotted}></span>
      <span className={style.text}>{getRentalPeriod}</span>
    </div>
  );
};
