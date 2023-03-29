import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET } from "../../utils/http";
import styles from "./id.module.scss";

export default function Activity() {
  const { id } = useParams();

  const [activity, setActivity] = useState({
    city: {
      name: "",
    },
  });

  useEffect(() => {
    GET(`activities/${id}`).then((data) => {
      setActivity(() => data);
    });
  }, []);

  return (
    <div className={styles.Activity}>
      <img src={activity.cover_image_url} alt="" />
      <h1>{activity.city.name}</h1>
      <p>{activity.about}</p>
      <p>{activity.meeting_point}</p>
    </div>
  );
}
