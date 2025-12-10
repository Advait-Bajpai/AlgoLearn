import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Queen from './Components/NQueens/Queen';
import Queue from "./Components/Queue/Queue";
import Stack from "./Components/Stack/Stack";
import Sorting from "./Components/Sorting/Sorting";
import Searching from "./Components/Searching/Searching";
import Scheduling from "./Components/Scheduling/Scheduling";
import BST from "./Components/Tree/BST";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path='/sort' element={<Sorting />} />
          <Route exact path='/nqueen' element={<Queen />} />
          <Route exact path='/queue' element={<Queue />} />
          <Route exact path='/stack' element={<Stack />} />
          <Route exact path='/searching' element={<Searching/>} />
          <Route exact path='/scheduling' element={<Scheduling/>} />
          <Route exact path='/tree' element={<BST/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
