import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";
import styles from "./id.module.scss";

export default function Activity() {
  const { id } = useParams();

  const [activity, setActivity] = useState({});

  useEffect(() => {
    GET(`xid/${id}?`).then((data) => {
      console.log(data);
      setActivity(() => data);
    });
  }, []);

  return (
    <div className={styles.Activity}>
      <img src={activity.preview?.source} alt="" />
      <h1>{activity.name}</h1>
      <p>{activity.kinds}</p>
    </div>
  );
}
