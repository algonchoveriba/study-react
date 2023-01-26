import styles from "src/components/Footer/Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Thanks by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </footer>
  );
};