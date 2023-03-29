import Hero from "../components/hero";
import Section from "../components/section";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Hero />
      <Section />
    </div>
  );
}
