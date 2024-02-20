import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRouter from './Router/UserRouter'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element ={<UserRouter/>} ></Route>
        {/* <Route path=""></Route>
        <Route path=""></Route>
        <Route path=""></Route>
        <Route path=""></Route> */}

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
