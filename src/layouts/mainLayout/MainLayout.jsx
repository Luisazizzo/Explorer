import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import styles from "./index.module.scss";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className={styles.MainLayout}>
      <NavBar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
