import { trustLogos } from "../../data/homeData";
import styles from "./Trust.module.scss";

function Trust() {
  return (
    <section className={styles.trust}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Доверяют более 15,000+ приложений и крупнейших мировых издателей приложений
        </h2>
        <div className={styles.grid}>
          {trustLogos.map((logo) => (
            <div key={logo} className={styles.card}>
              <img alt="" className={styles.logo} src={logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;
