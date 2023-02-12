import React from "react";
import styles from "./About.module.css";
import { FaHtml5, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import ContactBtn from "../../components/ContactBtn/ContactBtn";
export default function () {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.about__container}>
          <h1 className={styles.about__h1}>About Me</h1>
          <h2 className={styles.about__me}>
            인천대학교 기계공학과를 졸업했으며, 프론트엔드 개발자로서 다음과
            같은 것들을 사용할 수 있습니다.
          </h2>
        </div>

        <ul className={styles.skills__container}>
          <li className={styles.skill}>
            <FaHtml5
              className={`${styles.skill__icon} ${styles.skill__icon__html}`}
            />
            <h2 className={styles.skill__name}>HTML, CSS, JS</h2>
          </li>
          <li className={styles.skill}>
            <FaReact
              className={`${styles.skill__icon} ${styles.skill__icon__react}`}
            />
            <h2 className={styles.skill__name}>React.js</h2>
          </li>
          <li className={styles.skill}>
            <SiTypescript
              className={`${styles.skill__icon} ${styles.skill__icon__ts}`}
            />
            <h2 className={styles.skill__name}>Typescript</h2>
          </li>
        </ul>
        <div className={styles.school__container}>
          <img
            src="../images/SCHOOLLOGO.jpg"
            alt="INU Logo"
            className={styles.school__logo}
          />
          <div className={styles.school__span__container}>
            <span>Incheon National University, Mechanical Engineering</span>
            <span>2017.03 ~ 2023.03</span>
          </div>
        </div>
      </div>
      <ContactBtn />
    </section>
  );
}
