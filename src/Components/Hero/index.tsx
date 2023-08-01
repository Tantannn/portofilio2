import React from "react";
import "./Hero.css";

export default function Hero(props: any) {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <p>{props.children}</p>
        <div className="hero-content-image">
          {/* <img src={props.image} alt="Picture of the author" className="h-full" /> */}
        </div>
      </div>
    </div>
  );
}
