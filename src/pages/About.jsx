import { Link } from "react-router-dom";
import styles from "../styles/pages/About.module.scss";

export default function About() {
  return (
    <div className={styles.About}>
      <h1>About</h1>

      <p>
        <Link className={styles.Link} to="/">
          Home
        </Link>
      </p>
    </div>
  );
}
