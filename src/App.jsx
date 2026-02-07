import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from './components/homepage'
import Surprise from './components/surprise'


function App() {

  
return(

   <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/valentine" element={<Surprise />} />
    </Routes>
)
}

export default App
