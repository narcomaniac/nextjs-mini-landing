import styles from "./Features.module.css";

const features = [
  {
    title: "Порядок в задачах",
    text: "Разделите день на «сейчас» и «потом», чтобы список не превращался в склад дел.",
    icon: "01",
  },
  {
    title: "Напоминания вовремя",
    text: "Flowday пишет только о встречах и сроках, которые вы сами отметили важными.",
    icon: "02",
  },
  {
    title: "Общий ритм команды",
    text: "Короткий список на день виден коллегам без длинных переписок и лишних статусов.",
    icon: "03",
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.inner}>
        <h2>Возможности, которые держат день в фокусе</h2>
        <div className={styles.grid}>
          {features.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <span>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
