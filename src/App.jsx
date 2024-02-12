import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import RouterHome from './Router/RouterHome'


function App() {
  return (
    <div>
      <BrowserRouter>
      <RouterHome/>
      </BrowserRouter>
    </div>
  )
}

export default App
