import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseRateCar } from "../../../store/optionalService/actions";
import { getRateCar } from "../../../store/optionalService/selectors";
import style from "./Rate.module.css";

export const Rate = () => {
  const dispatch = useDispatch();
  const rateCar = useSelector(getRateCar);

  const choosePerMinuteRate = () => dispatch(chooseRateCar("Поминутно"));

  const chooseDayRate = () => dispatch(chooseRateCar("На сутки"));

  return (
    <section className={style.section}>
      <p className={style.title}>Тариф</p>
      <label onClick={choosePerMinuteRate} className={style.customRadio}>
        <input
          type="radio"
          name="rate"
          defaultChecked={rateCar === "Поминутно"}
        />
        <span>Поминутно, 7 ₽/мин</span>
      </label>
      <label onClick={chooseDayRate} className={style.customRadio}>
        <input
          type="radio"
          name="rate"
          defaultChecked={rateCar === "На сутки"}
        />
        <span className={style.text}>На сутки, 1999 ₽/сутки</span>
      </label>
    </section>
  );
};
