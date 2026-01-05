import Banner from "../banner/Banner";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Banner
            href="https://adapty.io/ru/ebooks/100k-app-playbook/"
            label="Гайд"
            title="Как вырасти до $100K | Скачать"
          />
          <h1 className={styles.title}>
            <span className={styles.gradient}>Платформа для роста мобильных приложений</span>
          </h1>
          <p className={styles.subtitle}>
            Сэкономьте месяцы на внедрении подписок и удвойте доход от приложения
            благодаря эффективному управлению пейволлами.
          </p>
          <div className={styles.actions}>
            <form className={styles.form}>
              <input className={styles.input} placeholder="Email адрес" type="email" />
              <button className={styles.submit} type="button">
                Начать
              </button>
            </form>
            <a className={styles.demo} href="https://adapty.io/ru/schedule-demo/">
              Запись на демо
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.mediaWrap}>
            <img
              alt="Adapty Paywall Demo Preview"
              className={styles.paywall}
              src="https://adapty.io/assets/uploads/2025/02/adapty-paywall-demo-preview@2x.webp"
            />
            <img
              alt="Adapty Overview"
              className={styles.overview}
              src="https://adapty.io/assets/uploads/2025/02/adapty-overview@2x.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
