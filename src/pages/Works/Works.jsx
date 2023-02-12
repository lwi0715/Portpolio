import React from "react";
import ContactBtn from "../../components/ContactBtn/ContactBtn";
import styles from "./Works.module.css";
export default function Works() {
  return (
    <section className={styles.works}>
      <div className={styles.container}>Works</div>
      <ContactBtn />
    </section>
  );
}
