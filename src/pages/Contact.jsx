import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/Contact.module.scss";

export default function Contact() {
  const [inputDate, setInputDate] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => setInputDate(e.target.value);

  const onClick = () => {
    navigate(`/activities?date=${inputDate.split("-").reverse().join("-")}`);
  };
  return (
    <div className={styles.Contact}>
      <h1>Contact</h1>
      <p>Inserisci il giorno in cui vuoi fare attività</p>
      <input value={inputDate} onChange={onChange} type="date" />
      <button onClick={onClick}>Cerca data</button>
      <p>
        <Link className={styles.Link} to="/">
          Home
        </Link>
      </p>
    </div>
  );
}
