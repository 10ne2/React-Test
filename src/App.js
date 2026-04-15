import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeView from './views/HomeView'

// rafce 단축키
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App