import { GET } from "../../utils/http";
import CardListActivities from "../cardListActivities";
import CardListCity from "../cardListCity";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const ContentList = ({ title, endpoint }) => {
  const [cityList, setCityList] = useState([]);
  const [activityList, setActivityList] = useState([]);

  useEffect(() => {
    // if (endpoint === "cities") {
    //   GET(endpoint).then((data) => setCityList(() => data));
    // }
    if (endpoint === "activities") {
      GET("radius?radius=1000&lon=2.3488&lat=48.85341&").then((data) => {
        setActivityList(() => data.features);
      });
    }
  }, []);

  return (
    <div className={styles.ContentList}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {activityList.map(
          (item, i) =>
            item.properties.name && <CardListActivities data={item} key={i} />
        )}
        {/* {cityList.map((item, i) => (
          <CardListCity data={item} key={i} />
        ))} */}
      </div>
    </div>
  );
};
export default ContentList;
