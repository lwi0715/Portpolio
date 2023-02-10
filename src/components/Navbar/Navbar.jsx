import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>
        <Link to="/">Lee</Link>
      </p>
      <ul className={styles.navbar}>
        <button className={styles.button}>
          <Link to="/">Home</Link>
        </button>
        <button className={styles.button}>
          <Link to="/about">About</Link>
        </button>
        <button className={styles.button}>
          <Link to="/skills">Skills</Link>
        </button>
        <button className={styles.button}>
          <Link to="/works">My Works</Link>
        </button>
        <button className={styles.button}>
          <Link to="/contact">Contact</Link>
        </button>
      </ul>
    </div>
  );
}
