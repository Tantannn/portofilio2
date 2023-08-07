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
        <div className="about-container">
          <p>{about.title}</p>
          <p>{about.aboutme}</p>
        </div>
      </div>
    </>
  );
}
