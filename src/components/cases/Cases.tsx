import { caseStudies } from "../../data/homeData";
import styles from "./Cases.module.scss";

function Cases() {
  return (
    <section className={styles.cases}>
      <div className={styles.container}>
        <h2 className={styles.title}>Реальные истории роста наших клиентов</h2>
        <div className={styles.grid}>
          {caseStudies.map((item) => (
            <a key={item.title} className={styles.card} href={item.href}>
              <div className={styles.cardHead}>
                <img alt={item.title} className={styles.icon} src={item.icon} />
                <div>
                  <div className={styles.cardTitle}>{item.title}</div>
                  <div className={styles.cardCategory}>{item.category}</div>
                </div>
              </div>
              <div className={styles.metric}>{item.metric}</div>
              <div className={styles.desc}>{item.desc}</div>
              <div className={styles.more}>
                Подробнее <span aria-hidden="true">→</span>
              </div>
            </a>
          ))}
        </div>
        <a className={styles.all} href="https://adapty.io/ru/case-studies/">
          Открыть все кейсы
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default Cases;
