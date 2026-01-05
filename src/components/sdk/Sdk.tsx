import { sdkPlatforms } from "../../data/homeData";
import styles from "./Sdk.module.scss";

function Sdk() {
  return (
    <section className={styles.sdk}>
      <div className={styles.container}>
        <h2 className={styles.title}>Установите SDK для своей платформы</h2>
        <div className={styles.grid}>
          {sdkPlatforms.map((platform) => (
            <a key={platform.label} className={styles.item} href={platform.href}>
              <img alt={platform.label} className={styles.icon} src={platform.icon} />
              <span>{platform.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sdk;
