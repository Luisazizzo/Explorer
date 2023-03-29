import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <h1>
        <Link className={styles.Link} to="/">
          Explorer
        </Link>
      </h1>

      <ul className={styles.ul_pages}>
        <li>Product</li>
        <li>Contact Us</li>
        <li>
          <Link className={styles.Link} to="/about">
            About Us
          </Link>
        </li>
      </ul>

      <button className={styles.sing_up}>Sing Up</button>
    </div>
  );
};

export default NavBar;
