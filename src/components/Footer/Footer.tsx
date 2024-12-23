import Info from "./Info/Info";
import logo from "../../assets/Letters_edited 1.svg";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer}>
        <img loading="lazy" src={logo} alt="" className={styles.logo} />
        <Info />
      </div>
    </footer>
  );
};

export default Footer;
