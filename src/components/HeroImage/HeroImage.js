import React from "react";
import heroimg from "../../assets/vibrating-headphone.png";
import "./HeroText.css";

function HeroImg() {
  return (
    <div className="hero-sec">
      <div class="hero-text">
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={heroimg} width={212} alt="hero-section-headphone" />
      </div>
    </div>
  );
}

export default HeroImg;
