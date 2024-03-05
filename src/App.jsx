import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from './Pages/Landingpage';
import Mentors from './Pages/Mentors';
import Judges from './Pages/Judges';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/mentors" element={<Mentors />} />
          <Route exact path="/judges" element={<Judges />} />
        </Routes>
      </Router>
    </>
  )
}

export default App