import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";
import styles from "./id.module.scss";

export default function City() {
  const { id } = useParams();

  const [city, setCity] = useState({});

  useEffect(() => {
    GET(`cities/${id}`).then((data) => setCity(() => data));
  }, []);

  return (
    <div className={styles.Activity}>
      <h1>{city.name}</h1>
      <p>{city.content}</p>
      <p>{city.meta_title}</p>
    </div>
  );
}
