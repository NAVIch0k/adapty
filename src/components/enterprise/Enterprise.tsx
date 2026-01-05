import { enterpriseColumns } from "../../data/homeData";
import styles from "./Enterprise.module.scss";

function Enterprise() {
  return (
    <section className={styles.enterprise}>
      <div className={styles.container}>
        <h2 className={styles.title}>Платформа уровня Enterprise</h2>
        <div className={styles.grid}>
          {enterpriseColumns.map((column) => (
            <div key={column.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{column.title}</h3>
              <ul className={styles.list}>
                {column.items.map((item) => (
                  <li key={item} className={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Enterprise;
