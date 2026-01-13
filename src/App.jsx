import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Map from './components/Map'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Course from './components/Course'
import WhatsAppFloat from './components/WhatsAppFloat'
import { CartProvider } from './context/CartContext'

function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    window.scrollToCourse = () => setView('course');
  }, []);

  return (
    <CartProvider>
      <div className="app">
        <Navbar onHome={() => setView('home')} />
        <main>
          {view === 'home' ? (
            <>
              <Hero />
              <About />
              <Products />
              <Contact />
              <Map />
            </>
          ) : (
            <Course onBack={() => setView('home')} />
          )}
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppFloat />
      </div>
    </CartProvider>
  )
}

export default App
