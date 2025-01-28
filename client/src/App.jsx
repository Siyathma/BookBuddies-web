import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/home/Home';
import LoginSignup from './pages/loginSignup/LoginSignup';

function App() {


  return (
  <Router>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/login' element={<LoginSignup/>}/>

    </Routes>
  </Router>
      
    
  )
}

export default App
