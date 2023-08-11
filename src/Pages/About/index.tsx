import Hero from "../../Components/Hero";
import options from "../../contentOptions";
import "./About.css";

export default function About() {
  const { about,  aboutHero } = options;
  const { title, subtitle, text, image } = aboutHero;
  return (
    <>
      <Hero image={image}>
        <h1>{title}</h1>
        <p>
          <span className="subtitle-highlight">{subtitle}</span>
        </p>
        <p>{text}</p>
        <button className="btn2 custom-btn2">Contact Me</button>
      </Hero>
      <div className="about">
        <div className="about-container ">
          <p style={{ textAlign: 'center', width: '70%', marginTop: '2rem', marginBottom: '8rem' }} ><strong>{about.title}</strong></p>
          <p>{about.aboutme}</p>
          <p className="highlight-red about-title">Education</p>
          <p>{about.education}</p>
        </div>
      </div>
    </>
  );
}
