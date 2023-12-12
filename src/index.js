import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/'
import APropos from './pages/Apropos'
import Logement from './pages/Logement'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'





const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={< APropos />} />
        <Route path="*" element={<Error />} />
        <Route path='/logement/' element= {<Logement/>}/>
      </Routes>
      <Footer/>
    </Router>
);


