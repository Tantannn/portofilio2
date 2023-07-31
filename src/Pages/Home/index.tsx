import React from "react";
import Hero from "../../Components/Hero";
import Project from "../../Components/Projects";
import "./Home.css";
import homeHero from "../../contentOptions";
export default function Home() {
  return (
    <>
      {Object.keys(homeHero).map((item:any, i) => (
        <li className="travelcompany-input" key={i}>
          <span className="input-label">
            {[item]: homeHero[key as keyof typeof homeHero]}
          </span>
        </li>
      ))}
      <Project />
      <div className="home-container">Home</div>
    </>
  );
}
