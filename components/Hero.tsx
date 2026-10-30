import styles from "./Hero.module.css";

const tasks = ["Собрать план дня", "Проверить почту", "Короткий созвон"];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.kicker}>Планирование без шума</p>
        <h1>Соберите день в один спокойный список</h1>
        <p className={styles.lead}>
          Flowday помогает выбрать главное, разложить задачи по времени и
          закончить день без десятка открытых вкладок.
        </p>
        <a className={styles.button} href="#try">
          Попробовать
        </a>
      </div>

      <div className={styles.stage} aria-hidden="true">
        <div className={styles.blob} />
        <article className={styles.phone}>
          <div className={styles.notch} />
          <p className={styles.phoneTitle}>Сегодня 4 задачи</p>
          <ul>
            {tasks.map((task) => (
              <li key={task}>
                <span />
                {task}
              </li>
            ))}
          </ul>
        </article>
        <article className={`${styles.phone} ${styles.side}`}>
          <p className={styles.phoneTitle}>Фокус</p>
          <strong>25:00</strong>
          <p>Одна задача, без уведомлений</p>
        </article>
      </div>
    </section>
  );
}
