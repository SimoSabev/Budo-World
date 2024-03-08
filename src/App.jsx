// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'; 
import Martial from './pages/Martial-Arts/Martial';
import Organisations from './pages/Organisations/Organisations'
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Questionnaire from './pages/Questions/Questionnaire';
import Aikido_page from './pages/Aikido-page/Aikido-page';
import Filter1 from './pages/Filtered-pages/Filter1/Filter1';
import Filter2 from './pages/Filtered-pages/Filter2/Filter2';
import Filter3 from './pages/Filtered-pages/Filter3/Filter3';
import Filter4 from './pages/Filtered-pages/Filter4/Filter4';
import Filter5 from './pages/Filtered-pages/Filter5/Filter5';
import Filter6 from './pages/Filtered-pages/Filter6/Filter6';
import Shiseikan from './pages/Shiseikan/Shiseikan';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/мartial аrts" element={<Martial />} />
        <Route path="/organisations" element={<Organisations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/questions" element={<Questionnaire />} />
        <Route path="/aikido" element={<Aikido_page />} />
        <Route path="/filter1" element={<Filter1 />} />
        <Route path="/filter2" element={<Filter2 />} />
        <Route path="/filter3" element={<Filter3 />} />
        <Route path="/filter4" element={<Filter4 />} />
        <Route path="/filter5" element={<Filter5 />} />
        <Route path="/filter6" element={<Filter6 />} />
        <Route path="/shiseikan" element={<Shiseikan />} />
      </Routes>
    </Router>
  );
};

export default App;
