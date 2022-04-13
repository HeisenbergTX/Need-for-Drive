import style from "./RentalPeriodItem.module.css";

export const RentalPeriodItem = () => {
  return (
    <div className={style.checkItem}>
      <p className={style.title}>Длительность аренды</p>
      <span className={style.dotted}></span>
      <span className={style.text}>Время</span>
    </div>
  );
};
