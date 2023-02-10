import React from "react";
import styles from "./About.module.css";
import { FaHtml5, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
export default function () {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.about__me}>About Me</h1>
        <h2>
          인천대학교 기계공학과를 졸업했으며, 프론트엔드 개발자로서 다음과 같은
          것들을 사용할 수 있습니다.
        </h2>

        <ul>
          <li>
            <FaHtml5 />
            <h2>HTML, CSS, JS</h2>
          </li>
          <li>
            <FaReact />
            <h2>React.js</h2>
          </li>
          <li>
            <SiTypescript />
            <h2>Typescript</h2>
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
    </section>
  );
}
