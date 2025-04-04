import { Link } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={s.logo}>
      Rental<span className={s.logoCar}>Car</span>
    </Link>
  );
};
export default Logo;
