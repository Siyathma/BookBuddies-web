import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/home/Home';
import LoginSignup from './pages/loginSignup/LoginSignup';
import AboutUs from './pages/aboutUs/AboutUs';
import Profile from './pages/profile/Profile';
import AddBook from './pages/addBook/AddBook';

function App() {


  return (
  <Router>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/login' element={<LoginSignup/>}/>
    <Route path='/add-book' element={<AddBook/>}/>
    <Route path='/about' element={<AboutUs/>}/>

    </Routes>
  </Router>
      
    
  )
}

export default App
