import style from "./RateItem.module.css";

export const RateItem = () => {
  return (
    <div className={style.checkItem}>
      <p className={style.title}>Тариф</p>
      <span className={style.dotted}></span>
      <span className={style.text}>На сутки</span>
    </div>
  );
};
