import style from "./FullTank.module.css";

export const FullTank = () => {
  return (
    <div className={style.checkItem}>
      <p className={style.title}>Полный бак</p>
      <span className={style.dotted}></span>
      <span className={style.text}>Да</span>
    </div>
  );
};
