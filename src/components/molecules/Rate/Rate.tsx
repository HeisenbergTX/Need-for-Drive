import style from "./Rate.module.css";

export const Rate = () => {
  return (
    <section className={style.section}>
        <p className={style.title}>Тариф</p>
      <label className={style.customRadio}>
        <input type="radio" name="rate" />
        <span>Поминутно, 7 ₽/мин</span>
      </label>
      <label className={style.customRadio}>
        <input type="radio" name="rate" />
        <span className={style.text}>На сутки, 1999 ₽/сутки</span>
      </label>
    </section>
  );
};
