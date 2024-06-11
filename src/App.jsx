import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import BlogSite from './pages/BlogSite';
import Footer from './components/Footer';
import MyAccount from './pages/MyAccount';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { createContext } from "react";
import { PostProvider } from "./context/PostContext";
import { CommentProvider } from './context/CommentContext';
import PrivateRoutes from "./components/PrivateRoutes";
import './App.css'

export const AppContext = createContext();

const App = () => {

  return (
    <div className="App">
    <PostProvider>
    <BrowserRouter>
    <CommentProvider>
    <Navbar  />

    <Routes>
    <Route element={<PrivateRoutes />}>
    <Route path="/" element={<LandingPage />} />
    <Route path ="/Registrera-konto" element={<Register  />} />
    </Route>
    <Route path="/Logga-in" element={<LogIn  />}/>
    <Route element={<PrivateRoutes />}>
    <Route path="/Blogg" element={<BlogSite />} />
    <Route path="/Mitt-konto" element={<MyAccount />} />
    </Route>
    </Routes>

    <Footer />
    </CommentProvider>
    </BrowserRouter>
    </PostProvider>
    </div>
  )
}

export default App
