import { featureQuotes, integrations } from "../../data/homeData";
import styles from "./Features.module.scss";

function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.stack}>
          {featureQuotes.map((feature) => (
            <div key={feature.heading} className={styles.block}>
              <div className={feature.reversed ? styles.contentReversed : styles.content}>
                <h3 className={styles.heading}>{feature.heading}</h3>
                <p className={styles.description}>{feature.desc}</p>
                <a className={styles.link} href={feature.href}>
                  {feature.cta}
                  <span aria-hidden="true">→</span>
                </a>
                <div className={styles.quoteCard}>
                  <div className={styles.quoteHeader}>
                    {feature.quote.appIcon ? (
                      <img
                        alt={feature.quote.app}
                        className={styles.quoteIcon}
                        src={feature.quote.appIcon}
                      />
                    ) : (
                      <img
                        alt={feature.quote.app}
                        className={styles.quoteLogo}
                        src={feature.quote.appLogo}
                      />
                    )}
                  </div>
                  <p className={styles.quoteText}>{feature.quote.quote}</p>
                  <div className={styles.quoteAuthor}>
                    <img
                      alt={feature.quote.author}
                      className={styles.quoteAvatar}
                      src={feature.quote.avatar}
                    />
                    <div>
                      <div className={styles.quoteName}>{feature.quote.author}</div>
                      <div className={styles.quoteRole}>{feature.quote.role}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={feature.reversed ? styles.mediaReversed : styles.media}>
                <img
                  alt={feature.heading}
                  className={styles.image}
                  src={feature.image}
                />
              </div>
            </div>
          ))}

          <div className={styles.block}>
            <div className={styles.content}>
              <h3 className={styles.heading}>
                Быстро увеличьте доход от приложения с помощью веб-воронок
              </h3>
              <p className={styles.description}>
                Создавайте и запускайте веб-воронки для приложений, интегрируйте
                платежи, оптимизируйте с помощью A/B-тестирования и развивайтесь по
                всему миру — всё в одной платформе, без необходимости в
                программировании.
              </p>
              <a
                className={styles.link}
                href="https://funnelfox.com/"
                target="_blank"
                rel="noreferrer"
              >
                Познакомьтесь с FunnelFox
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className={styles.media}>
              <img
                alt="FunnelFox"
                className={styles.image}
                src="https://adapty.io/assets/uploads/2025/04/funnelfox-feature@2x.webp"
              />
            </div>
          </div>

          <div className={styles.integrations}>
            <div>
              <div className={styles.integrationLabel}>События покупок в приложении</div>
              <div className={styles.integrationGrid}>
                {integrations.map((logo) => (
                  <div key={logo} className={styles.integrationCard}>
                    <img alt="" className={styles.integrationLogo} src={logo} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className={styles.heading}>
                Синхронизируйте данные о покупках с другими сервисами
              </h3>
              <p className={styles.integrationDesc}>
                Отправляйте подписочные события в сервисы аналитики и атрибуции.
              </p>
              <a className={styles.link} href="https://adapty.io/ru/integrations/">
                Больше об интеграциях
                <span aria-hidden="true">→</span>
              </a>
              <div className={styles.integrationQuote}>
                <img
                  alt="Bickster"
                  className={styles.integrationLogoSmall}
                  src="https://adapty.io/assets/uploads/2023/12/logo-bickster.png"
                />
                <p className={styles.integrationQuoteText}>
                  «У них есть отличный внешний API, который позволяет легко передавать
                  связанные события в другие инструменты аналитики, такие как
                  Amplitude и Mixpanel.»
                </p>
                <div className={styles.integrationAuthor}>
                  <img
                    alt="Крис Бик"
                    className={styles.integrationAvatar}
                    src="https://adapty.io/assets/uploads/2024/01/avatar-chris-bick.webp"
                  />
                  <div>
                    <div className={styles.quoteName}>Крис Бик</div>
                    <div className={styles.integrationRole}>
                      Основатель и генеральный директор
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
