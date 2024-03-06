import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import Mentors from "./Pages/Mentors";
import Judges from "./Pages/Judges";
import Register from "./Pages/Register";
import Partner from "./Pages/Partners";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/mentors" element={<Mentors />} />
          <Route exact path="/judges" element={<Judges />} />
          <Route exact path="/partners" element={<Partner />} />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
