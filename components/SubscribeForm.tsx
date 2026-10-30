"use client";

import { FormEvent, useState } from "react";
import styles from "./Footer.module.css";

export default function SubscribeForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <p className={styles.thanks}>Готово. Мы сохранили адрес и напишем, когда откроем доступ.</p>;
  }

  return (
    <form className={styles.form} id="try" onSubmit={handleSubmit}>
      <label className={styles.srOnly} htmlFor="email">
        Электронная почта
      </label>
      <input id="email" name="email" type="email" required placeholder="Введите почту" />
      <button type="submit">Попробовать</button>
    </form>
  );
}
