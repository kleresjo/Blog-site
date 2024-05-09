import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import BlogSite from './pages/BlogSite';
import './App.css'

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar  />
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/Blogg" element={<BlogSite />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
