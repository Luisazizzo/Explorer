import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./id.module.scss";

export default function Activity() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activity, setActivity] = useState({});

  const backButton = () => {
    navigate(`/cities?city=${searchParams.get("city")}`);
  };

  useEffect(() => {
    GET(`xid/${searchParams.get("id")}?`).then((data) => {
      setActivity(() => data);
    });
  }, []);

  return (
    <div className={styles.Activity}>
      <FiArrowLeft onClick={backButton} className={styles.return} />
      <img src={activity.preview?.source} alt="" />
      <h1>{activity.name}</h1>
      <p>{activity.kinds?.replaceAll(",", ", ").replaceAll("_", " ")}</p>
    </div>
  );
}
