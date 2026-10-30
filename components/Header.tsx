"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const links = [
  { href: "#top", label: "Главная" },
  { href: "#features", label: "Возможности" },
  { href: "#contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header} id="top">
      <a className={styles.logo} href="#top">
        <span className={styles.mark}>F</span>
        Flowday
      </a>

      <button
        className={styles.burger}
        type="button"
        aria-expanded={open}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={open ? styles.navOpen : styles.nav}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className={styles.cta} href="#try" onClick={() => setOpen(false)}>
          Попробовать
        </a>
      </nav>
    </header>
  );
}
