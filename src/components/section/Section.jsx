import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./index.module.scss";

const Section = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const onChange = (e) => setInput(() => e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/cities?city=${input.toLowerCase()}`);
    setInput("");
  };
  return (
    <div className={styles.Section}>
      <form onSubmit={onSubmit} className={styles.form}>
        <label>Cerca la città</label>
        <input
          onChange={onChange}
          value={input}
          type="text"
          placeholder="Search city"
          required
        />
      </form>
    </div>
  );
};

export default Section;
