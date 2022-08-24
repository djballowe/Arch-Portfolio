import "./App.css";
import { Routes, Route } from "react-router-dom";
import DsMenu from "./components/Header/DsMenu";
import Header from "./components/Header/header";
import Home from "./components/Home/Home";
import Interiors from "./components/Interiors/Interiors";
import Exteriors from "./components/Exteriors/Exteriors";
import About from "./components/About/About";
import Contact from "./components/About/Contact";
import MobileMenu from "./components/Header/MobileMenu";
import React, { useState } from "react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState();

  const mobileMenuClick = () => {
    mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true);
  };

  return (
    <div className="App">
      <MobileMenu open={mobileMenuOpen} handle={mobileMenuClick} />
      <Header open={mobileMenuClick} />
      <div className="main-container">
        <DsMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="interiors" element={<Interiors />} />
          <Route path="exteriors" element={<Exteriors />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
