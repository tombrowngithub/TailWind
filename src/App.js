import React from 'react';
import './style.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Support from "./components/Support";
import AllInOne from "./components/AllInOne";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
export default function App() {
    return (
        <div className="App">
           <Navbar/>
            <Hero/>
            <About/>
            <Support/>
            <AllInOne/>
            <Pricing/>
            <Footer/>
        </div>
    )
}