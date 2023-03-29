import styles from "./index.module.scss";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.description_hero}>
        <h1>Start your journey by one click, explore beautiful world!</h1>
        <p>
          Plan and book your perfect trip with expert advice, travel tips,
          destination information and inspiration from us!
        </p>
        <button className={styles.google}>Google Play</button>
        <button className={styles.app}>App Store</button>
      </div>
      <div className={styles.img_hero}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/010/916/009/original/3d-pin-location-travel-planing-concept-ui-icon-or-3d-pin-map-with-flight-plane-travel-free-png.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Hero;
