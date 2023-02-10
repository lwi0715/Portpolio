import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <img
          src="../images/내 사진.png"
          alt="Avatar"
          className={styles.avatar}
        />
        <h1 className={styles.name}>이름 소개</h1>
        <h2 className={styles.introduce}>자기소개 간단</h2>
      </div>
    </section>
  );
}
