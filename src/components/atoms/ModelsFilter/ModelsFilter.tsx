import style from "./ModelsFilter.module.css";

export const ModelsFilter = () => {
  return (
    <section className={style.section}>
      <label className={style.customRadio}>
        <input type="radio" name="radio" defaultChecked/>
        <span>Все модели</span>
      </label>
      <label className={style.customRadio}>
        <input type="radio" name="radio" />
        <span>Эконом</span>
      </label>
      <label className={style.customRadio}>
        <input type="radio" name="radio" />
        <span className={style.text}>Премиум</span>
      </label>
    </section>
  );
};
