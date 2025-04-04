import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import Logo from '../Logo/Logo.jsx';

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div>
      <nav className={s.navigation}>
        <Logo />
        <NavLink to="/" className={(buildLinkClass, s.nLink)}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={(buildLinkClass, s.nLink)}>
          Catalog
        </NavLink>
      </nav>
    </div>
  );
};
export default Navigation;
