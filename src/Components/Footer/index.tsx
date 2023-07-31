import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <h1>Let's design something <span className="highlight-red">together!</span></h1>
          <button className="btn custom-btn">Contact Me</button>
        </div>
        <div className="footer-content">
          <h1>You can <span className="highlight-yellow">find me</span>:</h1>
          <p><a>Github</a></p>
          <p><a>LinkedIn</a></p>
          <p><a>Email</a></p>
        </div>
      </div>
    </footer>
  );
}
