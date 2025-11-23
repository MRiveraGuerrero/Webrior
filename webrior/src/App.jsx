import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import WebriorHome from "./Home.jsx";
import WebriorServices from "./ServicesPage.jsx";
import WebriorProjects from "./ProjectsPage.jsx";
import WebriorContact from "./ContactPage.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebriorHome />} />
        <Route path="/services" element={<WebriorServices />} />
        <Route path="/projects" element={<WebriorProjects />} />
        <Route path="/contact" element={<WebriorContact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
