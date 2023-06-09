import styles from "./newscard.module.css";

export default function NewsCard(props) {
  return <>
    <a href={ props.url }>
      <div className={styles.card}>
        <h1>{props.title}</h1>
        <img src={props.imageUrl} />
        <div className={styles.description}>
          <p>{props.description}</p>
        </div>
      </div>
    </a>
  </>;
}
