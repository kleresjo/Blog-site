import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import BlogSite from './pages/BlogSite';
import Footer from './components/Footer';
import MyAccount from './pages/MyAccount';
import { useState, createContext } from "react";
import './App.css'

export const AppContext = createContext();

const App = () => {
  const [username] = useState("Julia");
  const [inloggad] = useState("Inloggad som: Julia");
  const [utloggad] = useState("Logga in");
  const [username2] = useState("Jens");
  return (
    <div className="App">
    <AppContext.Provider value={{username, inloggad, utloggad, username2}}>
    <BrowserRouter>
    <Navbar  />
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/Blogg" element={<BlogSite />} />
    <Route path="/My-Account" element={<MyAccount />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </AppContext.Provider>
    </div>
  )
}

export default App
