// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'; 
import MartialArts from './pages/MartialArts/MartialArts';
import Organisations from './pages/Organisations/Organisations'
import Login from './pages/auth/Login/Login';
import Signup from './pages/auth/Signup/Signup';
import Questionnaire from './pages/Questions/Questionnaire';
import DetailedMartialArt from "./pages/MartialArts/DetailedMartialArt";
import DetailedOrganisation from "./pages/Organisations/DetailedOrganisation";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route index={true} element={<Home />} />

        <Route path={"/martial-arts"} element={<MartialArts />} />
        <Route path={"/martial-arts/:martialArtName"} element={<DetailedMartialArt />}/>

        <Route path={"/organisations"} element={<Organisations />} />
        <Route path={"/organisations/:organisationName"} element={<DetailedOrganisation />}/>

        <Route path={"/auth"}>
          <Route path={"login"} element={<Login />} />
          <Route path={"signup"} element={<Signup />} />
        </Route>

        <Route path={"/questions"} element={<Questionnaire />} />
        <Route path={"/questions/:questionId"} element={<Questionnaire />} />

        <Route path={"/404"} element={<PageNotFound />}/>
        <Route path={"/*"} element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
};
