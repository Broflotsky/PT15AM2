import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
  );
}
