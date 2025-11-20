import { useState } from 'react'
import { SignInPage } from './components/auth/AuthPages';
import { SignUpPage } from './components/auth/AuthPages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignInPage />}></Route>
      <Route path='/signup' element={<SignUpPage />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
