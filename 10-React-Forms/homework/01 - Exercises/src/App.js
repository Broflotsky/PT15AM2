import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Contact from "./components/Contact/Contact";
// import CardDetail from "./components/CardDetail/CardDetail.jsx";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
