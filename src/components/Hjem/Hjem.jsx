import React from "react";
import LandingCarousel from "./LandingCarousel";
import Description from "./Description";
import Services from "./Services";
import Projects from "./Projects";

function Hjem(props) {
  return (
    <div>
      <LandingCarousel />
      <Description />
      <Services />
      <Projects />
    </div>
  );
}

export default Hjem;
