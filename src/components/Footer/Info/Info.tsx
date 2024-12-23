import styles from "./info.module.css";

const Info = () => {
  return (
    <div className={styles.links_container}>
      <ul className={styles.links}>
        <li>
          <a className={styles.link} href="#about">
            About
          </a>
        </li>
        <li>
          <a className={styles.link} href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className={styles.link} href="#team">
            Team
          </a>
        </li>
        <li>
          <a className={styles.link} href="#contacts">
            Contact
          </a>
        </li>
      </ul>
      
      <ul className={styles.links}>
        <li>
          <a
            className={styles.link}
            href="https://www.instagram.com/dreamnalot"
          >
            Instagram
          </a>
        </li>

        <li>
          <a
            className={styles.link}
            href="https://www.facebook.com/people/dreamnalot/100086172115240/?paipv=0&eav=AfbKKEDH-VyiM1ZRymRL7zbEVg-T7RJ0M_qfKkChxOUyXbDCZXKrh5XSZGfYlhk4eEI&_rdr"
          >
            Facebook
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
