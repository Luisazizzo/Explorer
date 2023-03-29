import ContentList from "../../components/contentList/ContentList";
import styles from "../../styles/pages/Activities.module.scss";

export default function Activities() {
  return (
    <div className={styles.Activities}>
      <ContentList title="Esperienze" endpoint="activities" />
    </div>
  );
}
