import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  chooseChildSeatCar,
  chooseFullTankCar,
  chooseRightHandDriveCar,
} from "../../../store/optionalService/actions";
import {
  getChildSeatCar,
  getFullTankCar,
  getRightHandDriveCar,
} from "../../../store/optionalService/selectors";
import style from "./ExtraServices.module.css";

export const ExtraServices = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch } = useForm();
  const getFullTank = useSelector(getFullTankCar);
  const getChildSeat = useSelector(getChildSeatCar);
  const getRightHandDrive = useSelector(getRightHandDriveCar);

  const valueFullTank = watch("isFullTank");
  const valueIsChildSeat = watch("isChildSeat");
  const valueIsRightHandDrive = watch("isRightHandDrive");

  useEffect(() => {
    if (valueFullTank) {
      dispatch(chooseFullTankCar(valueFullTank, 500));
    } else {
      dispatch(chooseFullTankCar(valueFullTank, 0));
    }
  }, [valueFullTank]);

  useEffect(() => {
    if (valueIsChildSeat) {
      dispatch(chooseChildSeatCar(valueIsChildSeat, 200));
    } else {
      dispatch(chooseChildSeatCar(valueIsChildSeat, 0));
    }
  }, [valueIsChildSeat]);

  useEffect(() => {
    if (valueIsRightHandDrive) {
      dispatch(chooseRightHandDriveCar(valueIsRightHandDrive, 1600));
    } else {
      dispatch(chooseRightHandDriveCar(valueIsRightHandDrive, 0));
    }
  }, [valueIsRightHandDrive]);

  return (
    <form onSubmit={handleSubmit((data) => data)} className={style.section}>
      <p className={style.title}>Доп услуги</p>
      <label className={style.customСheсkbox}>
        <input
          defaultChecked={getFullTank.fullTank}
          className={style.input}
          type="checkbox"
          {...register("isFullTank")}
        />
        <span className={style.text}>Полный бак, 500 рублей</span>
      </label>
      <label className={style.customСheсkbox}>
        <input
          defaultChecked={getChildSeat?.seat}
          className={style.input}
          type="checkbox"
          {...register("isChildSeat")}
        />
        <span className={style.text}>Детское кресло, 200р</span>
      </label>
      <label className={style.customСheсkbox}>
        <input
          defaultChecked={getRightHandDrive?.rightHandDrive}
          className={style.input}
          type="checkbox"
          {...register("isRightHandDrive")}
        />
        <span className={style.text}>Правый руль, 1600р</span>
      </label>
    </form>
  );
};
