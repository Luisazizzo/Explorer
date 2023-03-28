import NavBar from "../components/navBar";
import Footer from "../components/footer";
import ContentList from "../components/contentList";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <NavBar />
      <ContentList title="Città" endpoint="cities" />
      <ContentList title="Attività" endpoint="activities" />
      <Footer />
    </div>
  );
}
