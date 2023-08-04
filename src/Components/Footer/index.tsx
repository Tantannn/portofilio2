import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    AOS.init({
      offset: 150, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 300, // values from 0 to 3000, with step 50ms
    });
  });
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <div>
            <h1 data-aos="fade-up">
              Let's design something 
              <span className="highlight-red"> together!</span>
            </h1>
        <button className="btn2 custom-btn2">Contact Me</button>
          </div>
        </div>
        <div className="footer-content">
          <div>
            <h1 data-aos="fade-up">
              You can <span className="highlight-yellow">find me</span>:
            </h1>
            <p>
              <a href='https://github.com/Tantannn'>Github</a>
            </p>
            <p>
              <a>LinkedIn</a>
            </p>
            <p>
              <a>Email</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
