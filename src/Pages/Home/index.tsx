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
      {projects.map((project) => (
        <Projects image={project.image}>
          <h1>What I've been up to.</h1>
          <p>Here is a selection of projects that I’ve worked on.</p>
        </Projects>
      ))
      }
      <Project />
      <div className="home-container">Home</div>
    </>
  );
}
