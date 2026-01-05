import styles from "./Banner.module.scss";

type BannerProps = {
  href: string;
  label: string;
  title: string;
};

function Banner({ href, label, title }: BannerProps) {
  return (
    <a className={styles.baner} href={href} target="_blank" rel="noreferrer">
      <span className={styles.badge}>{label}</span>
      <span className={styles.title}>{title}</span>
      <span className={styles.arrow}>→</span>
    </a>
  );
}

export default Banner;
