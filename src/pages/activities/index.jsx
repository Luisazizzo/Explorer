import ContentList from "../../components/contentList/ContentList";
import { useSearchParams } from "react-router-dom";
import styles from "../../styles/pages/Activities.module.scss";

export default function Activities() {
  const [searchParams] = useSearchParams();

  return (
    <div className={styles.Activities}>
      {searchParams.get("date") && (
        <h1>
          Per giorno {searchParams.get("date")} abbiamo trovato queste attività:
        </h1>
      )}
      <ContentList title="Attività" endpoint="activities" />
    </div>
  );
}
