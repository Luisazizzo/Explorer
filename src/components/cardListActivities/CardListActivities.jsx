import styles from "./index.module.scss";

const CardListActivities = ({ data }) => {
  return (
    <div className={styles.CardListActivities}>
      <p>{data.city.name}</p>
      <img src={data.cover_image_url} alt={data.city.name} />
    </div>
  );
};

export default CardListActivities;
