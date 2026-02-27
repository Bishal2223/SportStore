
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Categories from './components/Categories'
import PromoSec from './components/PromoSec'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Categories/>
      <PromoSec/>
      <Footer/>
    </div>
  )
}

export default App
