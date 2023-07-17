import React from 'react'
import "./App.css"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Menu from "./pages/Menu";
import Footer from './components/Footer';
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className='App'>
    <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/menu' element= {<Menu />} />
        <Route path='/about' element= {<About />} />
        <Route path='/contact' element= {<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App