import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Projet from './components/Projet'
import Competences from './components/Competences'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app-root">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projets" element={<Projet/>} />
          <Route path="/competences" element={<Competences/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
