import React from "react";
import Hero from "../../Components/Hero";
import Project from "../../Components/Projects";
import "./Home.css";
import contentOptions from "../../contentOptions";
import Button from "../../Components/Button";
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
        <Button text="hello" />
        {/* <button className="btn custom-btn">Contact Me</button> */}
      </Hero>
      {projects.map((project, i) => (
        <Projects image={project.image} key={i}>
          <h3>
          <span className="code">&lt;</span>
            What I've been up to.
            <span className="code">&#47;&gt;</span>
          </h3>
        </Projects>
      ))}
      <Project />
      <div className="home-container">Home</div>
    </>
  );
}
