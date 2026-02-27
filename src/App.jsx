
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import Store from './pages/Store'


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/store' element={<Store/>}/>
          </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
