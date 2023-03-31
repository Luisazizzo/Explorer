import { Link } from "react-router-dom";
import styles from "../styles/pages/Product.module.scss";

export default function Product() {
  return (
    <div className={styles.Product}>
      <h1>Product</h1>

      <p>
        <Link className={styles.Link} to="/">
          Home
        </Link>
      </p>
    </div>
  );
}
