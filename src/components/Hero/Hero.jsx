import { Link } from 'react-router-dom';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <div className={s.titleBox}>
      <h1 className={s.title}>Find your perfect rental car</h1>
      <p className={s.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link to="/catalog">
        <button type="button" className={s.button}>
          View Catalog
        </button>
      </Link>
    </div>
  );
};
export default Hero;
