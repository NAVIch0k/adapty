import { slaStats } from "../../data/homeData";
import styles from "./Sla.module.scss";

function Sla() {
  return (
    <section className={styles.sla}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Adapty обрабатывает доход от подписок с самым высоким SLA уровнем в индустрии
        </h2>
        <div className={styles.grid}>
          {slaStats.map((stat) => (
            <div key={stat.label} className={styles.card}
            >
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sla;
