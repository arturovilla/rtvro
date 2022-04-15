import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hey bitch from app.js</h1>
      </div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
