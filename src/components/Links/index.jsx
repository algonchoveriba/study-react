import styles from "./Links.module.css";

export function Links({ items, handleReduce }) {

  return (
    <div className={styles.panelGroup}>
      {items.map((item) => {
        return (
          <a className={styles.panel} key={item.href} href={item.href}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
