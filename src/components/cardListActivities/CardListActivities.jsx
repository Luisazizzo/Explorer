import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const CardListActivities = ({ data, city }) => {
  const id = useNavigate();

  const onHandleClick = () => {
    id(`/activities?id=${data.properties.xid}&city=${city}`);
  };
  return (
    <div onClick={onHandleClick} className={styles.CardListActivities}>
      <h2>{data.properties.name}</h2>
      <p>{data.properties.kinds.replaceAll(",", ", ").replaceAll("_", " ")}</p>
    </div>
  );
};

export default CardListActivities;
