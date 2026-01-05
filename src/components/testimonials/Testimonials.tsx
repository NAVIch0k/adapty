import { useState } from "react";
import { testimonials } from "../../data/homeData";
import styles from "./Testimonials.module.scss";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          От Indie до Enterprise – Adapty помогает увеличить доход приложениям любого
          уровня
        </h2>
        <div className={styles.divider} />
        <div className={styles.slider}>
          <button className={styles.arrowLeft} onClick={goPrev} type="button">
            ‹
          </button>
          <button className={styles.arrowRight} onClick={goNext} type="button">
            ›
          </button>
          <div className={styles.slide}>
            <div className={styles.photoWrap}>
              <img alt={active.name} className={styles.photo} src={active.avatar} />
            </div>
            <div className={styles.content}>
              <p className={styles.quote}>{active.quote}</p>
              <div className={styles.name}>{active.name}</div>
              <div className={styles.role}>{active.role}</div>
              <img alt="" className={styles.logo} src={active.logo} />
            </div>
          </div>
        </div>
        <div className={styles.dots}>
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              className={index === activeIndex ? styles.dotActive : styles.dot}
              onClick={() => setActiveIndex(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
