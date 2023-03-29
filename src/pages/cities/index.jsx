import ContentList from "../../components/contentList/ContentList";
import styles from "../../styles/pages/Cities.module.scss";

export default function Cities() {
  return (
    <div className={styles.Cities}>
      <ContentList title="Città" endpoint="cities" />
    </div>
  );
}
