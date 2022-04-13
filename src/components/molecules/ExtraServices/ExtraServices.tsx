import style from "./ExtraServices.module.css";

export const ExtraServices = () => {
  return (
    <section className={style.section}>
      <p className={style.title}>Доп услуги</p>
      <label className={style.customСheсkbox}>
        <input className={style.input} type="checkbox" value="value-1" />
        <span className={style.text}>Полный бак, 500 рублей</span>
      </label>
      <label className={style.customСheсkbox}>
        <input className={style.input} type="checkbox" value="value-1" />
        <span className={style.text}>Детское кресло, 200р</span>
      </label>
      <label className={style.customСheсkbox}>
        <input className={style.input} type="checkbox" value="value-1" />
        <span className={style.text}>Правый руль, 1600р</span>
      </label>
    </section>
  );
};
