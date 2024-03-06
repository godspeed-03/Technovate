import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from './Pages/Landingpage';
import JoinForm from './Pages/JoinForm';
import JoinExpect from './Pages/JoinExpect';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<JoinForm/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App