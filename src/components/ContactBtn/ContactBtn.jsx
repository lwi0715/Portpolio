import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContactBtn.module.css";
export default function ContactBtn() {
  return (
    <div className={styles.container}>
      <Link to="./contact">
        <button className={styles.button}>Contact Me</button>
      </Link>
    </div>
  );
}
