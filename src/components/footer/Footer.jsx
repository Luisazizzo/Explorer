import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <h2>Explorer</h2>
      <ul className={styles.ul_footer}>
        <li>Product</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
      <div className={styles.linea}></div>
      <p>&copy;2023 explorer.com</p>
    </div>
  );
};

export default Footer;
