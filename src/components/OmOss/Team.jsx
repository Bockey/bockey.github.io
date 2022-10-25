import React from "react";

function Team() {
  return (
    <div className="team">
      <h2>Our team</h2>
      <div className="container">
        <div className="employee">
          <div className="image johannes"></div>
          <h3>Johannes</h3>
          <span>Prosjektleder/Partner</span>
          <span>johannes@assemble-it.no</span>
          <span>+47 936 43 944</span>
        </div>
        <div className="employee">
          <div className="image jeanette"></div>
          <h3>Jeanette</h3>
          <span>Møbelsnekker/Partner</span>
          <span>jeanette@assemble-it.no</span>
          <span>+47 46344259</span>
        </div>
        <div className="employee">
          <div className="image alfred"></div>
          <h3>Alfred</h3>
          <span>Prosjektleder/Partner</span>
          <span>alfred@assemble-it.no</span>
          <span>+47 40395239</span>
        </div>
        <div className="employee">
          <div className="image martin"></div>
          <h3>Martin</h3>
          <span>Partner</span>
          <span>martin@assemble-it.no</span>
          <span>+47 45006277</span>
        </div>
      </div>
    </div>
  );
}

export default Team;
