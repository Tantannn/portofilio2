import Hero from "../../Components/Hero";
import options from "../../contentOptions";
import "./About.css";

export default function About() {
  const { about, services, skills, worktimeline, aboutHero } = options;
  const { aboutme } = about;
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
          <p className="about-quote">{about.quote}</p>
          <h2>About Me</h2>
          <hr className="hr-about" />
          <div className="about-content">
            <h3>Skills</h3>
            <div>
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="task-progress">
                    <p>
                      {skill.name}
                      <span>{skill.value}</span>
                    </p>
                  </div>
                  <progress
                    className="progress progress1"
                    max="100"
                    value={skill.value}
                  ></progress>
                </div>
              ))}
            </div>
          </div>
          <div className="about-content">
            <h3>Work Timeline</h3>
            <div>
              {skills.map((skill, i) => (
                <div key={i}>
                  <p>{skill.name}</p>
                  <p>{skill.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-content">
            <h3>Services</h3>
            <div>
              {services.map((service, i) => (
                <div key={i}>
                  <p>{service.title}</p>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
