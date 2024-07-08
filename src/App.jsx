import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Certification from "./pages/Certification";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Certification />
      <Contact />
    </>
  );
}

export default App;
