import { useForm, FormProvider } from "react-hook-form";
import format from "dateformat";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import style from "./RentalPeriod.module.css";
import {
  chooseRentalPeriodCar,
  chooseTimesRent,
  chooseDateFrom,
  chooseDateTo,
} from "../../../store/optionalService/actions";
import {
  getDateFrom,
  getDateTo,
  getRateCar,
  getRentalPeriodCar,
} from "../../../store/optionalService/selectors";

export const RentalPeriod = () => {
  const dispatch = useDispatch();
  const rentalPeriod = useSelector(getRentalPeriodCar);
  const rate = useSelector(getRateCar);
  const getValueDateFrom = useSelector(getDateFrom);
  const getValueDateTo = useSelector(getDateTo);
  const { register, handleSubmit, watch, setValue, resetField } = useForm();

  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateAt, setDateAt] = useState<Date>();
  const valueDateFrom = watch("dateFrom");
  const valueDateAt = watch("dateTo");

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
    if (valueDateFrom && valueDateAt) {
      dispatch(chooseDateFrom(valueDateFrom));
      dispatch(chooseDateTo(valueDateAt));
    }
  }, [valueDateFrom && valueDateAt]);

  useEffect(() => {
    difference();
  }, [(valueDateAt && valueDateFrom) && rate]);

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

  const defaultValues = {
    dateTo: getValueDateTo || "",
    dateFrom: getValueDateFrom || "",
  };

  const form = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues.dateFrom)
      setValue(
        "dateFrom",
        format(defaultValues.dateFrom, "yyyy-mm-dd'T'HH:MM")
      );
  }, [defaultValues.dateFrom]);

  useEffect(() => {
    if (defaultValues.dateTo)
      setValue("dateTo", format(defaultValues.dateTo, "yyyy-mm-dd'T'HH:MM"));
  }, [defaultValues.dateTo]);

  const clickFromHandler = () => {
    dispatch(chooseDateFrom(""));
    resetField("dateFrom");
  };
  const clickToHandler = () => {
    dispatch(chooseDateTo(""));
    resetField("dateTo");
  };

  return (
    <section className={style.section}>
      <p className={style.title}>Дата аренды</p>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit((data) => data)} className={style.form}>
          <label className={style.inputDate}>
            <span>С</span>
            <input
              {...register("dateFrom")}
              max={"9999-12-31T23:59"}
              className={style.input}
              type="datetime-local"
            />
            {valueDateFrom && (
              <div className={style.clearBtn} onClick={clickFromHandler} />
            )}
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
              {...register("dateTo")}
            />
            {valueDateAt && (
              <div className={style.clearBtn} onClick={clickToHandler} />
            )}
          </label>
        </form>
      </FormProvider>
    </section>
  );
};
