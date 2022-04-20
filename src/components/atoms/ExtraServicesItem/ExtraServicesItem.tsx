import { useSelector } from "react-redux";
import {
  getChildSeatCar,
  getFullTankCar,
  getRightHandDriveCar,
} from "../../../store/optionalService/selectors";
import style from "./ExtraServicesItem.module.css";

export const ExtraServicesItem = () => {
  const getFullTank = useSelector(getFullTankCar);
  const getChildSeat = useSelector(getChildSeatCar);
  const getRightHandDrive = useSelector(getRightHandDriveCar);

  return (
    <>
      {getFullTank.fullTank && (
        <div className={style.checkItem}>
          <p className={style.title}>Полный бак</p>
          <span className={style.dotted}></span>
          <span className={style.text}>Да</span>
        </div>
      )}
      {getChildSeat.seat && (
        <div className={style.checkItem}>
          <p className={style.title}>Детское кресло</p>
          <span className={style.dotted}></span>
          <span className={style.text}>Да</span>
        </div>
      )}
      {getRightHandDrive.rightHandDrive && (
        <div className={style.checkItem}>
          <p className={style.title}>Правый руль</p>
          <span className={style.dotted}></span>
          <span className={style.text}>Да</span>
        </div>
      )}
    </>
  );
};
