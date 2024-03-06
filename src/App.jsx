import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landingpage from "./Pages/Landingpage";
import JoinForm from "./Pages/JoinForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landingpage />} />
          <Route exact path="/form" element={<JoinForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;