import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Section = () => {
  return (
    <div className={styles.Section}>
      <h3>
        <Link className={styles.Link} to="/activities">
          Scegli la tua esperienza
        </Link>
      </h3>
      {/* <h3>
        <Link className={styles.Link} to="/cities">
          Scegli la tua località
        </Link>
      </h3> */}
    </div>
  );
};

export default Section;
