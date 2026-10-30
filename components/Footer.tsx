import SubscribeForm from "./SubscribeForm";
import styles from "./Footer.module.css";

const links = [
  { href: "#top", label: "Главная" },
  { href: "#features", label: "Возможности" },
  { href: "#contacts", label: "Контакты" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.invite}>
        <h2>Не откладывайте спокойный список на завтра</h2>
        <SubscribeForm />
      </div>

      <div className={styles.bottom} id="contacts">
        <div>
          <strong>Flowday</strong>
          <p>© {new Date().getFullYear()} Flowday. Планирование задач.</p>
        </div>
        <nav>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href="mailto:hello@flowday.app">hello@flowday.app</a>
        </nav>
      </div>
    </footer>
  );
}
