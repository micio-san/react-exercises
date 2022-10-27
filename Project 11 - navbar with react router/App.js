import React,{useState} from "react"
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Products from "./components/products"
import Services from "./components/services";
import Pricing from "./components/prices"
import About from "./components/about"
import "./style.scss"

function Home() {
  return ( 
     <section>
      <h1 className="section-title">Home</h1> 
      <div className="underline"></div>
     </section> 
     )
}

function App() {
//navbar => home - products - services - pricing - about 

 return (
  <div>  
    <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/about" element={<About/>}/>
       </Routes>
  </div>
 )
}
export default App;