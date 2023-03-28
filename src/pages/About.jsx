import { Link } from "react-router-dom";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import styles from "../styles/pages/About.module.scss";

export default function About() {
  return (
    <div className={styles.About}>
      <NavBar />
      <h1>About</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
      <Footer />
    </div>
  );
}
