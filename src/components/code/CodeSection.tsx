import { useState } from "react";
import { codeTabs } from "../../data/homeData";
import styles from "./CodeSection.module.scss";

function CodeSection() {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Интегрируйте покупки в приложении с помощью нескольких строк кода
        </h2>
        <div className={styles.grid}>
          <div className={styles.content}>
            <p className={styles.description}>
              Интегрируйте IAP за несколько часов без серверного кодирования с помощью
              простого и удобного SDK. А дальше, Adapty будет управлять работой и
              состоянем каждой вашей подписки – от активации, до возврата.
            </p>
            <a className={styles.cta} href="https://adapty.io/ru/sdk/">
              Быстрая интеграция
              <span aria-hidden="true">→</span>
            </a>
            <div className={styles.quote}>
              <div className={styles.quoteLabel}>История клиента</div>
              <div className={styles.quoteText}>
                «С SDK Adapty, добавить покупки в приложение оказалось проще простого.
                С помощью всего нескольких строк кода я смог без проблем добавить
                подписки как для iOS, так и для Android.»
              </div>
              <div className={styles.quoteAuthor}>
                <img
                  alt="Магнус Олафссон"
                  className={styles.quoteAvatar}
                  src="https://adapty.io/assets/uploads/2024/02/Magnus-Olafsson-Smitten@2x.webp"
                />
                <div>
                  <div className={styles.quoteName}>Магнус Олафссон</div>
                  <div className={styles.quoteRole}>
                    Главный технический директор в Smitten
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.panel}>
            <div className={styles.tabs}>
              {codeTabs.map((tab, index) => (
                <button
                  key={tab.label}
                  className={
                    index === activeTab ? styles.tabActive : styles.tabInactive
                  }
                  onClick={() => setActiveTab(index)}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <pre className={styles.code}>{codeTabs[activeTab].code}</pre>
            <div className={styles.footer}>
              <div className={styles.footerLeft}>
                <img
                  alt="GitHub"
                  className={styles.github}
                  src="https://adapty.io/assets/uploads/2024/01/github-logo.svg"
                />
                100% Open Source
              </div>
              <a
                className={styles.footerLink}
                href={codeTabs[activeTab].link}
                target="_blank"
                rel="noreferrer"
              >
                Go to GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodeSection;
