import React from "react";
import ContactBtn from "../../components/ContactBtn/ContactBtn";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>Skills</div>
      <ContactBtn />
    </section>
  );
}
