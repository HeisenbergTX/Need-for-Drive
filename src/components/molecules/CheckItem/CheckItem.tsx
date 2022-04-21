import cn from "classnames";
import { useSelector } from "react-redux";
import { getCity } from "../../../store/city/selectors";
import { getPoint } from "../../../store/point/selectors";
import style from "./CheckItem.module.css";
import { useLocation } from "react-router-dom";
import { getModelCar, getModels } from "../../../store/models/selectors";
import { ColorItem } from "../../atoms/ColorItem/ColorItem";
import { RentalPeriodItem } from "../../atoms/RentalPeriodItem/RentalPeriodItem";
import { RateItem } from "../../atoms/RateItem/RateItem";
import { ExtraServicesItem } from "../../atoms/ExtraServicesItem/ExtraServicesItem";
import { getOptions } from "../../../store/optionalService/selectors";

export const CheckItem = () => {
  let location = useLocation();
  const city = useSelector(getCity);
  const street = useSelector(getPoint);
  const modelCar = useSelector(getModelCar);
  const models = useSelector(getModels);
  const options = useSelector(getOptions);

  const arrayOptional = [
    options.tank.fullTank,
    options.childSeat.childSeat,
    options.rightHandDrive.rightHandDrive,
    options.isRentalPeriod.dateAt,
    options.isRentalPeriod.dateFrom,
    options.isRentalPeriod.leaseTerm,
    options.rate,
    options.color,
    location.pathname === "/order/options",
  ];

  const checkOptionalTruth = arrayOptional.some((check) => check);

  return (
    <section className={style.section}>
      <div className={cn(style.checkItem, style.point)}>
        <p className={style.title}>Пункт выдачи</p>
        <span className={style.dotted}></span>
        <span className={cn(style.cityPickupPoint, style.text)}>
          {city && `${city},`}
          <span className={cn(style.streetPickupPoint, style.text)}>
            {city && street}
          </span>
        </span>
      </div>
      {models.length > 0 && (
        <div className={style.checkItem}>
          <p className={style.title}>Модель</p>
          <span className={style.dotted}></span>
          <span className={style.text}>{modelCar.name}</span>
        </div>
      )}
      {checkOptionalTruth && (
        <>
          <ColorItem />
          <RentalPeriodItem />
          <RateItem />
          <ExtraServicesItem />
        </>
      )}
    </section>
  );
};
