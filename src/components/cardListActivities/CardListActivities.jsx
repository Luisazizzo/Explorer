import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const CardListActivities = ({ data }) => {
  const id = useNavigate();

  const onHandleClick = () => {
    id(`/activities/${data.uuid}`);
  };
  return (
    <div onClick={onHandleClick} className={styles.CardListActivities}>
      <img src={data.cover_image_url} alt={data.city.name} />
      <h2>{data.city.name}</h2>
      <h4>{data.city.time_zone}</h4>
      <p>{data.title}</p>
    </div>
  );
};

export default CardListActivities;
