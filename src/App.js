// App.js
import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Extras from "./pages/Extras";
import Contact from "./pages/Contact";
import styled from "styled-components";
import ParticlesBackground from "./components/Background";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  padding: 0; /* Remove any padding that might affect Header/Footer */
  margin: 0; /* Remove any margin */
  padding-bottom: 80px; /* Add padding to prevent content from being hidden behind the fixed footer */

  @media (max-width: 768px) {
    padding-bottom: 60px; /* Adjust for smaller footer height on mobile */
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <ParticlesBackground />
        <AppContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/extras" element={<Extras />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </AppContainer>
      </Router>
    </>
  );
}

export default App;
