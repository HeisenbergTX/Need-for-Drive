import style from "./ColorItem.module.css";

export const ColorItem = () => {
  return (
    <div className={style.checkItem}>
      <p className={style.title}>Цвет</p>
      <span className={style.dotted}></span>
      <span className={style.text}>Голубой</span>
    </div>
  );
};
