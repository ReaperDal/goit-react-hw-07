import s from "./Header.module.css";

import Navigation from "../Navigation/Navigation";
const Header = () => {
  return (
    <div className={s.wrapper}>
      <Navigation />
    </div>
  );
};

export default Header;
