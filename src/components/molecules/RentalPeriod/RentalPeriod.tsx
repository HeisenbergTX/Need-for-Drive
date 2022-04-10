import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import style from "./RentalPeriod.module.css";
import {
  chooseRentalPeriodCar,
  chooseTimesRent,
} from "../../../store/optionalService/actions";
import { getRentalPeriodCar } from "../../../store/optionalService/selectors";

export const RentalPeriod = () => {
  const dispatch = useDispatch();
  const rentalPeriod = useSelector(getRentalPeriodCar);
  const { register, handleSubmit, watch } = useForm();

  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateAt, setDateAt] = useState<Date>();

  const valueDateFrom = watch("dateFrom");
  const valueDateAt = watch("dateAt");

  const difference = () => {
    if (dateAt && dateFrom && valueDateAt > valueDateFrom) {
      const minutes = Math.ceil(
        (Math.abs(dateAt.getTime() - dateFrom.getTime()) / (1000 * 60)) % 60
      );
      let hours =
        Math.ceil(
          Math.abs(dateAt.getTime() - dateFrom.getTime()) / (1000 * 3600)
        ) % 24;

      let days = Math.ceil(
        Math.abs(dateAt.getTime() - dateFrom.getTime()) / (1000 * 3600 * 24)
      );

      const showDays = `${days + "д"} ${hours + "ч"} ${minutes + "мин"}`;

      dispatch(chooseTimesRent(minutes, hours, days));
      dispatch(chooseRentalPeriodCar(showDays));
    }
    if (valueDateAt <= valueDateFrom) {
      dispatch(chooseRentalPeriodCar(""));
    }
  };

  useEffect(() => {
    difference();
  }, [valueDateAt && valueDateFrom]);

  useEffect(() => {
    if (valueDateFrom) {
      setDateFrom(new Date(valueDateFrom));
    }
  }, [valueDateFrom]);

  useEffect(() => {
    if (valueDateAt) {
      difference();
      setDateAt(new Date(valueDateAt));
    }
  }, [valueDateAt]);

  return (
    <section className={style.section}>
      <p className={style.title}>Дата аренды</p>
      <form onSubmit={handleSubmit((data) => data)} className={style.form}>
        <label className={style.inputDate}>
          <span>С</span>
          <input
            max={"9999-12-31T23:59"}
            className={style.input}
            type="datetime-local"
            {...register("dateFrom")}
          />
        </label>
        <label className={style.inputDate}>
          <span>По</span>
          <input
            max={"9999-12-31T23:59"}
            min={valueDateFrom}
            className={cn(style.input, {
              [style.error]:
                rentalPeriod !== "" && valueDateAt <= valueDateFrom,
            })}
            type="datetime-local"
            {...register("dateAt")}
          />
        </label>
      </form>
    </section>
  );
};
