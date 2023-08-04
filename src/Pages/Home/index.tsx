import Hero from "../../Components/Hero";
import Project from "../../Components/Projects";
import "./Home.css";
import contentOptions from "../../contentOptions";
import Projects from "../../Components/Projects";

export default function Home() {
  console.log(contentOptions);
  const homeHero = contentOptions.homeHero;
  const projects = contentOptions.projects;
  return (
    <>
      <Hero image={homeHero.image}>
        <h1>{homeHero.title}</h1>
        <p>
          <span className="subtitle-highlight">{homeHero.subtitle}</span>
        </p>
        <p>{homeHero.text}</p>
        <button className="btn2 custom-btn2">Contact Me</button>
      </Hero>
      {projects.map((project, i) => (
        <Projects image={project.image} key={i}>
          <h3>
            <span className="code">&lt;</span>
            {project.title}
            <span className="code">&#47;&gt;</span>
          </h3>
        </Projects>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn custom-btn" >Show more</button>
      </div>
    </>
  );
}
