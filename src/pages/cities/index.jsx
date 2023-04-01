import { useEffect, useState } from "react";
import { GET, httpGetImage } from "../../utils/http";
import styles from "../../styles/pages/Cities.module.scss";
import { useSearchParams } from "react-router-dom";
import CardListActivities from "../../components/cardListActivities";

export default function Cities() {
  const [params] = useSearchParams();
  const [city, setCity] = useState([]);
  const [error, setError] = useState(false);
  const [imgBg, setImgBg] = useState("");

  useEffect(() => {
    GET(`geoname?name=${params.get("city")}&`).then((res) => {
      console.log(res);
      if (res.status === "OK") {
        const lat = res.lat;
        const lon = res.lon;
        GET(`radius?radius=1000&lon=${lon}&lat=${lat}&`).then((data) => {
          setCity(data.features);
        });
        httpGetImage(params.get("city")).then((res) => {
          setImgBg(res.data.result.items[0].media);
        });
      } else {
        setError(true);
      }
    });
  }, []);

  return (
    <div className={styles.Cities}>
      <h1>{params.get("city")}</h1>
      {error ? (
        <h1>Città non trovata</h1>
      ) : (
        <div className={styles.list}>
          <img src={imgBg} alt={params.get("city")} />
          {city.map(
            (item, i) =>
              item.properties.name && (
                <CardListActivities
                  city={params.get("city")}
                  data={item}
                  key={i}
                />
              )
          )}
        </div>
      )}
    </div>
  );
}
