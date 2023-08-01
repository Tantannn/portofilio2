import React from "react";
import Hero from "../../Components/Hero";
import Project from "../../Components/Projects";
import "./Home.css";
import contentOptions from "../../contentOptions";

export default function Home() {
  console.log(contentOptions)
  const homeHero = contentOptions.homeHero
  return (
    <>
        <Hero image={homeHero.image}>
          <h1>{homeHero.title}</h1>
          <p><span className="subtitle-highlight">{homeHero.subtitle}</span></p>
          <p>{homeHero.text}</p>
          {/* <button className="btn custom-btn">Contact Me</button> */}
        </Hero>
      <Project />
      <div className="home-container">Home</div>
    </>
  );
}
