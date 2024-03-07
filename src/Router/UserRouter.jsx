import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import UserSignup from '../Pages/UserSignup'
import UserLogin from '../Pages/UserLogin'
import VerifyOtp from '../Pages/VerifyOtp'
import Forgetpass from '../Pages/Forgetpass'
import ResetpassOtp from '../Pages/ResetpassOtp'

function RouterHome() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signup" element={<UserSignup />}></Route>
        <Route path="/login" element={<UserLogin />}></Route>
        <Route path="/otp" element={<VerifyOtp />}></Route>
        <Route path="/resetotp" element={<ResetpassOtp />}></Route>
        <Route path="/resetpass" element={<Forgetpass />}></Route>
      </Routes>
    </div>
  )
}

export default RouterHome
