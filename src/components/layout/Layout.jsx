import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Nav";
import Hjem from "../Hjem/Hjem";
import OmOss from "../OmOss/OmOss";
import Kontakt from "../Kontakt/Kontakt";
import Tjenester from "../Tjenester/Tjenester";

function Layout(props) {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/hjem" element={<Hjem />} />
        <Route path="/om-oss" element={<OmOss />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/tjenester" element={<Tjenester />} />
      </Routes>
    </Router>
  );
}

export default Layout;
