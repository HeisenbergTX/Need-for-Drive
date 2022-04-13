import style from "./RentalPeriod.module.css";

export const RentalPeriod = () => {
  return (
    <section className={style.section}>
      <p className={style.title}>Дата аренды</p>
      <form className={style.form}>
        <label className={style.inputDate}>
          <span>С</span>
          <input className={style.input} type="date" name="date" />
        </label>
        <label className={style.inputDate}>
          <span>По</span>
          <input className={style.input} type="date" name="date" />
        </label>
      </form>
    </section>
  );
};
