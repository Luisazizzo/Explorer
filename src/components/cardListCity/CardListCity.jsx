import styles from "./index.module.scss";

const CardListCity = ({ data }) => {
  return (
    <div className={styles.CardListCity}>
      <p>{data.name}</p>
      <img src={data.cover_image_url} alt={data.name} />
    </div>
  );
};

export default CardListCity;
