import s from './Hero.module.css';

const Hero = () => {
  return (
    <div className={s.heroBox}>
      <div className={s.titleBox}>
        <h1 className={s.title}>Find your perfect rental car</h1>
        <p className={s.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button type="button" className={s.button}>
          View Catalog
        </button>
      </div>
    </div>
  );
};
export default Hero;
