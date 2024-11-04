import styles from "./Header.module.css";

import Navigation from "../Navigation/Navigation";



const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
    </div>
  );
};

export default Header;
