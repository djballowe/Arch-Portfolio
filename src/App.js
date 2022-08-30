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
import InteriorSlide from "./components/Interiors/InteriorSlide";
import ExteriorSlide from "./components/Exteriors/ExteriorSlide";
import Error from "./components/Error/Error";
import Title from "./components/Loading/Title";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState();
  const [image, setImage] = useState("");

  const mobileMenuClick = () => {
    mobileMenuOpen ? setMobileMenuOpen(false) : setMobileMenuOpen(true);
  };

  const imageClick = (e) => {
    setImage(e);
  };

  return (
    <div className="App">
      <Title />
      <MobileMenu open={mobileMenuOpen} handle={mobileMenuClick} />
      <Header open={mobileMenuClick} />
      <div className="main-container">
        <DsMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/interiors-view"
            element={<InteriorSlide src={image} />}
          />
          <Route
            path="/exteriors-view"
            element={<ExteriorSlide src={image} />}
          />
          <Route path="/interiors" element={<Interiors click={imageClick} />} />
          <Route path="/exteriors" element={<Exteriors click={imageClick} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
