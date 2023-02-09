import React from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Lee</p>
      <ul>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/about">About</Link>
        </button>
        <button>
          <Link to="/skills">Skills</Link>
        </button>

        <button>
          <Link to="/works">My Works</Link>
        </button>
        <button>
          <Link to="/contact">Contact</Link>
        </button>
      </ul>
    </div>
  );
}
