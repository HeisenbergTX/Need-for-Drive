import { useDispatch, useSelector } from "react-redux";
import { chooseRateCar } from "../../../store/optionalService/actions";
import { getRateCar } from "../../../store/optionalService/selectors";
import { getRates } from "../../../store/rates/selectors";
import style from "./Rate.module.css";

export const Rate = () => {
  const dispatch = useDispatch();
  const rateCar = useSelector(getRateCar);
  const rates = useSelector(getRates);

  return (
    <section className={style.section}>
      <p className={style.title}>Тариф</p>
      {!!rates.length &&
        rates
          .filter((rate) => rate?.rateTypeId?.name)
          .map((rate) => {
            const chooseRate = () =>
              dispatch(
                chooseRateCar(rate.id, rate.rateTypeId.name, rate.price)
              );
            return (
              <label
                key={rate.id}
                onClick={chooseRate}
                className={style.customRadio}
              >
                <input
                  type="radio"
                  name="rate"
                  defaultChecked={rate.rateTypeId.name === rateCar.name}
                />
                <span>
                  {rate.rateTypeId.name}, {rate.price} ₽/
                  {rate.rateTypeId.unit}
                </span>
              </label>
            );
          })}
    </section>
  );
};
