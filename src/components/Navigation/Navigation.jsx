import React from "react";
import clsx from "clsx";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/movies">
        Movies
      </NavLink>
    </>
  );
};

export default Navigation;
