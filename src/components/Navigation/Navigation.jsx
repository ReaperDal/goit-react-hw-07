
import clsx from "clsx";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(styles.link, isActive && styles.active);
  };
  return (
    <>
      <NavLink className={buildLinkClass} to="/"> Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/movies"> Movies
      </NavLink>
    </>
  );
};

export default Navigation;
