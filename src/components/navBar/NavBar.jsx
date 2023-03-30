import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./index.module.scss";

const NavBar = () => {
  const [input, setInput] = useState("");

  const onChange = (e) => setInput(() => e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

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
      <form onSubmit={onSubmit} className={styles.form}>
        <input
          onChange={onChange}
          value={input}
          type="text"
          placeholder="Search city"
          required
        />
      </form>
      <button className={styles.sing_up}>Sing Up</button>
    </div>
  );
};

export default NavBar;
