import { helpCards } from "../../data/homeData";
import styles from "./Help.module.scss";

function Help() {
  return (
    <section className={styles.help}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Управляйте своим подписочным бизнесом.
          <br className={styles.break} /> Быстрее и дешевле.
        </h2>
        <div className={styles.grid}>
          {helpCards.map((card) => (
            <a key={card.title} className={styles.card} href={card.href}>
              <img alt={card.title} className={styles.image} src={card.image} />
              <div className={styles.cardBody}>
                <div className={styles.cardHead}>
                  <span className={styles.cardTitle}>{card.title}</span>
                  <span className={styles.cardArrow}>↗</span>
                </div>
                <div className={styles.cardList}>
                  {card.bullets.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Help;
