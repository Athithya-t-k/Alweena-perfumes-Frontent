import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import UserSignup from '../Pages/UserSignup'
import UserLogin from '../Pages/UserLogin'

function RouterHome() {
  return (
    <div>
        <Routes>
           <Route path = "/home" element={<Homepage/>}></Route> 
           <Route path = "/signup" element = {<UserSignup/>}></Route>
           <Route path = "/login" element = {<UserLogin/>}></Route>
        </Routes>
    </div>
  )
}

export default RouterHome
