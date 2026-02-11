import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from './components/homepage'
import Surprise from './components/surprise'
import LoveTimeline from './components/loveTimeLine';
import CandleDinner from './components/CandelDinner';


function App() {

  
return(

   <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/valentine" element={<Surprise/>} />
      <Route path="/timeLine" element={<LoveTimeline/>} />
      <Route path="/CandleDinner" element={<CandleDinner/>} />

    </Routes>
)
}

export default App
