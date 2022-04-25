import { useSelector } from "react-redux";
import { getRateCar } from "../../../store/optionalService/selectors";
import style from "./RateItem.module.css";

export const RateItem = () => {
  const rateCar = useSelector(getRateCar);
  return (
    <div className={style.checkItem}>
      <p className={style.title}>Тариф</p>
      <span className={style.dotted}></span>
      <span className={style.text}>{rateCar}</span>
    </div>
  );
};
