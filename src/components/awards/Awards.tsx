import { awards } from "../../data/homeData";
import styles from "./Awards.module.scss";

function Awards() {
  return (
    <section className={styles.awards}>
      <div className={styles.container}>
        <h2 className={styles.title}>Доверие к удобству и обслуживанию клиентов</h2>
        <div className={styles.rating}>
          <div className={styles.stars}>
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>★</span>
            ))}
          </div>
          <span className={styles.caption}>На основе 500+ отзывов</span>
        </div>
        <div className={styles.grid}>
          {awards.map((award) => (
            <div key={award} className={styles.card}>
              <img alt="G2 award" className={styles.image} src={award} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
