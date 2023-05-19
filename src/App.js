//App.js
//Main page

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Korean from "./components/languagecomponent/korean";
import French from "./components/languagecomponent/french";
import FrenchDictionary from "./components/languagecomponent/dictionary/frenchDictionary";
import Chinese from "./components/languagecomponent/chinese";
import ChineseDictionary from "./components/languagecomponent/dictionary/chineseDictionary";
import Koreandictionary from "./components/languagecomponent/dictionary/koreanDictionary";
import KoreanQuiz from "./components/languagecomponent/Quizgame/koreanquiz";
import ChineseQuiz from "./components/languagecomponent/Quizgame/chineseQuiz";
import FrenchQuiz from "./components/languagecomponent/Quizgame/frenchquiz";
// import FrenchQuiz from "./components/languagecomponent/quizgamefrench";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/quizgamefrench" element={<FrenchQuiz />} />
          <Route path="/quizgamechinese" element={<ChineseQuiz />} />
          <Route path="/quizgamekorean" element={<KoreanQuiz />} />
          <Route path="/chinesedictionary" element={<ChineseDictionary />} />
          <Route path="/koreandictionary" element={<Koreandictionary />} />
          <Route path="/frenchdictionary" element={<FrenchDictionary />} />
          <Route path="/chinese" element={<Chinese />} />
          <Route path="/french" element={<French />} />
          <Route path="/korean" element={<Korean />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
