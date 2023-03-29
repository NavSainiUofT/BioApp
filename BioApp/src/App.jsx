import { useState } from 'react'
import { BrowserRouter, redirect, Route, Routes } from 'react-router-dom';

import Header from './components/header'

import Home from './pages/home';
import About from './pages/about';
import './App.css'

function App() {

  return (
    <>
      

      <BrowserRouter>
      <Header></Header>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>


  )
}

export default App
