import { useState } from 'react'

import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from './component/Home/Homepage';
import Aboutus from './component/AboutUs/Abouts';
import Services from './component/services/Services';

function App() {

  return (
    <Routes>
     <Route path="/" element={<Home/>} />
    <Route path="/about-us" element={<Aboutus/>} /> 
    <Route path = "/services" element = {<Services/>}/>
  </Routes>
  
  )
}

export default App
