import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const CardListCity = ({ data }) => {
  const idCity = useNavigate();

  const onHandleClick = () => {
    idCity(`/cities/${data.id}`);
  };
  return (
    <div onClick={onHandleClick} className={styles.CardListCity}>
      <img src={data.cover_image_url} alt={data.name} />
      <h4>{data.name}</h4>
    </div>
  );
};

export default CardListCity;
