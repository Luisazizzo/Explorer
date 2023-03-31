import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from "./id.module.scss";

export default function Activity() {
  const { id } = useParams();

  const [activity, setActivity] = useState({});

  useEffect(() => {
    GET(`xid/${id}?`).then((data) => {
      setActivity(() => data);
    });
  }, []);

  return (
    <div className={styles.Activity}>
      <Link to="/activities">
        <FiArrowLeft className={styles.return} />
      </Link>
      <img src={activity.preview?.source} alt="" />
      <h1>{activity.name}</h1>
      <p>{activity.kinds?.replaceAll(",", ", ").replaceAll("_", " ")}</p>
    </div>
  );
}
