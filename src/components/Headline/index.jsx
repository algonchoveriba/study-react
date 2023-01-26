import styles from "./Headline.module.css";

export const Headline = (props) => {
  return (
    <div className={styles.headline}>
      <h1 className={styles.title}>{props.page} Page</h1>
      <p>Get started by editing {props.children}</p>
      <button onClick={props.handleReduce}>ボタン</button>
    </div>
  );
};
