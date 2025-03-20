import { useState } from 'react'

import './App.css'

import { Routes, Route } from "react-router-dom";
import Home from './component/Home/Homepage';
import Aboutus from './component/AboutUs/Abouts';
import Services from './component/services/Services';
import Testimonials from './component/Testimonials/Testimonials';
import Product from './component/product/Product';
import ProductDetailsPage from './component/product/ProductDetailPage';

function App() {

  return (
    <Routes>
     <Route path="/" element={<Home/>} />
    <Route path="/about-us" element={<Aboutus/>} /> 
    <Route path = "/services" element = {<Services/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path="/testimonials" element={<Testimonials />} />
    <Route path="/product/:id" element={<ProductDetailsPage/>} />
  </Routes>
  
  )
}

export default App
